import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/*
 * Radius docs drift guard.
 *
 * `Radius.stories.tsx` renders the primitive radius scale two ways:
 *   - the tiles use the literal value via `borderRadius`, and
 *   - the value table prints the same literal for documentation.
 *
 * That printed literal is a hand-copy of `src/core/tokens/spacing.css`. The
 * semantic side is covered by the var() reference + resolution.test.ts, but the
 * literal primitive values have no other source of truth, so a future re-tune
 * of `--radius-*` would leave the docs table showing a stale value with nothing
 * to catch it. This test pins the two together by parsing both files as text
 * (same regex-over-source approach as Elevation.drift.test.ts).
 */

const SPACING_CSS = readFileSync(resolve(__dirname, '../core/tokens/spacing.css'), 'utf8')
const STORY_SRC = readFileSync(resolve(__dirname, 'Radius.stories.tsx'), 'utf8')

/** Literal `--radius-{token}: <value>;` declarations from spacing.css. */
function cssRadius(token: string): string {
  const match = SPACING_CSS.match(new RegExp(`--radius-${token}:\\s*([^;]+);`))
  if (!match) throw new Error(`--radius-${token} not declared in spacing.css`)
  return match[1].trim()
}

/** The `{ token: '…', value: '…' }` entries from the story's PRIMITIVE_RADII. */
const storyRadii = new Map(
  [...STORY_SRC.matchAll(/\{ token: '([\w]+)', value: '([^']+)' \}/g)].map(
    ([, token, value]) => [token, value] as const,
  ),
)

const PRIMITIVE_TOKENS = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const

describe('Radius story ↔ spacing.css primitive radius values', () => {
  it('lists every primitive radius step', () => {
    expect([...storyRadii.keys()].sort()).toEqual([...PRIMITIVE_TOKENS].sort())
  })

  for (const token of PRIMITIVE_TOKENS) {
    it(`--radius-${token} matches the value printed in the docs table`, () => {
      expect(storyRadii.get(token)).toBe(cssRadius(token))
    })
  }
})
