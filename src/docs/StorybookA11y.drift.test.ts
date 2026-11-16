import { describe, expect, it } from 'vitest'
import preview from '../../.storybook/preview'

// addon-a11y runs axe after every story render unless its automatic run is
// stopped. When it runs, it races the `@axe-core/playwright` scan in the same
// frame and the CI `a11y` job fails intermittently with "Axe is already
// running" (#346). A regression here shows up only as a flaky CI run, so the
// setting is pinned instead. Why manual mode and not `test: 'off'` is in
// `.claude/rules/storybook-guideline.md` §a11y (addon-a11y).
describe('Storybook addon-a11y configuration', () => {
  it('stops the automatic run with manual mode', () => {
    expect(preview.initialGlobals?.a11y).toEqual({ manual: true })
  })

  it('does not hide the panel scan button with test: off', () => {
    expect(preview.parameters?.a11y?.test).toBeUndefined()
  })

  it('pins the panel to the WCAG 2.1 A/AA tags the Playwright scans use', () => {
    expect(preview.parameters?.a11y?.options?.runOnly).toEqual({
      type: 'tag',
      values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
    })
  })
})
