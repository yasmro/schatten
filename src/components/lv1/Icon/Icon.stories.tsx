import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  Copy,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  Info,
  type LucideIcon,
  Minus,
  Pencil,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  TriangleAlert,
  Upload,
  User,
  X,
} from 'lucide-react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/lv1/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description:
        'Lucide icon component to render. Import it from `lucide-react` and pass it directly.',
      control: false,
      table: {
        type: { summary: 'LucideIcon' },
      },
    },
    size: {
      description: 'Size of the icon.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    'aria-label': {
      description:
        'Accessible label. When provided, the icon gets role="img"; when omitted it is decorative (aria-hidden="true").',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    icon: Search,
    size: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Playground: Story = {}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-end gap-4">
      <Icon icon={Search} size="sm" />
      <Icon icon={Search} size="md" />
      <Icon icon={Search} size="lg" />
    </div>
  ),
}

const GALLERY_ICONS: { name: string; icon: LucideIcon }[] = [
  { name: 'ArrowRight', icon: ArrowRight },
  { name: 'ArrowLeft', icon: ArrowLeft },
  { name: 'ArrowUp', icon: ArrowUp },
  { name: 'ArrowDown', icon: ArrowDown },
  { name: 'ChevronRight', icon: ChevronRight },
  { name: 'ChevronLeft', icon: ChevronLeft },
  { name: 'ChevronDown', icon: ChevronDown },
  { name: 'ChevronUp', icon: ChevronUp },
  { name: 'Check', icon: Check },
  { name: 'X', icon: X },
  { name: 'Plus', icon: Plus },
  { name: 'Minus', icon: Minus },
  { name: 'Search', icon: Search },
  { name: 'Settings', icon: Settings },
  { name: 'Trash2', icon: Trash2 },
  { name: 'Pencil', icon: Pencil },
  { name: 'Copy', icon: Copy },
  { name: 'Eye', icon: Eye },
  { name: 'EyeOff', icon: EyeOff },
  { name: 'Info', icon: Info },
  { name: 'CircleAlert', icon: CircleAlert },
  { name: 'CircleCheck', icon: CircleCheck },
  { name: 'TriangleAlert', icon: TriangleAlert },
  { name: 'Download', icon: Download },
  { name: 'Upload', icon: Upload },
  { name: 'ExternalLink', icon: ExternalLink },
  { name: 'Bell', icon: Bell },
  { name: 'Calendar', icon: Calendar },
  { name: 'User', icon: User },
  { name: 'Star', icon: Star },
]

export const Gallery: Story = {
  name: 'Gallery',
  parameters: {
    docs: {
      description: {
        story:
          'A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist.',
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-6 gap-6">
      {GALLERY_ICONS.map(({ name, icon }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon icon={icon} size="lg" className="text-foreground" />
          <span className="text-xs text-foreground-muted">{name}</span>
        </div>
      ))}
    </div>
  ),
}
