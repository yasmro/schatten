import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

/**
 * Text renders semantic typography (`body` / `label` / `heading`) at
 * predefined sizes, with color, alignment, and truncation as
 * orthogonal axes.
 *
 * ## `color` is grouped into three parallel hierarchies
 *
 * - **Foreground** (most → least prominent): `default` / `muted` /
 *   `subtle` — primary, secondary/helper, and tertiary text. Reach for
 *   these for ordinary on-page typography.
 * - **State**: `error` / `success` / `warning` / `info` — inline
 *   status text such as form errors, success notes, or beta callouts.
 *   References the same state semantic tokens as Toast / Callout /
 *   Badge.
 * - **Inverted** (most → least prominent): `inverted` / `inverted-muted`
 *   / `inverted-subtle` — for text placed on saturated surfaces (a
 *   solid Toast or Callout, a primary-colored fill, …). Mirrors the
 *   foreground hierarchy.
 *
 * Plus `accent` (one-off emphasis), and `inherit` (delegates to the
 * parent's color).
 *
 * ## Element selection
 *
 * `as` controls the rendered tag. By default `body` and `heading`
 * render `<p>`, and `label` renders `<label>`. Pass `asChild` (Radix
 * Slot) to merge Text's classes onto an existing child element.
 */

const meta: Meta<typeof Text> = {
  title: 'Components/lv1/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Semantic role of the text.',
      control: 'select',
      options: ['body', 'label', 'heading'],
      table: {
        type: { summary: '"body" | "label" | "heading"' },
        defaultValue: { summary: 'body' },
      },
    },
    size: {
      description: 'Size of the text. Available sizes depend on the variant.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      description:
        'Color of the text.\n\n- `default` / `muted` / `subtle` form the primary → tertiary foreground hierarchy (most → least prominent).\n- State colors (`error` / `success` / `warning` / `info`) reference the corresponding state semantic tokens — use them for inline status text such as form errors or success notes.\n- `inverted` / `inverted-muted` / `inverted-subtle` mirror the foreground hierarchy on saturated surfaces (e.g. text inside a solid Toast or Callout, or on a primary-colored fill).',
      control: 'select',
      options: [
        'default',
        'muted',
        'subtle',
        'accent',
        'error',
        'success',
        'warning',
        'info',
        'inverted',
        'inverted-muted',
        'inverted-subtle',
        'inherit',
      ],
      table: {
        type: {
          summary:
            '"default" | "muted" | "subtle" | "accent" | "error" | "success" | "warning" | "info" | "inverted" | "inverted-muted" | "inverted-subtle" | "inherit"',
        },
        defaultValue: { summary: 'default' },
      },
    },
    align: {
      description: 'Text alignment.',
      control: 'select',
      options: ['left', 'center', 'right'],
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: '-' },
      },
    },
    truncate: {
      description: 'Truncate text with ellipsis on overflow.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      description: 'HTML element to render.',
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: { summary: '"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"' },
        defaultValue: { summary: '"p" (body/heading) or "label" (label)' },
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
    children: {
      description: 'Text content.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const BodySizes: Story = {
  name: 'Body Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="body" size="xs">
        Body XS — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="sm">
        Body SM — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="md">
        Body MD — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="lg">
        Body LG — The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
}

export const LabelSizes: Story = {
  name: 'Label Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="label" size="xs">
        Label XS
      </Text>
      <Text variant="label" size="sm">
        Label SM
      </Text>
      <Text variant="label" size="md">
        Label MD
      </Text>
      <Text variant="label" size="lg">
        Label LG
      </Text>
    </div>
  ),
}

export const HeadingSizes: Story = {
  name: 'Heading Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Text variant="heading" size="sm">
        Heading SM
      </Text>
      <Text variant="heading" size="md">
        Heading MD
      </Text>
      <Text variant="heading" size="lg">
        Heading LG
      </Text>
      <Text variant="heading" size="xl">
        Heading XL
      </Text>
      <Text variant="heading" size="2xl">
        Heading 2XL
      </Text>
    </div>
  ),
}

export const Colors: Story = {
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story:
          '`default`, `muted`, and `subtle` form the foreground hierarchy from most prominent (primary text) to least prominent (tertiary helper / placeholder-like text).',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Text color="default">Default — primary text</Text>
      <Text color="muted">Muted — secondary / helper text</Text>
      <Text color="subtle">Subtle — tertiary text, faintest of the three</Text>
      <Text color="accent">Accent color</Text>
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
  ),
}

export const StateColors: Story = {
  name: 'State Colors',
  parameters: {
    docs: {
      description: {
        story:
          'State colors reference the same `error` / `success` / `warning` / `info` semantic tokens used by Toast and Callout. Use these for inline status text — for example a "Saved" confirmation note or a "3 items failed" summary.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Text color="error">Error — Could not save your changes.</Text>
      <Text color="success">Success — Your changes were saved.</Text>
      <Text color="warning">Warning — 3 items were skipped.</Text>
      <Text color="info">Info — Beta features may change.</Text>
    </div>
  ),
}

export const InvertedColor: Story = {
  name: 'Inverted Color',
  parameters: {
    docs: {
      description: {
        story:
          '`inverted` / `inverted-muted` / `inverted-subtle` mirror the `default` / `muted` / `subtle` hierarchy but for text placed on saturated surfaces (a solid Toast / Callout, a primary-colored fill, …). Each step is progressively less prominent against the saturated background.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 rounded-md bg-solid p-4">
        <Text color="inverted">Inverted — primary text on a primary surface</Text>
        <Text color="inverted-muted" size="sm">
          Inverted muted — secondary / helper text
        </Text>
        <Text color="inverted-subtle" size="sm">
          Inverted subtle — tertiary text, faintest of the three
        </Text>
      </div>
      <div className="flex flex-col gap-1 rounded-md bg-success p-4">
        <Text color="inverted">Inverted on a success surface</Text>
        <Text color="inverted-muted" size="sm">
          Secondary on the same surface
        </Text>
      </div>
      <div className="flex flex-col gap-1 rounded-md bg-error p-4">
        <Text color="inverted">Inverted on an error surface</Text>
        <Text color="inverted-subtle" size="sm">
          Tertiary on the same surface
        </Text>
      </div>
    </div>
  ),
}

export const Truncated: Story = {
  name: 'Truncated',
  render: () => (
    <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
  ),
}
