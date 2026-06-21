import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-avatar'

// 'playground' — interactive only; not a distinct visual state.
// Each entry declares which sub-element must settle before the screenshot: Radix
// mounts `.st-avatar__image` only once the image has loaded, and renders
// `.st-avatar__fallback` otherwise — waiting on the right one makes the still
// frame deterministic.
const stories = [
  { id: 'sizes', settle: '.st-avatar__image' },
  { id: 'with-image', settle: '.st-avatar__image' },
  { id: 'fallback', settle: '.st-avatar__fallback' },
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const { id, settle } of stories) {
  for (const theme of themes) {
    test(`Avatar / ${id} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(id, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })
      await page.locator(settle).first().waitFor({ state: 'visible', timeout: 10_000 })

      await expect(root).toHaveScreenshot(`${id}-${theme}.png`)
    })

    test(`Avatar / ${id} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(id, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })
      await page.locator(settle).first().waitFor({ state: 'visible', timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

// 区分 C (静的描画のみ) — the image→fallback swap is JS-driven and jsdom cannot
// reproduce the <img> error event, so pin the primary behaviour in a real
// browser: a broken `src` must surface the initials and drop the <img>.
// Runs under `pnpm test:vrt` (no `a11y` in the name).
test('Avatar / broken image falls back to initials', async ({ page }) => {
  await page.goto(storyUrl('with-broken-image', 'light'))
  await page.waitForLoadState('networkidle')

  const root = page.locator('#storybook-root')
  await root.waitFor({ state: 'visible', timeout: 10_000 })

  await expect(page.locator('.st-avatar__fallback')).toBeVisible()
  await expect(page.locator('.st-avatar__image')).toHaveCount(0)
})
