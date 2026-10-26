// PoC (#566): three public value types over the SAME calendar, so the only
// difference a consumer sees is the type they hold in state.
import { type CalendarDate, parseDate } from '@internationalized/date'
import type { ISODate } from './calendar-matrix'
import { DateCalendarSelf } from './DateCalendarSelf'

type Base = { today: ISODate }

/** A — ISO string `'YYYY-MM-DD'` (the calendar's native shape). */
export function IsoValueCalendar(p: Base & { min?: ISODate; onValueChange: (v: ISODate) => void }) {
  return (
    <DateCalendarSelf mode="single" today={p.today} min={p.min} onValueChange={p.onValueChange} />
  )
}

/** B — `Date` (local midnight, the convention rdp / shadcn / Fluent use). */
const dateToIso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
const isoToDate = (s: ISODate) => {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}
export function DateValueCalendar(p: {
  today: Date
  min?: Date
  onValueChange: (v: Date) => void
}) {
  return (
    <DateCalendarSelf
      mode="single"
      today={dateToIso(p.today)}
      min={p.min && dateToIso(p.min)}
      onValueChange={(v) => p.onValueChange(isoToDate(v))}
    />
  )
}

/** C — dedicated plain-date type (`CalendarDate`, as React Aria / Ark / Chakra). */
export function CalendarDateValueCalendar(p: {
  today: CalendarDate
  min?: CalendarDate
  onValueChange: (v: CalendarDate) => void
}) {
  return (
    <DateCalendarSelf
      mode="single"
      today={p.today.toString()}
      min={p.min?.toString()}
      onValueChange={(v) => p.onValueChange(parseDate(v))}
    />
  )
}
