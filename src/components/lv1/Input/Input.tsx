import { icons } from 'lucide-react'
import { forwardRef, type InputHTMLAttributes, useId, useRef } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { cn } from '../../../lib/utils'
import { type InputVariants, inputVariants, inputWrapperVariants } from '../../../variants/input'

export type IconName = keyof typeof icons

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
  /** Lucide icon name rendered before the input. Ignored when `textLeft` is set. */
  iconLeft?: IconName
  /** Lucide icon name rendered after the input. Ignored when `textRight` is set. */
  iconRight?: IconName
}

const dateTypes = new Set(['date', 'datetime-local', 'month', 'week', 'time'])

const iconSizeMap = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
} as const

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
    const LeftIcon = !textLeft && iconLeft ? icons[iconLeft] : null
    const RightIcon = !textRight && iconRight ? icons[iconRight] : null
    const iconSize = iconSizeMap[size ?? 'md']

    const handleWrapperClick = () => {
      if (!disabled) {
        inputRef.current?.focus()
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: Wrapper delegates focus to input
      // biome-ignore lint/a11y/useKeyWithClickEvents: Input handles keyboard events
      <div
        className={cn(
          inputWrapperVariants({ size }),
          isError
            ? 'border-error bg-error-subtle has-focus-visible:ring-error'
            : 'border-border-strong',
          disabled
            ? 'cursor-not-allowed bg-surface-disabled border-border-disabled text-foreground-disabled'
            : 'cursor-text',
          className,
        )}
        onClick={handleWrapperClick}
      >
        {textLeft && <span className="text-foreground-muted shrink-0">{textLeft}</span>}
        {LeftIcon && (
          <LeftIcon className={`text-foreground-muted shrink-0 ${iconSize}`} aria-hidden="true" />
        )}
        <input
          type={type}
          id={id}
          className={cn(
            inputVariants(),
            isDateType && '[&::-webkit-calendar-picker-indicator]:ml-auto',
          )}
          ref={mergeRefs(ref, inputRef)}
          disabled={disabled}
          aria-invalid={isError || undefined}
          aria-describedby={ariaDescribedBy}
          {...props}
        />
        {textRight && <span className="text-foreground-muted shrink-0">{textRight}</span>}
        {RightIcon && (
          <RightIcon className={`text-foreground-muted shrink-0 ${iconSize}`} aria-hidden="true" />
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
