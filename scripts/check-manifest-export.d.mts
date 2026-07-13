// TypeScript declarations for scripts/check-manifest-export.mjs. The .mjs
// file carries JSDoc annotations, but the Vitest test imports these helpers
// from a .ts module — an explicit .d.mts gives TypeScript a typed view of the
// exported symbols without converting the script to .ts (same rationale as
// scripts/generate-manifest.d.mts).

export const SURFACE_KEYS: readonly ['$schemaVersion', 'classes', 'dataAttributes', 'cssVariables']

export const DIST_ONLY_FIELDS: readonly ['package', 'version', 'generatedAt']

export const MANIFEST_SUBPATH: './schatten.manifest.json'

export function resolveExportTarget(pkgJson: Record<string, unknown>): string

export function validateDistManifest(distJson: unknown, snapshot: unknown): string[]
