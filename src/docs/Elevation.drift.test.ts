import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/*
 * Elevation docs drift guard.
 *
 * `Elevation.stories.tsx` renders the primitive shadow scale two ways:
 *   - the tiles use `var(--shadow-*)`, so they always track the source token;
 *   - the value table prints the *literal* box-shadow string for documentation.
 *
 * That printed literal is a hand-copy of `src/core/tokens/spacing.css`. The
 * semantic side is covered by the var() reference + resolution.test.ts, but the
 * literal primitive values have no other source of truth, so a future re-tune
 * of `--shadow-*` would leave the docs table showing a stale value with nothing
 * to catch it. This test pins the two together by parsing both files as text
 * (same regex-over-source approach as the z-index ordering test).
 */

const SPACING_CSS = readFileSync(resolve(__dirname, '../core/tokens/spacing.css'), 'utf8')
const STORY_SRC = readFileSync(resolve(__dirname, 'Elevation.stories.tsx'), 'utf8')

/** Literal `--shadow-{token}: <value>;` declarations from spacing.css. */
function cssShadow(token: string): string {
  const match = SPACING_CSS.match(new RegExp(`--shadow-${token}:\\s*([^;]+);`))
  if (!match) throw new Error(`--shadow-${token} not declared in spacing.css`)
  return match[1].trim()
}

/** The `{ token: '…', value: '…' }` entries from the story's PRIMITIVE_SHADOWS. */
const storyShadows = new Map(
  [...STORY_SRC.matchAll(/\{ token: '(\w+)', value: '([^']+)' \}/g)].map(
    ([, token, value]) => [token, value] as const,
  ),
)

describe('Elevation story ↔ spacing.css primitive shadow values', () => {
  it('lists every primitive shadow step (sm/md/lg/xl)', () => {
    expect([...storyShadows.keys()].sort()).toEqual(['lg', 'md', 'sm', 'xl'])
  })

  for (const token of ['sm', 'md', 'lg', 'xl']) {
    it(`--shadow-${token} matches the value printed in the docs table`, () => {
      expect(storyShadows.get(token)).toBe(cssShadow(token))
    })
  }
})
