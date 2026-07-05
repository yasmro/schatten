import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {
  type ComponentPropsWithoutRef,
  createContext,
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

// Public props are native <div> props (the element Radix RadioGroup.Root
// renders) plus curated redeclarations — Radix types never appear in the
// public signature (api-stability.md §Radix type boundary). `dir` is omitted
// from the base: RTL support is out of scope and the wider HTML `dir: string`
// would not satisfy Radix's `'ltr' | 'rtl'`.
export interface RadioGroupProps extends Omit<ComponentPropsWithoutRef<'div'>, 'dir'> {
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
  /**
   * The selected item's value (controlled).
   */
  value?: string
  /**
   * The initially selected item's value (uncontrolled).
   */
  defaultValue?: string
  /**
   * Fired when the selected value changes.
   */
  onValueChange?: (value: string) => void
  /**
   * Disables every radio item in the group.
   */
  disabled?: boolean
  /**
   * Marks the group required for native form validation (blocks submission
   * via the hidden input). Inside `<Field required>`, the field's `required`
   * adds `aria-required` only (announce-only) — see field-context-guideline.
   */
  required?: boolean
  /**
   * Name submitted with the form data.
   */
  name?: string
  /**
   * Whether arrow-key navigation loops from the last item back to the first.
   * @default true
   */
  loop?: boolean
  /**
   * Orientation of the group — controls which arrow keys move focus.
   */
  orientation?: 'horizontal' | 'vertical'
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
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
          // Announce-only at the group root (not on items — required is a
          // radiogroup-level concept). Never emit `aria-required={undefined}`,
          // which would clobber Radix's own `required`-derived value (Radix
          // spreads consumer props after its `aria-required`). Direct
          // `required` flows via `...props` to Radix (hidden input + its own
          // aria-required).
          {...(field?.required ? { 'aria-required': true } : null)}
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

// Public props are native <button> props (the element Radix RadioGroup.Item
// renders) plus curated redeclarations — see api-stability.md §Radix type boundary.
export interface RadioProps extends ComponentPropsWithoutRef<'button'>, RadioVariants {
  /**
   * The value submitted (and reported via `onValueChange`) when this radio is
   * selected. Required — it identifies the item within the group.
   */
  value: string
  /**
   * Marks the item required for native form validation. Group-level
   * requiredness normally lives on `RadioGroup` — see field-context-guideline.
   */
  required?: boolean
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

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
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
