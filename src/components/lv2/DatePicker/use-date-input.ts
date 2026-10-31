import { type RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { compareDates, isValidISODate, resolveBounds } from '../../lv1/DateCalendar/date-math'

/** What a picker's value holds. */
export type DateGranularity = 'day' | 'minute'

/** True for a time in `HH:mm` form, on the 24-hour clock. */
export function isValidISOTime(value: string): boolean {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)
}

/** True for a value in the format of `granularity`. */
export function isValidValue(value: string, granularity: DateGranularity): boolean {
  if (granularity === 'day') return isValidISODate(value)
  const [date = '', time = ''] = value.split('T')
  return value.length === 16 && isValidISODate(date) && isValidISOTime(time)
}

/** An input shows a value with a space: `2026-10-24 13:30`. */
export const toText = (value: string) => value.replace('T', ' ')
export const fromText = (text: string) => text.replace(' ', 'T')

/** The halves of an input's text, whichever of them can be read. */
export function readText(text: string) {
  const [date = '', time = '', ...rest] = text.trim().split(/[ T]/)
  return {
    date: isValidISODate(date) ? date : '',
    time: rest.length === 0 && isValidISOTime(time) ? time : '',
  }
}

export const joinText = (date: string, time: string) => (date && time ? `${date} ${time}` : date)

/**
 * Reads `min` / `max`, which take the format of the value. The day granularity
 * hands them to the calendar as they are: it reports a bad one itself.
 */
export function useValueBounds(
  min: string | undefined,
  max: string | undefined,
  granularity: DateGranularity,
) {
  return useMemo(() => {
    if (granularity === 'day') {
      return { accept: (value: string) => value, dateMin: min, dateMax: max }
    }
    const read = (bound: string | undefined, prop: string) => {
      if (!bound || isValidValue(bound, granularity)) return bound
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `DatePicker: ignoring invalid \`${prop}\` "${bound}". Expected YYYY-MM-DDTHH:mm.`,
        )
      }
      return undefined
    }
    const validMin = read(min, 'min')
    const validMax = read(max, 'max')
    const isInverted = !!validMin && !!validMax && validMin > validMax
    if (process.env.NODE_ENV !== 'production' && isInverted) {
      console.warn('DatePicker: `min` is after `max`. Ignoring both.')
    }
    const lower = isInverted ? undefined : validMin
    const upper = isInverted ? undefined : validMax
    return {
      /** The value a complete text commits: `''` outside the bounds. */
      accept: (value: string) =>
        (lower && value < lower) || (upper && value > upper) ? '' : value,
      dateMin: lower?.slice(0, 10),
      dateMax: upper?.slice(0, 10),
    }
  }, [min, max, granularity])
}

export interface DateConstraints {
  min?: string
  max?: string
  isDateDisabled?: (date: string) => boolean
}

/**
 * The date `text` stands for, or `''` when it is unfinished, invalid or
 * unavailable.
 */
export function parseDate(text: string, { min, max, isDateDisabled }: DateConstraints): string {
  const date = text.trim()
  if (!isValidISODate(date)) return ''
  const bounds = resolveBounds(min, max)
  if (bounds.min && compareDates(date, bounds.min) < 0) return ''
  if (bounds.max && compareDates(date, bounds.max) > 0) return ''
  return isDateDisabled?.(date) ? '' : date
}

/**
 * The text of a complete date and time that `accept` takes, or `''`. The result
 * is the input's own form, with a space.
 */
export function parseDateTime(
  text: string,
  constraints: DateConstraints,
  accept: (value: string) => string,
): string {
  const { date, time } = readText(text)
  const parsed = parseDate(date, constraints)
  if (!parsed || !time) return ''
  return toText(accept(`${parsed}T${time}`))
}

/**
 * Focuses an element after the next render, for one that is still disabled when
 * the event runs.
 */
export function useFocusAfterRender(ref: RefObject<HTMLElement | null>) {
  const isPending = useRef(false)
  useEffect(() => {
    if (!isPending.current) return
    isPending.current = false
    ref.current?.focus()
  })
  return () => {
    isPending.current = true
  }
}

/**
 * Runs `onReset` when the input's form resets. A native reset cannot reach React
 * state. Listening on `document` runs after React's own `onReset`, so a handler
 * that cancels the reset is respected, and `input.form` also covers `form="…"`.
 */
export function useFormReset(inputRef: RefObject<HTMLInputElement | null>, onReset: () => void) {
  useEffect(() => {
    const input = inputRef.current
    if (!input) return
    const document = input.ownerDocument
    const listener = (event: Event) => {
      if (event.target === input.form && !event.defaultPrevented) onReset()
    }
    document.addEventListener('reset', listener)
    return () => document.removeEventListener('reset', listener)
  })
}

/**
 * What the user is typing, kept next to the committed `value`. The text only
 * follows `value` when the two disagree, so an unfinished draft (which commits
 * `''`) survives the parent's `value=""`. A bad draft also fails native form
 * validation: the hidden input submits `''`, so `required` alone would pass it,
 * the way a native date input reports `badInput`.
 */
export function useDateInput(
  value: string,
  parse: (text: string) => string,
  onCommit: (text: string) => void,
  invalidMessage = 'Enter a valid date.',
) {
  const [text, setText] = useState(value)
  const [isBlurred, setIsBlurred] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  if (text !== value && parse(text) !== value) {
    setText(value)
    setIsBlurred(false)
  }

  const hasBadDraft = text.trim() !== '' && parse(text) === ''

  useEffect(() => {
    inputRef.current?.setCustomValidity(hasBadDraft ? invalidMessage : '')
  }, [hasBadDraft, invalidMessage])

  return {
    text,
    inputRef,
    /** Held back until blur, so an unfinished date does not turn red mid-typing. */
    isInvalid: isBlurred && hasBadDraft,
    edit(next: string) {
      setText(next)
      setIsBlurred(false)
      onCommit(next)
    },
    /** Replaces the text with a date chosen elsewhere (the calendar). */
    reset(next: string) {
      setText(next)
      setIsBlurred(false)
    },
    markBlurred() {
      setIsBlurred(true)
    },
  }
}
