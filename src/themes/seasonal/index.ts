export type SeasonTheme =
  | 'spring-early'
  | 'spring-late'
  | 'summer-early'
  | 'summer-peak'
  | 'autumn-early'
  | 'autumn-late'
  | 'winter-early'
  | 'winter-deep'

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
