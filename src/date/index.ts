// The value format of DateCalendar and the date pickers, and its conversion to
// `Date`. React-free and without a `'use client'` banner, so a server can
// validate a value with it.

/** A date as `YYYY-MM-DD`. The type checks the shape; `isDateValue` checks that the date exists. */
export type DateValue = `${number}-${number}-${number}`

/**
 * A local date and time as `YYYY-MM-DDTHH:mm`, the format of
 * `<input type="datetime-local">`. It has no time zone.
 */
export type DateTimeValue = `${DateValue}T${number}:${number}`

const DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})T(?:[01]\d|2[0-3]):[0-5]\d$/

const pad = (value: number, length: number) => String(value).padStart(length, '0')

/**
 * True for a date that exists, in `YYYY-MM-DD` form from `0001-01-01` to
 * `9999-12-31`. `2026-02-30` is not one. Use it on a `string` from an API or a
 * form before passing it as a value.
 */
export function isDateValue(value: string): value is DateValue {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < '0001-01-01') return false
  // `Date.UTC(1, …)` maps years 0–99 to 1900–1999, so the year goes through
  // setUTCFullYear instead.
  const date = new Date(0)
  date.setUTCFullYear(
    Number(value.slice(0, 4)),
    Number(value.slice(5, 7)) - 1,
    Number(value.slice(8)),
  )
  return date.toISOString().slice(0, 10) === value
}

/** True for a date that exists and a 24-hour time, in `YYYY-MM-DDTHH:mm` form. */
export function isDateTimeValue(value: string): value is DateTimeValue {
  const date = DATE_TIME_RE.exec(value)?.[1]
  return date !== undefined && isDateValue(date)
}

/**
 * Reads a value as local time, whichever its format: `2026-10-24` is local
 * midnight. `new Date('2026-10-24')` would be UTC midnight, the previous day west
 * of UTC. An empty or invalid value is `undefined`.
 *
 * A local time that daylight saving skips moves forward as it does in `Date`:
 * `2026-03-08T02:30` in New York is 03:30.
 */
export function toDate(value: string): Date | undefined {
  const isTimed = isDateTimeValue(value)
  if (!isTimed && !isDateValue(value)) return undefined
  const date = new Date(
    2000,
    0,
    1,
    isTimed ? Number(value.slice(11, 13)) : 0,
    isTimed ? Number(value.slice(14)) : 0,
  )
  // `new Date(1, …)` maps years 0–99 to 1900–1999, so the date is set apart.
  date.setFullYear(
    Number(value.slice(0, 4)),
    Number(value.slice(5, 7)) - 1,
    Number(value.slice(8, 10)),
  )
  return date
}

/**
 * Writes the local date of `date` as a value, and with `'minute'` its local time.
 * `date.toISOString().slice(0, 10)` would be the UTC date, which is a different
 * day for part of every day. An invalid `Date`, or a year outside `0001`–`9999`,
 * is `''`.
 */
export function toDateString(date: Date, granularity?: 'day'): DateValue | ''
export function toDateString(date: Date, granularity: 'minute'): DateTimeValue | ''
export function toDateString(date: Date, granularity: 'day' | 'minute' = 'day'): string {
  const year = date.getFullYear()
  if (!(year >= 1 && year <= 9999)) return ''
  const day = `${pad(year, 4)}-${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}`
  if (granularity === 'day') return day
  return `${day}T${pad(date.getHours(), 2)}:${pad(date.getMinutes(), 2)}`
}
