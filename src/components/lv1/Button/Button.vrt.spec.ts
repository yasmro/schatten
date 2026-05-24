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
  // `display: block` element, and the link variant has no inner wrapper
  // (the flat DOM is `<a>{text}<svg/></a>`). A `display: block` child of an
  // inline parent forces a line break, which orphans a trailing icon onto
  // its own row. The fix in Button.css (`.st-btn--link { display:
  // inline-flex; align-items: baseline; gap: 0.25rem }`) turns the svg into
  // a flex item — block display is ignored, the 4px gap separates text and
  // icon, and the baseline keeps the icon vertically aligned with the
  // surrounding paragraph text. This VRT backstop fails fast if a future
  // cascade tweak (relaxing the display value, changing the gap, dropping
  // baseline alignment) silently re-introduces the orphan.
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
