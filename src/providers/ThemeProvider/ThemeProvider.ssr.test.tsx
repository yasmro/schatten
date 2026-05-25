// @vitest-environment node
import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './useTheme'

// On the server `window` / `document` / `localStorage` / `matchMedia`
// are all undefined. These tests verify that the Provider:
//   1. renders to a deterministic string,
//   2. emits `mode='light'` + `special=null` as the SSR baseline (so
//      the FOUC inline snippet at #129 is the single source of truth
//      for the real first-paint values), and
//   3. never throws when DOM globals are missing.

function Probe() {
  const { mode, modeSetting, special, isHydrated } = useTheme()
  return (
    <div
      data-mode={mode}
      data-modesetting={modeSetting}
      data-special={special ?? 'null'}
      data-hydrated={isHydrated ? 'yes' : 'no'}
    />
  )
}

describe('ThemeProvider (SSR / node env)', () => {
  it('renders to a string without touching DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(() =>
      renderToString(
        <ThemeProvider>
          <Probe />
        </ThemeProvider>,
      ),
    ).not.toThrow()
  })

  it('emits mode=light / special=null as the SSR baseline (defaultMode="system")', () => {
    const html = renderToString(
      <ThemeProvider defaultMode="system">
        <Probe />
      </ThemeProvider>,
    )
    expect(html).toContain('data-mode="light"')
    expect(html).toContain('data-modesetting="system"')
    expect(html).toContain('data-special="null"')
    expect(html).toContain('data-hydrated="no"')
  })

  it('honors explicit defaultMode on the server', () => {
    const html = renderToString(
      <ThemeProvider defaultMode="dark">
        <Probe />
      </ThemeProvider>,
    )
    expect(html).toContain('data-mode="dark"')
    expect(html).toContain('data-modesetting="dark"')
  })

  it('resolves defaultSpecial=auto-seasonal on the server', () => {
    // The function is date-dependent; assert only that *some* season id
    // landed (we just need to know it didn't throw / SSR'd null).
    const html = renderToString(
      <ThemeProvider defaultSpecial="auto-seasonal">
        <Probe />
      </ThemeProvider>,
    )
    expect(html).toMatch(/data-special="season--[a-z-]+"/)
  })

  it('renders the SSR baseline even when storageKey is null', () => {
    const html = renderToString(
      <ThemeProvider storageKey={null}>
        <Probe />
      </ThemeProvider>,
    )
    expect(html).toContain('data-mode="light"')
  })
})
