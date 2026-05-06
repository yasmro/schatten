import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type ReactNode, useCallback, useEffect } from 'react'
import { cn } from '../../../lib/utils'
import { Button, type IconName } from '../Button'
import { Separator } from '../Separator'
import './Dialog.css'

export type DialogActionButton = {
  label: string
  variant?: 'primary' | 'destructive'
  onClick?: () => void | Promise<void>
  icon?: IconName
}

export type DialogCancelButton = {
  label: string
  onClick?: () => void
  icon?: IconName
}

export type DialogSubActionButton = {
  label: string
  onClick?: () => void
  icon?: IconName
}

export interface DialogProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Called when the open state changes (close ✕, ESC, overlay click, cancel button). */
  onOpenChange: (isOpen: boolean) => void
  /**
   * When true, the action button shows a spinner, cancel / sub-action are
   * disabled, and ESC / overlay click / close ✕ are blocked. Parent owns
   * this state — set it true before awaiting the async action and back to
   * false (or close the dialog) when settled.
   *
   * Errors are the parent's responsibility — `actionButton.onClick`
   * rejections are not caught by Dialog. Wrap your async handler in
   * `try/catch` (or `.catch`) and reset `isLoading` in the failure path
   * to avoid the dialog getting stuck.
   */
  isLoading?: boolean
  title: string
  description?: string
  /** Default: true. */
  isCloseButtonVisible?: boolean
  /**
   * Required primary action.
   *
   * On open, Radix focuses the first tabbable element inside Content;
   * the footer is structured so that the action button is the first
   * tabbable in the footer region. If the body (`children`) contains
   * focusable elements (e.g. form inputs), those will be focused first.
   *
   * Note: if `onClick` is omitted the action button is a no-op — the
   * dialog will not close. A development-mode warning is logged in this
   * case.
   */
  actionButton: DialogActionButton
  cancelButton?: DialogCancelButton
  subActionButton?: DialogSubActionButton
  /**
   * Body content. Long content scrolls inside the dialog automatically
   * (the dialog caps its height to the viewport).
   *
   * Note on tab order: footer DOM order is
   * `Action → Cancel → SubAction` so that Radix's default focus
   * (first tabbable) lands on the action button.
   * - Mobile (vertical stack): visual order is also
   *   `Action / Cancel / SubAction` ✓ tab order matches visual.
   * - Desktop (horizontal): visual order is `SubAction … Cancel Action`
   *   (left-to-right) so tab order is the reverse of left-to-right
   *   reading order. This is a deliberate trade-off — keyboard
   *   confirmation lands on the primary action immediately.
   */
  children?: ReactNode
}

/* ----- Internal section components -----------------------------------------
 * File-private — not exported. Pure code-organization split, no a11y
 * implication: `<header>` / `<footer>` HTML elements would lose their
 * landmark roles inside a Dialog anyway, and Radix already wires
 * `aria-labelledby` (Title) / `aria-describedby` (Description) to Content.
 * ------------------------------------------------------------------------- */

function Header({ title, description }: { title: string; description?: string }) {
  return (
    <div className="shrink-0 flex flex-col gap-1.5 pr-8">
      <DialogPrimitive.Title className="text-lg font-semibold leading-tight text-foreground">
        {title}
      </DialogPrimitive.Title>
      {description && (
        <DialogPrimitive.Description className="text-sm text-foreground-muted">
          {description}
        </DialogPrimitive.Description>
      )}
    </div>
  )
}

function Body({ children }: { children: ReactNode }) {
  return <div className="min-h-0 overflow-y-auto text-sm text-foreground">{children}</div>
}

function Footer({
  actionButton,
  cancelButton,
  subActionButton,
  isLoading,
}: {
  actionButton: DialogActionButton
  cancelButton?: DialogCancelButton
  subActionButton?: DialogSubActionButton
  isLoading: boolean
}) {
  // DOM order is action → cancel → separator → subAction so that Radix's
  // default `onOpenAutoFocus` (focus first tabbable inside Content) lands
  // on the action button. CSS `order` utilities recover the desired visual
  // layout — see `tab order` JSDoc on `DialogProps['children']` for the
  // resulting Tab-vs-visual relationship.
  return (
    <div
      className={cn(
        'shrink-0 flex flex-col gap-2',
        'sm:flex-row sm:items-center sm:gap-2 sm:justify-end',
      )}
    >
      <Button
        variant={actionButton.variant ?? 'primary'}
        isLoading={isLoading}
        onClick={actionButton.onClick}
        icon={actionButton.icon}
        className="order-1 sm:order-3"
      >
        {actionButton.label}
      </Button>

      {cancelButton && (
        <DialogPrimitive.Close asChild>
          <Button
            variant="secondary"
            disabled={isLoading}
            onClick={cancelButton.onClick}
            icon={cancelButton.icon}
            className="order-2"
          >
            {cancelButton.label}
          </Button>
        </DialogPrimitive.Close>
      )}

      {subActionButton && (
        <Separator className="order-3 my-2 sm:my-0 sm:hidden" aria-hidden="true" />
      )}

      {subActionButton && (
        <Button
          variant="tertiary"
          disabled={isLoading}
          onClick={subActionButton.onClick}
          icon={subActionButton.icon}
          className="order-4 sm:order-1 sm:mr-auto"
        >
          {subActionButton.label}
        </Button>
      )}
    </div>
  )
}

function CloseButton({ isLoading }: { isLoading: boolean }) {
  // Wrap in an absolutely-positioned div: Button's own className ends with
  // `relative` (positioning context for its spinner), which tailwind-merges
  // away any `absolute` we'd pass on the Button itself.
  return (
    <div className="absolute right-4 top-4">
      <DialogPrimitive.Close asChild>
        <Button variant="tertiary" size="sm" icon="X" aria-label="Close" disabled={isLoading} />
      </DialogPrimitive.Close>
    </div>
  )
}

/* ----- Public Dialog component -------------------------------------------- */

export const Dialog = ({
  isOpen,
  onOpenChange,
  isLoading = false,
  title,
  description,
  isCloseButtonVisible = true,
  actionButton,
  cancelButton,
  subActionButton,
  children,
}: DialogProps) => {
  // Dev-only footgun warning: a missing onClick silently does nothing,
  // which is hard to diagnose at the call-site. Surfacing it explicitly
  // saves debugging time without affecting production behavior.
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' && isOpen && !actionButton.onClick) {
      console.warn(
        'Dialog: `actionButton.onClick` is undefined. Clicking the action button will be a no-op. ' +
          'Provide `onClick` (and call `onOpenChange(false)` if you want the dialog to close on success).',
      )
    }
  }, [isOpen, actionButton.onClick])

  const blockWhileLoading = useCallback(
    (event: Event) => {
      if (isLoading) event.preventDefault()
    },
    [isLoading],
  )

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn('dialog-overlay fixed inset-0 z-(--z-modal-backdrop) bg-black/50')}
        />
        <DialogPrimitive.Content
          onEscapeKeyDown={blockWhileLoading}
          onPointerDownOutside={blockWhileLoading}
          onInteractOutside={blockWhileLoading}
          // When no description is rendered, opt out of Radix's dev-only
          // "missing Description" warning. Spread conditionally so the prop
          // is omitted (and Radix's auto-wiring stays intact) when a
          // Description child IS being rendered.
          {...(description === undefined && { 'aria-describedby': undefined })}
          className={cn(
            'dialog-content fixed left-1/2 top-1/2 z-(--z-modal)',
            '-translate-x-1/2 -translate-y-1/2',
            'w-[calc(100vw-2rem)] max-w-md',
            // Cap height to viewport so very long bodies don't push the
            // dialog off-screen. `overflow-hidden` here, plus `min-h-0
            // overflow-y-auto` on the body below, makes the body the only
            // scrolling region; header / footer stay pinned.
            'max-h-[calc(100vh-2rem)] overflow-hidden',
            'bg-background border border-border-strong shadow-lg',
            'flex flex-col gap-6 p-6',
          )}
        >
          <Header title={title} description={description} />
          {children && <Body>{children}</Body>}
          <Footer
            actionButton={actionButton}
            cancelButton={cancelButton}
            subActionButton={subActionButton}
            isLoading={isLoading}
          />
          {isCloseButtonVisible && <CloseButton isLoading={isLoading} />}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

Dialog.displayName = 'Dialog'
