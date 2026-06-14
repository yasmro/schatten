import AxeBuilder from '@axe-core/playwright'
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

    test(`Button / ${story} / ${theme} / a11y`, async ({ page }) => {
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
}

// Hover regression — the filled variants (`primary`, `destructive`) shift their
// *label* colour on hover, not just the background. `primary` routes through the
// `--color-solid-foreground-hover` token; `destructive` uses a `color-mix`
// toward its base (no `*-foreground-hover` token exists for state colours — see
// state-token-guideline, 4-token shape). Neither shift is captured by the
// screenshot suite (VRT snapshots are at-rest) nor by the axe pass (static
// state), so a removed/broken `color:` rule would slip through both. This pins
// it with a real pointer: in light mode the label must get *darker* on hover.
// Ghost / outline variants (secondary / tertiary) deliberately do NOT shift the
// label — only the fill — and are asserted unchanged.
test('Button / filled variants darken their label on hover', async ({ page }) => {
  await page.goto(storyUrl('all-variants', 'light'))
  await page.waitForLoadState('networkidle')
  await page.locator('#storybook-root').waitFor({ state: 'visible', timeout: 10_000 })
  // Kill the colour transition so the hovered value reads settled, not mid-tween.
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important }' })

  // Resolve the rendered label colour to WCAG relative luminance via a canvas
  // paint — robust to whatever serialization the computed `color` uses
  // (`rgb()` for the token, `color(srgb …)` for the color-mix).
  const labelLuminance = (name: string) =>
    page.getByRole('button', { name }).evaluate((el) => {
      const cv = document.createElement('canvas')
      cv.width = 1
      cv.height = 1
      const ctx = cv.getContext('2d')
      if (!ctx) return Number.NaN
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, 1, 1)
      ctx.fillStyle = getComputedStyle(el).color
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
      const lin = (c: number) => {
        const s = c / 255
        return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
      }
      return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
    })

  for (const name of ['Primary', 'Destructive']) {
    const rest = await labelLuminance(name)
    await page.getByRole('button', { name }).hover()
    const hovered = await labelLuminance(name)
    expect(hovered, `${name} label should darken on hover (light mode)`).toBeLessThan(rest)
    await page.mouse.move(0, 0) // release hover before measuring the next variant
  }

  // Ghost / outline variants keep their label colour on hover (fill-only).
  for (const name of ['Secondary', 'Tertiary']) {
    const rest = await labelLuminance(name)
    await page.getByRole('button', { name }).hover()
    const hovered = await labelLuminance(name)
    expect(hovered, `${name} label colour should be unchanged on hover`).toBeCloseTo(rest, 2)
    await page.mouse.move(0, 0)
  }
})
