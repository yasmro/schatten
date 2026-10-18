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
      description: 'Displays the input in an error state with error border and ring.',
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
      description:
        'Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).',
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
      },
    },
    iconRight: {
      description:
        'Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.',
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
    readOnly: {
      description:
        'Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.',
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
      {/* date/datetime-local don't support placeholder, and value-only inputs
       * have no accessible name — these stories carry aria-label so the axe
       * `label` rule passes without changing a pixel (#345). */}
      <Input type="date" aria-label="Date" />
      <Input type="datetime-local" aria-label="Date and time" />
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
      <Input iconLeft={Search} placeholder="Search..." />
      <Input iconLeft={Mail} placeholder="Email" />
      <Input iconRight={Eye} type="password" placeholder="Password" />
    </div>
  ),
}

export const TextOverridesIcon: Story = {
  name: 'Text Priority over Icon',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft={Globe} placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight={Mail} placeholder="textRight wins over iconRight" />
    </div>
  ),
}

export const ErrorState: Story = {
  name: 'Error',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" aria-label="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" aria-label="Disabled with value" />
      {/* Adornments must recede with the block — an icon / text affix that
          kept its resting muted tier would read stronger than the disabled
          value it decorates. */}
      <Input
        disabled
        iconLeft={Search}
        iconRight={Eye}
        defaultValue="Disabled with icons"
        aria-label="Disabled with icons"
      />
      <Input
        disabled
        textLeft="https://"
        textRight=".com"
        defaultValue="Disabled with text"
        aria-label="Disabled with text affixes"
      />
    </div>
  ),
}

export const DisabledWithError: Story = {
  name: 'Disabled with error',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" aria-label="Disabled with error" />
    </div>
  ),
}

export const ReadOnly: Story = {
  name: 'ReadOnly',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" aria-label="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" aria-label="User ID" />
    </div>
  ),
}

export const DisabledVsReadOnly: Story = {
  name: 'Disabled vs ReadOnly',
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" aria-label="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" aria-label="Disabled value" />
    </div>
  ),
}

export const ReadOnlyWithError: Story = {
  name: 'ReadOnly with error',
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" aria-label="ReadOnly with error" />
    </div>
  ),
}
