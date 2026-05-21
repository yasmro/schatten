import { describe, expect, it } from 'vitest'
import committed from './schatten.manifest.json'

// Invariants the committed manifest must always satisfy, independent of
// whether `dist/schatten.css` is built (the CI gate
// `scripts/check-manifest-diff.mjs` is what enforces "committed == dist").
//
// These checks would all be redundant with the generator itself if the file
// were never edited by hand — but the manifest is a snapshot a human can
// touch (intentionally or by merge accident), and these assertions are the
// trip wire for that.

describe('src/__generated__/schatten.manifest.json (committed snapshot)', () => {
  it('locks $schemaVersion at 1 (bump only when the JSON shape itself changes)', () => {
    expect(committed.$schemaVersion).toBe(1)
  })

  describe('classes', () => {
    it('every entry starts with the st- prefix', () => {
      for (const c of committed.classes) {
        expect(c).toMatch(/^st-[A-Za-z0-9_-]+$/)
      }
    })

    it('entries are unique', () => {
      expect(new Set(committed.classes).size).toBe(committed.classes.length)
    })

    it('entries are sorted alphabetically', () => {
      expect([...committed.classes].sort()).toEqual(committed.classes)
    })
  })

  describe('dataAttributes', () => {
    it('every entry matches the contract shape (data-* | aria-invalid | aria-busy)', () => {
      for (const a of committed.dataAttributes) {
        expect(a).toMatch(/^(?:data-[a-z-]+|aria-(?:invalid|busy))$/)
      }
    })

    it('entries are unique', () => {
      expect(new Set(committed.dataAttributes).size).toBe(committed.dataAttributes.length)
    })

    it('entries are sorted alphabetically', () => {
      expect([...committed.dataAttributes].sort()).toEqual(committed.dataAttributes)
    })
  })

  describe('cssVariables', () => {
    it('every entry begins with a public-surface prefix', () => {
      const publicPrefixes = [
        '--color-',
        '--font-',
        '--text-',
        '--spacing-',
        '--radius-',
        '--shadow-',
        '--z-',
      ]
      for (const v of committed.cssVariables) {
        expect(publicPrefixes.some((p) => v.startsWith(p))).toBe(true)
      }
    })

    it('entries are unique', () => {
      expect(new Set(committed.cssVariables).size).toBe(committed.cssVariables.length)
    })

    it('entries are sorted alphabetically', () => {
      expect([...committed.cssVariables].sort()).toEqual(committed.cssVariables)
    })
  })

  it('does not leak the dist-only fields (version / generatedAt / package)', () => {
    // The committed snapshot is intentionally surface-only — version,
    // generatedAt, and package live on the dist copy. See
    // src/__generated__/README.md for the rationale (release-PR churn).
    expect(committed).not.toHaveProperty('version')
    expect(committed).not.toHaveProperty('generatedAt')
    expect(committed).not.toHaveProperty('package')
  })
})
