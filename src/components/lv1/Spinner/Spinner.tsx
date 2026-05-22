import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type SpinnerVariants, spinnerVariants } from '../../../variants/spinner'
import './Spinner.css'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, SpinnerVariants {
  /**
   * Color variant. Use `inverted` when placing the spinner on top of a saturated surface.
   * @default 'default'
   */
  variant?: SpinnerVariants['variant']
  /**
   * Size of the spinner.
   * @default 'md'
   */
  size?: SpinnerVariants['size']
  /**
   * Accessible label for screen readers (rendered via a visually-hidden span).
   * @default 'Loading'
   */
  label?: string
  /**
   * Spinner animation type.
   * - `default` — circular spinner that rotates
   * - `ripple` — concentric pulsing rings
   * @default 'default'
   */
  type?: 'default' | 'ripple'
}

const DefaultSpinner = () => (
  <svg className="size-full animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path
      className="opacity-75"
      d="M22 12a10 10 0 0 0-10-10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const RippleSpinner = () => (
  <svg className="size-full" viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <circle className="st-spinner__dot" cx="36" cy="36" r="2.6" />
    <circle
      className="st-spinner__ripple-1"
      cx="36"
      cy="36"
      r="10"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <circle
      className="st-spinner__ripple-2"
      cx="36"
      cy="36"
      r="10"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
)

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, type, label = 'Loading', ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ variant, size }), className)}
        role="status"
        ref={ref}
        {...props}
      >
        {type === 'ripple' ? <RippleSpinner /> : <DefaultSpinner />}
        <span className="sr-only">{label}</span>
      </div>
    )
  },
)

Spinner.displayName = 'Spinner'
