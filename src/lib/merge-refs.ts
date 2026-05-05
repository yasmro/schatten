import type { MutableRefObject, Ref, RefCallback } from 'react'

/**
 * Merges multiple refs into a single ref callback.
 * Useful when you need to use both a forwarded ref and an internal ref.
 */
export function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as MutableRefObject<T | null>).current = value
      }
    }
  }
}
