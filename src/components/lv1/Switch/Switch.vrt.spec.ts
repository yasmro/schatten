import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-switch'

const stories = [
  'sizes',
  'states',
  'with-labels',
  'error-state',
  'disabled',
  'disabled-with-error',
  'all-states',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Switch / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Switch / ${story} / ${theme} / a11y`, async ({ page }) => {
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

// jsdom has no layout, so the gap between control and label can only be hit
// with a real pointer. It must behave like the label: same cursor, same click.
test('Switch / the gap between control and label activates the control', async ({ page }) => {
  await page.goto(storyUrl('with-labels', 'light'))
  await page.waitForLoadState('networkidle')

  const control = page.getByRole('switch', { name: 'Dark mode' })
  await expect(control).toHaveAttribute('data-state', 'unchecked')

  const box = await control.boundingBox()
  if (!box) throw new Error('control has no layout box')
  const x = box.x + box.width + 4
  const y = box.y + box.height / 2

  const cursor = await page.evaluate(
    ([px, py]) => {
      const el = document.elementFromPoint(px, py)
      return el && getComputedStyle(el).cursor
    },
    [x, y],
  )
  expect(cursor).toBe('pointer')

  await page.mouse.click(x, y)
  await expect(control).toHaveAttribute('data-state', 'checked')
})
