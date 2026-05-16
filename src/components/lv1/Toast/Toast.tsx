import * as ToastPrimitive from '@radix-ui/react-toast'
import { CircleAlert, CircleCheck, Info, type LucideIcon, TriangleAlert } from 'lucide-react'
import { cn } from '../../../lib/utils'
import './Toast.css'
import { toastVariants } from '../../../variants/toast'
import { Button } from '../Button'
import { dismiss, type ToastData, type ToastVariant } from './use-toast'

const iconByVariant: Record<ToastVariant, LucideIcon> = {
  neutral: Info,
  accent: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
}

export interface ToastItemProps {
  toast: ToastData
}

/**
 * Renders a single toast inside a Radix Toast.Provider. Internal; consumers
 * should use the `toast()` imperative API and mount a single `<Toaster />`
 * at the app root.
 */
export function ToastItem({ toast }: ToastItemProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) dismiss(toast.id)
  }

  // Action takes the slot when present; close is suppressed in that case so
  // we never render two buttons. Action click also dismisses, so the toast
  // is still removable.
  const hasAction = !!toast.action
  const handleActionClick = () => {
    toast.action?.onClick()
    dismiss(toast.id)
  }

  // Solid toasts have a saturated fill, so the action/close button needs an
  // inverted foreground to stay legible against the bg.
  const buttonVariant = toast.appearance === 'solid' ? 'inverted' : 'tertiary'

  const Icon = iconByVariant[toast.variant ?? 'neutral']

  return (
    <ToastPrimitive.Root
      open={toast.open}
      onOpenChange={handleOpenChange}
      duration={toast.duration}
      className={cn(toastVariants({ variant: toast.variant, appearance: toast.appearance }))}
    >
      {/*
       * Two layout regimes share the same flex row:
       *   - title only          → `items-center` so the single line of text
       *                            sits at the vertical center of the toast
       *                            (X button height would otherwise create
       *                            empty space below).
       *   - title + description → `items-start` so the icon stays next to
       *                            the title, the natural "header" position.
       * `min-w-0` lets the content column shrink below its intrinsic width
       * so a long action label cannot overflow into title/description.
       */}
      <div className={cn('flex gap-3', toast.description ? 'items-start' : 'items-center')}>
        <Icon className={cn('size-5 shrink-0', toast.description && 'mt-0.5')} aria-hidden="true" />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {toast.title && (
            <ToastPrimitive.Title className="text-sm font-semibold leading-tight">
              {toast.title}
            </ToastPrimitive.Title>
          )}
          {toast.description && (
            <ToastPrimitive.Description className="text-sm leading-snug opacity-90">
              {toast.description}
            </ToastPrimitive.Description>
          )}
        </div>

        {hasAction && toast.action ? (
          <ToastPrimitive.Action
            asChild
            altText={
              toast.action.altText ??
              (typeof toast.action.label === 'string' ? toast.action.label : 'Action')
            }
          >
            <Button
              variant={buttonVariant}
              size="sm"
              onClick={handleActionClick}
              className="shrink-0"
            >
              {toast.action.label}
            </Button>
          </ToastPrimitive.Action>
        ) : (
          <ToastPrimitive.Close asChild>
            <Button
              variant={buttonVariant}
              size="sm"
              icon="X"
              aria-label="Close"
              className="shrink-0"
            />
          </ToastPrimitive.Close>
        )}
      </div>
    </ToastPrimitive.Root>
  )
}

ToastItem.displayName = 'ToastItem'
