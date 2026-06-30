import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: [
      'src/**/*.test.{ts,tsx}',
      'oxlint-plugins/**/*.test.ts',
      'scripts/**/*.test.ts',
      '.claude/skills/**/*.test.ts',
    ],
  },
})
