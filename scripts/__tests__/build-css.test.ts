import { describe, expect, it } from 'vitest'
import { buildSchattenCss, TW4_BASELINE_TARGETS } from '../build-css.mjs'

// Smoke tests for the lightningcss dist build (#317). These pin the
// properties of the compiled output that a lightningcss version bump (or a
// careless `targets` edit) could silently break — the cheap, fast guard in
// front of the expensive one (`CSSApiDist.vrt.spec.ts`, which verifies the
// same contract visually). lightningcss is exact-pinned in package.json;
// when bumping it, a failure here is the first signal that the new version
// changed output shape.

describe('buildSchattenCss', () => {
  // Compile once — the bundle covers every assertion below.
  const css = buildSchattenCss()

  it('preserves the six-layer cascade order (theme < base < reset < tokens < components < utilities)', () => {
    const order = ['theme', 'base', 'reset', 'tokens', 'components', 'utilities']
    const positions = order.map((name) => {
      // Each layer appears as `@layer <name>{` (populated) or inside a
      // `@layer a,b,c;` statement (empty) — locate whichever form exists.
      const block = css.indexOf(`@layer ${name}{`)
      if (block !== -1) return block
      const stmt = css.search(new RegExp(`@layer [a-z, ]*\\b${name}\\b[a-z, ]*;`))
      expect(stmt, `@layer ${name} missing from dist output`).toBeGreaterThanOrEqual(0)
      return stmt
    })
    const sorted = [...positions].sort((a, b) => a - b)
    expect(positions).toEqual(sorted)
  })

  it('keeps modern syntax verbatim — no downleveling under the TW4 baseline targets', () => {
    // oklch tokens must NOT be compiled to hex + lab() fallbacks (that is
    // what happens when `targets` includes a pre-oklch browser — the #317
    // spike caught exactly this with chrome < 111).
    expect(css).toContain('oklch(')
    expect(css).not.toContain('lab(')
    // Two-value font-size-adjust (#184) passes the parser untouched.
    expect(css).toMatch(/font-size-adjust:var\(--st-font-size-adjust,cap-height\s*\.7\)/)
    // color-mix and :has survive as authored.
    expect(css).toContain('color-mix(')
    expect(css).toContain(':has(')
  })

  it('keeps still-needed vendor prefixes (the reason targets must not be omitted)', () => {
    // With `targets` unset, lightningcss drops -webkit-* prefixes current
    // engines still require — spike finding, do not regress.
    expect(css).toContain('-webkit-user-select')
    expect(css).toContain('-webkit-text-size-adjust')
  })

  it('wires the vendored preflight to Schatten font tokens via the registrar', () => {
    // public-tokens.css must keep the two load-bearing --default-* rows —
    // they are the only definition the preflight html / code rules resolve
    // against (see src/styles/public-tokens.css header).
    expect(css).toContain('--default-font-family:var(--font-sans)')
    expect(css).toContain('--default-mono-font-family:var(--font-mono)')
    expect(css).toMatch(/code,kbd,samp,pre\{font-family:var\(--default-mono-font-family/)
  })

  it('contains no Tailwind build-time syntax', () => {
    // A `@theme` / `@apply` / `--theme(` leaking into the dist means a
    // Storybook-only file (base.css / fonts.css) got imported into the
    // dist entry chain.
    expect(css).not.toContain('@theme')
    expect(css).not.toContain('@apply')
    expect(css).not.toContain('--theme(')
  })

  it('pins the TW4 baseline targets literally (safari 16.4 / chrome 111 / firefox 128)', () => {
    expect(TW4_BASELINE_TARGETS).toEqual({
      safari: (16 << 16) | (4 << 8),
      chrome: 111 << 16,
      firefox: 128 << 16,
    })
  })
})
