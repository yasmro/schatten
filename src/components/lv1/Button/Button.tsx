import { Slot } from '@radix-ui/react-slot'
import { icons } from 'lucide-react'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { type ButtonVariants, buttonVariants } from '../../../variants/button'
import { Spinner } from '../Spinner'

export type IconName = keyof typeof icons

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  /** Render as child element using Radix Slot. Note: `isLoading` is ignored when `asChild` is true. */
  asChild?: boolean
  icon?: IconName
  iconPosition?: 'start' | 'end'
  /** Shows a loading spinner and disables the button. Ignored when `asChild` is true. */
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
    const IconComponent = icon ? icons[icon] : null
    const isIconOnly = !children && !!icon
    const resolvedSize = variant === 'link' ? undefined : size

    const linkSizeClass = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm'

    if (variant === 'link') {
      return (
        <Comp
          className={cn(
            'inline underline underline-offset-4 text-foreground not-disabled:hover:text-foreground-subtle not-disabled:hover:no-underline not-disabled:hover:cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            linkSizeClass,
            className,
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {IconComponent && iconPosition === 'start' && (
            <IconComponent
              className="inline size-[0.75em] align-[-0.05em] mr-1"
              aria-hidden="true"
            />
          )}
          {children}
          {IconComponent && iconPosition === 'end' && (
            <IconComponent
              className="inline size-[0.75em] align-[-0.05em] ml-1"
              aria-hidden="true"
            />
          )}
        </Comp>
      )
    }

    if (asChild) {
      if (process.env.NODE_ENV !== 'production' && isLoading) {
        console.warn('Button: `isLoading` prop is ignored when `asChild` is true.')
      }
      return (
        <Comp
          className={cn(buttonVariants({ variant, size: resolvedSize, className }))}
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
          buttonVariants({ variant, size: resolvedSize, className }),
          isIconOnly && 'aspect-square px-0',
          'relative',
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        <span
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-300',
            isLoading ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={!isLoading}
        >
          <Spinner
            size="sm"
            className="size-[1em]"
            label="Loading"
            variant={
              variant === 'primary' || variant === 'destructive' || variant === 'inverted'
                ? 'inverse'
                : 'default'
            }
          />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-2 transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
          )}
        >
          {IconComponent && iconPosition === 'start' && <IconComponent aria-hidden="true" />}
          {children}
          {IconComponent && iconPosition === 'end' && <IconComponent aria-hidden="true" />}
        </span>
      </Comp>
    )
  },
)

Button.displayName = 'Button'
