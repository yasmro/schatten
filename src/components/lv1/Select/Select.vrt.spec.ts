import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-select'

// Trigger-only stories (use `#storybook-root` — content is closed, so no portal).
const triggerStories = [
  'sizes',
  'error-state',
  'disabled',
  'disabled-with-error',
  'long-text',
  'disabled-items',
] as const

// Portal stories — `defaultOpen` mounts the SelectContent into
// `document.body`; capture the full page and pause animations.
const portalStories = ['open-content'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

// Trigger-only — root locator screenshot
for (const story of triggerStories) {
  for (const theme of themes) {
    test(`Select / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Select / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Trigger-only: the listbox is closed, so the visible surface lives in
      // #storybook-root.
      const results = await new AxeBuilder({ page })
        .include('#storybook-root')
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

// Portal — full-page screenshot, with animation freezing
for (const story of portalStories) {
  for (const theme of themes) {
    test(`Select / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the listbox to mount in the portal.
      await page.waitForSelector('[role="listbox"]', { timeout: 10_000 })

      // Pause the open/close animation so the still frame is deterministic.
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

    test(`Select / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      // open-content mounts the listbox into a portal on body, so analyze the
      // whole page.
      await page.waitForSelector('[role="listbox"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // Known Radix behavior, not fixable from Schatten: while open, Radix
        // (hideOthers) sets aria-hidden on #storybook-root but leaves the
        // trigger focusable. Focus is trapped in the portaled listbox, so no
        // real keyboard escape exists — disable just this rule, just here.
        // Mirrored in the story's `parameters.a11y` for the addon panel.
        .disableRules(['aria-hidden-focus'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

/**
 * Behavioral (non-screenshot) regression guard — required for 区分 D (JS 必須)
 * components per vrt-spec-guideline. Radix Select opens on trigger pointerdown
 * and commits on option pointerup — portal hit-testing + pointer capture that
 * jsdom cannot reproduce (the same failure shape as #318). Runs under
 * `pnpm test:vrt` (no `a11y` in the name) and takes no screenshots, so it
 * needs no baseline.
 */
test('Select / trigger opens the listbox and picking an option updates the value', async ({
  page,
}) => {
  await page.goto(storyUrl('sizes', 'light'))
  await page.waitForLoadState('networkidle')

  const trigger = page.getByRole('combobox', { name: 'Medium select' })
  await trigger.click()
  await expect(page.getByRole('listbox')).toBeVisible()

  await page.getByRole('option', { name: 'Banana' }).click()
  await expect(page.getByRole('listbox')).toHaveCount(0)
  await expect(trigger).toContainText('Banana')
})
