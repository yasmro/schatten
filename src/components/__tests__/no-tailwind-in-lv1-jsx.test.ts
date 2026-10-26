/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/*
 * No Tailwind utilities in lv1 JSX (#575).
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
 * the React components.
 *
 * Sources are read as TEXT (never imported), the same approach as
 * state-color-inheritance.test.ts. Two places can carry a class literal:
 *
 *   - `className="…"` JSX attributes
 *   - string literals passed to `cn(…)`
 *
 * Every class token in either must start with `st-`. Consumer-supplied
 * `className` props flow through as identifiers, not literals, so they are
 * never scanned.
 */

const here = dirname(fileURLToPath(import.meta.url))

const sourcePaths = Object.keys(import.meta.glob('../lv1/**/*.tsx')).filter(
  (path) => !/\.(stories|test|parity\.stories)\.tsx$/.test(path),
)

/** Strip comments so TSDoc examples (`className="h-4 w-[200px]"`) are not scanned. */
function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
}

/** The argument text of every `cn(…)` call, with nested parens balanced. */
function cnArguments(source: string): string[] {
  const calls: string[] = []
  const callPattern = /\bcn\(/g
  let match = callPattern.exec(source)
  while (match !== null) {
    let depth = 1
    let end = match.index + match[0].length
    while (end < source.length && depth > 0) {
      if (source[end] === '(') depth++
      else if (source[end] === ')') depth--
      end++
    }
    calls.push(source.slice(match.index + match[0].length, end - 1))
    match = callPattern.exec(source)
  }
  return calls
}

/** Class literals in one source file. */
function classLiterals(source: string): string[] {
  const code = stripComments(source)
  const literals: string[] = []
  for (const match of code.matchAll(/className="([^"]*)"/g)) literals.push(match[1])
  for (const args of cnArguments(code)) {
    // Skip comparison operands (`orientation === 'vertical' && …`) — they are
    // prop values, not classes.
    for (const match of args.matchAll(/'([^']*)'|"([^"]*)"/g)) {
      if (/[=!]==\s*$/.test(args.slice(0, match.index))) continue
      literals.push(match[1] ?? match[2])
    }
  }
  return literals
}

/** Tokens that are not part of the `.st-*` class API. */
function nonSchattenTokens(source: string): string[] {
  return classLiterals(source)
    .flatMap((literal) => literal.split(/\s+/))
    .filter((token) => token !== '' && !token.startsWith('st-'))
}

describe('no Tailwind utilities in lv1 JSX (drift guard)', () => {
  it('scans the lv1 component sources', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(sourcePaths.length).toBeGreaterThan(20)
  })

  it('emits only st-* class literals from every lv1 component', () => {
    const offenders: Record<string, string[]> = {}
    for (const path of sourcePaths) {
      const tokens = nonSchattenTokens(readFileSync(resolve(here, path), 'utf-8'))
      if (tokens.length > 0) offenders[path.replace('../lv1/', '')] = tokens
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

  it('ignores class examples inside comments', () => {
    const documented = `
      /** e.g. \`className="h-4 w-[200px]"\` */
      // <div className="flex gap-2" />
      <div className="st-skeleton" />
    `
    expect(nonSchattenTokens(documented)).toEqual([])
  })
})
