#!/usr/bin/env node
// Scan every lv1 component and report the coverage of the required
// companion files (tsx / css / stories / test / vrt / index / __snapshots__
// baseline / barrel re-export, plus parity story+spec for the components
// in classification A/B per .claude/rules/vrt-spec-guideline.md
// §"Parity stories — when to write one, when to skip", plus a
// non-screenshot Playwright interaction test for classification C/D per
// §"区分 C/D (JS 必須) — a Playwright interaction test is REQUIRED").
//
// This is the *library-wide periodic* counterpart to the existing
// edit-trigger / session-end hooks:
//   - scripts/check-lv1-companions.mjs (PostToolUse, single component)
//   - scripts/check-lv1-export-integrity.mjs (Stop, export integrity only)
// Those run automatically on a narrow signal; this script is invoked on
// demand to surface the *current* coverage state for the whole lv1 tree.
//
// CLI:
//   node scripts/audit-coverage.mjs                 # markdown table, exit 0
//   node scripts/audit-coverage.mjs --check         # exit 1 on missing required file
//   node scripts/audit-coverage.mjs --json          # machine-readable JSON
//   node scripts/audit-coverage.mjs --format=plain  # plain text (no markdown)
//
// The pure functions below are exported so scripts/__tests__/audit-coverage.test.ts
// can pin behaviour with fixture I/O.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const LV1_DIR_REL = 'src/components/lv1'
const LV2_DIR_REL = 'src/components/lv2'
const INDEX_FILE_REL = 'src/components/lv1/index.ts'
// Shared CSS API fixtures, paired by `data-component` slug:
//  - `.html.ts` — the string SSOT `src/docs/CSSApiDist.vrt.spec.ts`
//    auto-discovers every lv1 against (each `{X}.tsx` + `{X}.css` component
//    must have a `<section data-component="<slug>">` or the dist-CSS VRT throws).
//  - `.tsx` — the React companion the `parity-comparison` story renders; it
//    must mirror the `.html.ts` sections (区分 C/D render an "omitted"
//    placeholder, but the section still exists).
// The `cssApiFixture` column requires the slug in BOTH (the `.tsx`-only check
// catches the silent drift that nothing else does — e.g. `popover` was in
// `.html.ts` but missing from `.tsx`). The `check-lv1-companions` hook warns at
// edit time; this audit is the PR-time blocking gate (#36).
const CSSAPI_FIXTURE_HTML_REL = 'src/docs/__fixtures__/cssApiSamples.html.ts'
const CSSAPI_FIXTURE_TSX_REL = 'src/docs/__fixtures__/cssApiSamples.tsx'
const DATA_COMPONENT_RE = /data-component="([^"]+)"/g

// Components that intentionally do NOT ship parity stories/specs. The
// canonical reasoning is in .claude/rules/vrt-spec-guideline.md
// §"Parity stories — when to write one, when to skip": classification
// C (Tooltip — static rendering but JS-driven positioning) and D
// (Dialog / DropdownMenu / Popover / Select / Tabs / Toast — JS-required
// compound behaviour) have no
// realistic vanilla-HTML use case for the .st-* class chain alone, so
// the parity story would be performative. (Tabs renders inline rather
// than in a portal, so its static shape IS pinned — but via the shared
// CSSApi parity grid, not a per-component parity story; #44.)
//
// MAINTENANCE: when a new lv1 lands that is classification C or D,
// add it here (alphabetically). The add-lv1-component skill keeps this
// set in sync automatically — its Step 2 区分 question routes a C/D
// component to an alphabetical insert here instead of generating the
// parity story+spec (see .claude/skills/add-lv1-component/SKILL.md
// Step 3 item 7). The hard-code is acceptable today because the set is
// small (7 components) and the source of truth lives in the rule doc
// next door. If lv1 count grows past ~30 and tracking gets noisy,
// promote to a `// schatten-classification: B` header comment that
// gets parsed.
export const PARITY_EXEMPT = new Set([
  'Avatar',
  'Dialog',
  'DropdownMenu',
  'Popover',
  'Select',
  'Tabs',
  'Toast',
  'Tooltip',
])

// Match `from './<name>'` / `from "./<name>"`. Same shape as
// scripts/check-lv1-export-integrity.mjs — kept in sync deliberately.
const FROM_RE = /from\s+['"]\.\/([^'"/.]+)['"]/g

// ── Test-existence advisory checks ───────────────────────────────────
// The required-companion columns above verify that the *files* exist. These
// three heuristic columns go one level deeper: they check that the required
// *common-case unit test* the guidelines demand is actually present inside
// `{Name}.test.tsx`. They are ADVISORY (non-blocking) — reported and glyphed
// distinctly, but never fed into `row.missing` / `hasFailures`, so a false
// positive can't fail a PR. This mirrors the repo's staged-gate promotion
// pattern (#307 audit job Phase 1 → Phase 2; #346 a11y): land the signal as a
// warn column, confirm it catches the known backlog, then promote to blocking
// in a follow-up issue.
//
// The three contracts, each sourced from a `.claude/rules/` doc:
//   1. ref-lands  — testing-guideline "ref reaches the underlying DOM node".
//   2. testid     — component-testid-guideline "Verifying compliance" step 2.
//   3. role+name  — component-architecture §8 / testing-guideline "query by
//                   role first" (a `getByRole(<role>, { name })` assertion).
//
// grep-based heuristics have unavoidable false positives; the direction is
// chosen to be safe (a component that genuinely has the test is never flagged;
// an unusual test shape may over-flag, which is advisory noise, not a failure).

// `forwardRef(` in the component source → a ref-lands test is expected.
const FORWARD_REF_RE = /\bforwardRef\b/
// `{...props}` / `{...rest}` spread → a data-testid pass-through test is expected.
const SPREAD_PROPS_RE = /\{\s*\.\.\.(?:props|rest)\s*\}/
// A `.current` assertion together with a ref actually handed to the component
// (JSX `ref={…}`) or a React ref factory (`createRef` / `useRef`). Both halves
// are required so a stray `.current` elsewhere isn't mistaken for a ref test.
const REF_CURRENT_RE = /\.current\b/
const REF_SETUP_RE = /ref=\{|\bcreateRef\b|\buseRef\b/
// The `data-testid` prop appears AND an assertion latches onto it — either a
// *ByTestId query or a direct `getAttribute`/`toHaveAttribute('data-testid')`.
const TESTID_PROP_RE = /data-testid/
const TESTID_ASSERT_RE =
  /(?:get|find|query)(?:All)?ByTestId|(?:getAttribute|toHaveAttribute)\(\s*['"]data-testid/

// Components whose a11y contract (component-architecture §8) is a queryable
// role + accessible name ON THEIR OWN primary element, mapped to that role.
// The role+name column is `na` for any component NOT listed here — components
// with no accessible-name contract (Separator / Skeleton / Avatar / Field /
// Card / Icon / Table) and compound/portal wrappers whose *own* role is not
// the primary test surface (Select trigger / Tooltip / Popover / Toast /
// DropdownMenu container) are intentionally omitted rather than over-flagged.
// The distinction the map captures: a `getByRole(role, { name })` on the
// component's OWN element — e.g. Dialog's test asserts its footer *buttons* by
// name but never `getByRole('dialog', { name })`, so the dialog frame's own
// name goes untested and the map flags it.
//
// Deliberately EXCLUDED even though they carry a role: `Spinner` (its
// `role="status"` is a live region whose meaning is the visually-hidden label
// *content*, not an accessible name — `status` does not support name-from-
// content, so a `getByRole('status', { name })` assertion is neither
// achievable nor the right contract; Spinner's coverage is `getByRole('status')`
// + `getByText(label)`). Add such a component here only when a
// `getByRole(role, { name })` genuinely applies.
//
// MAINTENANCE: hand-maintained in alphabetical order, mirroring PARITY_EXEMPT.
// When a new lv1 lands that exposes a role + accessible name on its own root,
// add it here; otherwise leave it out (the column stays `na`, advisory-safe).
// Pinned by scripts/__tests__/audit-coverage.test.ts.
export const ROLE_NAME_CONTRACT = /** @type {const} */ ({
  Badge: 'img',
  Button: 'button',
  Checkbox: 'checkbox',
  Dialog: 'dialog',
  FieldSet: 'group',
  Input: 'textbox',
  Radio: 'radio',
  Switch: 'switch',
  Text: 'heading',
  Textarea: 'textbox',
})

/**
 * True when the component source uses `forwardRef` (→ testing-guideline
 * requires a ref-lands test).
 * @param {string} tsxSource
 */
export function usesForwardRef(tsxSource) {
  return FORWARD_REF_RE.test(tsxSource)
}

/**
 * True when the component spreads `{...props}` / `{...rest}` onto its root (→
 * component-testid-guideline requires a data-testid pass-through test).
 * @param {string} tsxSource
 */
export function spreadsProps(tsxSource) {
  return SPREAD_PROPS_RE.test(tsxSource)
}

/**
 * Heuristic: the test contains a `.current` assertion AND a ref was handed to
 * the component (`ref={…}` / `createRef` / `useRef`). Matches the repo's two
 * ref-lands idioms — the manual `{ current: null }` object and the
 * `createRef()` factory. See testing-guideline "ref reaches the underlying
 * DOM node".
 * @param {string} testSource
 */
export function hasRefLandsTest(testSource) {
  return REF_CURRENT_RE.test(testSource) && REF_SETUP_RE.test(testSource)
}

/**
 * Heuristic: the test references `data-testid` AND asserts where it lands
 * (a *ByTestId query, or `getAttribute`/`toHaveAttribute('data-testid', …)`).
 * See component-testid-guideline "Verifying compliance" step 2.
 * @param {string} testSource
 */
export function hasTestidPassthroughTest(testSource) {
  return TESTID_PROP_RE.test(testSource) && TESTID_ASSERT_RE.test(testSource)
}

/**
 * Heuristic: the test has a `getByRole('<role>', { name … })`-shaped assertion
 * (any of get/find/query, singular or All) for the exact `role`. The closing
 * quote in the role class prevents `radiogroup` from matching a `radio`
 * contract. See component-architecture §8 / testing-guideline "query by role
 * first".
 * @param {string} testSource
 * @param {string} role
 */
export function hasRoleNameTest(testSource, role) {
  // Quote class covers ' " ` so template-literal role args are matched too.
  const re = new RegExp(
    `(?:get|find|query)(?:All)?ByRole\\(\\s*['"\`]${role}['"\`]\\s*,\\s*\\{\\s*name`,
  )
  return re.test(testSource)
}

const REQUIRED_KEYS = /** @type {const} */ ([
  'tsx',
  'css',
  'stories',
  'test',
  'vrt',
  'interaction',
  'index',
  'snap',
  'export',
  'cssApiFixture',
])
const PARITY_KEYS = /** @type {const} */ (['parityStories', 'parityVrt', 'paritySnap'])
// Advisory (non-blocking) test-existence columns — see the block above. These
// feed `row.advisories`, never `row.missing`, and render with a distinct warn
// glyph so a reviewer can tell them apart from the blocking required columns.
const ADVISORY_KEYS = /** @type {const} */ (['refTest', 'testidTest', 'roleTest'])

/**
 * @typedef {'present' | 'missing' | 'exempt' | 'na'} CellState
 *
 * @typedef {{
 *   tsx: CellState,
 *   css: CellState,
 *   stories: CellState,
 *   test: CellState,
 *   vrt: CellState,
 *   interaction: CellState,
 *   index: CellState,
 *   snap: CellState,
 *   export: CellState,
 *   cssApiFixture: CellState,
 *   parityStories: CellState,
 *   parityVrt: CellState,
 *   paritySnap: CellState,
 *   refTest: CellState,
 *   testidTest: CellState,
 *   roleTest: CellState,
 * }} AuditFiles
 *
 * @typedef {{
 *   name: string,
 *   files: AuditFiles,
 *   missing: string[],
 *   advisories: string[],
 *   exempt: boolean,
 * }} AuditRow
 */

/**
 * Enumerate direct subdirectories of `lv1Dir`. Files (`index.ts`, etc.)
 * are skipped. A non-existent directory yields `[]`.
 *
 * @param {string} lv1Dir absolute path
 * @returns {string[]} sorted directory names
 */
export function discoverComponents(lv1Dir) {
  if (!existsSync(lv1Dir)) return []
  return readdirSync(lv1Dir)
    .filter((entry) => {
      const full = path.join(lv1Dir, entry)
      try {
        return statSync(full).isDirectory()
      } catch {
        return false
      }
    })
    .sort()
}

/**
 * Parse `src/components/lv1/index.ts` and collect every `from './<name>'`
 * specifier as a Set. Matches scripts/check-lv1-export-integrity.mjs's
 * regex so the two views agree on what counts as "exported".
 *
 * @param {string} indexPath absolute path to index.ts
 * @returns {Set<string>}
 */
export function parseExportedNames(indexPath) {
  if (!existsSync(indexPath)) return new Set()
  const source = readFileSync(indexPath, 'utf8')
  /** @type {Set<string>} */
  const names = new Set()
  // Reset state on the shared regex before each call.
  FROM_RE.lastIndex = 0
  let m
  while ((m = FROM_RE.exec(source)) !== null) names.add(m[1])
  return names
}

/**
 * Collect every `data-component="<slug>"` slug declared in the shared CSS API
 * vanilla-HTML fixture. Returns `null` when the fixture file is absent, which
 * `auditComponent` treats as "skip the fixture check" — so a temp tree without
 * the docs fixture (unit tests) is unaffected, while the real repo (where the
 * file always exists) gets an active gate.
 *
 * @param {string} fixturePath absolute path to cssApiSamples.html.ts
 * @returns {Set<string> | null}
 */
export function parseFixtureSlugs(fixturePath) {
  if (!existsSync(fixturePath)) return null
  const source = readFileSync(fixturePath, 'utf8')
  /** @type {Set<string>} */
  const slugs = new Set()
  DATA_COMPONENT_RE.lastIndex = 0
  let m
  while ((m = DATA_COMPONENT_RE.exec(source)) !== null) slugs.add(m[1])
  return slugs
}

// Splits a spec source at every `test(` callsite; each fragment approximates
// one test block (title + body up to the next `test(`). `\btest\(` skips
// `test.describe(` / `expect(...).test` shapes and prose like "unit tests (".
const TEST_BLOCK_SPLIT_RE = /(?=\btest\()/
const TEST_TITLE_RE = /^test\(\s*(['"`])([\s\S]*?)\1/

/**
 * Heuristic for the 区分 C/D requirement (vrt-spec-guideline §"区分 C/D
 * (JS 必須) — a Playwright interaction test is REQUIRED"): scan every
 * `*.vrt.spec.ts` in the component directory (including a separate
 * `{Name}.interaction.vrt.spec.ts` like DropdownMenu's) for at least one
 * test block that is neither a screenshot test (`toHaveScreenshot`) nor an
 * a11y test (`a11y` in the title — the same marker `pnpm test:a11y` greps).
 * Pinned to the repo's spec conventions; a `test(` whose body merely
 * *mentions* toHaveScreenshot in a comment would be a false negative, which
 * is the safe direction (audit asks for a real interaction test).
 *
 * @param {string} componentDir absolute path
 * @returns {boolean}
 */
export function hasInteractionTest(componentDir) {
  /** @type {string[]} */
  let specs = []
  try {
    specs = readdirSync(componentDir).filter((f) => f.endsWith('.vrt.spec.ts'))
  } catch {
    return false
  }
  for (const file of specs) {
    let source = ''
    try {
      source = readFileSync(path.join(componentDir, file), 'utf8')
    } catch {
      continue
    }
    const blocks = source.split(TEST_BLOCK_SPLIT_RE).filter((b) => b.startsWith('test('))
    for (const block of blocks) {
      const title = block.match(TEST_TITLE_RE)?.[2] ?? ''
      if (title.includes('a11y')) continue
      if (!block.includes('toHaveScreenshot')) return true
    }
  }
  return false
}

/**
 * Audit a single component directory. The I/O surface is small —
 * callers wire `componentDir` (absolute path) and the `exported` /
 * `exempt` booleans, so this function is straightforward to unit-test.
 *
 * @param {{
 *   name: string,
 *   componentDir: string,
 *   exported: boolean,
 *   exempt: boolean,
 *   fixtureSlugs?: Set<string> | null,
 * }} opts `fixtureSlugs` is the set of `data-component` slugs in the CSS API
 *   fixture; `null`/omitted skips the fixture check (→ `na`).
 * @returns {AuditRow}
 */
export function auditComponent({ name, componentDir, exported, exempt, fixtureSlugs = null }) {
  const tsxPath = path.join(componentDir, `${name}.tsx`)
  const tsxPresent = existsSync(tsxPath)

  // Without {Name}.tsx the directory is not a complete component — every
  // other column collapses to `na` rather than `missing`, to avoid
  // drowning the report in cascading red entries for a WIP scaffold.
  const present = (file) => existsSync(path.join(componentDir, file))
  const cell = (p) => (p ? 'present' : 'missing')

  /** @type {AuditFiles} */
  const files = {
    tsx: cell(tsxPresent),
    css: 'na',
    stories: 'na',
    test: 'na',
    vrt: 'na',
    interaction: 'na',
    index: 'na',
    snap: 'na',
    export: 'na',
    cssApiFixture: 'na',
    parityStories: 'na',
    parityVrt: 'na',
    paritySnap: 'na',
    refTest: 'na',
    testidTest: 'na',
    roleTest: 'na',
  }

  if (tsxPresent) {
    files.css = cell(present(`${name}.css`))
    files.stories = cell(present(`${name}.stories.tsx`))
    files.test = cell(present(`${name}.test.tsx`))
    files.vrt = cell(present(`${name}.vrt.spec.ts`))
    // 区分 C/D (== the parity-exempt set: interactive, JS-required) must ship
    // a non-screenshot Playwright interaction test; 区分 A/B stay `na` — their
    // real-browser contract is pinned by the parity series instead.
    files.interaction = exempt ? cell(hasInteractionTest(componentDir)) : 'na'
    files.index = cell(present('index.ts'))
    files.snap = cell(countSnapshots(componentDir, (n) => !n.startsWith('parity-')) >= 1)
    files.export = cell(exported)

    // The CSS API fixture is required only once the component has a `.css`,
    // because CSSApiDist discovers `{X}.tsx` + `{X}.css` dirs (the same
    // condition `scripts/lv1-slugs.mjs` `discoverLv1WithCss()` encodes — kept
    // in sync by convention, mirroring CSSApiDist's own comment). With no
    // fixture file present (`fixtureSlugs === null`) the check is skipped (`na`).
    files.cssApiFixture =
      fixtureSlugs && files.css === 'present'
        ? cell(fixtureSlugs.has(name.toLowerCase()))
        : 'na'

    if (exempt) {
      files.parityStories = 'exempt'
      files.parityVrt = 'exempt'
      files.paritySnap = 'exempt'
    } else {
      files.parityStories = cell(present(`${name}.parity.stories.tsx`))
      files.parityVrt = cell(present(`${name}.parity.vrt.spec.ts`))
      files.paritySnap = cell(countSnapshots(componentDir, (n) => n.startsWith('parity-')) >= 1)
    }

    // Advisory (non-blocking) test-existence columns. Each is `na` unless the
    // component's own shape makes the test *required*: refTest only for
    // forwardRef components, testidTest only for `{...props}`-spreading ones,
    // roleTest only for components in ROLE_NAME_CONTRACT. Read the sources
    // once; a missing test file yields empty strings → the applicable column
    // resolves to `missing` (the `test` column above already flags the file).
    const tsxSource = readFileSync(tsxPath, 'utf8')
    const testSource = present(`${name}.test.tsx`)
      ? readFileSync(path.join(componentDir, `${name}.test.tsx`), 'utf8')
      : ''
    files.refTest = usesForwardRef(tsxSource)
      ? cell(hasRefLandsTest(testSource))
      : 'na'
    files.testidTest = spreadsProps(tsxSource)
      ? cell(hasTestidPassthroughTest(testSource))
      : 'na'
    const contractRole = /** @type {Record<string, string>} */ (ROLE_NAME_CONTRACT)[name]
    files.roleTest = contractRole
      ? cell(hasRoleNameTest(testSource, contractRole))
      : 'na'
  }

  /** @type {string[]} */
  const missing = []
  if (files.tsx === 'missing') missing.push(`${name}.tsx`)
  if (files.css === 'missing') missing.push(`${name}.css`)
  if (files.stories === 'missing') missing.push(`${name}.stories.tsx`)
  if (files.test === 'missing') missing.push(`${name}.test.tsx`)
  if (files.vrt === 'missing') missing.push(`${name}.vrt.spec.ts`)
  if (files.interaction === 'missing') {
    missing.push(
      `non-screenshot Playwright interaction test in a *.vrt.spec.ts (区分 C/D — vrt-spec-guideline)`,
    )
  }
  if (files.index === 'missing') missing.push('index.ts')
  if (files.snap === 'missing') missing.push('__snapshots__/*.png (no baseline captured)')
  if (files.export === 'missing') missing.push('src/components/lv1/index.ts re-export')
  if (files.cssApiFixture === 'missing') {
    missing.push(
      `<section data-component="${name.toLowerCase()}"> in src/docs/__fixtures__/cssApiSamples.html.ts + .tsx`,
    )
  }
  if (files.parityStories === 'missing') missing.push(`${name}.parity.stories.tsx`)
  if (files.parityVrt === 'missing') missing.push(`${name}.parity.vrt.spec.ts`)
  if (files.paritySnap === 'missing') missing.push('__snapshots__/parity-*.png (no parity baseline)')

  // Advisory (non-blocking) — deliberately NOT merged into `missing`, so a
  // false positive never fails `--check` / `hasFailures`.
  /** @type {string[]} */
  const advisories = []
  if (files.refTest === 'missing') {
    advisories.push(
      `ref-lands test in ${name}.test.tsx — forwardRef but no \`ref.current\`/\`.current\` assertion (testing-guideline "ref reaches the underlying DOM node")`,
    )
  }
  if (files.testidTest === 'missing') {
    advisories.push(
      `data-testid pass-through test in ${name}.test.tsx — spreads \`{...props}\` but no \`data-testid\` + testid/attribute assertion (component-testid-guideline "Verifying compliance" step 2)`,
    )
  }
  if (files.roleTest === 'missing') {
    const role = /** @type {Record<string, string>} */ (ROLE_NAME_CONTRACT)[name]
    advisories.push(
      `role+accessible-name assertion in ${name}.test.tsx — no \`getByRole('${role}', { name })\` (component-architecture §8 / testing-guideline "query by role first")`,
    )
  }

  return { name, files, missing, advisories, exempt }
}

/**
 * Count PNG entries under `__snapshots__/` that match `pred(name)`. Used
 * for the "baseline captured" and "parity baseline captured" checks.
 *
 * @param {string} componentDir
 * @param {(name: string) => boolean} pred
 */
function countSnapshots(componentDir, pred) {
  const snapDir = path.join(componentDir, '__snapshots__')
  if (!existsSync(snapDir)) return 0
  try {
    return readdirSync(snapDir).filter((n) => n.endsWith('.png') && pred(n)).length
  } catch {
    return 0
  }
}

const CELL_GLYPH = {
  present: '✓',
  missing: '✗',
  exempt: '—',
  na: 'n/a',
}

const ADVISORY_KEY_SET = new Set(ADVISORY_KEYS)

/**
 * Glyph for one cell. Advisory columns render a `missing` as the warn glyph
 * `⚠` (not the blocking `✗`) so the table itself signals that a gap in those
 * columns does not fail CI.
 * @param {string} key
 * @param {CellState} state
 */
function glyphFor(key, state) {
  if (ADVISORY_KEY_SET.has(key) && state === 'missing') return '⚠'
  return CELL_GLYPH[state]
}

/**
 * Render an audit as a markdown report (header + table + missing-files
 * section + recommended-actions section). Returns a single string.
 *
 * @param {AuditRow[]} rows
 * @param {{
 *   format?: 'markdown' | 'plain',
 *   generatedAt?: string,
 *   orphanedExports?: string[],
 *   lv2DirSeen?: boolean,
 * }} [opts]
 */
export function renderTable(rows, opts = {}) {
  const { format = 'markdown', generatedAt, orphanedExports = [], lv2HasComponents = false } = opts
  const date = (generatedAt ?? new Date().toISOString()).slice(0, 10)

  const total = rows.length
  const allOk = rows.filter((r) => r.missing.length === 0).length
  const broken = total - allOk

  const advisoryTotal = rows.reduce((n, r) => n + r.advisories.length, 0)

  const lines = []
  if (format === 'markdown') {
    lines.push(`## Coverage Audit Report (${date})`)
    lines.push('')
    lines.push(`lv1 components: ${total} — required ✓ ${allOk} / missing ✗ ${broken}`)
    lines.push(
      `Advisory (non-blocking) test-existence gaps: ⚠ ${advisoryTotal} — see "Test-existence gaps" below.`,
    )
    lines.push('')
    lines.push(
      '| Component | tsx | css | stories | test | vrt | interaction | index | snap | export | cssapi.fx | parity.stories | parity.vrt | parity.snap | ref.test | testid.test | role.test |',
    )
    lines.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|')
    for (const row of rows) {
      const cells = REQUIRED_KEYS.map((k) => CELL_GLYPH[row.files[k]])
        .concat(PARITY_KEYS.map((k) => CELL_GLYPH[row.files[k]]))
        .concat(ADVISORY_KEYS.map((k) => glyphFor(k, row.files[k])))
        .join(' | ')
      lines.push(`| ${row.name} | ${cells} |`)
    }
    lines.push('')
    lines.push(
      '_Legend: ✓ present · ✗ missing (blocking) · ⚠ advisory gap (non-blocking) · — exempt · n/a not applicable. The last three columns (`ref.test` / `testid.test` / `role.test`) are advisory — a ⚠ there never fails `--check`._',
    )
    lines.push('')
  } else {
    lines.push(`Coverage Audit Report (${date})`)
    lines.push(`lv1 components: ${total}  required: ${allOk}  missing: ${broken}  advisory: ${advisoryTotal}`)
    lines.push('')
    const header = ['Component', ...REQUIRED_KEYS, ...PARITY_KEYS, ...ADVISORY_KEYS]
    lines.push(header.join('\t'))
    for (const row of rows) {
      const cells = [
        ...REQUIRED_KEYS.map((k) => CELL_GLYPH[row.files[k]]),
        ...PARITY_KEYS.map((k) => CELL_GLYPH[row.files[k]]),
        ...ADVISORY_KEYS.map((k) => glyphFor(k, row.files[k])),
      ]
      lines.push([row.name, ...cells].join('\t'))
    }
    lines.push('')
  }

  // Per-component missing list. Quiet section header in plain mode.
  const broken_rows = rows.filter((r) => r.missing.length > 0)
  if (broken_rows.length > 0) {
    lines.push(format === 'markdown' ? '### Missing files (action required)' : 'Missing files:')
    for (const row of broken_rows) {
      lines.push(`- \`${row.name}\`: missing ${row.missing.join(', ')}`)
    }
    lines.push('')
    lines.push(
      format === 'markdown' ? '### Recommended actions' : 'Recommended actions:',
    )
    lines.push('- Run `/add-lv1-component` to scaffold missing companions for a new lv1.')
    lines.push(
      '- For an existing lv1 missing only the VRT spec, run `/add-vrt-spec` then `pnpm test:vrt` to capture baselines.',
    )
    lines.push(
      '- For a 区分 C/D component missing its interaction test, add a non-screenshot Playwright test driving the primary operation (see vrt-spec-guideline §区分 C/D; Toast / Popover / Select are the patterns to copy). No baseline needed.',
    )
    lines.push('- For barrel-export drift, add the matching `export { ... } from \'./{Name}\'` line to `src/components/lv1/index.ts`.')
    lines.push('')
  } else {
    lines.push(format === 'markdown' ? '_All lv1 components have required companions._' : 'All lv1 components have required companions.')
    lines.push('')
  }

  // Advisory (non-blocking) test-existence gaps — reported separately from the
  // blocking "Missing files" section so the two never blur together. These do
  // NOT affect the exit code (`hasFailures` ignores `advisories`).
  const advisory_rows = rows.filter((r) => r.advisories.length > 0)
  if (advisory_rows.length > 0) {
    lines.push(
      format === 'markdown'
        ? '### Test-existence gaps (advisory — non-blocking)'
        : 'Test-existence gaps (advisory — non-blocking):',
    )
    for (const row of advisory_rows) {
      for (const item of row.advisories) {
        lines.push(`- \`${row.name}\`: ${item}`)
      }
    }
    lines.push('')
  }

  if (orphanedExports.length > 0) {
    lines.push(
      format === 'markdown' ? '### Orphaned exports' : 'Orphaned exports:',
    )
    lines.push(
      `- src/components/lv1/index.ts re-exports the following with no matching directory: ${orphanedExports.join(', ')}`,
    )
    lines.push('')
  }

  if (lv2HasComponents) {
    lines.push(
      format === 'markdown'
        ? '> Note: `src/components/lv2/` now contains components but is out of scope for this audit (lv2 deferred to post-1.0). Update `scripts/audit-coverage.mjs` to audit lv2.'
        : 'Note: src/components/lv2/ now contains components but is out of scope for this audit (lv2 deferred to post-1.0). Update scripts/audit-coverage.mjs to audit lv2.',
    )
    lines.push('')
  }

  return lines.join('\n').replace(/\n+$/, '\n')
}

/**
 * Render the audit as a JSON string matching the documented schema. The
 * shape is pinned by Vitest so consumers (CI scripts, future lint
 * plugins) can rely on stable keys.
 *
 * @param {AuditRow[]} rows
 * @param {{ generatedAt?: string }} [opts]
 */
export function renderJson(rows, opts = {}) {
  const generatedAt = opts.generatedAt ?? new Date().toISOString()
  const total = rows.length
  const allOk = rows.filter((r) => r.missing.length === 0).length
  // $schemaVersion 2 (#-audit-test-existence): adds the advisory test-existence
  // columns (`files.refTest` / `.testidTest` / `.roleTest`), the per-row
  // `advisories` array, and `totals.advisoryGaps`. Purely additive over v1.
  const advisoryGaps = rows.reduce((n, r) => n + r.advisories.length, 0)
  const payload = {
    $schemaVersion: 2,
    generatedAt,
    lv1: rows.map((r) => ({
      name: r.name,
      files: r.files,
      missing: r.missing,
      advisories: r.advisories,
      exempt: r.exempt,
    })),
    totals: {
      components: total,
      allRequiredPresent: allOk,
      missingAny: total - allOk,
      advisoryGaps,
    },
  }
  return `${JSON.stringify(payload, null, 2)}\n`
}

/**
 * Run the full audit against the project tree rooted at `projectDir`.
 * Returns the rows plus auxiliary findings (orphaned exports, lv2 dir
 * presence) for the renderers to consume.
 *
 * @param {string} projectDir
 */
export function runAudit(projectDir) {
  const lv1Dir = path.join(projectDir, LV1_DIR_REL)
  const indexPath = path.join(projectDir, INDEX_FILE_REL)
  const names = discoverComponents(lv1Dir)
  const exportedNames = parseExportedNames(indexPath)
  // Require the section in BOTH fixtures: intersect the two slug sets. When
  // either file is absent (temp test trees), the check is skipped (null).
  const htmlSlugs = parseFixtureSlugs(path.join(projectDir, CSSAPI_FIXTURE_HTML_REL))
  const tsxSlugs = parseFixtureSlugs(path.join(projectDir, CSSAPI_FIXTURE_TSX_REL))
  const fixtureSlugs =
    htmlSlugs && tsxSlugs ? new Set([...htmlSlugs].filter((s) => tsxSlugs.has(s))) : null

  const rows = names.map((name) =>
    auditComponent({
      name,
      componentDir: path.join(lv1Dir, name),
      exported: exportedNames.has(name),
      exempt: PARITY_EXEMPT.has(name),
      fixtureSlugs,
    }),
  )

  const orphanedExports = [...exportedNames].filter((n) => !names.includes(n)).sort()
  // The lv2 directory itself ships as an empty placeholder today (lv2 is
  // deferred to post-1.0). Only flag it once it actually contains a
  // component directory — otherwise the note prints on every audit and
  // becomes background noise, defeating its purpose as a reminder for
  // when lv2 finally lands.
  const lv2HasComponents = discoverComponents(path.join(projectDir, LV2_DIR_REL)).length > 0

  return { rows, orphanedExports, lv2HasComponents }
}

/** @returns {boolean} true when the audit found any required-file gap. */
export function hasFailures({ rows, orphanedExports }) {
  return rows.some((r) => r.missing.length > 0) || orphanedExports.length > 0
}

// ── CLI entry ────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = { check: false, json: false, format: 'markdown' }
  for (const raw of argv) {
    if (raw === '--check') args.check = true
    else if (raw === '--json') args.json = true
    else if (raw === '--format=plain') args.format = 'plain'
    else if (raw === '--format=markdown') args.format = 'markdown'
    else if (raw === '-h' || raw === '--help') args.help = true
    else throw new Error(`audit-coverage: unknown flag "${raw}"`)
  }
  return args
}

function printHelp() {
  process.stdout.write(
    [
      'Usage: node scripts/audit-coverage.mjs [options]',
      '',
      'Options:',
      '  --check           Exit 1 when any required companion file is missing or an',
      '                    orphaned export is found; exit 0 otherwise (CI use).',
      '  --json            Output machine-readable JSON instead of markdown.',
      '                    Schema is documented in scripts/audit-coverage.d.mts',
      '                    (AuditRow / AuditFiles / CellState) and pinned by',
      '                    scripts/__tests__/audit-coverage.test.ts.',
      '  --format=plain    Output plain text (tab-separated) instead of markdown.',
      '  --format=markdown Output markdown (default).',
      '  -h, --help        Show this message.',
      '',
      'Exit codes:',
      '  0  Audit succeeded (or --check found no gaps).',
      '  1  --check found a missing required file or an orphaned export.',
      '  2  Argument parsing failed.',
      '',
    ].join('\n'),
  )
}

function main() {
  let opts
  try {
    opts = parseArgs(process.argv.slice(2))
  } catch (err) {
    process.stderr.write(`${err instanceof Error ? err.message : err}\n`)
    process.exit(2)
  }
  if (opts.help) {
    printHelp()
    return
  }

  const projectDir = process.cwd()
  const audit = runAudit(projectDir)
  const output = opts.json
    ? renderJson(audit.rows)
    : renderTable(audit.rows, {
        format: opts.format,
        orphanedExports: audit.orphanedExports,
        lv2HasComponents: audit.lv2HasComponents,
      })
  process.stdout.write(output)

  if (opts.check && hasFailures(audit)) process.exit(1)
}

const isCliEntry = import.meta.url === `file://${path.resolve(process.argv[1] ?? '')}`
if (isCliEntry) main()
