#!/usr/bin/env node
// Maintainer tool — print the CSP `script-src` source expression
// (`sha256-<base64>`) for the FOUC inline snippet.
//
// This is NOT a consumer-facing command (an npm consumer can't run a repo
// `pnpm` script). It exists for the maintainer who intentionally changes the
// snippet bytes — a `major` per `.claude/rules/api-stability.md` — and needs
// the new hash to publish in the changeset and update the README pin.
//
// Default-key consumers read the published hash straight from the README /
// `theme-init.test.ts`; consumers on a custom `storageKey` recompute it with
// the standalone Node recipe in the README (which uses the published
// `buildThemeInitScript` from `@yasmro/schatten/theme-init`), not this script.
//
// Reads from `dist/theme-init/index.js` — the built form of
// `@yasmro/schatten/theme-init` — so the hash is taken from exactly the bytes
// shipped to npm, never from un-built source that could drift. Run
// `pnpm build` first.
//
// Usage:
//   pnpm schatten:csp-hash                 # default storageKey ('schatten-theme')
//   pnpm schatten:csp-hash --key=my-theme  # custom storageKey

import { existsSync } from 'node:fs'
import path from 'node:path'
import { computeCspHash } from './csp-hash.mjs'

// `computeCspHash` lives in ./csp-hash.mjs so the unit test can import the
// hashing logic without pulling in the dist-loading dynamic `import()` below
// (which Vite's import-analysis can't transform). See
// scripts/__tests__/print-csp-hash.test.ts.

async function main() {
  const distEntry = new URL('../dist/theme-init/index.js', import.meta.url)
  if (!existsSync(distEntry)) {
    process.stderr.write('dist/theme-init/index.js not found — run `pnpm build` first.\n')
    process.exit(1)
  }
  const { THEME_INIT_SCRIPT, buildThemeInitScript } = await import(distEntry.href)
  const keyArg = process.argv.find((a) => a.startsWith('--key='))
  const script = keyArg ? buildThemeInitScript(keyArg.slice('--key='.length)) : THEME_INIT_SCRIPT
  process.stdout.write(`${computeCspHash(script)}\n`)
}

const isCliEntry = import.meta.url === `file://${path.resolve(process.argv[1] ?? '')}`
if (isCliEntry) {
  main().catch((err) => {
    process.stderr.write(`${err}\n`)
    process.exit(1)
  })
}
