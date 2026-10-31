import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv2-datepicker'

// 'playground' — interactive only; not a distinct visual state (covered by 'sizes').
// 'in-dialog' — behaviour only, in the interaction spec; visual covered by 'open'.
// 'in-form' — behaviour only, in the interaction spec; visual covered by 'sizes'.
// 'with-time-in-form' — behaviour only, in the interaction spec; visual covered by 'with-time'.
// 'with-time-in-dialog' — behaviour only, in the interaction spec; visual covered by 'open-with-time'.
const stories = ['sizes', 'states', 'in-field', 'with-time', 'with-time-states'] as const
// The panel portals to <body>, outside #storybook-root.
const portalStories = ['open', 'open-range', 'open-with-time', 'open-range-with-time'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

const pauseAnimations = `
  *, *::before, *::after {
    animation-play-state: paused !important;
    animation-delay: -0.0001s !important;
    transition: none !important;
  }
`

for (const theme of themes) {
  for (const story of stories) {
    test(`DatePicker / ${story} / ${theme}`, async ({ page }) => {
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

    test(`DatePicker / ${story} / ${theme} / a11y`, async ({ page }) => {
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

  for (const story of portalStories) {
    test(`DatePicker / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })
      await page.addStyleTag({ content: pauseAnimations })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`DatePicker / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}
