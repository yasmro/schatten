import { expect, type Page, test } from '@playwright/test'

// 区分 D: the primary actions run through focus and pointer behaviour jsdom does
// not reproduce. Also runs on WebKit with `pnpm test:webkit` — Safari is the
// browser with the most unusual focus rules.

const STORY_ID_PREFIX = 'components-lv1-datecalendar'

async function open(page: Page, story: string) {
  await page.goto(`/iframe.html?id=${STORY_ID_PREFIX}--${story}&viewMode=story`)
  await page.waitForLoadState('networkidle')
  await page.locator('[role="grid"]').first().waitFor({ state: 'visible', timeout: 10_000 })
}

const day = (page: Page, date: string) => page.locator(`[data-date="${date}"]`)
const cell = (page: Page, date: string) => page.locator('td').filter({ has: day(page, date) })

test('DateCalendar / picks a date with a real click', async ({ page }) => {
  await open(page, 'single')
  await day(page, '2026-10-15').click()
  await expect(cell(page, '2026-10-15')).toHaveAttribute('aria-selected', 'true')
  await expect(cell(page, '2026-10-20')).not.toHaveAttribute('aria-selected')
})

test('DateCalendar / a selected day responds to hover like Button', async ({ page }) => {
  await open(page, 'single')
  const selected = day(page, '2026-10-20')
  const background = () => selected.evaluate((element) => getComputedStyle(element).backgroundColor)
  const resting = await background()

  await selected.hover()

  await expect.poll(background).not.toBe(resting)
})

test('DateCalendar / changes month with the navigation buttons', async ({ page }) => {
  await open(page, 'single')
  await page.getByRole('button', { name: 'Next month' }).click()
  await expect(page.getByRole('grid', { name: 'November 2026' })).toBeVisible()
  await page.getByRole('button', { name: 'Previous month' }).click()
  await page.getByRole('button', { name: 'Previous month' }).click()
  await expect(page.getByRole('grid', { name: 'September 2026' })).toBeVisible()
})

test('DateCalendar / picks a range with real clicks', async ({ page }) => {
  await open(page, 'range')
  await day(page, '2026-10-05').click()
  await expect(cell(page, '2026-10-05')).toHaveAttribute('data-range-start', 'true')
  await day(page, '2026-10-09').click()
  await expect(cell(page, '2026-10-07')).toHaveAttribute('data-range-middle', 'true')
  await expect(cell(page, '2026-10-09')).toHaveAttribute('data-range-end', 'true')
})

test('DateCalendar / arrow keys cross months in both directions', async ({ page }) => {
  await open(page, 'single')
  await day(page, '2026-10-20').focus()
  await page.keyboard.press('PageDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await expect(page.getByRole('grid', { name: 'December 2026' })).toBeVisible()
  await expect(day(page, '2026-12-04')).toBeFocused()

  await page.keyboard.press('ArrowUp')
  await expect(page.getByRole('grid', { name: 'November 2026' })).toBeVisible()
  await expect(day(page, '2026-11-27')).toBeFocused()
})

test('DateCalendar / Shift + PageUp and PageDown move by year', async ({ page }) => {
  await open(page, 'single')
  await day(page, '2026-10-20').focus()
  await page.keyboard.press('Shift+PageDown')
  await expect(day(page, '2027-10-20')).toBeFocused()
  await page.keyboard.press('Shift+PageUp')
  await page.keyboard.press('Shift+PageUp')
  await expect(day(page, '2025-10-20')).toBeFocused()
})

test('DateCalendar / focus stops at min and max', async ({ page }) => {
  await open(page, 'disabled-dates')
  await day(page, '2026-10-07').focus()
  await page.keyboard.press('PageUp')
  await expect(page.getByRole('grid', { name: 'October 2026' })).toBeVisible()
  await expect(day(page, '2026-10-05')).toBeFocused()
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('PageDown')
  await expect(day(page, '2026-10-28')).toBeFocused()
})

test('DateCalendar / a blocked date takes focus but no selection', async ({ page }) => {
  await open(page, 'disabled-dates')
  await day(page, '2026-10-10').focus()
  await page.keyboard.press('Enter')
  await expect(day(page, '2026-10-10')).toBeFocused()
  await expect(cell(page, '2026-10-10')).not.toHaveAttribute('aria-selected')
})

test('DateCalendar / navigation button keeps focus at the limit', async ({ page }) => {
  await open(page, 'disabled-dates')
  const next = page.getByRole('button', { name: 'Next month' })
  await next.focus()
  await page.keyboard.press('Enter')
  await expect(next).toHaveAttribute('aria-disabled', 'true')
  await expect(next).toBeFocused()
  await expect(page.getByRole('grid', { name: 'October 2026' })).toBeVisible()
})

// With Full Keyboard Access off, Safari's Tab skips every <button> on the page.
// Option + Tab is the shortcut that reaches them.
const tabKey = (browserName: string) => (browserName === 'webkit' ? 'Alt+Tab' : 'Tab')

test('DateCalendar / Tab enters the grid once and leaves it', async ({ page, browserName }) => {
  const tab = tabKey(browserName)
  await open(page, 'single')
  await page.getByRole('button', { name: 'Previous month' }).focus()
  await page.keyboard.press(tab)
  await expect(page.getByRole('button', { name: 'Next month' })).toBeFocused()
  await page.keyboard.press(tab)
  await expect(day(page, '2026-10-20')).toBeFocused()
  await page.keyboard.press(tab)
  await expect(page.locator('[data-date]:focus')).toHaveCount(0)
  await page.keyboard.press(`Shift+${tab}`)
  await expect(day(page, '2026-10-20')).toBeFocused()
})

test('DateCalendar / month buttons do not lose the tab stop', async ({ page, browserName }) => {
  await open(page, 'single')
  await page.getByRole('button', { name: 'Next month' }).click()
  await page.getByRole('button', { name: 'Next month' }).focus()
  await page.keyboard.press(tabKey(browserName))
  await expect(day(page, '2026-11-01')).toBeFocused()
})

test('DateCalendar / keyboard scrolls a two-month view by one month', async ({ page }) => {
  await open(page, 'two-months')
  await day(page, '2026-11-30').focus()
  await page.keyboard.press('ArrowRight')
  await expect(page.getByRole('grid', { name: 'November 2026' })).toBeVisible()
  await expect(page.getByRole('grid', { name: 'December 2026' })).toBeVisible()
  await expect(day(page, '2026-12-01')).toBeFocused()
})

test('DateCalendar / a range spans two months', async ({ page }) => {
  await open(page, 'two-months')
  await day(page, '2026-10-29').click()
  await day(page, '2026-11-03').click()
  await expect(cell(page, '2026-10-31')).toHaveAttribute('data-range-middle', 'true')
  await expect(cell(page, '2026-11-01')).toHaveAttribute('data-range-middle', 'true')
})

test('DateCalendar / arrow keys follow the reading direction in RTL', async ({ page }) => {
  await open(page, 'rtl')
  await day(page, '2026-10-13').focus()
  await page.keyboard.press('ArrowLeft')
  await expect(day(page, '2026-10-14')).toBeFocused()
  await page.keyboard.press('ArrowRight')
  await page.keyboard.press('ArrowRight')
  await expect(day(page, '2026-10-12')).toBeFocused()
})

test('DateCalendar / dropdowns change the month', async ({ page }) => {
  await open(page, 'dropdown')
  await page.getByRole('combobox', { name: 'Month' }).selectOption({ label: 'March' })
  await page.getByRole('combobox', { name: 'Year' }).selectOption({ label: '2025' })
  await expect(page.getByRole('grid', { name: 'March 2025' })).toBeVisible()
})

for (const timezoneId of [
  'Asia/Tokyo',
  'America/Los_Angeles',
  'America/Santiago',
  'Pacific/Kiritimati',
]) {
  test.describe(`DateCalendar / time zone ${timezoneId}`, () => {
    test.use({ timezoneId })

    test('returns the date that was clicked', async ({ page }) => {
      await open(page, 'returned-value')
      await page.getByRole('group', { name: 'Single' }).locator('[data-date="2026-09-06"]').click()
      await expect(page.getByTestId('value')).toHaveText('2026-09-06')
    })

    test('returns the range that was clicked', async ({ page }) => {
      await open(page, 'returned-value')
      const range = page.getByRole('group', { name: 'Range' })
      await range.locator('[data-date="2026-09-06"]').click()
      await range.locator('[data-date="2026-09-08"]').click()
      await expect(page.getByTestId('range')).toHaveText(
        JSON.stringify({ from: '2026-09-06', to: '2026-09-08' }),
      )
    })
  })
}
