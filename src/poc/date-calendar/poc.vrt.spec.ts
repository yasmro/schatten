// PoC #566 — no screenshot baselines (throwaway). axe on every PoC story and
// real-browser interaction tests run against BOTH implementations.
import AxeBuilder from '@axe-core/playwright'
import { expect, type Locator, type Page, test } from '@playwright/test'

const url = (id: string, theme = 'light') =>
  `/iframe.html?id=${id}&globals=theme:${theme}&viewMode=story`
async function open(page: Page, id: string, theme = 'light') {
  await page.goto(url(id, theme))
  await page.waitForLoadState('networkidle')
  await page.waitForSelector('[role=grid]')
}

const IMPL = 'poc-datecalendar-implementation'
const storyIds = [
  ...[
    'single',
    'range',
    'two-months',
    'two-months-paged',
    'dropdown',
    'rtl',
    'week-numbers',
    'range-constraints',
    'custom-day-marks',
    'locale',
    'rdp-only-animate',
    'rdp-only-multiple',
  ].map((s) => `${IMPL}--${s}`),
  'poc-datecalendar-value-type--comparison',
]

for (const id of storyIds) {
  for (const theme of ['light', 'dark']) {
    test(`PoC / ${id} / ${theme} / a11y`, async ({ page }) => {
      await open(page, id, theme)
      const r = await new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()
      expect(r.violations).toEqual([])
    })
  }
}

const panels = { self: 'Self (Date + Intl)', rdp: 'react-day-picker v10' } as const
const panel = (page: Page, name: string) =>
  page.locator('section', { has: page.getByRole('heading', { name, exact: true }) })
const btn = (p: Locator, iso: string) =>
  p.locator(`button[data-date="${iso}"], td[data-day="${iso}"] button`).first()
const cell = (p: Locator, iso: string) =>
  p.locator(`td:has(> button[data-date="${iso}"]), td[data-day="${iso}"]`).first()
const captions = (p: Locator) =>
  p
    .locator('[role=grid]')
    .evaluateAll((g) =>
      g.map(
        (x) =>
          x.getAttribute('aria-label') ??
          document.getElementById(x.getAttribute('aria-labelledby') ?? '')?.textContent,
      ),
    )

for (const [impl, name] of Object.entries(panels)) {
  test.describe(`PoC / ${impl}`, () => {
    test('click selects; arrows cross months; Enter selects', async ({ page }) => {
      await open(page, `${IMPL}--single`)
      const p = panel(page, name)
      await btn(p, '2026-10-22').click()
      await expect(cell(p, '2026-10-22')).toHaveAttribute('aria-selected', 'true')
      await page.keyboard.press('End')
      await expect(btn(p, '2026-10-24')).toBeFocused()
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowRight')
      await expect(btn(p, '2026-11-01')).toBeFocused()
      expect(await captions(p)).toEqual(['November 2026'])
      await page.keyboard.press('PageUp')
      await page.keyboard.press('Enter')
      await expect(cell(p, '2026-10-01')).toHaveAttribute('aria-selected', 'true')
    })

    test('two months: arrow into the 2nd grid does not shift the view', async ({ page }) => {
      await open(page, `${IMPL}--two-months`)
      const p = panel(page, name)
      await btn(p, '2026-10-31').focus()
      await page.keyboard.press('ArrowRight')
      await expect(btn(p, '2026-11-01')).toBeFocused()
      expect(await captions(p)).toEqual(['October 2026', 'November 2026'])
    })

    test('range across months sets start / end attributes', async ({ page }) => {
      await open(page, `${IMPL}--two-months`)
      const p = panel(page, name)
      await btn(p, '2026-10-28').click()
      await btn(p, '2026-11-03').click()
      await expect(cell(p, '2026-10-28')).toHaveAttribute('data-range-start', 'true')
      await expect(cell(p, '2026-11-03')).toHaveAttribute('data-range-end', 'true')
    })

    test('rtl flips ArrowRight to the previous day', async ({ page }) => {
      await open(page, `${IMPL}--rtl`)
      const p = panel(page, name)
      await btn(p, '2026-10-20').focus()
      await page.keyboard.press('ArrowRight')
      await expect(btn(p, '2026-10-19')).toBeFocused()
    })

    test('custom day marks are emitted as data-*', async ({ page }) => {
      await open(page, `${IMPL}--custom-day-marks`)
      await expect(panel(page, name).locator('td[data-booked]')).toHaveCount(2)
    })
  })
}

// The documented behavioural difference, pinned so the Storybook note stays true.
test('PoC / range constraints: self disables impossible ends, rdp restarts', async ({ page }) => {
  await open(page, `${IMPL}--range-constraints`)
  const self = panel(page, panels.self)
  await btn(self, '2026-10-06').click()
  await expect(btn(self, '2026-10-12')).toHaveAttribute('aria-disabled', 'true')
  const rdp = panel(page, panels.rdp)
  await btn(rdp, '2026-10-06').click()
  await btn(rdp, '2026-10-12').click()
  await expect(cell(rdp, '2026-10-12')).toHaveAttribute('aria-selected', 'true')
  await expect(cell(rdp, '2026-10-06')).not.toHaveAttribute('aria-selected', 'true')
})
