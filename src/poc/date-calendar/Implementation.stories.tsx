import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
// rdp's own stylesheet, only for the rdp-only stories (.rdp-* classes; the
// wrapped calendars above use .st-* and are unaffected).
import 'react-day-picker/style.css'
import { Note } from '../../docs/docs-ui'
import { DateCalendarRdp } from './DateCalendarRdp'
import { DateCalendarSelf, type RangeProps, type SingleProps } from './DateCalendarSelf'

/**
 * PoC for #566 — NOT a component. Each story renders ONE prop object through
 * both implementations so behaviour can be compared side by side.
 */
const meta: Meta = {
  title: 'PoC/DateCalendar/Implementation',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

const today = '2026-10-24'
const isWeekend = (d: string) => [0, 6].includes(new Date(`${d}T00:00Z`).getUTCDay())

type Props = SingleProps | RangeProps

function Panel({
  title,
  note,
  props,
  Impl,
}: {
  title: string
  note?: string
  props: Props
  Impl: typeof DateCalendarSelf
}) {
  const [out, setOut] = useState<string>()
  const wired = {
    ...props,
    onValueChange: (v: unknown) => setOut(JSON.stringify(v)),
  } as Props
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold">{title}</h2>
      <Impl {...wired} />
      <code className="text-xs text-foreground-muted">onValueChange → {out ?? '—'}</code>
      {note && <p className="text-xs text-foreground-muted max-w-[22rem]">{note}</p>}
    </section>
  )
}

function Compare({
  props,
  selfNote,
  rdpNote,
}: {
  props: Props
  selfNote?: string
  rdpNote?: string
}) {
  return (
    <div className="flex flex-wrap gap-10 items-start">
      <Panel title="Self (Date + Intl)" props={props} Impl={DateCalendarSelf} note={selfNote} />
      <Panel title="react-day-picker v10" props={props} Impl={DateCalendarRdp} note={rdpNote} />
    </div>
  )
}

export const Single: Story = {
  render: () => (
    <Compare
      props={{
        mode: 'single',
        today,
        defaultValue: '2026-10-20',
        min: '2026-09-15',
        max: '2026-12-20',
        isDateDisabled: (d) => d.endsWith('-13'),
      }}
      selfNote="Disabled days use aria-disabled: still focusable, announced as unavailable."
      rdpNote="Disabled days use native disabled: skipped by arrow keys."
    />
  ),
}

export const LiveRegionPlacement: Story = {
  name: 'Live region placement (VoiceOver check)',
  render: () => {
    const props: SingleProps = { mode: 'single', today, defaultValue: '2026-10-20' }
    return (
      <div className="flex flex-wrap gap-10 items-start">
        <Panel
          title="Self — separate live region"
          props={props}
          Impl={DateCalendarSelf}
          note="A visually-hidden aria-live element next to the grid (current)."
        />
        <Panel
          title="Self — aria-live on the caption"
          props={{ ...props, announceIn: 'caption' }}
          Impl={DateCalendarSelf}
          note="The visible h2 caption carries aria-live (APG date picker pattern)."
        />
        <Panel
          title="react-day-picker v10"
          props={props}
          Impl={DateCalendarRdp}
          note='rdp puts role="status" aria-live="polite" on the caption.'
        />
      </div>
    )
  },
}

export const Range: Story = {
  render: () => (
    <Compare
      props={{ mode: 'range', today, defaultValue: { from: '2026-10-12', to: '2026-10-16' } }}
    />
  ),
}

export const TwoMonths: Story = {
  name: 'Two months (range)',
  render: () => (
    <Compare
      props={{ mode: 'range', today, numberOfMonths: 2 }}
      rdpNote="rdp's default shows neighbouring-month days in both grids (duplicated, and both get selected); turned off here to match."
    />
  ),
}

export const TwoMonthsPaged: Story = {
  name: 'Two months, paged navigation',
  render: () => (
    <Compare props={{ mode: 'range', today, numberOfMonths: 2, pagedNavigation: true }} />
  ),
}

export const Dropdown: Story = {
  name: 'Month / year dropdown',
  render: () => (
    <Compare
      props={{
        mode: 'single',
        today,
        captionLayout: 'dropdown',
        min: '1950-01-01',
        max: '2030-12-31',
      }}
      selfNote="Two plain <select>s."
      rdpNote="A transparent native <select> layered over a label: needs its own CSS to look right."
    />
  ),
}

export const Rtl: Story = {
  name: 'RTL (ArrowRight → previous day)',
  render: () => (
    <Compare props={{ mode: 'single', today, dir: 'rtl', defaultValue: '2026-10-20' }} />
  ),
}

export const WeekNumbers: Story = {
  render: () => (
    <Compare props={{ mode: 'single', today, showWeekNumber: true, weekStartsOn: 1 }} />
  ),
}

export const RangeConstraints: Story = {
  name: 'Range: 2–7 days, cannot span weekends',
  render: () => (
    <Compare
      props={{
        mode: 'range',
        today,
        minDays: 2,
        maxDays: 7,
        excludeDisabled: true,
        isDateDisabled: isWeekend,
      }}
      selfNote="After picking a start, every day that cannot be the end is disabled up front."
      rdpNote="Nothing is marked in advance; clicking an invalid end silently restarts the range from that day."
    />
  ),
}

export const CustomDayMarks: Story = {
  name: 'Custom day marks (booked)',
  render: () => (
    <Compare
      props={{
        mode: 'single',
        today,
        getDayAttributes: (d) => ({
          'data-booked': ['2026-10-07', '2026-10-08'].includes(d) || undefined,
        }),
      }}
      rdpNote="rdp has modifiers, but they become class names; emitting data-* needed the Day override."
    />
  ),
}

export const Locale: Story = {
  name: 'Locale ja-JP, week starts Monday',
  render: () => (
    <Compare
      props={{ mode: 'single', today, locale: 'ja-JP', weekStartsOn: 1 }}
      selfNote="locale is a string handed to Intl."
      rdpNote="rdp needs a date-fns Locale object (import { ja } from 'react-day-picker/locale'); the string prop is not mapped in this PoC, so it stays English."
    />
  ),
}

/* ---- rdp-only features (no self equivalent built) ---- */

export const RdpOnlyAnimate: Story = {
  name: 'rdp only: animated month change',
  render: () => (
    <div className="flex flex-col gap-3">
      <Note>No self equivalent in this PoC.</Note>
      <div className="poc-rdp-themed">
        <DayPicker mode="single" animate defaultMonth={new Date(2026, 9, 1)} />
      </div>
    </div>
  ),
}

export const RdpOnlyMultiple: Story = {
  name: 'rdp only: multiple selection (max 3)',
  render: () => {
    const [sel, setSel] = useState<Date[]>()
    return (
      <div className="flex flex-col gap-3">
        <Note>
          No self equivalent in this PoC. Picking a 4th day restarts the selection instead of being
          blocked.
        </Note>
        <div className="poc-rdp-themed">
          <DayPicker
            mode="multiple"
            max={3}
            selected={sel}
            onSelect={setSel}
            defaultMonth={new Date(2026, 9, 1)}
          />
        </div>
      </div>
    )
  },
}
