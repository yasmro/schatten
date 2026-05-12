import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-tooltip'

// Tooltip stories that pin `open` (see Tooltip.stories.tsx → "Open / *").
// Tooltip Content portals out of `#storybook-root` into `document.body`, so
// these tests screenshot the full page rather than the root locator.
const stories = ['open-all-sides', 'open-long-content', 'open-rich-content'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Tooltip / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for at least one tooltip to mount (portaled into document.body).
      await page.waitForSelector('[role="tooltip"]', { timeout: 10_000 })

      // Pause animations for stable snapshots — Tooltip has fade + slide on enter.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Tooltip renders in a portal at fixed coordinates, so capture the full page.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })
  }
}
