import { type ReactNode, useId, useMemo } from 'react'
import { FieldSetContext, type FieldSetContextValue } from '../../../contexts/fieldset'
import { cn } from '../../../lib/utils'

export interface FieldSetProps {
  /** Legend text for the fieldset */
  legend: ReactNode
  /** Description text displayed below the legend */
  description?: ReactNode
  /** Error message to display (group-level) */
  error?: string
  /** Explicitly set error state. If not provided, derived from error prop */
  isError?: boolean
  /** Disable all child fields */
  disabled?: boolean
  /** FieldSet content (Field elements) */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

export function FieldSet({
  legend,
  description,
  error,
  isError: isErrorProp,
  disabled = false,
  children,
  className,
}: FieldSetProps) {
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

  const contextValue = useMemo<FieldSetContextValue>(() => ({ isError }), [isError])

  return (
    <FieldSetContext.Provider value={contextValue}>
      <fieldset
        className={cn('flex flex-col gap-4', className)}
        disabled={disabled}
        aria-describedby={describedBy}
        data-disabled={disabled || undefined}
        data-error={isError || undefined}
      >
        <div className="flex flex-col gap-0">
          <legend className="text-base font-medium text-foreground">{legend}</legend>
          {description && (
            <p id={descriptionId} className="text-sm text-foreground-muted">
              {description}
            </p>
          )}
        </div>
        {children}
        {error && (
          <p id={errorId} className="text-sm text-destructive">
            {error}
          </p>
        )}
      </fieldset>
    </FieldSetContext.Provider>
  )
}

FieldSet.displayName = 'FieldSet'
