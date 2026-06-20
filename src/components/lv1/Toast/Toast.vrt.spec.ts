import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-toast'

const stories = [
  'subtle-treatments',
  'solid-treatments',
  'with-action',
  'title-only',
  'long-content',
  'loading',
  // 'promise' — interactive (button-triggered, async timing); not a deterministic visual state
] as const

const themes = ['light', 'dark'] as const

// Stories whose only remaining axe `color-contrast` findings are the
// intentional solid-treatment exception: a solid Toast is light foreground
// (`--color-{state}-foreground`) on a saturated state fill, which cannot reach
// 4.5:1 (the white-on-vivid trilemma — state-token-guideline.md §Phase B). The
// meaning is carried by the variant icon + visible title (WCAG 1.4.1), not by
// colour alone, so this is an intentional AA exception. The subtle treatments
// use the AA `emphasis` rung and pass. Disable just this rule, just here;
// mirrored in the story's `parameters.a11y`. #344 (Phase B) / #346.
const COLOR_CONTRAST_EXCEPTION_STORIES = new Set<(typeof stories)[number]>(['solid-treatments'])

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Toast / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the toast viewport to populate (toasts are fired in useEffect)
      await page.waitForFunction(
        () => document.querySelectorAll('[data-sonner-toast]').length > 0,
        {
          timeout: 10_000,
        },
      )

      // Pause animations for stable snapshots — Toasts have slide/fade in/out
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Toasts render in a fixed-positioned viewport, so capture the full page.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`Toast / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      // Toasts fire in useEffect and render into a fixed viewport on body, so
      // wait for them to mount, then analyze the whole page.
      await page.waitForFunction(
        () => document.querySelectorAll('[data-sonner-toast]').length > 0,
        {
          timeout: 10_000,
        },
      )

      const builder = new AxeBuilder({ page }).withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ])

      if (COLOR_CONTRAST_EXCEPTION_STORIES.has(story)) {
        builder.disableRules(['color-contrast'])
      }

      const results = await builder.analyze()

      expect(results.violations).toEqual([])
    })
  }
}

// Interaction: a real pointer click must dismiss. jsdom can't reproduce this —
// the dedicated close button is icon-only, so the click target is the inner
// <svg>, and Sonner's swipe handler captures the pointer unless the icon is
// pointer-events:none (#318). Pairs with the id-clobber regression covered in
// the unit test.
test('Toast / close button dismisses on real click', async ({ page }) => {
  await page.goto(storyUrl('subtle-treatments', 'light'))
  await page.waitForLoadState('networkidle')
  await page.waitForFunction(() => document.querySelectorAll('[data-sonner-toast]').length > 0, {
    timeout: 10_000,
  })
  const toasts = page.locator('li[data-sonner-toast]')
  const before = await toasts.count()
  await page.locator('button.st-toast__close').first().click()
  await expect(toasts).toHaveCount(before - 1)
})

test('Toast / action button dismisses on real click', async ({ page }) => {
  await page.goto(storyUrl('with-action', 'light'))
  await page.waitForLoadState('networkidle')
  await page.waitForFunction(() => document.querySelectorAll('[data-sonner-toast]').length > 0, {
    timeout: 10_000,
  })
  const toasts = page.locator('li[data-sonner-toast]')
  const before = await toasts.count()
  await page.getByRole('button', { name: 'Undo' }).click()
  await expect(toasts).toHaveCount(before - 1)
})
