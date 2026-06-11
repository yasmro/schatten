import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'theming-seasonal-showcase'

/*
 * Roster note — deliberately lean (#151). Per-season color values are
 * already pinned by ThemeAudit's 16 per-special snapshots, and #376 (the
 * seasonal chroma retune) will re-baseline everything here; the showcase
 * pins only what those don't:
 *   - 'eight-seasons'    — all 8 seasons × both Modes in ONE fullPage shot
 *   - 'side-by-side'     — default pair (spring-early vs winter-deep), both Modes
 *   - 'dashboard-mockup' — page-scale composition at the two most contrasting
 *                          seasons (hue 12 vs 255), both Modes
 *   - 'auto-season'      — SKIPPED: date-control demo; season rendering is
 *                          covered by 'eight-seasons', and the date→season
 *                          mapping is pinned by src/themes/seasonal/index.test.ts
 */

function storyUrl(storyId: string, query: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&${query}&viewMode=story`
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

// All 8 seasons × 2 Modes live inside per-cell scopes on one screen — a
// single fullPage shot pins every season's solid rendering at once.
test('SeasonalShowcase / eight-seasons', async ({ page }) => {
  await page.goto(storyUrl('eight-seasons', 'globals=theme:light'))
  await waitForStoryRoot(page)
  await expect(page).toHaveScreenshot('eight-seasons.png', { fullPage: true })
})

// Args (not toolbar globals) drive the mode, matching the story's
// toolbar-bypass design — the URL is the single source of theming.
for (const mode of ['light', 'dark'] as const) {
  test(`SeasonalShowcase / side-by-side / ${mode}`, async ({ page }) => {
    await page.goto(storyUrl('side-by-side', `args=mode:${mode}`))
    const root = await waitForStoryRoot(page)
    await expect(root).toHaveScreenshot(`side-by-side-${mode}.png`)
  })
}

// Representative pair only (spring-early hue 12 / winter-deep hue 255):
// the mockup pins page-scale composition, not per-season values.
for (const season of ['spring-early', 'winter-deep'] as const) {
  for (const mode of ['light', 'dark'] as const) {
    test(`SeasonalShowcase / dashboard-mockup / ${season} / ${mode}`, async ({ page }) => {
      const args = `args=season:season--${season};mode:${mode}`
      await page.goto(storyUrl('dashboard-mockup', args))
      const root = await waitForStoryRoot(page)
      await expect(root).toHaveScreenshot(`dashboard-mockup-${season}-${mode}.png`)
    })
  }
}
