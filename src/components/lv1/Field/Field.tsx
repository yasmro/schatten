import { type ReactNode, useId, useMemo } from 'react'
import { FieldContext, type FieldContextValue } from '../../../contexts/field'
import { useFieldSetContext } from '../../../contexts/fieldset'
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
  /** Flex grow factor for layout within FieldSet */
  flexGrow?: 0 | 1
  /** Flex shrink factor for layout within FieldSet */
  flexShrink?: 0 | 1
  /** Flex basis for layout within FieldSet (CSS value) */
  flexBasis?: string
  /** Field content (input element) */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
}

const flexGrowClasses = { 0: 'grow-0', 1: 'grow' } as const
const flexShrinkClasses = { 0: 'shrink-0', 1: 'shrink' } as const

export function Field({
  label,
  description,
  error,
  isError: isErrorProp,
  required = false,
  disabled = false,
  flexGrow,
  flexShrink,
  flexBasis,
  children,
  className,
}: FieldProps) {
  const fieldSet = useFieldSetContext()
  const id = useId()
  const descriptionId = `${id}-description`
  const errorId = `${id}-error`

  const isError = isErrorProp ?? (error ? true : undefined) ?? fieldSet?.isError ?? false

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
      <div
        className={cn(
          'flex flex-col gap-1.5',
          flexGrow !== undefined && flexGrowClasses[flexGrow],
          flexShrink !== undefined && flexShrinkClasses[flexShrink],
          className,
        )}
        style={flexBasis ? { flexBasis } : undefined}
        data-disabled={disabled || undefined}
      >
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
            className="-mt-1.5 mb-1 block text-sm text-foreground-muted"
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
