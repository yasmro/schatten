import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

// Black-box tests for the two Claude Code hooks registered in
// .claude/settings.json. Both are non-blocking: they always exit 0 and
// report through `hookSpecificOutput.additionalContext`, so a regression
// makes them go *quiet* rather than fail — which nothing else would notice.
// Each test runs the real script against a temp project
// (`CLAUDE_PROJECT_DIR`), the same way Claude Code invokes it.

const scriptsDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const COMPANIONS = join(scriptsDir, 'check-lv1-companions.mjs')
const EXPORT_INTEGRITY = join(scriptsDir, 'check-lv1-export-integrity.mjs')

let root: string

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'claude-hooks-'))
})

afterEach(() => {
  rmSync(root, { recursive: true, force: true })
})

type Layer = 'lv1' | 'lv2'

function makeComponent(layer: Layer, name: string, files: string[] = []) {
  const dir = join(root, 'src/components', layer, name)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, `${name}.tsx`), '')
  for (const file of files) writeFileSync(join(dir, file), '')
  return join(dir, `${name}.tsx`)
}

function writeBarrel(layer: Layer, names: string[]) {
  const dir = join(root, 'src/components', layer)
  mkdirSync(dir, { recursive: true })
  const lines = names.map((name) => `export * from './${name}'`)
  writeFileSync(join(dir, 'index.ts'), `${lines.join('\n')}\n`)
}

function writeFixture(slugs: string[]) {
  const dir = join(root, 'src/docs/__fixtures__')
  mkdirSync(dir, { recursive: true })
  const body = slugs.map((slug) => `<section data-component="${slug}"></section>`).join('\n')
  writeFileSync(join(dir, 'cssApiSamples.html.ts'), body)
  writeFileSync(join(dir, 'cssApiSamples.tsx'), body)
}

/** Run a hook and return its additionalContext ('' when it stayed quiet). */
function runHook(script: string, input = '') {
  const result = spawnSync(process.execPath, [script], {
    input,
    encoding: 'utf8',
    env: { ...process.env, CLAUDE_PROJECT_DIR: root },
  })
  expect(result.status, result.stderr).toBe(0)
  if (!result.stdout) return ''
  return JSON.parse(result.stdout).hookSpecificOutput.additionalContext as string
}

function editPayload(filePath: string) {
  return JSON.stringify({ tool_name: 'Edit', tool_input: { file_path: filePath } })
}

describe('check-lv1-companions (PostToolUse)', () => {
  it('asks an lv1 for its test, VRT spec and .css', () => {
    const tsx = makeComponent('lv1', 'Button')
    const out = runHook(COMPANIONS, editPayload(tsx))
    expect(out).toContain('[lv1 companion check] Button')
    expect(out).toContain('Button.test.tsx, Button.vrt.spec.ts, Button.css')
  })

  it('asks an lv1 with a .css for its CSS API fixture section', () => {
    writeFixture(['card'])
    const tsx = makeComponent('lv1', 'Button', [
      'Button.test.tsx',
      'Button.vrt.spec.ts',
      'Button.css',
    ])
    const out = runHook(COMPANIONS, editPayload(tsx))
    expect(out).toContain('<section data-component="button">')
  })

  it('asks an lv2 for its test and VRT spec only — never a .css or fixture', () => {
    writeFixture(['card'])
    const tsx = makeComponent('lv2', 'EmptyState')
    const out = runHook(COMPANIONS, editPayload(tsx))
    expect(out).toContain('[lv2 companion check] EmptyState')
    expect(out).toContain('EmptyState.test.tsx, EmptyState.vrt.spec.ts.')
    expect(out).not.toContain('EmptyState.css')
    expect(out).not.toContain('data-component')
  })

  it('stays quiet for a complete lv2 with a .css and no fixture section', () => {
    writeFixture(['card'])
    const tsx = makeComponent('lv2', 'EmptyState', [
      'EmptyState.test.tsx',
      'EmptyState.vrt.spec.ts',
      'EmptyState.css',
    ])
    expect(runHook(COMPANIONS, editPayload(tsx))).toBe('')
  })

  it('stays quiet for a file that is not a component entry', () => {
    makeComponent('lv2', 'EmptyState')
    const other = join(root, 'src/components/lv2/EmptyState/EmptyState.stories.tsx')
    expect(runHook(COMPANIONS, editPayload(other))).toBe('')
  })

  it('stays quiet on a malformed payload', () => {
    expect(runHook(COMPANIONS, 'not json')).toBe('')
  })
})

describe('check-lv1-export-integrity (Stop)', () => {
  it('stays quiet when both barrels match their directories', () => {
    makeComponent('lv1', 'Button')
    writeBarrel('lv1', ['Button'])
    writeBarrel('lv2', [])
    expect(runHook(EXPORT_INTEGRITY)).toBe('')
  })

  it('reports an lv2 directory missing from the lv2 barrel and an orphaned lv2 export', () => {
    makeComponent('lv1', 'Button')
    writeBarrel('lv1', ['Button'])
    makeComponent('lv2', 'EmptyState')
    writeBarrel('lv2', ['Gone'])
    const out = runHook(EXPORT_INTEGRITY)
    expect(out).toContain('src/components/lv2/ and src/components/lv2/index.ts')
    expect(out).toContain('without a corresponding export in index.ts: EmptyState')
    expect(out).toContain('without a matching component directory: Gone')
    expect(out).not.toContain('src/components/lv1/')
  })

  it('reports both layers in one message when both drift', () => {
    makeComponent('lv1', 'Button')
    writeBarrel('lv1', [])
    makeComponent('lv2', 'EmptyState')
    writeBarrel('lv2', [])
    const out = runHook(EXPORT_INTEGRITY)
    expect(out).toContain('src/components/lv1/index.ts')
    expect(out).toContain('src/components/lv2/index.ts')
  })
})
