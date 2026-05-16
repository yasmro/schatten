import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment, useEffect } from 'react'
import { Button } from '../Button'
import { Toaster } from './Toaster'
import { __resetToastStoreForTesting, toast } from './use-toast'

/**
 * Toast displays transient, non-blocking notifications.
 *
 * ## Setup
 * Mount a single `<Toaster />` at the root of your app:
 *
 * ```tsx
 * <App>
 *   <Routes ... />
 *   <Toaster position="bottom-center" />
 * </App>
 * ```
 *
 * ## Triggering
 * Call `toast()` from anywhere — it does not need to be a React render context:
 *
 * ```tsx
 * import { toast } from '@yasmro/schatten/components/lv1'
 *
 * toast({
 *   title: 'Saved',
 *   description: 'Your changes have been saved.',
 *   variant: 'success',
 *   action: { label: 'Undo', onClick: () => undo() },
 * })
 * ```
 *
 * The `useToast()` hook returns the same `toast` function plus `dismiss(id)`
 * and `dismissAll()` for programmatic control.
 *
 * ## Action button
 * The `action` prop accepts a simple `{ label, onClick }` shape. The button
 * is rendered as `<Button variant="tertiary" size="sm">` automatically — you
 * do not need to wrap it yourself. If you need a fundamentally different
 * action UI, extend this story and open a discussion.
 */

const ONE_HOUR = 60 * 60 * 1000

const meta: Meta<typeof Toaster> = {
  title: 'Components/lv1/Toast',
  component: Toaster,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      description: 'Where the toast viewport sits on screen.',
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: { summary: 'bottom-center' },
      },
    },
    duration: {
      description: 'Default auto-dismiss duration in ms. Per-toast duration overrides this.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toaster>

const SOLID_VARIANTS = ['neutral', 'accent', 'success', 'error', 'warning', 'info'] as const
const SUBTLE_VARIANTS = ['neutral', 'success', 'error', 'warning', 'info'] as const
const APPEARANCES = ['subtle', 'solid'] as const

const sampleByVariant: Record<
  'neutral' | 'accent' | 'success' | 'error' | 'warning' | 'info',
  { title: string; description: string }
> = {
  neutral: { title: 'Heads up', description: 'A neutral notification.' },
  accent: { title: 'Heads up', description: 'A highlighted notification.' },
  success: { title: 'Saved', description: 'Your changes have been saved.' },
  error: { title: 'Error', description: 'Could not save your changes.' },
  warning: { title: 'Warning', description: 'Disk space is running low.' },
  info: { title: 'Update available', description: 'A new version is ready to install.' },
}

const Playground = (args: { position?: Parameters<typeof Toaster>[0]['position'] }) => (
  <div className="min-h-screen p-8 flex flex-col gap-6 items-start">
    <div>
      <h2 className="text-base font-semibold mb-1">Toast Playground</h2>
      <p className="text-sm text-foreground-muted">
        Use the matrix below to fire any variant × appearance combination, and the second row to try
        toasts with an action. Switch the position via Controls. The <code>{'<Toaster />'}</code> is
        mounted at the bottom of this story.
      </p>
      <p className="text-xs text-foreground-muted mt-1">
        Coverage: <code>neutral</code> supports both appearances; <code>accent</code> defines{' '}
        <code>solid</code> only today. State variants support both. Empty cells (·) indicate a
        combination not yet defined.
      </p>
    </div>

    <div>
      <h3 className="text-sm font-semibold mb-2">Variant × Appearance</h3>
      <div className="grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center">
        <span className="text-xs font-mono text-foreground-muted" />
        {APPEARANCES.map((t) => (
          <span key={t} className="text-xs font-mono text-foreground-muted text-center">
            {t}
          </span>
        ))}
        {(['neutral', 'accent', 'success', 'error', 'warning', 'info'] as const).map((variant) => (
          <Fragment key={variant}>
            <span className="text-xs font-mono text-foreground-muted">{variant}</span>
            {APPEARANCES.map((appearance) => {
              const definedFor: Record<string, readonly string[]> = {
                subtle: SUBTLE_VARIANTS,
                solid: SOLID_VARIANTS,
              }
              const isDefined = definedFor[appearance].includes(variant)
              if (!isDefined) {
                return (
                  <span
                    key={`${variant}-${appearance}`}
                    aria-hidden="true"
                    title={`${variant} + ${appearance} is not defined`}
                    className="text-center text-xs text-foreground-subtle select-none"
                  >
                    ·
                  </span>
                )
              }
              return (
                <Button
                  key={`${variant}-${appearance}`}
                  variant="secondary"
                  size="sm"
                  onClick={() =>
                    toast({
                      ...sampleByVariant[variant],
                      variant,
                      appearance,
                    })
                  }
                >
                  Fire
                </Button>
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold mb-2">With Action (auto-dismisses on click)</h3>
      <div className="grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center">
        <span className="text-xs font-mono text-foreground-muted" />
        {APPEARANCES.map((t) => (
          <span key={t} className="text-xs font-mono text-foreground-muted text-center">
            {t}
          </span>
        ))}
        {(['neutral', 'accent', 'success', 'error', 'warning', 'info'] as const).map((variant) => (
          <Fragment key={`action-${variant}`}>
            <span className="text-xs font-mono text-foreground-muted">{variant}</span>
            {APPEARANCES.map((appearance) => {
              const definedFor: Record<string, readonly string[]> = {
                subtle: SUBTLE_VARIANTS,
                solid: SOLID_VARIANTS,
              }
              const isDefined = definedFor[appearance].includes(variant)
              if (!isDefined) {
                return (
                  <span
                    key={`action-${variant}-${appearance}`}
                    aria-hidden="true"
                    title={`${variant} + ${appearance} is not defined`}
                    className="text-center text-xs text-foreground-subtle select-none"
                  >
                    ·
                  </span>
                )
              }
              return (
                <Button
                  key={`action-${variant}-${appearance}`}
                  variant="secondary"
                  size="sm"
                  onClick={() =>
                    toast({
                      ...sampleByVariant[variant],
                      variant,
                      appearance,
                      action: {
                        label: 'Undo',
                        onClick: () => {
                          // user-supplied callback
                        },
                      },
                    })
                  }
                >
                  Fire + action
                </Button>
              )
            })}
          </Fragment>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold mb-2">Other</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => toast({ title: 'Title only', variant: 'success' })}
        >
          Title only
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() =>
            toast({
              title: 'Long content example',
              description:
                'This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.',
              variant: 'warning',
            })
          }
        >
          Long content
        </Button>
      </div>
    </div>

    <Toaster position={args.position} />
  </div>
)

export const PlaygroundStory: Story = {
  name: 'Playground',
  args: {
    position: 'bottom-center',
  },
  render: (args) => <Playground position={args.position} />,
}

const AutoFireDemo = ({
  inputs,
  position,
}: {
  inputs: Parameters<typeof toast>[0][]
  position?: Parameters<typeof Toaster>[0]['position']
}) => {
  useEffect(() => {
    __resetToastStoreForTesting()
    for (const input of inputs) {
      toast({ duration: ONE_HOUR, ...input })
    }
    return () => {
      __resetToastStoreForTesting()
    }
  }, [inputs])
  return (
    <div className="min-h-screen">
      <Toaster position={position ?? 'bottom-center'} />
    </div>
  )
}

export const SubtleTreatments: Story = {
  name: 'Subtle Treatments',
  render: () => (
    <AutoFireDemo
      inputs={[
        {
          variant: 'neutral',
          appearance: 'subtle',
          title: 'Neutral',
          description: 'A baseline notification.',
        },
        {
          variant: 'success',
          appearance: 'subtle',
          title: 'Success',
          description: 'Your changes have been saved.',
        },
        {
          variant: 'error',
          appearance: 'subtle',
          title: 'Error',
          description: 'Could not save your changes.',
        },
        {
          variant: 'warning',
          appearance: 'subtle',
          title: 'Warning',
          description: 'Disk space is running low.',
        },
        {
          variant: 'info',
          appearance: 'subtle',
          title: 'Info',
          description: 'A new version is available.',
        },
      ]}
    />
  ),
}

export const SolidTreatments: Story = {
  name: 'Solid Treatments',
  render: () => (
    <AutoFireDemo
      inputs={[
        {
          variant: 'neutral',
          appearance: 'solid',
          title: 'Neutral',
          description: 'A muted-but-emphatic notification.',
        },
        {
          variant: 'accent',
          appearance: 'solid',
          title: 'Accent',
          description: 'A highlighted notification.',
        },
        {
          variant: 'success',
          appearance: 'solid',
          title: 'Success',
          description: 'Your changes have been saved.',
        },
        {
          variant: 'error',
          appearance: 'solid',
          title: 'Error',
          description: 'Could not save your changes.',
        },
        {
          variant: 'warning',
          appearance: 'solid',
          title: 'Warning',
          description: 'Disk space is running low.',
        },
        {
          variant: 'info',
          appearance: 'solid',
          title: 'Info',
          description: 'A new version is available.',
        },
      ]}
    />
  ),
}

export const WithAction: Story = {
  name: 'With Action',
  render: () => (
    <AutoFireDemo
      inputs={[
        {
          variant: 'success',
          title: 'Saved',
          description: 'Your changes have been saved.',
          action: { label: 'Undo', onClick: () => {} },
        },
        {
          variant: 'info',
          title: 'Update available',
          description: 'A new version is ready to install.',
          action: { label: 'Reload', onClick: () => {} },
        },
      ]}
    />
  ),
}

export const TitleOnly: Story = {
  name: 'Title Only',
  render: () => (
    <AutoFireDemo
      inputs={[
        { variant: 'success', title: 'Saved' },
        { variant: 'error', title: 'Could not connect' },
      ]}
    />
  ),
}

export const LongContent: Story = {
  name: 'Long Content',
  render: () => (
    <AutoFireDemo
      inputs={[
        {
          variant: 'warning',
          title: 'Heads up: long-running operation completed with warnings',
          description:
            'Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.',
          action: { label: 'View details', onClick: () => {} },
        },
      ]}
    />
  ),
}
