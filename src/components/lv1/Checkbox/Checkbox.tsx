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
import './Checkbox.css'

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
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

const MinusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="butt" />
  </svg>
)

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
      'aria-labelledby': ariaLabelledByProp,
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
    // With no own `label` (and no explicit naming), the Field-rendered label
    // names this control via aria-labelledby — htmlFor can't reach it because
    // Checkbox keeps its own per-instance id. See field-context-guideline.
    const ariaLabelledBy =
      ariaLabelledByProp ?? (label || props['aria-label'] ? undefined : field?.labelId)

    return (
      <div className={cn('st-checkbox-wrapper', className)}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(checkboxVariants({ size }))}
          aria-invalid={isError || undefined}
          // Announce-only: never emit `aria-required={undefined}`, which would
          // clobber Radix's own `required`-derived value (Radix spreads consumer
          // props after its `aria-required`). Direct `required` flows via
          // `...props` to Radix (hidden input + its own aria-required).
          {...(field?.required ? { 'aria-required': true } : null)}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
          disabled={disabled}
          {...props}
        >
          {/* `forceMount` keeps the indicator in the DOM at all times.
           * Visibility is driven by CSS — see
           * `.st-checkbox[data-state="unchecked"] .st-checkbox__indicator
           * { display: none }` in Checkbox.css. */}
          <CheckboxPrimitive.Indicator className="st-checkbox__indicator" forceMount>
            {props.checked === 'indeterminate' ? <MinusIcon /> : <CheckIcon />}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label htmlFor={id} className="st-checkbox-wrapper__label">
            {label}
          </label>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
