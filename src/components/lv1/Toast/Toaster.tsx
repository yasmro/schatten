import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '../../../lib/utils'
import { type ToastPosition, toastViewportVariants } from '../../../variants/toast'
import { ToastItem } from './Toast'
import { useToast } from './use-toast'

export interface ToasterProps {
  /**
   * Where the toast viewport sits on screen. Defaults to `bottom-center`.
   */
  position?: ToastPosition
  /**
   * Default auto-dismiss duration in ms applied when a toast does not
   * specify its own. Per-toast `duration` always wins. Default 5000.
   */
  duration?: number
  /**
   * Optional class applied to the viewport container.
   */
  className?: string
}

const swipeDirectionByPosition: Record<ToastPosition, 'up' | 'down' | 'left' | 'right'> = {
  'top-left': 'left',
  'top-center': 'up',
  'top-right': 'right',
  'bottom-left': 'left',
  'bottom-center': 'down',
  'bottom-right': 'right',
}

/**
 * Mount once at the app root. Reads from the shared toast store and
 * renders each currently-open toast inside a Radix Toast.Provider.
 *
 * @example
 *   <App>
 *     ...
 *     <Toaster position="bottom-center" />
 *   </App>
 *
 *   // Anywhere in the app:
 *   import { toast } from '@yasmro/schatten/components/lv1'
 *   toast({ title: 'Saved', variant: 'success' })
 */
export function Toaster({ position = 'bottom-center', duration, className }: ToasterProps) {
  const { toasts } = useToast()

  return (
    <ToastPrimitive.Provider
      swipeDirection={swipeDirectionByPosition[position]}
      duration={duration}
    >
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} />
      ))}
      <ToastPrimitive.Viewport className={cn(toastViewportVariants({ position }), className)} />
    </ToastPrimitive.Provider>
  )
}

Toaster.displayName = 'Toaster'
