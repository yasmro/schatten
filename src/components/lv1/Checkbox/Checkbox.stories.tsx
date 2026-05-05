import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/lv1/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the checkbox.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      description: 'Label text displayed next to the checkbox. Automatically associates via id.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    checked: {
      description: 'Controlled checked state. Supports boolean or "indeterminate".',
      control: 'select',
      options: [true, false, 'indeterminate'],
      table: {
        type: { summary: 'boolean | "indeterminate"' },
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
      description: 'Displays the checkbox in an error state with error border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the checkbox and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Marks the checkbox as required for form validation.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false,
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
  ),
}

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked="indeterminate" />
    </div>
  ),
}

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
  ),
}

export const Indeterminate: Story = {
  name: 'Indeterminate',
  render: function Render() {
    const items = ['Apple', 'Banana', 'Cherry']
    const [selected, setSelected] = useState<string[]>(['Apple'])

    const allChecked = selected.length === items.length
    const someChecked = selected.length > 0 && !allChecked

    return (
      <div className="flex flex-col gap-2">
        <Checkbox
          label="Select all"
          checked={allChecked ? true : someChecked ? 'indeterminate' : false}
          onCheckedChange={(checked) => {
            setSelected(checked ? [...items] : [])
          }}
        />
        <div className="flex flex-col gap-2 ml-6">
          {items.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={selected.includes(item)}
              onCheckedChange={(checked) => {
                setSelected((prev) => (checked ? [...prev, item] : prev.filter((i) => i !== item)))
              }}
            />
          ))}
        </div>
      </div>
    )
  },
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
  ),
}
