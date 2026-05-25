// Single source of truth for "what lv1 components exist on disk."
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
//
// Used from:
// - `scripts/build-component-css.mjs`
// - `scripts/ensure-dist.mjs`
// - `src/docs/CSSApiDist.vrt.spec.ts` (via re-implemented inline
//   readdir — see the spec file header for why importing this
//   .mjs from a Playwright .ts spec is awkward)

import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const LV1_DIR = 'src/components/lv1'

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
 * Discover every lv1 component directory on disk.
 *
 * @returns {Lv1Entry[]}
 */
export function discoverLv1() {
  if (!existsSync(LV1_DIR)) {
    throw new Error(`lv1-slugs: lv1 directory "${LV1_DIR}" not found`)
  }

  /** @type {Lv1Entry[]} */
  const entries = []
  for (const name of readdirSync(LV1_DIR)) {
    const dir = join(LV1_DIR, name)
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

  if (entries.length === 0) {
    throw new Error(`lv1-slugs: no lv1 components found under "${LV1_DIR}"`)
  }

  return entries
}

/**
 * Like `discoverLv1()` but throws when any component is missing its
 * `.css` companion. Use this in tools that need every lv1 to have a
 * `.css` (the post-#154 class-API contract); use the bare
 * `discoverLv1()` when the caller wants to warn rather than throw.
 *
 * @returns {Lv1Entry[]}
 */
export function discoverLv1WithCss() {
  const all = discoverLv1()
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
