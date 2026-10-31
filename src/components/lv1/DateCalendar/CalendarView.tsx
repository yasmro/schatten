import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type KeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { cn } from '../../../lib/utils'
import {
  addDays,
  addMonths,
  clampDate,
  compareDates,
  createFormatters,
  type DateCalendarLocale,
  DEFAULT_LOCALE,
  endOfWeek,
  getLocalToday,
  isSameMonth,
  isValidISODate,
  MAX_DATE,
  MIN_DATE,
  monthMatrix,
  pad,
  resolveLocale,
  startOfMonth,
  startOfWeek,
  type WeekDay,
  weekNumberOfRow,
} from './date-math'
import { useControllable } from './use-controllable'

/** Overrides for the strings Schatten cannot derive from `Intl`. */
export interface DateCalendarLabels {
  /**
   * Accessible name of the previous-month button.
   * @default 'Previous month'
   */
  previousMonth?: string
  /**
   * Accessible name of the next-month button.
   * @default 'Next month'
   */
  nextMonth?: string
  /**
   * Accessible name of the month dropdown.
   * @default 'Month'
   */
  month?: string
  /**
   * Accessible name of the year dropdown.
   * @default 'Year'
   */
  year?: string
  /**
   * Accessible name of the week-number column.
   * @default 'Week'
   */
  week?: string
  /**
   * Appended to the accessible name of the first day of a range.
   * @default 'range start'
   */
  rangeStart?: string
  /**
   * Appended to the accessible name of the last day of a range.
   * @default 'range end'
   */
  rangeEnd?: string
}

const DEFAULT_LABELS: Required<DateCalendarLabels> = {
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  month: 'Month',
  year: 'Year',
  week: 'Week',
  rangeStart: 'range start',
  rangeEnd: 'range end',
}

/** Props shared by `DateCalendar` and `DateRangeCalendar`. */
export interface CalendarCommonProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'> {
  /**
   * The displayed month (controlled), as any `YYYY-MM-DD` date in that month.
   * With several months, this is the leftmost one.
   */
  month?: string
  /**
   * The month displayed first (uncontrolled). Falls back to the selected date,
   * then `today`.
   */
  defaultMonth?: string
  /**
   * Fired when the displayed month changes, with its first day (`YYYY-MM-01`).
   */
  onMonthChange?: (month: string) => void
  /**
   * The earliest selectable date, as `YYYY-MM-DD`. The previous-month button
   * stops at this month.
   */
  min?: string
  /**
   * The latest selectable date, as `YYYY-MM-DD`. The next-month button stops at
   * this month.
   */
  max?: string
  /**
   * Marks individual dates unavailable. They stay focusable so keyboard users
   * can pass through them, but cannot be selected.
   */
  isDateDisabled?: (date: string) => boolean
  /**
   * BCP 47 language tag passed to `Intl.DateTimeFormat`. The listed values are
   * suggestions; any tag `Intl` supports works. Use `ja`, not `jp`, for
   * Japanese. An unsupported tag warns in development and falls back to
   * `'en-US'`. Dates are always Gregorian, even for `th-TH`.
   * @example 'ja-JP'
   * @default 'en-US'
   */
  locale?: DateCalendarLocale
  /**
   * The first column of the grid: `0` is Sunday, `1` is Monday, `6` is Saturday.
   * Not derived from `locale`.
   * @default 0
   */
  weekStartsOn?: WeekDay
  /**
   * The date marked as today, as `YYYY-MM-DD`. Defaults to the local date when
   * the component mounts; it does not update if the date changes while mounted.
   * With SSR the default mark appears after hydration, because the server does
   * not know the user's time zone. Pass this prop (or `defaultMonth`) so the
   * server and the client agree on the first month.
   */
  today?: string
  /**
   * How the month heading is presented.
   * - `label` — text only; move with the previous / next buttons
   * - `dropdown` — native month and year selects
   * @default 'label'
   */
  captionLayout?: 'label' | 'dropdown'
  /**
   * Shows ISO-8601 week numbers in a leading column.
   * @default false
   */
  showWeekNumber?: boolean
  /**
   * Overrides for the English default labels. Pass these together with
   * `locale`, or a screen reader mixes two languages.
   */
  labels?: DateCalendarLabels
  /**
   * Displays the error state. When used inside a `<Field>`, the field's error
   * state takes precedence.
   * @default false
   */
  isError?: boolean
  disabled?: boolean
  /**
   * Keeps the calendar navigable but blocks selection.
   * @default false
   */
  readOnly?: boolean
}

/** Where a date sits in a selected range. `undefined` means outside it. */
export interface RangePosition {
  start: boolean
  end: boolean
  middle: boolean
}

/** What `DateCalendar` / `DateRangeCalendar` plug into the shared view. */
export interface CalendarSelection {
  /** The date Tab lands on, and the month shown first. */
  anchor?: string
  isSelected: (date: string) => boolean
  onSelect: (date: string) => void
  /** Rejects a date that `min` / `max` / `isDateDisabled` allow. */
  isUnavailable?: (date: string, isBaseDisabled: (date: string) => boolean) => boolean
  getRangePosition?: (date: string) => RangePosition | undefined
  multiselectable?: boolean
}

interface CalendarViewProps extends CalendarCommonProps {
  selection: CalendarSelection
  numberOfMonths?: number
}

/** A date prop if it is valid. Invalid and empty values count as unset. */
export function validDate(date: string | undefined) {
  return date && isValidISODate(date) ? date : undefined
}

/** Warns once per distinct set of invalid date props. */
export function useInvalidDateWarning(dates: Record<string, string | undefined>) {
  const invalid = Object.entries(dates)
    .filter(([, date]) => date && !isValidISODate(date))
    .map(([name, date]) => `\`${name}\` "${date}"`)
    .join(', ')

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && invalid) {
      console.warn(`DateCalendar: ignoring invalid date ${invalid}. Expected YYYY-MM-DD.`)
    }
  }, [invalid])
}

const subscribeToNothing = () => () => {}
const getServerToday = () => undefined

/** Where a key moves focus from `date`, or `undefined` for any other key. */
function getKeyTarget(
  key: string,
  date: string,
  shiftKey: boolean,
  isRtl: boolean,
  weekStartsOn: WeekDay,
) {
  const horizontal = isRtl ? -1 : 1
  const monthStep = shiftKey ? 12 : 1
  switch (key) {
    case 'ArrowLeft':
      return addDays(date, -horizontal)
    case 'ArrowRight':
      return addDays(date, horizontal)
    case 'ArrowUp':
      return addDays(date, -7)
    case 'ArrowDown':
      return addDays(date, 7)
    case 'PageUp':
      return addMonths(date, -monthStep)
    case 'PageDown':
      return addMonths(date, monthStep)
    case 'Home':
      return startOfWeek(date, weekStartsOn)
    case 'End':
      return endOfWeek(date, weekStartsOn)
    default:
      return undefined
  }
}

/** The grid, navigation and keyboard model shared by both public components. */
export const CalendarView = forwardRef<HTMLDivElement, CalendarViewProps>(
  (
    {
      selection,
      numberOfMonths: numberOfMonthsProp = 1,
      month: monthProp,
      defaultMonth,
      onMonthChange,
      min: minProp,
      max: maxProp,
      isDateDisabled,
      locale: localeProp = DEFAULT_LOCALE,
      weekStartsOn = 0,
      today: todayProp,
      captionLayout = 'label',
      showWeekNumber = false,
      labels: labelsProp,
      isError: isErrorProp = false,
      disabled: disabledProp,
      readOnly = false,
      'aria-describedby': ariaDescribedByProp,
      'aria-labelledby': ariaLabelledByProp,
      className,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? false
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
    // A role="group" div cannot be reached by htmlFor, so the Field label names
    // it the same way it names RadioGroup.
    const ariaLabelledBy = ariaLabelledByProp ?? (props['aria-label'] ? undefined : field?.labelId)

    useInvalidDateWarning({
      month: monthProp,
      defaultMonth,
      min: minProp,
      max: maxProp,
      today: todayProp,
    })

    const validMin = validDate(minProp)
    const validMax = validDate(maxProp)
    const isInverted = !!validMin && !!validMax && compareDates(validMin, validMax) > 0
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production' && isInverted) {
        console.warn(`DateCalendar: \`min\` is after \`max\`. Ignoring both.`)
      }
    }, [isInverted])
    const min = (!isInverted && validMin) || MIN_DATE
    const max = (!isInverted && validMax) || MAX_DATE

    const locale = useMemo(() => resolveLocale(localeProp), [localeProp])
    const format = useMemo(() => createFormatters(locale), [locale])
    const weekdays = useMemo(() => format.weekdayNames(weekStartsOn), [format, weekStartsOn])
    const monthNames = useMemo(() => format.monthNames(), [format])
    const labels = { ...DEFAULT_LABELS, ...labelsProp }

    const [localToday] = useState(getLocalToday)
    const validToday = validDate(todayProp)
    // The reference date picks the first month and the year range. The mark is
    // held back during hydration: the server cannot know the user's local date,
    // so an `aria-current` rendered there may be on the wrong day.
    const referenceDate = validToday ?? localToday
    const hydratedToday = useSyncExternalStore(subscribeToNothing, () => localToday, getServerToday)
    const today = validToday ?? hydratedToday

    const initialMonth = startOfMonth(
      clampDate(validDate(defaultMonth) ?? selection.anchor ?? referenceDate, min, max),
    )
    const validMonth = validDate(monthProp)
    const [firstMonth, setFirstMonth] = useControllable(
      validMonth && startOfMonth(validMonth),
      initialMonth,
      onMonthChange,
    )

    const numberOfMonths = Math.max(1, Math.floor(numberOfMonthsProp))
    const months = Array.from({ length: numberOfMonths }, (_, index) =>
      addMonths(firstMonth, index),
    )
    const lastMonth = months[months.length - 1]
    const isVisible = (date: string) =>
      compareDates(startOfMonth(date), firstMonth) >= 0 &&
      compareDates(startOfMonth(date), lastMonth) <= 0

    const isBaseDisabled = (date: string) =>
      compareDates(date, min) < 0 || compareDates(date, max) > 0 || !!isDateDisabled?.(date)
    const isUnavailable = (date: string) =>
      disabled || isBaseDisabled(date) || !!selection.isUnavailable?.(date, isBaseDisabled)

    // The last day that really held focus. Only the day's own focus event writes
    // this, so it can never name a day the parent refused to show.
    const [focused, setFocused] = useState<string>()
    const pendingFocus = useRef<string | null>(null)
    const [, requestCommit] = useReducer((count: number) => count + 1, 0)
    const rootRef = useRef<HTMLDivElement>(null)
    const baseId = useId()

    const findDay = (date: string) =>
      rootRef.current?.querySelector<HTMLElement>(`[data-date="${date}"]`)

    // Clears the request whether or not the day appeared, so a month the parent
    // refused cannot move focus later, on some unrelated render.
    useEffect(() => {
      const date = pendingFocus.current
      if (date === null) return
      pendingFocus.current = null
      findDay(date)?.focus()
    })

    const tabStop =
      [focused, selection.anchor, today, firstMonth]
        .map((date) => date && clampDate(date, min, max))
        .find((date) => date && isVisible(date)) ?? firstMonth

    function moveFocus(target: string) {
      const next = clampDate(target, min, max)
      const day = findDay(next)
      if (day) {
        day.focus()
        return
      }
      // The day is in a month not on screen yet. requestCommit guarantees the
      // effect runs even if the parent ignores the month change.
      pendingFocus.current = next
      requestCommit()
      const nextMonth = startOfMonth(next)
      if (compareDates(nextMonth, firstMonth) < 0) setFirstMonth(nextMonth)
      else if (compareDates(nextMonth, lastMonth) > 0) {
        setFirstMonth(addMonths(nextMonth, 1 - numberOfMonths))
      }
    }

    function select(date: string) {
      if (readOnly || isUnavailable(date)) return
      selection.onSelect(date)
      // Safari does not focus a button on click.
      moveFocus(date)
    }

    function onGridKeyDown(event: KeyboardEvent<HTMLTableElement>) {
      if (event.altKey || event.ctrlKey || event.metaKey) return
      // The focused element, not state: this must follow what the user is on.
      const base = (event.target as HTMLElement).dataset.date ?? tabStop
      const isRtl = getComputedStyle(event.currentTarget).direction === 'rtl'
      const target = getKeyTarget(event.key, base, event.shiftKey, isRtl, weekStartsOn)
      if (!target) return
      event.preventDefault()
      moveFocus(target)
    }

    const isFirstReachable = compareDates(firstMonth, startOfMonth(min)) <= 0
    const isLastReachable = compareDates(lastMonth, startOfMonth(max)) >= 0

    // `aria-disabled`, not `disabled`: a button that disables itself under the
    // pointer would drop keyboard focus onto <body>.
    function renderNav(direction: 'previous' | 'next') {
      const isPrevious = direction === 'previous'
      const isAtEnd = isPrevious ? isFirstReachable : isLastReachable
      const Chevron = isPrevious ? ChevronLeft : ChevronRight
      return (
        <button
          type="button"
          className={cn('st-date-calendar__nav', `st-date-calendar__nav--${direction}`)}
          aria-label={isPrevious ? labels.previousMonth : labels.nextMonth}
          aria-disabled={disabled || isAtEnd || undefined}
          disabled={disabled}
          onClick={() => {
            if (!isAtEnd) setFirstMonth(addMonths(firstMonth, isPrevious ? -1 : 1))
          }}
        >
          <Chevron className="st-date-calendar__nav-icon" aria-hidden="true" />
        </button>
      )
    }

    function renderDropdowns(month: string, index: number) {
      const year = Number(month.slice(0, 4))
      const center = Number(clampDate(referenceDate, min, max).slice(0, 4))
      const firstYear = Math.max(Number(min.slice(0, 4)), center - 100)
      const lastYear = Math.min(Number(max.slice(0, 4)), center + 10)
      const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i)
      if (!years.includes(year)) years.push(year)
      years.sort((a, b) => a - b)

      const moveTo = (target: string) =>
        setFirstMonth(addMonths(startOfMonth(clampDate(target, min, max)), -index))

      return (
        <div className="st-date-calendar__selects">
          <select
            className="st-date-calendar__select"
            aria-label={labels.month}
            value={month.slice(5, 7)}
            disabled={disabled}
            onChange={(event) => moveTo(`${month.slice(0, 4)}-${event.target.value}-01`)}
          >
            {monthNames.map((name, monthIndex) => {
              const value = pad(monthIndex + 1, 2)
              const start = `${month.slice(0, 4)}-${value}-01`
              return (
                <option
                  key={value}
                  value={value}
                  disabled={
                    compareDates(start, startOfMonth(min)) < 0 || compareDates(start, max) > 0
                  }
                >
                  {name}
                </option>
              )
            })}
          </select>
          <select
            className="st-date-calendar__select"
            aria-label={labels.year}
            value={year}
            disabled={disabled}
            onChange={(event) =>
              moveTo(`${pad(Number(event.target.value), 4)}-${month.slice(5, 7)}-01`)
            }
          >
            {years.map((value) => (
              <option key={value} value={value}>
                {format.number(value)}
              </option>
            ))}
          </select>
        </div>
      )
    }

    function renderDay(date: string) {
      const position = selection.getRangePosition?.(date)
      const unavailable = isUnavailable(date)
      const rangeLabels = [
        position?.start && labels.rangeStart,
        position?.end && labels.rangeEnd,
      ].filter(Boolean)

      return (
        // biome-ignore lint/a11y/useFocusableInteractive: focus lives on the inner day <button> (roving tabindex), not the cell
        <td
          key={date}
          // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: gridcell of the APG date-picker grid
          role="gridcell"
          className="st-date-calendar__cell"
          aria-selected={selection.isSelected(date) || undefined}
          aria-disabled={unavailable || undefined}
          data-range-start={position?.start || undefined}
          data-range-end={position?.end || undefined}
          data-range-middle={position?.middle || undefined}
        >
          <button
            type="button"
            className="st-date-calendar__day"
            data-date={date}
            tabIndex={date === tabStop ? 0 : -1}
            disabled={disabled}
            aria-label={[format.dayLabel(date), ...rangeLabels].join(', ')}
            aria-current={date === today ? 'date' : undefined}
            aria-disabled={unavailable || undefined}
            onClick={() => select(date)}
            onFocus={() => setFocused(date)}
          >
            {format.dayNumber(date)}
          </button>
        </td>
      )
    }

    function renderCell(date: string | null, month: string, key: string) {
      if (date !== null && isSameMonth(date, month)) return renderDay(date)
      // Multi-month: an outside day would duplicate a real day of the
      // neighbouring grid, so the cell stays empty.
      if (date === null || numberOfMonths > 1) {
        return <td key={key} className="st-date-calendar__cell" />
      }
      return (
        // biome-ignore lint/a11y/useFocusableInteractive: outside days are inert — the arrow keys move to the adjacent month instead
        <td
          key={date}
          // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: gridcell of the APG date-picker grid
          role="gridcell"
          className="st-date-calendar__cell"
          aria-disabled="true"
          aria-label={format.dayLabel(date)}
          data-outside="true"
        >
          <span className="st-date-calendar__day">{format.dayNumber(date)}</span>
        </td>
      )
    }

    return (
      // biome-ignore lint/a11y/useSemanticElements: <fieldset> would add its own disabled semantics and legend layout; this is the wrapper RadioGroup also renders as a div
      <div
        ref={mergeRefs(ref, rootRef)}
        role="group"
        className={className}
        aria-invalid={isError || undefined}
        aria-disabled={disabled || undefined}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        {...props}
      >
        <div className="st-date-calendar__months">
          {months.map((month, index) => {
            const captionId = `${baseId}-caption-${index}`
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: the position is the identity. Keying by month would remount the aria-live caption, which is what announces the change.
              <div key={index} className="st-date-calendar__month">
                <div className="st-date-calendar__header">
                  {index === 0 && renderNav('previous')}
                  <div
                    id={captionId}
                    className={cn(
                      'st-date-calendar__caption',
                      captionLayout === 'dropdown' && 'st-date-calendar__caption--hidden',
                    )}
                    aria-live="polite"
                  >
                    {format.caption(month)}
                  </div>
                  {captionLayout === 'dropdown' && renderDropdowns(month, index)}
                  {index === numberOfMonths - 1 && renderNav('next')}
                </div>
                <table
                  // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: APG date-picker grid — <table role="grid"> + roving tabindex
                  role="grid"
                  className="st-date-calendar__grid"
                  aria-labelledby={captionId}
                  aria-multiselectable={selection.multiselectable || undefined}
                  aria-readonly={readOnly || undefined}
                  onKeyDown={onGridKeyDown}
                >
                  <thead>
                    <tr>
                      {showWeekNumber && (
                        <th
                          scope="col"
                          className="st-date-calendar__weekday"
                          aria-label={labels.week}
                        >
                          #
                        </th>
                      )}
                      {weekdays.map((weekday) => (
                        <th
                          key={weekday.long}
                          scope="col"
                          abbr={weekday.long}
                          className="st-date-calendar__weekday"
                        >
                          {weekday.short}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monthMatrix(month, weekStartsOn).map((week, weekIndex) => {
                      const weekNumber = weekNumberOfRow(week)
                      return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: a grid always has 6 rows in a fixed order
                        <tr key={weekIndex}>
                          {showWeekNumber && (
                            <th scope="row" className="st-date-calendar__weekday">
                              {weekNumber === undefined ? '' : format.number(weekNumber)}
                            </th>
                          )}
                          {week.map((date, dayIndex) =>
                            renderCell(date, month, `empty-${dayIndex}`),
                          )}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
CalendarView.displayName = 'CalendarView'
