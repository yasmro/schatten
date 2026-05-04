import * as SwitchPrimitive from '@radix-ui/react-switch'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useId,
} from 'react'
import { useFieldContext } from '../../../lib/field-context'
import { cn } from '../../../lib/utils'
import { type SwitchVariants, switchThumbVariants, switchVariants } from '../../../variants/switch'

export interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'size'>,
    SwitchVariants {
  /** Displays the switch in an error state with destructive border and ring. */
  isError?: boolean
  /** Label text displayed next to the switch. Automatically associates via id. */
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
      disabled,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const autoId = useId()

    const id = field?.id ?? idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
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
              'border-destructive bg-destructive-subtle focus-visible:ring-destructive data-[state=checked]:border-destructive data-[state=checked]:bg-destructive',
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
