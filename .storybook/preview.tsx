import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'

// Import Tailwind + design tokens + themes
import '../src/styles/globals.css'

// `STORYBOOK_CHANNEL` is injected by `.github/workflows/deploy-storybook.yml`:
// the `develop` build (published at /schatten/next/) sets it to `next`, the
// `main` build leaves it `stable`. Storybook exposes `STORYBOOK_`-prefixed env
// vars to preview code, so this is also `undefined` in local dev and VRT runs.
const isNextChannel = process.env.STORYBOOK_CHANNEL === 'next'

const BANNER_ID = 'schatten-unreleased-banner'

/**
 * Mounts the develop (`/next/`) warning banner once into the preview `<body>`.
 *
 * It warns viewers that the page reflects unreleased, npm-unpublished tokens
 * and APIs — see `.claude/rules/api-stability.md`. The manager sidebar carries
 * the same marker (`.storybook/manager.ts`); this banner additionally covers
 * direct `iframe.html` links, which never render the manager chrome.
 *
 * Mounted imperatively (not via the per-story decorator) so a Docs page — which
 * renders many stories at once — shows exactly one banner instead of a stack.
 */
function mountUnreleasedBanner() {
  if (document.getElementById(BANNER_ID)) return

  const banner = document.createElement('div')
  banner.id = BANNER_ID
  banner.setAttribute('role', 'note')
  Object.assign(banner.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '2147483647',
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.4rem 1rem',
    backgroundColor: '#92400e',
    color: '#fff',
    font: '500 12px/1.4 system-ui, sans-serif',
    textAlign: 'center',
  })
  banner.innerHTML =
    '<span>⚠ 未リリース (develop) — 次バージョンの統合プレビューです。npm 未公開のトークン・API が含まれます。</span>' +
    '<a href="https://yasmro.github.io/schatten/" style="color:#fff;text-decoration:underline;font-weight:700">公開版を見る →</a>'
  document.body.appendChild(banner)
}

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
          root.setAttribute('data-theme', `season--${season}`)
        } else {
          root.removeAttribute('data-theme')
        }
      }, [isDark, season])

      useEffect(() => {
        if (isNextChannel) mountUnreleasedBanner()
      }, [])

      return (
        <div
          className={`${isDark ? 'dark bg-background' : ''} p-8`}
          style={isNextChannel ? { paddingTop: '3rem' } : undefined}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
