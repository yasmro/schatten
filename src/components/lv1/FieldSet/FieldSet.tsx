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
  /** Flex direction for children layout */
  direction?: 'row' | 'column'
  /** Enable flex wrap for children */
  wrap?: boolean
  /** Gap between children (Tailwind spacing scale: 0, 1, 2, 3, 4, etc.) */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
  /** FieldSet content (Field elements) */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

const gapClasses = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
} as const

export function FieldSet({
  legend,
  description,
  error,
  isError: isErrorProp,
  disabled = false,
  direction = 'column',
  wrap = false,
  gap = 4,
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
        className={cn('flex flex-col', className)}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={isError || undefined}
        data-disabled={disabled || undefined}
        data-error={isError || undefined}
      >
        <legend className="text-base font-medium text-foreground">{legend}</legend>
        {description && (
          <p id={descriptionId} className="text-sm text-foreground-muted">
            {description}
          </p>
        )}
        <div
          className={cn(
            'mt-4 flex',
            direction === 'row' ? 'flex-row' : 'flex-col',
            wrap && 'flex-wrap',
            gapClasses[gap],
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
