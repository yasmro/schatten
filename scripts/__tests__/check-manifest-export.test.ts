import { describe, expect, it } from 'vitest'
import {
  DIST_ONLY_FIELDS,
  MANIFEST_SUBPATH,
  resolveExportTarget,
  SURFACE_KEYS,
  validateDistManifest,
} from '../check-manifest-export.mjs'

// Unit tests for the pure helpers behind the `check:manifest:export` gate.
// Feeding them fixtures keeps the assertions independent of a built dist —
// the CI script itself is what wires them to the real package.json / dist /
// snapshot at the integration layer.

const SNAPSHOT = {
  $schemaVersion: 1,
  classes: ['st-btn', 'st-btn--primary'],
  dataAttributes: ['aria-busy', 'data-state'],
  cssVariables: ['--color-error'],
} as const

/** A dist copy = the snapshot surface + the three dist-only fields. */
function distFrom(surface: Record<string, unknown>, overrides: Record<string, unknown> = {}) {
  return {
    ...surface,
    package: '@yasmro/schatten',
    version: '0.15.0',
    generatedAt: '2026-07-08T00:00:00.000Z',
    ...overrides,
  }
}

describe('resolveExportTarget', () => {
  it('returns the manifest export target from the exports map', () => {
    const pkg = {
      exports: { [MANIFEST_SUBPATH]: './dist/schatten.manifest.json' },
    }
    expect(resolveExportTarget(pkg)).toBe('./dist/schatten.manifest.json')
  })

  it('throws when the exports map is absent', () => {
    expect(() => resolveExportTarget({})).toThrow(/no "exports" map/)
  })

  it('throws when the manifest subpath is missing', () => {
    expect(() => resolveExportTarget({ exports: { '.': './dist/index.js' } })).toThrow(
      /is missing or not a string/,
    )
  })

  it('throws when the target is a conditional object rather than a string', () => {
    const pkg = { exports: { [MANIFEST_SUBPATH]: { import: './x.json' } } }
    expect(() => resolveExportTarget(pkg)).toThrow(/is missing or not a string/)
  })
})

describe('validateDistManifest', () => {
  it('passes for a well-formed dist copy matching the snapshot', () => {
    expect(validateDistManifest(distFrom(SNAPSHOT), SNAPSHOT)).toEqual([])
  })

  it('flags a missing surface key', () => {
    const { classes, ...withoutClasses } = SNAPSHOT
    void classes
    const errors = validateDistManifest(distFrom(withoutClasses), SNAPSHOT)
    expect(errors).toContain('dist manifest is missing surface key "classes"')
  })

  it('flags a wrong $schemaVersion', () => {
    const errors = validateDistManifest(distFrom({ ...SNAPSHOT, $schemaVersion: 2 }), SNAPSHOT)
    expect(errors.some((e) => e.includes('$schemaVersion should be 1'))).toBe(true)
  })

  it.each(DIST_ONLY_FIELDS)('flags a missing dist-only field "%s"', (field) => {
    const errors = validateDistManifest(distFrom(SNAPSHOT, { [field]: undefined }), SNAPSHOT)
    expect(errors).toContain(`dist manifest is missing dist-only field "${field}"`)
  })

  it('flags a surface drift between the dist copy and the snapshot', () => {
    const drifted = distFrom({ ...SNAPSHOT, classes: ['st-btn'] })
    const errors = validateDistManifest(drifted, SNAPSHOT)
    expect(errors).toContain(
      'surface key "classes" differs between the exported dist copy and the committed snapshot',
    )
  })

  it('flags the snapshot carrying a dist-only field (asymmetry violation)', () => {
    const pollutedSnapshot = { ...SNAPSHOT, version: '0.15.0' }
    const errors = validateDistManifest(distFrom(SNAPSHOT), pollutedSnapshot)
    expect(errors).toContain('committed snapshot must NOT carry dist-only field "version"')
  })

  it('flags a non-array surface value', () => {
    const errors = validateDistManifest(distFrom({ ...SNAPSHOT, classes: 'st-btn' }), SNAPSHOT)
    expect(errors).toContain('dist manifest "classes" should be an array')
  })

  it('rejects a non-object dist input', () => {
    expect(validateDistManifest(null, SNAPSHOT)).toEqual(['dist manifest is not a JSON object'])
  })
})

describe('constants', () => {
  it('SURFACE_KEYS covers exactly the four public-surface keys', () => {
    expect(SURFACE_KEYS).toEqual(['$schemaVersion', 'classes', 'dataAttributes', 'cssVariables'])
  })

  it('DIST_ONLY_FIELDS covers the three introspection fields', () => {
    expect(DIST_ONLY_FIELDS).toEqual(['package', 'version', 'generatedAt'])
  })
})
