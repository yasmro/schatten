#!/usr/bin/env node
// Check that every public-vocabulary CSS variable referenced by the dist
// CSS chain is declared in the public registrar
// (`src/styles/public-tokens.css`).
//
// Why this exists (#317 / PR #454 review): before #317, adding a token to
// a `@theme` block made Tailwind auto-emit it into the dist `@layer theme`
// block — so a new public variable could not silently miss the manifest;
// `pnpm check:manifest` went red until the snapshot was updated. With the
// hand-maintained registrar, the failure mode inverted: forget the
// registrar row and the variable simply never becomes public — Storybook
// works (base.css `@theme` still feeds it), every gate stays green, and
// the omission ships. This script restores the forcing function for the
// common case: a variable that component CSS actually consumes.
//
// What it checks: every `var(--x)` reference in
// `src/components/lv1/*/*.css` + `src/styles/reset.css` +
// `src/styles/preflight.css` (comments stripped) must be declared in the
// registrar, unless it falls in a documented exemption class below.
//
// Known limitation (accepted): a *define-only* public token (declared and
// registered but not yet consumed — e.g. `--radius-control`) is out of
// scope by construction, and a token that is declared in
// `src/core/tokens/` but deliberately internal (weight scalars) is listed
// as an exemption rather than inferred. The exemption list is small and
// each entry carries its reason; extending it is a reviewed change.
//
// Run as `pnpm check:registrar`. Wired into CI's `lint` job alongside
// `check:layer-order` / `check:body-reset`.

import { readFileSync } from 'node:fs'
import { discoverLv1WithCss } from './lv1-slugs.mjs'

const REGISTRAR = 'src/styles/public-tokens.css'

// The lv1 css list comes from `lv1-slugs.mjs` — the same single source of
// truth `build-component-css.mjs` / `ensure-dist.mjs` build from, so this
// check scans exactly the files that ship.
const SCAN_FILES = [
  ...discoverLv1WithCss().map((entry) => entry.css),
  'src/styles/reset.css',
  'src/styles/preflight.css',
]

// Prefixes that are never registrar material:
// --radix-*    — injected at runtime by Radix (popper geometry etc.)
// --schatten-* — component-scoped derivation vars, declared on the block
//                root in the same file (see css-api.md §Structural :has())
const EXEMPT_PREFIXES = ['--radix-', '--schatten-']

// Exact names that are referenced but deliberately NOT public:
const EXEMPT_EXACT = new Set([
  // Consumer-set hook: never declared by Schatten, consumed with a
  // fallback (`var(--st-font-size-adjust, cap-height 0.7)`, #184). A
  // consumer *sets* it; Schatten only reads it.
  '--st-font-size-adjust',
  // Preflight optional hooks: the vendored preflight reads these with a
  // `normal` fallback; Tailwind never declared them either. Declaring
  // them would change preflight semantics.
  '--default-font-feature-settings',
  '--default-font-variation-settings',
  '--default-mono-font-feature-settings',
  '--default-mono-font-variation-settings',
  // Excluded from the public surface by #280 (never `@theme`-registered —
  // implementation primitives per the generate-manifest header). Do not
  // silently promote; adding one to the registrar is a `CSS API:` change.
  '--font-normal',
  '--font-medium',
  '--font-semibold',
  '--font-bold',
  '--leading-none',
])

// Internal fallback stacks (`--font-sans-fallback` etc.) — implementation
// primitives per the generate-manifest header.
const EXEMPT_PATTERNS = [/-fallback$/]

/** @param {string} css */
function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '')
}

/** @param {string} css @returns {Set<string>} */
function declaredNames(css) {
  const names = new Set()
  for (const m of stripComments(css).matchAll(/(--[A-Za-z0-9-]+)\s*:/g)) {
    names.add(m[1])
  }
  return names
}

/** @param {string} css @returns {Set<string>} */
function referencedNames(css) {
  const names = new Set()
  for (const m of stripComments(css).matchAll(/var\(\s*(--[A-Za-z0-9-]+)/g)) {
    names.add(m[1])
  }
  return names
}

/** @param {string} name */
function isExempt(name) {
  if (EXEMPT_EXACT.has(name)) return true
  if (EXEMPT_PREFIXES.some((p) => name.startsWith(p))) return true
  return EXEMPT_PATTERNS.some((re) => re.test(name))
}

const registrar = declaredNames(readFileSync(REGISTRAR, 'utf8'))
if (registrar.size === 0) {
  console.error(`check-registrar-sync: no declarations found in ${REGISTRAR} — parse failure?`)
  process.exit(2)
}

/** @type {Map<string, string[]>} */
const missing = new Map()
for (const file of [...SCAN_FILES].sort()) {
  for (const name of referencedNames(readFileSync(file, 'utf8'))) {
    if (isExempt(name) || registrar.has(name)) continue
    missing.set(name, [...(missing.get(name) ?? []), file])
  }
}

if (missing.size > 0) {
  console.error('check-registrar-sync: component/reset CSS references variables that are')
  console.error(`missing from the public registrar (${REGISTRAR}):`)
  console.error('')
  for (const [name, files] of [...missing.entries()].sort()) {
    console.error(`  ${name}`)
    for (const f of files) console.error(`    referenced in ${f}`)
  }
  console.error('')
  console.error('Either add a registrar row (public surface change — needs a `CSS API:`')
  console.error('changeset + `pnpm update:manifest`), or, if the variable is deliberately')
  console.error('internal, add it to the exemption list in this script with a reason.')
  process.exit(1)
}

console.log(
  `check-registrar-sync: OK — every public-vocabulary var() reference resolves to the registrar (${registrar.size} declared)`,
)
