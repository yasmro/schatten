#!/usr/bin/env node
// Post-build guard for issue #116.
//
// The React component bundles MUST start with the `'use client'` directive so
// they can be imported from a Next.js App Router Server Component. The
// framework-agnostic bundles (variants / tokens / seasonal) MUST NOT carry it,
// or non-React consumers (Astro, plain CSS) get wrongly marked client-only.
//
// `'use client'` is injected by tsup's `banner.js` (see tsup.config.ts). This
// script fails the build if that wiring ever regresses — without it, a silent
// regression ships and breaks every SSR consumer's build until the next
// release, with CI staying green the whole time.

import { existsSync, readdirSync, readFileSync } from 'node:fs'

const DIRECTIVE = "'use client';"

function firstLine(path) {
  return readFileSync(path, 'utf8').split('\n', 1)[0].trim()
}

// Recursively collect emitted JS/CJS files (skips .css / .d.ts / .d.cts).
function collectBundles(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`
    if (entry.isDirectory()) out.push(...collectBundles(path))
    else if (entry.name.endsWith('.js') || entry.name.endsWith('.cjs')) out.push(path)
  }
  return out
}

const errors = []

// Must carry the directive — every emitted bundle under dist/components.
const reactBundles = existsSync('dist/components') ? collectBundles('dist/components') : []
if (reactBundles.length === 0) {
  errors.push('dist/components has no .js/.cjs output — did `pnpm build:js` run?')
}
for (const file of reactBundles) {
  if (firstLine(file) !== DIRECTIVE) {
    errors.push(`missing ${DIRECTIVE} — ${file}`)
  }
}

// Must NOT carry the directive — framework-agnostic bundles.
const agnosticBundles = ['dist/variants/index.js', 'dist/tokens/index.js', 'dist/themes/seasonal/index.js']
for (const file of agnosticBundles) {
  if (existsSync(file) && firstLine(file) === DIRECTIVE) {
    errors.push(`unexpected ${DIRECTIVE} on framework-agnostic bundle — ${file}`)
  }
}

if (errors.length > 0) {
  console.error('check-use-client-banner: FAILED')
  for (const error of errors) console.error(`  - ${error}`)
  console.error('\n  `\'use client\'` is injected by tsup banner.js — see tsup.config.ts and issue #116.')
  process.exit(1)
}

console.log(`check-use-client-banner: OK — ${reactBundles.length} component bundles carry ${DIRECTIVE}`)
