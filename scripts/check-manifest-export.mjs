#!/usr/bin/env node
// CI gate (manifest job): verify that the shipped manifest is actually
// reachable and introspectable through the package's public export map.
//
// The existing gates cover adjacent concerns but leave a gap:
//   - `pnpm check:manifest` (check-manifest-diff.mjs) proves the committed
//     snapshot matches `dist/schatten.css` — but reads the dist file by path,
//     never through the `exports` map.
//   - `pnpm lint:pkg` (publint) proves the `exports` syntax is valid and the
//     target file exists — but never parses the file or checks its contents.
//
// This script closes that gap: it resolves `./schatten.manifest.json` through
// `package.json#exports`, parses the dist copy, and asserts
//   (1) the four surface keys are present and valid JSON,
//   (2) the dist-only introspection fields (package / version / generatedAt)
//       are present (they must NOT be on the committed snapshot — the
//       asymmetry the snapshot test guards from the other side), and
//   (3) the surface half of the dist copy deep-equals the committed snapshot,
//       so "what a consumer imports" == "what CI pins".
//
// Pure helpers (`resolveExportTarget` / `validateDistManifest`) are exported so
// the Vitest unit test can exercise them on fixtures without a built dist.

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/** The four keys that make up the public CSS surface (present on both copies). */
export const SURFACE_KEYS = ['$schemaVersion', 'classes', 'dataAttributes', 'cssVariables']

/** Fields that live ONLY on the dist copy, for in-the-wild introspection. */
export const DIST_ONLY_FIELDS = ['package', 'version', 'generatedAt']

/** The public subpath the manifest is exported under. */
export const MANIFEST_SUBPATH = './schatten.manifest.json'

/**
 * Resolve the manifest's export target from a parsed package.json.
 *
 * Mirrors what a consumer's Node resolver does for
 * `import '@yasmro/schatten/schatten.manifest.json'`: it looks up
 * `exports['./schatten.manifest.json']`. Kept pure (takes the parsed object,
 * returns the target string) so the unit test can feed it a fixture without a
 * self-referencing `node_modules` entry — which this repo does not have, so
 * `require.resolve('@yasmro/schatten/...')` would not work in-tree anyway.
 *
 * @param {Record<string, unknown>} pkgJson
 * @returns {string} the export target (e.g. './dist/schatten.manifest.json')
 */
export function resolveExportTarget(pkgJson) {
  const exportsMap = pkgJson.exports
  if (!exportsMap || typeof exportsMap !== 'object') {
    throw new Error('package.json has no "exports" map')
  }
  const target = /** @type {Record<string, unknown>} */ (exportsMap)[MANIFEST_SUBPATH]
  if (typeof target !== 'string') {
    throw new Error(
      `package.json#exports["${MANIFEST_SUBPATH}"] is missing or not a string (got ${JSON.stringify(target)})`,
    )
  }
  return target
}

/**
 * Validate the dist manifest against the committed snapshot.
 *
 * @param {unknown} distJson  parsed `dist/schatten.manifest.json`
 * @param {unknown} snapshot  parsed `src/__generated__/schatten.manifest.json`
 * @returns {string[]} list of problems; empty means valid
 */
export function validateDistManifest(distJson, snapshot) {
  /** @type {string[]} */
  const errors = []

  if (typeof distJson !== 'object' || distJson === null) {
    return ['dist manifest is not a JSON object']
  }
  const dist = /** @type {Record<string, unknown>} */ (distJson)

  // (1) surface keys present
  for (const key of SURFACE_KEYS) {
    if (!(key in dist)) errors.push(`dist manifest is missing surface key "${key}"`)
  }
  if (dist.$schemaVersion !== 1) {
    errors.push(`dist manifest $schemaVersion should be 1 (got ${JSON.stringify(dist.$schemaVersion)})`)
  }
  for (const key of /** @type {const} */ (['classes', 'dataAttributes', 'cssVariables'])) {
    if (key in dist && !Array.isArray(dist[key])) {
      errors.push(`dist manifest "${key}" should be an array`)
    }
  }

  // (2) dist-only introspection fields present + non-empty
  for (const key of DIST_ONLY_FIELDS) {
    if (!dist[key]) errors.push(`dist manifest is missing dist-only field "${key}"`)
  }

  // (3) surface half deep-equals the committed snapshot
  if (typeof snapshot !== 'object' || snapshot === null) {
    errors.push('committed snapshot is not a JSON object')
    return errors
  }
  const snap = /** @type {Record<string, unknown>} */ (snapshot)

  // The snapshot must be surface-only — the dist-only fields belong on the
  // dist copy alone (the snapshot test guards this from its side; assert it
  // here too so this gate is self-contained).
  for (const key of DIST_ONLY_FIELDS) {
    if (key in snap) errors.push(`committed snapshot must NOT carry dist-only field "${key}"`)
  }

  for (const key of SURFACE_KEYS) {
    const a = JSON.stringify(dist[key])
    const b = JSON.stringify(snap[key])
    if (a !== b) {
      errors.push(
        `surface key "${key}" differs between the exported dist copy and the committed snapshot`,
      )
    }
  }

  return errors
}

// CLI side — skipped when imported as a module.
const isCliEntry = import.meta.url === `file://${resolve(process.argv[1] ?? '')}`

if (isCliEntry) {
  const pkg = JSON.parse(readFileSync(resolve('package.json'), 'utf8'))
  const target = resolveExportTarget(pkg)
  const distManifestPath = resolve(target)
  const snapshotPath = resolve('src/__generated__/schatten.manifest.json')

  let distJson
  try {
    distJson = JSON.parse(readFileSync(distManifestPath, 'utf8'))
  } catch (err) {
    console.error(
      `✗ could not read/parse the exported manifest at ${target}\n` +
        `  (resolved from package.json#exports["${MANIFEST_SUBPATH}"]).\n` +
        `  Run \`pnpm build\` first — the dist copy is generated by build:manifest.\n` +
        `  Underlying error: ${/** @type {Error} */ (err).message}`,
    )
    process.exit(1)
  }
  const snapshot = JSON.parse(readFileSync(snapshotPath, 'utf8'))

  const errors = validateDistManifest(distJson, snapshot)
  if (errors.length > 0) {
    console.error('✗ manifest export check failed:\n')
    for (const e of errors) console.error(`  - ${e}`)
    console.error(`\n  Exported target: ${target}`)
    process.exit(1)
  }

  console.log(
    `✓ manifest export: ${MANIFEST_SUBPATH} → ${target} resolves, ` +
      `dist copy valid (package/version/generatedAt present), surface == snapshot`,
  )
}
