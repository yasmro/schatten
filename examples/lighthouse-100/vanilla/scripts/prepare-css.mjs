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

async function main() {
  await rm(publicDir, { recursive: true, force: true })
  await mkdir(resolve(publicDir, 'css'), { recursive: true })

  const template = await readFile(resolve(root, 'src/index.template.html'), 'utf8')
  const tokens = await readFile(resolve(pkgRoot, 'core/tokens/index.css'), 'utf8')
  const theme = await readFile(resolve(pkgRoot, 'themes/default/index.css'), 'utf8')

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

  console.log('public/ ready — inlined tokens + themes; copied 2 component CSS files')
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
