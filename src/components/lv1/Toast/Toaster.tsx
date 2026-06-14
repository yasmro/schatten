import { Toaster as SonnerToaster } from 'sonner'
import './Toast.css'
import type { ToastPosition } from '../../../variants/toast'

export interface ToasterProps {
  /**
   * Where the toast viewport sits on screen.
   * @default 'bottom-center'
   */
  position?: ToastPosition
  /**
   * Default auto-dismiss duration in ms applied when a toast does not
   * specify its own. Per-toast `duration` always wins.
   * @default 5000
   */
  duration?: number
  /** Optional class applied to the viewport container. */
  className?: string
  /**
   * Render stacked toasts expanded (all spread out) instead of collapsed.
   * @default false
   */
  expand?: boolean
  /**
   * Maximum number of toasts visible at once; older toasts collapse behind.
   * @default 3
   */
  visibleToasts?: number
}

/**
 * Mount once at the app root. Renders Sonner's toast viewport — Sonner owns
 * stacking / swipe / enter-exit / auto-dismiss, while each toast's body is
 * rendered by Schatten via `toast.custom()` (see Toast.tsx) using real
 * `<Icon>` / `<Spinner>` / `<Button>` and the `.st-toast*` class API, mirroring
 * `Callout`. `toastOptions.unstyled` strips Sonner's own visual CSS so the
 * `.st-toast` skin in Toast.css is the only styling that applies.
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
export function Toaster({
  position = 'bottom-center',
  duration,
  className,
  expand,
  visibleToasts,
}: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      duration={duration}
      className={className}
      expand={expand}
      visibleToasts={visibleToasts}
      toastOptions={{ unstyled: true }}
    />
  )
}

Toaster.displayName = 'Toaster'
