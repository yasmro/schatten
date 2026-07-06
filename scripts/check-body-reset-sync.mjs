#!/usr/bin/env node
// Check that the JP/EN `font-size-adjust` compensation on the `body`
// reset is declared identically in the dist reset (`src/styles/reset.css`,
// split out of entry.css by #317) and the Storybook entry
// (`src/styles/globals.css`).
//
// Why this exists: the JP/EN cap-height compensation (#184) lives on the
// `body` reset so it inherits to every component. It MUST be duplicated in
// both entries — `reset.css` ships in `dist/schatten.css` (what consumers
// get), and `globals.css` is what Storybook (and therefore every VRT
// screenshot) renders against. If the two drift, Storybook/VRT stays green
// while the shipped dist looks different — a regression that no other gate
// catches (the manifest doesn't track reset declarations, and VRT screenshots
// Storybook, not the dist). This script makes that drift fail at lint time.
//
// What it checks: both files contain the same `font-size-adjust: …;`
// declaration (normalized for whitespace). Run as `pnpm check:body-reset`.
// Wired into CI's `lint` job alongside `check:layer-order`.

import { existsSync, readFileSync } from 'node:fs'

const ENTRY_CSS = 'src/styles/reset.css'
const GLOBALS_CSS = 'src/styles/globals.css'

/**
 * Extract the `font-size-adjust: …;` declaration, normalized to a
 * canonical single-spaced form so a stray space can't trip the diff.
 *
 * @param {string} source
 * @returns {string | null}
 */
function extractFontSizeAdjust(source) {
  const match = source.match(/font-size-adjust\s*:\s*([^;]+);/)
  if (!match) return null
  return match[1].trim().replace(/\s+/g, ' ')
}

/**
 * @param {string} path
 * @returns {string}
 */
function readOrThrow(path) {
  if (!existsSync(path)) {
    console.error(`check-body-reset-sync: required file not found: ${path}`)
    process.exit(2)
  }
  return readFileSync(path, 'utf8')
}

const entryValue = extractFontSizeAdjust(readOrThrow(ENTRY_CSS))
const globalsValue = extractFontSizeAdjust(readOrThrow(GLOBALS_CSS))

if (!entryValue) {
  console.error(`check-body-reset-sync: no \`font-size-adjust\` declaration found in ${ENTRY_CSS}.`)
  process.exit(1)
}
if (!globalsValue) {
  console.error(
    `check-body-reset-sync: no \`font-size-adjust\` declaration found in ${GLOBALS_CSS}.`,
  )
  process.exit(1)
}

if (entryValue !== globalsValue) {
  console.error('check-body-reset-sync: body `font-size-adjust` drift between dist and Storybook')
  console.error('')
  console.error(`  ${ENTRY_CSS}:`)
  console.error(`    font-size-adjust: ${entryValue};`)
  console.error(`  ${GLOBALS_CSS}:`)
  console.error(`    font-size-adjust: ${globalsValue};`)
  console.error('')
  console.error('Update both in the same commit. Otherwise Storybook/VRT renders the')
  console.error('Storybook value while consumers get the dist value — a silent visual')
  console.error('drift no other gate catches.')
  process.exit(1)
}

console.log(`check-body-reset-sync: OK — font-size-adjust: ${entryValue};`)
