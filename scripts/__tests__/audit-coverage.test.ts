import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  auditComponent,
  discoverComponents,
  hasFailures,
  hasInteractionTest,
  hasRefLandsTest,
  hasRoleNameTest,
  hasTestidPassthroughTest,
  PARITY_EXEMPT,
  parseExportedNames,
  parseFixtureSlugs,
  ROLE_NAME_CONTRACT,
  ROLE_NAME_EXEMPT,
  renderJson,
  renderTable,
  roleContractPartitionGaps,
  runAudit,
  spreadsProps,
  usesForwardRef,
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

// Mirrors the real spec shape: screenshot tests + paired a11y tests, and —
// when `interactionTest` is requested — a trailing non-screenshot test block
// like Toast / Popover / Select carry (vrt-spec-guideline §区分 C/D).
const SCREENSHOT_ONLY_SPEC = [
  'test(`X / story / light`, async ({ page }) => {',
  "  await expect(page).toHaveScreenshot('story-light.png')",
  '})',
  'test(`X / story / light / a11y`, async ({ page }) => {',
  '  expect(results.violations).toEqual([])',
  '})',
  '',
].join('\n')

const INTERACTION_SPEC = `${SCREENSHOT_ONLY_SPEC}\ntest('X / primary action works on real click', async ({ page }) => {\n  await page.getByRole('button').click()\n})\n`

// The default `.tsx` uses `forwardRef` + `{...props}` so the advisory
// refTest / testidTest columns are *applicable*; the default `.test.tsx`
// carries all three positive signals (ref-lands, testid pass-through, and —
// when the name is in ROLE_NAME_CONTRACT — a role+name assertion). Individual
// signals can be turned off per test to exercise the advisory-missing path.
// (The audit only greps these files, so the strings need only contain the
// heuristic markers — they are never executed.)
const COMPONENT_TSX =
  "import { forwardRef } from 'react'\nexport const C = forwardRef((props, ref) => <div ref={ref} {...props} />)\n"

function componentTestSource(
  name: string,
  opts: { refLandsTest?: boolean; testidTest?: boolean; roleNameTest?: boolean },
) {
  const parts = ['import { render, screen } from "@testing-library/react"']
  if (opts.refLandsTest ?? true) {
    parts.push(
      'const ref = { current: null }\nrender(<C ref={ref} />)\nexpect(ref.current).toBeTruthy()',
    )
  }
  if (opts.testidTest ?? true) {
    parts.push('render(<C data-testid="x" />)\nexpect(screen.getByTestId("x")).toBeTruthy()')
  }
  const role = ROLE_NAME_CONTRACT[name]
  if (role && (opts.roleNameTest ?? true)) {
    parts.push(`screen.getByRole('${role}', { name: 'x' })`)
  }
  return `${parts.join('\n')}\n`
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
    interactionTest?: boolean
    refLandsTest?: boolean
    testidTest?: boolean
    roleNameTest?: boolean
  } = {},
) {
  const dir = join(lv1Dir, name)
  mkdirSync(dir, { recursive: true })
  const stamp = (filename: string, content = '') => writeFileSync(join(dir, filename), content)
  if (files.tsx ?? true) stamp(`${name}.tsx`, COMPONENT_TSX)
  if (files.css ?? true) stamp(`${name}.css`)
  if (files.stories ?? true) stamp(`${name}.stories.tsx`)
  if (files.test ?? true) stamp(`${name}.test.tsx`, componentTestSource(name, files))
  if (files.vrt ?? true) {
    writeFileSync(
      join(dir, `${name}.vrt.spec.ts`),
      files.interactionTest ? INTERACTION_SPEC : SCREENSHOT_ONLY_SPEC,
    )
  }
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
    expect(row.advisories).toEqual([])
    expect(row.files.tsx).toBe('present')
    expect(row.files.parityStories).toBe('present')
    expect(row.files.paritySnap).toBe('present')
    // The default fixture ships all three advisory signals → all present.
    expect(row.files.refTest).toBe('present')
    expect(row.files.testidTest).toBe('present')
    expect(row.files.roleTest).toBe('present')
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
      '<section data-component="button"> in src/docs/__fixtures__/cssApiSamples.html.ts + .tsx',
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
      interactionTest: true,
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
      interactionTest: true,
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

  it('flags a 区分 C/D component whose specs are screenshot/a11y-only (interaction missing)', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Dialog', {
      snapshots: ['x-light.png'],
      // interactionTest omitted → the vrt spec has only screenshot + a11y tests
    })
    const row = auditComponent({
      name: 'Dialog',
      componentDir: dir,
      exported: true,
      exempt: true,
    })
    expect(row.files.interaction).toBe('missing')
    expect(row.missing).toContain(
      'non-screenshot Playwright interaction test in a *.vrt.spec.ts (区分 C/D — vrt-spec-guideline)',
    )
  })

  it('keeps interaction na for classification A/B (parity covers the browser contract)', () => {
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
    })
    expect(row.files.interaction).toBe('na')
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
      interactionTest: true,
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
      '| Component | tsx | css | stories | test | vrt | interaction | index | snap | export | cssapi.fx | parity.stories | parity.vrt | parity.snap | ref.test | testid.test | role.test |',
    )
    // A/B (Button): interaction is n/a — the parity series covers the real-browser
    // contract. The three advisory columns are all present in the fixture.
    expect(out).toContain(
      '| Button | ✓ | ✓ | ✓ | ✓ | ✓ | n/a | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |',
    )
    // C/D (Dialog): interaction required and present; parity exempt.
    expect(out).toContain(
      '| Dialog | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — | ✓ | ✓ | ✓ |',
    )
    expect(out).toContain('_All lv1 components have required companions._')
    expect(out).toContain('Advisory (non-blocking) test-existence gaps: ⚠ 0')
  })

  it('renders advisory gaps with the ⚠ glyph and a dedicated non-blocking section', () => {
    const lv1Dir = makeLv1Dir()
    // Radio is in ROLE_NAME_CONTRACT and forwardRef+spread by default; drop all
    // three advisory signals so every advisory column is missing.
    const dir = makeComponent(lv1Dir, 'Radio', {
      snapshots: ['x-light.png', 'parity-x-light.png'],
      parityStories: true,
      parityVrt: true,
      refLandsTest: false,
      testidTest: false,
      roleNameTest: false,
    })
    const row = auditComponent({ name: 'Radio', componentDir: dir, exported: true, exempt: false })
    // Advisory, not blocking: `missing` stays empty, `advisories` holds them.
    expect(row.missing).toEqual([])
    expect(row.advisories).toHaveLength(3)
    const out = renderTable([row], { generatedAt: fixedAt })
    // ⚠ (advisory) glyph, not ✗ (blocking).
    expect(out).toContain(
      '| Radio | ✓ | ✓ | ✓ | ✓ | ✓ | n/a | ✓ | ✓ | ✓ | n/a | ✓ | ✓ | ✓ | ⚠ | ⚠ | ⚠ |',
    )
    expect(out).toContain('### Test-existence gaps (advisory — non-blocking)')
    expect(out).toContain("no `getByRole('radio', { name })`")
    // The required-companion tree is still clean → the blocking summary is green.
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
    expect(parsed.$schemaVersion).toBe(2)
    expect(parsed.generatedAt).toBe(fixedAt)
    expect(parsed.totals).toEqual({
      components: 2,
      allRequiredPresent: 2,
      missingAny: 0,
      advisoryGaps: 0,
    })
    expect(parsed.lv1[0].name).toBe('Button')
    expect(parsed.lv1[0].advisories).toEqual([])
    expect(parsed.lv1[0].files.refTest).toBe('present')
    expect(parsed.lv1[1].exempt).toBe(true)
    expect(parsed.lv1[1].files.parityStories).toBe('exempt')
  })

  it('reports advisories in the JSON payload and totals.advisoryGaps', () => {
    const lv1Dir = makeLv1Dir()
    const dir = makeComponent(lv1Dir, 'Text', {
      snapshots: ['x-light.png', 'parity-x-light.png'],
      parityStories: true,
      parityVrt: true,
      roleNameTest: false, // Text is in ROLE_NAME_CONTRACT → role gap
    })
    const row = auditComponent({ name: 'Text', componentDir: dir, exported: true, exempt: false })
    const parsed = JSON.parse(renderJson([row], { generatedAt: fixedAt }))
    expect(parsed.totals.advisoryGaps).toBe(1)
    expect(parsed.lv1[0].advisories).toHaveLength(1)
    expect(parsed.lv1[0].files.roleTest).toBe('missing')
    // Advisory gaps do NOT count as required-file failures.
    expect(parsed.totals.missingAny).toBe(0)
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
    makeComponent(lv1Dir, 'Dialog', { snapshots: ['x-light.png'], interactionTest: true })
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

  it('requires the fixture section in BOTH .html.ts and .tsx (gate active)', () => {
    const lv1Dir = makeLv1Dir()
    makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-parity-light.png'],
      parityStories: true,
      parityVrt: true,
    })
    writeBarrel(lv1Dir, ['Button'])

    const fixtureDir = join(workDir, 'src/docs/__fixtures__')
    mkdirSync(fixtureDir, { recursive: true })
    const htmlFile = join(fixtureDir, 'cssApiSamples.html.ts')
    const tsxFile = join(fixtureDir, 'cssApiSamples.tsx')
    const withButton = '`<section data-component="button"></section>`\n'
    const empty = '``\n'

    // Neither fixture has the section → missing.
    writeFileSync(htmlFile, `export const vanillaHtml = ${empty}`)
    writeFileSync(tsxFile, `export const x = ${empty}`)
    expect(runAudit(workDir).rows[0].files.cssApiFixture).toBe('missing')

    // In .html.ts only (the silent-drift case the .tsx check catches) → still missing.
    writeFileSync(htmlFile, `export const vanillaHtml = ${withButton}`)
    const htmlOnly = runAudit(workDir)
    expect(htmlOnly.rows[0].files.cssApiFixture).toBe('missing')
    expect(hasFailures(htmlOnly)).toBe(true)

    // In both → present, gate clears.
    writeFileSync(tsxFile, `export const x = ${withButton}`)
    const both = runAudit(workDir)
    expect(both.rows[0].files.cssApiFixture).toBe('present')
    expect(hasFailures(both)).toBe(false)
  })
})

describe('hasInteractionTest', () => {
  function makeSpecDir(specs: Record<string, string>) {
    const dir = join(workDir, 'Component')
    mkdirSync(dir, { recursive: true })
    for (const [file, content] of Object.entries(specs)) {
      writeFileSync(join(dir, file), content)
    }
    return dir
  }

  it('returns false when every test is a screenshot or a11y test', () => {
    const dir = makeSpecDir({ 'X.vrt.spec.ts': SCREENSHOT_ONLY_SPEC })
    expect(hasInteractionTest(dir)).toBe(false)
  })

  it('detects a non-screenshot, non-a11y test block', () => {
    const dir = makeSpecDir({ 'X.vrt.spec.ts': INTERACTION_SPEC })
    expect(hasInteractionTest(dir)).toBe(true)
  })

  it('detects the test in a separate {Name}.interaction.vrt.spec.ts (DropdownMenu shape)', () => {
    const dir = makeSpecDir({
      'X.vrt.spec.ts': SCREENSHOT_ONLY_SPEC,
      'X.interaction.vrt.spec.ts':
        "test('X / submenu stays positioned', async ({ page }) => {\n  await page.click('button')\n})\n",
    })
    expect(hasInteractionTest(dir)).toBe(true)
  })

  it('does not count an a11y-titled test as an interaction test', () => {
    const dir = makeSpecDir({
      'X.vrt.spec.ts':
        'test(`X / story / light / a11y`, async ({ page }) => {\n  expect(results.violations).toEqual([])\n})\n',
    })
    expect(hasInteractionTest(dir)).toBe(false)
  })

  it('returns false for an empty spec file / a missing directory', () => {
    const dir = makeSpecDir({ 'X.vrt.spec.ts': '' })
    expect(hasInteractionTest(dir)).toBe(false)
    expect(hasInteractionTest(join(workDir, 'no-such-dir'))).toBe(false)
  })
})

describe('advisory test-existence predicates', () => {
  it('usesForwardRef / spreadsProps read the component source', () => {
    expect(usesForwardRef('const X = forwardRef((p, r) => null)')).toBe(true)
    expect(usesForwardRef('const X = (p) => null')).toBe(false)
    expect(spreadsProps('<div {...props} />')).toBe(true)
    expect(spreadsProps('<div {...rest} />')).toBe(true)
    expect(spreadsProps('<div className={x} />')).toBe(false)
  })

  it('hasRefLandsTest needs both a .current assertion and a ref hand-off', () => {
    // manual `{ current: null }` idiom
    expect(
      hasRefLandsTest(
        'const ref = { current: null }\nrender(<X ref={ref} />)\nexpect(ref.current).toBeTruthy()',
      ),
    ).toBe(true)
    // createRef idiom with a differently-named variable (`table.current`)
    expect(
      hasRefLandsTest('const table = createRef()\nexpect(table.current?.tagName).toBe("TABLE")'),
    ).toBe(true)
    // a stray `.current` with no ref hand-off is not enough
    expect(hasRefLandsTest('expect(store.current).toBe(1)')).toBe(false)
    // a ref passed but never asserted via .current is not enough
    expect(hasRefLandsTest('render(<X ref={ref} />)')).toBe(false)
  })

  it('hasTestidPassthroughTest needs the prop and an assertion on it', () => {
    expect(hasTestidPassthroughTest('render(<X data-testid="x" />)\nscreen.getByTestId("x")')).toBe(
      true,
    )
    expect(
      hasTestidPassthroughTest(
        '<X data-testid="x" />\nexpect(el.getAttribute("data-testid")).toBe("x")',
      ),
    ).toBe(true)
    expect(
      hasTestidPassthroughTest(
        '<X data-testid="x" />\nexpect(el).toHaveAttribute("data-testid", "x")',
      ),
    ).toBe(true)
    // findByTestId (async portal) counts
    expect(
      hasTestidPassthroughTest('render(<X data-testid="x" />)\nawait screen.findByTestId("x")'),
    ).toBe(true)
    // the prop alone, with no assertion, does not count
    expect(hasTestidPassthroughTest('render(<X data-testid="x" />)')).toBe(false)
  })

  it('hasRoleNameTest matches the exact role and requires a name option', () => {
    expect(hasRoleNameTest("screen.getByRole('button', { name: 'Save' })", 'button')).toBe(true)
    expect(hasRoleNameTest('screen.findByRole("dialog", { name })', 'dialog')).toBe(true)
    // role without a { name } option does not count
    expect(hasRoleNameTest("screen.getByRole('radio')", 'radio')).toBe(false)
    // `radiogroup` must not satisfy a `radio` contract (closing-quote anchor)
    expect(hasRoleNameTest("getByRole('radiogroup', { name: 'g' })", 'radio')).toBe(false)
  })
})

describe('auditComponent — advisory columns applicability', () => {
  it('keeps refTest/testidTest na when the component is not forwardRef / does not spread', () => {
    const lv1Dir = makeLv1Dir()
    // A component whose .tsx neither uses forwardRef nor spreads props.
    const dir = join(lv1Dir, 'Plain')
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'Plain.tsx'), 'export const Plain = () => <div />\n')
    writeFileSync(join(dir, 'Plain.css'), '')
    writeFileSync(join(dir, 'Plain.stories.tsx'), '')
    writeFileSync(join(dir, 'Plain.test.tsx'), '')
    writeFileSync(join(dir, 'Plain.vrt.spec.ts'), SCREENSHOT_ONLY_SPEC)
    writeFileSync(join(dir, 'index.ts'), '')
    mkdirSync(join(dir, '__snapshots__'), { recursive: true })
    writeFileSync(join(dir, '__snapshots__', 'x-light.png'), '')
    const row = auditComponent({
      name: 'Plain',
      componentDir: dir,
      exported: true,
      exempt: false,
      // Plain is not in ROLE_NAME_CONTRACT → roleTest na too.
    })
    expect(row.files.refTest).toBe('na')
    expect(row.files.testidTest).toBe('na')
    expect(row.files.roleTest).toBe('na')
    expect(row.advisories).toEqual([])
  })

  it('routes advisory gaps into advisories, never into missing', () => {
    const lv1Dir = makeLv1Dir()
    // Button is in ROLE_NAME_CONTRACT; drop every advisory signal.
    const dir = makeComponent(lv1Dir, 'Button', {
      snapshots: ['x-light.png', 'parity-x-light.png'],
      parityStories: true,
      parityVrt: true,
      refLandsTest: false,
      testidTest: false,
      roleNameTest: false,
    })
    const row = auditComponent({ name: 'Button', componentDir: dir, exported: true, exempt: false })
    expect(row.files.refTest).toBe('missing')
    expect(row.files.testidTest).toBe('missing')
    expect(row.files.roleTest).toBe('missing')
    expect(row.advisories).toHaveLength(3)
    expect(row.missing).toEqual([])
    // hasFailures ignores advisories.
    expect(hasFailures({ rows: [row], orphanedExports: [] })).toBe(false)
  })
})

describe('ROLE_NAME_CONTRACT', () => {
  // Hand-maintained map (mirrors PARITY_EXEMPT). These guards turn a wrong
  // insertion order or a stale component name into a CI failure.
  const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../..')
  const lv1Dir = join(repoRoot, 'src/components/lv1')

  it('is declared in alphabetical order', () => {
    const keys = Object.keys(ROLE_NAME_CONTRACT)
    expect(keys).toEqual([...keys].sort())
  })

  it('maps only real lv1 component directories to a non-empty role', () => {
    for (const [name, role] of Object.entries(ROLE_NAME_CONTRACT)) {
      const dir = join(lv1Dir, name)
      expect(existsSync(dir), `${name} is in ROLE_NAME_CONTRACT but ${dir} does not exist`).toBe(
        true,
      )
      expect(statSync(dir).isDirectory(), `${dir} is not a directory`).toBe(true)
      expect(typeof role === 'string' && role.length > 0, `${name} has an empty role`).toBe(true)
    }
  })

  it('ROLE_NAME_EXEMPT lists only real lv1 dirs and is disjoint from the contract', () => {
    const contract = new Set(Object.keys(ROLE_NAME_CONTRACT))
    for (const name of ROLE_NAME_EXEMPT) {
      expect(
        existsSync(join(lv1Dir, name)),
        `${name} is in ROLE_NAME_EXEMPT but does not exist`,
      ).toBe(true)
      expect(contract.has(name), `${name} is in BOTH ROLE_NAME_CONTRACT and ROLE_NAME_EXEMPT`).toBe(
        false,
      )
    }
  })

  it('classifies EVERY lv1 into exactly one of contract / exempt (partition guard)', () => {
    // The forcing function: a new lv1 added without being placed in either set
    // (or placed in both) fails here, instead of silently defaulting `roleTest`
    // to `na`. This is the role-column counterpart to PARITY_EXEMPT's coverage.
    const names = discoverComponents(lv1Dir)
    const { unclassified, both } = roleContractPartitionGaps(names)
    expect(
      unclassified,
      `lv1 component(s) in neither ROLE_NAME_CONTRACT nor ROLE_NAME_EXEMPT — add each to exactly one (see the MAINTENANCE note in audit-coverage.mjs): ${unclassified.join(', ')}`,
    ).toEqual([])
    expect(both, `lv1 component(s) in both sets: ${both.join(', ')}`).toEqual([])
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
