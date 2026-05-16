import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
  useId,
} from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type CheckboxVariants, checkboxVariants } from '../../../variants/checkbox'

export interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'size'>,
    CheckboxVariants {
  /**
   * Size of the checkbox.
   * @default 'md'
   */
  size?: CheckboxVariants['size']
  /**
   * Displays the checkbox in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
  /** Label text displayed next to the checkbox. Automatically associates via `htmlFor`. */
  label?: ReactNode
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-[75%]" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-[75%]" aria-hidden="true">
    <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="butt" />
  </svg>
)

const labelSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
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

    // Don't use field?.id - Checkbox has its own label and needs unique id per instance
    const id = idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    return (
      <div className={cn('inline-flex items-center gap-2', className)}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            checkboxVariants({ size }),
            isError && 'border-error bg-error-subtle focus-visible:ring-error',
          )}
          aria-invalid={isError || undefined}
          aria-describedby={ariaDescribedBy}
          disabled={disabled}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className="absolute inset-0 flex items-center justify-center text-current data-[state=unchecked]:hidden"
            forceMount
          >
            {props.checked === 'indeterminate' ? <MinusIcon /> : <CheckIcon />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              labelSizeClasses[size ?? 'md'],
              'text-foreground cursor-pointer select-none',
              disabled && 'cursor-not-allowed text-foreground-disabled',
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
