import * as ToastPrimitive from '@radix-ui/react-toast'
import { CircleAlert, CircleCheck, Info, type LucideIcon, TriangleAlert, X } from 'lucide-react'
import { cn } from '../../../lib/utils'
import './Toast.css'
import { toastVariants } from '../../../variants/toast'
import { Button } from '../Button'
import { dismiss, type ToastData, type ToastVariant } from './use-toast'

const iconByVariant: Record<ToastVariant, LucideIcon> = {
  neutral: Info,
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
 *
 * DOM contract (consumed by Toast.css `:has()` selectors):
 *
 *     <li class="st-toast st-toast--{tone} st-toast--{shape}">
 *       <svg class="st-toast__icon" aria-hidden="true" />        ◀ direct child
 *       <div class="st-toast__content">                          ◀ direct child
 *         <div class="st-toast__title">…</div>
 *         <div class="st-toast__description">…</div>             ◀ optional
 *       </div>
 *       <button class="st-btn st-btn--…">…</button>              ◀ direct child
 *     </li>
 *
 * `:has(.st-toast__description)` flips alignment from `center` to
 * `flex-start` when a description is present, so `__icon` / `__content`
 * MUST stay direct children of `.st-toast` for the structural selector
 * to match.
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
      <Icon className="st-toast__icon" aria-hidden="true" />
      <div className="st-toast__content">
        {toast.title && (
          <ToastPrimitive.Title className="st-toast__title">{toast.title}</ToastPrimitive.Title>
        )}
        {toast.description && (
          <ToastPrimitive.Description className="st-toast__description">
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
          <Button variant={buttonVariant} size="sm" onClick={handleActionClick}>
            {toast.action.label}
          </Button>
        </ToastPrimitive.Action>
      ) : (
        <ToastPrimitive.Close asChild>
          <Button variant={buttonVariant} size="sm" icon={X} aria-label="Close" />
        </ToastPrimitive.Close>
      )}
    </ToastPrimitive.Root>
  )
}

ToastItem.displayName = 'ToastItem'
