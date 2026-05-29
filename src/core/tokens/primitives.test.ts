import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Guards the `red` ⇄ `vermillion` governance seam introduced in #238.
 *
 * `red` (danger/error) and `vermillion` (brand 朱) are deliberately separate
 * primitives. They shipped value-identical in #238 as a pure structural seam;
 * #239 (design spike) then concluded that danger `red` stays put (hue 22) and
 * that the brand should diverge instead, which #322 did by retuning
 * `vermillion` toward 真朱 `#E73121` (hue 30). The two scales are therefore now
 * intentionally different.
 *
 * This test pins `red` to its frozen hue-22 danger ramp so the danger color
 * can't silently drift now that it's the stable side, and asserts the seam has
 * actually diverged so a future accidental "re-sync" of the scales is caught.
 */

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const

/** Frozen danger-red ramp (hue 22). #239 concluded this stays put. */
const FROZEN_RED: Record<(typeof SHADES)[number], string> = {
  '50': 'oklch(0.98 0.02 22)',
  '100': 'oklch(0.96 0.04 22)',
  '200': 'oklch(0.91 0.08 22)',
  '300': 'oklch(0.83 0.13 22)',
  '400': 'oklch(0.74 0.17 22)',
  '500': 'oklch(0.64 0.18 22)',
  '600': 'oklch(0.56 0.17 22)',
  '700': 'oklch(0.46 0.14 22)',
  '800': 'oklch(0.36 0.11 22)',
  '900': 'oklch(0.27 0.07 22)',
  '950': 'oklch(0.15 0.05 22)',
}

const primitivesCss = readFileSync(resolve(process.cwd(), 'src/core/tokens/primitives.css'), 'utf8')

/** Extract a `--{family}-{shade}: <value>;` declaration from primitives.css. */
function readPrimitive(family: string, shade: string): string {
  const match = primitivesCss.match(new RegExp(`--${family}-${shade}:\\s*([^;]+);`))
  if (!match) throw new Error(`--${family}-${shade} not found in primitives.css`)
  return match[1].trim()
}

describe('red / vermillion primitive seam (#238)', () => {
  it('defines all 11 shades for both scales', () => {
    for (const shade of SHADES) {
      expect(() => readPrimitive('red', shade)).not.toThrow()
      expect(() => readPrimitive('vermillion', shade)).not.toThrow()
    }
  })

  it('keeps --red-* pinned to the frozen hue-22 danger ramp (#239 据え置き)', () => {
    for (const shade of SHADES) {
      expect(
        readPrimitive('red', shade),
        `--red-${shade} must stay on the frozen hue-22 danger ramp — #239 concluded danger red does not diverge`,
      ).toBe(FROZEN_RED[shade])
    }
  })

  it('has diverged from --vermillion-* (#322 retuned the brand to 真朱 #E73121)', () => {
    // The brand retune moved vermillion to hue 30; the seam exists precisely so
    // this can happen without dragging danger red along. If the two scales ever
    // become value-identical again, the seam has been accidentally collapsed.
    const sameEverywhere = SHADES.every(
      (shade) => readPrimitive('red', shade) === readPrimitive('vermillion', shade),
    )
    expect(
      sameEverywhere,
      'red and vermillion must not be re-synced — they diverged intentionally in #322',
    ).toBe(false)
  })
})
