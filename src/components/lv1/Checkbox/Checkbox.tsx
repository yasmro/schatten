import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useId,
} from 'react'
import { cn } from '../../../lib/utils'
import { type CheckboxVariants, checkboxVariants } from '../../../variants/checkbox'

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'size'>,
    CheckboxVariants {
  /** Displays the checkbox in an error state with destructive border and ring. */
  isError?: boolean
  /** Label text displayed next to the checkbox. Automatically associates via id. */
  label?: ReactNode
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-[62.5%]" aria-hidden="true">
    <path
      d="M3 8.5L6.5 12L13 4"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="butt"
      strokeLinejoin="round"
    />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-[62.5%]" aria-hidden="true">
    <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="butt" />
  </svg>
)

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, size, isError = false, label, id: idProp, disabled, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId

    const labelSizeClass = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm'

    return (
      <div className={cn('inline-flex items-center gap-2', className)}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            checkboxVariants({ size }),
            isError && 'border-destructive bg-destructive-subtle focus-visible:ring-destructive',
          )}
          aria-invalid={isError || undefined}
          disabled={disabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className="absolute inset-0 flex items-center justify-center text-foreground data-[state=unchecked]:hidden"
            forceMount
          >
            {props.checked === 'indeterminate' ? <MinusIcon /> : <CheckIcon />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              labelSizeClass,
              'text-foreground cursor-pointer select-none',
              disabled && 'cursor-not-allowed opacity-50',
            )}
          >
            {label}
          </label>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
