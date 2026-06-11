import { createContext, useContext } from 'react'

export interface FieldContextValue {
  /** Input element id */
  id: string
  /**
   * Id of the `<label>` element Field renders. Consumed via `aria-labelledby`
   * by self-labelled components (Checkbox / Switch) when they have no own
   * `label`, and by group components (RadioGroup) at the group root —
   * `role="radiogroup"` cannot be named through `htmlFor`.
   * Undefined when Field has no `label` prop.
   */
  labelId?: string
  /** Error state */
  isError: boolean
  /** Disabled state */
  disabled: boolean
  /** aria-describedby id list */
  describedBy?: string
}

export const FieldContext = createContext<FieldContextValue | null>(null)

/**
 * Hook to access Field context values.
 * Returns null when used outside of a Field component.
 */
export function useFieldContext() {
  return useContext(FieldContext)
}
