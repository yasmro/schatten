import { useContext } from 'react'
import { ThemeContext, type ThemeContextValue } from './theme-context'

/**
 * Access the active theme state from any descendant of `<ThemeProvider>`.
 *
 * Throws when used outside a `ThemeProvider` — unlike `useFieldContext`
 * (which returns `null` to support standalone components), `useTheme`
 * has no useful fallback. Surfacing the misuse early is preferred over
 * a silently no-op return.
 *
 * @example
 * ```tsx
 * const { mode, setMode, special, setSpecial } = useTheme()
 * ```
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (ctx === null) {
    throw new Error(
      'useTheme must be used within a <ThemeProvider>. Wrap your app root with <ThemeProvider> from "@yasmro/schatten/providers".',
    )
  }
  return ctx
}
