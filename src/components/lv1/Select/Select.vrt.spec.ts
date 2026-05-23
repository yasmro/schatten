import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-select'

// Trigger-only stories (use `#storybook-root` — content is closed, so no portal).
const triggerStories = [
  'sizes',
  'error-state',
  'disabled',
  'disabled-with-error',
  'long-text',
  'disabled-items',
] as const

// Portal stories — `defaultOpen` mounts the SelectContent into
// `document.body`; capture the full page and pause animations.
const portalStories = ['open-content'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

// Trigger-only — root locator screenshot
for (const story of triggerStories) {
  for (const theme of themes) {
    test(`Select / ${story} / ${theme}`, async ({ page }) => {
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
  }
}

// Portal — full-page screenshot, with animation freezing
for (const story of portalStories) {
  for (const theme of themes) {
    test(`Select / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the listbox to mount in the portal.
      await page.waitForSelector('[role="listbox"]', { timeout: 10_000 })

      // Pause the open/close animation so the still frame is deterministic.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })
  }
}
