#!/usr/bin/env node
// Builds `public/` from the source template + node_modules CSS.
//
// 1. Reads the template `src/index.template.html`.
// 2. Inlines the token + theme CSS from `node_modules/@yasmro/schatten` into
//    the template's <style> placeholders so first paint has the variables
//    resolved without a network round-trip.
// 3. Copies the per-component CSS files (button.css / badge.css) into
//    `public/css/` so the <link rel="preload"> tags resolve to a local path.
//
// Run via `pnpm prepare-css` (or `pnpm build`).

import { mkdir, readFile, rm, writeFile, copyFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const pkgRoot = resolve(root, 'node_modules/@yasmro/schatten/dist')
const publicDir = resolve(root, 'public')

// The token / theme entry points (`core/tokens/index.css`,
// `themes/default/index.css`) are *only* a list of relative `@import`
// directives. Pasting that file verbatim into an inline <style> leaves the
// `@import "./semantic.css"` URLs resolving against the document origin —
// they 404 (or fall through `serve -s` to index.html) and the tokens never
// load. So we resolve the @import graph at build time and inline the
// flattened CSS, which is what "critical CSS" actually requires.
const IMPORT_RE = /@import\s+["']([^"']+)["'];?/g

async function flattenCss(entryPath) {
  const css = await readFile(entryPath, 'utf8')
  const dir = dirname(entryPath)
  const parts = []
  let lastIndex = 0
  for (const match of css.matchAll(IMPORT_RE)) {
    parts.push(css.slice(lastIndex, match.index))
    parts.push(await flattenCss(resolve(dir, match[1])))
    lastIndex = match.index + match[0].length
  }
  parts.push(css.slice(lastIndex))
  return parts.join('')
}

async function main() {
  await rm(publicDir, { recursive: true, force: true })
  await mkdir(resolve(publicDir, 'css'), { recursive: true })

  const template = await readFile(resolve(root, 'src/index.template.html'), 'utf8')
  const tokens = await flattenCss(resolve(pkgRoot, 'core/tokens/index.css'))
  const theme = await flattenCss(resolve(pkgRoot, 'themes/default/index.css'))

  const html = template
    .replace('/* @inline:core/tokens */', tokens.trim())
    .replace('/* @inline:themes/default */', theme.trim())

  await writeFile(resolve(publicDir, 'index.html'), html)

  for (const slug of ['button', 'badge']) {
    await copyFile(
      resolve(pkgRoot, 'css', `${slug}.css`),
      resolve(publicDir, 'css', `${slug}.css`),
    )
  }

  // A valid robots.txt — without it, `serve -s` falls back to index.html for
  // /robots.txt, which Lighthouse flags as an invalid robots.txt (SEO −9).
  await writeFile(resolve(publicDir, 'robots.txt'), 'User-agent: *\nAllow: /\n')

  console.log('public/ ready — inlined tokens + themes; copied 2 component CSS files; wrote robots.txt')
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
