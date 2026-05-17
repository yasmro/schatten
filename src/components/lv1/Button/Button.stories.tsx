import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock,
  Download,
  ExternalLink,
  Eye,
  Globe,
  Lock,
  Mail,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Tag,
  Trash2,
  X,
} from 'lucide-react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/lv1/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the button.',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'inverted', 'destructive', 'link'],
      table: {
        type: {
          summary: '"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the button.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      description:
        'Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Search}`).',
      // The select lists icon names for ergonomics; `mapping` resolves each
      // name back to the actual `LucideIcon` component the prop expects.
      control: 'select',
      options: [
        'ArrowLeft',
        'ArrowRight',
        'Check',
        'ChevronLeft',
        'ChevronRight',
        'CircleAlert',
        'Clock',
        'Download',
        'ExternalLink',
        'Eye',
        'Globe',
        'Lock',
        'Mail',
        'Plus',
        'Search',
        'Send',
        'Sparkles',
        'Star',
        'Tag',
        'Trash2',
        'X',
      ],
      mapping: {
        ArrowLeft,
        ArrowRight,
        Check,
        ChevronLeft,
        ChevronRight,
        CircleAlert,
        Clock,
        Download,
        ExternalLink,
        Eye,
        Globe,
        Lock,
        Mail,
        Plus,
        Search,
        Send,
        Sparkles,
        Star,
        Tag,
        Trash2,
        X,
      },
      table: {
        type: { summary: 'LucideIcon' },
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
    asChild: {
      description: 'Delegates props to the child element via Radix Slot.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      description: 'Shows a loading spinner and disables the button.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the button and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'Label text or content inside the button.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* `inverted` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon={X} aria-label="Close" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon={Plus} aria-label="Add" />
    </div>
  ),
}

export const Icons: Story = {
  name: 'Icons',
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon={Search}>Search</Button>
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Plus} aria-label="Add" />
      <Button variant="destructive" icon={Trash2}>
        Delete
      </Button>
    </div>
  ),
}

export const IconPositions: Story = {
  name: 'Icon Positions',
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon={ChevronLeft}>Back</Button>
      <Button icon={ChevronRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Download} size="sm">
        Download
      </Button>
      <Button icon={Send} size="lg" iconPosition="end">
        Send
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  name: 'Loading',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
  ),
}

export const LinkVariant: Story = {
  name: 'Link',
  render: () => (
    <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon={ExternalLink} iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon={Trash2}>
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
  ),
}

export const InvertedOnSaturatedSurfaces: Story = {
  name: 'Inverted on saturated surfaces',
  render: () => (
    <div className="flex flex-col gap-3">
      {[
        { label: 'error', cls: 'bg-error text-error-foreground' },
        { label: 'success', cls: 'bg-success text-success-foreground' },
        { label: 'warning', cls: 'bg-warning text-warning-foreground' },
        { label: 'info', cls: 'bg-info text-info-foreground' },
        { label: 'destructive', cls: 'bg-destructive text-destructive-foreground' },
        { label: 'solid (brand)', cls: 'bg-solid text-solid-foreground' },
      ].map((s) => (
        <div
          key={s.label}
          className={`flex items-center justify-between gap-4 px-4 py-3 rounded ${s.cls}`}
        >
          <span className="text-sm font-medium">On {s.label} surface</span>
          <div className="flex gap-2">
            <Button variant="inverted" size="sm">
              Enabled
            </Button>
            <Button variant="inverted" size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
}
