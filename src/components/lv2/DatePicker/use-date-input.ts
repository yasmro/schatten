import { useState } from 'react'
import { compareDates, isValidISODate } from '../../lv1/DateCalendar/date-math'

export interface DateConstraints {
  min?: string
  max?: string
  isDateDisabled?: (date: string) => boolean
}

/**
 * The date `text` stands for, or `''` when it is unfinished, invalid or
 * unavailable. Reads `min` / `max` the way DateCalendar does: an invalid bound
 * counts as unset, and an inverted pair is ignored.
 */
export function parseDate(text: string, { min, max, isDateDisabled }: DateConstraints): string {
  const date = text.trim()
  if (!isValidISODate(date)) return ''
  const validMin = min && isValidISODate(min) ? min : undefined
  const validMax = max && isValidISODate(max) ? max : undefined
  const isInverted = !!validMin && !!validMax && compareDates(validMin, validMax) > 0
  if (!isInverted && validMin && compareDates(date, validMin) < 0) return ''
  if (!isInverted && validMax && compareDates(date, validMax) > 0) return ''
  return isDateDisabled?.(date) ? '' : date
}

/**
 * What the user is typing, kept next to the committed `value`. The text only
 * follows `value` when the two disagree, so an unfinished draft (which commits
 * `''`) survives the parent's `value=""`.
 */
export function useDateInput(
  value: string,
  parse: (text: string) => string,
  onCommit: (text: string) => void,
) {
  const [text, setText] = useState(value)
  const [isBlurred, setIsBlurred] = useState(false)

  if (text !== value && parse(text) !== value) {
    setText(value)
    setIsBlurred(false)
  }

  return {
    text,
    /** Held back until blur, so an unfinished date does not turn red mid-typing. */
    isInvalid: isBlurred && text.trim() !== '' && parse(text) === '',
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
