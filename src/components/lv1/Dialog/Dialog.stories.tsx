import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '../Button'
import { Dialog } from './Dialog'

/**
 * Dialog renders a modal overlay for important content or actions —
 * confirmations, form input, detail views. The API is **flat**: all
 * state and footer slots are passed as props; only the body is `children`.
 *
 * ## Open state is controlled
 *
 * The parent owns `isOpen` / `onOpenChange`. There is no `<DialogTrigger>` —
 * any button can open the dialog.
 *
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Button onClick={() => setIsOpen(true)}>Open</Button>
 * <Dialog
 *   isOpen={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="..."
 *   actionButton={{ label: 'Confirm', onClick: handleConfirm }}
 *   cancelButton={{ label: 'Cancel' }}
 * />
 * ```
 *
 * ## Async actions
 *
 * Set `isLoading: true` on the slot whose handler is in flight
 * (`actionButton` or `subActionButton`). While any footer button is
 * loading:
 * - That button shows a spinner
 * - The other footer buttons (and close ✕) are disabled
 * - ESC, overlay click, and the close ✕ are blocked
 *
 * Flip `isLoading` true before awaiting and back to false (or close the
 * dialog) when the promise settles. Errors are the parent's
 * responsibility — the dialog stays open on rejection.
 *
 * ## Footer slots
 *
 * - `actionButton` (required) — primary action. `variant: 'primary' | 'destructive'`
 * - `cancelButton` (optional) — closes the dialog. `variant: secondary` (fixed)
 * - `subActionButton` (optional) — tertiary alternative. `variant: tertiary` (fixed)
 *
 * Layout:
 * - Desktop: `[SubAction] ────── [Cancel] [Action]`
 * - Mobile:  `[Action] / [Cancel] / ── ── ── / [SubAction]`
 *   (separator only when `subActionButton` is provided)
 */

const meta: Meta<typeof Dialog> = {
  title: 'Components/lv1/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Controlled open state.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      description:
        'Called when the open state changes (close ✕, ESC, overlay click, cancel button).',
      table: { type: { summary: '(isOpen: boolean) => void' } },
      control: false,
    },
    title: {
      description: 'Dialog heading. Required.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    description: {
      description: 'Optional supporting text rendered below the title.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isCloseButtonVisible: {
      description: 'Whether the close (✕) button in the top-right is rendered.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    actionButton: {
      description:
        'Primary action button. Required. Set `isLoading: true` on this slot to show a spinner; Dialog will disable the other footer buttons and block dismissal.',
      table: { type: { summary: 'DialogActionButton' } },
      control: false,
    },
    cancelButton: {
      description: 'Cancel button (secondary variant). Closes the dialog when clicked.',
      table: { type: { summary: 'DialogCancelButton' } },
      control: false,
    },
    subActionButton: {
      description:
        'Sub-action button (tertiary variant) — placed at the far left on desktop. Like `actionButton`, accepts `isLoading` for async sub-action handlers.',
      table: { type: { summary: 'DialogSubActionButton' } },
      control: false,
    },
    children: {
      description: 'Body content rendered between the header and the footer.',
      table: { type: { summary: 'ReactNode' } },
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Playground: Story = {
  name: 'Playground',
  args: {
    isOpen: false,
    title: 'Delete account',
    description: 'This action cannot be undone.',
    isCloseButtonVisible: true,
    actionButton: {
      label: 'Delete',
      variant: 'destructive',
      // isLoading is editable via the Controls panel — flip to true to
      // see the spinner-on-action / disabled-everything-else state.
      isLoading: false,
    },
    cancelButton: { label: 'Cancel' },
    subActionButton: {
      label: 'Save as draft',
      isLoading: false,
    },
    children: 'All data associated with this account will be permanently removed.',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
        <Dialog
          {...args}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          // Wire interactive close handlers in render so the Playground
          // is usable out of the box. Cancel auto-closes via Radix's
          // DialogClose; action and sub-action close the dialog on click.
          actionButton={{
            ...args.actionButton,
            onClick: () => setIsOpen(false),
          }}
          subActionButton={
            args.subActionButton
              ? { ...args.subActionButton, onClick: () => setIsOpen(false) }
              : undefined
          }
        />
      </>
    )
  },
}

export const Confirm: Story = {
  name: 'Confirm (primary)',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story: 'Standard confirmation dialog with a primary action and cancel.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Save changes"
          description="Your changes will be saved to this document."
          actionButton={{ label: 'Save', onClick: () => setIsOpen(false) }}
          cancelButton={{ label: 'Cancel' }}
        />
      </>
    )
  },
}

export const Destructive: Story = {
  name: 'Destructive',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story: 'Set `actionButton.variant: "destructive"` for irreversible actions like delete.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete
        </Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Delete account?"
          description="This action cannot be undone. All data will be permanently removed."
          actionButton={{
            label: 'Delete',
            variant: 'destructive',
            onClick: () => setIsOpen(false),
          }}
          cancelButton={{ label: 'Cancel' }}
        />
      </>
    )
  },
}

export const WithSubAction: Story = {
  name: 'With Sub-Action',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          '`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Publish article?"
          description="Your article will be visible to all readers."
          actionButton={{ label: 'Publish', onClick: () => setIsOpen(false) }}
          cancelButton={{ label: 'Cancel' }}
          subActionButton={{ label: 'Save as draft', onClick: () => setIsOpen(false) }}
        />
      </>
    )
  },
}

export const Loading: Story = {
  name: 'Loading',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          'When the action slot has `isLoading: true`, the action button shows a spinner, the cancel and sub-action buttons (and close ✕) are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Saving…"
          description="Please wait while we save your changes."
          actionButton={{ label: 'Save', onClick: () => {}, isLoading: true }}
          cancelButton={{ label: 'Cancel' }}
        />
      </>
    )
  },
}

export const SubActionLoading: Story = {
  name: 'Sub-Action Loading',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          'When `subActionButton.isLoading` is true, the sub-action button shows the spinner; the action button (and cancel) are disabled in turn.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Publish article?"
          description="Saving as draft…"
          actionButton={{ label: 'Publish', onClick: () => {} }}
          cancelButton={{ label: 'Cancel' }}
          subActionButton={{ label: 'Save as draft', onClick: () => {}, isLoading: true }}
        />
      </>
    )
  },
}

export const AsyncAction: Story = {
  name: 'Async Action',
  parameters: {
    docs: {
      description: {
        story:
          'Pattern for awaiting an async primary action. The parent flips `actionButton.isLoading` true → awaits → flips false (or closes the dialog).',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async () => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsLoading(false)
      setIsOpen(false)
    }

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open async dialog</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Submit form?"
          description="This will submit your form to the server."
          actionButton={{ label: 'Submit', onClick: handleSave, isLoading }}
          cancelButton={{ label: 'Cancel' }}
        />
      </>
    )
  },
}

export const AsyncSubAction: Story = {
  name: 'Async Sub-Action',
  parameters: {
    docs: {
      description: {
        story:
          'Sub-action handlers can be async too — set `isLoading: true` on `subActionButton` instead. The action button (and cancel) are disabled while the sub-action is in flight.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loadingSlot, setLoadingSlot] = useState<'action' | 'sub' | null>(null)

    const handlePublish = async () => {
      setLoadingSlot('action')
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoadingSlot(null)
      setIsOpen(false)
    }
    const handleSaveDraft = async () => {
      setLoadingSlot('sub')
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoadingSlot(null)
      setIsOpen(false)
    }

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Publish article?"
          description="Try clicking Save as draft — only the sub-action shows a spinner."
          actionButton={{
            label: 'Publish',
            onClick: handlePublish,
            isLoading: loadingSlot === 'action',
          }}
          cancelButton={{ label: 'Cancel' }}
          subActionButton={{
            label: 'Save as draft',
            onClick: handleSaveDraft,
            isLoading: loadingSlot === 'sub',
          }}
        />
      </>
    )
  },
}

export const WithoutCloseButton: Story = {
  name: 'Without Close Button',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          'Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          isCloseButtonVisible={false}
          title="Terms of service"
          description="You must accept the terms to continue."
          actionButton={{ label: 'Accept', onClick: () => setIsOpen(false) }}
          cancelButton={{ label: 'Decline' }}
        />
      </>
    )
  },
}

export const InfoOnly: Story = {
  name: 'Info Only (action only)',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Update available"
          description="A new version of the app is ready. Reload to apply."
          actionButton={{ label: 'OK', onClick: () => setIsOpen(false) }}
        />
      </>
    )
  },
}

export const LongContent: Story = {
  name: 'Long Content',
  parameters: {
    // Neutral-solid action button (light-on-solid) + trigger scanned behind the modal overlay — neither is fixable content contrast. Mirrors Dialog.vrt.spec.ts. #344 / #346.
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
    docs: {
      description: {
        story:
          'Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned.',
      },
    },
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title="Privacy policy update"
          description="Please review the changes before continuing."
          actionButton={{ label: 'Accept', onClick: () => setIsOpen(false) }}
          cancelButton={{ label: 'Decline' }}
        >
          <div className="flex flex-col gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable static fixture content
              <p key={i}>
                We have updated our privacy policy to reflect changes in how we handle user data.
                The updates clarify our practices around analytics, third-party integrations, and
                the retention of session-level information. By accepting, you acknowledge that you
                have read and understood the changes. You can review the full policy at any time
                from your account settings.
              </p>
            ))}
          </div>
        </Dialog>
      </>
    )
  },
}
