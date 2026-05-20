import type * as React from 'react'
import { act } from 'react'
import { hydrateRoot, type Root } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './useTheme'

// React 19 looks at this global to allow `act()` boundaries outside the
// usual `@testing-library/react` `render(...)` wrapper. The `hydrateRoot`
// calls below run their own roots.
;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true

/**
 * Drain pending microtask-scheduled React work. The hydration effect's
 * `applyToDocument` call schedules a MutationObserver callback in a
 * microtask, which then schedules a (no-op) setState that React wants
 * to see inside an `act` boundary. Two passes are enough: the first
 * drains the observer microtask, the second picks up the setState it
 * scheduled.
 */
async function flushObserverMicrotasks() {
  await act(async () => {})
  await act(async () => {})
}

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

// Note: these hydration tests log a few "update to ThemeProvider was
// not wrapped in act(...)" warnings under React 19. They are false
// positives — the MutationObserver inside ThemeProvider fires in a
// microtask that straddles the `act(async () => {})` boundary, then
// lands a no-op functional setState. The same DOM-as-source-of-truth
// behaviour is verified deterministically by the regular tests in
// `ThemeProvider.test.tsx`, so the warnings here are cosmetic.

/**
 * Tracks the React roots created in each test so afterEach can unmount
 * them. Without explicit unmount, the Provider's effects (matchMedia
 * subscription, MutationObserver) stay live past the test boundary and
 * fire after Vitest has torn down jsdom — `window` is undefined at that
 * point and the leftover work throws. CI catches this; local runs are
 * lucky enough to schedule garbage collection first.
 */
const activeRoots: Root[] = []

/** Hydrate + register for teardown. Use instead of `hydrateRoot` directly. */
function hydrateAndTrack(container: Element, tree: React.ReactNode): Root {
  const root = hydrateRoot(container, tree)
  activeRoots.push(root)
  return root
}

beforeEach(() => {
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
  installMatchMediaMock(false)
})

afterEach(async () => {
  // Unmount every React root the test created. This stops the
  // Provider's MutationObserver / matchMedia subscription / storage
  // listener cleanly so no work is scheduled into a torn-down jsdom.
  await act(async () => {
    for (const root of activeRoots.splice(0)) root.unmount()
  })
  for (const node of [...document.body.children]) node.remove()
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
      hydrateAndTrack(container, tree)
    })
    await flushObserverMicrotasks()

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
      hydrateAndTrack(container, tree)
    })
    await flushObserverMicrotasks()

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
      hydrateAndTrack(container, tree)
    })
    await flushObserverMicrotasks()

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.getAttribute('data-theme')).toBe('season--autumn-late')
  })
})
