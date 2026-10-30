import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-datecalendar'

// Skipped from the roster:
//   - 'playground'     — Playground / interactive only
//   - 'returned-value' — test harness for the interaction spec; its visual is
//                        covered by 'single' and 'range'
const stories = [
  'single',
  'range',
  'disabled-dates',
  'range-constraints',
  'two-months',
  'week-numbers',
  'dropdown',
  'rtl',
  'locale-ja',
  'states',
  'in-field',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`DateCalendar / ${story} / ${theme}`, async ({ page }) => {
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

    test(`DateCalendar / ${story} / ${theme} / a11y`, async ({ page }) => {
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

// Forced colors removes backgrounds, so this frame proves selection survives
// without one. Light only: the system palette replaces both modes.
for (const story of ['single', 'range'] as const) {
  test(`DateCalendar / ${story} / forced-colors`, async ({ page }) => {
    await page.emulateMedia({ forcedColors: 'active' })
    await page.goto(storyUrl(story, 'light'))
    await page.waitForLoadState('networkidle')

    const root = page.locator('#storybook-root')
    await root.waitFor({ state: 'visible', timeout: 10_000 })

    await expect(root).toHaveScreenshot(`${story}-forced-colors.png`)
  })
}
