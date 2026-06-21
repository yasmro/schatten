import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  auditComponent,
  discoverComponents,
  hasFailures,
  PARITY_EXEMPT,
  parseExportedNames,
  parseFixtureSlugs,
  renderJson,
  renderTable,
  runAudit,
} from '../audit-coverage.mjs'

// Pure-function unit tests for scripts/audit-coverage.mjs. Filesystem
// helpers below build the minimum directory shape each test needs so the
// audit logic can be exercised end-to-end without depending on the live
// repo state.

let workDir: string

beforeEach(() => {
  workDir = mkdtempSync(join(tmpdir(), 'audit-coverage-'))
})

afterEach(() => {
  rmSync(workDir, { recursive: true, force: true })
})

function makeLv1Dir() {
  const dir = join(workDir, 'src/components/lv1')
  mkdirSync(dir, { recursive: true })
  return dir
}

function makeComponent(
  lv1Dir: string,
  name: string,
  files: {
    tsx?: boolean
    css?: boolean
    stories?: boolean
    test?: boolean
    vrt?: boolean
    index?: boolean
    snapshots?: string[]
    parityStories?: boolean
    parityVrt?: boolean
  } = {},
) {
  const dir = join(lv1Dir, name)
  mkdirSync(dir, { recursive: true })
  const stamp = (filename: string) => writeFileSync(join(dir, filename), '')
  if (files.tsx ?? true) stamp(`${name}.tsx`)
  if (files.css ?? true) stamp(`${name}.css`)
  if (files.stories ?? true) stamp(`${name}.stories.tsx`)
  if (files.test ?? true) stamp(`${name}.test.tsx`)
  if (files.vrt ?? true) stamp(`${name}.vrt.spec.ts`)
  if (files.index ?? true) stamp('index.ts')
  if (files.parityStories) stamp(`${name}.parity.stories.tsx`)
  if (files.parityVrt) stamp(`${name}.parity.vrt.spec.ts`)
  if (files.snapshots && files.snapshots.length > 0) {
    const snapDir = join(dir, '__snapshots__')
    mkdirSync(snapDir, { recursive: true })
    for (const png of files.snapshots) writeFileSync(join(snapDir, png), '')
  }
  return dir
}

function writeBarrel(lv1Dir: string, exports: string[]) {
  const lines = exports.map((name) => `export { ${name} } from './${name}'`)
  writeFileSync(join(lv1Dir, 'index.ts'), `${lines.join('\n')}\n`)
}

describe('discoverComponents', () => {
  it('enumerates direct subdirectories alphabetically', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button')
    makeComponent(lv1Dir, 'Alert')
    expect(discoverComponents(lv1Dir)).toEqual(['Alert', 'Button'])
  })

  it('ignores non-directory entries like index.ts', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button')
    writeFileSync(join(lv1Dir, 'index.ts'), '')
    expect(discoverComponents(lv1Dir)).toEqual(['Button'])
  })

  it('returns [] when the directory does not exist', () => {
    expect(discoverComponents(join(workDir, 'missing'))).toEqual([])
  })
})

describe('parseExportedNames', () => {
  it("extracts every name from `from './Name'` specifiers", () => {
    const lv1Dir = makeLv1Dir()
    writeBarrel(lv1Dir, ['Button', 'Badge', 'Callout'])
    const names = parseExportedNames(join(lv1Dir, 'index.ts'))
    expect([...names].sort()).toEqual(['Badge', 'Button', 'Callout'])
  })

  it('ignores re-exports that point at external packages', () => {
    const lv1Dir = makeLv1Dir()
    writeFileSync(
      join(lv1Dir, 'index.ts'),
      [
        "export { Button } from './Button'",
        "export type { ComponentProps } from 'react'",
        "// from './CommentedOut'",
      ].join('\n'),
    )
    const names = parseExportedNames(join(lv1Dir, 'index.ts'))
    // The regex matches the bare `from './...'` shape, so the comment
    // case slips through — documented behaviour, mirrored from the
    // existing check-lv1-export-integrity.mjs hook.
    expect(names.has('Button')).toBe(true)
    expect(names.has('react')).toBe(false)
  })

  it('returns an empty set when the index file is absent', () => {
    expect(parseExportedNames(join(workDir, 'missing-index.ts')).size).toBe(0)
  })
})

describe('parseFixtureSlugs', () => {
  it('returns null when the fixture file is absent (check skipped)', () => {
    expect(parseFixtureSlugs(join(workDir, 'no-such-fixture.ts'))).toBeNull()
  })

  it('collects every data-component slug from the fixture', () => {
    const file = join(workDir, 'cssApiSamples.html.ts')
    writeFileSync(
      file,
      [
        'export const vanillaHtml = `',
        '<section class="cssapi-fixture__sample" data-component="avatar"></section>',
        '<section class="cssapi-fixture__sample" data-component="badge"></section>',
        '`',
      ].join('\n'),
    )
    const slugs = parseFixtureSlugs(file)
    expect(slugs).not.toBeNull()
    expect([...(slugs ?? [])].sort()).toEqual(['avatar', 'badge'])
  })
})

describe('auditComponent', () => {
  it('marks every required file present when the directory is complete', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['all-variants-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
    })
    expect(row.missing).toEqual([])
    expect(row.files.tsx).toBe('present')
    expect(row.files.parityStories).toBe('present')
    expect(row.files.paritySnap).toBe('present')
  })

  it('flags a missing test.tsx companion', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      test: false,
      snapshots: ['x-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
    })
    expect(row.files.test).toBe('missing')
    expect(row.missing).toContain('Button.test.tsx')
  })

  it('flags a missing css companion (post-#154 requirement)', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      css: false,
      snapshots: ['x-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
    })
    expect(row.files.css).toBe('missing')
    expect(row.missing).toContain('Button.css')
  })

  it('flags a missing CSS API fixture section when the slug is absent', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
      fixtureSlugs: new Set(), // fixture file exists but has no button section
    })
    expect(row.files.cssApiFixture).toBe('missing')
    expect(row.missing).toContain(
      'src/docs/__fixtures__/cssApiSamples.html.ts <section data-component="button">',
    )
  })

  it('marks the CSS API fixture present when the lowercased slug is in the set', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-x-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
      fixtureSlugs: new Set(['button']),
    })
    expect(row.files.cssApiFixture).toBe('present')
    expect(row.missing).toEqual([])
  })

  it('treats the fixture column as na when css is missing or no fixture file is given', () => {
    const lv1Dir = makeLv1Dir()
    // css missing → not discoverable by CSSApiDist yet → na (css column flags it)
    const noCss = makeComponent(lv1Dir, 'Button', { css: false, snapshots: ['x.png'] })
    expect(
      auditComponent({
        name: 'Button',
        componentDir: noCss,
        exported: true,
        exempt: false,
        fixtureSlugs: new Set(),
      }).files.cssApiFixture,
    ).toBe('na')

    // fixtureSlugs omitted (null) → check skipped → na, no spurious failure
    const dialogDir = makeComponent(lv1Dir, 'Dialog', {
      snapshots: ['x.png'],
    })
    const row = auditComponent({
      name: 'Dialog',
      componentDir: dialogDir,
      exported: true,
      exempt: true,
    })
    expect(row.files.cssApiFixture).toBe('na')
    expect(row.missing).toEqual([])
  })

  it('flags an empty __snapshots__ as missing baseline', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      parityStories: true,
      parityVrt: true,
      snapshots: ['parity-parity-light.png'], // only parity baseline
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
    })
    expect(row.files.snap).toBe('missing')
    expect(row.missing).toContain('__snapshots__/*.png (no baseline captured)')
  })

  it('flags a missing barrel export', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: false,
      exempt: false,
    })
    expect(row.files.export).toBe('missing')
    expect(row.missing).toContain('src/components/lv1/index.ts re-export')
  })

  it('requires parity stories/spec/snap for classification A/B (exempt=false)', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png'],
    })
    const row = auditComponent({
      name: 'Button',
      componentDir: dir,
      exported: true,
      exempt: false,
    })
    expect(row.files.parityStories).toBe('missing')
    expect(row.files.parityVrt).toBe('missing')
    expect(row.files.paritySnap).toBe('missing')
    expect(row.missing).toContain('Button.parity.stories.tsx')
    expect(row.missing).toContain('Button.parity.vrt.spec.ts')
  })

  it('treats parity columns as exempt for classification C/D (exempt=true)', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Dialog', {
      snapshots: ['x-light.png'],
    })
    const row = auditComponent({
      name: 'Dialog',
      componentDir: dir,
      exported: true,
      exempt: true,
    })
    expect(row.files.parityStories).toBe('exempt')
    expect(row.files.parityVrt).toBe('exempt')
    expect(row.files.paritySnap).toBe('exempt')
    expect(row.missing).toEqual([])
  })

  it('cascades to na on every dependent column when tsx is missing', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Stub', { tsx: false })
    const row = auditComponent({
      name: 'Stub',
      componentDir: dir,
      exported: false,
      exempt: false,
    })
    expect(row.files.tsx).toBe('missing')
    expect(row.files.css).toBe('na')
    expect(row.files.test).toBe('na')
    expect(row.files.export).toBe('na')
    expect(row.missing).toEqual(['Stub.tsx'])
  })
})

describe('renderTable / renderJson', () => {
  const fixedAt = '2026-05-25T00:00:00.000Z'

  function sampleRows() {
    const lv1Dir = makeLv1Dir()
    const buttonDir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['all-variants-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    const dialogDir = makeComponent(lv1Dir, 'Dialog', {
      snapshots: ['default-light.png'],
    })
    const fixtureSlugs = new Set(['button', 'dialog'])
    return [
      auditComponent({
        name: 'Button',
        componentDir: buttonDir,
        exported: true,
        exempt: false,
        fixtureSlugs,
      }),
      auditComponent({
        name: 'Dialog',
        componentDir: dialogDir,
        exported: true,
        exempt: true,
        fixtureSlugs,
      }),
    ]
  }

  it('produces a markdown table with the documented header and glyphs', () => {
    const out = renderTable(sampleRows(), { generatedAt: fixedAt })
    expect(out).toContain('## Coverage Audit Report (2026-05-25)')
    expect(out).toContain(
      '| Component | tsx | css | stories | test | vrt | index | snap | export | cssapi.fx | parity.stories | parity.vrt | parity.snap |',
    )
    expect(out).toContain('| Button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |')
    expect(out).toContain('| Dialog | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — |')
    expect(out).toContain('_All lv1 components have required companions._')
  })

  it('lists missing files per component when present', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'NewLv1', {
      test: false,
      snapshots: [],
      parityStories: false,
      parityVrt: false,
    })
    const row = auditComponent({
      name: 'NewLv1',
      componentDir: dir,
      exported: false,
      exempt: false,
    })
    const out = renderTable([row], { generatedAt: fixedAt })
    expect(out).toContain('### Missing files (action required)')
    expect(out).toContain('NewLv1.test.tsx')
    expect(out).toContain('src/components/lv1/index.ts re-export')
    expect(out).toContain('### Recommended actions')
  })

  it('mentions orphaned exports separately', () => {
    const rows = sampleRows()
    const out = renderTable(rows, {
      generatedAt: fixedAt,
      orphanedExports: ['LegacyThing'],
    })
    expect(out).toContain('### Orphaned exports')
    expect(out).toContain('LegacyThing')
  })

  it('notes the lv2 directory only when it has actual components', () => {
    const out = renderTable(sampleRows(), { generatedAt: fixedAt, lv2HasComponents: true })
    expect(out).toContain('lv2/')
    expect(out).toContain('post-1.0')
  })

  it('stays quiet about lv2 when the dir is empty (no note printed)', () => {
    const out = renderTable(sampleRows(), { generatedAt: fixedAt, lv2HasComponents: false })
    expect(out).not.toContain('lv2/')
  })

  it('matches the documented JSON schema', () => {
    const out = renderJson(sampleRows(), { generatedAt: fixedAt })
    const parsed = JSON.parse(out)
    expect(parsed.$schemaVersion).toBe(1)
    expect(parsed.generatedAt).toBe(fixedAt)
    expect(parsed.totals).toEqual({ components: 2, allRequiredPresent: 2, missingAny: 0 })
    expect(parsed.lv1[0].name).toBe('Button')
    expect(parsed.lv1[1].exempt).toBe(true)
    expect(parsed.lv1[1].files.parityStories).toBe('exempt')
  })
})

describe('runAudit', () => {
  it('integrates discovery + barrel parse + per-component audit', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    makeComponent(lv1Dir, 'Dialog', { snapshots: ['x-light.png'] })
    writeBarrel(lv1Dir, ['Button', 'Dialog', 'GoneAway'])
    const result = runAudit(workDir)
    expect(result.rows.map((r) => r.name)).toEqual(['Button', 'Dialog'])
    expect(result.rows[1].exempt).toBe(true)
    expect(result.orphanedExports).toEqual(['GoneAway'])
    expect(result.lv2HasComponents).toBe(false)
  })

  it('stays lv2HasComponents=false when the lv2 dir exists but is empty', () => {
    makeLv1Dir()
    mkdirSync(join(workDir, 'src/components/lv2'), { recursive: true })
    const result = runAudit(workDir)
    expect(result.lv2HasComponents).toBe(false)
  })

  it('flips lv2HasComponents=true when the lv2 dir contains a component subdir', () => {
    makeLv1Dir()
    mkdirSync(join(workDir, 'src/components/lv2/FormField'), { recursive: true })
    const result = runAudit(workDir)
    expect(result.lv2HasComponents).toBe(true)
  })

  it('hasFailures returns true on missing required files OR orphaned exports', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    writeBarrel(lv1Dir, ['Button'])
    const ok = runAudit(workDir)
    expect(hasFailures(ok)).toBe(false)

    writeBarrel(lv1Dir, ['Button', 'PhantomDir'])
    expect(hasFailures(runAudit(workDir))).toBe(true)
  })

  it('fails when a component has no CSS API fixture section (gate active)', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    writeBarrel(lv1Dir, ['Button'])

    const fixtureFile = join(workDir, 'src/docs/__fixtures__/cssApiSamples.html.ts')
    mkdirSync(dirname(fixtureFile), { recursive: true })

    // Fixture file present but missing the button section → gate fires.
    writeFileSync(fixtureFile, 'export const vanillaHtml = ``\n')
    const missingFixture = runAudit(workDir)
    expect(missingFixture.rows[0].files.cssApiFixture).toBe('missing')
    expect(hasFailures(missingFixture)).toBe(true)

    // Add the section → gate clears.
    writeFileSync(
      fixtureFile,
      'export const vanillaHtml = `<section data-component="button"></section>`\n',
    )
    const withFixture = runAudit(workDir)
    expect(withFixture.rows[0].files.cssApiFixture).toBe('present')
    expect(hasFailures(withFixture)).toBe(false)
  })
})

describe('PARITY_EXEMPT', () => {
  // The set is hand-maintained (see the MAINTENANCE comment in
  // audit-coverage.mjs) — the add-lv1-component skill inserts a C/D
  // component alphabetically rather than generating a parity story+spec.
  // These guards turn "inserted in the wrong order" / "named a directory
  // that doesn't exist" from a silent audit mis-classification into a CI
  // failure, since nothing else pins the contents of the set.
  const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..')
  const lv1Dir = join(repoRoot, 'src/components/lv1')

  it('is declared in alphabetical order', () => {
    const entries = [...PARITY_EXEMPT]
    expect(entries).toEqual([...entries].sort())
  })

  it('lists only real lv1 component directories', () => {
    for (const name of PARITY_EXEMPT) {
      const dir = join(lv1Dir, name)
      expect(existsSync(dir), `${name} is in PARITY_EXEMPT but ${dir} does not exist`).toBe(true)
      expect(statSync(dir).isDirectory(), `${dir} is not a directory`).toBe(true)
    }
  })
})
