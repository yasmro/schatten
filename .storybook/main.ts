import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
    config.plugins.push(tailwindcss())

    if (process.env.STORYBOOK_BASE) {
      config.base = process.env.STORYBOOK_BASE
    } else if (process.env.GITHUB_ACTIONS) {
      config.base = '/schatten/'
    }

    return config
  },
}

export default config
