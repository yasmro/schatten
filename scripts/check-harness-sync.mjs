#!/usr/bin/env node
// Check that the vanilla-HTML verification harness
// (`examples/vanilla-html/index.html`) carries a
// `data-component="<slug>"` sample for every lv1 component on disk —
// and no orphaned samples for components that no longer exist.
//
// Why this exists: the harness is a hand-maintained copy of the class
// API surface, and nothing else gates it. The CSS API fixture
// (`src/docs/__fixtures__/cssApiSamples.html.ts`) is forced complete by
// `pnpm audit:coverage` (fixture column), but when Dialog / DropdownMenu
// landed, the harness silently stayed at 23/25 while
// `examples/vanilla-html/README.md` and
// `docs/verification/framework-agnostic.md` both claimed full static
// coverage (found during #167 refinement, fixed in PR #488). This script
// makes that drift class impossible to ship: a new lv1 must add its
// harness sample in the same PR, or the `lint` job fails.
//
// The coverage chain after this gate:
//   lv1 dirs on disk ──audit:coverage──▶ CSS API fixture (dist VRT input)
//   lv1 dirs on disk ──check:harness──▶ vanilla harness (human-eyeball surface)
//
// The slug convention is `discoverLv1()`'s: lowercased component name
// (`DropdownMenu` → `dropdownmenu`), the same value the fixture uses.
//
// Run as `pnpm check:harness`. Wired into CI's `lint` job. No build
// dependency — reads only the lv1 directories and the harness HTML.

import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { discoverLv1 } from './lv1-slugs.mjs'

export const HARNESS_REL = 'examples/vanilla-html/index.html'

// Same shape as audit-coverage.mjs's DATA_COMPONENT_RE — the marker is
// the contract both the fixture and the harness annotate samples with.
const DATA_COMPONENT_RE = /data-component="([^"]+)"/g

/**
 * Collect every `data-component="<slug>"` slug in the harness source.
 *
 * @param {string} source harness HTML source text
 * @returns {Set<string>}
 */
export function parseHarnessSlugs(source) {
  const slugs = new Set()
  for (const m of source.matchAll(DATA_COMPONENT_RE)) {
    slugs.add(m[1])
  }
  return slugs
}

/**
 * Diff the on-disk lv1 slug set against the harness slug set.
 *
 * @param {Iterable<string>} lv1Slugs slugs derived from `src/components/lv1/`
 * @param {Set<string>} harnessSlugs slugs found in the harness
 * @returns {{ missing: string[], orphaned: string[] }} `missing` = lv1 with no
 *   harness sample; `orphaned` = harness sample with no matching lv1. Both
 *   sorted for stable output.
 */
export function diffHarnessSlugs(lv1Slugs, harnessSlugs) {
  const lv1 = new Set(lv1Slugs)
  const missing = [...lv1].filter((s) => !harnessSlugs.has(s)).sort()
  const orphaned = [...harnessSlugs].filter((s) => !lv1.has(s)).sort()
  return { missing, orphaned }
}

const isCliEntry = import.meta.url === `file://${resolve(process.argv[1] ?? '')}`

if (isCliEntry) {
  if (!existsSync(HARNESS_REL)) {
    console.error(`✗ harness not found: ${HARNESS_REL} (run from the repo root)`)
    process.exit(1)
  }

  const lv1Slugs = discoverLv1().map((e) => e.slug)
  const harnessSlugs = parseHarnessSlugs(readFileSync(HARNESS_REL, 'utf8'))
  const { missing, orphaned } = diffHarnessSlugs(lv1Slugs, harnessSlugs)

  if (missing.length > 0 || orphaned.length > 0) {
    console.error(`✗ vanilla harness drift against src/components/lv1/ (${HARNESS_REL}):\n`)
    for (const s of missing) {
      console.error(
        `  - missing sample: no <... data-component="${s}"> — add a static sample ` +
          `(port it from src/docs/__fixtures__/cssApiSamples.html.ts)`,
      )
    }
    for (const s of orphaned) {
      console.error(`  - orphaned sample: data-component="${s}" has no lv1 directory`)
    }
    process.exit(1)
  }

  console.log(`✓ vanilla harness covers all ${lv1Slugs.length} lv1 components (${HARNESS_REL})`)
}
