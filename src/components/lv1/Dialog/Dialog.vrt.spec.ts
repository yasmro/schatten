import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-dialog'

const stories = [
  'confirm',
  'destructive',
  'with-sub-action',
  'loading',
  'sub-action-loading',
  'without-close-button',
  'info-only',
  'long-content',
] as const

const themes = ['light', 'dark'] as const

// Every Dialog story carries the same two intentional `color-contrast`
// exceptions, so the whole roster is listed:
//   1. The action button is `Button variant="primary"` — a neutral *solid*
//      fill (`--color-solid`, the alabaster ramp when no Special is active)
//      with light foreground, the same white-on-solid AA exception as Badge /
//      Callout / Toast solid (state-token-guideline.md §Phase B).
//   2. This spec analyzes the whole page (portal pattern), so axe also scans
//      the trigger button sitting *behind* the semi-transparent modal overlay
//      — an `aria-hidden` background element whose colours axe composites
//      through the overlay into a blended, non-readable pair. Not fixable
//      content contrast.
// The dialog's own title/description/secondary text are dark `--color-fore-
// ground*` and pass; any state-coloured text uses the AA `emphasis` rung.
// Disable just this rule, just here; mirrored in each story's `parameters.a11y`.
// A newly-added Dialog story is intentionally NOT exempt until listed here.
// #344 (Phase B) / #346.
const COLOR_CONTRAST_EXCEPTION_STORIES = new Set<(typeof stories)[number]>([
  'confirm',
  'destructive',
  'with-sub-action',
  'loading',
  'sub-action-loading',
  'without-close-button',
  'info-only',
  'long-content',
])

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Dialog / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Stories default to closed so the Storybook Docs page (which renders
      // every story simultaneously) doesn't stack 9 overlays on top of each
      // other. For VRT, click the trigger button to open the dialog.
      await root.locator('button').first().click()

      // Wait for the dialog to mount (renders into a portal outside #storybook-root).
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })

      // Pause animations for stable snapshots.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Dialog renders in a portal at fixed position, so capture the full page.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`Dialog / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Stories default to closed; click the trigger to open the dialog, which
      // mounts into a portal on body — so analyze the whole page.
      await root.locator('button').first().click()
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })

      const builder = new AxeBuilder({ page }).withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ])

      if (COLOR_CONTRAST_EXCEPTION_STORIES.has(story)) {
        builder.disableRules(['color-contrast'])
      }

      const results = await builder.analyze()

      expect(results.violations).toEqual([])
    })
  }
}
