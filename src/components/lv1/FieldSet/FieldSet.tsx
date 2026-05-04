import { type ReactNode, useId, useMemo } from 'react'
import { FieldSetContext, type FieldSetContextValue } from '../../../contexts/fieldset'
import { cn } from '../../../lib/utils'

export interface FieldSetProps {
  /** Legend text for the fieldset. Omit for layout-only grouping. */
  legend?: ReactNode
  /** Description text displayed below the legend */
  description?: ReactNode
  /** Error message to display (group-level) */
  error?: string
  /** Explicitly set error state. If not provided, derived from error prop */
  isError?: boolean
  /** Disable all child fields */
  disabled?: boolean
  /** Flex direction for children layout */
  direction?: 'row' | 'column'
  /** Enable flex wrap for children */
  wrap?: boolean
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
  direction = 'column',
  wrap = false,
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

  const hasHeader = legend || description

  return (
    <FieldSetContext.Provider value={contextValue}>
      <fieldset
        className={cn('flex flex-col', className)}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={isError || undefined}
        data-disabled={disabled || undefined}
        data-error={isError || undefined}
      >
        {legend && (
          <legend className={cn('text-base font-medium text-foreground', disabled && 'opacity-50')}>
            {legend}
          </legend>
        )}
        {description && (
          <p
            id={descriptionId}
            className={cn('text-sm text-foreground-muted', disabled && 'opacity-50')}
          >
            {description}
          </p>
        )}
        <div
          className={cn(
            'flex gap-4',
            hasHeader && 'mt-4',
            direction === 'row' ? 'flex-row' : 'flex-col',
            wrap && 'flex-wrap',
          )}
        >
          {children}
        </div>
        {error && (
          <p id={errorId} className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}
      </fieldset>
    </FieldSetContext.Provider>
  )
}

FieldSet.displayName = 'FieldSet'
