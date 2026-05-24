import { Info } from 'lucide-react'
import { type ReactNode, useId, useMemo } from 'react'
import { FieldContext, type FieldContextValue } from '../../../contexts/field'
import { useFieldSetContext } from '../../../contexts/fieldset'
import { cn } from '../../../lib/utils'
import { fieldVariants } from '../../../variants/field'
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip/Tooltip'
import './Field.css'

export interface FieldProps {
  /** Label text for the field. Associated with the input via `htmlFor`. */
  label?: ReactNode
  /** Description text displayed above the input. Linked via `aria-describedby`. */
  description?: ReactNode
  /** Tooltip content displayed on hover of an info icon next to the label. */
  tooltip?: ReactNode
  /** Error message displayed below the input. Setting this also implies `isError`. */
  error?: string
  /**
   * Explicitly set error state.
   * If not provided, derived from `error` prop presence (or inherited from a parent `FieldSet`).
   */
  isError?: boolean
  /**
   * Show required indicator (`*`) next to the label.
   * @default false
   */
  required?: boolean
  /**
   * Disable the field. Propagates to child components via context.
   * @default false
   */
  disabled?: boolean
  /** Flex grow factor for layout within a `FieldSet`. */
  flexGrow?: 0 | 1
  /** Flex shrink factor for layout within a `FieldSet`. */
  flexShrink?: 0 | 1
  /** Flex basis for layout within a `FieldSet` (CSS value, e.g. `"12rem"`). */
  flexBasis?: string
  /** Field content — typically a single input element (Input / Select / Textarea / Switch / RadioGroup). */
  children: ReactNode
  /** Additional CSS classes applied to the outer wrapper. */
  className?: string
}

const flexGrowClasses = { 0: 'st-field--grow-0', 1: 'st-field--grow' } as const
const flexShrinkClasses = { 0: 'st-field--shrink-0', 1: 'st-field--shrink' } as const

export function Field({
  label,
  description,
  tooltip,
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
  const effectiveDisabled = disabled || fieldSet?.disabled || false

  const describedBy = useMemo(() => {
    const ids: string[] = []
    if (description) ids.push(descriptionId)
    if (error) ids.push(errorId)
    return ids.length > 0 ? ids.join(' ') : undefined
  }, [description, error, descriptionId, errorId])

  const contextValue = useMemo<FieldContextValue>(
    () => ({ id, isError, disabled: effectiveDisabled, describedBy }),
    [id, isError, effectiveDisabled, describedBy],
  )

  return (
    <FieldContext.Provider value={contextValue}>
      <div
        className={cn(
          fieldVariants(),
          flexGrow !== undefined && flexGrowClasses[flexGrow],
          flexShrink !== undefined && flexShrinkClasses[flexShrink],
          className,
        )}
        style={flexBasis ? { flexBasis } : undefined}
        data-disabled={effectiveDisabled || undefined}
        data-error={isError || undefined}
      >
        {label && (
          <div className="st-field__label-row">
            <label htmlFor={id} className="st-field__label">
              {label}
              {required && <span className="st-field__required-marker">*</span>}
            </label>
            {tooltip && (
              <Tooltip>
                <TooltipTrigger>
                  <Info className="st-field__info" aria-label="More information" />
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
              </Tooltip>
            )}
          </div>
        )}
        {description && (
          <label htmlFor={id} id={descriptionId} className="st-field__description">
            {description}
          </label>
        )}
        {children}
        {error && (
          <p id={errorId} className="st-field__error">
            {error}
          </p>
        )}
      </div>
    </FieldContext.Provider>
  )
}

Field.displayName = 'Field'
