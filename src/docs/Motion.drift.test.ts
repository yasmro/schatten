import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/*
 * Motion docs drift guard.
 *
 * `Motion.stories.tsx` renders the duration scale two ways:
 *   - the demo knobs use `var(--st-duration-*)`, so they always track the source;
 *   - the value table prints the *literal* duration string for documentation.
 *
 * That printed literal is a hand-copy of `src/core/tokens/animation.css`. The
 * semantic side (`--motion-* → --st-duration-*`) is covered by the var()
 * reference + resolution.test.ts, but the literal primitive durations have no
 * other source of truth, so a future re-tune of `--st-duration-*` would leave
 * the docs table showing a stale value with nothing to catch it. This test pins
 * the two together by parsing both files as text (same regex-over-source
 * approach as Elevation.drift.test.ts / Radius.drift.test.ts).
 */

const ANIMATION_CSS = readFileSync(resolve(__dirname, '../core/tokens/animation.css'), 'utf8')
const STORY_SRC = readFileSync(resolve(__dirname, 'Motion.stories.tsx'), 'utf8')

/** Literal `--st-duration-{token}: <value>;` declarations from animation.css. */
function cssDuration(token: string): string {
  const match = ANIMATION_CSS.match(new RegExp(`--st-duration-${token}:\\s*([^;]+);`))
  if (!match) throw new Error(`--st-duration-${token} not declared in animation.css`)
  return match[1].trim()
}

/** The `{ token: '…', value: '…', … }` entries from the story's DURATION_SCALE. */
const storyDurations = new Map(
  [...STORY_SRC.matchAll(/\{ token: '(\w+)', value: '([^']+)'/g)].map(
    ([, token, value]) => [token, value] as const,
  ),
)

const DURATION_TOKENS = ['fast', 'base', 'slow'] as const

describe('Motion story ↔ animation.css --st-duration-* values', () => {
  it('lists every duration step (fast/base/slow)', () => {
    expect([...storyDurations.keys()].sort()).toEqual([...DURATION_TOKENS].sort())
  })

  for (const token of DURATION_TOKENS) {
    it(`--st-duration-${token} matches the value printed in the docs table`, () => {
      expect(storyDurations.get(token)).toBe(cssDuration(token))
    })
  }
})
