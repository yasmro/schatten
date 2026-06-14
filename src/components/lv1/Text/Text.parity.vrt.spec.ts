import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-text'

const stories = ['parity'] as const

// Parity proves React markup ≡ the vanilla `.st-*` markup — both halves
// consume the *same* classes, so the equivalence is theme-invariant: a
// `.dark` token swap applies to both equally, so light parity already
// implies dark parity. Dark *rendering* is covered by the component's own
// {Name}.vrt.spec.ts. Parity therefore runs light-only (dropped dark to
// avoid a redundant baseline — see VRT精査 2026-06).
const themes = ['light'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Text parity / ${story} / ${theme}`, async ({ page }) => {
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

      await expect(root).toHaveScreenshot(`parity-${story}-${theme}.png`)
    })
  }
}
