import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/lv1/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description:
        'Visual style of the badge. State variants (`success` / `warning` / `info`) share the same filled treatment as `destructive` and reference the corresponding state semantic tokens.',
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'success', 'warning', 'info', 'outline'],
      table: {
        type: {
          summary:
            '"primary" | "secondary" | "destructive" | "success" | "warning" | "info" | "outline"',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the badge.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      description: 'Lucide icon name in PascalCase (e.g. "Check", "AlertCircle").',
      control: 'text',
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: '-' },
      },
    },
    iconPosition: {
      description: 'Position of the icon relative to the label text.',
      control: 'select',
      options: ['start', 'end'],
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: 'start' },
      },
    },
    children: {
      description: 'Content displayed inside the badge.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Badge',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const States: Story = {
  name: 'States',
  parameters: {
    docs: {
      description: {
        story:
          'State variants are intended for status tags such as "Active", "Pending", or "Failed". They share the four-token state semantic shape (`error` / `success` / `warning` / `info`) used by Toast and Callout. `destructive` remains the action-oriented red and is also shown here for comparison.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon="Check">
        Active
      </Badge>
      <Badge variant="warning" icon="Clock">
        Pending
      </Badge>
      <Badge variant="destructive" icon="X">
        Failed
      </Badge>
      <Badge variant="info" icon="Sparkles">
        Beta
      </Badge>
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const Icons: Story = {
  name: 'Icons',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge icon="Check">Success</Badge>
      <Badge variant="destructive" icon="AlertCircle">
        Error
      </Badge>
      <Badge variant="secondary" icon="Clock">
        Pending
      </Badge>
      <Badge variant="outline" icon="Tag">
        Label
      </Badge>
    </div>
  ),
}

export const IconPositions: Story = {
  name: 'Icon Positions',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
  ),
}

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="destructive" icon="X" aria-label="Error" />
      <Badge variant="outline" icon="Star" aria-label="Starred" />
    </div>
  ),
}
