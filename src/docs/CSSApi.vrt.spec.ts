import { expect, test } from '@playwright/test'

/*
 * Integration-level VRT for the `CSS API/Overview` page.
 *
 * Covers:
 * - `reference`         — the long-form vanilla HTML reference
 *                          (CSSApi.stories.tsx Reference story) that
 *                          documents every `.st-*` chain for every lv1.
 *                          Source-mode rendering via Storybook globals.css.
 * - `parity-comparison` — React vs vanilla side-by-side
 *                          (CSSApiParity.stories.tsx), sharing the
 *                          fixture in __fixtures__/cssApiSamples.tsx.
 *
 * Per-component parity is already pinned by each
 * `{Component}.parity.vrt.spec.ts` (区 A/B); this spec catches
 * cross-component CSS leakage and pins the 4 区 C/D components
 * (Tooltip / Select / Dialog / Toast) whose vanilla static shape
 * isn't covered by a per-component parity story.
 *
 * Dist-artifact verification (loading the built `dist/schatten.css`
 * via `page.setContent()`) lives in the sibling
 * `CSSApiDist.vrt.spec.ts` — keeping it separate so the Storybook
 * webServer dependency stays cleanly scoped to this file.
 *
 * Tracked by #277.
 */

const STORY_ID_PREFIX = 'css-api-overview'

// `reference` runs both modes — it's the vanilla dark-mode rendering of
// every `.st-*` chain plus a cross-component CSS-leakage check, both of
// which are theme-sensitive. `parity-comparison` proves React ≡ vanilla,
// which is theme-invariant (both halves consume the *same* classes, so a
// `.dark` token swap applies equally), so it runs light-only — matching
// the lv1 `*.parity.vrt.spec.ts` policy. Net effect: no parity screenshot
// runs in dark anywhere in the suite.
const matrix = [
  { story: 'reference', themes: ['light', 'dark'] },
  { story: 'parity-comparison', themes: ['light'] },
] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const { story, themes } of matrix) {
  for (const theme of themes) {
    test(`CSS API / ${story} / ${theme}`, async ({ page }) => {
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

      // Spinner / Toast / Tooltip / Dialog ship keyframes; pause every
      // animation so the still frame is deterministic. Matches the
      // pattern used by `Button.parity.vrt.spec.ts` and
      // `ThemeAudit.vrt.spec.ts`.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      // Both stories are taller than a single viewport (Reference
      // documents every block; ParityComparison renders two columns
      // of 18 sections). Use full-page capture per
      // .claude/rules/vrt-spec-guideline.md §"Components rendered
      // into a Portal" Strategy 1.
      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })
  }
}
