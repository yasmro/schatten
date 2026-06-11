import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { SEASONAL_THEME_METADATA } from '../../themes/seasonal'
import { buildScopedThemeCss, SEASONAL_DISPLAY } from './scoped-theme-css'

// The story files inject these via Vite `?raw` imports; the test reads the
// same files from disk (Vitest resolves `?raw` CSS imports to '').
const SOURCES = {
  semanticCss: readFileSync(resolve(__dirname, '../../core/tokens/semantic.css'), 'utf8'),
  seasonalCss: readFileSync(resolve(__dirname, '../../themes/seasonal/themes.css'), 'utf8'),
}

/*
 * Scoped-theme-CSS drift guard.
 *
 * `buildScopedThemeCss()` extracts the solid family out of semantic.css with
 * a regex and rewrites the seasonal selectors of themes.css with a string
 * replace. Both inputs are production CSS that other people refactor without
 * thinking about this helper — a comment-style change, a selector rename, or
 * a solid-token rename could silently produce CSS that no longer re-tints
 * the per-cell scopes (the Theme Audit and Seasonal Showcase stories would
 * quietly fall back to the default alabaster ramp on solid surfaces). This
 * test pins the *shape* of the built CSS so that kind of silent breakage
 * fails the unit suite instead.
 */

const SOLID_TOKENS = [
  '--color-solid:',
  '--color-solid-hover:',
  '--color-solid-foreground:',
  '--color-solid-foreground-hover:',
] as const

describe('buildScopedThemeCss', () => {
  const css = buildScopedThemeCss('.x-cell', SOURCES)

  it('re-declares the full solid family in both the light and dark scoped blocks', () => {
    const lightBlock = css.match(/\.x-cell\[data-theme\] \{[^}]+\}/)?.[0]
    const darkBlock = css.match(/\.x-cell\.dark\[data-theme\] \{[^}]+\}/)?.[0]
    expect(lightBlock).toBeDefined()
    expect(darkBlock).toBeDefined()
    for (const token of SOLID_TOKENS) {
      expect(lightBlock).toContain(token)
      expect(darkBlock).toContain(token)
    }
  })

  it('rewrites every seasonal Special selector onto the scope class', () => {
    for (const { id } of SEASONAL_DISPLAY) {
      expect(css).toContain(`.x-cell[data-theme="${id}"]`)
    }
    // No seasonal selector may survive un-scoped — it would re-theme <html>
    // globally from inside a docs story.
    expect(css).not.toContain(':root[')
  })
})

describe('SEASONAL_DISPLAY', () => {
  it('derives one entry per shipped seasonal theme, each with term and colors', () => {
    expect(SEASONAL_DISPLAY).toHaveLength(Object.keys(SEASONAL_THEME_METADATA).length)
    for (const entry of SEASONAL_DISPLAY) {
      expect(entry.label).toMatch(/^[A-Z][a-z]+ [A-Z][a-z]+$/)
      expect(entry.term).not.toBe('')
      expect(entry.colors).not.toBe('')
    }
  })

  it('describes winter-deep as the indigo family, matching the hue-255 ramp', () => {
    // The Theme Audit story used to hand-copy "深紅・墨" here while the actual
    // ramp is hue 255 (藍). Deriving from the metadata keeps it honest.
    const winterDeep = SEASONAL_DISPLAY.find((s) => s.id === 'season--winter-deep')
    expect(winterDeep?.colors).toBe('藍色・濃紺')
  })
})
