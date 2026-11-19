/**
 * Joins `aria-describedby` id lists in order, without empties or duplicates.
 * Returns undefined when none is left, so the attribute is omitted.
 */
export function mergeIds(...lists: (string | undefined)[]): string | undefined {
  const ids = new Set(lists.flatMap((list) => list?.split(/\s+/) ?? []).filter(Boolean))
  return ids.size > 0 ? [...ids].join(' ') : undefined
}
