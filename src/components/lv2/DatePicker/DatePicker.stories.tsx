import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../lv1/Button'
import { Dialog } from '../../lv1/Dialog'
import { Field } from '../../lv1/Field'
import { DatePicker, DateRangePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/lv2/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    granularity: {
      description:
        'What the value holds: a date (`YYYY-MM-DD`), or a local date and time (`YYYY-MM-DDTHH:mm`).',
      control: 'inline-radio',
      options: ['day', 'minute'],
      table: { type: { summary: '"day" | "minute"' }, defaultValue: { summary: 'day' } },
    },
    value: {
      description: 'The selected value (controlled), in the format of `granularity`. `""` is none.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The initial value (uncontrolled), in the format of `granularity`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Fired when the value changes. `""` while the inputs hold no valid value.',
      table: { type: { summary: '(value: string) => void' } },
    },
    name: {
      description: 'Submits the selected value under this name.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    size: {
      description: 'Size of the control.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    min: {
      description: 'The earliest selectable value, in the format of `value`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    max: {
      description: 'The latest selectable value, in the format of `value`.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isDateDisabled: {
      description: 'Marks individual dates unavailable.',
      control: false,
      table: { type: { summary: '(date: string) => boolean' } },
    },
    locale: {
      description: 'BCP 47 language tag for the calendar. Typed dates stay `YYYY-MM-DD`.',
      control: 'text',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'en-US' } },
    },
    weekStartsOn: {
      description: 'The first column of the calendar: `0` is Sunday, `1` is Monday.',
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      table: { type: { summary: '0 | 1 | 2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '0' } },
    },
    today: {
      description: 'The date the calendar marks as today. Defaults to the local date.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      description: 'Text shown while the input is empty.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'YYYY-MM-DD, or YYYY-MM-DD HH:mm at minute' },
      },
    },
    labels: {
      description: 'Overrides for the English default labels.',
      control: false,
      table: { type: { summary: 'DatePickerLabels' } },
    },
    inputRef: {
      description: 'Ref to the input, e.g. to focus it after a failed validation.',
      control: false,
      table: { type: { summary: 'Ref<HTMLInputElement>' } },
    },
    isError: {
      description: 'Displays the error state. A Field takes precedence.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Disables the input and the calendar button.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      description: 'Shows the value without allowing edits.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      description: 'Native required validation on the input.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Playground: Story = {
  args: {
    'aria-label': 'Date',
    defaultValue: '2026-10-24',
  },
  render: (args) => (
    <div className="w-72">
      <DatePicker {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <DatePicker size="sm" defaultValue="2026-10-24" aria-label="Small" />
      <DatePicker size="md" defaultValue="2026-10-24" aria-label="Medium" />
      <DatePicker size="lg" defaultValue="2026-10-24" aria-label="Large" />
      <DateRangePicker
        size="sm"
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Small range"
      />
      <DateRangePicker
        size="md"
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Medium range"
      />
      <DateRangePicker
        size="lg"
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Large range"
      />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="grid w-[40rem] grid-cols-2 gap-4">
      <DatePicker aria-label="Empty" />
      <DateRangePicker aria-label="Empty range" />
      <DatePicker isError defaultValue="2026-10-24" aria-label="Error" />
      <DateRangePicker
        isError
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Error range"
      />
      <DatePicker readOnly defaultValue="2026-10-24" aria-label="Read-only" />
      <DateRangePicker
        readOnly
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Read-only range"
      />
      <DatePicker disabled defaultValue="2026-10-24" aria-label="Disabled" />
      <DateRangePicker
        disabled
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Disabled range"
      />
    </div>
  ),
}

export const InField: Story = {
  name: 'In Field',
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <Field label="Departure" description="Pick a weekday." required>
        <DatePicker defaultValue="2026-10-24" />
      </Field>
      <Field label="Stay" error="Choose both dates.">
        <DateRangePicker defaultValue={{ from: '2026-10-20' }} />
      </Field>
    </div>
  ),
}

export const InForm: Story = {
  name: 'In Form',
  render: () => (
    <form className="flex w-72 flex-col gap-4">
      <DatePicker name="date" defaultValue="2026-10-24" aria-label="Date" />
      <DateRangePicker
        startName="start"
        endName="end"
        defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
        aria-label="Stay"
      />
      <button type="reset">Reset</button>
    </form>
  ),
}

const timedRange = { from: '2026-10-24T09:00', to: '2026-10-26T18:00' }

export const WithTime: Story = {
  name: 'With Time',
  render: () => (
    <div className="flex w-72 flex-col gap-4">
      <DatePicker
        granularity="minute"
        size="sm"
        defaultValue="2026-10-24T13:30"
        aria-label="Small"
      />
      <DatePicker
        granularity="minute"
        size="md"
        defaultValue="2026-10-24T13:30"
        aria-label="Medium"
      />
      <DatePicker
        granularity="minute"
        size="lg"
        defaultValue="2026-10-24T13:30"
        aria-label="Large"
      />
      <DateRangePicker
        granularity="minute"
        size="sm"
        defaultValue={timedRange}
        aria-label="Small range"
      />
      <DateRangePicker
        granularity="minute"
        size="md"
        defaultValue={timedRange}
        aria-label="Medium range"
      />
      <DateRangePicker
        granularity="minute"
        size="lg"
        defaultValue={timedRange}
        aria-label="Large range"
      />
    </div>
  ),
}

export const WithTimeStates: Story = {
  name: 'With Time States',
  render: () => (
    <div className="grid w-[40rem] grid-cols-2 items-start gap-4">
      <DatePicker granularity="minute" aria-label="Empty" />
      <DateRangePicker granularity="minute" aria-label="Empty range" />
      <DatePicker granularity="minute" isError defaultValue="2026-10-24T13:30" aria-label="Error" />
      <DateRangePicker
        granularity="minute"
        isError
        defaultValue={timedRange}
        aria-label="Error range"
      />
      <DatePicker
        granularity="minute"
        readOnly
        defaultValue="2026-10-24T13:30"
        aria-label="Read-only"
      />
      <DateRangePicker
        granularity="minute"
        readOnly
        defaultValue={timedRange}
        aria-label="Read-only range"
      />
      <DatePicker
        granularity="minute"
        disabled
        defaultValue="2026-10-24T13:30"
        aria-label="Disabled"
      />
      <DateRangePicker
        granularity="minute"
        disabled
        defaultValue={timedRange}
        aria-label="Disabled range"
      />
      <Field label="Departure" description="Pick a weekday." required>
        <DatePicker granularity="minute" defaultValue="2026-10-24T13:30" />
      </Field>
      <Field label="Stay" error="Choose both times." required>
        <DateRangePicker granularity="minute" defaultValue={{ from: '2026-10-24T09:00' }} />
      </Field>
    </div>
  ),
}

export const WithTimeInForm: Story = {
  name: 'With Time In Form',
  render: () => (
    <form className="flex w-72 flex-col gap-4">
      <DatePicker
        granularity="minute"
        name="date"
        defaultValue="2026-10-24T13:30"
        aria-label="Departure"
      />
      <DateRangePicker
        granularity="minute"
        startName="start"
        endName="end"
        defaultValue={{ from: '2026-10-24T09:00', to: '2026-10-24T18:00' }}
        aria-label="Stay"
      />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  ),
}

function InDialogDemo({ granularity }: { granularity?: 'minute' }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <Dialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="Schedule"
        actionButton={{ label: 'Save', onClick: () => setIsOpen(false) }}
      >
        <Field label="Date">
          <DatePicker
            granularity={granularity}
            defaultValue={granularity ? '2026-10-24T13:30' : '2026-10-24'}
            today="2026-10-20"
          />
        </Field>
      </Dialog>
    </>
  )
}

export const InDialog: Story = {
  name: 'In Dialog',
  render: () => <InDialogDemo />,
}

export const WithTimeInDialog: Story = {
  name: 'With Time In Dialog',
  render: () => <InDialogDemo granularity="minute" />,
}

/** Opens the panel once on mount, so VRT and axe can see it. */
function OpenOnMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.querySelector<HTMLElement>('[aria-haspopup="dialog"]')?.click()
  }, [])
  return (
    <div ref={ref} className="w-72">
      {children}
    </div>
  )
}

const openLayout = { layout: 'padded' }

export const Open: Story = {
  parameters: openLayout,
  render: () => (
    <div className="h-96">
      <OpenOnMount>
        <DatePicker defaultValue="2026-10-24" today="2026-10-20" aria-label="Date" />
      </OpenOnMount>
    </div>
  ),
}

export const OpenRange: Story = {
  name: 'Open Range',
  parameters: openLayout,
  render: () => (
    <div className="h-96">
      <OpenOnMount>
        <DateRangePicker
          defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
          today="2026-10-20"
          aria-label="Stay"
        />
      </OpenOnMount>
    </div>
  ),
}

export const OpenWithTime: Story = {
  name: 'Open With Time',
  parameters: openLayout,
  render: () => (
    <div className="h-[28rem]">
      <OpenOnMount>
        <DatePicker
          granularity="minute"
          defaultValue="2026-10-24T13:30"
          today="2026-10-20"
          aria-label="Departure"
        />
      </OpenOnMount>
    </div>
  ),
}

export const OpenRangeWithTime: Story = {
  name: 'Open Range With Time',
  parameters: openLayout,
  render: () => (
    <div className="h-[28rem]">
      <OpenOnMount>
        <DateRangePicker
          granularity="minute"
          defaultValue={{ from: '2026-10-24T09:00' }}
          today="2026-10-20"
          aria-label="Stay"
        />
      </OpenOnMount>
    </div>
  ),
}
