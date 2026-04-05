import { icons } from 'lucide-react'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type InputVariants, inputVariants, inputWrapperVariants } from '../../../variants/input'

export type IconName = keyof typeof icons

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants {
  isError?: boolean
  textLeft?: string
  textRight?: string
  iconLeft?: IconName
  iconRight?: IconName
}

const dateTypes = new Set(['date', 'datetime-local', 'month', 'week', 'time'])

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      isError = false,
      type,
      textLeft,
      textRight,
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDateType = dateTypes.has(type ?? '')
    const LeftIcon = !textLeft && iconLeft ? icons[iconLeft] : null
    const RightIcon = !textRight && iconRight ? icons[iconRight] : null

    return (
      <div
        className={cn(
          inputWrapperVariants({ size }),
          isError
            ? 'border-destructive bg-destructive-subtle has-focus-visible:ring-destructive'
            : 'border-border-strong',
          disabled && 'cursor-not-allowed opacity-50',
          className,
        )}
      >
        {textLeft && <span className="text-foreground-muted shrink-0">{textLeft}</span>}
        {LeftIcon && (
          <LeftIcon className="text-foreground-muted shrink-0 size-4" aria-hidden="true" />
        )}
        <input
          type={type}
          className={cn(
            inputVariants(),
            isDateType && '[&::-webkit-calendar-picker-indicator]:ml-auto',
          )}
          ref={ref}
          disabled={disabled}
          aria-invalid={isError || undefined}
          {...props}
        />
        {textRight && <span className="text-foreground-muted shrink-0">{textRight}</span>}
        {RightIcon && (
          <RightIcon className="text-foreground-muted shrink-0 size-4" aria-hidden="true" />
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
