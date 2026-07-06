#!/usr/bin/env node
// Build per-component CSS files into `dist/css/<slug>.css`.
//
// These ship the `.st-*` rules for a single lv1 component, minified, with no
// tokens / reset / preflight baked in — consumers compose tokens separately
// via `@yasmro/schatten/tokens` (or `@yasmro/schatten/core/tokens`). Each
// output is published through `package.json#exports` as
// `@yasmro/schatten/css/<component>`.
//
// Why a separate per-component build (in addition to the integrated
// `dist/schatten.css`):
//
// - PageSpeed "Reduce unused CSS" — a consumer who uses only `<Button>` can
//   import `@yasmro/schatten/css/button` (≈1 KB gzipped) instead of the full
//   ~10 KB integrated stylesheet.
// - Vanilla HTML / WordPress / email-template consumers — the
//   framework-agnostic CSS path stays usable without pulling in everything.
// - per-component `size-limit` budgets — `.size-limit.json` watches each
//   output independently, so a sweep that bloats one component's CSS surfaces
//   in CI without being absorbed by the integrated total.
//
// Why lightningcss `transform()` (#317, replacing the Tailwind v4 CLI):
//
// - Each `src/components/lv1/<Name>/<Name>.css` is already self-contained
//   raw CSS (no `@apply`, no Tailwind utilities, no `@import` — see
//   css-api.md "Component CSS authoring conventions"), so all the build has
//   to do is minify. The Tailwind CLI was only ever acting as a lightningcss
//   wrapper here; #317 calls the engine directly.
// - `transform()` (not `bundle()`) because the inputs have no `@import`
//   chain to resolve.
// - Same `TW4_BASELINE_TARGETS` as the integrated build (see
//   scripts/build-css.mjs for the rationale — modern syntax passes through
//   verbatim, needed vendor prefixes are kept), so per-component outputs
//   match its compression profile.
//
// See #291 (per-component delivery) and #317 (Tailwind detach).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { transform } from 'lightningcss'
import { TW4_BASELINE_TARGETS } from './build-css.mjs'
import { discoverLv1WithCss } from './lv1-slugs.mjs'

const DIST_DIR = 'dist/css'

function discoverComponents() {
  // Delegated to `scripts/lv1-slugs.mjs` — single source of truth for
  // the lv1 component list (shared with `ensure-dist.mjs` and
  // `CSSApiDist.vrt.spec.ts`). `discoverLv1WithCss()` throws if any
  // lv1 is missing its `.css` companion (the post-#154 class-API
  // contract). The `check-lv1-companions` PostToolUse hook catches
  // this at edit time; this build-time throw is the backstop.
  return discoverLv1WithCss().map((entry) => ({
    name: entry.name,
    slug: entry.slug,
    srcCss: entry.css,
  }))
}

function buildOne({ name, slug, srcCss }) {
  const outCss = join(DIST_DIR, `${slug}.css`)
  try {
    const { code } = transform({
      filename: srcCss,
      code: readFileSync(srcCss),
      minify: true,
      targets: TW4_BASELINE_TARGETS,
    })
    writeFileSync(outCss, code)
  } catch (error) {
    throw new Error(
      `build-component-css: lightningcss failed for "${name}" (${srcCss}): ${
        error instanceof Error ? error.message : error
      }`,
    )
  }
  return outCss
}

function main() {
  mkdirSync(DIST_DIR, { recursive: true })

  const components = discoverComponents()
  for (const c of components) {
    buildOne(c)
  }

  console.log(`✓ per-component CSS built (${components.length} files → ${DIST_DIR}/)`)
}

try {
  main()
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
