import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

// Workaround for storybook 10.3.x: `@storybook/addon-docs` injects an MDX
// provider import via `import.meta.resolve(...)`, which returns a `file://`
// URL that Vite/Rollup cannot resolve. Strip the prefix back to a regular
// filesystem path so MDX pages build and dev-serve cleanly.
const resolveFileUrlImports = {
  name: 'schatten:resolve-file-url-imports',
  enforce: 'pre' as const,
  resolveId(source: string) {
    if (source.startsWith('file://')) {
      return fileURLToPath(source)
    }
    return null
  },
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (config) => {
    const tailwindcss = (await import('@tailwindcss/vite')).default
    config.plugins = config.plugins || []
    config.plugins.push(resolveFileUrlImports, tailwindcss())

    if (process.env.STORYBOOK_BASE) {
      config.base = process.env.STORYBOOK_BASE
    } else if (process.env.GITHUB_ACTIONS) {
      config.base = '/schatten/'
    }

    return config
  },
}

export default config
