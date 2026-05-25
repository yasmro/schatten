import { Slot } from '@radix-ui/react-slot'
import type { LucideIcon } from 'lucide-react'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { type ButtonVariants, buttonVariants } from '../../../variants/button'
import { Spinner } from '../Spinner'
import './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  /**
   * Visual style of the button.
   * - `primary` — solid fill, main CTA
   * - `secondary` — outlined, secondary actions
   * - `tertiary` — text only, low-priority actions
   * - `inverted` — ghost button intended for saturated surfaces (e.g. on top of a solid Toast or banner)
   * - `destructive` — for delete/remove actions (red)
   * - `link` — inline text link with button semantics
   * @default 'primary'
   */
  variant?: ButtonVariants['variant']
  /**
   * Size of the button.
   * @default 'md'
   */
  size?: ButtonVariants['size']
  /**
   * Delegates props to the child element via Radix Slot.
   * Note: `isLoading` is ignored when `asChild` is true.
   * @default false
   */
  asChild?: boolean
  /**
   * Lucide icon component to render alongside the label.
   * Import the icon from `lucide-react` and pass it directly — e.g.
   * `import { Search } from 'lucide-react'` then `<Button icon={Search} />`.
   * Passing the component (not a name string) keeps icon imports
   * tree-shakeable in consumer bundles.
   */
  icon?: LucideIcon
  /**
   * Position of the icon relative to the label text.
   * @default 'start'
   */
  iconPosition?: 'start' | 'end'
  /**
   * Shows a loading spinner and disables the button.
   * Ignored when `asChild` is true.
   * @default false
   */
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size,
      asChild = false,
      icon,
      iconPosition = 'start',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const IconComponent = icon ?? null
    // `--icon-only` is judged from props (`!children && !!icon`) which CVA's
    // variants model cannot express, so the modifier is added outside CVA.
    // Matches the Badge precedent (#267 sweep-2).
    const isIconOnly = !children && !!icon

    // Link variant — different DOM shape (inline, no spinner overlay, no
    // content wrapper). Early-return here so .st-btn--link's CSS overrides
    // (display: inline, height: auto, padding: 0) apply cleanly to a flat
    // element tree. isLoading is not supported on link (mirrors the
    // pre-sweep behaviour — link is a text affordance, not an async CTA).
    if (variant === 'link') {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {IconComponent && iconPosition === 'start' && <IconComponent aria-hidden="true" />}
          {children}
          {IconComponent && iconPosition === 'end' && <IconComponent aria-hidden="true" />}
        </Comp>
      )
    }

    if (asChild) {
      if (process.env.NODE_ENV !== 'production' && isLoading) {
        console.warn('Button: `isLoading` prop is ignored when `asChild` is true.')
      }
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size }),
            isIconOnly && 'st-btn--icon-only',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          isIconOnly && 'st-btn--icon-only',
          className,
        )}
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {/* Spinner overlay visibility is driven by .st-btn[aria-busy="true"]
         * .st-btn__spinner-overlay { opacity: 1 } in Button.css. JSX still
         * sets aria-hidden so the spinner is hidden from assistive tech
         * when not loading (CSS opacity doesn't affect the a11y tree). */}
        <span className="st-btn__spinner-overlay" aria-hidden={!isLoading}>
          <Spinner
            size="sm"
            label="Loading"
            variant={
              variant === 'primary' || variant === 'destructive' || variant === 'inverted'
                ? 'inverted'
                : 'default'
            }
          />
        </span>
        <span className="st-btn__content">
          {IconComponent && iconPosition === 'start' && <IconComponent aria-hidden="true" />}
          {children}
          {IconComponent && iconPosition === 'end' && <IconComponent aria-hidden="true" />}
        </span>
      </Comp>
    )
  },
)

Button.displayName = 'Button'
