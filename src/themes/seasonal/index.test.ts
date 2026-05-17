import { describe, expect, it } from 'vitest'
import { FORBIDDEN_SPECIAL_TOKENS, SEASONAL_THEME_METADATA } from './index'

describe('SEASONAL_THEME_METADATA', () => {
  const entries = Object.entries(SEASONAL_THEME_METADATA)
  const forbidden = new Set<string>(FORBIDDEN_SPECIAL_TOKENS)

  it('has an entry for each of the 8 shipped seasonal themes', () => {
    expect(entries).toHaveLength(8)
  })

  it('uses the record key as the name field of each entry', () => {
    for (const [key, meta] of entries) {
      expect(meta.name).toBe(key)
    }
  })

  it('allows only --color-theme-* today (loosen when accent enters allowlist)', () => {
    for (const [, meta] of entries) {
      expect(meta.allowedTokens).toEqual(['--color-theme-*'])
    }
  })

  it('never lists a Mode-owned (forbidden) token in allowedTokens', () => {
    for (const [, meta] of entries) {
      for (const token of meta.allowedTokens) {
        expect(forbidden.has(token)).toBe(false)
      }
    }
  })
})
