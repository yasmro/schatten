/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
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
 * Sources are read as TEXT (never imported), the same approach as
 * state-color-inheritance.test.ts. Three places can carry a class literal:
 *
 *   - `className="…"` JSX attributes
 *   - string / template literals inside a `className={…}` expression
 *   - string / template literals passed to `cn(…)`, wherever it is called
 *
 * Every class token must start with `st-`. Two kinds of literal are not
 * classes and are skipped: comparison operands (`orientation === 'vertical'`)
 * and object property values (`variants({ size: 'md' })`). A template literal
 * contributes its static text only; a token that begins inside `${…}` is
 * unknowable and skipped (`st-table__head--${align}` is checked as
 * `st-table__head--…`). Consumer-supplied `className` props flow through as
 * identifiers, not literals, so they are never scanned.
 */

const here = dirname(fileURLToPath(import.meta.url))

const sourcePaths = Object.keys(import.meta.glob(['../lv1/**/*.tsx', '../lv2/**/*.tsx'])).filter(
  (path) => !/\.(stories|test)\.tsx$/.test(path),
)

/** Placeholder for a `${…}` interpolation inside a template literal. */
const HOLE = '\u0000'

/** Strip comments so TSDoc examples (`className="h-4 w-[200px]"`) are not scanned. */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
}

/** Text between `open` (already consumed) and its balanced `close`. */
function balanced(source: string, start: number, open: string, close: string): string {
  let depth = 1
  let end = start
  while (end < source.length && depth > 0) {
    if (source[end] === open) depth++
    else if (source[end] === close) depth--
    end++
  }
  return source.slice(start, end - 1)
}

/** Every `className={…}` expression and every `cn(…)` argument list. */
function classExpressions(code: string): string[] {
  const expressions: string[] = []
  for (const match of code.matchAll(/className=\{/g)) {
    expressions.push(balanced(code, match.index + match[0].length, '{', '}'))
  }
  for (const match of code.matchAll(/\bcn\(/g)) {
    expressions.push(balanced(code, match.index + match[0].length, '(', ')'))
  }
  return expressions
}

/** String / template literals in an expression that are used as classes. */
function literalsIn(expression: string): string[] {
  const literals: string[] = []
  for (const match of expression.matchAll(/'([^']*)'|"([^"]*)"|`([^`]*)`/g)) {
    const before = expression.slice(0, match.index)
    // `orientation === 'vertical' && …` — a prop value, not a class.
    if (/[=!]==?\s*$/.test(before)) continue
    // `variants({ size: 'md' })` — an object property value, not a class.
    if (/[{,]\s*[A-Za-z_$][\w$]*\s*:\s*$/.test(before)) continue
    const template = match[3]
    literals.push(
      template === undefined ? (match[1] ?? match[2]) : template.replace(/\$\{[^}]*\}/g, HOLE),
    )
  }
  return literals
}

/** Class literals in one source file. */
function classLiterals(source: string): string[] {
  const code = stripComments(source)
  const literals: string[] = []
  for (const match of code.matchAll(/className="([^"]*)"/g)) literals.push(match[1])
  for (const expression of classExpressions(code)) literals.push(...literalsIn(expression))
  return literals
}

/** Tokens that are not part of the `.st-*` class API (deduplicated). */
function nonSchattenTokens(source: string): string[] {
  const tokens = classLiterals(source)
    .flatMap((literal) => literal.split(/\s+/))
    .filter((token) => token !== '' && !token.startsWith(HOLE) && !token.startsWith('st-'))
  return [...new Set(tokens)]
}

describe('no Tailwind utilities in component JSX (drift guard)', () => {
  it('scans the component sources', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(sourcePaths.length).toBeGreaterThan(20)
  })

  it('emits only st-* class literals from every lv1 / lv2 component', () => {
    const offenders: Record<string, string[]> = {}
    for (const path of sourcePaths) {
      const tokens = nonSchattenTokens(readFileSync(resolve(here, path), 'utf-8'))
      if (tokens.length > 0) offenders[path.replace('../', '')] = tokens
    }
    // A token here would not exist in the Tailwind-free dist. Move the rule
    // into the component's `.css` under a `.st-*` class instead.
    expect(offenders).toEqual({})
  })

  it('catches the pre-#575 Dialog footer shape', () => {
    const preFix = `
      <Button className="order-1 sm:order-3">Save</Button>
      <Separator className={cn('st-separator', side === 'top' && 'my-2 sm:hidden')} />
    `
    expect(nonSchattenTokens(preFix)).toEqual(['order-1', 'sm:order-3', 'my-2', 'sm:hidden'])
  })

  it('catches utilities in a className expression outside cn()', () => {
    const ternary = `<div className={isOpen ? 'st-panel' : 'hidden'} />`
    // biome-ignore lint/suspicious/noTemplateCurlyInString: source text under test, not a template
    const template = '<div className={`st-panel ${extra} mt-4`} />'
    expect(nonSchattenTokens(ternary)).toEqual(['hidden'])
    expect(nonSchattenTokens(template)).toEqual(['mt-4'])
  })

  it('checks only the static part of a template literal', () => {
    // biome-ignore lint/suspicious/noTemplateCurlyInString: source text under test, not a template
    const interpolated = '<th className={cn(`st-table__head--${align}`, `${prefix}-x`)} />'
    expect(nonSchattenTokens(interpolated)).toEqual([])
  })

  it('ignores comparison operands and object property values', () => {
    const props = `<div className={cn(variants({ size: 'md' }), tone === 'error' && 'st-x--error')} />`
    expect(nonSchattenTokens(props)).toEqual([])
  })

  it('ignores class examples inside comments', () => {
    const documented = `
      /** e.g. \`className="h-4 w-[200px]"\` */
      // <div className="flex gap-2" />
      <div className="st-skeleton" />
    `
    expect(nonSchattenTokens(documented)).toEqual([])
  })
})
