import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-tooltip'

// Parity story renders both the React Tooltip (via Radix Portal) and a
// hand-rolled vanilla `<div class="st-tooltip__content">`. The React side
// portals into `document.body`, so we screenshot the full page rather than
// the root locator.
const stories = ['parity'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Tooltip parity / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for at least one Radix tooltip to mount (portaled into document.body).
      await page.waitForSelector('[role="tooltip"]', { timeout: 10_000 })

      // Freeze enter / exit animations so the React and vanilla halves
      // settle to the same still frame.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Tooltip renders in a portal at fixed coordinates, so capture full page.
      await expect(page).toHaveScreenshot(`parity-${story}-${theme}.png`, { fullPage: true })
    })
  }
}
