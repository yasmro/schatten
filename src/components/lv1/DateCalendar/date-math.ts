// Pure, React-free month math for DateCalendar. Dates are ISO 'YYYY-MM-DD'
// strings; all arithmetic goes through UTC day numbers so the local time zone
// can never shift a day.
//
// This lives next to the component, not in `lib/`: a future EventCalendar is
// the second consumer that would justify moving it (component-architecture §6).

const DAY_MS = 86_400_000

/** The earliest date the calendar can represent. */
export const MIN_DATE = '0001-01-01'
/** The latest date the calendar can represent. */
export const MAX_DATE = '9999-12-31'

const WEEK_DAY = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
} as const

/** Day of the week, numbered like `Date.prototype.getDay()` (`0` = Sunday). */
export type WeekDay = (typeof WEEK_DAY)[keyof typeof WEEK_DAY]

/**
 * BCP 47 language tag. The listed values are suggestions for editor completion,
 * not the supported set — any tag `Intl` supports works.
 */
export type DateCalendarLocale =
  | 'en-US'
  | 'en-GB'
  | 'ja-JP'
  | 'ko-KR'
  | 'zh-CN'
  | 'de-DE'
  | 'fr-FR'
  | 'ar-SA'
  | (string & {})

/** Fallback for an unsupported `locale`, and the default for the prop. */
export const DEFAULT_LOCALE = 'en-US'

// `Date.UTC(1, …)` maps years 0–99 to 1900–1999, so the year goes through
// setUTCFullYear instead.
function utcMs(year: number, monthIndex: number, day: number): number {
  const date = new Date(0)
  date.setUTCFullYear(year, monthIndex, day)
  return date.getTime()
}

function parts(iso: string): [year: number, month: number, day: number] {
  return [Number(iso.slice(0, 4)), Number(iso.slice(5, 7)), Number(iso.slice(8, 10))]
}

function toDayNumber(iso: string): number {
  const [year, month, day] = parts(iso)
  return utcMs(year, month - 1, day) / DAY_MS
}

function fromDayNumber(dayNumber: number): string {
  return new Date(dayNumber * DAY_MS).toISOString().slice(0, 10)
}

const MIN_DAY = toDayNumber(MIN_DATE)
const MAX_DAY = toDayNumber(MAX_DATE)

export function pad(value: number, length: number) {
  return String(value).padStart(length, '0')
}

/**
 * The local calendar date. `toISOString()` is not an option: it is the UTC date,
 * so a Tokyo user would see yesterday until 9:00.
 */
export function getLocalToday() {
  const now = new Date()
  return `${pad(now.getFullYear(), 4)}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)}`
}

/** True for a real calendar date in `YYYY-MM-DD` form (`2026-02-30` is not). */
export function isValidISODate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < MIN_DATE) return false
  const [year, month, day] = parts(value)
  return fromDayNumber(utcMs(year, month - 1, day) / DAY_MS) === value
}

/** ISO strings of equal length sort lexicographically. */
export function compareDates(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0
}

/**
 * How `min` / `max` props are read everywhere: an invalid bound counts as unset,
 * and an inverted pair is ignored.
 */
export function resolveBounds(min: string | undefined, max: string | undefined) {
  const validMin = min && isValidISODate(min) ? min : undefined
  const validMax = max && isValidISODate(max) ? max : undefined
  const isInverted = !!validMin && !!validMax && compareDates(validMin, validMax) > 0
  return isInverted
    ? { isInverted, min: undefined, max: undefined }
    : { isInverted, min: validMin, max: validMax }
}

export function clampDate(date: string, min: string, max: string): string {
  if (compareDates(date, min) < 0) return min
  return compareDates(date, max) > 0 ? max : date
}

/** Adds days. The result stays inside `MIN_DATE`–`MAX_DATE`. */
export function addDays(date: string, days: number): string {
  return fromDayNumber(Math.min(MAX_DAY, Math.max(MIN_DAY, toDayNumber(date) + days)))
}

/**
 * Adds months, clamping the day to the target month (Jan 31 + 1 month → Feb 28
 * or 29). The result stays inside `MIN_DATE`–`MAX_DATE`.
 */
export function addMonths(date: string, months: number): string {
  const [year, month, day] = parts(date)
  const index = year * 12 + (month - 1) + months
  const targetYear = Math.floor(index / 12)
  const targetMonth = index - targetYear * 12
  if (targetYear < 1) return MIN_DATE
  if (targetYear > 9999) return MAX_DATE
  const lastDay = new Date(utcMs(targetYear, targetMonth + 1, 0)).getUTCDate()
  return fromDayNumber(utcMs(targetYear, targetMonth, Math.min(day, lastDay)) / DAY_MS)
}

export function startOfMonth(date: string): string {
  return `${date.slice(0, 7)}-01`
}

export function endOfMonth(date: string): string {
  const [year, month] = parts(date)
  return `${date.slice(0, 7)}-${pad(new Date(utcMs(year, month, 0)).getUTCDate(), 2)}`
}

export function isSameMonth(a: string, b: string): boolean {
  return a.slice(0, 7) === b.slice(0, 7)
}

/** Day of the week, `0` = Sunday. 1970-01-01 was a Thursday. */
export function dayOfWeek(date: string): WeekDay {
  return ((((toDayNumber(date) + WEEK_DAY.thursday) % 7) + 7) % 7) as WeekDay
}

export function startOfWeek(date: string, weekStartsOn: WeekDay): string {
  return addDays(date, -((dayOfWeek(date) - weekStartsOn + 7) % 7))
}

export function endOfWeek(date: string, weekStartsOn: WeekDay): string {
  return addDays(startOfWeek(date, weekStartsOn), 6)
}

/** Number of days from `from` to `to` (negative when `to` is earlier). */
export function diffDays(from: string, to: string): number {
  return toDayNumber(to) - toDayNumber(from)
}

/**
 * 6 weeks × 7 days, including the leading and trailing days of the adjacent
 * months. Always 6 rows so the grid keeps its height when the month changes.
 * A day outside `MIN_DATE`–`MAX_DATE` is `null`: it only occurs in the first
 * and last month, and has no ISO string in this format.
 */
export function monthMatrix(month: string, weekStartsOn: WeekDay): (string | null)[][] {
  const start = toDayNumber(startOfMonth(month))
  const first = start - ((dayOfWeek(startOfMonth(month)) - weekStartsOn + 7) % 7)
  return Array.from({ length: 6 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const dayNumber = first + week * 7 + day
      return dayNumber < MIN_DAY || dayNumber > MAX_DAY ? null : fromDayNumber(dayNumber)
    }),
  )
}

/**
 * ISO-8601 week number. Weeks start on Monday and week 1 contains January 4,
 * so a row is numbered by its Thursday whichever day the row starts on.
 */
export function isoWeek(date: string): number {
  const mondayBased = (dayOfWeek(date) + 6) % 7
  const thursday = toDayNumber(date) - mondayBased + 3
  const jan1 = toDayNumber(`${fromDayNumber(thursday).slice(0, 4)}-01-01`)
  return Math.floor((thursday - jan1) / 7) + 1
}

/**
 * The ISO week of a grid row, read from the row's Thursday. Using any other
 * fixed column gives the wrong week on a Saturday-start grid, where the first
 * two columns belong to the previous ISO week.
 */
export function weekNumberOfRow(week: readonly (string | null)[]): number | undefined {
  const thursday = week.find((date) => date !== null && dayOfWeek(date) === WEEK_DAY.thursday)
  return thursday ? isoWeek(thursday) : undefined
}

/**
 * Returns a locale `Intl` can actually use. `Intl` does not throw on an unknown
 * tag such as `jp` — it silently renders in the runtime's locale, which would
 * look right on a Japanese machine and break the SSR-stable default. A
 * malformed tag such as `ja_JP` does throw, so both are handled here.
 */
export function resolveLocale(locale: string): string {
  try {
    if (Intl.DateTimeFormat.supportedLocalesOf(locale).length > 0) return locale
  } catch {
    // Malformed tag: falls through to the warning below.
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `DateCalendar: unsupported \`locale\` "${locale}". Falling back to "${DEFAULT_LOCALE}".`,
    )
  }
  return DEFAULT_LOCALE
}

// The grid is Gregorian, so labels must be too: some locales default to another
// calendar (fa-IR, th-TH) and would print a date that disagrees with the grid.
const gregorian = (options: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions => ({
  ...options,
  timeZone: 'UTC',
  calendar: 'gregory',
})

const toDate = (date: string) => new Date(toDayNumber(date) * DAY_MS)

export interface WeekdayName {
  short: string
  long: string
}

export interface DateFormatters {
  /** "October 2026" */
  caption: (month: string) => string
  /** "Saturday, October 24, 2026" — the full date, for the accessible name. */
  dayLabel: (date: string) => string
  /** The bare day number, in the locale's digits. */
  dayNumber: (date: string) => string
  /** A week number or year, in the locale's digits and without grouping. */
  number: (value: number) => string
  /** The 12 month names, January first. */
  monthNames: () => string[]
  /** The 7 weekday names, `weekStartsOn` first. */
  weekdayNames: (weekStartsOn: WeekDay) => WeekdayName[]
}

/**
 * Builds the `Intl` formatters once per locale — the grid renders 42 cells and
 * constructing a `DateTimeFormat` per cell is expensive.
 */
export function createFormatters(locale: string): DateFormatters {
  const caption = new Intl.DateTimeFormat(locale, gregorian({ year: 'numeric', month: 'long' }))
  const full = new Intl.DateTimeFormat(locale, gregorian({ dateStyle: 'full' }))
  const day = new Intl.DateTimeFormat(locale, gregorian({ day: 'numeric' }))
  const plainNumber = new Intl.NumberFormat(locale, { useGrouping: false })
  const month = new Intl.DateTimeFormat(locale, gregorian({ month: 'long' }))
  const weekdayShort = new Intl.DateTimeFormat(locale, gregorian({ weekday: 'short' }))
  const weekdayLong = new Intl.DateTimeFormat(locale, gregorian({ weekday: 'long' }))
  // 2023-01-01 was a Sunday.
  const weekday = (index: number) => toDate(addDays('2023-01-01', index))

  return {
    caption: (value) => caption.format(toDate(value)),
    dayLabel: (date) => full.format(toDate(date)),
    // `format()` adds the locale's day suffix in ja / zh / ko ("20日"), so take
    // only the `day` part. It still carries the locale's digits.
    dayNumber: (date) =>
      day.formatToParts(toDate(date)).find((part) => part.type === 'day')?.value ??
      String(Number(date.slice(8, 10))),
    number: (value) => plainNumber.format(value),
    monthNames: () =>
      Array.from({ length: 12 }, (_, index) =>
        month.format(toDate(`2023-${pad(index + 1, 2)}-01`)),
      ),
    weekdayNames: (weekStartsOn) =>
      Array.from({ length: 7 }, (_, index) => {
        const date = weekday((weekStartsOn + index) % 7)
        return { short: weekdayShort.format(date), long: weekdayLong.format(date) }
      }),
  }
}
