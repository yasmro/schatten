import { createContext, useContext } from 'react'

export interface FieldSetContextValue {
  /** Error state from the parent FieldSet */
  isError: boolean
}

export const FieldSetContext = createContext<FieldSetContextValue | null>(null)

/**
 * Hook to access FieldSet context values.
 * Returns null when used outside of a FieldSet component.
 */
export function useFieldSetContext() {
  return useContext(FieldSetContext)
}
