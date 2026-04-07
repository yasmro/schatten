import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useId,
} from 'react'
import { cn } from '../../../lib/utils'
import { type RadioVariants, radioVariants } from '../../../variants/radio'

export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Displays the radio group in an error state, propagated to all items. */
  isError?: boolean
}

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, isError, children, ...props }, ref) => (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('flex flex-col gap-2', className)}
      data-error={isError || undefined}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  ),
)

RadioGroup.displayName = 'RadioGroup'

export interface RadioProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'size'>,
    RadioVariants {
  /** Displays the radio in an error state with destructive border and ring. */
  isError?: boolean
  /** Label text displayed next to the radio. Automatically associates via id. */
  label?: ReactNode
}

export const Radio = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  ({ className, size, isError = false, label, id: idProp, disabled, ...props }, ref) => {
    const autoId = useId()
    const id = idProp ?? autoId

    const labelSizeClass = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-xs' : 'text-sm'

    return (
      <div className={cn('inline-flex items-center gap-2', className)}>
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={cn(
            radioVariants({ size }),
            isError && 'border-destructive bg-destructive-subtle focus-visible:ring-destructive',
          )}
          aria-invalid={isError || undefined}
          disabled={disabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
            <span
              className={cn(
                'rounded-full bg-foreground',
                size === 'lg' ? 'size-4' : size === 'sm' ? 'size-2.5' : 'size-3',
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
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

Radio.displayName = 'Radio'
