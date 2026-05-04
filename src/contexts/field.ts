import { createContext, useContext } from 'react'

export interface FieldContextValue {
  /** Input element id */
  id: string
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
