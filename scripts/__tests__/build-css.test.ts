import { describe, expect, it } from 'vitest'
import { buildSchattenCss, DIST_BANNER, TW4_BASELINE_TARGETS } from '../build-css.mjs'

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
    // spike caught exactly this with chrome < 111). The negative lookbehind
    // exempts the `oklab` keyword/function so a legitimate future oklab()
    // usage doesn't false-positive here.
    expect(css).toContain('oklch(')
    expect(css).not.toMatch(/(?<!ok)lab\(/)
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

  it('wires the vendored preflight to Schatten font tokens directly', () => {
    // #231: the preflight html / code rules reference --font-sans / --font-mono
    // DIRECTLY, not through the Tailwind-named --default-*-font-family
    // indirection they carried upstream. Those two variables were the last
    // Tailwind-convention names on the public surface (they collide with a
    // consumer's own Tailwind v4 preflight in the shared @layer theme), so the
    // CSS-variable audit removed them — value-identical, since the indirection
    // already resolved to these tokens. Do not regress by re-adding them.
    // See docs/decisions/2026-07-css-variable-namespace.md.
    expect(css).not.toContain('--default-font-family')
    expect(css).not.toContain('--default-mono-font-family')
    expect(css).toMatch(/[{;]font-family:var\(--font-sans,/)
    expect(css).toMatch(/code,kbd,samp,pre\{font-family:var\(--font-mono,/)
  })

  it('ships the brand font stacks as the live defaults — declared once, in @layer theme only', () => {
    // The brand stacks (--font-sans / --font-serif) are load-to-activate
    // defaults: they live in @layer theme (public-tokens.css) and nothing
    // unlayered may re-declare them, or the registrar value goes dead in
    // the dist. That is exactly what happened to --font-sans until 2026-07:
    // a carry-over `:root { --font-sans: var(--font-sans-fallback) }` from
    // the pre-#275 standalone entry silently overrode the brand stack
    // (serif had no such override — the asymmetry was accidental). See
    // docs/decisions/2026-07-font-sans-brand-default.md. This pins the
    // symmetric contract: exactly one declaration per variable.
    expect(css).toContain('--font-sans:"Hanken Grotesk", "LINE Seed JP", var(--font-sans-fallback)')
    expect(css).toContain('--font-serif:"EB Garamond", "Noto Serif JP", var(--font-serif-fallback)')
    expect(css.match(/--font-sans:/g)).toHaveLength(1)
    expect(css.match(/--font-serif:/g)).toHaveLength(1)
  })

  it('opens with the MIT attribution banner for the vendored preflight', () => {
    // lightningcss strips every comment, so the banner must be prepended by
    // buildSchattenCss itself — losing it would ship the vendored (MIT)
    // preflight with no license notice in the distributed artifact.
    expect(css.startsWith(DIST_BANNER)).toBe(true)
    expect(DIST_BANNER).toMatch(/^\/\*!.*MIT License.*\*\/\n$/)
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
