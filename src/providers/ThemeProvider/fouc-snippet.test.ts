import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { THEME_INIT_SCRIPT } from '../../theme-init'

// `THEME_INIT_SCRIPT` (built in init-script.ts) is the single source of
// truth for the FOUC snippet — the README and `<ThemeInitScript>` render
// the same bytes. These tests pin its *behavior* against the Provider's
// `localStorage` contract; init-script.test.ts pins the exact bytes, and
// api-stability.md ("Provider runtime contract") freezes the shape.

function runSnippet() {
  // Evaluate in the current jsdom context so localStorage, document,
  // and window references resolve to the real test globals.
  new Function(THEME_INIT_SCRIPT)()
}

function installMatchMedia(matchesDark: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      matches: matchesDark && query.includes('dark'),
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

beforeEach(() => {
  document.documentElement.classList.remove('dark')
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
  installMatchMedia(false)
})

afterEach(() => {
  document.documentElement.classList.remove('dark')
  document.documentElement.removeAttribute('data-theme')
  vi.restoreAllMocks()
})

describe('README FOUC inline snippet (contract with #128 / #129)', () => {
  it('does nothing when no storage and OS is light', () => {
    runSnippet()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })

  it('adds .dark when OS prefers dark and no explicit setting is stored', () => {
    installMatchMedia(true)
    runSnippet()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('adds .dark when storage says mode=dark, regardless of OS', () => {
    installMatchMedia(false)
    localStorage.setItem('schatten-theme', JSON.stringify({ mode: 'dark', special: null }))
    runSnippet()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('respects mode=light even when OS prefers dark', () => {
    installMatchMedia(true)
    localStorage.setItem('schatten-theme', JSON.stringify({ mode: 'light', special: null }))
    runSnippet()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('writes data-theme when storage holds a Special id', () => {
    localStorage.setItem(
      'schatten-theme',
      JSON.stringify({ mode: 'light', special: 'season--summer-peak' }),
    )
    runSnippet()
    expect(document.documentElement.getAttribute('data-theme')).toBe('season--summer-peak')
  })

  it('applies mode + special together', () => {
    localStorage.setItem(
      'schatten-theme',
      JSON.stringify({ mode: 'dark', special: 'season--winter-deep' }),
    )
    runSnippet()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('season--winter-deep')
  })

  it('silently ignores corrupt JSON', () => {
    localStorage.setItem('schatten-theme', '{not json')
    expect(() => runSnippet()).not.toThrow()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('treats missing localStorage as system (no throw)', () => {
    // Simulate a hostile localStorage by making getItem throw.
    const original = Storage.prototype.getItem
    Storage.prototype.getItem = () => {
      throw new Error('storage disabled')
    }
    try {
      expect(() => runSnippet()).not.toThrow()
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    } finally {
      Storage.prototype.getItem = original
    }
  })

  it('uses the `.special` field name (not the legacy `.season`)', () => {
    // Anti-regression: the FOUC snippet must read the same field name the
    // Provider writes. The pre-#128 draft of #129 used `.season`; that
    // value should now be a no-op.
    localStorage.setItem(
      'schatten-theme',
      JSON.stringify({ mode: 'light', season: 'season--spring-late' }),
    )
    runSnippet()
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
  })
})
