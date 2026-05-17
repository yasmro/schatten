#!/usr/bin/env node
// Copy the framework-agnostic CSS assets into `dist/`.
//
// These `.css` files (token layers + theme palettes) are consumed directly
// by the `./core/tokens`, `./themes/default`, and `./themes/seasonal/themes.css`
// entries in package.json's `exports` map. tsup compiles the JS/DTS but never
// touches `.css`, so this step copies them verbatim.
//
// Why a standalone script instead of tsup's `onSuccess`: `onSuccess` only runs
// for the build group it is attached to. Hanging the copy off the third group
// (`themes/seasonal/index`) meant a reordering of the config array would
// silently drop the CSS from `dist/`. Running this as its own `build:copy-css`
// step makes the copy independent of tsup's build result and entry order.
//
// See issue #121.

import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

// Source/dest directory pairs are derived from these — `src/<dir>` → `dist/<dir>`.
// Keep in sync with the matching entries in package.json's `exports`.
const dirs = ['core/tokens', 'themes/default', 'themes/seasonal']

function copyCssAssets() {
  let copied = 0

  for (const dir of dirs) {
    const srcDir = `src/${dir}`
    const destDir = `dist/${dir}`

    if (!existsSync(srcDir)) {
      throw new Error(
        `copy-css-assets: source directory "${srcDir}" not found. ` +
          'Expected one of the CSS asset directories listed in scripts/copy-css-assets.mjs.',
      )
    }

    const cssFiles = readdirSync(srcDir).filter((file) => file.endsWith('.css'))

    if (cssFiles.length === 0) {
      throw new Error(
        `copy-css-assets: no .css files found in "${srcDir}". ` +
          'This directory is expected to ship CSS assets — verify the source tree.',
      )
    }

    mkdirSync(destDir, { recursive: true })
    for (const file of cssFiles) {
      copyFileSync(join(srcDir, file), join(destDir, file))
      copied++
    }
  }

  console.log(`✓ CSS assets copied (${copied} files)`)
}

try {
  copyCssAssets()
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
