import { CalendarDate, parseDate } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, type ReactNode, useState } from 'react'
import { Button } from '../../components/lv1/Button'
import { CodeBlock, Lead, Note, PageTitle } from '../../docs/docs-ui'
import { CalendarDateValueCalendar, DateValueCalendar, IsoValueCalendar } from './ValueTypeAdapters'

const meta: Meta = {
  title: 'PoC/DateCalendar/Value Type',
  parameters: { layout: 'fullscreen' },
}
export default meta

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-foreground-muted">{label}</span>
      <code className="text-sm break-all">{children}</code>
    </div>
  )
}

/** Submits through a real <form> so the FormData a server would receive is visible. */
function FormProbe({ serialized }: { serialized: string }) {
  const [sent, setSent] = useState<string>()
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSent(String(new FormData(e.currentTarget).get('date')))
      }}
    >
      <input type="hidden" name="date" value={serialized} />
      <Button type="submit" variant="secondary" size="sm">
        Submit form
      </Button>
      {sent !== undefined && <code className="text-sm">date={sent}</code>}
    </form>
  )
}

function Column({ title, code, children }: { title: string; code: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 min-w-0 flex-1 rounded-lg border border-border p-4">
      <h2 className="text-base font-semibold">{title}</h2>
      <CodeBlock>{code}</CodeBlock>
      {children}
    </section>
  )
}

function IsoColumn() {
  const [v, setV] = useState<string>()
  return (
    <Column
      title="A. ISO string"
      code={`const [date, setDate] = useState<string>()
// min: today + 3 days — no type help, needs a helper
const min = addDays(today, 3) // '2026-10-27'
<DateCalendar min={min} onValueChange={setDate} />
date === '2026-10-24'          // equality
JSON.stringify({ date })       // as-is`}
    >
      <IsoValueCalendar today="2026-10-24" min="2026-10-27" onValueChange={setV} />
      <Row label="state">{v ?? '—'}</Row>
      <Row label="JSON.stringify({ date })">{v ? JSON.stringify({ date: v }) : '—'}</Row>
      <Row label="date === '2026-10-28'">{v ? String(v === '2026-10-28') : '—'}</Row>
      {v && <FormProbe serialized={v} />}
    </Column>
  )
}

function DateColumn() {
  const [v, setV] = useState<Date>()
  const today = new Date(2026, 9, 24)
  const min = new Date(2026, 9, 27)
  return (
    <Column
      title="B. Date"
      code={`const [date, setDate] = useState<Date>()
const min = new Date(today); min.setDate(min.getDate() + 3)
<DateCalendar min={min} onValueChange={setDate} />
date.getTime() === new Date(2026, 9, 28).getTime()
JSON.stringify({ date })       // → UTC instant
date.toISOString().slice(0,10) // common "fix" — still UTC`}
    >
      <DateValueCalendar today={today} min={min} onValueChange={setV} />
      <Row label="state (toString)">{v ? v.toString() : '—'}</Row>
      <Row label="JSON.stringify({ date })">{v ? JSON.stringify({ date: v }) : '—'}</Row>
      <Row label="date.toISOString().slice(0, 10)">{v ? v.toISOString().slice(0, 10) : '—'}</Row>
      <Row label="date === new Date(2026, 9, 28)">
        {v ? String(v === new Date(2026, 9, 28)) : '—'}
      </Row>
      {v && <FormProbe serialized={v.toISOString()} />}
    </Column>
  )
}

function CalendarDateColumn() {
  const [v, setV] = useState<CalendarDate>()
  const today = new CalendarDate(2026, 10, 24)
  return (
    <Column
      title="C. CalendarDate (@internationalized/date)"
      code={`const [date, setDate] = useState<CalendarDate>()
const min = today.add({ days: 3 })
<DateCalendar min={min} onValueChange={setDate} />
date.compare(parseDate('2026-10-28')) === 0
JSON.stringify({ date })       // → ?
date.toString()                // '2026-10-28'`}
    >
      <CalendarDateValueCalendar today={today} min={today.add({ days: 3 })} onValueChange={setV} />
      <Row label="state (toString)">{v ? v.toString() : '—'}</Row>
      <Row label="JSON.stringify({ date })">{v ? JSON.stringify({ date: v }) : '—'}</Row>
      <Row label="date === parseDate('2026-10-28')">
        {v ? String(v === parseDate('2026-10-28')) : '—'}
      </Row>
      <Row label="date.compare(parseDate('2026-10-28')) === 0">
        {v ? String(v.compare(parseDate('2026-10-28')) === 0) : '—'}
      </Row>
      {v && <FormProbe serialized={String(v)} />}
    </Column>
  )
}

export const Comparison: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <PageTitle>Value type: ISO string vs Date vs CalendarDate</PageTitle>
      <Lead>
        The same calendar behind three public value types. Pick a date (try Oct 28) in each column
        and compare what you hold in state, what JSON and a form submission send, and how equality
        reads.
      </Lead>
      <Note>
        Browser time zone: <code>{Intl.DateTimeFormat().resolvedOptions().timeZone}</code>. Column B
        shifts by a day in JSON for any zone east of UTC (e.g. Asia/Tokyo). To try other zones, use
        Chrome DevTools → More tools → Sensors → Location → a preset city (overrides the time zone),
        then reload.
      </Note>
      <div className="flex flex-wrap gap-4 items-start">
        <IsoColumn />
        <DateColumn />
        <CalendarDateColumn />
      </div>
    </div>
  ),
}
