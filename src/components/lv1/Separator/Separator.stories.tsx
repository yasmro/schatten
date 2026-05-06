import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './Separator'

const meta: Meta<typeof Separator> = {
  title: 'Components/lv1/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientation of the separator.',
      control: 'select',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    decorative: {
      description:
        'When true, the separator is purely visual and hidden from assistive technologies. When false, it is exposed as a semantic divider with role="separator".',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Playground: Story = {
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  render: (args) => (
    <div className="w-64">
      <p className="text-sm">Above</p>
      <Separator {...args} className={args.orientation === 'vertical' ? 'h-6' : ''} />
      <p className="text-sm">Below</p>
    </div>
  ),
}

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => (
    <div className="w-72 space-y-3">
      <div>
        <h4 className="text-sm font-medium">Schatten UI</h4>
        <p className="text-sm text-foreground-muted">A design system for the web.</p>
      </div>
      <Separator />
      <div className="flex gap-4 text-sm text-foreground-muted">
        <span>Docs</span>
        <span>Components</span>
        <span>Themes</span>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  name: 'Vertical',
  render: () => (
    <div className="flex h-6 items-center gap-3 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
      <Separator orientation="vertical" />
      <span>Themes</span>
    </div>
  ),
}
