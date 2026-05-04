import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from '../Field/Field'
import { Input } from '../Input/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select/Select'
import { FieldSet } from './FieldSet'

const meta: Meta<typeof FieldSet> = {
  title: 'Components/lv1/FieldSet',
  component: FieldSet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    legend: {
      description: 'Legend text for the fieldset.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    description: {
      description: 'Description text displayed below the legend.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    error: {
      description: 'Error message to display (group-level).',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    isError: {
      description: 'Explicitly set error state. If not provided, derived from error prop presence.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Disable all child fields. Uses native fieldset disabled behavior.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    direction: {
      description: 'Flex direction for children layout.',
      control: 'select',
      options: ['row', 'column'],
      table: {
        type: { summary: '"row" | "column"' },
        defaultValue: { summary: '"column"' },
      },
    },
    wrap: {
      description: 'Enable flex wrap for children.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    gap: {
      description: 'Gap between children (Tailwind spacing scale).',
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
      table: {
        type: { summary: '0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12' },
        defaultValue: { summary: '4' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FieldSet>

export const Playground: Story = {
  name: 'Playground',
  args: {
    legend: 'Personal Information',
    description: 'Please enter your personal details.',
    direction: 'column',
    gap: 4,
  },
  render: (args) => (
    <FieldSet {...args} className="w-80">
      <Field label="First Name">
        <Input placeholder="John" />
      </Field>
      <Field label="Last Name">
        <Input placeholder="Doe" />
      </Field>
    </FieldSet>
  ),
}

export const DateRange: Story = {
  name: 'Date Range',
  render: () => (
    <FieldSet
      legend="Event Period"
      description="Select the start and end dates for your event."
      direction="row"
      gap={4}
    >
      <Field label="Start Date">
        <Input type="date" className="w-40" />
      </Field>
      <Field label="End Date">
        <Input type="date" className="w-40" />
      </Field>
    </FieldSet>
  ),
}

export const Address: Story = {
  name: 'Address',
  render: () => (
    <FieldSet legend="Shipping Address" description="Enter your delivery address." className="w-96">
      <Field label="Street Address" required>
        <Input placeholder="123 Main St" />
      </Field>
      <FieldSet direction="row" gap={4} legend="">
        <Field label="City" required flexGrow={1}>
          <Input placeholder="Tokyo" />
        </Field>
        <Field label="Postal Code" required flexShrink={0}>
          <Input placeholder="100-0001" className="w-32" />
        </Field>
      </FieldSet>
      <Field label="Country">
        <Select defaultValue="jp">
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </FieldSet>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-8">
      <FieldSet
        legend="Date Range"
        error="End date must be after start date."
        description="Select the start and end dates."
        direction="row"
        gap={4}
      >
        <Field label="Start Date">
          <Input type="date" defaultValue="2024-12-31" className="w-40" />
        </Field>
        <Field label="End Date">
          <Input type="date" defaultValue="2024-01-01" className="w-40" />
        </Field>
      </FieldSet>

      <FieldSet legend="Password Confirmation" error="Passwords do not match." className="w-80">
        <Field label="Password">
          <Input type="password" defaultValue="password123" />
        </Field>
        <Field label="Confirm Password">
          <Input type="password" defaultValue="password456" />
        </Field>
      </FieldSet>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <FieldSet
      legend="Account Settings"
      description="These settings are currently locked."
      disabled
      className="w-80"
    >
      <Field label="Username">
        <Input defaultValue="johndoe" />
      </Field>
      <Field label="Email">
        <Input type="email" defaultValue="john@example.com" />
      </Field>
    </FieldSet>
  ),
}

export const NestedFields: Story = {
  name: 'Nested Fields',
  render: () => (
    <div className="flex flex-col gap-8">
      <FieldSet legend="Contact Information" className="w-80">
        <Field label="Email" required description="We'll use this for account recovery.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Phone" description="Optional contact number.">
          <Input type="tel" placeholder="+81 90-1234-5678" />
        </Field>
      </FieldSet>

      <FieldSet
        legend="Billing Details"
        description="Enter your payment information."
        className="w-80"
      >
        <Field label="Cardholder Name" required>
          <Input placeholder="John Doe" />
        </Field>
        <Field label="Card Number" required>
          <Input placeholder="1234 5678 9012 3456" />
        </Field>
        <FieldSet direction="row" gap={4} legend="">
          <Field label="Expiry" required>
            <Input placeholder="MM/YY" className="w-24" />
          </Field>
          <Field label="CVV" required>
            <Input placeholder="123" className="w-20" />
          </Field>
        </FieldSet>
      </FieldSet>
    </div>
  ),
}

export const ErrorPropagation: Story = {
  name: 'Error Propagation',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          When FieldSet has isError, all child Inputs show error styles automatically.
        </p>
        <FieldSet
          legend="Date Range"
          isError
          error="End date must be after start date."
          direction="row"
          gap={4}
        >
          <Field label="Start Date">
            <Input type="date" defaultValue="2024-12-31" className="w-40" />
          </Field>
          <Field label="End Date">
            <Input type="date" defaultValue="2024-01-01" className="w-40" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Individual Field can override FieldSet&apos;s isError.
        </p>
        <FieldSet legend="Mixed States" isError className="w-80">
          <Field label="Has Error (inherited)">
            <Input placeholder="Error style from FieldSet" />
          </Field>
          <Field label="No Error (overridden)" isError={false}>
            <Input placeholder="Explicitly set isError=false" />
          </Field>
        </FieldSet>
      </div>
    </div>
  ),
}

export const NestedFieldSets: Story = {
  name: 'Nested FieldSets',
  render: () => (
    <FieldSet legend="Checkout Form" description="Complete your order.">
      <FieldSet legend="Shipping Address" className="w-80">
        <Field label="Street" required>
          <Input placeholder="123 Main St" />
        </Field>
        <Field label="City" required>
          <Input placeholder="Tokyo" />
        </Field>
      </FieldSet>

      <FieldSet
        legend="Billing Address"
        isError
        error="Please complete billing address."
        className="w-80"
      >
        <Field label="Street" required>
          <Input placeholder="456 Oak Ave" />
        </Field>
        <Field label="City" required>
          <Input placeholder="Osaka" />
        </Field>
      </FieldSet>
    </FieldSet>
  ),
}

export const LayoutVariants: Story = {
  name: 'Layout Variants',
  render: () => (
    <div className="flex flex-col gap-8">
      <FieldSet legend="Row Direction" direction="row" gap={4}>
        <Field label="First" flexGrow={1}>
          <Input placeholder="Grows to fill" />
        </Field>
        <Field label="Second" flexShrink={0}>
          <Input placeholder="Fixed" className="w-24" />
        </Field>
      </FieldSet>

      <FieldSet legend="Row with Wrap" direction="row" wrap gap={4} className="w-80">
        <Field label="Field 1">
          <Input placeholder="Input" className="w-32" />
        </Field>
        <Field label="Field 2">
          <Input placeholder="Input" className="w-32" />
        </Field>
        <Field label="Field 3">
          <Input placeholder="Input" className="w-32" />
        </Field>
      </FieldSet>

      <FieldSet legend="Custom Gap (gap=2)" gap={2} className="w-80">
        <Field label="Tight spacing">
          <Input placeholder="gap-2" />
        </Field>
        <Field label="Between fields">
          <Input placeholder="8px gap" />
        </Field>
      </FieldSet>
    </div>
  ),
}
