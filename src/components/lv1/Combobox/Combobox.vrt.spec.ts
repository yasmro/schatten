import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-combobox'

// Trigger-only stories (content is closed, so no portal).
// 'playground' — Playground / interactive only
// 'server-search' — visual covered by 'sizes' and 'open-content'
const triggerStories = ['sizes', 'states'] as const

// Portal stories — `defaultOpen` mounts the panel into `document.body`.
const portalStories = ['open-content'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of triggerStories) {
  for (const theme of themes) {
    test(`Combobox / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Combobox / ${story} / ${theme} / a11y`, async ({ page }) => {
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

for (const story of portalStories) {
  for (const theme of themes) {
    test(`Combobox / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      await page.waitForSelector('[role="listbox"]', { timeout: 10_000 })

      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`Combobox / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      await page.waitForSelector('[role="listbox"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

/**
 * Behavioral regression guards — required for 区分 D (JS 必須) components per
 * vrt-spec-guideline. Focus, portal hit-testing and keyboard handling need a
 * real browser. They take no screenshots, so they need no baseline.
 */
test('Combobox / typing narrows the options and a click selects one', async ({ page }) => {
  await page.goto(storyUrl('sizes', 'light'))
  await page.waitForLoadState('networkidle')

  const trigger = page.getByRole('combobox', { name: 'md combobox' })
  await trigger.click()

  const search = page.getByRole('searchbox', { name: 'Search fruit' })
  await expect(search).toBeFocused()

  await search.fill('ban')
  await expect(page.getByRole('option')).toHaveCount(1)

  await page.getByRole('option', { name: 'Banana' }).click()
  await expect(page.getByRole('listbox')).toHaveCount(0)
  await expect(trigger).toContainText('Banana')
  await expect(trigger).toBeFocused()
})

test('Combobox / keyboard opens, moves the highlight and selects', async ({ page }) => {
  await page.goto(storyUrl('sizes', 'light'))
  await page.waitForLoadState('networkidle')

  const trigger = page.getByRole('combobox', { name: 'md combobox' })
  await trigger.focus()
  await page.keyboard.press('ArrowDown')
  await expect(page.getByRole('searchbox', { name: 'Search fruit' })).toBeFocused()

  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')
  await expect(page.getByRole('listbox')).toHaveCount(0)
  await expect(trigger).toContainText('Banana')
})

test('Combobox / the search text is cleared when the panel reopens', async ({ page }) => {
  await page.goto(storyUrl('sizes', 'light'))
  await page.waitForLoadState('networkidle')

  const trigger = page.getByRole('combobox', { name: 'md combobox' })
  await trigger.click()
  await page.getByRole('searchbox', { name: 'Search fruit' }).fill('zzz')
  await expect(page.getByRole('status')).toHaveText('No results')

  await page.keyboard.press('Escape')
  await expect(page.getByRole('listbox')).toHaveCount(0)
  await trigger.click()
  await expect(page.getByRole('searchbox', { name: 'Search fruit' })).toHaveValue('')
  await expect(page.getByRole('option')).toHaveCount(8)
})
