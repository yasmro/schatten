import * as SwitchPrimitive from '@radix-ui/react-switch'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useId } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type SwitchVariants, switchThumbVariants, switchVariants } from '../../../variants/switch'
import './Switch.css'

// Public props are native <button> props (the element Radix Switch.Root
// renders) plus curated redeclarations — Radix types never appear in the
// public signature (api-stability.md §Radix type boundary).
export interface SwitchProps extends ComponentPropsWithoutRef<'button'>, SwitchVariants {
  /**
   * Controlled checked state.
   */
  checked?: boolean
  /**
   * Initial checked state (uncontrolled).
   */
  defaultChecked?: boolean
  /**
   * Fired when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * Marks the control required for native form validation (blocks submission
   * via the hidden input). Inside `<Field required>`, the field's `required`
   * adds `aria-required` only (announce-only) — see field-context-guideline.
   */
  required?: boolean
  /**
   * Value submitted with the form data when checked.
   * @default 'on'
   */
  value?: string
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
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
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

    // Don't use field?.id - Switch has its own label and needs unique id per instance
    const id = idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
    // With no own `label` (and no explicit naming), the Field-rendered label
    // names this control via aria-labelledby — htmlFor can't reach it because
    // Switch keeps its own per-instance id. See field-context-guideline.
    const ariaLabelledBy =
      ariaLabelledByProp ?? (label || props['aria-label'] ? undefined : field?.labelId)

    return (
      <div className={cn('st-switch-wrapper', className)}>
        <SwitchPrimitive.Root
          ref={ref}
          id={id}
          className={cn(switchVariants({ size }))}
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
          {/* Check icon fades in on `[data-state="checked"]` — driven by
           * .st-switch[data-state="checked"] .st-switch__check { opacity: 1 }
           * in Switch.css. JSX carries no opacity utility classes. */}
          <span className="st-switch__check">
            <CheckIcon />
          </span>
          <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
        </SwitchPrimitive.Root>
        {label && (
          <label htmlFor={id} className="st-switch-wrapper__label">
            {label}
          </label>
        )}
      </div>
    )
  },
)

Switch.displayName = 'Switch'
