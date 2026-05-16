import { forwardRef, type TextareaHTMLAttributes, useId } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type TextareaVariants, textareaVariants } from '../../../variants/textarea'

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextareaVariants {
  /**
   * Size of the textarea.
   * @default 'md'
   */
  size?: TextareaVariants['size']
  /**
   * Displays the textarea in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size,
      isError: isErrorProp = false,
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

    return (
      <textarea
        id={id}
        className={cn(
          textareaVariants({ size }),
          isError
            ? 'border-error bg-error-subtle focus-visible:ring-error'
            : 'border-border-strong',
          readOnly && 'cursor-text bg-surface-readonly border-border-readonly',
          className,
        )}
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={isError || undefined}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
