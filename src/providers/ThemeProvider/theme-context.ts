import { createContext } from 'react'
import type { SeasonalThemeId } from '../../themes/seasonal'

/** Resolved color-mode value — never `'system'`. */
export type ThemeMode = 'light' | 'dark'

/** User-facing mode setting. `'system'` follows `prefers-color-scheme`. */
export type ThemeModeSetting = ThemeMode | 'system'

/**
 * Identifier of any Special theme that may be applied via the
 * `data-theme` attribute on `<html>`. Today this is narrowed to
 * the shipped seasonal palettes; future Specials (brand, vendor,
 * one-off) widen this union in a `minor` release.
 */
export type SpecialThemeId = SeasonalThemeId

/**
 * Accepted values for `<ThemeProvider defaultSpecial>`.
 *
 * - `'auto-seasonal'` — resolve via `getCurrentSeason()` at mount time
 *   (the current date's seasonal palette).
 * - `SpecialThemeId` — pin to an explicit seasonal palette.
 * - `null` / `undefined` — no Special applied.
 */
export type ThemeProviderInitialSpecial = SpecialThemeId | 'auto-seasonal' | null

export interface ThemeContextValue {
  /** Resolved Mode (`'system'` already collapsed to `'light' | 'dark'`). */
  mode: ThemeMode
  /** Raw setting, including `'system'`. */
  modeSetting: ThemeModeSetting
  /** Update the mode setting. Pass `'system'` to follow OS preference. */
  setMode: (mode: ThemeModeSetting) => void
  /** Currently applied Special, or `null` when none is active. */
  special: SpecialThemeId | null
  /** Update the active Special. Pass `null` to clear. */
  setSpecial: (special: SpecialThemeId | null) => void
  /** `true` once the client-side effect has run and the DOM is in sync. */
  readonly isHydrated: boolean
}

/**
 * Internal context. Consumers should use the `useTheme` hook instead of
 * reading this directly — the hook throws a descriptive error when used
 * outside `<ThemeProvider>`.
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null)
