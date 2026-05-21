#!/usr/bin/env node
// CI gate: regenerate the manifest from the current `dist/schatten.css` and
// diff it against the committed snapshot under `src/__generated__/`. If they
// differ, print the set difference (added / removed entries per section) so
// the PR reviewer sees the surface change directly in the CI log without
// having to check out the branch and run `pnpm update:manifest` locally.
//
// The "needs a changeset" check is best-effort: when the snapshot drifts and
// no changeset is present on the PR, the failure message escalates to also
// demand a `CSS API:` changeset. This piggybacks on the existing
// `changeset status --since=origin/<base>` mechanic the CI's `changeset` job
// already uses.

import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { extractManifest } from './generate-manifest.mjs'

const distCssPath = resolve('dist/schatten.css')
const committedPath = resolve('src/__generated__/schatten.manifest.json')

const distCss = readFileSync(distCssPath, 'utf8')
const committedRaw = readFileSync(committedPath, 'utf8').trimEnd()
const regenerated = extractManifest(distCss)
const regeneratedStr = JSON.stringify(regenerated, null, 2)

if (regeneratedStr === committedRaw) {
  console.log('✓ manifest in sync with src/__generated__/schatten.manifest.json')
  process.exit(0)
}

// Drift detected — show the per-section set diff inline.
/** @type {{ $schemaVersion: 1, classes: string[], dataAttributes: string[], cssVariables: string[] }} */
const committed = JSON.parse(committedRaw)

/**
 * @param {string} label
 * @param {readonly string[]} before
 * @param {readonly string[]} after
 */
function logDiff(label, before, after) {
  const beforeSet = new Set(before)
  const afterSet = new Set(after)
  const added = after.filter((x) => !beforeSet.has(x))
  const removed = before.filter((x) => !afterSet.has(x))
  console.error(`  + ${label} (${added.length} added)${added.length ? ':' : ''}`)
  for (const a of added) console.error(`      ${a}`)
  console.error(`  - ${label} (${removed.length} removed)${removed.length ? ':' : ''}`)
  for (const r of removed) console.error(`      ${r}`)
}

console.error('✗ schatten.manifest.json drift detected.\n')
logDiff('classes', committed.classes, regenerated.classes)
logDiff('dataAttributes', committed.dataAttributes, regenerated.dataAttributes)
logDiff('cssVariables', committed.cssVariables, regenerated.cssVariables)

// Heuristic check for "did the author add a changeset for this surface
// change?". The base ref comes from GitHub Actions; locally we fall back to
// `develop` so a developer running the script in a clean checkout still
// gets a useful message.
const baseRef = process.env.GITHUB_BASE_REF || 'develop'
let hasChangeset = false
try {
  const out = execSync(`pnpm exec changeset status --since=origin/${baseRef}`, {
    stdio: ['ignore', 'pipe', 'pipe'],
  }).toString()
  hasChangeset = !/No changesets present/.test(out)
} catch {
  // `changeset status` exits non-zero when there is no changeset. Treat as none.
  hasChangeset = false
}

console.error('\n  Regenerate with: pnpm update:manifest')
console.error('  Then commit src/__generated__/schatten.manifest.json.')
if (!hasChangeset) {
  console.error('  AND add a changeset (`CSS API:` prefix) explaining the surface change.')
}

process.exit(1)
