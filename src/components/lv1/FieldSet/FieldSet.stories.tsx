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
  },
}

export default meta
type Story = StoryObj<typeof FieldSet>

export const Playground: Story = {
  name: 'Playground',
  args: {
    legend: 'Personal Information',
    description: 'Please enter your personal details.',
  },
  render: (args) => (
    <FieldSet {...args}>
      <div className="flex flex-col gap-4 w-80">
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
      </div>
    </FieldSet>
  ),
}

export const DateRange: Story = {
  name: 'Date Range',
  render: () => (
    <FieldSet legend="Event Period" description="Select the start and end dates for your event.">
      <div className="flex gap-4">
        <Field label="Start Date">
          <Input type="date" className="w-40" />
        </Field>
        <Field label="End Date">
          <Input type="date" className="w-40" />
        </Field>
      </div>
    </FieldSet>
  ),
}

export const Address: Story = {
  name: 'Address',
  render: () => (
    <FieldSet legend="Shipping Address" description="Enter your delivery address.">
      <div className="flex flex-col gap-4 w-96">
        <Field label="Street Address" required>
          <Input placeholder="123 Main St" />
        </Field>
        <div className="flex gap-4">
          <Field label="City" required>
            <Input placeholder="Tokyo" />
          </Field>
          <Field label="Postal Code" required>
            <Input placeholder="100-0001" className="w-32" />
          </Field>
        </div>
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
      </div>
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
      >
        <div className="flex gap-4">
          <Field label="Start Date">
            <Input type="date" defaultValue="2024-12-31" className="w-40" />
          </Field>
          <Field label="End Date">
            <Input type="date" defaultValue="2024-01-01" className="w-40" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet legend="Password Confirmation" error="Passwords do not match.">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Password">
            <Input type="password" defaultValue="password123" />
          </Field>
          <Field label="Confirm Password">
            <Input type="password" defaultValue="password456" />
          </Field>
        </div>
      </FieldSet>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <FieldSet legend="Account Settings" description="These settings are currently locked." disabled>
      <div className="flex flex-col gap-4 w-80">
        <Field label="Username">
          <Input defaultValue="johndoe" />
        </Field>
        <Field label="Email">
          <Input type="email" defaultValue="john@example.com" />
        </Field>
      </div>
    </FieldSet>
  ),
}

export const NestedFields: Story = {
  name: 'Nested Fields',
  render: () => (
    <div className="flex flex-col gap-8">
      <FieldSet legend="Contact Information">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Email" required description="We'll use this for account recovery.">
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Phone" description="Optional contact number.">
            <Input type="tel" placeholder="+81 90-1234-5678" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet legend="Billing Details" description="Enter your payment information.">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Cardholder Name" required>
            <Input placeholder="John Doe" />
          </Field>
          <Field label="Card Number" required>
            <Input placeholder="1234 5678 9012 3456" />
          </Field>
          <div className="flex gap-4">
            <Field label="Expiry" required>
              <Input placeholder="MM/YY" className="w-24" />
            </Field>
            <Field label="CVV" required>
              <Input placeholder="123" className="w-20" />
            </Field>
          </div>
        </div>
      </FieldSet>
    </div>
  ),
}
