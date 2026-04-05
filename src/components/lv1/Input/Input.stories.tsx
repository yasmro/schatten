import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/lv1/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size of the input.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    isError: {
      description: 'Displays the input in an error state with destructive border and ring.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    textLeft: {
      description: 'Text displayed before the input. Takes priority over iconLeft.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    textRight: {
      description: 'Text displayed after the input. Takes priority over iconRight.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    iconLeft: {
      description: 'Lucide icon name rendered before the input. Ignored when textLeft is set.',
      control: 'text',
      table: {
        type: { summary: 'IconName' },
      },
    },
    iconRight: {
      description: 'Lucide icon name rendered after the input. Ignored when textRight is set.',
      control: 'text',
      table: {
        type: { summary: 'IconName' },
      },
    },
    placeholder: {
      description: 'Placeholder text displayed when the input is empty.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Disables the input and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      description: 'HTML input type.',
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'search',
        'tel',
        'url',
        'date',
        'datetime-local',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const Types: Story = {
  name: 'Types',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="search" placeholder="Search" />
      <Input type="date" />
      <Input type="datetime-local" />
    </div>
  ),
}

export const WithText: Story = {
  name: 'With Text',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input iconLeft="Search" placeholder="Search..." />
      <Input iconLeft="Mail" placeholder="Email" />
      <Input iconRight="Eye" type="password" placeholder="Password" />
    </div>
  ),
}

export const TextOverridesIcon: Story = {
  name: 'Text Priority over Icon',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft="Globe" placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight="Mail" placeholder="textRight wins over iconRight" />
    </div>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft="CircleAlert" placeholder="With icon" />
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
  ),
}
