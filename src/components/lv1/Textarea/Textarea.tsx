import { forwardRef, type TextareaHTMLAttributes, useId } from 'react'
import { useFieldContext } from '../../../lib/field-context'
import { cn } from '../../../lib/utils'
import { type TextareaVariants, textareaVariants } from '../../../variants/textarea'

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextareaVariants {
  isError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size,
      isError: isErrorProp = false,
      disabled,
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
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    return (
      <textarea
        id={id}
        className={cn(
          textareaVariants({ size }),
          isError
            ? 'border-destructive bg-destructive-subtle focus-visible:ring-destructive'
            : 'border-border-strong',
          className,
        )}
        ref={ref}
        disabled={disabled}
        aria-invalid={isError || undefined}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
