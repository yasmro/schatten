#!/usr/bin/env node
// Sync the README's generated lv1 blocks against the actual set of lv1
// components on disk.
//
// Why this script exists:
//
// The Per-component CSS section in README.md lists every lv1 subpath
// (`badge` · `button` · … · `tooltip`), and the Quick start §Vanilla HTML
// section carries a per-component support matrix (React vs HTML+CSS-only).
// Both are consumer-facing — the answers to "which components can I import
// from `@yasmro/schatten/css/<x>`?" and "which components work without
// React?". When a new lv1 lands, the package.json `./css/*` wildcard
// exposes it automatically, but the README does not — leading to silent
// drift. This script makes both blocks derived artifacts instead.
//
// Source of truth:
//   - lv1 component directories under `src/components/lv1/`
//   - filter: must contain `<Name>.tsx` AND `<Name>.css`
//     (matches `build-component-css.mjs`'s contract)
//   - slug: lowercased `<Name>` (matches the `.st-<block>` convention)
//   - HTML+CSS-only column: `PARITY_EXEMPT` from audit-coverage.mjs — the
//     区分 C/D set (vrt-spec-guideline §Parity stories). Exempt = the CSS
//     ships visual classes only; behavior needs React or BYO-JS.
//
// Markers in README (each block is regenerated between its pair):
//   <!-- generated:lv1-components:start --> … <!-- generated:lv1-components:end -->
//   <!-- generated:lv1-support-matrix:start --> … <!-- generated:lv1-support-matrix:end -->
//
// Modes:
//   default        write the regenerated blocks into README.md (idempotent)
//   --check        compare without writing; exit 1 if drift; print the
//                  diff so CI fails with an actionable message. Same shape
//                  as `check-manifest-diff.mjs`.

import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { PARITY_EXEMPT } from './audit-coverage.mjs'

const LV1_DIR = 'src/components/lv1'
const README_PATH = 'README.md'

function discoverNames() {
  if (!existsSync(LV1_DIR)) {
    throw new Error(`sync-readme-components: lv1 directory "${LV1_DIR}" not found`)
  }
  const names = []
  for (const name of readdirSync(LV1_DIR)) {
    const dir = join(LV1_DIR, name)
    if (!statSync(dir).isDirectory()) continue
    const tsxFile = join(dir, `${name}.tsx`)
    const cssFile = join(dir, `${name}.css`)
    if (!existsSync(tsxFile) || !existsSync(cssFile)) continue
    names.push(name)
  }
  if (names.length === 0) {
    throw new Error(`sync-readme-components: no lv1 components discovered under "${LV1_DIR}"`)
  }
  return names.sort()
}

function discoverSlugs() {
  return discoverNames()
    .map((n) => n.toLowerCase())
    .sort()
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

function renderMatrix(names) {
  // Per-component support matrix (Quick start §Vanilla HTML). The
  // HTML+CSS-only column derives from PARITY_EXEMPT (区分 C/D): those
  // components ship visual classes only — behavior needs React / BYO-JS.
  const lines = ['| Component | React | HTML + CSS only |', '| --- | :-: | :-: |']
  for (const name of names) {
    const cssOnly = PARITY_EXEMPT.has(name) ? '⚠️' : '✅'
    lines.push(`| \`${name}\` | ✅ | ${cssOnly} |`)
  }
  return lines.join('\n')
}

// Each generated README block: marker pair + its renderer.
const BLOCKS = [
  {
    label: 'Available components',
    start: '<!-- generated:lv1-components:start -->',
    end: '<!-- generated:lv1-components:end -->',
    render: () => renderBlock(discoverSlugs()),
  },
  {
    label: 'Support matrix',
    start: '<!-- generated:lv1-support-matrix:start -->',
    end: '<!-- generated:lv1-support-matrix:end -->',
    render: () => renderMatrix(discoverNames()),
  },
]

function rewriteReadme({ check }) {
  if (!existsSync(README_PATH)) {
    throw new Error(`sync-readme-components: ${README_PATH} not found`)
  }
  const source = readFileSync(README_PATH, 'utf8')
  let next = source
  const drifted = []

  for (const block of BLOCKS) {
    const startIdx = next.indexOf(block.start)
    const endIdx = next.indexOf(block.end)
    if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
      throw new Error(
        `sync-readme-components: ${README_PATH} is missing the marker pair ` +
          `(${block.start} ... ${block.end}). Wrap the "${block.label}" ` +
          'block with the markers before running this script.',
      )
    }
    // The block lives between the markers on dedicated lines so the
    // rendered Markdown is well-formed.
    const replacement = `${block.start}\n${block.render()}\n${block.end}`
    const current = next.slice(startIdx, endIdx + block.end.length)
    if (current !== replacement) drifted.push({ block, current, replacement })
    next = next.slice(0, startIdx) + replacement + next.slice(endIdx + block.end.length)
  }

  const count = discoverNames().length
  if (next === source) {
    console.log(`✓ README ${check ? '(check) ' : ''}in sync (${count} components)`)
    return
  }

  if (check) {
    for (const { block, current, replacement } of drifted) {
      console.error(`✗ README "${block.label}" drift detected — run \`pnpm sync:readme\``)
      console.error('--- current (in README.md) ---')
      console.error(current)
      console.error('--- expected (from src/components/lv1/) ---')
      console.error(replacement)
    }
    process.exit(1)
  }

  writeFileSync(README_PATH, next)
  console.log(`✓ README rewritten (${count} components)`)
}

const args = process.argv.slice(2)
const check = args.includes('--check')

try {
  rewriteReadme({ check })
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
