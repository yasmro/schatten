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
  /**
   * Non-screenshot Playwright interaction test — required for classification
   * C/D (== the parity-exempt set), `na` for A/B. See vrt-spec-guideline
   * §"区分 C/D (JS 必須) — a Playwright interaction test is REQUIRED".
   */
  readonly interaction: CellState
  readonly index: CellState
  readonly snap: CellState
  readonly export: CellState
  readonly cssApiFixture: CellState
  readonly parityStories: CellState
  readonly parityVrt: CellState
  readonly paritySnap: CellState
  /**
   * Advisory (non-blocking): a `forwardRef` component whose test asserts the
   * ref lands on the DOM node. `na` when the component is not a forwardRef.
   * See testing-guideline "ref reaches the underlying DOM node".
   */
  readonly refTest: CellState
  /**
   * Advisory (non-blocking): a `{...props}`-spreading component whose test
   * asserts `data-testid` pass-through. `na` when the component does not
   * spread props. See component-testid-guideline "Verifying compliance".
   */
  readonly testidTest: CellState
  /**
   * Advisory (non-blocking): a component in {@link ROLE_NAME_CONTRACT} whose
   * test asserts a `getByRole(<role>, { name })`. `na` when the component is
   * not in the map. See component-architecture §8.
   */
  readonly roleTest: CellState
}

export interface AuditRow {
  readonly name: string
  readonly files: AuditFiles
  readonly missing: readonly string[]
  /**
   * Advisory (non-blocking) test-existence gaps. Reported separately from
   * `missing` and NOT counted by `hasFailures` — a false positive here can
   * never fail `--check`.
   */
  readonly advisories: readonly string[]
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

/**
 * Components in parity classification C / D (per
 * .claude/rules/vrt-spec-guideline.md) that intentionally ship no parity
 * story+spec. Hand-maintained in alphabetical order; the contents are
 * pinned by scripts/__tests__/audit-coverage.test.ts.
 */
export const PARITY_EXEMPT: ReadonlySet<string>

/**
 * Components whose a11y contract exposes a role + accessible name on their own
 * primary element, mapped to that role. The advisory `roleTest` column is `na`
 * for any component not listed here. Hand-maintained in alphabetical order;
 * pinned by scripts/__tests__/audit-coverage.test.ts.
 */
export const ROLE_NAME_CONTRACT: Readonly<Record<string, string>>

/**
 * Components intentionally OUT of the `roleTest` gate (no role+accessible-name-
 * on-self contract). Together with {@link ROLE_NAME_CONTRACT} this forms an
 * exhaustive, disjoint partition of the lv1 tree — enforced by
 * {@link roleContractPartitionGaps} so a new component missing from both sets
 * fails CI instead of silently defaulting to `na`.
 */
export const ROLE_NAME_EXEMPT: ReadonlySet<string>

/**
 * Return the components that break the role-contract partition: `unclassified`
 * (in neither set) and `both` (in both). Empty arrays mean the partition is
 * exhaustive and disjoint.
 */
export function roleContractPartitionGaps(componentNames: readonly string[]): {
  unclassified: string[]
  both: string[]
}

/** True when the component source uses `forwardRef`. */
export function usesForwardRef(tsxSource: string): boolean

/** True when the component spreads `{...props}` / `{...rest}` onto its root. */
export function spreadsProps(tsxSource: string): boolean

/**
 * Heuristic: the test asserts a forwarded ref lands (`.current` assertion +
 * `ref={…}` / `createRef` / `useRef`).
 */
export function hasRefLandsTest(testSource: string): boolean

/**
 * Heuristic: the test references `data-testid` and asserts where it lands
 * (a *ByTestId query or a `data-testid` attribute assertion).
 */
export function hasTestidPassthroughTest(testSource: string): boolean

/**
 * Heuristic: the test has a `getByRole('<role>', { name … })`-shaped assertion
 * for the exact `role`.
 */
export function hasRoleNameTest(testSource: string, role: string): boolean

export function discoverComponents(lv1Dir: string): string[]

export function parseExportedNames(indexPath: string): Set<string>

/**
 * Collect every `data-component` slug from the shared CSS API vanilla-HTML
 * fixture. Returns `null` when the fixture file is absent (check skipped).
 */
export function parseFixtureSlugs(fixturePath: string): Set<string> | null

/**
 * Heuristic scan of every `*.vrt.spec.ts` in the component directory for a
 * test block that is neither a screenshot test (`toHaveScreenshot`) nor an
 * a11y test (`a11y` in the title).
 */
export function hasInteractionTest(componentDir: string): boolean

export function auditComponent(opts: {
  name: string
  componentDir: string
  exported: boolean
  exempt: boolean
  /**
   * Slugs declared in the CSS API fixture. `null`/omitted skips the fixture
   * check (the `cssApiFixture` column resolves to `na`).
   */
  fixtureSlugs?: Set<string> | null
}): AuditRow

export function renderTable(rows: readonly AuditRow[], opts?: RenderTableOptions): string

export function renderJson(rows: readonly AuditRow[], opts?: RenderJsonOptions): string

export function runAudit(projectDir: string): AuditResult

export function hasFailures(result: Pick<AuditResult, 'rows' | 'orphanedExports'>): boolean
