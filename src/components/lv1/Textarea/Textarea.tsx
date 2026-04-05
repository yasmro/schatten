import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type TextareaVariants, textareaVariants } from '../../../variants/textarea'

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextareaVariants {
  isError?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, isError = false, disabled, ...props }, ref) => {
    return (
      <textarea
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
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
