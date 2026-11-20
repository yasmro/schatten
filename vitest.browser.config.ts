import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

// Unit tests that need a real browser (#650): computed styles (jsdom loads no
// stylesheet) and real pointer input (`:hover`, pointer capture). Everything
// else stays on the jsdom suite in vitest.config.ts. Files are named
// `*.browser.test.tsx`; see testing-guideline §"jsdom or a real browser".
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.browser.setup.ts'],
    include: ['src/**/*.browser.test.{ts,tsx}'],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
})
