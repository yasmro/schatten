import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { getCurrentSeason, SEASONAL_THEME_METADATA } from '../../themes/seasonal'
import {
  type SpecialThemeId,
  ThemeContext,
  type ThemeContextValue,
  type ThemeMode,
  type ThemeModeSetting,
  type ThemeProviderInitialSpecial,
} from './theme-context'
import { readStoredTheme, type StoredTheme, writeStoredTheme } from './theme-storage'

export interface ThemeProviderProps {
  /**
   * Initial color-mode setting.
   * - `'light'` / `'dark'` — explicit.
   * - `'system'` — follow `prefers-color-scheme` (subscribed at runtime).
   * @default 'system'
   */
  defaultMode?: ThemeModeSetting
  /**
   * Initial Special theme.
   * - `null` / `undefined` — no Special applied (default).
   * - `'auto-seasonal'` — resolve via `getCurrentSeason()` at mount.
   * - A `SpecialThemeId` — pin to that Special.
   * @default null
   */
  defaultSpecial?: ThemeProviderInitialSpecial
  /**
   * `localStorage` key used to persist mode + special. Pass `null` to
   * disable persistence (useful in tests and embedded multi-app
   * scenarios).
   * @default 'schatten-theme'
   */
  storageKey?: string | null
  /**
   * Temporarily strip CSS transitions while applying a mode/special
   * change, so the swap is instantaneous instead of fading through
   * intermediate colors.
   * @default false
   */
  disableTransitionOnChange?: boolean
  children: ReactNode
}

const DEFAULT_STORAGE_KEY = 'schatten-theme'
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)'
const TRANSITION_SUPPRESSOR_ID = 'schatten-theme-transition-suppressor'

const VALID_SPECIAL_IDS: ReadonlySet<string> = new Set(Object.keys(SEASONAL_THEME_METADATA))

function isValidSpecial(value: unknown): value is SpecialThemeId {
  return typeof value === 'string' && VALID_SPECIAL_IDS.has(value)
}

function resolveInitialSpecial(
  value: ThemeProviderInitialSpecial | undefined,
): SpecialThemeId | null {
  if (value === undefined || value === null) return null
  if (value === 'auto-seasonal') {
    return `season--${getCurrentSeason()}` as SpecialThemeId
  }
  return isValidSpecial(value) ? value : null
}

/**
 * Read the OS `prefers-color-scheme` value. SSR-safe — returns
 * `'light'` when `window` / `matchMedia` are unavailable.
 */
function readSystemMode(): ThemeMode {
  if (typeof window === 'undefined') return 'light'
  if (typeof window.matchMedia !== 'function') return 'light'
  try {
    return window.matchMedia(DARK_MODE_MEDIA_QUERY).matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

/**
 * Collapse a `ThemeModeSetting` to the resolved `'light' | 'dark'`.
 * For `'system'`, reads the current OS preference.
 */
function resolveMode(setting: ThemeModeSetting): ThemeMode {
  return setting === 'system' ? readSystemMode() : setting
}

/**
 * Briefly inject a global `transition: none` rule, force reflow, then
 * remove it on the next frame. Used by `disableTransitionOnChange` to
 * make mode/special swaps feel instantaneous.
 */
function suppressTransitionsOnce(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById(TRANSITION_SUPPRESSOR_ID)) return
  const style = document.createElement('style')
  style.id = TRANSITION_SUPPRESSOR_ID
  style.appendChild(
    document.createTextNode(
      '*,*::before,*::after { transition: none !important; animation: none !important; }',
    ),
  )
  document.head.appendChild(style)
  // Force reflow so the no-transition style is committed before we
  // remove it on the next frame.
  void window.getComputedStyle(document.body).opacity
  window.requestAnimationFrame(() => {
    document.getElementById(TRANSITION_SUPPRESSOR_ID)?.remove()
  })
}

/**
 * Apply `mode` and `special` to `<html>`. Idempotent — safe under
 * React 19 StrictMode's double-invoke and across HMR.
 */
function applyToDocument(mode: ThemeMode, special: SpecialThemeId | null): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  // Mode: toggle `.dark` only (per theme-architecture.md — `.light` is
  // not used; absence of `.dark` IS the light state).
  if (mode === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  // Special: write or remove `data-theme`.
  if (special === null) {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', special)
  }
}

/**
 * Declarative manager for the Mode (light/dark) and Special
 * (`data-theme`) axes. Wrap your app root once and consume state with
 * `useTheme()`.
 *
 * The provider is client-only — Server Component imports work because
 * the package banner injects `'use client'` at build time.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { ThemeProvider } from '@yasmro/schatten/providers'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <ThemeProvider defaultMode="system" defaultSpecial="auto-seasonal">
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export function ThemeProvider({
  defaultMode = 'system',
  defaultSpecial = null,
  storageKey = DEFAULT_STORAGE_KEY,
  disableTransitionOnChange = false,
  children,
}: ThemeProviderProps) {
  // SSR / first-paint values:
  //   modeSetting falls back to `defaultMode`; the resolved `mode` is
  //   `'light'` until the client effect hydrates from localStorage /
  //   matchMedia. Issue #129's inline snippet is responsible for setting
  //   the DOM to the real value before first paint — the React state
  //   below converges on first effect.
  const [modeSetting, setModeSettingState] = useState<ThemeModeSetting>(defaultMode)
  const [mode, setModeState] = useState<ThemeMode>(() =>
    defaultMode === 'system' ? 'light' : defaultMode,
  )
  const [special, setSpecialState] = useState<SpecialThemeId | null>(() =>
    resolveInitialSpecial(defaultSpecial),
  )
  const [isHydrated, setIsHydrated] = useState(false)

  // Persistence is disabled when `storageKey === null` (test / multi-app).
  const persistKey: string | null = storageKey
  const disableTransitionRef = useRef(disableTransitionOnChange)
  disableTransitionRef.current = disableTransitionOnChange

  // Hydration effect — runs once on mount.
  //
  // Order:
  //   1. Restore persisted setting (if any) — overrides the SSR default.
  //   2. Resolve `'system'` against the actual `matchMedia` value.
  //   3. Apply to the DOM.
  //   4. Mark `isHydrated`.
  //
  // matchMedia / storage event subscriptions are attached separately
  // below so they can react to live changes after hydration. The initial
  // `defaultMode` / `defaultSpecial` / `persistKey` are intentionally
  // captured as initial values here — re-running the hydration effect
  // when those props change would clobber the user's current selection.
  // biome-ignore lint/correctness/useExhaustiveDependencies: mount-only by design
  useEffect(() => {
    let nextSetting: ThemeModeSetting = defaultMode
    let nextSpecial: SpecialThemeId | null = resolveInitialSpecial(defaultSpecial)

    if (persistKey !== null) {
      const stored = readStoredTheme(persistKey)
      if (stored?.mode !== undefined) {
        nextSetting = stored.mode
      }
      if (stored?.special !== undefined) {
        // `null` (explicit clear) is preserved; unknown ids are
        // discarded by readStoredTheme already.
        if (stored.special === null) {
          nextSpecial = null
        } else if (isValidSpecial(stored.special)) {
          nextSpecial = stored.special
        }
      }
    }

    const nextMode = resolveMode(nextSetting)
    setModeSettingState(nextSetting)
    setModeState(nextMode)
    setSpecialState(nextSpecial)
    applyToDocument(nextMode, nextSpecial)
    setIsHydrated(true)
  }, [])

  // matchMedia subscription — only active while `modeSetting === 'system'`.
  useEffect(() => {
    if (modeSetting !== 'system') return
    if (typeof window === 'undefined') return
    if (typeof window.matchMedia !== 'function') return

    const mq = window.matchMedia(DARK_MODE_MEDIA_QUERY)
    const handler = (event: MediaQueryListEvent) => {
      const resolved: ThemeMode = event.matches ? 'dark' : 'light'
      if (disableTransitionRef.current) suppressTransitionsOnce()
      setModeState(resolved)
      applyToDocument(resolved, special)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [modeSetting, special])

  // Cross-tab sync — react to `storage` events on the configured key.
  useEffect(() => {
    if (persistKey === null) return
    if (typeof window === 'undefined') return
    const handler = (event: StorageEvent) => {
      if (event.key !== persistKey) return
      const stored = readStoredTheme(persistKey)
      if (stored === null) return
      if (stored.mode !== undefined) {
        const resolved = resolveMode(stored.mode)
        if (disableTransitionRef.current) suppressTransitionsOnce()
        setModeSettingState(stored.mode)
        setModeState(resolved)
        applyToDocument(resolved, stored.special !== undefined ? stored.special : special)
      }
      if (stored.special !== undefined) {
        setSpecialState(stored.special)
        applyToDocument(stored.mode !== undefined ? resolveMode(stored.mode) : mode, stored.special)
      }
    }
    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [persistKey, mode, special])

  const setMode = useCallback<ThemeContextValue['setMode']>(
    (nextSetting) => {
      const resolved = resolveMode(nextSetting)
      if (disableTransitionRef.current) suppressTransitionsOnce()
      setModeSettingState(nextSetting)
      setModeState(resolved)
      applyToDocument(resolved, special)
      if (persistKey !== null) {
        const next: StoredTheme = { mode: nextSetting, special }
        writeStoredTheme(persistKey, next)
      }
    },
    [persistKey, special],
  )

  const setSpecial = useCallback<ThemeContextValue['setSpecial']>(
    (nextSpecial) => {
      const normalized = nextSpecial === null || isValidSpecial(nextSpecial) ? nextSpecial : null
      if (disableTransitionRef.current) suppressTransitionsOnce()
      setSpecialState(normalized)
      applyToDocument(mode, normalized)
      if (persistKey !== null) {
        const next: StoredTheme = { mode: modeSetting, special: normalized }
        writeStoredTheme(persistKey, next)
      }
    },
    [persistKey, mode, modeSetting],
  )

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, modeSetting, setMode, special, setSpecial, isHydrated }),
    [mode, modeSetting, setMode, special, setSpecial, isHydrated],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.displayName = 'ThemeProvider'
