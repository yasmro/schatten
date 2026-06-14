import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-dropdownmenu'

// These stories pin `defaultOpen`, so the menu mounts into `document.body`
// (a portal); capture the full page and pause animations.
//
// The `submenu` story captures the open parent menu with the sub-trigger
// affordance (leading icon + label + trailing chevron). The nested sub-panel
// itself is NOT screenshotted: Radix `Sub` opens on hover/focus and its
// content does not paint deterministically inside `toHaveScreenshot` (the
// just-run open animation re-winds to opacity 0), while its visual rule simply
// reuses `.st-dropdown-menu__content` (already covered by the other stories).
// The sub-content class API + open behavior are covered by the unit test.
//
// Skipped from the roster:
//   - 'playground'  — interactive only; closed trigger, no distinct visual
//   - 'controlled'  — interactive (open toggles on click); not a stable frame
const portalStories = ['action-menu', 'user-menu', 'checkbox-and-radio', 'submenu'] as const

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
    test(`DropdownMenu / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the menu to mount in the portal.
      await page.waitForSelector('[role="menu"]', { timeout: 10_000 })

      // Pause the open/close animation so the still frame is deterministic.
      await page.addStyleTag({ content: PAUSE_ANIMATIONS })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`DropdownMenu / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      // The menu mounts into a portal on body, so analyze the whole page.
      await page.waitForSelector('[role="menu"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // Known Radix behavior, not fixable from Schatten: while open, Radix
        // sets aria-hidden on #storybook-root but leaves the trigger focusable.
        // Focus is trapped in the portaled menu, so no real keyboard escape
        // exists — disable just this rule, just here. Mirrored in the story's
        // `parameters.a11y` for the addon panel.
        .disableRules(['aria-hidden-focus'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}
