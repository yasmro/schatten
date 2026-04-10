import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/lv1/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the switch.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      description: 'Label text displayed next to the switch. Automatically associates via id.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    checked: {
      description: 'Controlled checked state.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultChecked: {
      description: 'Default checked state for uncontrolled usage.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isError: {
      description: 'Displays the switch in an error state with destructive border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the switch and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Marks the switch as required for form validation.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false,
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
  ),
}

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex items-center gap-4">
      <Switch />
      <Switch defaultChecked />
    </div>
  ),
}

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  ),
}
