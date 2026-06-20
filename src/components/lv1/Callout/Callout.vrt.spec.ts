import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-callout'

const stories = [
  'subtle-treatments',
  'solid-treatments',
  'title-only',
  'body-only',
  'with-action',
  'solid-with-action',
  'solid-dismissible',
  'long-content',
] as const

const themes = ['light', 'dark'] as const

// Stories whose only remaining axe `color-contrast` findings are the
// intentional solid-treatment exception: a solid Callout is light foreground
// (`--color-{state}-foreground`) on a saturated state fill, which cannot reach
// 4.5:1 (the white-on-vivid trilemma — state-token-guideline.md §Phase B). The
// meaning is carried by the variant icon + visible title (WCAG 1.4.1), not by
// colour alone, so this is an intentional AA exception. The subtle treatments
// use the AA `emphasis` rung and pass. Disable just this rule, just here;
// mirrored in each story's `parameters.a11y`. #344 (Phase B) / #346.
const COLOR_CONTRAST_EXCEPTION_STORIES = new Set<(typeof stories)[number]>([
  'solid-treatments',
  'solid-with-action',
  'solid-dismissible',
])

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Callout / ${story} / ${theme}`, async ({ page }) => {
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

      await expect(root).toHaveScreenshot(`${story}-${theme}.png`)
    })

    test(`Callout / ${story} / ${theme} / a11y`, async ({ page }) => {
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
