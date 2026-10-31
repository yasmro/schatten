import { type RefObject, useEffect, useRef, useState } from 'react'
import { compareDates, isValidISODate, resolveBounds } from '../../lv1/DateCalendar/date-math'

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
