import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-text'

const stories = [
  'body-sizes',
  'label-sizes',
  'heading-sizes',
  'font-families',
  'leading',
  'colors',
  'brand-colors',
  'state-colors',
  'inverted-color',
  'truncated',
] as const

const themes = ['light', 'dark'] as const

// Stories whose only remaining axe `color-contrast` findings are intentional,
// by-design exceptions — NOT a state-colour emphasis leak (the `state-colors`
// story, which renders `color="error|success|warning|info"`, uses the AA
// `emphasis` rung and passes):
//   - `colors` renders the `subtle` foreground tier (tertiary, large/incidental
//     -only by design — state-token-guideline.md §Phase A) and a raw
//     `text-blue-500` swatch demoing `color="inherit"`; neither is meant to hit
//     4.5:1.
//   - `inverted-color` renders the `inverted` / `inverted-muted` /
//     `inverted-subtle` tiers on saturated surfaces — incidental/large-only by
//     design (the same exception as Button `inverted`).
// Disable just this rule, just here; mirrored in each story's `parameters.a11y`.
// #344 (Phase A/B) / #346.
const COLOR_CONTRAST_EXCEPTION_STORIES = new Set<(typeof stories)[number]>([
  'colors',
  'inverted-color',
])

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Text / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })
      await page.waitForFunction(
        () => {
          const el = document.querySelector('#storybook-root')
          return el && el.children.length > 0
        },
        { timeout: 10_000 },
      )
      // Webfonts (incl. the serif stack) must be applied before the
      // screenshot, or font-families / leading stories flake. See #184.
      await page.evaluate(() => document.fonts.ready)

      await expect(root).toHaveScreenshot(`${story}-${theme}.png`)
    })

    test(`Text / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      const builder = new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])

      if (COLOR_CONTRAST_EXCEPTION_STORIES.has(story)) {
        builder.disableRules(['color-contrast'])
      }

      const results = await builder.analyze()

      expect(results.violations).toEqual([])
    })
  }
}
