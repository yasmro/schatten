// "Was this module run directly (`node scripts/x.mjs`), or imported?"
//
// Scripts that export pure functions for their unit tests run their CLI body
// only when executed directly. The check used to be an inline
//
//   import.meta.url === `file://${resolve(process.argv[1] ?? '')}`
//
// which compares a URL to a hand-built non-URL string. It breaks — and the
// script then silently does nothing and exits 0 — whenever the two spellings
// diverge:
//
// - the path holds a character a URL escapes (a space → `%20`, `#`, `%`, …);
// - argv[1] reaches the file through a symlink (Node resolves the main
//   module to its real path, so `import.meta.url` is the realpath).
//
// For a CI gate that is the worst failure direction: `pnpm check:readme` /
// `pnpm audit:coverage --check` would pass without checking anything. This
// helper compares URL to URL, after resolving symlinks the same way Node does.
//
// Pure `node:*` imports only — the CI `audit` job runs without
// `pnpm install`.

import { realpathSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * True when the module whose `import.meta.url` is `moduleUrl` is the script
 * Node was asked to run (`process.argv[1]`).
 *
 * @param {string} moduleUrl  the caller's `import.meta.url`
 * @param {string | undefined} [entry]  defaults to `process.argv[1]`
 * @returns {boolean}
 */
export function isCliEntry(moduleUrl, entry = process.argv[1]) {
  if (!entry) return false
  let entryPath = resolve(entry)
  try {
    entryPath = realpathSync(entryPath)
  } catch {
    // A missing file can't be the running module; compare as-is.
  }
  return pathToFileURL(entryPath).href === moduleUrl
}
