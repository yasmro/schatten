import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-tabs'

// Tabs render inline (no portal), so a standard #storybook-root screenshot
// captures the whole component.
//
// Skipped from the roster:
//   - 'playground' — interactive only; visual covered by 'default'
const stories = ['default', 'with-icons', 'vertical', 'disabled-tab', 'many-tabs'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Tabs / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Tabs / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

/* ===== interaction tests (区分 D — JS 必須) =====
 *
 * Tabs switch panels and move focus through JS + real-browser semantics
 * (roving tabindex, arrow keys) that jsdom does not reproduce. Per
 * vrt-spec-guideline §"区分 C/D — interaction test REQUIRED", drive the
 * primary operation with a real pointer / keyboard and assert the result.
 * No 'a11y' in the name → these run under `pnpm test:vrt`. */

test('Tabs / clicking a tab switches the panel', async ({ page }) => {
  await page.goto(storyUrl('default', 'light'))
  await page.waitForSelector('[role="tablist"]')

  await expect(page.getByRole('tabpanel')).toContainText('Manage your account')
  await page.getByRole('tab', { name: 'Password' }).click()
  await expect(page.getByRole('tabpanel')).toContainText('Change your password')
})

test('Tabs / arrow keys move and activate tabs (automatic)', async ({ page }) => {
  await page.goto(storyUrl('default', 'light'))
  await page.waitForSelector('[role="tablist"]')

  await page.getByRole('tab', { name: 'Account' }).focus()
  await page.keyboard.press('ArrowRight')

  // activationMode defaults to automatic, so focus + selection move together.
  await expect(page.getByRole('tab', { name: 'Password' })).toHaveAttribute('data-state', 'active')
  await expect(page.getByRole('tabpanel')).toContainText('Change your password')
})

// When the tabs overflow, selecting an off-screen tab scrolls it into view via
// the list's own scrollLeft (not the page). jsdom has no layout, so the scroll
// math can only be verified in a real browser.
test('Tabs / selecting an off-screen tab scrolls it into view', async ({ page }) => {
  await page.goto(storyUrl('many-tabs', 'light'))
  await page.waitForSelector('[role="tablist"]')

  const scrollLeft = () =>
    page.locator('.st-tabs__list').evaluate((el) => Math.round(el.scrollLeft))
  expect(await scrollLeft()).toBe(0)

  await page.getByRole('tab', { name: 'Section 11' }).click()
  await expect.poll(scrollLeft, { timeout: 2000 }).toBeGreaterThan(0)

  // The now-active tab sits within the list's visible viewport.
  const visible = await page.getByRole('tab', { name: 'Section 11' }).evaluate((tab) => {
    const list = tab.closest('.st-tabs__list') as HTMLElement
    const l = list.getBoundingClientRect()
    const t = tab.getBoundingClientRect()
    return t.left >= l.left - 1 && t.right <= l.right + 1
  })
  expect(visible).toBe(true)
})

// Guards the sliding-indicator wiring (MutationObserver on data-state +
// offsetLeft/offsetWidth measurement). jsdom has no layout, so this can only
// be a real-browser test — without it, a broken observer leaves CI green while
// the user-facing slide silently regresses.
test('Tabs / active indicator repositions to the clicked tab', async ({ page }) => {
  await page.goto(storyUrl('default', 'light'))
  await page.waitForSelector('[role="tablist"]')

  const indicator = page.locator('.st-tabs__indicator')
  const read = () => indicator.evaluate((el) => getComputedStyle(el).transform)

  const beforeTransform = await read()
  await page.getByRole('tab', { name: 'Password' }).click()

  // The indicator slides; once settled it sits at a different translateX than
  // it did under the first tab.
  await expect.poll(async () => (await read()) !== beforeTransform, { timeout: 2000 }).toBe(true)
})
