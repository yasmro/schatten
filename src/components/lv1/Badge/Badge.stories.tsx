import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

/**
 * Badge displays small status descriptors. Two axes drive its
 * appearance:
 *
 * - **`variant`** — semantic state (`default` / `success` / `error` /
 *   `warning` / `info`). Reuses the same state semantic tokens as
 *   Toast and Callout.
 * - **`treatment`** — visual fill (`solid` / `subtle` / `outline`).
 *   Pick `solid` for emphasis, `subtle` for soft tinted tags, and
 *   `outline` for the lightest, most ambient style.
 *
 * Badge is intentionally state-oriented (no `destructive` variant) —
 * use `error` for "failed/invalid" tags. For destructive *actions*,
 * use `<Button variant="destructive">`.
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
        'Semantic state of the badge. State variants share the same state semantic tokens as Toast and Callout.',
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      table: {
        type: { summary: '"default" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: 'default' },
      },
    },
    treatment: {
      description:
        'Visual treatment — `solid` for filled emphasis, `subtle` for soft tinted background, `outline` for outline-only.',
      control: 'select',
      options: ['solid', 'subtle', 'outline'],
      table: {
        type: { summary: '"solid" | "subtle" | "outline"' },
        defaultValue: { summary: 'solid' },
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

const VARIANTS = ['default', 'success', 'error', 'warning', 'info'] as const
const TREATMENTS = ['solid', 'subtle', 'outline'] as const

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'default',
    treatment: 'solid',
    size: 'md',
    children: 'Badge',
  },
}

export const SolidTreatments: Story = {
  name: 'Solid Treatments',
  render: () => (
    <div className="flex flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant} treatment="solid">
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
        <Badge key={variant} variant={variant} treatment="subtle">
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
        <Badge key={variant} variant={variant} treatment="outline">
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
          'Every combination of `variant` × `treatment`. Use this view to pick a Badge style that matches the prominence and tone of the surrounding UI.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      {TREATMENTS.map((treatment) => (
        <div key={treatment} className="flex flex-wrap items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">{treatment}</span>
          {VARIANTS.map((variant) => (
            <Badge key={`${treatment}-${variant}`} variant={variant} treatment={treatment}>
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
          'Typical status-tag use cases. Pick `treatment="subtle"` for ambient list rows, `solid` for prominent emphasis.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" icon="X">
          Failed
        </Badge>
        <Badge variant="info" icon="Sparkles">
          Beta
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" treatment="subtle" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" treatment="subtle" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" treatment="subtle" icon="X">
          Failed
        </Badge>
        <Badge variant="info" treatment="subtle" icon="Sparkles">
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
      <Badge variant="success" icon="Check">
        Success
      </Badge>
      <Badge variant="error" icon="AlertCircle">
        Error
      </Badge>
      <Badge variant="default" treatment="subtle" icon="Clock">
        Pending
      </Badge>
      <Badge variant="default" treatment="outline" icon="Tag">
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
      <Badge variant="error" icon="X" aria-label="Error" />
      <Badge variant="default" treatment="outline" icon="Star" aria-label="Starred" />
    </div>
  ),
}
