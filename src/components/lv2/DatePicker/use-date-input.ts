import { type RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { compareDates, isValidISODate, resolveBounds } from '../../lv1/DateCalendar/date-math'

/** What a picker's value holds. */
export type DateGranularity = 'day' | 'minute'

/** The two halves of a value, kept apart so that one can wait for the other. */
export interface DateTimeDraft {
  date: string
  time: string
}

/** True for a time in `HH:mm` form, on the 24-hour clock. */
export function isValidISOTime(value: string): boolean {
  return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)
}

/** True for a value in the format of `granularity`. */
export function isValidValue(value: string, granularity: DateGranularity): boolean {
  if (granularity === 'day') return isValidISODate(value)
  const { date, time } = splitDateTime(value)
  return value.length === 16 && isValidISODate(date) && isValidISOTime(time)
}

export function splitDateTime(value: string): DateTimeDraft {
  const [date = '', time = ''] = value.split('T')
  return { date, time }
}

/** The value of a draft: `''` until both halves are there. */
export function joinDateTime({ date, time }: DateTimeDraft, isTimed: boolean): string {
  if (!isTimed) return date
  return date && time ? `${date}T${time}` : ''
}

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
      /** The value a complete draft commits: `''` outside the bounds. */
      accept: (value: string) =>
        (lower && value < lower) || (upper && value > upper) ? '' : value,
      dateMin: lower?.slice(0, 10),
      dateMax: upper?.slice(0, 10),
    }
  }, [min, max, granularity])
}

/**
 * The date and the time on their way to `value`. A half of a value commits `''`,
 * so the draft only follows `value` when the two disagree, as in `useDateInput`:
 * a date waiting for its time survives the parent's `value=""`. `accept` is what
 * the draft would commit.
 */
export function useDateTimeDraft(
  value: string,
  isTimed: boolean,
  accept: (value: string) => string,
) {
  const [draft, setDraft] = useState(() => splitDateTime(value))
  const joined = joinDateTime(draft, isTimed)
  if (joined !== value && accept(joined) !== value) setDraft(splitDateTime(value))
  return [draft, setDraft] as const
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
  /** The time is there without a date. Fails validation, shows no error. */
  isMissing = false,
) {
  const [text, setText] = useState(value)
  const [isBlurred, setIsBlurred] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  if (text !== value && parse(text) !== value) {
    setText(value)
    setIsBlurred(false)
  }

  const hasBadDraft = text.trim() !== '' && parse(text) === ''
  const isUnfit = hasBadDraft || isMissing

  useEffect(() => {
    inputRef.current?.setCustomValidity(isUnfit ? invalidMessage : '')
  }, [isUnfit, invalidMessage])

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

/**
 * Validation of a time input. The browser holds the text and reports `''` until
 * the time is complete, so only the state around it lives here. `isRefused` is a
 * complete time outside `min` / `max` or before the start; `isMissing` is a date
 * without a time, which fails validation but shows no error: tabbing from the
 * date to the time must not turn the empty time red.
 */
export function useTimeInput(
  isRefused: boolean,
  isMissing: boolean,
  invalidMessage = 'Enter a valid time.',
) {
  const [isBlurred, setIsBlurred] = useState(false)
  const [hasBadInput, setHasBadInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const isUnfit = isRefused || isMissing

  useEffect(() => {
    inputRef.current?.setCustomValidity(isUnfit ? invalidMessage : '')
  }, [isUnfit, invalidMessage])

  return {
    inputRef,
    isInvalid: hasBadInput || (isBlurred && isRefused),
    reset() {
      setIsBlurred(false)
      setHasBadInput(false)
    },
    markBlurred() {
      setIsBlurred(true)
      setHasBadInput(inputRef.current?.validity.badInput ?? false)
    },
  }
}
