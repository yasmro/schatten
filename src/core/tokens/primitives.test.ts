import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Guards the `red` ⇄ `vermillion` governance seam introduced in #238.
 *
 * `red` (danger/error) and `vermillion` (brand 朱) are deliberately
 * separate primitives, but until design spike #239 decides whether danger
 * red should diverge in hue, the two scales MUST hold identical values.
 * Nothing else enforces that — this test fails if one scale is edited
 * without the other, so the seam can't silently drift.
 */

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'] as const

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

  it('keeps --red-* value-identical to --vermillion-* until #239', () => {
    for (const shade of SHADES) {
      expect(
        readPrimitive('red', shade),
        `--red-${shade} must equal --vermillion-${shade} until #239 — do not diverge the scales here`,
      ).toBe(readPrimitive('vermillion', shade))
    }
  })
})
