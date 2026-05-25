#!/usr/bin/env node
// Ensure the dist artifacts that `CSSApiDist.vrt.spec.ts` reads are
// present before Playwright runs. Wired into `pnpm test:vrt:dist` so
// a developer who forgets to `pnpm build` gets an actionable error
// instead of a Playwright stack trace pointing at `readFileSync`.
//
// In CI, the VRT job pre-builds anyway (see
// `.github/workflows/vrt.yml`) so this check is a no-op there — it
// exists for the local case (#277).

import { existsSync } from 'node:fs'
import { discoverLv1WithCss } from './lv1-slugs.mjs'

// Static set — these are not lv1-derived and are pinned by name.
const REQUIRED_STATIC = [
  'dist/schatten.css',
  'dist/core/tokens/primitives.css',
  'dist/core/tokens/semantic.css',
  'dist/core/tokens/typography.css',
  'dist/core/tokens/spacing.css',
  'dist/core/tokens/z-index.css',
  'dist/themes/default/index.css',
]

// Per-component subpaths from #291. Derived from the lv1 filesystem
// via the shared `scripts/lv1-slugs.mjs` module so a new lv1 added
// to disk is automatically required here too — no manual update
// needed (which is exactly the kind of duplicate-list bookkeeping
// the shared module exists to eliminate).
const REQUIRED_LV1 = discoverLv1WithCss().map((entry) => `dist/css/${entry.slug}.css`)

const REQUIRED = [...REQUIRED_STATIC, ...REQUIRED_LV1]

const missing = REQUIRED.filter((path) => !existsSync(path))

if (missing.length > 0) {
  console.error('ensure-dist: required dist artifacts are missing:')
  for (const path of missing) {
    console.error(`  - ${path}`)
  }
  console.error('')
  console.error('Run `pnpm build` before this command. The CSSApiDist VRT spec')
  console.error('reads dist files directly via `readFileSync`, so the dist must')
  console.error('be built and current.')
  process.exit(1)
}

console.log(`ensure-dist: all ${REQUIRED.length} required dist artifacts present.`)
