import { test as base, expect } from '@playwright/test'

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/fonts.googleapis.com/**', (route) => route.abort())
    await page.route('**/fonts.gstatic.com/**', (route) => route.abort())
    await use(page)
  },
})

export { expect }
