import AxeBuilder from '@axe-core/playwright'
import { expect, type Page, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-checkbox'

const stories = [
  'sizes',
  'states',
  'with-labels',
  'indeterminate',
  'error-state',
  'disabled',
  'disabled-with-error',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Checkbox / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Checkbox / ${story} / ${theme} / a11y`, async ({ page }) => {
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
test.describe('Checkbox / gap between control and label', () => {
  async function open(page: Page, story: string, name: string) {
    await page.goto(storyUrl(story, 'light'))
    await page.waitForLoadState('networkidle')
    const control = page.getByRole('checkbox', { name })
    await expect(control).toHaveAttribute('data-state', 'unchecked')
    const box = await control.boundingBox()
    if (!box) throw new Error('control has no layout box')
    return { control, box, y: box.y + box.height / 2 }
  }

  function cursorAt(page: Page, x: number, y: number) {
    return page.evaluate(
      ([px, py]) => {
        const el = document.elementFromPoint(px, py)
        return el && getComputedStyle(el).cursor
      },
      [x, y],
    )
  }

  test('activates the control across its whole width', async ({ page }) => {
    const { control, box, y } = await open(page, 'with-labels', 'Subscribe to newsletter')
    const right = box.x + box.width

    expect(await cursorAt(page, right + 1, y)).toBe('pointer')
    expect(await cursorAt(page, right + 7, y)).toBe('pointer')

    await page.mouse.click(right + 4, y)
    await expect(control).toHaveAttribute('data-state', 'checked')
  })

  test('follows the writing direction', async ({ page }) => {
    const { control } = await open(page, 'with-labels', 'Subscribe to newsletter')
    await page.evaluate(() => {
      document.documentElement.dir = 'rtl'
    })
    const box = await control.boundingBox()
    if (!box) throw new Error('control has no layout box')

    await page.mouse.click(box.x - 4, box.y + box.height / 2)
    await expect(control).toHaveAttribute('data-state', 'checked')
  })

  test('stays inert while the control is disabled', async ({ page }) => {
    const { control, box, y } = await open(page, 'with-labels', 'Unavailable option')
    const x = box.x + box.width + 4

    expect(await cursorAt(page, x, y)).toBe('not-allowed')

    await page.mouse.click(x, y)
    await expect(control).toHaveAttribute('data-state', 'unchecked')
  })

  // The stacked story stretches this row wider than its label. The blank part
  // past the label does nothing, so it must not advertise a click.
  test('leaves the blank part of a stretched row inert', async ({ page }) => {
    const { control, box, y } = await open(page, 'with-labels', 'Subscribe to newsletter')
    const wrapper = await control.locator('..').boundingBox()
    if (!wrapper) throw new Error('wrapper has no layout box')
    const x = wrapper.x + wrapper.width - 1
    expect(x).toBeGreaterThan(box.x + box.width + 8)

    expect(await cursorAt(page, x, y)).toBe('auto')

    await page.mouse.click(x, y)
    await expect(control).toHaveAttribute('data-state', 'unchecked')
  })
})
