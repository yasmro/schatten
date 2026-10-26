// PoC (#566): react-day-picker behind the SAME props as DateCalendarSelf, so
// stories can render both from one prop object. Everything below this line is
// the "override layer" rdp needs to match Schatten's contract — its size is
// part of what the PoC measures.
import { createContext, useContext, useState } from 'react'
import { DayPicker, type DayProps, type DateRange as RdpDateRange } from 'react-day-picker'
import './poc.css'
import { addMonths, type ISODate } from './calendar-matrix'
import type { Common, RangeProps, SingleProps } from './DateCalendarSelf'

// Public surface is ISO strings; rdp works on local-time Date.
const toDate = (iso?: ISODate) => {
  if (!iso) return undefined
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}
const toISO = (d?: Date) =>
  d
    ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    : undefined

// rdp's default class names → Schatten BEM. Modifier classes are blanked:
// state must be expressed as attributes (css-api.md §State).
const classNames = {
  root: 'st-date-calendar',
  months: 'st-date-calendar__months',
  month: 'st-date-calendar__month',
  month_caption: 'st-date-calendar__header',
  caption_label: 'st-date-calendar__caption',
  nav: 'st-date-calendar__nav',
  button_previous: 'st-date-calendar__nav-button',
  button_next: 'st-date-calendar__nav-button',
  chevron: 'st-date-calendar__chevron',
  month_grid: 'st-date-calendar__grid',
  weekdays: 'st-date-calendar__weekdays',
  weekday: 'st-date-calendar__weekday',
  weeks: 'st-date-calendar__weeks',
  week: 'st-date-calendar__week',
  day: 'st-date-calendar__day',
  day_button: 'st-date-calendar__day-button',
  dropdowns: 'st-date-calendar__dropdowns',
  dropdown_root: 'st-date-calendar__dropdown-root',
  dropdown: 'st-date-calendar__dropdown',
  months_dropdown: '',
  years_dropdown: '',
  week_number: 'st-date-calendar__weekday',
  week_number_header: 'st-date-calendar__weekday',
  footer: '',
  selected: '',
  today: '',
  outside: '',
  disabled: '',
  hidden: '',
  focused: '',
  range_start: '',
  range_middle: '',
  range_end: '',
}

// rdp exposes range state only as class names and has no per-day attribute
// hook, so the Day cell is replaced to emit data-* (the override layer). It
// must be a stable component (a per-render one would remount every cell and
// drop focus), so the per-instance attribute function travels via context.
const DayAttrs = createContext<Common['getDayAttributes']>(undefined)
function Day({ day, modifiers, ...td }: DayProps) {
  const getDayAttributes = useContext(DayAttrs)
  return (
    <td
      {...td}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      {...getDayAttributes?.(day.isoDate)}
    />
  )
}

function common(p: Common) {
  const disabled = [
    ...(p.min ? [{ before: toDate(p.min) as Date }] : []),
    ...(p.max ? [{ after: toDate(p.max) as Date }] : []),
    ...(p.isDateDisabled ? [(d: Date) => p.isDateDisabled?.(toISO(d) as string) ?? false] : []),
  ]
  const n = p.numberOfMonths ?? 1
  return {
    today: toDate(p.today),
    disabled,
    startMonth: toDate(p.min ?? addMonths(p.today, -12 * 100)),
    endMonth: toDate(p.max ?? addMonths(p.today, 12 * 10)),
    weekStartsOn: p.weekStartsOn as 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined,
    numberOfMonths: n,
    pagedNavigation: p.pagedNavigation,
    captionLayout: p.captionLayout,
    showWeekNumber: p.showWeekNumber,
    ISOWeek: p.showWeekNumber,
    dir: p.dir,
    // rdp default duplicates neighbouring-month days in multi-month view;
    // matched to the self implementation (hidden when n > 1).
    showOutsideDays: n === 1,
    fixedWeeks: true,
    classNames,
    components: { Day },
    labels: {
      labelPrevious: () => p.labels?.previousMonth ?? 'Previous month',
      labelNext: () => p.labels?.nextMonth ?? 'Next month',
    },
  }
}

export function DateCalendarRdp(props: SingleProps | RangeProps) {
  return (
    <DayAttrs.Provider value={props.getDayAttributes}>
      {props.mode === 'single' ? <RdpSingle {...props} /> : <RdpRange {...props} />}
    </DayAttrs.Provider>
  )
}

function RdpSingle(p: SingleProps) {
  const [sel, setSel] = useState(toDate(p.defaultValue))
  return (
    <DayPicker
      {...common(p)}
      mode="single"
      selected={sel}
      defaultMonth={toDate(p.defaultMonth) ?? sel ?? toDate(p.today)}
      onSelect={(d) => {
        setSel(d)
        if (d) p.onValueChange?.(toISO(d) as ISODate)
      }}
    />
  )
}

function RdpRange(p: RangeProps) {
  const [sel, setSel] = useState<RdpDateRange | undefined>(
    p.defaultValue
      ? { from: toDate(p.defaultValue.from), to: toDate(p.defaultValue.to) }
      : undefined,
  )
  return (
    <DayPicker
      {...common(p)}
      mode="range"
      // Schatten semantics: a 3rd click starts a new range.
      resetOnSelect
      // rdp's range `min` / `max` are day COUNTS — the name clash with the
      // ISO `min` / `max` above is why they are renamed minDays / maxDays.
      min={p.minDays}
      max={p.maxDays}
      excludeDisabled={p.excludeDisabled}
      selected={sel}
      defaultMonth={toDate(p.defaultMonth) ?? sel?.from ?? toDate(p.today)}
      onSelect={(r) => {
        setSel(r)
        p.onValueChange?.({ from: toISO(r?.from), to: toISO(r?.to) })
      }}
    />
  )
}
