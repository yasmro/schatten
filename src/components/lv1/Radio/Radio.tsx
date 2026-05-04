import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {
  type ComponentPropsWithoutRef,
  createContext,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useContext,
  useId,
} from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type RadioVariants, radioVariants } from '../../../variants/radio'

/* ----- RadioGroup Context ----- */

interface RadioGroupContextValue {
  isError: boolean
  disabled: boolean
  size?: RadioVariants['size']
}

const RadioGroupContext = createContext<RadioGroupContextValue>({
  isError: false,
  disabled: false,
})

/* ----- RadioGroup ----- */

export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /** Displays all radio items in an error state. Propagated via context. */
  isError?: boolean
  /** Size applied to all radio items. Can be overridden per item. */
  size?: RadioVariants['size']
}

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (
    {
      className,
      isError: isErrorProp = false,
      size,
      children,
      disabled: disabledProp,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()

    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? false
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    return (
      <RadioGroupContext.Provider value={{ isError, disabled, size }}>
        <RadioGroupPrimitive.Root
          ref={ref}
          disabled={disabled}
          className={cn('flex flex-col gap-2', className)}
          aria-invalid={isError || undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        >
          {children}
        </RadioGroupPrimitive.Root>
      </RadioGroupContext.Provider>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'

/* ----- Radio ----- */

export interface RadioProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'size'>,
    RadioVariants {
  /** Displays the radio in an error state. Inherited from RadioGroup if not set. */
  isError?: boolean
  /** Label text displayed next to the radio. Automatically associates via id. */
  label?: ReactNode
}

const labelSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const

const indicatorSizeClasses = {
  sm: 'size-2.5',
  md: 'size-3',
  lg: 'size-4',
} as const

export const Radio = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  (
    {
      className,
      size: sizeProp,
      isError: isErrorProp,
      label,
      id: idProp,
      disabled: disabledProp,
      ...props
    },
    ref,
  ) => {
    const group = useContext(RadioGroupContext)
    const size = sizeProp ?? group.size ?? 'md'
    const isError = isErrorProp ?? group.isError
    const disabled = disabledProp ?? group.disabled
    const autoId = useId()
    const id = idProp ?? autoId

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
              className={cn('rounded-full', 'bg-foreground', indicatorSizeClasses[size ?? 'md'])}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              labelSizeClasses[size ?? 'md'],
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
