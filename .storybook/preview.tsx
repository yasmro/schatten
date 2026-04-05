import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'

// Import Tailwind + design tokens + themes
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disabled: true },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['Welcome', 'Foundation', 'Components'],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    season: {
      description: 'Season theme',
      defaultValue: 'none',
      toolbar: {
        title: 'Season',
        icon: 'paintbrush',
        items: [
          { value: 'none', title: 'Default (Blue)' },
          { value: 'spring-early', title: 'Spring Early' },
          { value: 'spring-late', title: 'Spring Late' },
          { value: 'summer-early', title: 'Summer Early' },
          { value: 'summer-peak', title: 'Summer Peak' },
          { value: 'autumn-early', title: 'Autumn Early' },
          { value: 'autumn-late', title: 'Autumn Late' },
          { value: 'winter-early', title: 'Winter Early' },
          { value: 'winter-deep', title: 'Winter Deep' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme
      const season = context.globals.season
      const isDark = theme === 'dark'

      useEffect(() => {
        const root = document.documentElement
        const body = document.body

        // Apply dark/light mode
        if (isDark) {
          root.classList.add('dark')
          root.classList.remove('light')
          body.classList.add('dark')
          body.classList.remove('light')
        } else {
          root.classList.remove('dark')
          root.classList.add('light')
          body.classList.remove('dark')
          body.classList.add('light')
        }

        // Apply background color
        body.style.backgroundColor = isDark ? '' : '#fff'

        // Apply season theme
        if (season && season !== 'none') {
          root.setAttribute('data-season', season)
        } else {
          root.removeAttribute('data-season')
        }
      }, [isDark, season])

      return (
        <div className={`${isDark ? 'dark' : ''} p-8`}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
