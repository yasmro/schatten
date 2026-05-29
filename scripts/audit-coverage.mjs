#!/usr/bin/env node
// Scan every lv1 component and report the coverage of the required
// companion files (tsx / css / stories / test / vrt / index / __snapshots__
// baseline / barrel re-export, plus parity story+spec for the components
// in classification A/B per .claude/rules/vrt-spec-guideline.md
// §"Parity stories — when to write one, when to skip").
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

// Components that intentionally do NOT ship parity stories/specs. The
// canonical reasoning is in .claude/rules/vrt-spec-guideline.md
// §"Parity stories — when to write one, when to skip": classification
// C (Tooltip — static rendering but JS-driven positioning) and D
// (Dialog / Select / Toast — JS-required compound behaviour) have no
// realistic vanilla-HTML use case for the .st-* class chain alone, so
// the parity story would be performative.
//
// MAINTENANCE: when a new lv1 lands that is classification C or D,
// add it here (alphabetically). The add-lv1-component skill keeps this
// set in sync automatically — its Step 2 区分 question routes a C/D
// component to an alphabetical insert here instead of generating the
// parity story+spec (see .claude/skills/add-lv1-component/SKILL.md
// Step 3 item 7). The hard-code is acceptable today because the set is
// small (4 components) and the source of truth lives in the rule doc
// next door. If lv1 count grows past ~30 and tracking gets noisy,
// promote to a `// schatten-classification: B` header comment that
// gets parsed.
const PARITY_EXEMPT = new Set(['Dialog', 'Select', 'Toast', 'Tooltip'])

// Match `from './<name>'` / `from "./<name>"`. Same shape as
// scripts/check-lv1-export-integrity.mjs — kept in sync deliberately.
const FROM_RE = /from\s+['"]\.\/([^'"/.]+)['"]/g

const REQUIRED_KEYS = /** @type {const} */ ([
  'tsx',
  'css',
  'stories',
  'test',
  'vrt',
  'index',
  'snap',
  'export',
])
const PARITY_KEYS = /** @type {const} */ (['parityStories', 'parityVrt', 'paritySnap'])

/**
 * @typedef {'present' | 'missing' | 'exempt' | 'na'} CellState
 *
 * @typedef {{
 *   tsx: CellState,
 *   css: CellState,
 *   stories: CellState,
 *   test: CellState,
 *   vrt: CellState,
 *   index: CellState,
 *   snap: CellState,
 *   export: CellState,
 *   parityStories: CellState,
 *   parityVrt: CellState,
 *   paritySnap: CellState,
 * }} AuditFiles
 *
 * @typedef {{
 *   name: string,
 *   files: AuditFiles,
 *   missing: string[],
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
 * Audit a single component directory. The I/O surface is small —
 * callers wire `componentDir` (absolute path) and the `exported` /
 * `exempt` booleans, so this function is straightforward to unit-test.
 *
 * @param {{
 *   name: string,
 *   componentDir: string,
 *   exported: boolean,
 *   exempt: boolean,
 * }} opts
 * @returns {AuditRow}
 */
export function auditComponent({ name, componentDir, exported, exempt }) {
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
    index: 'na',
    snap: 'na',
    export: 'na',
    parityStories: 'na',
    parityVrt: 'na',
    paritySnap: 'na',
  }

  if (tsxPresent) {
    files.css = cell(present(`${name}.css`))
    files.stories = cell(present(`${name}.stories.tsx`))
    files.test = cell(present(`${name}.test.tsx`))
    files.vrt = cell(present(`${name}.vrt.spec.ts`))
    files.index = cell(present('index.ts'))
    files.snap = cell(countSnapshots(componentDir, (n) => !n.startsWith('parity-')) >= 1)
    files.export = cell(exported)

    if (exempt) {
      files.parityStories = 'exempt'
      files.parityVrt = 'exempt'
      files.paritySnap = 'exempt'
    } else {
      files.parityStories = cell(present(`${name}.parity.stories.tsx`))
      files.parityVrt = cell(present(`${name}.parity.vrt.spec.ts`))
      files.paritySnap = cell(countSnapshots(componentDir, (n) => n.startsWith('parity-')) >= 1)
    }
  }

  /** @type {string[]} */
  const missing = []
  if (files.tsx === 'missing') missing.push(`${name}.tsx`)
  if (files.css === 'missing') missing.push(`${name}.css`)
  if (files.stories === 'missing') missing.push(`${name}.stories.tsx`)
  if (files.test === 'missing') missing.push(`${name}.test.tsx`)
  if (files.vrt === 'missing') missing.push(`${name}.vrt.spec.ts`)
  if (files.index === 'missing') missing.push('index.ts')
  if (files.snap === 'missing') missing.push('__snapshots__/*.png (no baseline captured)')
  if (files.export === 'missing') missing.push('src/components/lv1/index.ts re-export')
  if (files.parityStories === 'missing') missing.push(`${name}.parity.stories.tsx`)
  if (files.parityVrt === 'missing') missing.push(`${name}.parity.vrt.spec.ts`)
  if (files.paritySnap === 'missing') missing.push('__snapshots__/parity-*.png (no parity baseline)')

  return { name, files, missing, exempt }
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

  const lines = []
  if (format === 'markdown') {
    lines.push(`## Coverage Audit Report (${date})`)
    lines.push('')
    lines.push(`lv1 components: ${total} — required ✓ ${allOk} / missing ✗ ${broken}`)
    lines.push('')
    lines.push(
      '| Component | tsx | css | stories | test | vrt | index | snap | export | parity.stories | parity.vrt | parity.snap |',
    )
    lines.push('|---|---|---|---|---|---|---|---|---|---|---|---|')
    for (const row of rows) {
      const cells = REQUIRED_KEYS.map((k) => CELL_GLYPH[row.files[k]])
        .concat(PARITY_KEYS.map((k) => CELL_GLYPH[row.files[k]]))
        .join(' | ')
      lines.push(`| ${row.name} | ${cells} |`)
    }
    lines.push('')
  } else {
    lines.push(`Coverage Audit Report (${date})`)
    lines.push(`lv1 components: ${total}  required: ${allOk}  missing: ${broken}`)
    lines.push('')
    const header = ['Component', ...REQUIRED_KEYS, ...PARITY_KEYS]
    lines.push(header.join('\t'))
    for (const row of rows) {
      const cells = [...REQUIRED_KEYS, ...PARITY_KEYS].map((k) => CELL_GLYPH[row.files[k]])
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
    lines.push('- For barrel-export drift, add the matching `export { ... } from \'./{Name}\'` line to `src/components/lv1/index.ts`.')
    lines.push('')
  } else {
    lines.push(format === 'markdown' ? '_All lv1 components have required companions._' : 'All lv1 components have required companions.')
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
  const payload = {
    $schemaVersion: 1,
    generatedAt,
    lv1: rows.map((r) => ({
      name: r.name,
      files: r.files,
      missing: r.missing,
      exempt: r.exempt,
    })),
    totals: {
      components: total,
      allRequiredPresent: allOk,
      missingAny: total - allOk,
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

  const rows = names.map((name) =>
    auditComponent({
      name,
      componentDir: path.join(lv1Dir, name),
      exported: exportedNames.has(name),
      exempt: PARITY_EXEMPT.has(name),
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
