#!/usr/bin/env node
// Build `dist/schatten.css` — bundle + minify `src/styles/entry.css` with
// lightningcss (#317, replacing the Tailwind v4 CLI).
//
// What the Tailwind CLI used to do here and where each job went:
//
//   1. `@import` bundling            → lightningcss `bundle()` (this script)
//   2. `@theme { … }` expansion      → hand-maintained registrar
//                                      `src/styles/public-tokens.css`
//   3. preflight injection           → vendored `src/styles/preflight.css`
//   4. minify (lightningcss inside)  → lightningcss `minify: true`
//
// The dist entry chain is plain CSS — no `@theme`, no `@apply`, no
// `@custom-variant` — so lightningcss is a complete replacement. Storybook
// keeps its own Tailwind entry (`src/styles/globals.css` via
// `@tailwindcss/vite`); that path is dev-only and never ships.
//
// TARGETS — pinned to the Tailwind v4 browser baseline, as a literal (not
// browserslist-driven): the compiled output feeds the VRT baselines
// (`CSSApiDist.vrt.spec.ts`), so a silent baseline shift from a browserslist
// data update would drift snapshots with no source diff. Verified in the
// #317 spike (lightningcss 1.32.0): with this baseline, `oklch()` /
// `color-mix()` / `:has()` / two-value `font-size-adjust: cap-height 0.7`
// all pass through verbatim (no downleveling — every target supports
// oklch), while still-needed vendor prefixes (`-webkit-user-select` etc.)
// are preserved. Do NOT remove targets entirely — an unset `targets` makes
// lightningcss drop prefixes current engines still require.
//
// `lightningcss` is exact-pinned in package.json for the same reason vite /
// biome / storybook are: a toolchain whose output feeds a deterministic
// check (VRT baselines, the manifest) must not float.

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { bundle } from 'lightningcss'

// Tailwind v4 baseline: Safari 16.4, Chrome 111, Firefox 128.
// lightningcss encodes versions as (major << 16) | (minor << 8) | patch.
export const TW4_BASELINE_TARGETS = {
  safari: (16 << 16) | (4 << 8),
  chrome: 111 << 16,
  firefox: 128 << 16,
}

/**
 * Bundle + minify the dist stylesheet. Pure-ish (reads the entry tree from
 * disk, returns the compiled CSS as a string) — exported so the smoke test
 * can assert on the output without touching `dist/`.
 *
 * @param {string} [entry] entry stylesheet path
 * @returns {string} compiled CSS
 */
export function buildSchattenCss(entry = 'src/styles/entry.css') {
  const { code } = bundle({
    filename: entry,
    minify: true,
    targets: TW4_BASELINE_TARGETS,
  })
  return code.toString('utf8')
}

const isCliEntry = import.meta.url === `file://${resolve(process.argv[1] ?? '')}`

if (isCliEntry) {
  const outPath = resolve('dist/schatten.css')
  try {
    const css = buildSchattenCss()
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, css)
    console.log(`✓ dist/schatten.css built (${(css.length / 1024).toFixed(1)} KB, lightningcss)`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  }
}
