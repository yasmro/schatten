#!/usr/bin/env node
// Check that the `@layer` declaration in `.claude/rules/css-api.md`
// matches `src/styles/entry.css` (and, when available, the first
// `@layer …;` line in the built `dist/schatten.css`).
//
// Why this exists: during #277 the dist `@layer` order was wrong
// because `entry.css` declared `@layer reset, tokens, components,
// utilities;` while Tailwind v4's `@import "tailwindcss"` then
// injected `@layer theme { … }` / `@layer base { … }` *after* those
// 4 layers — putting preflight at the *highest* cascade priority
// and silently breaking every `<button class="st-btn …">` consumer
// would write. `CSSApiDist.vrt.spec.ts` caught the visual; the
// `css-api.md` rule doc, however, kept documenting the old (broken)
// 4-layer order. This script makes that drift impossible to ship:
// the rule doc, the entry, and the dist must all match.
//
// What it checks:
//
// 1. `.claude/rules/css-api.md` contains a `@layer …;` declaration
//    inside a fenced code block under the §`@layer` order section.
// 2. `src/styles/entry.css` has the same `@layer …;` declaration.
//
// Why not also cross-check `dist/schatten.css`: Tailwind v4 minifies
// the dist without emitting an explicit `@layer A, B, C, ...;`
// declaration — it just emits per-layer blocks (`@layer theme { … }`
// `@layer base { … }` `@layer tokens;` etc.) in declared order.
// There is no reliable single line in dist to match against. The
// visual contract is verified by `CSSApiDist.vrt.spec.ts` instead.
//
// Run as `pnpm check:layer-order`. Wired into CI's `lint` job.

import { existsSync, readFileSync } from 'node:fs'

const RULE_DOC = '.claude/rules/css-api.md'
const ENTRY_CSS = 'src/styles/entry.css'

/**
 * Extract the FIRST `@layer …;` declaration (no body block — pure
 * layer-order declaration, not `@layer X { … }`). Returns the
 * declaration text without trailing `;` / whitespace.
 *
 * For markdown sources, scopes the search to fenced code blocks so
 * prose mentions like "`@layer components` doesn't matter" don't
 * trip the regex.
 *
 * @param {string} source
 * @param {{ markdown?: boolean }} [opts]
 * @returns {string | null}
 */
function extractLayerDeclaration(source, opts = {}) {
  // Restrict to fenced code blocks for markdown. The first ```css
  // block under §`@layer` order is the canonical declaration.
  let haystack = source
  if (opts.markdown) {
    const blocks = source.match(/```(?:css)?\s*\n[\s\S]*?\n```/g)
    if (!blocks || blocks.length === 0) return null
    haystack = blocks.join('\n')
  }
  // `@layer NAME[, NAME]*;` — declaration form only. The `(?!\s*\{)`
  // lookahead skips `@layer X { … }` rule blocks (in case the
  // markdown source has those before the declaration).
  const match = haystack.match(/@layer\s+([a-zA-Z][a-zA-Z0-9_,\s-]*?)\s*;(?!\s*\{)/)
  if (!match) return null
  // Normalize whitespace and trailing comma; we compare by canonical
  // form so a stray space or trailing comma can't trip the diff.
  return match[1].trim().replace(/\s+/g, ' ').replace(/,\s*$/, '')
}

/**
 * @param {string} path
 * @returns {string}
 */
function readOrThrow(path) {
  if (!existsSync(path)) {
    console.error(`check-layer-order: required file not found: ${path}`)
    process.exit(2)
  }
  return readFileSync(path, 'utf8')
}

const ruleDocSource = readOrThrow(RULE_DOC)
const entrySource = readOrThrow(ENTRY_CSS)

const ruleDocLayer = extractLayerDeclaration(ruleDocSource, { markdown: true })
const entryLayer = extractLayerDeclaration(entrySource)

if (!ruleDocLayer) {
  console.error(`check-layer-order: no \`@layer …;\` declaration found in ${RULE_DOC}.`)
  console.error('Expected a fenced code block under "## `@layer` order" with')
  console.error('  @layer theme, base, reset, tokens, components, utilities;')
  console.error('or the current canonical layer order.')
  process.exit(1)
}
if (!entryLayer) {
  console.error(`check-layer-order: no \`@layer …;\` declaration found in ${ENTRY_CSS}.`)
  process.exit(1)
}

if (ruleDocLayer !== entryLayer) {
  console.error('check-layer-order: layer order drift between rule doc and entry.css')
  console.error('')
  console.error(`  ${RULE_DOC}:`)
  console.error(`    @layer ${ruleDocLayer};`)
  console.error(`  ${ENTRY_CSS}:`)
  console.error(`    @layer ${entryLayer};`)
  console.error('')
  console.error('Update both in the same commit. The dist VRT will catch a')
  console.error('runtime mismatch (CSSApiDist.vrt.spec.ts), but this script')
  console.error('catches doc drift earlier — at lint time, before VRT runs.')
  process.exit(1)
}

console.log(`check-layer-order: OK — @layer ${ruleDocLayer};`)
