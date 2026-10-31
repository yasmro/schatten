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
    value: {
      description: 'The selected date as `YYYY-MM-DD` (controlled). `""` is no selection.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    defaultValue: {
      description: 'The initially selected date as `YYYY-MM-DD` (uncontrolled).',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    onValueChange: {
      description: 'Fired when the date changes. `""` while the input holds no valid date.',
      table: { type: { summary: '(value: string) => void' } },
    },
    name: {
      description: 'Submits the selected date under this name.',
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
      description: 'The earliest selectable date. Applies to the calendar and to typed dates.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    max: {
      description: 'The latest selectable date. Applies to the calendar and to typed dates.',
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
      table: { type: { summary: 'string' }, defaultValue: { summary: 'YYYY-MM-DD' } },
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

function InDialogDemo() {
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
          <DatePicker defaultValue="2026-10-24" today="2026-10-20" />
        </Field>
      </Dialog>
    </>
  )
}

export const InDialog: Story = {
  name: 'In Dialog',
  render: () => <InDialogDemo />,
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
