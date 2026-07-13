import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from './ThemeProvider'
import type { ThemeContextValue } from './theme-context'
import { useTheme } from './useTheme'

const STORAGE_KEY = 'schatten-theme'

/** Typed test consumer — renders all observable state to data-testid spans. */
function Consumer({ onState }: { onState?: (state: ThemeContextValue) => void }) {
  const state = useTheme()
  onState?.(state)
  return (
    <>
      <span data-testid="mode">{state.mode}</span>
      <span data-testid="modeSetting">{state.modeSetting}</span>
      <span data-testid="special">{state.special ?? 'null'}</span>
      <span data-testid="isHydrated">{state.isHydrated ? 'yes' : 'no'}</span>
      <button type="button" onClick={() => state.setMode('dark')}>
        set-dark
      </button>
      <button type="button" onClick={() => state.setMode('light')}>
        set-light
      </button>
      <button type="button" onClick={() => state.setMode('system')}>
        set-system
      </button>
      <button type="button" onClick={() => state.setSpecial('season--spring-late')}>
        set-spring-late
      </button>
      <button type="button" onClick={() => state.setSpecial(null)}>
        clear-special
      </button>
    </>
  )
}

/** Build a controllable matchMedia mock that can fire change events. */
function installMatchMediaMock(initialDark: boolean) {
  type Listener = (event: MediaQueryListEvent) => void
  const listeners = new Set<Listener>()
  let matches = initialDark
  const mq = {
    get matches() {
      return matches
    },
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: (_: 'change', l: Listener) => {
      listeners.add(l)
    },
    removeEventListener: (_: 'change', l: Listener) => {
      listeners.delete(l)
    },
    addListener: (l: Listener) => listeners.add(l),
    removeListener: (l: Listener) => listeners.delete(l),
    dispatchEvent: () => false,
  }
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue(mq))
  // Also expose on `window` directly because Provider reads
  // `window.matchMedia`.
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockReturnValue(mq),
  })
  return {
    fire(newMatches: boolean) {
      matches = newMatches
      const event = { matches: newMatches, media: mq.media } as MediaQueryListEvent
      for (const listener of listeners) listener(event)
    },
  }
}

beforeEach(() => {
  // Clean DOM state between tests.
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.removeAttribute('data-theme')
  localStorage.clear()
  // Default matchMedia: OS in light mode.
  installMatchMediaMock(false)
})

afterEach(() => {
  vi.unstubAllGlobals()
  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.removeAttribute('data-theme')
})

describe('ThemeProvider', () => {
  describe('defaultMode', () => {
    it('initializes to light when defaultMode="light"', () => {
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('light')
      expect(screen.getByTestId('modeSetting')).toHaveTextContent('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('initializes to dark when defaultMode="dark"', () => {
      render(
        <ThemeProvider defaultMode="dark">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
      expect(screen.getByTestId('modeSetting')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('follows OS preference when defaultMode="system" and OS is dark', () => {
      installMatchMediaMock(true)
      render(
        <ThemeProvider defaultMode="system">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
      expect(screen.getByTestId('modeSetting')).toHaveTextContent('system')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('defaults to system when defaultMode is omitted', () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('modeSetting')).toHaveTextContent('system')
    })
  })

  describe('setMode', () => {
    it('toggles the .dark class on <html>', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-dark' }))
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      await user.click(screen.getByRole('button', { name: 'set-light' }))
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('does not touch a .light class on <html>', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-dark' }))
      expect(document.documentElement.classList.contains('light')).toBe(false)
      await user.click(screen.getByRole('button', { name: 'set-light' }))
      expect(document.documentElement.classList.contains('light')).toBe(false)
    })

    it('persists the new mode to localStorage', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-dark' }))
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      expect(stored.mode).toBe('dark')
    })

    it('returns to OS tracking when setMode("system") is called', async () => {
      const user = userEvent.setup()
      const mm = installMatchMediaMock(false)
      render(
        <ThemeProvider defaultMode="dark">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-system' }))
      expect(screen.getByTestId('modeSetting')).toHaveTextContent('system')
      expect(screen.getByTestId('mode')).toHaveTextContent('light')

      // OS flips to dark — provider follows
      act(() => mm.fire(true))
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
    })
  })

  describe('system mode tracking', () => {
    it('updates mode when prefers-color-scheme media query changes', () => {
      const mm = installMatchMediaMock(false)
      render(
        <ThemeProvider defaultMode="system">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('light')

      act(() => mm.fire(true))
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)

      act(() => mm.fire(false))
      expect(screen.getByTestId('mode')).toHaveTextContent('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('stops following OS once the user picks an explicit mode', async () => {
      const user = userEvent.setup()
      const mm = installMatchMediaMock(false)
      render(
        <ThemeProvider defaultMode="system">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-light' }))
      act(() => mm.fire(true))
      // Still light — system events no longer drive mode.
      expect(screen.getByTestId('mode')).toHaveTextContent('light')
    })
  })

  describe('defaultSpecial', () => {
    it('sets data-theme when defaultSpecial is an explicit id', () => {
      render(
        <ThemeProvider defaultSpecial="season--spring-late">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('special')).toHaveTextContent('season--spring-late')
      expect(document.documentElement.getAttribute('data-theme')).toBe('season--spring-late')
    })

    it('resolves to the current season when defaultSpecial="auto-seasonal"', () => {
      // Pick a date inside summer-peak (Jun 21 – Aug 6) so the test
      // is deterministic regardless of when CI runs.
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-07-15T12:00:00Z'))
      try {
        render(
          <ThemeProvider defaultSpecial="auto-seasonal">
            <Consumer />
          </ThemeProvider>,
        )
        expect(screen.getByTestId('special')).toHaveTextContent('season--summer-peak')
        expect(document.documentElement.getAttribute('data-theme')).toBe('season--summer-peak')
      } finally {
        vi.useRealTimers()
      }
    })

    it('does not set data-theme when defaultSpecial is null', () => {
      render(
        <ThemeProvider defaultSpecial={null}>
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('special')).toHaveTextContent('null')
      expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
    })
  })

  describe('setSpecial', () => {
    it('writes data-theme on the html element', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-spring-late' }))
      expect(document.documentElement.getAttribute('data-theme')).toBe('season--spring-late')
    })

    it('removes data-theme when called with null', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultSpecial="season--spring-late">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'clear-special' }))
      expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
    })

    it('persists the new special to localStorage', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-spring-late' }))
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      expect(stored.special).toBe('season--spring-late')
    })
  })

  describe('localStorage', () => {
    it('restores mode and special from storage on mount', () => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ mode: 'dark', special: 'season--winter-deep' }),
      )
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
      expect(screen.getByTestId('special')).toHaveTextContent('season--winter-deep')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      expect(document.documentElement.getAttribute('data-theme')).toBe('season--winter-deep')
    })

    it('ignores corrupt JSON in storage', () => {
      localStorage.setItem(STORAGE_KEY, '{not json')
      render(
        <ThemeProvider defaultMode="dark">
          <Consumer />
        </ThemeProvider>,
      )
      // Falls through to defaultMode.
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
    })

    it('ignores unknown Special ids in storage', () => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ mode: 'light', special: 'nonsense--unknown' }),
      )
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('special')).toHaveTextContent('null')
    })

    it('does not write storage when storageKey is null', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultMode="light" storageKey={null}>
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-dark' }))
      expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
    })

    it('syncs across tabs via the storage event', () => {
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('light')

      // Simulate another tab writing dark mode.
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode: 'dark', special: null }))
      act(() => {
        window.dispatchEvent(
          new StorageEvent('storage', {
            key: STORAGE_KEY,
            newValue: JSON.stringify({ mode: 'dark', special: null }),
            oldValue: null,
            storageArea: localStorage,
          }),
        )
      })

      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })

  describe('useTheme outside provider', () => {
    it('throws a descriptive error', () => {
      // Suppress React's own error boundary noise.
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
      expect(() => render(<Consumer />)).toThrow(/useTheme must be used within a <ThemeProvider>/)
      spy.mockRestore()
    })
  })

  describe('DOM-as-source-of-truth (MutationObserver sync)', () => {
    // MutationObserver fires asynchronously via microtask. `act` flushes
    // microtasks so React state lands before assertions.

    it('updates mode when an external script adds the .dark class on <html>', async () => {
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('light')

      await act(async () => {
        document.documentElement.classList.add('dark')
      })

      expect(screen.getByTestId('mode')).toHaveTextContent('dark')
    })

    it('updates mode when an external script removes the .dark class', async () => {
      render(
        <ThemeProvider defaultMode="dark">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('mode')).toHaveTextContent('dark')

      await act(async () => {
        document.documentElement.classList.remove('dark')
      })

      expect(screen.getByTestId('mode')).toHaveTextContent('light')
    })

    it('updates special when an external script sets data-theme', async () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('special')).toHaveTextContent('null')

      await act(async () => {
        document.documentElement.setAttribute('data-theme', 'season--autumn-late')
      })

      expect(screen.getByTestId('special')).toHaveTextContent('season--autumn-late')
    })

    it('updates special to null when an external script removes data-theme', async () => {
      render(
        <ThemeProvider defaultSpecial="season--summer-peak">
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('special')).toHaveTextContent('season--summer-peak')

      await act(async () => {
        document.documentElement.removeAttribute('data-theme')
      })

      expect(screen.getByTestId('special')).toHaveTextContent('null')
    })

    it('rejects unknown data-theme values (stays null)', async () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )

      await act(async () => {
        document.documentElement.setAttribute('data-theme', 'nonsense--xyz')
      })

      expect(screen.getByTestId('special')).toHaveTextContent('null')
    })

    it('syncs mode across two ThemeProvider instances in the same page (Astro Islands)', async () => {
      function IslandA() {
        const { mode, setMode } = useTheme()
        return (
          <>
            <span data-testid="A-mode">{mode}</span>
            <button type="button" onClick={() => setMode('dark')}>
              A-set-dark
            </button>
          </>
        )
      }

      function IslandB() {
        const { mode } = useTheme()
        return <span data-testid="B-mode">{mode}</span>
      }

      const user = userEvent.setup()
      render(
        <>
          <div>
            <ThemeProvider defaultMode="light" storageKey={null}>
              <IslandA />
            </ThemeProvider>
          </div>
          <div>
            <ThemeProvider defaultMode="light" storageKey={null}>
              <IslandB />
            </ThemeProvider>
          </div>
        </>,
      )

      expect(screen.getByTestId('A-mode')).toHaveTextContent('light')
      expect(screen.getByTestId('B-mode')).toHaveTextContent('light')

      // A clicks set-dark — DOM mutates — B's MutationObserver should sync.
      await user.click(screen.getByRole('button', { name: 'A-set-dark' }))

      expect(screen.getByTestId('A-mode')).toHaveTextContent('dark')
      expect(screen.getByTestId('B-mode')).toHaveTextContent('dark')
    })

    it('syncs special across two ThemeProvider instances in the same page', async () => {
      function IslandA() {
        const { setSpecial } = useTheme()
        return (
          <button type="button" onClick={() => setSpecial('season--spring-late')}>
            A-set-spring
          </button>
        )
      }

      function IslandB() {
        const { special } = useTheme()
        return <span data-testid="B-special">{special ?? 'null'}</span>
      }

      const user = userEvent.setup()
      render(
        <>
          <div>
            <ThemeProvider storageKey={null}>
              <IslandA />
            </ThemeProvider>
          </div>
          <div>
            <ThemeProvider storageKey={null}>
              <IslandB />
            </ThemeProvider>
          </div>
        </>,
      )

      expect(screen.getByTestId('B-special')).toHaveTextContent('null')

      await user.click(screen.getByRole('button', { name: 'A-set-spring' }))

      expect(screen.getByTestId('B-special')).toHaveTextContent('season--spring-late')
    })
  })

  describe('disableTransitionOnChange', () => {
    it('injects and removes a transition-blocking style tag on mode change', async () => {
      const user = userEvent.setup()
      // Capture the rAF callback instead of letting a real animation frame
      // fire it. `suppressTransitionsOnce` inserts the <style> synchronously
      // but schedules its removal via `requestAnimationFrame`; on real timers
      // a frame can fire between the click and the first query (worse under CI
      // scheduling), removing the tag before we assert it was inserted. By
      // controlling the frame we pin the insert-then-cleanup sequence.
      const rafCallbacks: FrameRequestCallback[] = []
      const rafSpy = vi
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation((cb) => rafCallbacks.push(cb))
      try {
        render(
          <ThemeProvider defaultMode="light" disableTransitionOnChange>
            <Consumer />
          </ThemeProvider>,
        )
        await user.click(screen.getByRole('button', { name: 'set-dark' }))
        // Inserted synchronously; cleanup is deferred to the captured frame.
        const style = document.getElementById('schatten-theme-transition-suppressor')
        expect(style).not.toBeNull()
        // Flush the captured frame — this runs the cleanup deterministically.
        expect(rafCallbacks).toHaveLength(1)
        act(() => {
          for (const cb of rafCallbacks.splice(0)) cb(0)
        })
        expect(document.getElementById('schatten-theme-transition-suppressor')).toBeNull()
      } finally {
        rafSpy.mockRestore()
      }
    })

    it('does not inject the style tag when disableTransitionOnChange is false', async () => {
      const user = userEvent.setup()
      render(
        <ThemeProvider defaultMode="light">
          <Consumer />
        </ThemeProvider>,
      )
      await user.click(screen.getByRole('button', { name: 'set-dark' }))
      expect(document.getElementById('schatten-theme-transition-suppressor')).toBeNull()
    })
  })

  describe('isHydrated', () => {
    it('becomes true after mount', () => {
      render(
        <ThemeProvider>
          <Consumer />
        </ThemeProvider>,
      )
      expect(screen.getByTestId('isHydrated')).toHaveTextContent('yes')
    })
  })
})
