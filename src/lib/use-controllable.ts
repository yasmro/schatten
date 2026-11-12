import { useCallback, useState } from 'react'

/**
 * Controlled / uncontrolled state for one value. `controlled === undefined`
 * means uncontrolled. Shared by DateCalendar and the lv2 date pickers; Radix's
 * own hook is not public surface.
 */
export function useControllable<T>(
  controlled: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void,
): [T, (value: T) => void] {
  const [internal, setInternal] = useState(defaultValue)
  const value = controlled !== undefined ? controlled : internal

  const setValue = useCallback(
    (next: T) => {
      if (Object.is(next, value)) return
      if (controlled === undefined) setInternal(next)
      onChange?.(next)
    },
    [controlled, onChange, value],
  )

  return [value, setValue]
}
