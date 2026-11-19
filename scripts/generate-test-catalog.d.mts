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

export type AspectStatus = 'prepared' | 'missing' | 'na'

export function aspectStatuses(entry: {
  unit: unknown[]
  screenshots: { screenshot: string[]; a11y: string[] }[]
  interactions: unknown[]
  aspects: {
    behaviour: { required: { ok: boolean }[] }
    a11y: { role: string | null; roleTest: boolean | null }
    visual: { notInRoster: { skip: string }[] }
    interaction: { required: boolean }
    parity: { required: boolean; present: boolean }
  }
}): Record<'behaviour' | 'a11y' | 'visual' | 'interaction' | 'parity', AspectStatus>

export function serializeCatalog(catalog: Record<string, unknown>): string

export function generateCatalog(): string
