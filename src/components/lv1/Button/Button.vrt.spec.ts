import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-button'

const stories = [
  'all-variants',
  'sizes',
  'icons',
  'icon-positions',
  'loading',
  'disabled',
  'inverted-on-saturated-surfaces',
  // `link-variant` covers paragraph-embedded link buttons with a trailing
  // icon. The combination is fragile: Tailwind preflight makes `svg` a
  // `display: block` element, and the link variant has no inline-flex
  // wrapper, so a regression where the svg breaks to its own line is easy
  // to introduce. The fix in Button.css (`.st-btn--link > svg { display:
  // inline-block }` + `white-space: nowrap` on the link) needs a VRT
  // backstop so a future cascade tweak can't silently undo it.
  'link-variant',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Button / ${story} / ${theme}`, async ({ page }) => {
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
  }
}
