import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { discoverLv1, discoverLv1WithCss, discoverLv2 } from '../lv1-slugs.mjs'

// Filesystem fixtures for scripts/lv1-slugs.mjs. Each test builds the
// minimum tree under a temp root, so the discovery contract — especially the
// lv1 / lv2 asymmetry (lv2-composition-guideline §6.2 row 1) — is pinned
// without depending on which components the live repo happens to hold.

let root: string

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'lv1-slugs-'))
})

afterEach(() => {
  rmSync(root, { recursive: true, force: true })
})

function makeComponent(layer: 'lv1' | 'lv2', name: string, opts: { css?: boolean } = {}) {
  const dir = join(root, 'src/components', layer, name)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, `${name}.tsx`), '')
  if (opts.css ?? true) writeFileSync(join(dir, `${name}.css`), '')
  return dir
}

function makeLayerDir(layer: 'lv1' | 'lv2') {
  const dir = join(root, 'src/components', layer)
  mkdirSync(dir, { recursive: true })
  return dir
}

describe('discoverLv1', () => {
  it('returns an entry with the lowercased slug for each component dir', () => {
    makeComponent('lv1', 'FieldSet')
    const [entry] = discoverLv1(root)
    expect(entry.name).toBe('FieldSet')
    expect(entry.slug).toBe('fieldset')
    expect(entry.hasCss).toBe(true)
  })

  it('throws when the lv1 directory holds no component', () => {
    makeLayerDir('lv1')
    expect(() => discoverLv1(root)).toThrow(/no lv1 components/)
  })

  it('throws from discoverLv1WithCss when a component lacks its .css', () => {
    makeComponent('lv1', 'Button', { css: false })
    expect(() => discoverLv1WithCss(root)).toThrow(/missing the class-API CSS file: Button/)
  })
})

describe('discoverLv2', () => {
  it('returns [] when the lv2 directory does not exist', () => {
    expect(discoverLv2(root)).toEqual([])
  })

  it('returns [] when the lv2 directory holds only its barrel', () => {
    const lv2Dir = makeLayerDir('lv2')
    writeFileSync(join(lv2Dir, 'index.ts'), 'export {}\n')
    expect(discoverLv2(root)).toEqual([])
  })

  it('skips subdirectories without a <Name>.tsx', () => {
    const lv2Dir = makeLayerDir('lv2')
    mkdirSync(join(lv2Dir, '__snapshots__'))
    expect(discoverLv2(root)).toEqual([])
  })

  it('discovers an lv2 that ships a .css', () => {
    makeComponent('lv2', 'EmptyState')
    const [entry] = discoverLv2(root)
    expect(entry.name).toBe('EmptyState')
    expect(entry.slug).toBe('emptystate')
    expect(entry.hasCss).toBe(true)
    expect(entry.css).toBe(join(root, 'src/components/lv2/EmptyState/EmptyState.css'))
  })

  it('reports a .css-less lv2 through hasCss instead of throwing', () => {
    makeComponent('lv2', 'ConfirmDialog', { css: false })
    const entries = discoverLv2(root)
    expect(entries.map((e) => [e.name, e.hasCss])).toEqual([['ConfirmDialog', false]])
  })
})
