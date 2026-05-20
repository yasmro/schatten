import { act } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './useTheme'

// React 19 looks at this global to allow `act()` boundaries outside the
// usual `@testing-library/react` `render(...)` wrapper. The `hydrateRoot`
// calls below run their own roots.
;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true

// Renders the SSR output into a jsdom container, then hydrates with
// the same tree. Verifies that React does NOT log a hydration mismatch
// warning, and that the post-effect state converges on the right
// values (matchMedia / localStorage).

function Probe() {
  const { mode, special, modeSetting } = useTheme()
  return (
    <div
      data-testid="probe"
      data-mode={mode}
      data-modesetting={modeSetting}
      data-special={special ?? 'null'}
    />
  )
}

function installMatchMediaMock(initialDark: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: initialDark && query.includes('dark'),
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: () => false,
    })),
  })
}

beforeEach(() => {
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
  installMatchMediaMock(false)
})

afterEach(() => {
  vi.restoreAllMocks()
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.removeAttribute('data-theme')
})

describe('ThemeProvider (hydration)', () => {
  it('hydrates without React mismatch warnings when system=light', async () => {
    const tree = (
      <ThemeProvider defaultMode="system">
        <Probe />
      </ThemeProvider>
    )
    const ssrHtml = renderToString(tree)
    const container = document.createElement('div')
    container.innerHTML = ssrHtml
    document.body.appendChild(container)

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    await act(async () => {
      hydrateRoot(container, tree)
    })

    const mismatch = errorSpy.mock.calls.find(([msg]) => {
      if (typeof msg !== 'string') return false
      return msg.includes('did not match') || msg.includes('Hydration')
    })
    expect(mismatch, errorSpy.mock.calls.map((c) => c[0]).join('\n')).toBeUndefined()
  })

  it('converges to OS dark mode after effect when system=dark', async () => {
    installMatchMediaMock(true)
    const tree = (
      <ThemeProvider defaultMode="system">
        <Probe />
      </ThemeProvider>
    )
    const ssrHtml = renderToString(tree)
    const container = document.createElement('div')
    container.innerHTML = ssrHtml
    document.body.appendChild(container)

    await act(async () => {
      hydrateRoot(container, tree)
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(container.querySelector('[data-testid="probe"]')?.getAttribute('data-mode')).toBe('dark')
  })

  it('converges to persisted dark + special after effect', async () => {
    localStorage.setItem(
      'schatten-theme',
      JSON.stringify({ mode: 'dark', special: 'season--autumn-late' }),
    )
    const tree = (
      <ThemeProvider defaultMode="light">
        <Probe />
      </ThemeProvider>
    )
    const ssrHtml = renderToString(tree)
    const container = document.createElement('div')
    container.innerHTML = ssrHtml
    document.body.appendChild(container)

    await act(async () => {
      hydrateRoot(container, tree)
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('season--autumn-late')
  })
})
