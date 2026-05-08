import { test as base, expect } from '@playwright/test'

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/fonts.googleapis.com/**', (route) =>
      route.fulfill({ status: 200, contentType: 'text/css', body: '' }),
    )
    await page.route('**/fonts.gstatic.com/**', (route) => route.fulfill({ status: 200, body: '' }))
    await use(page)
  },
})

export { expect }
