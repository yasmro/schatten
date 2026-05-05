import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '../../../lib/utils'
import './Toast.css'
import { toastVariants } from '../../../variants/toast'
import { Button } from '../Button'
import { dismiss, type ToastData } from './use-toast'

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

  return (
    <ToastPrimitive.Root
      open={toast.open}
      onOpenChange={handleOpenChange}
      duration={toast.duration}
      className={cn(toastVariants({ variant: toast.variant, treatment: toast.treatment }))}
    >
      <div className={cn('flex flex-col gap-1', hasAction ? 'pr-20' : 'pr-10')}>
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

      <div className="absolute top-2 right-2">
        {hasAction && toast.action ? (
          <ToastPrimitive.Action
            asChild
            altText={
              toast.action.altText ??
              (typeof toast.action.label === 'string' ? toast.action.label : 'Action')
            }
          >
            <Button variant="tertiary" size="sm" onClick={handleActionClick}>
              {toast.action.label}
            </Button>
          </ToastPrimitive.Action>
        ) : (
          <ToastPrimitive.Close asChild>
            <Button variant="tertiary" size="sm" icon="X" aria-label="Close" />
          </ToastPrimitive.Close>
        )}
      </div>
    </ToastPrimitive.Root>
  )
}

ToastItem.displayName = 'ToastItem'
