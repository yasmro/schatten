// Self implementation, round 2: the feature set #567/#568 plausibly need.
// numberOfMonths / paged nav / RTL / month+year dropdown / range min/max days
// + excludeDisabled / week numbers / custom day attributes.
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from 'react'
import './poc.css'
import {
  addDays,
  addMonths,
  compare,
  diffDays,
  endOfWeek,
  formatCaption,
  formatDayLabel,
  formatDayNumber,
  type ISODate,
  isoWeek,
  monthMatrix,
  monthNames,
  sameMonth,
  startOfMonth,
  startOfWeek,
  weekdayNames,
} from './calendar-matrix'

export type DateRange = { from?: ISODate; to?: ISODate }
export type Common = {
  /** Text direction; arrows flip under `rtl`. */
  dir?: 'ltr' | 'rtl'
  today: ISODate
  min?: ISODate
  max?: ISODate
  isDateDisabled?: (d: ISODate) => boolean
  locale?: string
  weekStartsOn?: number
  defaultMonth?: ISODate
  numberOfMonths?: number
  pagedNavigation?: boolean
  captionLayout?: 'label' | 'dropdown'
  showWeekNumber?: boolean
  /** Extra data-* attributes per day (e.g. booked). */
  getDayAttributes?: (d: ISODate) => Record<`data-${string}`, string | boolean | undefined>
  labels?: {
    previousMonth?: string
    nextMonth?: string
    month?: string
    year?: string
    week?: string
  }
}
export type SingleProps = Common & {
  mode: 'single'
  defaultValue?: ISODate
  onValueChange?: (v: ISODate) => void
}
export type RangeProps = Common & {
  mode: 'range'
  defaultValue?: DateRange
  onValueChange?: (v: DateRange) => void
  minDays?: number
  maxDays?: number
  excludeDisabled?: boolean
}

const srOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
} as const

export function DateCalendarSelf(props: SingleProps | RangeProps) {
  const {
    today,
    min,
    max,
    isDateDisabled,
    locale,
    weekStartsOn = 0,
    labels,
    numberOfMonths = 1,
    pagedNavigation = false,
    captionLayout = 'label',
    showWeekNumber = false,
    getDayAttributes,
  } = props
  const [single, setSingle] = useState(props.mode === 'single' ? props.defaultValue : undefined)
  const [range, setRange] = useState<DateRange>(
    props.mode === 'range' ? (props.defaultValue ?? {}) : {},
  )
  const initial =
    props.defaultMonth ??
    (props.mode === 'single' ? props.defaultValue : props.defaultValue?.from) ??
    today
  const [first, setFirst] = useState(startOfMonth(initial))
  const [focused, setFocused] = useState<ISODate>(initial)
  const shouldFocus = useRef(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const baseId = useId()

  const months = useMemo(
    () => Array.from({ length: numberOfMonths }, (_, i) => addMonths(first, i)),
    [first, numberOfMonths],
  )
  const last = months[months.length - 1]
  const weekdays = useMemo(() => weekdayNames(locale, weekStartsOn), [locale, weekStartsOn])
  const visible = (d: ISODate) =>
    compare(startOfMonth(d), first) >= 0 && compare(startOfMonth(d), last) <= 0

  const baseDisabled = (d: ISODate) =>
    (min !== undefined && compare(d, min) < 0) ||
    (max !== undefined && compare(d, max) > 0) ||
    !!isDateDisabled?.(d)

  // While a range is half-picked, days that cannot become `to` are disabled
  // up front (rdp instead silently restarts the selection on such a click).
  const pending = props.mode === 'range' && range.from && !range.to ? range.from : undefined
  const isDisabled = (d: ISODate) => {
    if (baseDisabled(d)) return true
    if (!pending || props.mode !== 'range') return false
    const span = Math.abs(diffDays(pending, d)) + 1
    if (props.maxDays && span > props.maxDays) return true
    if (props.minDays && span < props.minDays && d !== pending) return true
    if (props.excludeDisabled) {
      const [a, b] = compare(d, pending) < 0 ? [d, pending] : [pending, d]
      for (let x = a; compare(x, b) <= 0; x = addDays(x, 1)) if (baseDisabled(x)) return true
    }
    return false
  }

  const tabStop = visible(focused) ? focused : first

  useEffect(() => {
    if (!shouldFocus.current) return
    shouldFocus.current = false
    rootRef.current?.querySelector<HTMLButtonElement>(`[data-date="${focused}"]`)?.focus()
  }, [focused])

  function showMonthOf(d: ISODate) {
    const m = startOfMonth(d)
    if (compare(m, first) < 0) setFirst(m)
    else if (compare(m, last) > 0) setFirst(addMonths(m, -(numberOfMonths - 1)))
  }
  function moveFocus(next: ISODate) {
    if (min && compare(next, min) < 0) next = min
    if (max && compare(next, max) > 0) next = max
    shouldFocus.current = true
    setFocused(next)
    showMonthOf(next)
  }

  function select(d: ISODate) {
    if (isDisabled(d)) return
    if (props.mode === 'single') {
      setSingle(d)
      props.onValueChange?.(d)
    } else {
      let next: DateRange
      if (!range.from || range.to) next = { from: d }
      else if (compare(d, range.from) < 0) next = { from: d, to: range.from }
      else next = { from: range.from, to: d }
      setRange(next)
      props.onValueChange?.(next)
    }
    moveFocus(d)
  }

  function onKeyDown(e: KeyboardEvent<HTMLElement>) {
    const rtl = getComputedStyle(e.currentTarget).direction === 'rtl'
    const h = rtl ? -1 : 1
    const map: Record<string, () => ISODate> = {
      ArrowLeft: () => addDays(focused, -h),
      ArrowRight: () => addDays(focused, h),
      ArrowUp: () => addDays(focused, -7),
      ArrowDown: () => addDays(focused, 7),
      PageUp: () => addMonths(focused, e.shiftKey ? -12 : -1),
      PageDown: () => addMonths(focused, e.shiftKey ? 12 : 1),
      Home: () => startOfWeek(focused, weekStartsOn),
      End: () => endOfWeek(focused, weekStartsOn),
    }
    const fn = map[e.key]
    if (!fn) return
    e.preventDefault()
    moveFocus(fn())
  }

  const step = pagedNavigation ? numberOfMonths : 1
  const prevDisabled = !!min && compare(addDays(first, -1), min) < 0
  const nextDisabled = !!max && compare(addMonths(last, 1), max) > 0
  function navigate(delta: number) {
    const f = addMonths(first, delta)
    setFirst(f)
    setFocused(f)
  }

  function rangeAttrs(d: ISODate) {
    if (props.mode !== 'range' || !range.from) return {}
    const to = range.to ?? range.from
    if (compare(d, range.from) < 0 || compare(d, to) > 0) return {}
    return {
      'data-range-start': d === range.from || undefined,
      'data-range-end': d === to || undefined,
      'data-range-middle': (d !== range.from && d !== to) || undefined,
    }
  }
  const isSelected = (d: ISODate) =>
    props.mode === 'single' ? d === single : Object.keys(rangeAttrs(d)).length > 0

  const minYear = Number((min ?? addMonths(today, -12 * 100)).slice(0, 4))
  const maxYear = Number((max ?? addMonths(today, 12 * 10)).slice(0, 4))
  const names = useMemo(() => monthNames(locale), [locale])
  const announce = months.map((m) => formatCaption(m, locale)).join(' – ')

  return (
    <div className="st-date-calendar" ref={rootRef} dir={props.dir}>
      <div aria-live="polite" style={srOnly}>
        {announce}
      </div>
      <div className="st-date-calendar__months" style={{ display: 'flex', gap: '1.5rem' }}>
        {months.map((month, mi) => {
          const captionId = `${baseId}-cap-${mi}`
          const weeks = monthMatrix(month, weekStartsOn)
          return (
            <div key={month} className="st-date-calendar__month">
              <div className="st-date-calendar__header">
                {mi === 0 ? (
                  <button
                    type="button"
                    className="st-date-calendar__nav-button"
                    aria-label={labels?.previousMonth ?? 'Previous month'}
                    disabled={prevDisabled}
                    onClick={() => navigate(-step)}
                  >
                    ‹
                  </button>
                ) : (
                  <span style={{ width: '2rem' }} />
                )}
                {captionLayout === 'dropdown' ? (
                  <div
                    className="st-date-calendar__dropdowns"
                    style={{ display: 'flex', gap: '0.25rem' }}
                  >
                    <span id={captionId} style={srOnly}>
                      {formatCaption(month, locale)}
                    </span>
                    <select
                      aria-label={labels?.month ?? 'Month'}
                      value={Number(month.slice(5, 7)) - 1}
                      onChange={(e) => {
                        const m = `${month.slice(0, 4)}-${String(Number(e.target.value) + 1).padStart(2, '0')}-01`
                        setFirst(addMonths(m, -mi))
                        setFocused(m)
                      }}
                    >
                      {names.map((n, i) => (
                        <option key={n} value={i}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <select
                      aria-label={labels?.year ?? 'Year'}
                      value={Number(month.slice(0, 4))}
                      onChange={(e) => {
                        const m = `${e.target.value}-${month.slice(5, 7)}-01`
                        setFirst(addMonths(m, -mi))
                        setFocused(m)
                      }}
                    >
                      {Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i).map(
                        (y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                ) : (
                  <h2 id={captionId} className="st-date-calendar__caption">
                    {formatCaption(month, locale)}
                  </h2>
                )}
                {mi === months.length - 1 ? (
                  <button
                    type="button"
                    className="st-date-calendar__nav-button"
                    aria-label={labels?.nextMonth ?? 'Next month'}
                    disabled={nextDisabled}
                    onClick={() => navigate(step)}
                  >
                    ›
                  </button>
                ) : (
                  <span style={{ width: '2rem' }} />
                )}
              </div>
              <table
                // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: APG date-picker grid — <table role="grid"> + roving tabindex (react-day-picker does the same)
                role="grid"
                aria-labelledby={captionId}
                className="st-date-calendar__grid"
                onKeyDown={onKeyDown}
              >
                <thead>
                  <tr>
                    {showWeekNumber && (
                      <th
                        scope="col"
                        className="st-date-calendar__weekday"
                        abbr={labels?.week ?? 'Week'}
                      >
                        <span aria-hidden="true">#</span>
                        <span style={srOnly}>{labels?.week ?? 'Week'}</span>
                      </th>
                    )}
                    {weekdays.map((w) => (
                      <th
                        key={w.long}
                        scope="col"
                        abbr={w.long}
                        className="st-date-calendar__weekday"
                      >
                        {w.short}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week) => (
                    <tr key={week[0]}>
                      {showWeekNumber && (
                        <th scope="row" className="st-date-calendar__weekday">
                          {isoWeek(week[weekStartsOn === 1 ? 0 : 1])}
                        </th>
                      )}
                      {week.map((d) => {
                        const outside = !sameMonth(d, month)
                        // Multi-month: outside days would duplicate real days of
                        // the neighbouring grid, so render them empty.
                        if (outside && numberOfMonths > 1)
                          return <td key={d} className="st-date-calendar__day" />
                        const disabled = isDisabled(d)
                        return (
                          // biome-ignore lint/a11y/useFocusableInteractive: focus lives on the inner day <button> (roving tabindex), not the cell
                          <td
                            key={d}
                            // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: gridcell of the APG date-picker grid above
                            role="gridcell"
                            className="st-date-calendar__day"
                            aria-selected={isSelected(d) || undefined}
                            data-outside={outside || undefined}
                            {...rangeAttrs(d)}
                            {...getDayAttributes?.(d)}
                          >
                            <button
                              type="button"
                              className="st-date-calendar__day-button"
                              data-date={d}
                              tabIndex={d === tabStop ? 0 : -1}
                              aria-label={formatDayLabel(d, locale)}
                              aria-current={d === today ? 'date' : undefined}
                              aria-disabled={disabled || undefined}
                              onClick={() => select(d)}
                              onFocus={() => d !== focused && setFocused(d)}
                            >
                              {formatDayNumber(d, locale)}
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        })}
      </div>
    </div>
  )
}
