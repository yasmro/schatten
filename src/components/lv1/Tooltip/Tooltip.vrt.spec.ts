import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-tooltip'

// Tooltip stories that pin `open` (see Tooltip.stories.tsx — Sides / LongContent / RichContent).
// Tooltip Content portals out of `#storybook-root` into `document.body`, so
// these tests screenshot the full page rather than the root locator.
const stories = ['sides', 'long-content', 'rich-content'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Tooltip / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for at least one tooltip to mount (portaled into document.body).
      await page.waitForSelector('[role="tooltip"]', { timeout: 10_000 })

      // Pause animations for stable snapshots — Tooltip has fade + slide on enter.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Tooltip renders in a portal at fixed coordinates, so capture the full page.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`Tooltip / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      // Tooltip content portals into document.body, so analyze the whole page.
      await page.waitForSelector('[role="tooltip"]', { timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}

/**
 * Behavioral (non-screenshot) regression guards — required for 区分 C (静的
 * 描画のみ) components per vrt-spec-guideline. The screenshot tests above pin
 * `open`-forced stories, so real hover / focus triggering was never exercised
 * in a real browser (jsdom fires synthetic events; portal hit-testing and
 * pointer semantics differ — the #318 failure shape). Note the guideline's
 * "hover simulation is unreliable" caveat applies to *screenshot timing* only;
 * a non-screenshot visibility assert is fine. The `playground` story mounts
 * closed under `TooltipProvider delayDuration={100}` (the meta decorator).
 * These run under `pnpm test:vrt` (no `a11y` in the name) and take no
 * screenshots, so they need no baseline.
 */
test('Tooltip / shows on real hover and hides on unhover', async ({ page }) => {
  await page.goto(storyUrl('playground', 'light'))
  await page.waitForLoadState('networkidle')

  await page.getByRole('button', { name: 'Hover me' }).hover()
  // The 100ms open delay is absorbed by the auto-waiting assertion.
  await expect(page.getByRole('tooltip')).toBeVisible()

  // Move away in steps: Radix's hoverable-content grace polygon only closes on
  // a pointermove that lands outside it, so a single teleporting move (the
  // Playwright default) fires pointerleave but never a follow-up move — the
  // tooltip would stay open forever. Head down-left, away from the side="top"
  // content, so the path exits the trigger→content polygon quickly.
  await page.mouse.move(10, 400, { steps: 10 })
  await expect(page.getByRole('tooltip')).toHaveCount(0)
})

test('Tooltip / shows on keyboard focus', async ({ page }) => {
  await page.goto(storyUrl('playground', 'light'))
  await page.waitForLoadState('networkidle')

  // Tab (not a programmatic .focus()) so the trigger matches :focus-visible —
  // Radix only opens on focus-visible focus.
  await page.keyboard.press('Tab')
  await expect(page.getByRole('tooltip')).toBeVisible()
})
