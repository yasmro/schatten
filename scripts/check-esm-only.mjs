#!/usr/bin/env node
// Guard the ESM-only packaging contract (#479, decision in #208).
//
// The package ships ESM only from v1.0.0. This is what structurally closes
// the dual-package hazard: Schatten carries module-level state (the Toast
// store, the Field / FieldSet / Tooltip React Contexts) that silently
// breaks when two module instances coexist in one tree.
//
// What it checks:
//
// 1. `package.json#exports` — no entry may declare a `require` condition,
//    and no JS entry may declare a `default` condition. `require` is the
//    obvious regression; `default` is the subtle one: Node >= 22.12
//    supports `require(esm)`, so a `default` condition would let
//    `require('@yasmro/schatten')` succeed on new Node and throw on old
//    Node — a Node-version-dependent reopening of the hazard. Keeping
//    `import`-only makes require() resolution fail fast everywhere with
//    ERR_PACKAGE_PATH_NOT_EXPORTED. A plain-STRING target pointing at a
//    JS file is banned for the same reason: per Node's resolution rules a
//    string target is sugar for `default`, so it resolves for require()
//    too. String targets are fine for non-JS assets (CSS / JSON), which
//    is what every current string entry is.
// 2. `package.json` — no top-level `main` field (the CJS resolution root).
//    The top-level `module` / `types` fields are deliberately KEPT: they
//    are the ESM/type path for legacy resolvers that don't read `exports`.
// 3. `dist/` (only when present) — no emitted `*.cjs` / `*.d.cts` files,
//    so a tsup config regression can't silently ship dead CJS weight.
//
// publint cannot express any of these (it validates that export targets
// exist, not which conditions are allowed). The full contract lives in
// `.claude/rules/api-stability.md` § "Module format — ESM-only".
//
// Run as `pnpm check:esm-only`. Wired into CI's `lint` job (exports map,
// no build needed) and into the `manifest` job after its build step
// (where the dist check becomes effective).

import { existsSync, readFileSync, readdirSync } from 'node:fs'

const errors = []

// --- 1 + 2. package.json surface -------------------------------------------
const pkg = JSON.parse(readFileSync('package.json', 'utf8'))

if ('main' in pkg) {
  errors.push('package.json declares a top-level "main" field — the CJS resolution root must stay removed.')
}

for (const [subpath, target] of Object.entries(pkg.exports ?? {})) {
  if (typeof target === 'string') {
    // A string target is sugar for a `default` condition — it resolves for
    // require() too. Only non-JS assets (CSS / JSON) may use the string form.
    if (/\.(js|mjs|cjs)$/.test(target)) {
      errors.push(
        `exports["${subpath}"] is a plain-string JS target (${target}) — a string target acts as "default" and resolves for require(); use { "import": "…" } conditions instead.`,
      )
    }
    continue
  }
  if (typeof target !== 'object' || target === null) continue
  if ('require' in target || (target.types && typeof target.types === 'object' && 'require' in target.types)) {
    errors.push(`exports["${subpath}"] declares a "require" condition.`)
  }
  if ('default' in target) {
    errors.push(
      `exports["${subpath}"] declares a "default" condition — use "import" instead (Node >= 22.12 resolves "default" for require(esm), reopening the dual-package hazard #208).`,
    )
  }
}

// --- 3. dist artifacts (post-build only) ------------------------------------
/**
 * @param {string} dir
 * @returns {string[]}
 */
function collectCjsArtifacts(dir) {
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`
    if (entry.isDirectory()) out.push(...collectCjsArtifacts(path))
    else if (entry.name.endsWith('.cjs') || entry.name.endsWith('.d.cts')) out.push(path)
  }
  return out
}

let distNote = 'dist/ absent — skipped (run after `pnpm build` for the full check)'
if (existsSync('dist')) {
  const cjsArtifacts = collectCjsArtifacts('dist')
  for (const file of cjsArtifacts) {
    errors.push(`CJS artifact emitted: ${file} — tsup must build ESM only (format: ['esm']).`)
  }
  distNote = 'dist/ clean'
}

if (errors.length > 0) {
  console.error('check-esm-only: FAILED')
  for (const error of errors) console.error(`  - ${error}`)
  console.error('\n  The package is ESM-only since v1.0.0 (#479, decided in #208).')
  console.error('  See .claude/rules/api-stability.md § "Module format — ESM-only".')
  process.exit(1)
}

console.log(`check-esm-only: OK — exports are import-only, no "main", ${distNote}`)
