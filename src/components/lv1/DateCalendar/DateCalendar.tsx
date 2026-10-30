import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { dateCalendarVariants, dateRangeCalendarVariants } from '../../../variants/date-calendar'
import {
  type CalendarCommonProps,
  type CalendarSelection,
  CalendarView,
  type RangePosition,
  useInvalidDateWarning,
  validDate,
} from './CalendarView'
import { addDays, compareDates, diffDays } from './date-math'
import { useControllable } from './use-controllable'
import './DateCalendar.css'

export type { DateCalendarLabels } from './CalendarView'
export type { DateCalendarLocale, WeekDay } from './date-math'

/* ----- DateCalendar ----- */

export interface DateCalendarProps extends CalendarCommonProps {
  /**
   * The selected date as `YYYY-MM-DD` (controlled). Values are strings, not
   * `Date` objects, so a time zone can never shift a date by one day. Pass `''`
   * for no selection.
   */
  value?: string
  /**
   * The initially selected date as `YYYY-MM-DD` (uncontrolled).
   */
  defaultValue?: string
  /**
   * Fired with the selected date as `YYYY-MM-DD`.
   */
  onValueChange?: (value: string) => void
}

/**
 * Always-visible month grid for picking one date. Use it directly on a booking
 * page, or inside a popover as part of `DatePicker`.
 *
 * Self-implemented on `Date` + `Intl` with no runtime dependency (#566).
 * Gregorian only. Choosing a range is `DateRangeCalendar` — the two have
 * different value types, so this is not a `mode` prop.
 *
 * Out of pattern, like the other form controls: no `variant`, and the error
 * state goes through `isError`.
 */
export const DateCalendar = forwardRef<HTMLDivElement, DateCalendarProps>(
  ({ value: valueProp, defaultValue, onValueChange, className, ...props }, ref) => {
    useInvalidDateWarning({ value: valueProp, defaultValue })

    const [value, setValue] = useControllable(valueProp, defaultValue, (next) => {
      if (next) onValueChange?.(next)
    })
    const selected = validDate(value)

    const selection: CalendarSelection = {
      anchor: selected,
      isSelected: (date) => date === selected,
      onSelect: setValue,
    }

    return (
      <CalendarView
        ref={ref}
        selection={selection}
        className={cn(dateCalendarVariants(), className)}
        {...props}
      />
    )
  },
)
DateCalendar.displayName = 'DateCalendar'

/* ----- DateRangeCalendar ----- */

export interface DateRange {
  /** First day of the range, as `YYYY-MM-DD`. */
  from?: string
  /** Last day of the range, as `YYYY-MM-DD`. Unset while the range is half-picked. */
  to?: string
}

export interface DateRangeCalendarProps extends CalendarCommonProps {
  /**
   * The selected range (controlled). Pass `{}` for no selection.
   */
  value?: DateRange
  /**
   * The initially selected range (uncontrolled).
   */
  defaultValue?: DateRange
  /**
   * Fired after every pick: `{ from }` for the first click, `{ from, to }` for
   * the second. A click before `from` swaps the two, and a click on a finished
   * range starts a new one.
   */
  onValueChange?: (value: DateRange) => void
  /**
   * Number of months shown side by side.
   * @default 1
   */
  numberOfMonths?: number
  /**
   * Shortest allowed range in days, counting both ends. Days that would make a
   * shorter range cannot be picked as the end. Clicking the start again clears
   * the selection.
   */
  minDays?: number
  /**
   * Longest allowed range in days, counting both ends.
   */
  maxDays?: number
  /**
   * Allows a range to span days marked by `isDateDisabled`. By default the end
   * cannot be picked past the first such day.
   * @default false
   */
  allowDisabledInRange?: boolean
}

/**
 * Returns a predicate for "does the way from `from` to this date hit a blocked
 * day". Each direction walks only once per render, so the grid's 42 cells cost
 * one scan rather than 42.
 */
function createSpanChecker(from: string, isBlocked: (date: string) => boolean) {
  const scanner = (step: 1 | -1) => {
    let cursor = from
    let blocked: string | undefined
    return (until: string) => {
      while (!blocked && compareDates(cursor, until) * step < 0) {
        cursor = addDays(cursor, step)
        if (isBlocked(cursor)) blocked = cursor
      }
      return !!blocked && compareDates(blocked, until) * step <= 0
    }
  }
  const forward = scanner(1)
  const backward = scanner(-1)
  return (date: string) => (compareDates(date, from) < 0 ? backward : forward)(date)
}

/**
 * Always-visible month grid for picking a date range. Use it directly, or
 * inside a popover as part of `DateRangePicker`.
 *
 * The range is exposed on each cell as `data-range-start` / `data-range-end` /
 * `data-range-middle`, and read out through the day's accessible name.
 */
export const DateRangeCalendar = forwardRef<HTMLDivElement, DateRangeCalendarProps>(
  (
    {
      value: valueProp,
      defaultValue = {},
      onValueChange,
      minDays,
      maxDays,
      allowDisabledInRange = false,
      className,
      ...props
    },
    ref,
  ) => {
    useInvalidDateWarning({
      'value.from': valueProp?.from,
      'value.to': valueProp?.to,
      'defaultValue.from': defaultValue.from,
      'defaultValue.to': defaultValue.to,
    })

    const [value, setValue] = useControllable(valueProp, defaultValue, onValueChange)

    const first = validDate(value.from)
    const second = validDate(value.to)
    const isSwapped = !!first && !!second && compareDates(first, second) > 0
    const from = isSwapped ? second : first
    const to = isSwapped ? first : second
    // Only a half-picked range constrains the next click.
    const start = from && !to ? from : undefined

    let spansBlockedDay: ((date: string) => boolean) | undefined

    const selection: CalendarSelection = {
      anchor: from,
      multiselectable: true,
      isSelected: (date) => getRangePosition(date) !== undefined,
      getRangePosition,
      isUnavailable: (date, isBaseDisabled) => {
        if (!start || date === start) return false
        const length = Math.abs(diffDays(start, date)) + 1
        if (minDays !== undefined && length < minDays) return true
        if (maxDays !== undefined && length > maxDays) return true
        if (allowDisabledInRange) return false
        spansBlockedDay ??= createSpanChecker(start, isBaseDisabled)
        return spansBlockedDay(date)
      },
      onSelect: (date) => {
        if (!start) setValue({ from: date })
        else if (date === start && (minDays ?? 1) > 1) setValue({})
        else if (compareDates(date, start) < 0) setValue({ from: date, to: start })
        else setValue({ from: start, to: date })
      },
    }

    function getRangePosition(date: string): RangePosition | undefined {
      if (!from) return undefined
      const end = to ?? from
      if (compareDates(date, from) < 0 || compareDates(date, end) > 0) return undefined
      const isEnd = !!to && date === to
      return { start: date === from, end: isEnd, middle: date !== from && !isEnd }
    }

    return (
      <CalendarView
        ref={ref}
        selection={selection}
        className={cn(dateRangeCalendarVariants(), className)}
        {...props}
      />
    )
  },
)
DateRangeCalendar.displayName = 'DateRangeCalendar'
