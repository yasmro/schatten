import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-popover'

// These stories pin `defaultOpen`, so the panel mounts into `document.body`
// (a portal); capture the full page and pause animations.
//
// Skipped from the roster:
//   - 'playground'   — interactive only; closed trigger, no distinct visual
//   - 'controlled'   — interactive (open toggles on click); not a stable frame
//   - 'with-anchor'  — interactive controlled demo; anchor positioning is a
//                      Radix concern pinned by the unit test, not a pixel frame
const portalStories = ['settings-panel', 'info', 'placements'] as const

const themes = ['light', 'dark'] as const

const PAUSE_ANIMATIONS = `
  *, *::before, *::after {
    animation-play-state: paused !important;
    animation-delay: -0.0001s !important;
    transition: none !important;
  }
`

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of portalStories) {
  for (const theme of themes) {
    test(`Popover / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the panel to mount in the portal.
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })

      // Pause the open/close animation so the still frame is deterministic.
      await page.addStyleTag({ content: PAUSE_ANIMATIONS })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`Popover / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      // The panel mounts into a portal on body, so analyze the whole page.
      await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // Known Radix behavior, not fixable from Schatten: while open, Radix
        // sets aria-hidden on #storybook-root but leaves the trigger focusable.
        // Mirrored in the story's `parameters.a11y` for the addon panel.
        .disableRules(['aria-hidden-focus'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

/**
 * Behavioral (non-screenshot) regression guard — required for 区分 D (JS 必須)
 * components per vrt-spec-guideline. jsdom unit tests cannot reproduce the real
 * pointer / focus semantics of open + outside-click + Escape dismissal, so this
 * drives the primary operations in a real browser. Runs under `pnpm test:vrt`
 * (no `a11y` in the name) and takes no screenshots, so it needs no baseline.
 */
test('Popover / opens on click and dismisses on Escape', async ({ page }) => {
  await page.goto(storyUrl('controlled', 'light'))
  await page.waitForLoadState('networkidle')

  const trigger = page.getByRole('button', { name: 'Open popover' })
  await trigger.click()
  await expect(page.getByRole('dialog')).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  // Focus returns to the trigger after Escape (Radix focus management).
  await expect(page.getByRole('button', { name: 'Open popover' })).toBeFocused()
})

test('Popover / Close button inside the panel dismisses it on real click', async ({ page }) => {
  await page.goto(storyUrl('settings-panel', 'light'))
  await page.waitForLoadState('networkidle')
  await page.waitForSelector('[role="dialog"]')

  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
})
