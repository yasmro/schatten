import type { LucideIcon } from 'lucide-react'
import { forwardRef, type InputHTMLAttributes, useId, useRef } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { cn } from '../../../lib/utils'
import { type InputVariants, inputVariants, inputWrapperVariants } from '../../../variants/input'
import './Input.css'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants {
  /**
   * Size of the input.
   * @default 'md'
   */
  size?: InputVariants['size']
  /**
   * Displays the input in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
  /** Text displayed before the input. Takes priority over `iconLeft`. */
  textLeft?: string
  /** Text displayed after the input. Takes priority over `iconRight`. */
  textRight?: string
  /**
   * Lucide icon component rendered before the input. Ignored when `textLeft` is set.
   * Import the icon from `lucide-react` and pass it directly — e.g.
   * `import { Search } from 'lucide-react'` then `<Input iconLeft={Search} />`.
   */
  iconLeft?: LucideIcon
  /**
   * Lucide icon component rendered after the input. Ignored when `textRight` is set.
   * Import the icon from `lucide-react` and pass it directly.
   */
  iconRight?: LucideIcon
}

const dateTypes = new Set(['date', 'datetime-local', 'month', 'week', 'time'])

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      isError: isErrorProp = false,
      type,
      textLeft,
      textRight,
      iconLeft,
      iconRight,
      disabled: disabledProp,
      readOnly,
      id: idProp,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const autoId = useId()

    const id = field?.id ?? idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    const inputRef = useRef<HTMLInputElement>(null)

    const isDateType = dateTypes.has(type ?? '')
    const LeftIcon = !textLeft && iconLeft ? iconLeft : null
    const RightIcon = !textRight && iconRight ? iconRight : null

    const handleWrapperClick = () => {
      if (!disabled) {
        inputRef.current?.focus()
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: Wrapper delegates focus to input
      // biome-ignore lint/a11y/useKeyWithClickEvents: Input handles keyboard events
      <div className={cn(inputWrapperVariants({ size }), className)} onClick={handleWrapperClick}>
        {textLeft && <span className="st-input__text-left">{textLeft}</span>}
        {LeftIcon && <LeftIcon className="st-input__icon-left" aria-hidden="true" />}
        <input
          type={type}
          id={id}
          className={cn(inputVariants(), isDateType && 'st-input--date')}
          ref={mergeRefs(ref, inputRef)}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={isError || undefined}
          aria-required={field?.required || undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        />
        {textRight && <span className="st-input__text-right">{textRight}</span>}
        {RightIcon && <RightIcon className="st-input__icon-right" aria-hidden="true" />}
      </div>
    )
  },
)

Input.displayName = 'Input'
