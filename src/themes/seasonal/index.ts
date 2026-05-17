export type SeasonTheme =
  | 'spring-early'
  | 'spring-late'
  | 'summer-early'
  | 'summer-peak'
  | 'autumn-early'
  | 'autumn-late'
  | 'winter-early'
  | 'winter-deep'

/**
 * Full `data-theme` attribute value for a seasonal Special, including
 * the `season--` family prefix. Matches the value emitted by
 * `getSeasonAttribute()` / `applySeasonTheme()` and the selector used in
 * `themes.css` (`:root[data-theme="season--spring-early"]`).
 */
export type SeasonalThemeId = `season--${SeasonTheme}`

/**
 * Per-Special-theme contract for a seasonal palette.
 *
 * `allowedTokens` declares the CSS custom properties this theme is
 * permitted to override. Tokens outside this list are Mode-owned
 * (light/dark) and must NOT be overridden — see
 * `.claude/rules/theme-architecture.md` ("Allowlist mechanism") and
 * `.claude/rules/state-token-guideline.md` (non-interactive state tokens
 * and `info` independence) for the full contract.
 *
 * Values are glob-like patterns (`--color-theme-*`) so a single entry
 * covers the whole 50–950 scale. Mechanical enforcement is deferred to
 * Phase 5 (see `scripts/check-theme-allowlist.mjs`); until then the
 * allowlist is a documented convention enforced by code review.
 */
export interface SeasonalThemeMetadata {
  /** Full `data-theme` attribute value, including the `season--` prefix. */
  name: SeasonalThemeId
  /** Glob-like list of CSS custom properties this theme may override. */
  allowedTokens: readonly string[]
  /** Solar-term range + traditional color reference. */
  description?: string
}

/**
 * Allowlist + metadata for every shipped seasonal theme.
 *
 * Keys are `data-theme` attribute values so callers can resolve a
 * theme's metadata directly from the DOM:
 *
 *     const id = document.documentElement.getAttribute('data-theme')
 *     SEASONAL_THEME_METADATA[id as SeasonalThemeId]
 *
 * Future Specials (brand, vendor, one-off) will ship sibling
 * `<SPECIAL>_METADATA` constants with the same shape.
 */
export const SEASONAL_THEME_METADATA: Record<SeasonalThemeId, SeasonalThemeMetadata> = {
  'season--spring-early': {
    name: 'season--spring-early',
    allowedTokens: ['--color-theme-*'],
    description: '立春 - 春分前: 桜色・薄紅',
  },
  'season--spring-late': {
    name: 'season--spring-late',
    allowedTokens: ['--color-theme-*'],
    description: '春分 - 立夏前: 若草色・萌黄',
  },
  'season--summer-early': {
    name: 'season--summer-early',
    allowedTokens: ['--color-theme-*'],
    description: '立夏 - 夏至前: 萌葱色・常磐色',
  },
  'season--summer-peak': {
    name: 'season--summer-peak',
    allowedTokens: ['--color-theme-*'],
    description: '夏至 - 立秋前: 朱色・柿色',
  },
  'season--autumn-early': {
    name: 'season--autumn-early',
    allowedTokens: ['--color-theme-*'],
    description: '立秋 - 秋分前: 浅葱色・薄藍',
  },
  'season--autumn-late': {
    name: 'season--autumn-late',
    allowedTokens: ['--color-theme-*'],
    description: '秋分 - 立冬前: 山吹色・飴色',
  },
  'season--winter-early': {
    name: 'season--winter-early',
    allowedTokens: ['--color-theme-*'],
    description: '立冬 - 冬至前: 銀鼠・薄墨',
  },
  'season--winter-deep': {
    name: 'season--winter-deep',
    allowedTokens: ['--color-theme-*'],
    description: '冬至 - 立春前: 藍色・濃紺',
  },
}

interface SeasonPeriod {
  theme: SeasonTheme
  start: { month: number; day: number }
  end: { month: number; day: number }
}

const SEASON_PERIODS: SeasonPeriod[] = [
  { theme: 'spring-early', start: { month: 2, day: 4 }, end: { month: 3, day: 20 } },
  { theme: 'spring-late', start: { month: 3, day: 21 }, end: { month: 5, day: 5 } },
  { theme: 'summer-early', start: { month: 5, day: 6 }, end: { month: 6, day: 20 } },
  { theme: 'summer-peak', start: { month: 6, day: 21 }, end: { month: 8, day: 6 } },
  { theme: 'autumn-early', start: { month: 8, day: 7 }, end: { month: 9, day: 22 } },
  { theme: 'autumn-late', start: { month: 9, day: 23 }, end: { month: 11, day: 6 } },
  { theme: 'winter-early', start: { month: 11, day: 7 }, end: { month: 12, day: 21 } },
  { theme: 'winter-deep', start: { month: 12, day: 22 }, end: { month: 2, day: 3 } },
]

function isDateInPeriod(
  month: number,
  day: number,
  start: { month: number; day: number },
  end: { month: number; day: number },
): boolean {
  const dateValue = month * 100 + day
  const startValue = start.month * 100 + start.day
  const endValue = end.month * 100 + end.day

  // Handle year wrap (winter-deep: Dec 22 - Feb 3)
  if (startValue > endValue) {
    return dateValue >= startValue || dateValue <= endValue
  }

  return dateValue >= startValue && dateValue <= endValue
}

/**
 * Get the current season theme based on date
 * Pure function - no side effects
 */
export function getCurrentSeason(date: Date = new Date()): SeasonTheme {
  const month = date.getMonth() + 1
  const day = date.getDate()

  for (const period of SEASON_PERIODS) {
    if (isDateInPeriod(month, day, period.start, period.end)) {
      return period.theme
    }
  }

  return 'spring-early' // fallback
}

/**
 * Get the data-theme attribute object for SSR
 * Use this in Astro/Next.js to set the attribute on <html>
 */
export function getSeasonAttribute(date: Date = new Date()): Record<string, string> {
  return { 'data-theme': `season--${getCurrentSeason(date)}` }
}

/**
 * Apply season theme to document
 * DOM adapter - use in browser only
 */
export function applySeasonTheme(date: Date = new Date()): SeasonTheme {
  if (typeof document === 'undefined') {
    throw new Error('applySeasonTheme can only be used in browser environment')
  }

  const season = getCurrentSeason(date)
  document.documentElement.setAttribute('data-theme', `season--${season}`)
  return season
}

/**
 * Remove season theme from document
 */
export function removeSeasonTheme(): void {
  if (typeof document === 'undefined') return
  document.documentElement.removeAttribute('data-theme')
}
