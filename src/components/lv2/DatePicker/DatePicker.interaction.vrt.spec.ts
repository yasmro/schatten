import { expect, type Page, test } from '@playwright/test'

// The primary actions run through focus and pointer behaviour jsdom does not
// reproduce. Also runs on WebKit with `pnpm test:webkit` — Safari does not focus
// a button on click, which is where the focus return could break.

const STORY_ID_PREFIX = 'components-lv2-datepicker'

async function open(page: Page, story: string) {
  await page.goto(`/iframe.html?id=${STORY_ID_PREFIX}--${story}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await page.locator('[role="dialog"]').waitFor({ state: 'visible', timeout: 10_000 })
}

const day = (page: Page, date: string) => page.locator(`[data-date="${date}"]`)
const panel = (page: Page) => page.getByRole('dialog')

test('DatePicker / focus lands on the selected day', async ({ page }) => {
  await open(page, 'open')
  await expect(day(page, '2026-10-24')).toBeFocused()
})

test('DatePicker / picking a day fills the input and returns focus', async ({ page }) => {
  await open(page, 'open')
  await day(page, '2026-10-15').click()
  await expect(panel(page)).toHaveCount(0)
  await expect(page.getByRole('textbox', { name: 'Date' })).toHaveValue('2026-10-15')
  await expect(page.getByRole('button', { name: 'Choose date' })).toBeFocused()
})

test('DatePicker / picking the selected day closes', async ({ page }) => {
  await open(page, 'open')
  await day(page, '2026-10-24').click()
  await expect(panel(page)).toHaveCount(0)
})

test('DatePicker / a click outside closes', async ({ page }) => {
  await open(page, 'open')
  await page.mouse.click(600, 380)
  await expect(panel(page)).toHaveCount(0)
})

test('DatePicker / Enter on a day picks it from the keyboard', async ({ page }) => {
  await open(page, 'open')
  await page.keyboard.press('ArrowLeft')
  await page.keyboard.press('Enter')
  await expect(panel(page)).toHaveCount(0)
  await expect(page.getByRole('textbox', { name: 'Date' })).toHaveValue('2026-10-23')
})

test('DatePicker / a day can be picked inside a modal Dialog', async ({ page }) => {
  await open(page, 'in-dialog')
  await page.getByRole('button', { name: 'Choose date' }).click()
  const calendar = page.getByRole('dialog', { name: 'Choose date' })
  await expect(calendar).toBeVisible()
  await expect(day(page, '2026-10-24')).toBeFocused()
  await day(page, '2026-10-15').click()
  await expect(calendar).toHaveCount(0)
  await expect(page.getByRole('textbox', { name: 'Date' })).toHaveValue('2026-10-15')
  await expect(page.getByRole('button', { name: 'Choose date' })).toBeFocused()
  await expect(page.getByRole('dialog', { name: 'Schedule' })).toBeVisible()
})

test('DatePicker / Escape closes the panel but not the Dialog around it', async ({ page }) => {
  await open(page, 'in-dialog')
  await page.getByRole('button', { name: 'Choose date' }).click()
  const calendar = page.getByRole('dialog', { name: 'Choose date' })
  await expect(calendar).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(calendar).toHaveCount(0)
  await expect(page.getByRole('dialog', { name: 'Schedule' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Choose date' })).toBeFocused()
})

test('DateRangePicker / two clicks pick a range', async ({ page }) => {
  await open(page, 'open-range')
  await day(page, '2026-10-05').click()
  await expect(panel(page)).toBeVisible()
  await day(page, '2026-10-08').click()
  await expect(panel(page)).toHaveCount(0)
  await expect(page.getByRole('textbox', { name: 'Start date' })).toHaveValue('2026-10-05')
  await expect(page.getByRole('textbox', { name: 'End date' })).toHaveValue('2026-10-08')
  await expect(page.getByRole('button', { name: 'Choose date range' })).toBeFocused()
})

test('DateRangePicker / Escape keeps a half-picked range', async ({ page }) => {
  await open(page, 'open-range')
  await day(page, '2026-10-05').click()
  await page.keyboard.press('Escape')
  await expect(panel(page)).toHaveCount(0)
  await expect(page.getByRole('textbox', { name: 'Start date' })).toHaveValue('2026-10-05')
  await expect(page.getByRole('textbox', { name: 'End date' })).toHaveValue('')
})
