// TypeScript declarations for scripts/sync-readme-components.mjs. Mirrors the
// lv1-slugs.d.mts / audit-coverage.d.mts pattern — the test imports the pure
// renderers from a .ts module, so a typed view is supplied here.

/** Render the "Available components" slug list (` · `-joined, ~70 cols/line). */
export function renderBlock(slugs: readonly string[]): string

/**
 * Render the per-component support matrix. lv2 components, when given, are
 * listed in their own React-only table after the lv1 table.
 */
export function renderMatrix(names: readonly string[], lv2Names?: readonly string[]): string
