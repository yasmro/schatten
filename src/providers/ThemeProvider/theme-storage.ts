import type { SpecialThemeId, ThemeModeSetting } from './theme-context'

/**
 * Persisted shape stored under `storageKey` as a single JSON object.
 *
 * This shape is part of the contract with the FOUC inline script
 * (issue #129). When fields change, the snippet must be updated
 * in lockstep.
 */
export interface StoredTheme {
  mode: ThemeModeSetting
  special: SpecialThemeId | null
}

const VALID_MODE_SETTINGS: ReadonlySet<ThemeModeSetting> = new Set(['light', 'dark', 'system'])

/**
 * Whether the runtime can touch `window.localStorage` at all. Returns
 * `false` on the server and when the host has explicitly disabled
 * storage (e.g. Safari private mode in some versions).
 */
function canUseStorage(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return typeof window.localStorage !== 'undefined'
  } catch {
    // Some browsers throw on `window.localStorage` access in restricted
    // contexts (cookies disabled / 3rd-party storage blocked).
    return false
  }
}

/**
 * Read and validate a persisted theme. Returns `null` on missing,
 * malformed JSON, or storage access errors — never throws.
 *
 * Unknown values are stripped from the returned partial so callers can
 * safely spread it over their defaults.
 */
export function readStoredTheme(key: string): Partial<StoredTheme> | null {
  if (!canUseStorage()) return null
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return null
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return null
    const out: Partial<StoredTheme> = {}
    const candidate = parsed as Record<string, unknown>
    if (
      typeof candidate.mode === 'string' &&
      VALID_MODE_SETTINGS.has(candidate.mode as ThemeModeSetting)
    ) {
      out.mode = candidate.mode as ThemeModeSetting
    }
    if (candidate.special === null) {
      out.special = null
    } else if (typeof candidate.special === 'string') {
      // We don't have a runtime registry of every valid SpecialThemeId
      // (the union is type-only). The validation surface is intentional:
      // the Provider validates against the known set before applying.
      out.special = candidate.special as SpecialThemeId
    }
    return out
  } catch {
    return null
  }
}

/** Write the full theme state. Failures are silently ignored. */
export function writeStoredTheme(key: string, value: StoredTheme): void {
  if (!canUseStorage()) return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* quota / disabled storage */
  }
}

/** Remove any persisted theme. Failures are silently ignored. */
export function clearStoredTheme(key: string): void {
  if (!canUseStorage()) return
  try {
    window.localStorage.removeItem(key)
  } catch {
    /* disabled storage */
  }
}
