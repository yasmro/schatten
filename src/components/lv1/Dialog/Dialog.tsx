import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type LucideIcon, X } from 'lucide-react'
import { type ReactNode, useCallback, useEffect } from 'react'
import { Button } from '../Button'
import { Separator } from '../Separator'
import './Dialog.css'

export type DialogActionButton = {
  label: string
  variant?: 'primary' | 'destructive'
  onClick?: () => void | Promise<void>
  /** Lucide icon component shown on the button. Import from `lucide-react`. */
  icon?: LucideIcon
  /**
   * When true, this button shows a spinner. The Dialog disables the
   * other footer buttons (cancel / sub-action) and blocks ESC / overlay
   * click / close ✕ dismissal while *any* footer button is loading.
   * Parent owns this state.
   */
  isLoading?: boolean
}

export type DialogCancelButton = {
  label: string
  onClick?: () => void
  /** Lucide icon component shown on the button. Import from `lucide-react`. */
  icon?: LucideIcon
  // Cancel is always synchronous (closes the dialog) — no `isLoading`
  // here on purpose. If you have an async cleanup on cancel, fire it
  // and let the dialog close immediately.
}

export type DialogSubActionButton = {
  label: string
  onClick?: () => void | Promise<void>
  /** Lucide icon component shown on the button. Import from `lucide-react`. */
  icon?: LucideIcon
  /** See `DialogActionButton.isLoading`. */
  isLoading?: boolean
}

export interface DialogProps {
  /** Controlled open state. */
  isOpen: boolean
  /** Called when the open state changes (close ✕, ESC, overlay click, cancel button). */
  onOpenChange: (isOpen: boolean) => void
  /** Dialog heading. Rendered as the accessible name via Radix `aria-labelledby`. */
  title: string
  /** Optional supporting text rendered below the title. */
  description?: string
  /**
   * Whether the close (✕) button in the top-right is rendered.
   * @default true
   */
  isCloseButtonVisible?: boolean
  /**
   * Required primary action. Set `isLoading: true` on the slot to show
   * a spinner (Dialog will also disable cancel / sub-action and block
   * dismissal while any footer button is loading).
   *
   * On open, Radix focuses the first tabbable element inside Content;
   * the footer is structured so that the action button is the first
   * tabbable in the footer region. If the body (`children`) contains
   * focusable elements (e.g. form inputs), those will be focused first.
   *
   * Async-handler errors are the parent's responsibility — `onClick`
   * rejections are not caught by Dialog. Wrap your handler in
   * `try/catch` (or `.catch`) and reset `isLoading` in the failure path
   * to avoid the dialog getting stuck.
   *
   * Note: if `onClick` is omitted the action button is a no-op — the
   * dialog will not close. A development-mode warning is logged in this
   * case.
   */
  actionButton: DialogActionButton
  /**
   * Optional cancel button (secondary variant). Clicking it closes the
   * dialog automatically — the parent does *not* need to call
   * `onOpenChange(false)`. If `onClick` is provided, it's invoked
   * alongside the close (useful for cleanup / analytics). Cancel is
   * always synchronous; for a "going back" path that needs awaiting,
   * use `subActionButton` instead.
   */
  cancelButton?: DialogCancelButton
  /**
   * Optional tertiary alternative — typically "Save as draft" or a
   * non-primary commit path. Placed at the far left on desktop, below
   * a separator on mobile. Like `actionButton`, set `isLoading: true`
   * for async sub-action handlers; the same dismissal-blocking and
   * sibling-disabling rules apply.
   */
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
    <div className="st-dialog__header">
      <DialogPrimitive.Title className="st-dialog__title">{title}</DialogPrimitive.Title>
      {description && (
        <DialogPrimitive.Description className="st-dialog__description">
          {description}
        </DialogPrimitive.Description>
      )}
    </div>
  )
}

function Body({ children }: { children: ReactNode }) {
  return <div className="st-dialog__body">{children}</div>
}

function Footer({
  actionButton,
  cancelButton,
  subActionButton,
  anyLoading,
}: {
  actionButton: DialogActionButton
  cancelButton?: DialogCancelButton
  subActionButton?: DialogSubActionButton
  anyLoading: boolean
}) {
  // DOM order is action → cancel → separator → subAction so that Radix's
  // default `onOpenAutoFocus` (focus first tabbable inside Content) lands
  // on the action button. CSS `order` utilities recover the desired visual
  // layout — see `tab order` JSDoc on `DialogProps['children']` for the
  // resulting Tab-vs-visual relationship.
  //
  // Per-button states:
  //   - The button whose own `isLoading` is true shows the spinner
  //     (Button auto-disables itself when isLoading).
  //   - Other footer buttons receive `disabled` so they're frozen while
  //     any sibling is mid-async.
  const isActionLoading = !!actionButton.isLoading
  const isSubActionLoading = !!subActionButton?.isLoading

  return (
    <div className="st-dialog__footer">
      <Button
        variant={actionButton.variant ?? 'primary'}
        isLoading={isActionLoading}
        disabled={isSubActionLoading}
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
            disabled={anyLoading}
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
          isLoading={isSubActionLoading}
          disabled={isActionLoading}
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

function CloseButton({ disabled }: { disabled: boolean }) {
  // Wrap in `.st-dialog__close` (absolute-positioned): Button's own root has
  // `position: relative` (spinner overlay anchor), so positioning has to
  // live one level up.
  return (
    <div className="st-dialog__close">
      <DialogPrimitive.Close asChild>
        <Button variant="tertiary" size="sm" icon={X} aria-label="Close" disabled={disabled} />
      </DialogPrimitive.Close>
    </div>
  )
}

/* ----- Public Dialog component -------------------------------------------- */

export const Dialog = ({
  isOpen,
  onOpenChange,
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

  // Any footer button being in a loading state freezes dismissal (ESC,
  // overlay, close ✕) and disables the *other* footer buttons.
  const anyLoading = !!actionButton.isLoading || !!subActionButton?.isLoading

  const blockWhileLoading = useCallback(
    (event: Event) => {
      if (anyLoading) event.preventDefault()
    },
    [anyLoading],
  )

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="st-dialog__overlay" />
        <DialogPrimitive.Content
          onEscapeKeyDown={blockWhileLoading}
          onPointerDownOutside={blockWhileLoading}
          onInteractOutside={blockWhileLoading}
          // When no description is rendered, opt out of Radix's dev-only
          // "missing Description" warning. Spread conditionally so the prop
          // is omitted (and Radix's auto-wiring stays intact) when a
          // Description child IS being rendered.
          {...(description === undefined && { 'aria-describedby': undefined })}
          className="st-dialog__content"
        >
          <Header title={title} description={description} />
          {children && <Body>{children}</Body>}
          <Footer
            actionButton={actionButton}
            cancelButton={cancelButton}
            subActionButton={subActionButton}
            anyLoading={anyLoading}
          />
          {isCloseButtonVisible && <CloseButton disabled={anyLoading} />}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

Dialog.displayName = 'Dialog'
