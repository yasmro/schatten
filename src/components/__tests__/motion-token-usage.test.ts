/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/*
 * Motion token usage guard (#630).
 *
 * Component CSS times its motion through the semantic `--motion-*` layer
 * (animation.css), always with a fallback that repeats the value —
 * `var(--motion-feedback, 200ms)` — because the per-component CSS subpaths
 * ship no tokens. Four rules keep that honest, each read from the
 * stylesheets as text (the same regex-over-source approach as
 * state-color-inheritance.test.ts):
 *
 *   1. No literal time in a transition / animation declaration outside a
 *      `var()` fallback. Continuous loops (`infinite` — Spinner, Skeleton)
 *      are a different cadence from enter/exit and stay component-local
 *      (component-architecture.md §7).
 *   2. No direct reference to the `--st-duration-*` / `--st-ease-*` scales:
 *      component CSS picks timing by intent, through `--motion-*`.
 *   3. Every `var(--motion-*, <fallback>)` fallback equals the value the
 *      token resolves to in animation.css. A fallback is a copy, so a token
 *      retune would otherwise leave the standalone CSS on the old value.
 *   4. A component with an enter/exit animation answers
 *      `prefers-reduced-motion`.
 *
 * jsdom loads no stylesheet, so none of this is observable from a rendered
 * component, and VRT pauses animations — this file is the only gate.
 */

const here = dirname(fileURLToPath(import.meta.url))

const cssPaths = [
  ...Object.keys(import.meta.glob('../lv1/**/*.css')),
  ...Object.keys(import.meta.glob('../lv2/**/*.css')),
]

const ANIMATION_CSS = readFileSync(resolve(here, '../../core/tokens/animation.css'), 'utf8')

const TIMING_PROPERTY =
  /^(?:transition|transition-duration|transition-delay|animation|animation-duration|animation-delay)$/
const LITERAL_TIME = /(?<![\w.-])\d+(?:\.\d+)?m?s\b/

function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '')
}

interface Declaration {
  file: string
  property: string
  value: string
}

/** Every `property: value` pair inside a rule block (innermost blocks only). */
function declarations(file: string, source: string): Declaration[] {
  const out: Declaration[] = []
  for (const [, body] of stripComments(source).matchAll(/\{([^{}]*)\}/g)) {
    for (const part of body.split(';')) {
      const colon = part.indexOf(':')
      if (colon === -1) continue
      const property = part.slice(0, colon).trim()
      const value = part
        .slice(colon + 1)
        .trim()
        .replace(/\s+/g, ' ')
      if (property) out.push({ file, property, value })
    }
  }
  return out
}

interface VarCall {
  name: string
  fallback: string | undefined
  start: number
  end: number
}

/** `var(--name[, fallback])` calls at the top level of `value`, parentheses balanced. */
function varCalls(value: string): VarCall[] {
  const calls: VarCall[] = []
  let index = value.indexOf('var(')
  while (index !== -1) {
    let depth = 0
    let end = index + 3
    for (; end < value.length; end++) {
      if (value[end] === '(') depth++
      else if (value[end] === ')') {
        depth--
        if (depth === 0) break
      }
    }
    const inner = value.slice(index + 4, end)
    const comma = inner.indexOf(',')
    calls.push({
      name: (comma === -1 ? inner : inner.slice(0, comma)).trim(),
      fallback: comma === -1 ? undefined : inner.slice(comma + 1).trim(),
      start: index,
      end: end + 1,
    })
    index = value.indexOf('var(', end + 1)
  }
  return calls
}

function withoutVars(value: string): string {
  let out = value
  for (const call of varCalls(value).reverse()) {
    out = out.slice(0, call.start) + out.slice(call.end)
  }
  return out
}

/** `--name: value` declarations from animation.css, resolved through var() chains. */
const tokenValues = new Map<string, string>()
for (const [, name, value] of stripComments(ANIMATION_CSS).matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
  tokenValues.set(name, value.trim())
}
function resolveToken(name: string): string | undefined {
  let value = tokenValues.get(name)
  for (let hops = 0; value?.startsWith('var(') && hops < 8; hops++) {
    value = tokenValues.get(varCalls(value)[0].name)
  }
  return value
}

const normalize = (value: string) => value.replace(/\s+/g, '')

const sources = cssPaths.map((path) => ({
  file: path.replace(/^\.\.\//, ''),
  source: readFileSync(resolve(here, path), 'utf8'),
}))
const timing = sources
  .flatMap(({ file, source }) => declarations(file, source))
  .filter((d) => TIMING_PROPERTY.test(d.property))

describe('motion token usage in component CSS', () => {
  it('scans the component stylesheets', () => {
    expect(timing.length).toBeGreaterThan(20)
  })

  it('has no literal time outside a var() fallback, except infinite loops', () => {
    const findings = timing
      .filter((d) => !/\binfinite\b/.test(d.value))
      .filter((d) => LITERAL_TIME.test(withoutVars(d.value)))
      .map((d) => `${d.file}: ${d.property}: ${d.value}`)
    expect(findings).toEqual([])
  })

  it('references the --motion-* layer, never --st-duration-* / --st-ease-* directly', () => {
    const findings = sources
      .filter(({ source }) => /var\(\s*--st-(?:duration|ease)-/.test(stripComments(source)))
      .map(({ file }) => file)
    expect(findings).toEqual([])
  })

  it('repeats the token value in every --motion-* fallback', () => {
    const calls = sources.flatMap(({ file, source }) =>
      declarations(file, source).flatMap((d) =>
        varCalls(d.value)
          .filter((call) => call.name.startsWith('--motion-'))
          .map((call) => ({ file, ...call })),
      ),
    )
    expect(calls.length).toBeGreaterThan(20)
    const findings = calls
      .filter((call) => {
        const expected = resolveToken(call.name)
        return (
          expected === undefined ||
          call.fallback === undefined ||
          normalize(call.fallback) !== normalize(expected)
        )
      })
      .map(
        (call) =>
          `${call.file}: var(${call.name}, ${call.fallback}) — token resolves to ${resolveToken(call.name)}`,
      )
    expect(findings).toEqual([])
  })

  it('pairs every enter/exit animation with a prefers-reduced-motion rule', () => {
    const animated = new Set(
      timing
        .filter((d) => d.property === 'animation' && d.value !== 'none')
        .filter((d) => !/\binfinite\b/.test(d.value))
        .map((d) => d.file),
    )
    expect(animated.size).toBeGreaterThan(0)
    const findings = sources
      .filter(({ file }) => animated.has(file))
      .filter(({ source }) => !/prefers-reduced-motion:\s*reduce/.test(source))
      .map(({ file }) => file)
    expect(findings).toEqual([])
  })
})
