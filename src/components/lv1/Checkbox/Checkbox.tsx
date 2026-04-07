import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check, Minus } from 'lucide-react'
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

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, size, isError = false, label, id: idProp, disabled, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId

    const checkbox = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          checkboxVariants({ size }),
          isError &&
            'border-destructive data-[state=checked]:bg-destructive data-[state=indeterminate]:bg-destructive focus-visible:ring-destructive',
          !label && className,
        )}
        aria-invalid={isError || undefined}
        disabled={disabled}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className="absolute inset-0 flex items-center justify-center text-current data-[state=unchecked]:hidden"
          forceMount
        >
          {props.checked === 'indeterminate' ? (
            <Minus aria-hidden="true" />
          ) : (
            <Check aria-hidden="true" />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )

    if (!label) return checkbox

    const labelSizeClass = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm'

    return (
      <div className={cn('flex items-center gap-2', className)}>
        {checkbox}
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
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
