/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as ts from 'typescript'
import { describe, expect, it } from 'vitest'

/*
 * No Tailwind utilities in component JSX (#575).
 *
 * Contract: component-architecture.md §7 "No Tailwind utilities in component
 * JSX". Since #317 `dist/schatten.css` is Tailwind-free and consumers have no
 * Tailwind, so a utility class written into a component's JSX simply does not
 * exist at runtime. #575 is how that shipped: Dialog's footer ordered its
 * buttons with `order-1 sm:order-3` / `sm:mr-auto`, and consumers got the raw
 * DOM order.
 *
 * This guard exists because no other gate sees that bug class: jsdom loads no
 * stylesheet, Storybook (and so every component VRT) loads Tailwind through
 * `globals.css`, and `CSSApiDist.vrt.spec.ts` renders vanilla fixtures, not
 * the React components. lv2 is in scope too: it is React-only and never
 * reaches the dist VRT at all (lv2-composition-guideline.md).
 *
 * Sources are read as TEXT (never imported) and walked through the
 * TypeScript AST, the same approach as CSSApi.coverage.test.ts. Two surfaces
 * are scanned:
 *
 *   1. Component sources (lv1 / lv2 `.tsx`) — `className` attributes and
 *      every `cn(…)` call, wherever it is.
 *   2. CVA definitions (`src/variants/*.ts`) — the base class, every variant
 *      option value, and `compoundVariants` `class` / `className`. CVA output
 *      is public API and is documented as `.st-*` only
 *      (api-stability.md §CVA output stability).
 *
 * Inside a class expression, a literal counts as a class only where it can
 * reach the class string:
 *
 *   - `a ? 'x' : 'y'`      → both branches (the condition is skipped)
 *   - `cond && 'x'`        → the right operand only
 *   - `a === 'vertical'`   → nothing (a comparison yields a boolean)
 *   - `cn({ x: cond })`    → the keys (clsx object form); values are conditions
 *   - `variants({ … })`    → nothing (its output is covered by surface 2)
 *   - `` `st-a--${v}` ``   → the static text only; a token that begins inside
 *                            `${…}` is unknowable and skipped
 *
 * Consumer-supplied `className` props flow through as identifiers, not
 * literals, so they are never scanned. Comments are not part of the AST, so
 * TSDoc examples (`className="h-4 w-[200px]"`) are not scanned either.
 *
 * Not covered: class-bearing props under another name (`classNames={{ … }}`
 * on Sonner's Toaster). Add them here if a component starts passing
 * literals through one.
 */

const here = dirname(fileURLToPath(import.meta.url))

const componentPaths = Object.keys(import.meta.glob(['../lv1/**/*.tsx', '../lv2/**/*.tsx'])).filter(
  (path) => !/\.(stories|test)\.tsx$/.test(path),
)

const variantPaths = Object.keys(import.meta.glob('../../variants/*.ts')).filter(
  (path) => !path.endsWith('/index.ts'),
)

/** Placeholder for a `${…}` interpolation inside a template literal. */
const HOLE = '\u0000'

function parse(source: string, kind: ts.ScriptKind): ts.SourceFile {
  return ts.createSourceFile('source', source, ts.ScriptTarget.Latest, true, kind)
}

function visit(node: ts.Node, fn: (node: ts.Node) => void): void {
  fn(node)
  ts.forEachChild(node, (child) => visit(child, fn))
}

function isCall(node: ts.Node, name: string): node is ts.CallExpression {
  return (
    ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === name
  )
}

/** Static text of a string / template literal, or undefined if `node` is not one. */
function literalText(node: ts.Node): string | undefined {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  if (ts.isTemplateExpression(node)) {
    return node.head.text + node.templateSpans.map((span) => HOLE + span.literal.text).join('')
  }
  return undefined
}

const PASS_THROUGH = new Set([
  ts.SyntaxKind.BarBarToken,
  ts.SyntaxKind.QuestionQuestionToken,
  ts.SyntaxKind.PlusToken,
])

/** Literals in a class expression that can end up in the class string. */
function classLiterals(node: ts.Node): string[] {
  const text = literalText(node)
  if (text !== undefined) return [text]
  if (ts.isParenthesizedExpression(node) || ts.isJsxExpression(node)) {
    return node.expression ? classLiterals(node.expression) : []
  }
  if (ts.isConditionalExpression(node)) {
    return [...classLiterals(node.whenTrue), ...classLiterals(node.whenFalse)]
  }
  if (ts.isBinaryExpression(node)) {
    const op = node.operatorToken.kind
    if (op === ts.SyntaxKind.AmpersandAmpersandToken) return classLiterals(node.right)
    if (PASS_THROUGH.has(op)) return [...classLiterals(node.left), ...classLiterals(node.right)]
    return []
  }
  if (ts.isArrayLiteralExpression(node)) return node.elements.flatMap(classLiterals)
  if (ts.isObjectLiteralExpression(node)) {
    // clsx object form: `{ 'st-x': cond }` — the key is the class.
    return node.properties.flatMap((property) => {
      if (!ts.isPropertyAssignment(property) && !ts.isShorthandPropertyAssignment(property))
        return []
      const name = property.name
      return ts.isIdentifier(name) || ts.isStringLiteral(name) ? [name.text] : []
    })
  }
  if (isCall(node, 'cn')) return node.arguments.flatMap(classLiterals)
  return []
}

/** Class literals in one component source (`className` attributes + `cn(…)` calls). */
function componentClassLiterals(source: string): string[] {
  const literals: string[] = []
  visit(parse(source, ts.ScriptKind.TSX), (node) => {
    if (ts.isJsxAttribute(node) && node.name.getText() === 'className' && node.initializer) {
      literals.push(...classLiterals(node.initializer))
    } else if (isCall(node, 'cn')) {
      // Covers `cn(…)` outside JSX too (e.g. a class string built for Sonner).
      // A `cn(…)` inside `className={…}` is collected twice; tokens are deduplicated.
      literals.push(...node.arguments.flatMap(classLiterals))
    }
  })
  return literals
}

function property(object: ts.ObjectLiteralExpression, name: string): ts.Expression | undefined {
  for (const p of object.properties) {
    if (ts.isPropertyAssignment(p) && p.name.getText().replace(/['"]/g, '') === name)
      return p.initializer
  }
  return undefined
}

/** Class literals in one CVA definition file, plus how many `cva(…)` calls it holds. */
function variantClassLiterals(source: string): { literals: string[]; calls: number } {
  const literals: string[] = []
  let calls = 0
  visit(parse(source, ts.ScriptKind.TS), (node) => {
    if (!isCall(node, 'cva')) return
    calls++
    const [base, config] = node.arguments
    if (base) literals.push(...classLiterals(base))
    if (!config || !ts.isObjectLiteralExpression(config)) return
    const variants = property(config, 'variants')
    if (variants && ts.isObjectLiteralExpression(variants)) {
      for (const axis of variants.properties) {
        if (!ts.isPropertyAssignment(axis) || !ts.isObjectLiteralExpression(axis.initializer))
          continue
        for (const option of axis.initializer.properties) {
          if (ts.isPropertyAssignment(option)) literals.push(...classLiterals(option.initializer))
        }
      }
    }
    const compounds = property(config, 'compoundVariants')
    if (compounds && ts.isArrayLiteralExpression(compounds)) {
      for (const compound of compounds.elements) {
        if (!ts.isObjectLiteralExpression(compound)) continue
        for (const key of ['class', 'className']) {
          const value = property(compound, key)
          if (value) literals.push(...classLiterals(value))
        }
      }
    }
  })
  return { literals, calls }
}

/** Tokens that are not part of the `.st-*` class API (deduplicated). */
function nonSchattenTokens(literals: string[]): string[] {
  const tokens = literals
    .flatMap((literal) => literal.split(/\s+/))
    .filter((token) => token !== '' && !token.startsWith(HOLE) && !token.startsWith('st-'))
  return [...new Set(tokens)]
}

const componentTokens = (source: string) => nonSchattenTokens(componentClassLiterals(source))
const variantTokens = (source: string) => nonSchattenTokens(variantClassLiterals(source).literals)

function offenders(paths: string[], scan: (source: string) => string[]): Record<string, string[]> {
  const found: Record<string, string[]> = {}
  for (const path of paths) {
    const tokens = scan(readFileSync(resolve(here, path), 'utf-8'))
    if (tokens.length > 0) found[path.replace(/^(\.\.\/)+/, '')] = tokens
  }
  return found
}

describe('no Tailwind utilities in component JSX (drift guard)', () => {
  it('scans the component sources', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(componentPaths.length).toBeGreaterThan(20)
  })

  it('emits only st-* class literals from every lv1 / lv2 component', () => {
    // A token here would not exist in the Tailwind-free dist. Move the rule
    // into the component's `.css` under a `.st-*` class instead.
    expect(offenders(componentPaths, componentTokens)).toEqual({})
  })

  it('catches the pre-#575 Dialog footer shape', () => {
    const preFix = `<>
      <Button className="order-1 sm:order-3">Save</Button>
      <Separator className={cn('st-separator', side === 'top' && 'my-2 sm:hidden')} />
    </>`
    expect(componentTokens(preFix)).toEqual(['order-1', 'sm:order-3', 'my-2', 'sm:hidden'])
  })

  it('catches utilities in a className expression outside cn()', () => {
    const ternary = `<div className={isOpen ? 'st-panel' : 'hidden'} />`
    // biome-ignore lint/suspicious/noTemplateCurlyInString: source text under test, not a template
    const template = '<div className={`st-panel ${extra} mt-4`} />'
    expect(componentTokens(ternary)).toEqual(['hidden'])
    expect(componentTokens(template)).toEqual(['mt-4'])
  })

  it('catches the keys of a clsx object, quoted or not', () => {
    const object = `<div className={cn({ hidden: !isOpen, 'mt-4': isSpaced, 'st-x--on': isOn })} />`
    expect(componentTokens(object)).toEqual(['hidden', 'mt-4'])
  })

  it('catches cn() outside JSX', () => {
    const facade = `const classes = cn('st-toast', isLoading && 'opacity-50')`
    expect(componentTokens(facade)).toEqual(['opacity-50'])
  })

  it('checks only the static part of a template literal', () => {
    // biome-ignore lint/suspicious/noTemplateCurlyInString: source text under test, not a template
    const interpolated = '<th className={cn(`st-table__head--${align}`, `${prefix}-x`)} />'
    expect(componentTokens(interpolated)).toEqual([])
  })

  it('ignores comparison operands, conditions and variant-function arguments', () => {
    const props = `<div className={cn(
      variants({ size: 'md' }),
      tone === 'error' && 'st-x--error',
      (mode ?? 'auto') === 'dark' ? 'st-x--dark' : 'st-x--light',
    )} />`
    expect(componentTokens(props)).toEqual([])
  })

  it('ignores class examples inside comments', () => {
    const documented = `<>
      {/* <div className="flex gap-2" /> */}
      <div className="st-skeleton" />
    </>
    /** e.g. \`className="h-4 w-[200px]"\` */
    // <div className="flex gap-2" />`
    expect(componentTokens(documented)).toEqual([])
  })
})

describe('CVA definitions emit only st-* classes (drift guard)', () => {
  it('scans every cva() call in src/variants', () => {
    // Guard against a glob typo or a parse miss silently scanning nothing.
    const calls = variantPaths.reduce(
      (sum, path) => sum + variantClassLiterals(readFileSync(resolve(here, path), 'utf-8')).calls,
      0,
    )
    expect(calls).toBeGreaterThan(15)
  })

  it('maps every variant option to st-* classes', () => {
    expect(offenders(variantPaths, variantTokens)).toEqual({})
  })

  it('catches a utility in the base, an option, or a compound variant', () => {
    const cvaSource = `
      export const v = cva('st-x inline-flex', {
        variants: {
          size: { sm: 'st-x--sm h-8', md: 'st-x--md' },
          wrap: { true: 'st-x--wrap', false: '' },
        },
        compoundVariants: [{ size: 'sm', wrap: true, class: 'px-2' }],
        defaultVariants: { size: 'md', wrap: false },
      })
    `
    expect(variantTokens(cvaSource)).toEqual(['inline-flex', 'h-8', 'px-2'])
  })

  it('ignores defaultVariants and compoundVariants conditions', () => {
    const cvaSource = `
      export const v = cva('st-x', {
        variants: { tone: { error: 'st-x--error', info: 'st-x--info' } },
        compoundVariants: [{ tone: 'error', className: 'st-x--loud' }],
        defaultVariants: { tone: 'info' },
      })
    `
    expect(variantTokens(cvaSource)).toEqual([])
  })
})
