import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type ReactNode, useCallback } from 'react'
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
   */
  isLoading?: boolean
  title: string
  description?: string
  /** Default: true. */
  isCloseButtonVisible?: boolean
  actionButton: DialogActionButton
  cancelButton?: DialogCancelButton
  subActionButton?: DialogSubActionButton
  /** Body content rendered between the header and the footer. */
  children?: ReactNode
}

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
            'bg-background border border-border-strong shadow-lg',
            'flex flex-col gap-6 p-6',
          )}
        >
          <div className="flex flex-col gap-1.5 pr-8">
            <DialogPrimitive.Title className="text-lg font-semibold leading-tight text-foreground">
              {title}
            </DialogPrimitive.Title>
            {description && (
              <DialogPrimitive.Description className="text-sm text-foreground-muted">
                {description}
              </DialogPrimitive.Description>
            )}
          </div>

          {children && <div className="text-sm text-foreground">{children}</div>}

          <div
            className={cn(
              'flex flex-col gap-2',
              'sm:flex-row sm:items-center sm:gap-2 sm:justify-end',
            )}
          >
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

            {subActionButton && (
              <Separator className="order-3 my-2 sm:my-0 sm:hidden" aria-hidden="true" />
            )}

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

            <Button
              variant={actionButton.variant ?? 'primary'}
              isLoading={isLoading}
              onClick={actionButton.onClick}
              icon={actionButton.icon}
              className="order-1 sm:order-3"
            >
              {actionButton.label}
            </Button>
          </div>

          {isCloseButtonVisible && (
            // Wrap in an absolutely-positioned div: Button's own className
            // ends with `relative` (positioning context for its spinner),
            // which tailwind-merges away any `absolute` we'd pass on the
            // Button itself. The wrapper keeps Button's classes intact.
            <div className="absolute right-4 top-4">
              <DialogPrimitive.Close asChild>
                <Button
                  variant="tertiary"
                  size="sm"
                  icon="X"
                  aria-label="Close"
                  disabled={isLoading}
                />
              </DialogPrimitive.Close>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

Dialog.displayName = 'Dialog'
