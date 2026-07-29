import type { Preview } from '@storybook/react-vite'
import { useEffect } from 'react'

// Import Tailwind + design tokens + themes
import '../src/styles/globals.css'

// `STORYBOOK_CHANNEL` is injected by `.github/workflows/deploy-storybook.yml`:
// the `develop` build (published at /schatten/next/) sets it to `next`, the
// `main` build leaves it `stable`.
//
// Read via `import.meta.env`, NOT `process.env`: this file is bundled into the
// browser preview iframe, where `process` is not a global. A bare `process.env`
// reference there throws `ReferenceError: process is not defined` and aborts
// story rendering — Storybook 10's Vite builder does not shim `process` for the
// preview. Storybook's Vite builder does add `STORYBOOK_` to Vite's `envPrefix`,
// so `STORYBOOK_`-prefixed vars surface on `import.meta.env` in both dev and
// build, resolving to `undefined` in local dev / VRT where the var is unset.
const importMetaEnv = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
const isNextChannel = importMetaEnv?.STORYBOOK_CHANNEL === 'next'

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
    '<a href="https://yasmro.github.io/schatten/storybook/" style="color:#fff;text-decoration:underline;font-weight:700">公開版を見る →</a>'
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
    a11y: {
      // Pin the dev-time a11y panel (addon-a11y) to the SAME WCAG 2.1 A/AA
      // surface the VRT axe assertions use (`.withTags([...])` in every
      // *.vrt.spec.ts, #147). Without `runOnly`, axe also runs best-practice
      // rules (`region` / `landmark-one-main` / `page-has-heading-one`) that
      // flag the Storybook iframe itself (no landmarks, no <h1>) on every
      // story — pure noise. Keeping the tag set identical means "green in the
      // dev panel" maps to the same contract CI enforces.
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
      // `test: 'off'` — NOT inert. addon-a11y's preview `afterEach` runs axe
      // on every `viewMode=story` render whenever `test !== 'off'` (see the
      // `shouldRunEnvironmentIndependent` guard in addon-a11y's preview.js).
      // Playwright loads exactly those `iframe.html?viewMode=story` URLs, so
      // the addon's run RACES our `@axe-core/playwright` `.analyze()` in the
      // same frame → intermittent `Error: Axe is already running` (worst on
      // Toast, whose toasts mount in a useEffect → a second render → a second
      // axe run). Phase 1's exit-0 shim masked it; #346 (blocking) surfaced it.
      // Our a11y test runner IS `@axe-core/playwright` (the CI `a11y` gate), so
      // the addon's headless run is redundant — turn it off and keep addon-a11y
      // as the on-demand dev PANEL only. The panel still scans the selected
      // story with the pinned tag set above.
      test: 'off',
    },
    options: {
      // Comparator form (was a `storySort.order` array). The top-level group
      // order is unchanged; the function exists so the per-component parity
      // story ("React vs Vanilla HTML", export `Parity`, story id ending
      // `--parity`) can be forced LAST within its component. That story lives
      // in `<Name>.parity.stories.tsx`, which loads before `<Name>.stories.tsx`
      // by filename, so without this it sorts first. Every other pair returns
      // 0 → the stable sort preserves the previous load order (the default
      // `configure` method), so only the parity story moves.
      // NOTE: Storybook statically generates + `eval`s this arrow at index
      // build (getStorySortParameter). It MUST be an inline arrow of plain JS:
      // an external reference is `unsupported`, and any TS type annotation on a
      // param survives babel codegen into the eval'd string → "Unexpected token
      // ':'". So `a` / `b` cannot be annotated, and `options.storySort` is too
      // loosely typed to type them contextually — hence the targeted suppress.
      // @ts-expect-error -- a/b are Storybook IndexEntry (id, title); see note
      storySort: (a, b) => {
        const order = [
          'Welcome',
          'Getting Started',
          'Tokens',
          'Theming',
          'CSS API',
          'Patterns',
          'Components',
        ]
        const ga = order.indexOf(a.title.split('/')[0])
        const gb = order.indexOf(b.title.split('/')[0])
        const ta = ga === -1 ? order.length : ga
        const tb = gb === -1 ? order.length : gb
        if (ta !== tb) return ta - tb
        if (a.title === b.title) {
          const ap = a.id.endsWith('--parity')
          const bp = b.id.endsWith('--parity')
          if (ap !== bp) return ap ? 1 : -1
        }
        return 0
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
          { value: 'none', title: 'Default (Alabaster)' },
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
      // Stories that own their own theme state (e.g. ThemeProvider
      // stories) opt out of this decorator to avoid two writers racing
      // on `<html>`. Stories declare it via:
      //   parameters: { disableGlobalThemeDecorator: true }
      const disableGlobalThemeDecorator = context.parameters?.disableGlobalThemeDecorator === true

      useEffect(() => {
        if (disableGlobalThemeDecorator) return
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
      }, [isDark, season, disableGlobalThemeDecorator])

      useEffect(() => {
        if (isNextChannel) mountUnreleasedBanner()
      }, [])

      return (
        <div
          className={`${isDark && !disableGlobalThemeDecorator ? 'dark bg-background' : ''} p-8`}
          style={isNextChannel ? { paddingTop: '3rem' } : undefined}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
