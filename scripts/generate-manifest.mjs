#!/usr/bin/env node
// Generate `dist/schatten.manifest.json` — the machine-readable listing of
// Schatten's public CSS API (see .claude/rules/api-stability.md and
// .claude/rules/css-api.md for the contract this file pins).
//
// Two outputs, intentionally asymmetric:
//
//   - dist/schatten.manifest.json (always written by `pnpm build:manifest`)
//     Consumer-facing copy. Includes `package` / `version` / `generatedAt`
//     for in-the-wild introspection ("which surface does the schatten I
//     installed publish?"). Shipped under the `./schatten.manifest.json`
//     export.
//
//   - src/__generated__/schatten.manifest.json (only when `--commit` is
//     passed; `pnpm update:manifest` is the wrapper)
//     CI gate. Excludes `version` / `generatedAt` deliberately so
//     `changeset version` does not churn the snapshot and the
//     `develop → main` release PR does not look like a surface change.
//
// The CI gate (`scripts/check-manifest-diff.mjs`) regenerates the surface
// from `dist/schatten.css` and diffs against the committed snapshot — if
// they disagree, the author either forgot to run `pnpm update:manifest`
// or genuinely added/removed public surface and owes a changeset.

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import postcss from 'postcss'

// Public class shape, enforced by .claude/rules/css-api.md. `.tooltip-content`
// and similar legacy names that still live in dist today (the pre-sweep
// component CSS) are excluded by construction.
const CLASS_RE = /\.(st-[A-Za-z0-9_-]+)/g

// State hooks recognised by the contract: every `data-*` (data-state /
// data-side / data-swipe / data-orientation / data-theme / data-error /
// data-disabled / …) plus the two ARIA attributes `aria-invalid` and
// `aria-busy` that css-api.md pins as styling hooks. Other aria-* are
// outside the contract.
const ATTR_RE = /\[(data-[a-z-]+|aria-(?:invalid|busy))(?:=|~=|\^=|\$=|\*=|\])/g

/**
 * Extract the public CSS surface from a compiled stylesheet.
 *
 * Pure function — exported so the Vitest unit test can feed it fixture CSS
 * without depending on `dist/schatten.css` existing.
 *
 * @param {string} css
 * @returns {{
 *   $schemaVersion: 1,
 *   classes: string[],
 *   dataAttributes: string[],
 *   cssVariables: string[],
 * }}
 */
export function extractManifest(css) {
  const root = postcss.parse(css)
  const classes = new Set()
  const dataAttributes = new Set()
  const cssVariables = new Set()

  root.walkRules((rule) => {
    for (const selector of rule.selectors) {
      for (const match of selector.matchAll(CLASS_RE)) classes.add(match[1])
      for (const match of selector.matchAll(ATTR_RE)) dataAttributes.add(match[1])
    }
  })

  // Public CSS variables = exactly the declarations in the `@layer theme`
  // registrar. Since #317 that block is the hand-maintained
  // `src/styles/public-tokens.css` (before #317 it was compiled by Tailwind
  // v4 from `@theme { … }` directives — the extraction criterion, "declared
  // inside `@layer theme { :root, :host { --foo: …; } }`", is unchanged).
  // Variables declared in source `:root` blocks outside that registrar
  // (font-weight scalars in typography.css, fallback stacks like
  // `--font-sans-fallback`, raw scale tokens like `--text-xs`) are
  // implementation primitives and not part of the contract — they must not
  // appear in the manifest.
  root.walkAtRules('layer', (layerRule) => {
    if (layerRule.params !== 'theme') return
    layerRule.walkDecls((decl) => {
      if (!decl.prop.startsWith('--')) return
      cssVariables.add(decl.prop)
    })
  })

  const sorted = (set) => [...set].sort()
  return {
    $schemaVersion: 1,
    classes: sorted(classes),
    dataAttributes: sorted(dataAttributes),
    cssVariables: sorted(cssVariables),
  }
}

// CLI side. Skip when imported as a module (Node sets import.meta.url to
// the file's URL; we compare against process.argv[1] resolved to a URL).
const isCliEntry = import.meta.url === `file://${resolve(process.argv[1] ?? '')}`

if (isCliEntry) {
  const args = new Set(process.argv.slice(2))
  const distCssPath = resolve('dist/schatten.css')
  const distManifestPath = resolve('dist/schatten.manifest.json')
  const committedManifestPath = resolve('src/__generated__/schatten.manifest.json')

  const css = readFileSync(distCssPath, 'utf8')
  const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf8'))
  const base = extractManifest(css)

  // dist copy — informational fields included.
  const distManifest = {
    ...base,
    package: pkg.name,
    version: pkg.version,
    generatedAt: new Date().toISOString(),
  }
  writeFileSync(distManifestPath, `${JSON.stringify(distManifest, null, 2)}\n`)

  // Committed snapshot — surface-only. Updated only when the author opts
  // in with --commit, so a routine `pnpm build` cannot silently shift it.
  if (args.has('--commit')) {
    writeFileSync(committedManifestPath, `${JSON.stringify(base, null, 2)}\n`)
  }

  console.log(
    `✓ manifest: ${base.classes.length} classes / ${base.dataAttributes.length} attrs / ${base.cssVariables.length} vars`,
  )
}
