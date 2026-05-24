import { type ReactNode, useId, useMemo } from 'react'
import { FieldSetContext, type FieldSetContextValue } from '../../../contexts/fieldset'
import { cn } from '../../../lib/utils'
import { fieldsetChildrenVariants, fieldsetVariants } from '../../../variants/fieldset'
import './FieldSet.css'

export interface FieldSetProps {
  /** Legend text for the fieldset. Omit for layout-only grouping. */
  legend?: ReactNode
  /** Description text displayed below the legend. */
  description?: ReactNode
  /** Group-level error message displayed below the children. Setting this also implies `isError`. */
  error?: string
  /** Explicitly set error state. If not provided, derived from `error` prop presence. */
  isError?: boolean
  /**
   * Disable all child fields. Uses native `<fieldset disabled>` behavior, so all descendant
   * form controls are disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * Flex direction for children layout.
   * @default 'column'
   */
  direction?: 'row' | 'column'
  /**
   * Enable flex wrap for children. Useful with `direction="row"` for responsive layouts.
   * @default false
   */
  wrap?: boolean
  /** FieldSet content — typically `Field` elements (or nested `FieldSet`s). */
  children: ReactNode
  /** Additional CSS classes applied to the outer `<fieldset>`. */
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

  const contextValue = useMemo<FieldSetContextValue>(
    () => ({ isError, disabled }),
    [isError, disabled],
  )

  return (
    <FieldSetContext.Provider value={contextValue}>
      <fieldset
        className={cn(fieldsetVariants(), className)}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={isError || undefined}
        data-disabled={disabled || undefined}
        data-error={isError || undefined}
      >
        {legend && <legend className="st-fieldset__legend">{legend}</legend>}
        {description && (
          <p id={descriptionId} className="st-fieldset__description">
            {description}
          </p>
        )}
        <div className={fieldsetChildrenVariants({ direction, wrap })}>{children}</div>
        {error && (
          <p id={errorId} className="st-fieldset__error">
            {error}
          </p>
        )}
      </fieldset>
    </FieldSetContext.Provider>
  )
}

FieldSet.displayName = 'FieldSet'
