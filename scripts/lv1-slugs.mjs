// Single source of truth for "what lv1 / lv2 components exist on disk."
// (The file keeps its lv1 name on purpose — renaming it would ripple
// through every importer for no behavioural gain; see
// .claude/rules/lv2-composition-guideline.md §6.2 row 1.)
//
// Three tools used to keep their own copy of this list:
//
// - `scripts/build-component-css.mjs` — builds `dist/css/<slug>.css`
// - `scripts/ensure-dist.mjs`         — pre-VRT existence check
// - `src/docs/CSSApiDist.vrt.spec.ts` — per-component subpath smoke
//
// Drift between any two of these masked a missing lv1 from VRT
// coverage until a consumer hit a 404. This module is the SSOT —
// each tool calls `discoverLv1()` and gets the same shape, derived
// from the filesystem at build time.
//
// The discovery contract:
//
// - A directory under `src/components/lv1/` qualifies as a real lv1
//   component when it contains a `<Name>/<Name>.tsx` file. This
//   excludes incidental folders like `__snapshots__`.
// - Each qualifying directory MUST also ship `<Name>.css` (the
//   post-#154 class-API contract — every lv1 has a `.st-*` rule
//   file). A missing `.css` is a hard error, surfaced by the caller
//   that needs it (`build-component-css` throws; others may decide
//   to warn-only — see their callsites).
// - The `slug` is the lowercased component name (`FieldSet` →
//   `fieldset`), matching the `.st-<block>` block name convention
//   and the consumer subpath (`@yasmro/schatten/css/fieldset`).
// - lv2 (`src/components/lv2/`, `discoverLv2()`) uses the same
//   `<Name>/<Name>.tsx` test and the same slug rule, but a missing
//   `.css` is NOT an error and zero lv2s is NOT an error — see the
//   `discoverLv2()` doc comment.
//
// Used from:
// - `scripts/build-component-css.mjs` (lv1 + `.css`-bearing lv2)
// - `scripts/ensure-dist.mjs`         (lv1 + `.css`-bearing lv2)
// - `scripts/check-registrar-sync.mjs` (lv1 + `.css`-bearing lv2)
// - `scripts/check-harness-sync.mjs`  (lv1 only — lv2 has no harness)
// - `src/docs/CSSApiDist.vrt.spec.ts` (via re-implemented inline
//   readdir — see the spec file header for why importing this
//   .mjs from a Playwright .ts spec is awkward)

import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const LV1_DIR = 'src/components/lv1'
const LV2_DIR = 'src/components/lv2'

/**
 * @typedef {Object} Lv1Entry
 * @property {string} name  Component name (e.g. "Button", "FieldSet")
 * @property {string} slug  Lowercased name (e.g. "button", "fieldset")
 * @property {string} dir   Component directory relative to repo root
 * @property {string} tsx   `<Name>.tsx` path
 * @property {string} css   `<Name>.css` path (may not exist — see hasCss)
 * @property {boolean} hasCss  Whether the `.css` file exists on disk
 */

/**
 * Scan one component layer directory. A subdirectory qualifies when it
 * contains `<Name>/<Name>.tsx`; everything else (`__snapshots__`, the
 * barrel `index.ts`) is skipped. Paths are returned relative to `root`
 * joined with `layerDir`, so the default `root = '.'` yields the same
 * repo-relative paths the callers have always used.
 *
 * @param {string} layerDir  e.g. `src/components/lv1`
 * @param {string} root      repo root (tests pass a temp dir)
 * @returns {Lv1Entry[]}
 */
function scanLayer(layerDir, root) {
  const base = join(root, layerDir)
  /** @type {Lv1Entry[]} */
  const entries = []
  for (const name of readdirSync(base)) {
    const dir = join(base, name)
    if (!statSync(dir).isDirectory()) continue
    const tsx = join(dir, `${name}.tsx`)
    if (!existsSync(tsx)) continue
    const css = join(dir, `${name}.css`)
    entries.push({
      name,
      slug: name.toLowerCase(),
      dir,
      tsx,
      css,
      hasCss: existsSync(css),
    })
  }
  return entries
}

/**
 * Discover every lv1 component directory on disk.
 *
 * @param {string} [root] repo root (defaults to the current directory)
 * @returns {Lv1Entry[]}
 */
export function discoverLv1(root = '.') {
  if (!existsSync(join(root, LV1_DIR))) {
    throw new Error(`lv1-slugs: lv1 directory "${LV1_DIR}" not found`)
  }

  const entries = scanLayer(LV1_DIR, root)

  if (entries.length === 0) {
    throw new Error(`lv1-slugs: no lv1 components found under "${LV1_DIR}"`)
  }

  return entries
}

/**
 * Discover every lv2 component directory on disk.
 *
 * Deliberately asymmetric with the lv1 side
 * (.claude/rules/lv2-composition-guideline.md §6.2 row 1):
 *
 * - **No throw on zero components.** `src/components/lv2/` may hold only
 *   its barrel (no lv2 has shipped yet, or every lv2 was removed), and a
 *   missing directory means the same thing.
 * - **No throw on a missing `.css`.** An lv2 ships a `.css` only when it
 *   has visual rules of its own (§5.4) — one that only re-emits its
 *   parts' classes has none. Callers that build or scan shipped CSS
 *   filter on `hasCss`; there is no `discoverLv2WithCss()`.
 *
 * Callers that belong to the *shipped-CSS* path (build, ensure-dist,
 * registrar) read both layers. Callers that belong to the *vanilla CSS*
 * path (harness sync, `CSSApiDist`) stay on lv1 only — lv2 is
 * React-only (§5.0).
 *
 * @param {string} [root] repo root (defaults to the current directory)
 * @returns {Lv1Entry[]}
 */
export function discoverLv2(root = '.') {
  if (!existsSync(join(root, LV2_DIR))) return []
  return scanLayer(LV2_DIR, root)
}

/**
 * Like `discoverLv1()` but throws when any component is missing its
 * `.css` companion. Use this in tools that need every lv1 to have a
 * `.css` (the post-#154 class-API contract); use the bare
 * `discoverLv1()` when the caller wants to warn rather than throw.
 *
 * @param {string} [root] repo root (defaults to the current directory)
 * @returns {Lv1Entry[]}
 */
export function discoverLv1WithCss(root = '.') {
  const all = discoverLv1(root)
  const missing = all.filter((e) => !e.hasCss).map((e) => e.name)
  if (missing.length > 0) {
    throw new Error(
      `lv1-slugs: lv1 component(s) missing the class-API CSS file: ${missing.join(', ')}. ` +
        `Add src/components/lv1/<Name>/<Name>.css per .claude/rules/css-api.md ` +
        `("Exception — .st-{block} class API definitions").`,
    )
  }
  return all
}
