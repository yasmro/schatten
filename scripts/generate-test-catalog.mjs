#!/usr/bin/env node
/**
 * Generates the test catalog behind the Storybook "Tests" tab (#641).
 *
 * Collects test titles without running them —
 *   - unit tests via `vitest list --json`, for the jsdom and the real-browser
 *     suites
 *   - VRT / a11y / interaction tests via `playwright test --list --reporter=json`
 * — groups them by component directory (`src/components/lv{1,2}/<Name>/`), and
 * sorts the evidence into the quality aspects of docs/quality-definition.md,
 * reusing the heuristics `audit-coverage.mjs` already applies.
 *
 * Output: src/docs/__generated__/test-catalog.json (committed, like the
 * manifest snapshot, so a PR that adds a test shows it in the diff).
 *
 * Usage:
 *   node scripts/generate-test-catalog.mjs          write the catalog
 *   node scripts/generate-test-catalog.mjs --check  fail if it is stale (CI)
 */
import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  hasRefLandsTest,
  hasRoleNameTest,
  hasTestidPassthroughTest,
  LV2_INTERACTIVE,
  PARITY_EXEMPT,
  ROLE_NAME_CONTRACT,
  spreadsProps,
  storyIdsFromSource,
  usesForwardRef,
  vrtSkipReason,
} from './audit-coverage.mjs'
import { isCliEntry } from './is-cli-entry.mjs'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const CATALOG_PATH = 'src/docs/__generated__/test-catalog.json'

const COMPONENT_RE = /^src\/components\/(lv[12])\/([^/]+)\//
const THEME_RE = /^(light|dark)$/

/** `src/components/lv1/Button/Button.test.tsx` → `{ level: 'lv1', name: 'Button' }`. */
export function componentOf(relPath) {
  const m = relPath.split(sep).join('/').match(COMPONENT_RE)
  return m ? { level: m[1], name: m[2] } : null
}

/**
 * vitest joins the describe path and the test title with ' > '. The first
 * segment is the top-level describe (usually the component name) and is dropped.
 */
export function parseUnitName(name) {
  const [, ...rest] = name.split(' > ')
  const title = rest.pop() ?? name
  return { group: rest.join(' › '), title }
}

/**
 * Screenshot and a11y tests are titled `<Prefix> / <story> / <theme>[ / a11y]`
 * by convention (vrt-spec-guideline). Anything else is an interaction test.
 */
export function classifySpecTitle(title) {
  const parts = title.split(' / ')
  const isA11y = parts.at(-1) === 'a11y'
  if (isA11y) parts.pop()
  const theme = parts.at(-1)
  if (parts.length >= 3 && THEME_RE.test(theme)) {
    return { kind: isA11y ? 'a11y' : 'screenshot', story: parts.at(-2), theme }
  }
  return { kind: 'interaction' }
}

function entryFor(catalog, comp) {
  catalog[comp.name] ??= { level: comp.level, unit: [], screenshots: [], interactions: [] }
  return catalog[comp.name]
}

// The jsdom suite and the real-browser suite (#650). Listing the browser suite
// does not start a browser: `vitest list` reads the test titles only.
const VITEST_CONFIGS = ['vitest.config.ts', 'vitest.browser.config.ts']

function collectUnit(catalog) {
  const dir = mkdtempSync(join(tmpdir(), 'test-catalog-'))
  try {
    for (const config of VITEST_CONFIGS) {
      const out = join(dir, `${config}.json`)
      // `--json=<path>`: a bare `--json <file>` takes the file as the output
      // path and overwrites it.
      execFileSync('pnpm', ['exec', 'vitest', 'list', '--config', config, `--json=${out}`], {
        cwd: ROOT,
        stdio: ['ignore', 'ignore', 'inherit'],
      })
      const tests = JSON.parse(readFileSync(out, 'utf8'))
      for (const t of tests) {
        const file = relative(ROOT, t.file)
        const comp = componentOf(file)
        if (!comp) continue
        entryFor(catalog, comp).unit.push({ file, ...parseUnitName(t.name) })
      }
    }
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

function collectPlaywright(catalog) {
  const json = execFileSync('pnpm', ['exec', 'playwright', 'test', '--list', '--reporter=json'], {
    cwd: ROOT,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'inherit'],
  })
  const report = JSON.parse(json)
  const testDir = report.config.rootDir

  const walk = (suite) => {
    for (const spec of suite.specs ?? []) {
      const file = relative(ROOT, join(testDir, spec.file))
      const comp = componentOf(file)
      if (!comp) continue
      const entry = entryFor(catalog, comp)
      const c = classifySpecTitle(spec.title)
      if (c.kind === 'interaction') {
        entry.interactions.push({ file, title: spec.title })
        continue
      }
      let row = entry.screenshots.find((r) => r.story === c.story && r.file === file)
      if (!row) {
        row = { file, story: c.story, screenshot: [], a11y: [] }
        entry.screenshots.push(row)
      }
      if (!row[c.kind].includes(c.theme)) row[c.kind].push(c.theme)
    }
    for (const child of suite.suites ?? []) walk(child)
  }
  for (const suite of report.suites) walk(suite)
}

const read = (path) => (existsSync(path) ? readFileSync(path, 'utf8') : '')
const readAll = (dir, suffix) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(suffix))
    .sort()
    .map((f) => readFileSync(join(dir, f), 'utf8'))

/** Sorts each component's evidence into the aspects of docs/quality-definition.md §1. */
function collectAspects(catalog) {
  for (const [name, entry] of Object.entries(catalog)) {
    const dir = join(ROOT, 'src/components', entry.level, name)
    const tsx = read(join(dir, `${name}.tsx`))
    const test = read(join(dir, `${name}.test.tsx`))
    const specs = readAll(dir, '.vrt.spec.ts').join('\n')
    const roster = new Set(entry.screenshots.map((s) => s.story))

    const required = []
    if (usesForwardRef(tsx)) {
      required.push({ case: 'ref reaches the DOM node', ok: hasRefLandsTest(test) })
    }
    if (spreadsProps(tsx)) {
      required.push({ case: 'data-testid passes through', ok: hasTestidPassthroughTest(test) })
    }
    const role = ROLE_NAME_CONTRACT[name] ?? null
    const exceptions = [
      ...new Set(
        [...specs.matchAll(/disableRules\(\[([^\]]*)\]/g)].flatMap((m) =>
          m[1].split(',').map((r) => r.trim().replace(/['"]/g, '')),
        ),
      ),
    ]
      .filter(Boolean)
      .sort()

    entry.aspects = {
      behaviour: { required },
      a11y: { role, roleTest: role ? hasRoleNameTest(test, role) : null, exceptions },
      visual: {
        notInRoster: readAll(dir, '.stories.tsx')
          .flatMap(storyIdsFromSource)
          .filter((id) => !roster.has(id))
          .map((story) => ({ story, skip: vrtSkipReason(story, specs) })),
      },
      interaction: { required: PARITY_EXEMPT.has(name) || LV2_INTERACTIVE.has(name) },
      parity: {
        required: entry.level === 'lv1' && !PARITY_EXEMPT.has(name),
        present: roster.has('parity'),
      },
    }
    for (const [aspect, status] of Object.entries(aspectStatuses(entry))) {
      entry.aspects[aspect].status = status
    }
  }
}

/**
 * Stage 1 of docs/quality-definition.md §3 per aspect: are the required tests
 * prepared? Lives here, not in the Tests tab, so it is unit-tested and a
 * change of status shows in the committed catalog's diff.
 *   prepared — the tests the aspect requires exist
 *   missing  — something the aspect requires is absent
 *   na       — the aspect does not apply to this component
 * Aspects 6 and 7 are checked library-wide and get no per-component status.
 */
export function aspectStatuses(entry) {
  const a = entry.aspects
  const axeScans = entry.screenshots.reduce((n, s) => n + s.a11y.length, 0)
  const screenshots = entry.screenshots.reduce((n, s) => n + s.screenshot.length, 0)
  const hasInteraction = entry.interactions.length > 0
  return {
    behaviour:
      entry.unit.length === 0 || a.behaviour.required.some((r) => !r.ok) ? 'missing' : 'prepared',
    a11y: axeScans === 0 || (a.a11y.role && !a.a11y.roleTest) ? 'missing' : 'prepared',
    visual:
      screenshots === 0 || a.visual.notInRoster.some((s) => s.skip === 'undocumented')
        ? 'missing'
        : 'prepared',
    interaction: a.interaction.required
      ? hasInteraction
        ? 'prepared'
        : 'missing'
      : hasInteraction
        ? 'prepared'
        : 'na',
    parity: a.parity.required ? (a.parity.present ? 'prepared' : 'missing') : 'na',
  }
}

// `vitest list` collects files in parallel, so its order is not stable across
// runs. Sort by file; a stable sort keeps the in-file order.
const byFile = (a, b) => a.file.localeCompare(b.file)

export function serializeCatalog(catalog) {
  const sorted = {}
  for (const name of Object.keys(catalog).sort()) {
    const e = catalog[name]
    sorted[name] = {
      ...e,
      unit: [...e.unit].sort(byFile),
      screenshots: [...e.screenshots].sort(byFile),
      interactions: [...e.interactions].sort(byFile),
    }
  }
  return `${JSON.stringify(sorted, null, 2)}\n`
}

export function generateCatalog() {
  const catalog = {}
  collectUnit(catalog)
  collectPlaywright(catalog)
  collectAspects(catalog)
  return serializeCatalog(catalog)
}

function main() {
  const out = join(ROOT, CATALOG_PATH)
  const next = generateCatalog()
  if (process.argv.includes('--check')) {
    if (read(out) !== next) {
      console.error(
        `check:test-catalog: ${CATALOG_PATH} is stale — run \`pnpm update:test-catalog\` and commit the result.`,
      )
      process.exit(1)
    }
    console.log(`check:test-catalog: ${CATALOG_PATH} is up to date.`)
    return
  }
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, next)
  console.log(`update:test-catalog: wrote ${CATALOG_PATH}`)
}

if (isCliEntry(import.meta.url)) main()
