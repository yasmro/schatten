// TypeScript declarations for scripts/check-harness-sync.mjs. The .mjs
// carries JSDoc-typed annotations, but typed consumers
// (scripts/__tests__/check-harness-sync.test.ts) import the helpers from a
// .ts module — an explicit .d.mts gives TypeScript a strongly-typed view
// without converting the script to .ts. Mirrors the lv1-slugs.d.mts /
// check-manifest-export.d.mts pattern.

/** Repo-relative path of the vanilla-HTML verification harness. */
export const HARNESS_REL: string

/** Collect every `data-component="<slug>"` slug in the harness source. */
export function parseHarnessSlugs(source: string): Set<string>

/**
 * Diff the on-disk lv1 slug set against the harness slug set. `missing` =
 * lv1 with no harness sample; `orphaned` = harness sample with no matching
 * lv1. Both sorted.
 */
export function diffHarnessSlugs(
  lv1Slugs: Iterable<string>,
  harnessSlugs: Set<string>,
): { missing: string[]; orphaned: string[] }
