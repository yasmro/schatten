import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * fg-on-solid WCAG AA contrast (#150 follow-up).
 *
 * Since #150 the solid family rides the theme ramp — Mode picks the rung,
 * the active Special supplies the ramp. The visual check lives in the
 * Theme Audit story's `Aa` chip, but a ramp retune (e.g. the planned
 * chroma-boost spike) could erode contrast below AA without any VRT
 * baseline failing loudly. This test pins the floor mechanically: every
 * (foreground rung on background rung) pair that solid renders must stay
 * ≥ 4.5:1 (WCAG AA, normal text) in every ramp — the default plus all
 * seasonal Specials — in both Modes.
 *
 * The rung pairs are DERIVED from semantic.css rather than hard-coded, so
 * a future rung change is picked up automatically. Color conversion is
 * exact: OKLCH → OKLab → LMS → linear sRGB → WCAG relative luminance.
 */

const AA_NORMAL_TEXT = 4.5

/* ------------------------------------------------------------------ */
/* CSS parsing                                                         */
/* ------------------------------------------------------------------ */

function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

const read = (path: string) => stripComments(readFileSync(resolve(process.cwd(), path), 'utf8'))

const primitivesCss = read('src/core/tokens/primitives.css')
const semanticCss = read('src/core/tokens/semantic.css')
const seasonalCss = read('src/themes/seasonal/themes.css')

/** Body of the flat top-level block following `selector` (up to the first `}`). */
function blockBody(css: string, selector: string): string {
  const start = css.indexOf(selector)
  if (start === -1) throw new Error(`selector not found: ${selector}`)
  return css.slice(start, css.indexOf('}', start))
}

type Oklch = { l: number; c: number; h: number }

function parseOklch(value: string): Oklch {
  const m = value.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/)
  if (!m) throw new Error(`not a plain oklch() literal: "${value}"`)
  return { l: Number(m[1]), c: Number(m[2]), h: Number(m[3]) }
}

/* ------------------------------------------------------------------ */
/* Rung pairs — derived from semantic.css                              */
/* ------------------------------------------------------------------ */

/**
 * The two (foreground, background) rung pairs a solid surface renders:
 * resting (`solid-foreground` on `solid`) and hovered
 * (`solid-foreground-hover` on `solid-hover`).
 */
function rungPairs(blockSelector: string): ReadonlyArray<readonly [string, string]> {
  const body = blockBody(semanticCss, blockSelector)
  const rung = (token: string): string => {
    const m = body.match(new RegExp(`--color-${token}:\\s*var\\(--color-theme-(\\d+)\\)`))
    if (!m) throw new Error(`--color-${token} does not reference a theme rung in ${blockSelector}`)
    return m[1]
  }
  return [
    [rung('solid-foreground'), rung('solid')],
    [rung('solid-foreground-hover'), rung('solid-hover')],
  ] as const
}

const PAIRS = {
  light: rungPairs(':root {'),
  dark: rungPairs('.dark {'),
} as const

/* ------------------------------------------------------------------ */
/* Ramps — default (via semantic.css → primitives.css) and seasonal    */
/* ------------------------------------------------------------------ */

type Ramp = Map<string, Oklch>

/** Default ramp: follow `--color-theme-N: var(--primitive)` to its literal. */
function defaultRamp(): Ramp {
  const ramp: Ramp = new Map()
  const primitives = blockBody(primitivesCss, ':root {')
  for (const m of blockBody(semanticCss, ':root {').matchAll(
    /--color-theme-(\d+):\s*var\((--[\w-]+)\)/g,
  )) {
    const literal = primitives.match(new RegExp(`${m[2]}:\\s*([^;]+);`))
    if (!literal) throw new Error(`primitive not found: ${m[2]}`)
    ramp.set(m[1], parseOklch(literal[1]))
  }
  return ramp
}

/** Seasonal ramps: every `:root[data-theme="season--*"]` block in themes.css. */
function seasonalRamps(): Map<string, Ramp> {
  const ramps = new Map<string, Ramp>()
  for (const block of seasonalCss.matchAll(
    /:root\[data-theme="(season--[\w-]+)"\]\s*\{([^}]+)\}/g,
  )) {
    const ramp: Ramp = new Map()
    for (const decl of block[2].matchAll(/--color-theme-(\d+):\s*([^;]+);/g)) {
      ramp.set(decl[1], parseOklch(decl[2]))
    }
    ramps.set(block[1], ramp)
  }
  return ramps
}

const RAMPS = new Map<string, Ramp>([['default (alabaster)', defaultRamp()], ...seasonalRamps()])

/* ------------------------------------------------------------------ */
/* OKLCH → WCAG relative luminance → contrast ratio                    */
/* ------------------------------------------------------------------ */

/** Exact OKLCH → OKLab → LMS → linear sRGB → WCAG relative luminance. */
function relativeLuminance({ l: L, c: C, h: H }: Oklch): number {
  const hRad = (H * Math.PI) / 180
  const a = C * Math.cos(hRad)
  const b = C * Math.sin(hRad)
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3
  const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
  const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
  return 0.2126 * r + 0.7152 * g + 0.0722 * bl
}

function contrastRatio(fg: Oklch, bg: Oklch): number {
  const [hi, lo] = [relativeLuminance(fg), relativeLuminance(bg)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

/* ------------------------------------------------------------------ */
/* Tests                                                               */
/* ------------------------------------------------------------------ */

describe('fg-on-solid contrast (WCAG AA)', () => {
  // Guards the parsers themselves: a themes.css refactor that breaks the
  // block regex would otherwise pass vacuously with zero ramps.
  it('finds the default ramp and all 8 seasonal ramps', () => {
    expect(RAMPS.size).toBe(9)
  })

  // Solid consumes specific rungs, so every ramp must declare the full
  // ladder — a partially-declared Special would mix its hue with default
  // alabaster on solid surfaces (theme-architecture.md "Solid rides the
  // theme ramp").
  for (const [name, ramp] of RAMPS) {
    it(`${name} declares all 11 rungs`, () => {
      expect([...ramp.keys()].sort((a, b) => Number(a) - Number(b))).toEqual([
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
      ])
    })
  }

  for (const [name, ramp] of RAMPS) {
    describe(name, () => {
      for (const mode of ['light', 'dark'] as const) {
        for (const [fg, bg] of PAIRS[mode]) {
          it(`${mode}: theme-${fg} on theme-${bg} meets AA (>= ${AA_NORMAL_TEXT}:1)`, () => {
            const fgColor = ramp.get(fg)
            const bgColor = ramp.get(bg)
            if (!fgColor || !bgColor) throw new Error(`rung ${fg} or ${bg} missing in ${name}`)
            const ratio = contrastRatio(fgColor, bgColor)
            expect(ratio, `${name} / ${mode}: ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(
              AA_NORMAL_TEXT,
            )
          })
        }
      }
    })
  }
})
