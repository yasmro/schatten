import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Semantic → primitive resolution test (#200).
 *
 * Nothing else verifies which primitive a semantic token (`--color-error`,
 * `--color-surface-disabled`, …) actually bottoms out at. A typo in
 * `semantic.css` (`--vermillion-600` → `--vermillion-500`, `gray-100` →
 * `gray-200`) compiles fine, lints fine, and only VRT catches the drift —
 * and the CSS-only consumer surface (#58 Phase 2) has no VRT at all.
 *
 * This test parses `primitives.css` + `semantic.css`, follows every
 * `var(...)` reference to the **leaf primitive** (the variable whose value
 * is a literal, not another `var()`), and asserts that leaf against a
 * hand-maintained fixture derived from
 * `.claude/rules/state-token-guideline.md` and `theme-architecture.md`.
 *
 * Resolving to the *leaf* (not the direct reference) is deliberate: it
 * catches drift at the intermediate alias layer too — e.g. `--color-ring`
 * → `--ink-black` → `--sumi-900`, where re-pointing `--ink-black` would be
 * invisible to a direct-reference check.
 *
 * When a token's resolution intentionally changes, update the fixture
 * below in the same PR (see state-token-guideline.md "Adding a new state
 * semantic").
 */

const TOKENS_DIR = resolve(process.cwd(), 'src/core/tokens')
const primitivesCss = stripComments(readFileSync(resolve(TOKENS_DIR, 'primitives.css'), 'utf8'))
const semanticCss = stripComments(readFileSync(resolve(TOKENS_DIR, 'semantic.css'), 'utf8'))

/* ------------------------------------------------------------------ */
/* CSS parsing                                                         */
/* ------------------------------------------------------------------ */

function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

/** Extract the `{ ... }` body that follows `selector`, brace-balanced. */
function extractBlockBody(css: string, selector: string): string {
  const start = css.indexOf(selector)
  if (start === -1) throw new Error(`selector not found: ${selector}`)
  const braceStart = css.indexOf('{', start)
  let depth = 0
  for (let i = braceStart; i < css.length; i++) {
    if (css[i] === '{') depth++
    else if (css[i] === '}' && --depth === 0) return css.slice(braceStart + 1, i)
  }
  throw new Error(`unbalanced braces for selector: ${selector}`)
}

/** Parse `--name: value;` custom-property declarations from a block body. */
function parseDeclarations(body: string): Map<string, string> {
  const map = new Map<string, string>()
  for (const m of body.matchAll(/(--[\w-]+)\s*:\s*([^;}]+);/g)) {
    map.set(m[1], m[2].trim())
  }
  return map
}

const primitives = parseDeclarations(extractBlockBody(primitivesCss, ':root {'))
const semanticLight = parseDeclarations(extractBlockBody(semanticCss, ':root {'))
const semanticDark = parseDeclarations(extractBlockBody(semanticCss, '.dark {'))
const semanticMediaDark = parseDeclarations(extractBlockBody(semanticCss, ':root:not(.light) {'))

/**
 * A resolution scope: primitives + semantic-light, with semantic-dark
 * overlaid for dark mode. Theme-scale tokens are intentionally absent from
 * the `.dark` block, so dark mode falls back to the `:root` (light) value —
 * this map models that fallback by layering, not replacing.
 */
const lightScope = new Map([...primitives, ...semanticLight])
const darkScope = new Map([...primitives, ...semanticLight, ...semanticDark])

/**
 * Follow `var(...)` references to the leaf primitive (the variable whose
 * value is a literal, not another `var()`).
 *
 * Only the bare single-reference form `var(--x)` is recognised as a chain
 * link. Any other `var()` shape — a fallback (`var(--x, …)`), multiple
 * references, a calc, … — throws instead of being silently treated as a
 * leaf, so an unhandled form fails loud rather than mis-resolving to the
 * semantic name itself.
 */
function resolveToPrimitive(varName: string, scope: Map<string, string>): string {
  const seen = new Set<string>()
  let current = varName
  for (;;) {
    if (seen.has(current)) throw new Error(`cyclic var() chain at ${current}`)
    seen.add(current)
    const value = scope.get(current)
    if (value === undefined) throw new Error(`unresolved var: ${current}`)
    const ref = value.match(/^var\(\s*(--[\w-]+)\s*\)$/)
    if (ref) {
      current = ref[1]
      continue
    }
    if (value.includes('var(')) {
      throw new Error(`unexpected var() form for ${current}: "${value}"`)
    }
    return current.replace(/^--/, '')
  }
}

const inLight = (token: string) => resolveToPrimitive(`--color-${token}`, lightScope)
const inDark = (token: string) => resolveToPrimitive(`--color-${token}`, darkScope)

/* ------------------------------------------------------------------ */
/* Fixtures — expected leaf primitive per token, per mode               */
/* ------------------------------------------------------------------ */

/** 4-token interactive states. base / hover / foreground / subtle. */
const INTERACTIVE_STATE = {
  error: {
    light: { base: 'red-600', hover: 'red-700', foreground: 'paper-white', subtle: 'red-50' },
    dark: {
      base: 'red-500',
      hover: 'red-400',
      foreground: 'paper-white-inverted',
      subtle: 'red-900',
    },
  },
  success: {
    light: { base: 'green-600', hover: 'green-700', foreground: 'paper-white', subtle: 'green-50' },
    dark: {
      base: 'green-500',
      hover: 'green-400',
      foreground: 'paper-white-inverted',
      subtle: 'green-900',
    },
  },
  warning: {
    light: { base: 'amber-600', hover: 'amber-700', foreground: 'paper-white', subtle: 'amber-50' },
    dark: {
      base: 'amber-500',
      hover: 'amber-400',
      foreground: 'paper-white-inverted',
      subtle: 'amber-900',
    },
  },
  info: {
    light: { base: 'blue-600', hover: 'blue-700', foreground: 'paper-white', subtle: 'blue-50' },
    dark: {
      base: 'blue-500',
      hover: 'blue-400',
      foreground: 'paper-white-inverted',
      subtle: 'blue-900',
    },
  },
  // `destructive` shares the `red` primitive with `error` but is a distinct
  // semantic (action intent vs. form state) — see state-token-guideline.md.
  destructive: {
    light: { base: 'red-600', hover: 'red-700', foreground: 'paper-white', subtle: 'red-50' },
    dark: {
      base: 'red-500',
      hover: 'red-400',
      foreground: 'paper-white-inverted',
      subtle: 'red-900',
    },
  },
} as const

/** Non-interactive states — no `hover` slot, no 4-token shape. */
const NON_INTERACTIVE_STATE = {
  light: {
    'surface-disabled': 'gray-100',
    'foreground-disabled': 'gray-500',
    'border-disabled': 'gray-200',
    'surface-readonly': 'alabaster-100',
    'border-readonly': 'gray-200',
  },
  dark: {
    'surface-disabled': 'gray-800',
    // foreground-disabled is intentionally identical light/dark (gray-500).
    'foreground-disabled': 'gray-500',
    'border-disabled': 'gray-700',
    'surface-readonly': 'alabaster-800',
    'border-readonly': 'gray-700',
  },
} as const

/** Mode-owned base layer: surfaces, foreground tiers, borders, ring. */
const MODE_LAYER = {
  light: {
    background: 'paper-warm',
    surface: 'paper-white',
    'surface-hover': 'alabaster-200',
    foreground: 'sumi-900',
    'foreground-muted': 'sumi-400',
    'foreground-subtle': 'sumi-300',
    solid: 'alabaster-700',
    'solid-hover': 'alabaster-900',
    'solid-foreground': 'alabaster-100',
    'solid-foreground-hover': 'alabaster-300',
    border: 'gray-200',
    'border-strong': 'sumi-900',
    ring: 'sumi-900',
    'ring-offset': 'paper-warm',
    'inverted-foreground': 'paper-white',
    'inverted-foreground-muted': 'alabaster-300',
    'inverted-foreground-subtle': 'alabaster-400',
  },
  dark: {
    background: 'paper-warm-inverted',
    surface: 'paper-white-inverted',
    'surface-hover': 'paper-cream-inverted',
    foreground: 'alabaster-200',
    'foreground-muted': 'alabaster-500',
    'foreground-subtle': 'alabaster-600',
    solid: 'alabaster-300',
    'solid-hover': 'alabaster-100',
    'solid-foreground': 'alabaster-800',
    'solid-foreground-hover': 'alabaster-700',
    border: 'gray-700',
    'border-strong': 'alabaster-200',
    ring: 'alabaster-200',
    'ring-offset': 'paper-warm-inverted',
    'inverted-foreground': 'paper-white-inverted',
    'inverted-foreground-muted': 'alabaster-700',
    'inverted-foreground-subtle': 'alabaster-600',
  },
} as const

/** Brand-named tokens — 朱 vermillion / 藍 indigo. `-600` light, `-400` dark. */
const BRAND_LAYER = {
  light: {
    vermillion: 'vermillion-600',
    'vermillion-foreground': 'paper-white',
    indigo: 'indigo-600',
    'indigo-foreground': 'paper-white',
  },
  dark: {
    vermillion: 'vermillion-400',
    'vermillion-foreground': 'paper-white-inverted',
    indigo: 'indigo-400',
    'indigo-foreground': 'paper-white-inverted',
  },
} as const

const THEME_SCALE_SHADES = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const

/* ------------------------------------------------------------------ */
/* Tests                                                               */
/* ------------------------------------------------------------------ */

describe('semantic.css token resolution', () => {
  describe('theme scale', () => {
    for (const shade of THEME_SCALE_SHADES) {
      it(`--color-theme-${shade} resolves to blue-${shade} in light mode`, () => {
        expect(inLight(`theme-${shade}`)).toBe(`blue-${shade}`)
      })
    }

    // The `.dark` block does not redeclare the theme scale — it is
    // Special-owned (theme-architecture.md), so dark mode falls back to the
    // `:root` (blue-*) value. This asserts that fallback holds.
    for (const shade of THEME_SCALE_SHADES) {
      it(`--color-theme-${shade} falls back to blue-${shade} in dark mode`, () => {
        expect(inDark(`theme-${shade}`)).toBe(`blue-${shade}`)
      })
    }
  })

  describe('mode-owned base layer', () => {
    for (const [token, primitive] of Object.entries(MODE_LAYER.light)) {
      it(`--color-${token} resolves to ${primitive} in light mode`, () => {
        expect(inLight(token)).toBe(primitive)
      })
    }
    for (const [token, primitive] of Object.entries(MODE_LAYER.dark)) {
      it(`--color-${token} resolves to ${primitive} in dark mode`, () => {
        expect(inDark(token)).toBe(primitive)
      })
    }
  })

  describe('brand-named tokens', () => {
    for (const [token, primitive] of Object.entries(BRAND_LAYER.light)) {
      it(`--color-${token} resolves to ${primitive} in light mode`, () => {
        expect(inLight(token)).toBe(primitive)
      })
    }
    for (const [token, primitive] of Object.entries(BRAND_LAYER.dark)) {
      it(`--color-${token} resolves to ${primitive} in dark mode`, () => {
        expect(inDark(token)).toBe(primitive)
      })
    }
  })

  describe('interactive state tokens (4-token shape)', () => {
    for (const [state, modes] of Object.entries(INTERACTIVE_STATE)) {
      describe(state, () => {
        for (const mode of ['light', 'dark'] as const) {
          const slots = modes[mode]
          const resolveIn = mode === 'light' ? inLight : inDark
          it(`--color-${state} resolves to ${slots.base} in ${mode} mode`, () => {
            expect(resolveIn(state)).toBe(slots.base)
          })
          it(`--color-${state}-hover resolves to ${slots.hover} in ${mode} mode`, () => {
            expect(resolveIn(`${state}-hover`)).toBe(slots.hover)
          })
          it(`--color-${state}-foreground resolves to ${slots.foreground} in ${mode} mode`, () => {
            expect(resolveIn(`${state}-foreground`)).toBe(slots.foreground)
          })
          it(`--color-${state}-subtle resolves to ${slots.subtle} in ${mode} mode`, () => {
            expect(resolveIn(`${state}-subtle`)).toBe(slots.subtle)
          })
        }
      })
    }
  })

  describe('non-interactive state tokens (disabled / readOnly)', () => {
    for (const [token, primitive] of Object.entries(NON_INTERACTIVE_STATE.light)) {
      it(`--color-${token} resolves to ${primitive} in light mode`, () => {
        expect(inLight(token)).toBe(primitive)
      })
    }
    for (const [token, primitive] of Object.entries(NON_INTERACTIVE_STATE.dark)) {
      it(`--color-${token} resolves to ${primitive} in dark mode`, () => {
        expect(inDark(token)).toBe(primitive)
      })
    }
  })

  describe('integrity', () => {
    it('resolves every --color-* token in :root without a dangling var()', () => {
      for (const name of semanticLight.keys()) {
        if (!name.startsWith('--color-')) continue
        expect(() => resolveToPrimitive(name, lightScope), name).not.toThrow()
      }
    })

    it('resolves every --color-* token in .dark without a dangling var()', () => {
      for (const name of semanticDark.keys()) {
        if (!name.startsWith('--color-')) continue
        expect(() => resolveToPrimitive(name, darkScope), name).not.toThrow()
      }
    })

    // The `@media (prefers-color-scheme: dark)` and `.dark` blocks must stay
    // byte-for-byte equivalent — a drift between them means OS-driven dark
    // mode and explicit `.dark` would render differently.
    it('keeps the @media dark block identical to the .dark block', () => {
      expect(Object.fromEntries(semanticMediaDark)).toEqual(Object.fromEntries(semanticDark))
    })

    // Guards the resolver itself: an unhandled `var()` shape (fallback,
    // multi-ref, …) must throw, not silently resolve to the semantic name —
    // otherwise the dangling-var sweep above would pass on a broken token.
    it('throws on an unrecognised var() form instead of mis-resolving', () => {
      const scope = new Map([['--color-foo', 'var(--bar, #fff)']])
      expect(() => resolveToPrimitive('--color-foo', scope)).toThrow(/unexpected var\(\) form/)
    })
  })
})
