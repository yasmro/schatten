import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-textarea'

const stories = ['parity'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Textarea parity / ${story} / ${theme}`, async ({ page }) => {
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

      // Freeze transitions so the React and vanilla halves settle to the
      // same still frame (no transition: color / background-color drift).
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            transition: none !important;
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
          }
        `,
      })

      await expect(root).toHaveScreenshot(`parity-${story}-${theme}.png`)
    })
  }
}
