import { expect, test } from '../../../test/vrt'

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
  }
}
