import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '../Checkbox/Checkbox'
import { Input } from '../Input/Input'
import { Radio, RadioGroup } from '../Radio/Radio'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select/Select'
import { Switch } from '../Switch/Switch'
import { Textarea } from '../Textarea/Textarea'
import { Field } from './Field'

const meta: Meta<typeof Field> = {
  title: 'Components/lv1/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label text for the field.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    description: {
      description: 'Description text displayed above the input.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    error: {
      description: 'Error message to display.',
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
    required: {
      description: 'Show required indicator (*).',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disable the field. Propagates to child components via context.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Playground: Story = {
  name: 'Playground',
  args: {
    label: 'Email',
    description: "We'll never share your email.",
  },
  render: (args) => (
    <Field {...args}>
      <Input placeholder="you@example.com" />
    </Field>
  ),
}

export const WithInput: Story = {
  name: 'With Input',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="Choose a unique username.">
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
}

export const WithTextarea: Story = {
  name: 'With Textarea',
  render: () => (
    <div className="w-80">
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Write something..." />
      </Field>
    </div>
  ),
}

export const WithSelect: Story = {
  name: 'With Select',
  render: () => (
    <div className="w-80">
      <Field label="Country" description="Select your country.">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  ),
}

export const WithCheckbox: Story = {
  name: 'With Checkbox',
  render: () => (
    <div className="w-80">
      <Field label="Terms and Conditions" description="Please read and accept." required>
        <Checkbox />
      </Field>
    </div>
  ),
}

export const WithSwitch: Story = {
  name: 'With Switch',
  render: () => (
    <div className="w-80">
      <Field label="Notifications" description="Enable push notifications.">
        <Switch />
      </Field>
    </div>
  ),
}

export const WithRadioGroup: Story = {
  name: 'With RadioGroup',
  render: () => (
    <div className="w-80">
      <Field label="Plan" description="Choose your subscription plan.">
        <RadioGroup defaultValue="free">
          <Radio value="free" label="Free" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </RadioGroup>
      </Field>
    </div>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Email" error="Please enter a valid email address.">
        <Input type="email" defaultValue="invalid-email" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters." required>
        <Input type="password" defaultValue="123" />
      </Field>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Username" description="This field is disabled." disabled>
        <Input placeholder="johndoe" />
      </Field>
      <Field label="Notifications" disabled>
        <Switch />
      </Field>
    </div>
  ),
}

export const Required: Story = {
  name: 'Required',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Field label="Full Name" required>
        <Input placeholder="John Doe" />
      </Field>
      <Field label="Email" required description="Required field.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
}

export const LabelUsagePatterns: Story = {
  name: 'Label Usage Patterns',
  render: () => (
    <div className="flex flex-col gap-8 w-96">
      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Checkbox / Switch: Use Field.label only
        </h3>
        <div className="flex flex-col gap-4">
          <Field label="Enable notifications" description="You will receive email updates.">
            <Switch />
          </Field>
          <Field label="I agree to the terms" required>
            <Checkbox />
          </Field>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          RadioGroup: Field.label for group, Radio.label for options
        </h3>
        <Field label="Subscription plan" description="Choose your plan.">
          <RadioGroup defaultValue="free">
            <Radio value="free" label="Free - Basic features" />
            <Radio value="pro" label="Pro - Advanced features" />
            <Radio value="enterprise" label="Enterprise - Custom solutions" />
          </RadioGroup>
        </Field>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground-muted mb-3">
          Standalone (without Field): Use component label
        </h3>
        <div className="flex flex-col gap-2">
          <Checkbox label="Remember me" />
          <Switch label="Dark mode" />
        </div>
      </div>
    </div>
  ),
}
