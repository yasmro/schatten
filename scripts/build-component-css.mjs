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
// Why Tailwind v4 CLI (and not postcss-splitting `dist/schatten.css`):
//
// - Each `src/components/lv1/<Name>/<Name>.css` is already self-contained
//   raw CSS (no `@apply`, no Tailwind utilities — see css-api.md "Component
//   CSS authoring conventions"), so the CLI is acting purely as a minifier
//   (lightningcss under the hood).
// - Pulling rules back out of the integrated stylesheet would re-introduce
//   the ordering coupling between sweeps; per-component build keeps each
//   surface deterministic.
//
// See #291.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { discoverLv1WithCss } from './lv1-slugs.mjs'

const DIST_DIR = 'dist/css'
const TAILWIND_BIN = 'node_modules/.bin/tailwindcss'

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
  // `--minify` runs the same lightningcss pass that `build:css` uses on
  // the integrated stylesheet, so per-component outputs match its
  // compression profile.
  //
  // Tailwind CLI prints `Done in <N>ms` to stderr per invocation; 18 lines
  // of "Done" noise in CI logs is not useful. Capture stderr and only
  // surface it on failure — `execFileSync` already throws with the command
  // detail when the exit code is non-zero, so we just need to forward the
  // buffered output for diagnostics.
  try {
    execFileSync(TAILWIND_BIN, ['-i', srcCss, '-o', outCss, '--minify'], {
      stdio: ['ignore', 'ignore', 'pipe'],
    })
  } catch (error) {
    if (error && typeof error === 'object' && 'stderr' in error && error.stderr) {
      process.stderr.write(error.stderr)
    }
    throw new Error(`build-component-css: tailwindcss failed for "${name}" (${srcCss})`)
  }
  return outCss
}

function main() {
  if (!existsSync(TAILWIND_BIN)) {
    throw new Error(
      `build-component-css: tailwindcss CLI not found at "${TAILWIND_BIN}". ` +
        'Run `pnpm install` first.',
    )
  }

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
