// TypeScript declarations for scripts/audit-coverage.mjs. Mirrors the
// pattern used by generate-manifest.d.mts — JSDoc lives in the .mjs file,
// but the test imports symbols from a .ts module, so a strongly-typed view
// is supplied here without forcing the script itself to .ts.

export type CellState = 'present' | 'missing' | 'exempt' | 'na'

export interface AuditFiles {
  readonly tsx: CellState
  readonly css: CellState
  readonly stories: CellState
  readonly test: CellState
  readonly vrt: CellState
  readonly index: CellState
  readonly snap: CellState
  readonly export: CellState
  readonly parityStories: CellState
  readonly parityVrt: CellState
  readonly paritySnap: CellState
}

export interface AuditRow {
  readonly name: string
  readonly files: AuditFiles
  readonly missing: readonly string[]
  readonly exempt: boolean
}

export interface AuditResult {
  readonly rows: readonly AuditRow[]
  readonly orphanedExports: readonly string[]
  /**
   * True when `src/components/lv2/` contains at least one direct
   * subdirectory (a real component, not just the empty placeholder).
   * Stays false while the dir exists but is empty — see
   * scripts/audit-coverage.mjs `runAudit` for the rationale.
   */
  readonly lv2HasComponents: boolean
}

export interface RenderTableOptions {
  readonly format?: 'markdown' | 'plain'
  readonly generatedAt?: string
  readonly orphanedExports?: readonly string[]
  readonly lv2HasComponents?: boolean
}

export interface RenderJsonOptions {
  readonly generatedAt?: string
}

export function discoverComponents(lv1Dir: string): string[]

export function parseExportedNames(indexPath: string): Set<string>

export function auditComponent(opts: {
  name: string
  componentDir: string
  exported: boolean
  exempt: boolean
}): AuditRow

export function renderTable(rows: readonly AuditRow[], opts?: RenderTableOptions): string

export function renderJson(rows: readonly AuditRow[], opts?: RenderJsonOptions): string

export function runAudit(projectDir: string): AuditResult

export function hasFailures(result: Pick<AuditResult, 'rows' | 'orphanedExports'>): boolean
