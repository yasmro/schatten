// TypeScript declarations for scripts/generate-test-catalog.mjs, so the Vitest
// test can import its helpers from a .ts module (same rationale as
// scripts/check-manifest-export.d.mts).

export const CATALOG_PATH: 'src/docs/__generated__/test-catalog.json'

export function componentOf(relPath: string): { level: string; name: string } | null

export function parseUnitName(name: string): { group: string; title: string }

export function classifySpecTitle(
  title: string,
):
  | { kind: 'screenshot' | 'a11y'; story: string; theme: string }
  | { kind: 'interaction' }

export function storyIdsFromSource(source: string): string[]

export function skipReason(
  storyId: string,
  specSource: string,
): 'by rule' | 'documented' | 'undocumented'

export function serializeCatalog(catalog: Record<string, unknown>): string

export function generateCatalog(): string
