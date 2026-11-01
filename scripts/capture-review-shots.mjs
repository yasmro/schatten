#!/usr/bin/env node
// Capture Storybook screenshots of what a branch changed, for the
// ブランディングアーティスト perspective in `/review-pr`.
//
// This is NOT a VRT. VRT answers "did the pixels move?" against a committed
// baseline; these images answer "does the result look like Schatten?" and are
// read by a reviewer, so nothing here is compared or committed. The output
// goes to the gitignored `.review-shots/` and is rewritten on every run.
//
// Why it boots its own Storybook on a free port instead of reusing 6006:
// a sibling worktree's server on 6006 would silently supply another branch's
// render (vrt-spec-guideline §"a cross-worktree trap"). A private port makes
// that structurally impossible.
//
// Run as `pnpm review:shots` (`--base <ref>`, default origin/develop;
// `--stories <id,id>` to name stories instead of deriving them from the diff).
// A diff with no visual files exits 0 without starting Storybook.

import { execFileSync, spawn } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { basename, dirname, join } from 'node:path'
import { isCliEntry } from './is-cli-entry.mjs'

export const OUT_DIR = '.review-shots'

// Mirrors the VRT rule: lv1 / lv2 / docs sources render; tests and specs don't.
// `__snapshots__/*.png` counts because a re-baseline is itself a visual change.
const VISUAL_FILE_RE =
  /^src\/(?:(?:components|docs)\/.+\.(?:tsx|css|png)|variants\/.+\.ts|(?:core\/tokens|themes|styles)\/.+\.css)$/
const NON_VISUAL_FILE_RE = /\.(?:test|vrt\.spec)\.tsx?$|\.drift\./

// Tokens / themes / global styles have no story of their own and reach every
// component, so they map to fixed stories that show the system at work.
// eight-seasons rather than dashboard-mockup: the mockup pins its season in
// args and ignores the global, so its "no season" shot would really be spring.
const SYSTEM_WIDE_FILE_RE = /^src\/(?:core\/tokens|themes|styles)\//
export const SYSTEM_WIDE_STORIES = [
  'theming-seasonal-showcase--eight-seasons',
  'tokens-color--colors',
  'components-lv1-button--all-variants',
]

// Interactive sandbox / React-vs-vanilla proof — neither is a look to judge.
const SKIPPED_STORY_RE = /--(?:playground|parity)$/

// The brand claim to test is "seasons carry color but never legibility", so
// two far-apart hues on opposite Modes cover more than all 16 combinations
// would for the cost: warm pink on light, cool indigo on dark.
export const SHOT_MATRIX = [
  { mode: 'light', season: null },
  { mode: 'dark', season: null },
  { mode: 'light', season: 'spring-early' },
  { mode: 'dark', season: 'winter-deep' },
]

/**
 * Keep only the changed files that can affect what renders.
 *
 * @param {string[]} files repo-relative paths
 * @returns {string[]}
 */
export function selectVisualFiles(files) {
  return files.filter((file) => VISUAL_FILE_RE.test(file) && !NON_VISUAL_FILE_RE.test(file))
}

const normalize = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * Pick the stories to capture. Every title gets its first story before any
 * title gets a second, so a sweep across many components shows breadth rather
 * than exhausting `limit` on the first one.
 *
 * @param {string[]} visualFiles output of {@link selectVisualFiles}
 * @param {{ id: string, title: string, type: string, importPath: string }[]} entries
 *   Storybook `index.json` entries
 * @param {{ limit?: number, perTitle?: number }} [options]
 * @returns {{ selected: typeof entries, omitted: typeof entries }}
 */
export function selectStories(visualFiles, entries, { limit = 6, perTitle = 2 } = {}) {
  const stories = entries.filter((e) => e.type === 'story' && !SKIPPED_STORY_RE.test(e.id))
  const matched = new Set()

  for (const file of visualFiles) {
    if (SYSTEM_WIDE_FILE_RE.test(file)) {
      for (const story of stories) {
        if (SYSTEM_WIDE_STORIES.includes(story.id)) matched.add(story)
      }
      continue
    }

    const directory = dirname(file).replace(/\/__snapshots__$/, '')
    const variantOf = file.startsWith('src/variants/') ? normalize(basename(file, '.ts')) : null
    for (const story of stories) {
      const storyPath = story.importPath.replace(/^\.\//, '')
      const hit = variantOf
        ? storyPath.startsWith('src/components/') &&
          normalize(basename(dirname(storyPath))) === variantOf
        : file.startsWith('src/docs/')
          ? storyPath === file
          : dirname(storyPath) === directory
      if (hit) matched.add(story)
    }
  }

  const byTitle = new Map()
  for (const story of matched) {
    byTitle.set(story.title, [...(byTitle.get(story.title) ?? []), story])
  }

  const ranked = []
  for (let rank = 0; rank < perTitle; rank++) {
    for (const group of byTitle.values()) {
      if (group[rank]) ranked.push(group[rank])
    }
  }
  const selected = ranked.slice(0, limit)
  return { selected, omitted: [...matched].filter((s) => !selected.includes(s)) }
}

/**
 * The VRT baseline a story's default-theme shot can be compared to. Snapshots
 * are named by each spec, so this holds for the `{story}-{theme}.png`
 * convention and simply misses (no "before" image) for anything else.
 *
 * @param {{ id: string, importPath: string }} story
 * @param {'light' | 'dark'} mode
 * @returns {string} repo-relative path
 */
export function baselinePath(story, mode) {
  const suffix = story.id.split('--')[1]
  const directory = dirname(story.importPath.replace(/^\.\//, ''))
  return join(directory, '__snapshots__', `${suffix}-${mode}.png`)
}

function parseArgs(argv) {
  const options = { base: 'origin/develop', stories: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--base') options.base = argv[++i]
    else if (argv[i] === '--stories') options.stories = argv[++i].split(',')
    else throw new Error(`Unknown argument: ${argv[i]}`)
  }
  return options
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

function changedFiles(base) {
  const tracked = git('diff', '--name-only', git('merge-base', base, 'HEAD'))
  const untracked = git('ls-files', '--others', '--exclude-standard')
  return [...tracked.split('\n'), ...untracked.split('\n')].filter(Boolean)
}

function findFreePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer()
    server.once('error', reject)
    server.listen(0, () => {
      const { port } = server.address()
      server.close(() => resolvePort(port))
    })
  })
}

async function startStorybook(port) {
  // `detached` gives it a process group: pnpm → storybook → workers must all
  // go down together, or a stray server survives the run.
  const child = spawn(
    'pnpm',
    ['exec', 'storybook', 'dev', '-p', String(port), '--no-open', '--ci', '--quiet'],
    { detached: true, stdio: 'ignore' },
  )
  const stop = () => {
    try {
      process.kill(-child.pid, 'SIGTERM')
    } catch {
      // Already gone.
    }
  }
  process.once('SIGINT', () => {
    stop()
    process.exit(130)
  })

  const deadline = Date.now() + 180_000
  while (Date.now() < deadline) {
    if (child.exitCode !== null) throw new Error('Storybook exited before it was ready')
    try {
      const response = await fetch(`http://localhost:${port}/index.json`)
      if (response.ok) return { entries: Object.values((await response.json()).entries), stop }
    } catch {
      // Not listening yet.
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 1_000))
  }
  stop()
  throw new Error('Storybook did not become ready within 180s')
}

function storyUrl(port, id, { mode, season }) {
  const globals = season ? `theme:${mode};season:${season}` : `theme:${mode}`
  return `http://localhost:${port}/iframe.html?id=${id}&viewMode=story&globals=${globals}`
}

async function captureShot(page, url, path) {
  await page.goto(url)
  await page.waitForLoadState('networkidle')
  await page.waitForFunction(() => {
    const root = document.querySelector('#storybook-root')
    return root && root.children.length > 0
  })
  await page.evaluate(() => document.fonts.ready)
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-play-state: paused !important;
        animation-delay: -0.0001s !important;
      }
    `,
  })
  // Full page, not `#storybook-root`: portal content renders outside the root.
  await page.screenshot({ path, fullPage: true })
}

function exportBaseline(base, story, mode, target) {
  try {
    const png = execFileSync('git', ['show', `${base}:${baselinePath(story, mode)}`], {
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
    })
    writeFileSync(target, png)
    return true
  } catch {
    return false
  }
}

async function main() {
  const { base, stories: requested } = parseArgs(process.argv.slice(2))
  rmSync(OUT_DIR, { recursive: true, force: true })
  mkdirSync(join(OUT_DIR, 'before'), { recursive: true })

  const manifest = { base, visualFiles: [], shots: [], omitted: [], duplicates: [], failed: [] }
  const writeManifest = () =>
    writeFileSync(join(OUT_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)

  manifest.visualFiles = selectVisualFiles(changedFiles(base))
  if (!requested && manifest.visualFiles.length === 0) {
    writeManifest()
    console.log(`No visual changes against ${base}; nothing to capture.`)
    return
  }

  const { chromium } = await import('@playwright/test')
  const port = await findFreePort()
  const { entries, stop } = await startStorybook(port)
  let browser
  try {
    const { selected, omitted } = requested
      ? { selected: entries.filter((e) => requested.includes(e.id)), omitted: [] }
      : selectStories(manifest.visualFiles, entries)
    manifest.omitted = omitted.map((s) => s.id)

    browser = await chromium.launch()
    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 2,
    })

    for (const story of selected) {
      // A story that owns its theme ignores the globals, so two shots of it
      // can be byte-identical. Reading those as "the season changed nothing"
      // would be a false pass, so they are dropped and reported instead.
      const seen = new Set()
      for (const shot of SHOT_MATRIX) {
        const name = `${story.id}__${shot.mode}${shot.season ? `__${shot.season}` : ''}.png`
        const file = join(OUT_DIR, name)
        try {
          await captureShot(page, storyUrl(port, story.id, shot), file)
        } catch (error) {
          manifest.failed.push({ story: story.id, ...shot, error: String(error).split('\n')[0] })
          continue
        }
        const hash = createHash('sha256').update(readFileSync(file)).digest('hex')
        if (seen.has(hash)) {
          rmSync(file)
          manifest.duplicates.push({ story: story.id, ...shot })
          continue
        }
        seen.add(hash)
        const beforeFile = join(OUT_DIR, 'before', name)
        const hasBefore = !shot.season && exportBaseline(base, story, shot.mode, beforeFile)
        manifest.shots.push({
          story: story.id,
          title: story.title,
          ...shot,
          file,
          before: hasBefore ? beforeFile : null,
        })
      }
    }
  } finally {
    await browser?.close()
    stop()
  }

  writeManifest()
  console.log(`Captured ${manifest.shots.length} shots into ${OUT_DIR}/ (see manifest.json)`)
  if (manifest.omitted.length > 0) console.log(`Omitted: ${manifest.omitted.join(', ')}`)
  if (manifest.duplicates.length > 0) {
    console.log(`Ignored the theme globals: ${manifest.duplicates.map((d) => d.story).join(', ')}`)
  }
  if (manifest.failed.length > 0) {
    console.error(`Failed: ${manifest.failed.map((f) => f.story).join(', ')}`)
    process.exitCode = 1
  }
}

if (isCliEntry(import.meta.url)) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
