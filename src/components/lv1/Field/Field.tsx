import { type ReactNode, useId, useMemo } from 'react'
import { FieldContext, type FieldContextValue } from '../../../contexts/field'
import { cn } from '../../../lib/utils'

export interface FieldProps {
  /** Label text for the field */
  label?: ReactNode
  /** Description text displayed above the input */
  description?: ReactNode
  /** Error message to display */
  error?: string
  /** Explicitly set error state. If not provided, derived from error prop */
  isError?: boolean
  /** Show required indicator (*) */
  required?: boolean
  /** Disable the field */
  disabled?: boolean
  /** Field content (input element) */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

export function Field({
  label,
  description,
  error,
  isError: isErrorProp,
  required = false,
  disabled = false,
  children,
  className,
}: FieldProps) {
  const id = useId()
  const descriptionId = `${id}-description`
  const errorId = `${id}-error`

  const isError = isErrorProp ?? !!error

  const describedBy = useMemo(() => {
    const ids: string[] = []
    if (description) ids.push(descriptionId)
    if (error) ids.push(errorId)
    return ids.length > 0 ? ids.join(' ') : undefined
  }, [description, error, descriptionId, errorId])

  const contextValue = useMemo<FieldContextValue>(
    () => ({ id, isError, disabled, describedBy }),
    [id, isError, disabled, describedBy],
  )

  return (
    <FieldContext.Provider value={contextValue}>
      <div className={cn('flex flex-col gap-1.5', className)} data-disabled={disabled || undefined}>
        {label && (
          <label htmlFor={id} className="text-base font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-0.5">*</span>}
          </label>
        )}
        {description && !error && (
          <label
            htmlFor={id}
            id={descriptionId}
            className="-mt-1.5 mb-1 block text-sm text-foreground-muted cursor-pointer"
          >
            {description}
          </label>
        )}
        {children}
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
    </FieldContext.Provider>
  )
}

Field.displayName = 'Field'
