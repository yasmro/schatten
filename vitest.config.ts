import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: [
      'src/**/*.test.{ts,tsx}',
      'biome-plugins/**/*.test.ts',
      'scripts/**/*.test.ts',
      '.claude/skills/**/*.test.ts',
    ],
    // Real-browser tests run under vitest.browser.config.ts (#650).
    exclude: [...configDefaults.exclude, '**/*.browser.test.{ts,tsx}'],
  },
})
