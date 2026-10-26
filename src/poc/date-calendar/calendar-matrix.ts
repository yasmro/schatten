// Pure, React-free month math. Dates are ISO 'YYYY-MM-DD' strings; all
// arithmetic goes through UTC day numbers so local TZ never shifts a day.
export type ISODate = string
const DAY = 86_400_000

export function toDayNumber(iso: ISODate): number {
  const [y, m, d] = iso.split('-').map(Number)
  return Date.UTC(y, m - 1, d) / DAY
}
export function fromDayNumber(n: number): ISODate {
  return new Date(n * DAY).toISOString().slice(0, 10)
}
export function addDays(iso: ISODate, days: number): ISODate {
  return fromDayNumber(toDayNumber(iso) + days)
}
/** Adds months, clamping the day (Jan 31 + 1 month → Feb 28/29). */
export function addMonths(iso: ISODate, months: number): ISODate {
  const [y, m, d] = iso.split('-').map(Number)
  const first = new Date(Date.UTC(y, m - 1 + months, 1))
  const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate()
  first.setUTCDate(Math.min(d, last))
  return first.toISOString().slice(0, 10)
}
export function startOfMonth(iso: ISODate): ISODate {
  return `${iso.slice(0, 7)}-01`
}
export function sameMonth(a: ISODate, b: ISODate): boolean {
  return a.slice(0, 7) === b.slice(0, 7)
}
export function dayOfWeek(iso: ISODate): number {
  return (toDayNumber(iso) + 4) % 7 // 1970-01-01 was a Thursday
}
export function startOfWeek(iso: ISODate, weekStartsOn: number): ISODate {
  return addDays(iso, -((dayOfWeek(iso) - weekStartsOn + 7) % 7))
}
export function endOfWeek(iso: ISODate, weekStartsOn: number): ISODate {
  return addDays(startOfWeek(iso, weekStartsOn), 6)
}
export function compare(a: ISODate, b: ISODate): number {
  return a < b ? -1 : a > b ? 1 : 0 // ISO strings sort lexicographically
}

/** 6 weeks × 7 days, including leading/trailing days of adjacent months. */
export function monthMatrix(month: ISODate, weekStartsOn = 0): ISODate[][] {
  const start = toDayNumber(startOfWeek(startOfMonth(month), weekStartsOn))
  return Array.from({ length: 6 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => fromDayNumber(start + w * 7 + d)),
  )
}

// The grid is Gregorian, so labels must be too: some locales (fa-IR) default
// to another calendar and would print e.g. "Aban 2" for 2026-10-24.
const utc = (o: Intl.DateTimeFormatOptions): Intl.DateTimeFormatOptions => ({
  ...o,
  timeZone: 'UTC',
  calendar: 'gregory',
})
const at = (iso: ISODate) => new Date(toDayNumber(iso) * DAY)

export function weekdayNames(locale: string | undefined, weekStartsOn = 0) {
  const short = new Intl.DateTimeFormat(locale, utc({ weekday: 'short' }))
  const long = new Intl.DateTimeFormat(locale, utc({ weekday: 'long' }))
  // 2023-01-01 was a Sunday.
  return Array.from({ length: 7 }, (_, i) => {
    const iso = addDays('2023-01-01', (weekStartsOn + i) % 7)
    return { short: short.format(at(iso)), long: long.format(at(iso)) }
  })
}
export function formatCaption(month: ISODate, locale?: string) {
  return new Intl.DateTimeFormat(locale, utc({ year: 'numeric', month: 'long' })).format(at(month))
}
export function formatDayLabel(iso: ISODate, locale?: string) {
  return new Intl.DateTimeFormat(locale, utc({ dateStyle: 'full' })).format(at(iso))
}
export function formatDayNumber(iso: ISODate, locale?: string) {
  return new Intl.DateTimeFormat(locale, utc({ day: 'numeric' })).format(at(iso))
}

/** ISO-8601 week number (weeks start Monday, week 1 contains Jan 4). */
export function isoWeek(iso: ISODate): number {
  const n = toDayNumber(iso)
  const thursday = n + 3 - ((dayOfWeek(iso) + 6) % 7)
  const jan1 = toDayNumber(`${fromDayNumber(thursday).slice(0, 4)}-01-01`)
  return Math.floor((thursday - jan1) / 7) + 1
}
export function monthNames(locale?: string) {
  const f = new Intl.DateTimeFormat(locale, utc({ month: 'long' }))
  return Array.from({ length: 12 }, (_, i) =>
    f.format(at(`2023-${String(i + 1).padStart(2, '0')}-01`)),
  )
}
export function diffDays(a: ISODate, b: ISODate) {
  return toDayNumber(b) - toDayNumber(a)
}
