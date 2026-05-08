import { expect, test } from '../../../test/vrt'

const STORY_ID_PREFIX = 'components-lv1-toast'

const stories = [
  'subtle-treatments',
  'solid-treatments',
  'with-action',
  'title-only',
  'long-content',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Toast / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the toast viewport to populate (toasts are fired in useEffect)
      await page.waitForFunction(() => document.querySelectorAll('[role="status"]').length > 0, {
        timeout: 10_000,
      })

      // Pause animations for stable snapshots — Toasts have slide/fade in/out
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Toasts render in a fixed-positioned viewport, so capture the full page.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })
  }
}
