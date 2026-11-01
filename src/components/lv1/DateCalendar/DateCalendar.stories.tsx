import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ComponentType, useState } from 'react'
import { Field } from '../Field'
import {
  DateCalendar,
  type DateCalendarProps,
  type DateRange,
  DateRangeCalendar,
  type DateRangeCalendarProps,
} from './DateCalendar'

/** The page documents both components, so the table lists the range-only props too. */
type CalendarArgs = DateCalendarProps &
  Pick<DateRangeCalendarProps, 'numberOfMonths' | 'minDays' | 'maxDays' | 'allowDisabledInRange'>

const TODAY = '2026-10-24'

/**
 * Always-visible month grid for picking a date (`DateCalendar`) or a range
 * (`DateRangeCalendar`). Values are ISO `YYYY-MM-DD` strings, so a time zone can
 * never shift a date by one day.
 */
const meta: Meta<CalendarArgs> = {
  title: 'Components/lv1/DateCalendar',
  component: DateCalendar as ComponentType<CalendarArgs>,
  subcomponents: { DateRangeCalendar } as Meta<CalendarArgs>['subcomponents'],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'The selected date as `YYYY-MM-DD` (controlled).',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The initially selected date as `YYYY-MM-DD` (uncontrolled).',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Fired with the selected date as `YYYY-MM-DD`.',
      table: { type: { summary: '(value: string) => void' } },
    },
    month: {
      description: 'The displayed month (controlled), as any date in that month.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultMonth: {
      description: 'The month displayed first (uncontrolled).',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onMonthChange: {
      description: 'Fired when the displayed month changes, with its first day.',
      table: { type: { summary: '(month: string) => void' } },
    },
    min: {
      description: 'The earliest selectable date.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    max: {
      description: 'The latest selectable date.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isDateDisabled: {
      description: 'Marks individual dates unavailable.',
      table: { type: { summary: '(date: string) => boolean' } },
    },
    locale: {
      description: 'BCP 47 language tag passed to `Intl.DateTimeFormat`.',
      control: 'text',
      table: { type: { summary: 'DateCalendarLocale' }, defaultValue: { summary: 'en-US' } },
    },
    weekStartsOn: {
      description: 'The first column of the grid: `0` is Sunday, `1` is Monday.',
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      table: { type: { summary: 'WeekDay' }, defaultValue: { summary: '0' } },
    },
    today: {
      description: 'The date marked as today. Defaults to the local date.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    captionLayout: {
      description: 'How the month heading is presented.',
      control: 'select',
      options: ['label', 'dropdown'],
      table: { type: { summary: '"label" | "dropdown"' }, defaultValue: { summary: 'label' } },
    },
    showWeekNumber: {
      description: 'Shows ISO-8601 week numbers in a leading column.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    labels: {
      description: 'Overrides for the English default labels.',
      table: { type: { summary: 'DateCalendarLabels' } },
    },
    isError: {
      description: 'Displays the error state.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Disables the whole calendar.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Keeps the calendar navigable but blocks selection.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    numberOfMonths: {
      description: 'Number of months shown side by side.',
      control: false,
      table: {
        category: 'DateRangeCalendar only',
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    minDays: {
      description: 'Shortest allowed range in days, counting both ends.',
      control: false,
      table: { category: 'DateRangeCalendar only', type: { summary: 'number' } },
    },
    maxDays: {
      description: 'Longest allowed range in days, counting both ends.',
      control: false,
      table: { category: 'DateRangeCalendar only', type: { summary: 'number' } },
    },
    allowDisabledInRange: {
      description: 'Allows a range to span days marked by `isDateDisabled`.',
      control: false,
      table: {
        category: 'DateRangeCalendar only',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<CalendarArgs>

/** Interactive single instance — always the first export (storybook-guideline.md). */
export const Playground: Story = {
  name: 'Playground',
  args: {
    today: TODAY,
    defaultValue: '2026-10-20',
  },
}

export const Single: Story = {
  name: 'Single date',
  render: () => <DateCalendar today={TODAY} defaultValue="2026-10-20" />,
}

export const Range: Story = {
  name: 'Date range',
  render: () => (
    <DateRangeCalendar today={TODAY} defaultValue={{ from: '2026-10-13', to: '2026-10-22' }} />
  ),
}

export const DisabledDates: Story = {
  name: 'min, max and disabled dates',
  render: () => (
    <DateCalendar
      today={TODAY}
      min="2026-10-05"
      max="2026-10-28"
      isDateDisabled={(date) => [6, 0].includes(new Date(date).getUTCDay())}
    />
  ),
}

export const RangeConstraints: Story = {
  name: 'Range: 2–7 days, no weekends inside',
  render: () => (
    <DateRangeCalendar
      today={TODAY}
      defaultValue={{ from: '2026-10-20' }}
      minDays={2}
      maxDays={7}
      isDateDisabled={(date) => [6, 0].includes(new Date(date).getUTCDay())}
    />
  ),
}

export const TwoMonths: Story = {
  name: 'Two months',
  render: () => (
    <DateRangeCalendar
      today={TODAY}
      numberOfMonths={2}
      defaultValue={{ from: '2026-10-26', to: '2026-11-05' }}
    />
  ),
}

export const WeekNumbers: Story = {
  name: 'Week numbers',
  render: () => <DateCalendar today={TODAY} showWeekNumber weekStartsOn={1} />,
}

export const Dropdown: Story = {
  name: 'Month and year dropdowns',
  render: () => <DateCalendar today={TODAY} captionLayout="dropdown" />,
}

export const Rtl: Story = {
  name: 'Right-to-left',
  render: () => (
    <div dir="rtl">
      <DateRangeCalendar
        today={TODAY}
        locale="ar-EG"
        weekStartsOn={6}
        defaultValue={{ from: '2026-10-13', to: '2026-10-22' }}
        labels={{ previousMonth: 'الشهر السابق', nextMonth: 'الشهر التالي' }}
      />
    </div>
  ),
}

export const LocaleJa: Story = {
  name: 'Japanese locale',
  render: () => (
    <DateCalendar
      today={TODAY}
      locale="ja-JP"
      defaultValue="2026-10-20"
      labels={{ previousMonth: '前の月', nextMonth: '次の月' }}
    />
  ),
}

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-wrap items-start gap-10">
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Error" isError />
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Disabled" disabled />
      <DateCalendar today={TODAY} defaultValue="2026-10-20" aria-label="Read-only" readOnly />
    </div>
  ),
}

export const InField: Story = {
  name: 'Inside Field',
  render: () => (
    <Field label="Check-in" description="Earliest is today." error="Pick a date">
      <DateCalendar today={TODAY} min={TODAY} />
    </Field>
  ),
}

function ValueReadout() {
  const [value, setValue] = useState('')
  const [range, setRange] = useState<DateRange>({})
  return (
    <div className="flex flex-col gap-6">
      <DateCalendar
        aria-label="Single"
        defaultMonth="2026-09-01"
        value={value}
        onValueChange={setValue}
      />
      <output data-testid="value">{value}</output>
      <DateRangeCalendar
        aria-label="Range"
        defaultMonth="2026-09-01"
        value={range}
        onValueChange={setRange}
      />
      <output data-testid="range">{JSON.stringify(range)}</output>
    </div>
  )
}

/** Prints what `onValueChange` returns, for the time zone interaction tests. */
export const ReturnedValue: Story = {
  name: 'Returned value',
  render: () => <ValueReadout />,
}
