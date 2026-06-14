import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'theming-theme-audit'

const SPECIALS = [
  'spring-early',
  'spring-late',
  'summer-early',
  'summer-peak',
  'autumn-early',
  'autumn-late',
  'winter-early',
  'winter-deep',
] as const

const MODES = ['light', 'dark'] as const

function storyUrl(storyId: string, globals: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&${globals}&viewMode=story`
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
  return root
}

// Single canonical snapshot of the full 8 × 2 grid. Any regression in any of
// the 16 patterns surfaces here.
test('ThemeAudit / overview', async ({ page }) => {
  await page.goto(storyUrl('overview', 'globals=theme:light'))
  await waitForStoryRoot(page)
  await expect(page).toHaveScreenshot('overview.png', { fullPage: true })
})

// Per-Special × per-Mode snapshots driven by URL args (not toolbar globals),
// so the rendered cell's local `data-theme` is the only source of theming and
// no global/root state leaks between tests.
for (const special of SPECIALS) {
  for (const mode of MODES) {
    test(`ThemeAudit / per-special / ${special} / ${mode}`, async ({ page }) => {
      const args = `args=special:season--${special};mode:${mode}`
      await page.goto(storyUrl('per-special', args))
      const root = await waitForStoryRoot(page)
      await expect(root).toHaveScreenshot(`per-special-${special}-${mode}.png`)
    })
  }
}

test('ThemeAudit / cascade-verification', async ({ page }) => {
  await page.goto(storyUrl('cascade-verification', 'globals=theme:light'))
  const root = await waitForStoryRoot(page)
  await expect(root).toHaveScreenshot('cascade-verification.png')
})
