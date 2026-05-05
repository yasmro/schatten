import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect } from 'react'
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

const Playground = (args: { position?: Parameters<typeof Toaster>[0]['position'] }) => (
  <div className="min-h-screen p-8 flex flex-col gap-3 items-start">
    <p className="text-sm text-foreground-muted">
      Click any button below to fire a toast. The toaster mount lives at the bottom of this story.
    </p>
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast({ title: 'Default toast', description: 'A neutral message.' })}>
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({ title: 'Saved', description: 'Your changes are saved.', variant: 'success' })
        }
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({ title: 'Error', description: 'Could not connect.', variant: 'error' })
        }
      >
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: 'Disk almost full', variant: 'warning', treatment: 'solid' })}
      >
        Warning (solid)
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Update available',
            description: 'A new version is ready.',
            variant: 'info',
            action: { label: 'Reload', onClick: () => alert('reload') },
          })
        }
      >
        Info + action
      </Button>
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
          variant: 'default',
          treatment: 'subtle',
          title: 'Default',
          description: 'A neutral notification.',
        },
        {
          variant: 'success',
          treatment: 'subtle',
          title: 'Success',
          description: 'Your changes have been saved.',
        },
        {
          variant: 'error',
          treatment: 'subtle',
          title: 'Error',
          description: 'Could not save your changes.',
        },
        {
          variant: 'warning',
          treatment: 'subtle',
          title: 'Warning',
          description: 'Disk space is running low.',
        },
        {
          variant: 'info',
          treatment: 'subtle',
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
          variant: 'default',
          treatment: 'solid',
          title: 'Default',
          description: 'A neutral notification.',
        },
        {
          variant: 'success',
          treatment: 'solid',
          title: 'Success',
          description: 'Your changes have been saved.',
        },
        {
          variant: 'error',
          treatment: 'solid',
          title: 'Error',
          description: 'Could not save your changes.',
        },
        {
          variant: 'warning',
          treatment: 'solid',
          title: 'Warning',
          description: 'Disk space is running low.',
        },
        {
          variant: 'info',
          treatment: 'solid',
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
