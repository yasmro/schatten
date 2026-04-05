import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-textarea'

const stories = ['sizes', 'error', 'disabled'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Textarea / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForSelector('[data-storyloaded]', { timeout: 5_000 }).catch(() => {})
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await expect(root).toHaveScreenshot(`${story}-${theme}.png`)
    })
  }
}
