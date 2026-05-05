import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/lv1/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the radio button.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      description: 'Label text displayed next to the radio. Automatically associates via id.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    value: {
      description: 'The value of the radio item.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    isError: {
      description: 'Displays the radio in an error state with error border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the radio and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Option A',
    value: 'a',
  },
  decorators: [
    (Story) => (
      <RadioGroup defaultValue="a">
        <Story />
      </RadioGroup>
    ),
  ],
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="sm">
        <Radio size="sm" value="sm" label="Small" />
      </RadioGroup>
      <RadioGroup defaultValue="md">
        <Radio size="md" value="md" label="Medium" />
      </RadioGroup>
      <RadioGroup defaultValue="lg">
        <Radio size="lg" value="lg" label="Large" />
      </RadioGroup>
    </div>
  ),
}

export const WithLabels: Story = {
  name: 'With Labels',
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <Radio value="default" label="Default" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="compact" label="Compact" />
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => (
    <RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <RadioGroup defaultValue="error-selected" isError>
      <Radio value="error-unselected" label="Unselected error" />
      <Radio value="error-selected" label="Selected error" />
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <RadioGroup defaultValue="disabled-selected">
      <Radio value="disabled-unselected" label="Disabled unselected" disabled />
      <Radio value="disabled-selected" label="Disabled selected" disabled />
    </RadioGroup>
  ),
}
