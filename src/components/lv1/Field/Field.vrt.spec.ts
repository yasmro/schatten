import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-field'

const stories = [
  'with-input',
  'with-select',
  'with-tooltip',
  'required',
  'error-state',
  'disabled',
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`Field / ${story} / ${theme}`, async ({ page }) => {
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

    test(`Field / ${story} / ${theme} / a11y`, async ({ page }) => {
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

// jsdom can dispatch the click, but only a real pointer proves nothing sits on
// top of the label. A bare Switch is named by this label, so it must also toggle.
test('Field / clicking the label toggles a self-labelled control it names', async ({ page }) => {
  await page.goto(storyUrl('with-switch', 'light'))
  await page.waitForLoadState('networkidle')

  const control = page.getByRole('switch', { name: 'Notifications' })
  await expect(control).toHaveAttribute('data-state', 'unchecked')

  await page.getByText('Notifications', { exact: true }).click()
  await expect(control).toHaveAttribute('data-state', 'checked')
})
