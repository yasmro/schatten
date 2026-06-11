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
import './Radio.css'

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
  /**
   * Displays all radio items in an error state. Propagated to children via context.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
  /**
   * Size applied to all radio items. Can be overridden per item.
   * @default 'md'
   */
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
      'aria-labelledby': ariaLabelledByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()

    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? false
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
    // role="radiogroup" cannot be named through htmlFor, so the Field-rendered
    // label names the group via aria-labelledby (unless the consumer names it
    // explicitly). Individual Radio items keep their own labels.
    const ariaLabelledBy = ariaLabelledByProp ?? (props['aria-label'] ? undefined : field?.labelId)

    return (
      <RadioGroupContext.Provider value={{ isError, disabled, size }}>
        <RadioGroupPrimitive.Root
          ref={ref}
          disabled={disabled}
          className={cn('st-radio-group', className)}
          aria-invalid={isError || undefined}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
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
  /**
   * Size of the radio button. Inherited from the parent `RadioGroup` if not set.
   * @default 'md'
   */
  size?: RadioVariants['size']
  /**
   * Displays the radio in an error state. Inherited from the parent `RadioGroup` if not set.
   * @default false
   */
  isError?: boolean
  /** Label text displayed next to the radio. Automatically associates via `htmlFor`. */
  label?: ReactNode
}

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
      <div className={cn('st-radio-wrapper', className)}>
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={cn(radioVariants({ size }))}
          aria-invalid={isError || undefined}
          disabled={disabled}
          {...props}
        >
          {/* Radix unmounts this when unchecked — no `forceMount`. */}
          <RadioGroupPrimitive.Indicator className="st-radio__indicator">
            <span className="st-radio__dot" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          <label htmlFor={id} className="st-radio-wrapper__label">
            {label}
          </label>
        )}
      </div>
    )
  },
)

Radio.displayName = 'Radio'
