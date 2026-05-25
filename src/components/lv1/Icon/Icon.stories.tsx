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

const COLOR_OPTIONS = [
  'inherit',
  'default',
  'muted',
  'subtle',
  'vermillion',
  'indigo',
  'error',
  'success',
  'warning',
  'info',
  'inverted',
  'inverted-muted',
  'inverted-subtle',
] as const

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
    color: {
      description: 'Color of the icon. Vocabulary mirrors `Text`’s `color`.',
      control: 'select',
      options: COLOR_OPTIONS,
      table: {
        type: { summary: COLOR_OPTIONS.map((c) => `"${c}"`).join(' | ') },
        defaultValue: { summary: 'inherit' },
      },
    },
    'aria-label': {
      description:
        'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. ' +
        'Its presence is what toggles the icon between decorative and meaningful: ' +
        'omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. ' +
        'Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none — icon is decorative (aria-hidden="true")' },
      },
    },
  },
  args: {
    icon: Search,
    size: 'md',
    color: 'inherit',
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

export const Colors: Story = {
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story:
          'The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {(['default', 'muted', 'subtle', 'vermillion', 'indigo'] as const).map((color) => (
          <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={Star} size="lg" color={color} />
            <span className="text-xs text-foreground-muted">{color}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {(['error', 'success', 'warning', 'info'] as const).map((color) => (
          <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={CircleAlert} size="lg" color={color} />
            <span className="text-xs text-foreground-muted">{color}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4">
        {(['inverted', 'inverted-muted', 'inverted-subtle'] as const).map((color) => (
          <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={Star} size="lg" color={color} />
            <span className="text-xs text-inverted-foreground-muted">{color}</span>
          </div>
        ))}
      </div>
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
          <Icon icon={icon} size="lg" color="default" />
          <span className="text-xs text-foreground-muted">{name}</span>
        </div>
      ))}
    </div>
  ),
}
