import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '../Button'
import { Callout } from './Callout'

/**
 * Callout displays inline contextual information — beta notices, form
 * warnings, page-level announcements. It mirrors `Toast`'s variants and
 * two appearances so the visual language is shared, but lives in normal
 * layout flow rather than overlaying the viewport.
 *
 * ## Body content
 * Pass body content either as `children` (rich JSX) or as the
 * `description` prop (plain text — matches Toast's API). If both are
 * provided, `description` wins.
 *
 * ## Action
 * The `action` prop accepts any ReactNode, so you can drop in a Button,
 * a link, or a more complex affordance. Unlike Toast (where action is a
 * `{label, onClick}` shape), Callouts often persist on screen and may
 * need richer UI.
 *
 * **On `appearance="solid"`, prefer `<Button variant="inverted">`** for
 * action buttons so they remain legible on the saturated fill — see the
 * "Solid With Action" story below.
 *
 * ## Dismissibility
 * Pass `onClose` to render a close (X) button. Omit it for a static,
 * non-dismissible callout. State management for the closed-or-not flag
 * lives with the consumer.
 *
 * ## a11y
 * No `role` is set by default. For dynamic callouts that should be
 * announced when they appear, pass `role="status"` (polite) or
 * `role="alert"` (assertive). Static informational callouts do not
 * require a role.
 */

const meta: Meta<typeof Callout> = {
  title: 'Components/lv1/Callout',
  component: Callout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Tone / state variant. Drives the icon, color treatment, and accent.',
      control: 'select',
      options: ['neutral', 'accent', 'success', 'error', 'warning', 'info'],
      table: {
        type: { summary: '"neutral" | "accent" | "success" | "error" | "warning" | "info"' },
        defaultValue: { summary: 'neutral' },
      },
    },
    appearance: {
      description: 'Visual appearance — `subtle` for soft tinted background, `solid` for filled.',
      control: 'select',
      options: ['subtle', 'solid'],
      table: {
        type: { summary: '"subtle" | "solid"' },
        defaultValue: { summary: 'subtle' },
      },
    },
    title: {
      description: 'Optional bold heading rendered above the body content.',
      control: 'text',
    },
    children: {
      description: 'Body content. Any ReactNode (text, links, lists).',
      control: 'text',
    },
    action: {
      description:
        'Free-form action node rendered to the right of the body (e.g. a Button or link).',
      table: { type: { summary: 'ReactNode' } },
      control: false,
    },
    onClose: {
      description:
        'When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.',
      table: { type: { summary: '() => void' } },
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Callout>

const SOLID_VARIANTS = ['neutral', 'accent', 'success', 'error', 'warning', 'info'] as const
const SUBTLE_VARIANTS = ['neutral', 'success', 'error', 'warning', 'info'] as const

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'info',
    appearance: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.',
  },
}

export const SubtleTreatments: Story = {
  name: 'Subtle Treatments',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      {SUBTLE_VARIANTS.map((variant) => (
        <Callout key={variant} variant={variant} appearance="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>
      ))}
    </div>
  ),
}

export const SolidTreatments: Story = {
  name: 'Solid Treatments',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      {SOLID_VARIANTS.map((variant) => (
        <Callout key={variant} variant={variant} appearance="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>
      ))}
    </div>
  ),
}

export const TitleOnly: Story = {
  name: 'Title Only',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
  ),
}

export const BodyOnly: Story = {
  name: 'Body Only',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="info">
        This feature is in <strong>beta</strong>. Please share feedback.
      </Callout>
      <Callout variant="warning">
        Three records were skipped.{' '}
        <a href="#x" className="underline">
          View details
        </a>
      </Callout>
    </div>
  ),
}

export const WithAction: Story = {
  name: 'With Action',
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      <Callout
        variant="warning"
        title="Unsaved changes"
        action={<Button size="sm">Save now</Button>}
      >
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout
        variant="info"
        title="Update available"
        action={
          <Button size="sm" variant="secondary">
            Reload
          </Button>
        }
      >
        A newer version of this app is ready.
      </Callout>
    </div>
  ),
}

export const SolidWithAction: Story = {
  name: 'Solid With Action',
  parameters: {
    docs: {
      description: {
        story:
          'On `appearance="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      <Callout
        variant="warning"
        appearance="solid"
        title="Unsaved changes"
        action={
          <Button variant="inverted" size="sm">
            Save now
          </Button>
        }
      >
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout
        variant="info"
        appearance="solid"
        title="Update available"
        action={
          <Button variant="inverted" size="sm">
            Reload
          </Button>
        }
      >
        A newer version of this app is ready.
      </Callout>
    </div>
  ),
}

export const Dismissible: Story = {
  name: 'Dismissible',
  render: () => {
    const [shown, setShown] = useState({ a: true, b: true })
    return (
      <div className="flex flex-col gap-3 max-w-xl">
        {shown.a && (
          <Callout
            variant="info"
            title="Heads up"
            onClose={() => setShown((s) => ({ ...s, a: false }))}
          >
            Click the close button to dismiss this callout.
          </Callout>
        )}
        {shown.b && (
          <Callout
            variant="warning"
            title="With action and close"
            action={<Button size="sm">Acknowledge</Button>}
            onClose={() => setShown((s) => ({ ...s, b: false }))}
          >
            Both action and close can coexist.
          </Callout>
        )}
        {!shown.a && !shown.b && (
          <Button onClick={() => setShown({ a: true, b: true })}>Reset</Button>
        )}
      </div>
    )
  },
}

export const FullMatrix: Story = {
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Defined `variant` × `appearance` combinations. `neutral` supports both appearances; `accent` is paired with `solid` today; state variants support both.',
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {SUBTLE_VARIANTS.map((variant) => (
        <Callout
          key={`${variant}-subtle`}
          variant={variant}
          appearance="subtle"
          title={`${variant} / subtle`}
        >
          The quick brown fox jumps over the lazy dog.
        </Callout>
      ))}
      {SOLID_VARIANTS.map((variant) => (
        <Callout
          key={`${variant}-solid`}
          variant={variant}
          appearance="solid"
          title={`${variant} / solid`}
        >
          The quick brown fox jumps over the lazy dog.
        </Callout>
      ))}
    </div>
  ),
}

export const LongContent: Story = {
  name: 'Long Content',
  render: () => (
    <div className="max-w-xl">
      <Callout
        variant="warning"
        title="Heads up: long-running operation completed with warnings"
        action={<Button size="sm">View details</Button>}
        onClose={() => {}}
      >
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
  ),
}
