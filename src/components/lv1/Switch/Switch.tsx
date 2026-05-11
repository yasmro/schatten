import * as SwitchPrimitive from '@radix-ui/react-switch'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useId,
} from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type SwitchVariants, switchThumbVariants, switchVariants } from '../../../variants/switch'

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'size'>,
    SwitchVariants {
  /**
   * Size of the switch.
   * @default 'md'
   */
  size?: SwitchVariants['size']
  /**
   * Displays the switch in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
  /** Label text displayed next to the switch. Automatically associates via `htmlFor`. */
  label?: ReactNode
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-full" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

const checkIconSizeClasses = {
  sm: 'size-2.5',
  md: 'size-3',
  lg: 'size-3.5',
} as const

const labelSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const

export const Switch = forwardRef<ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  (
    {
      className,
      size = 'md',
      isError: isErrorProp = false,
      label,
      id: idProp,
      disabled: disabledProp,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const autoId = useId()

    // Don't use field?.id - Switch has its own label and needs unique id per instance
    const id = idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer',
          disabled && 'cursor-not-allowed',
          className,
        )}
      >
        <SwitchPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            'group',
            switchVariants({ size }),
            isError &&
              'border-error bg-error-subtle focus-visible:ring-error data-[state=checked]:border-error data-[state=checked]:bg-error',
          )}
          aria-invalid={isError || undefined}
          aria-describedby={ariaDescribedBy}
          disabled={disabled}
          {...props}
        >
          <span
            className={cn(
              'absolute left-1 flex items-center justify-center text-background opacity-0 transition-opacity duration-200 group-data-[state=checked]:opacity-100',
              checkIconSizeClasses[size ?? 'md'],
            )}
          >
            <CheckIcon />
          </span>
          <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
        </SwitchPrimitive.Root>
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

Switch.displayName = 'Switch'
