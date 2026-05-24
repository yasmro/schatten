#!/usr/bin/env node
// Sync the README's "Available components" list against the actual set of
// lv1 components on disk.
//
// Why this script exists:
//
// The Per-component CSS section in README.md lists every lv1 subpath
// (`badge` · `button` · … · `tooltip`). The list is consumer-facing — it
// is the answer to "which components can I import from
// `@yasmro/schatten/css/<x>`?". When a new lv1 lands, the package.json
// `./css/*` wildcard exposes it automatically, but the README sentence
// does not — leading to silent "subpath ships but README doesn't mention
// it" drift. This script makes the README a derived artifact instead.
//
// Source of truth:
//   - lv1 component directories under `src/components/lv1/`
//   - filter: must contain `<Name>.tsx` AND `<Name>.css`
//     (matches `build-component-css.mjs`'s contract)
//   - slug: lowercased `<Name>` (matches the `.st-<block>` convention)
//
// Markers in README:
//   <!-- generated:lv1-components:start -->
//   `badge` · `button` · ... · `tooltip`
//   <!-- generated:lv1-components:end -->
//
// Modes:
//   default        write the regenerated list into README.md (idempotent)
//   --check        compare without writing; exit 1 if drift; print the
//                  diff so CI fails with an actionable message. Same shape
//                  as `check-manifest-diff.mjs`.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const LV1_DIR = 'src/components/lv1'
const README_PATH = 'README.md'
const MARKER_START = '<!-- generated:lv1-components:start -->'
const MARKER_END = '<!-- generated:lv1-components:end -->'

function discoverSlugs() {
  if (!existsSync(LV1_DIR)) {
    throw new Error(`sync-readme-components: lv1 directory "${LV1_DIR}" not found`)
  }
  const slugs = []
  for (const name of readdirSync(LV1_DIR)) {
    const dir = join(LV1_DIR, name)
    if (!statSync(dir).isDirectory()) continue
    const tsxFile = join(dir, `${name}.tsx`)
    const cssFile = join(dir, `${name}.css`)
    if (!existsSync(tsxFile) || !existsSync(cssFile)) continue
    slugs.push(name.toLowerCase())
  }
  if (slugs.length === 0) {
    throw new Error(`sync-readme-components: no lv1 components discovered under "${LV1_DIR}"`)
  }
  return slugs.sort()
}

function renderBlock(slugs) {
  // Wrap to ~70 chars per line so the rendered Markdown stays readable in
  // a 80-column diff. Use ` · ` (middle dot with spaces) as the separator —
  // mirrors the existing list style and renders inline-prose-friendly.
  const items = slugs.map((s) => `\`${s}\``)
  const lines = []
  let current = ''
  const MAX = 70
  for (let i = 0; i < items.length; i++) {
    const sep = i === items.length - 1 ? '.' : ' ·'
    const candidate = current ? `${current} · ${items[i]}` : items[i]
    if (candidate.length + sep.length > MAX && current) {
      lines.push(`${current} ·`)
      current = items[i]
    } else {
      current = candidate
    }
  }
  if (current) lines.push(`${current}.`)
  return lines.join('\n')
}

function rewriteReadme({ check }) {
  if (!existsSync(README_PATH)) {
    throw new Error(`sync-readme-components: ${README_PATH} not found`)
  }
  const source = readFileSync(README_PATH, 'utf8')
  const startIdx = source.indexOf(MARKER_START)
  const endIdx = source.indexOf(MARKER_END)
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `sync-readme-components: ${README_PATH} is missing the marker pair ` +
        `(${MARKER_START} ... ${MARKER_END}). Wrap the "Available components" ` +
        'line with the markers before running this script.',
    )
  }

  const slugs = discoverSlugs()
  const block = renderBlock(slugs)
  // The block lives between the markers on dedicated lines, with leading
  // newlines so the rendered Markdown is well-formed.
  const replacement = `${MARKER_START}\n${block}\n${MARKER_END}`
  const next =
    source.slice(0, startIdx) + replacement + source.slice(endIdx + MARKER_END.length)

  if (next === source) {
    console.log(`✓ README ${check ? '(check) ' : ''}in sync (${slugs.length} components)`)
    return
  }

  if (check) {
    const oldBlock = source.slice(startIdx, endIdx + MARKER_END.length)
    const newBlock = replacement
    console.error(`✗ README "Available components" drift detected — run \`pnpm sync:readme\``)
    console.error('--- current (in README.md) ---')
    console.error(oldBlock)
    console.error('--- expected (from src/components/lv1/) ---')
    console.error(newBlock)
    process.exit(1)
  }

  writeFileSync(README_PATH, next)
  console.log(`✓ README rewritten (${slugs.length} components)`)
}

const args = process.argv.slice(2)
const check = args.includes('--check')

try {
  rewriteReadme({ check })
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
