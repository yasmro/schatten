import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  Clock,
  Sparkles,
  Star,
  Tag,
  X,
} from 'lucide-react'
import { Badge } from './Badge'

/**
 * Badge displays small status descriptors. Two axes drive its
 * appearance:
 *
 * - **`variant`** — semantic tone (`neutral` / `success` / `error` /
 *   `warning` / `info`). State variants reuse the same state semantic
 *   tokens as Toast and Callout.
 * - **`appearance`** — visual weight (`subtle` (default) / `solid` /
 *   `outline`). Value names align 1:1 with the underlying token
 *   suffix (`bg-{state}-subtle`, `bg-{state}`).
 *
 * Reach for `subtle` for ambient list rows and status tags, `solid` for
 * emphasis, and `outline` for the lightest, border-only style.
 *
 * Badge is intentionally state-oriented (no `destructive` variant) —
 * use `error` for "failed/invalid" tags. For destructive *actions*,
 * use `<Button variant="destructive">`. There is intentionally **no
 * brand-accent variant** — Pattern B keeps a single non-state surface
 * (`neutral`) plus the four state variants.
 */

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
        'Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.',
      control: 'select',
      options: ['neutral', 'success', 'error', 'warning', 'info'],
      table: {
        type: { summary: '"neutral" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: 'neutral' },
      },
    },
    appearance: {
      description:
        'Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.',
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      table: {
        type: { summary: '"solid" | "subtle" | "outline"' },
        defaultValue: { summary: 'subtle' },
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
      description:
        'Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Check}`).',
      // The select lists icon names for ergonomics; `mapping` resolves each
      // name back to the actual `LucideIcon` component the prop expects.
      control: 'select',
      options: [
        'ArrowLeft',
        'ArrowRight',
        'Check',
        'CircleAlert',
        'Clock',
        'Sparkles',
        'Star',
        'Tag',
        'X',
      ],
      mapping: { ArrowLeft, ArrowRight, Check, CircleAlert, Clock, Sparkles, Star, Tag, X },
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

const VARIANTS = ['neutral', 'success', 'error', 'warning', 'info'] as const
const APPEARANCES = ['solid', 'subtle', 'outline'] as const

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge',
  },
}

export const SolidTreatments: Story = {
  name: 'Solid Treatments',
  render: () => (
    <div className="flex flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const SubtleTreatments: Story = {
  name: 'Subtle Treatments',
  render: () => (
    <div className="flex flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const OutlineTreatments: Story = {
  name: 'Outline Treatments',
  render: () => (
    <div className="flex flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const FullMatrix: Story = {
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Every defined `variant` × `appearance` combination. All five variants support all three appearances.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      {APPEARANCES.map((appearance) => (
        <div key={appearance} className="flex flex-wrap items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
          {VARIANTS.map((variant) => (
            <Badge key={`${appearance}-${variant}`} variant={variant} appearance={appearance}>
              {variant}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const States: Story = {
  name: 'States',
  parameters: {
    docs: {
      description: {
        story:
          'Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" icon={Sparkles}>
          Beta
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" appearance="solid" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" appearance="solid" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" appearance="solid" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" appearance="solid" icon={Sparkles}>
          Beta
        </Badge>
      </div>
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
      <Badge variant="success" icon={Check}>
        Success
      </Badge>
      <Badge variant="error" icon={CircleAlert}>
        Error
      </Badge>
      <Badge variant="neutral" appearance="subtle" icon={Clock}>
        Pending
      </Badge>
      <Badge variant="neutral" appearance="outline" icon={Tag}>
        Label
      </Badge>
    </div>
  ),
}

export const IconPositions: Story = {
  name: 'Icon Positions',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge icon={ArrowLeft}>Start</Badge>
      <Badge icon={ArrowRight} iconPosition="end">
        End
      </Badge>
    </div>
  ),
}

export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <div className="flex items-center gap-4">
      <Badge icon={Check} size="sm" aria-label="Success" />
      <Badge icon={Check} aria-label="Success" />
      <Badge icon={Check} size="lg" aria-label="Success" />
      <Badge variant="error" icon={X} aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon={Star} aria-label="Starred" />
    </div>
  ),
}
