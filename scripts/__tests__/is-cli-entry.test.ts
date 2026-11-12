import { spawnSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { isCliEntry } from '../is-cli-entry.mjs'

// The CLI guard decides whether a script's body runs at all. When it is
// wrong the script exits 0 having checked nothing, so `pnpm check:readme` /
// `pnpm audit:coverage --check` would pass silently. These cases pin the two
// spellings the old inline `file://${resolve(argv[1])}` check got wrong.

const helperPath = join(dirname(fileURLToPath(import.meta.url)), '../is-cli-entry.mjs')

let root: string

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), 'is-cli-entry-'))
})

afterEach(() => {
  rmSync(root, { recursive: true, force: true })
})

/** A script that prints whether the guard thinks it is the CLI entry. */
function makeProbe(dir: string) {
  mkdirSync(dir, { recursive: true })
  copyFileSync(helperPath, join(dir, 'is-cli-entry.mjs'))
  const probe = join(dir, 'probe.mjs')
  writeFileSync(
    probe,
    "import { isCliEntry } from './is-cli-entry.mjs'\nprocess.stdout.write(String(isCliEntry(import.meta.url)))\n",
  )
  return probe
}

function run(entry: string) {
  return spawnSync(process.execPath, [entry], { encoding: 'utf8' }).stdout
}

describe('isCliEntry', () => {
  it('is true for the script node was asked to run', () => {
    expect(run(makeProbe(join(root, 'plain')))).toBe('true')
  })

  it('is true when the path contains a space', () => {
    expect(run(makeProbe(join(root, 'with space')))).toBe('true')
  })

  it('is true when the script is reached through a symlink', () => {
    const probe = makeProbe(join(root, 'real'))
    const link = join(root, 'link.mjs')
    symlinkSync(probe, link)
    expect(run(link)).toBe('true')
  })

  it('is false when the module is not the entry', () => {
    const other = join(root, 'other.mjs')
    expect(isCliEntry(pathToFileURL(other).href, join(root, 'entry.mjs'))).toBe(false)
  })

  it('is false when there is no entry (e.g. a REPL)', () => {
    expect(isCliEntry(pathToFileURL(join(root, 'x.mjs')).href, '')).toBe(false)
  })
})
