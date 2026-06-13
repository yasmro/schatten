import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'patterns-composition-with-aschild'

// These three are visual (live-rendered examples). The narrative is rendered
// inline in the `Overview` story (escape-hatch table / decision tree /
// anti-patterns), which is intentionally NOT in the roster:
// 'overview' — prose only; no visual contract (vrt-spec-guideline: docs prose → skip)
const stories = ['button-as-link', 'link-with-button-variants', 'text-polymorphism'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`CompositionWithAsChild / ${story} / ${theme}`, async ({ page }) => {
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
