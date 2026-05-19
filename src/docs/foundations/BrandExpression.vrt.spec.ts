import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'foundation-brandexpression'

// Both stories embed light and dark scoped cells internally, so a single
// render per story (toolbar theme:light) captures every Mode combination.
const stories = ['overview', 'component-matrix'] as const

function storyUrl(storyId: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:light&viewMode=story`
}

async function waitForStoryRoot(page: import('@playwright/test').Page) {
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
}

for (const story of stories) {
  test(`BrandExpression / ${story}`, async ({ page }) => {
    await page.goto(storyUrl(story))
    await waitForStoryRoot(page)
    // Prefixed filename: ThemeAudit shares this `__snapshots__/` directory and
    // owns the unprefixed `overview.png`.
    await expect(page).toHaveScreenshot(`brand-expression-${story}.png`, { fullPage: true })
  })
}
