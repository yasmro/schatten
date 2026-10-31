import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './src',
  testMatch: '**/*.vrt.spec.ts',
  snapshotPathTemplate: '{snapshotDir}/{testFileDir}/__snapshots__/{arg}{ext}',
  fullyParallel: true,
  // Playwright defaults `workers` to 50% of cores. On the 3-vCPU macos CI
  // runner that floors to 1, serialising every VRT screenshot (~9 min for
  // 313 shots) and making `fullyParallel` a no-op. '100%' uses all cores.
  // This does NOT risk pixel flakiness: each test waits for `networkidle`
  // + a settled DOM before capturing, so the render is deterministic
  // regardless of worker count — parallelism changes speed, not pixels.
  // Local runs keep the default (undefined → 50% of the dev machine).
  // If the shared Storybook dev server becomes the bottleneck under
  // parallelism, the next step is serving a static `storybook build`.
  workers: process.env.CI ? '100%' : undefined,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:6006',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
  // WebKit is local-only for now (#567): the macOS CI runner is scarce (#582) and
  // the VRT runtime is under review (#583). Only DateCalendar's interaction spec
  // runs here, because focus handling is where Safari differs. No screenshots.
  projects: process.env.PW_WEBKIT
    ? [
        {
          name: 'webkit',
          testMatch: '**/{DateCalendar,DatePicker}.interaction.vrt.spec.ts',
          use: { browserName: 'webkit' },
        },
      ]
    : undefined,
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
