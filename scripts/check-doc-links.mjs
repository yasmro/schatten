#!/usr/bin/env node
// Check that relative Markdown links in the repo's prose docs resolve —
// both the file path AND, for links into other Markdown files, the
// `#anchor` heading slug.
//
// Why this exists: docs like the 0.x -> 1.0 migration guide
// (`docs/migrations/v0-to-v1.md`, #157) link into the rule docs with
// anchors, e.g. `.../api-stability.md#radix-type-boundary-anti-corruption-layer`.
// A heading rename in the target file silently breaks that anchor — nothing
// fails to build, and a consumer following the guide hits a dead link. This
// script makes that drift a lint-time failure instead.
//
// What it checks, for every `[label](target)` link in the scanned sources:
//   1. External links (http/https/mailto/tel/protocol-relative) — skipped.
//   2. Relative file path — resolved against the source file's directory;
//      the target must exist on disk.
//   3. `#anchor` on a Markdown target (or a same-file `#anchor`) — the slug
//      must match a heading in that Markdown file, using GitHub's slug
//      algorithm (github-slugger-compatible, incl. duplicate `-1` suffixes).
//   4. `#anchor` on a NON-Markdown target (e.g. `Foo.tsx#L42` line anchors) —
//      path checked, anchor skipped (GitHub line anchors always resolve).
//
// Links inside fenced/inline code are ignored (they are examples, not links).
//
// Scanned sources: `docs/**/*.md` + `README.md`. Link *targets* may be any
// file in the repo (rule docs, source files, decision logs), so a rename in
// `.claude/rules/*.md` is caught even though those files are not scanned as
// sources themselves.
//
// Run as `pnpm check:doc-links`. Wired into CI's `lint` job.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'

const REPO_ROOT = process.cwd()
const SOURCE_DIRS = ['docs']
const SOURCE_FILES = ['README.md']

/**
 * Recursively collect `*.md` files under a directory.
 * @param {string} dir
 * @returns {string[]}
 */
function collectMarkdown(dir) {
  if (!existsSync(dir)) return []
  /** @type {string[]} */
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...collectMarkdown(full))
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full)
  }
  return out
}

/**
 * Remove fenced code blocks and inline code so links inside examples are not
 * scanned, and so `#`-prefixed lines inside code are not treated as headings.
 * @param {string} source
 * @returns {string}
 */
function stripCode(source) {
  return source
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/`[^`\n]*`/g, '')
}

/**
 * GitHub heading-slug algorithm (github-slugger compatible), including the
 * `-1` / `-2` disambiguation suffix for duplicate headings.
 * @param {string} text
 * @param {Map<string, number>} seen
 * @returns {string}
 */
function slugify(text, seen) {
  let slug = text
    .trim()
    // unwrap markdown link syntax in a heading: [label](url) -> label
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // drop emphasis / code markers
    .replace(/[`*_~]/g, '')
    .toLowerCase()
    // github-slugger's stripped punctuation set (incl. the U+2000-U+206F
    // general-punctuation block, so em dashes / smart quotes are removed).
    // NB: this class must NOT include the space char — spaces survive to the
    // next replace, which turns each into a hyphen (double space -> "--").
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/ /g, '-')
  const count = seen.get(slug) ?? 0
  seen.set(slug, count + 1)
  if (count > 0) slug = `${slug}-${count}`
  return slug
}

/**
 * Set of heading anchor slugs a Markdown file exposes.
 * @param {string} mdPath
 * @returns {Set<string>}
 */
const anchorCache = new Map()
function anchorsFor(mdPath) {
  const cached = anchorCache.get(mdPath)
  if (cached) return cached
  const src = stripCode(readFileSync(mdPath, 'utf8'))
  /** @type {Set<string>} */
  const slugs = new Set()
  const seen = new Map()
  for (const m of src.matchAll(/^#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*$/gm)) {
    slugs.add(slugify(m[1], seen))
  }
  anchorCache.set(mdPath, slugs)
  return slugs
}

const isExternal = (t) => /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(t)

/** @type {{ file: string; link: string; reason: string }[]} */
const errors = []

const sources = [
  ...SOURCE_DIRS.flatMap((d) => collectMarkdown(resolve(REPO_ROOT, d))),
  ...SOURCE_FILES.map((f) => resolve(REPO_ROOT, f)).filter(existsSync),
]

let linkCount = 0
for (const file of sources) {
  const body = stripCode(readFileSync(file, 'utf8'))
  const fileDir = dirname(file)
  // `[label](target)` — target up to the first whitespace (ignore a ` "title"`).
  for (const m of body.matchAll(/\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g)) {
    const target = m[1]
    if (isExternal(target)) continue
    linkCount++

    const hashIdx = target.indexOf('#')
    const pathPart = hashIdx === -1 ? target : target.slice(0, hashIdx)
    const anchor = hashIdx === -1 ? '' : target.slice(hashIdx + 1)

    // Resolve the file the link points at (same-file when pathPart is empty).
    const targetFile = pathPart === '' ? file : resolve(fileDir, pathPart)

    if (pathPart !== '' && !existsSync(targetFile)) {
      errors.push({
        file: relative(REPO_ROOT, file),
        link: target,
        reason: `path not found: ${relative(REPO_ROOT, targetFile)}`,
      })
      continue
    }

    if (!anchor) continue
    // Only Markdown targets have checkable heading anchors. For directories or
    // non-.md files (e.g. `Foo.tsx#L42`), the anchor is out of scope.
    const isMd = pathPart === '' || (statSync(targetFile).isFile() && targetFile.endsWith('.md'))
    if (!isMd) continue

    if (!anchorsFor(targetFile).has(anchor)) {
      errors.push({
        file: relative(REPO_ROOT, file),
        link: target,
        reason: `no heading anchor "#${anchor}" in ${relative(REPO_ROOT, targetFile)}`,
      })
    }
  }
}

if (errors.length > 0) {
  console.error(`check-doc-links: ${errors.length} broken link(s) found\n`)
  for (const e of errors) {
    console.error(`  ${e.file}`)
    console.error(`    [${e.link}] — ${e.reason}`)
  }
  console.error('\nFix the path or anchor. Heading anchors use GitHub slug rules')
  console.error('(lowercase, spaces -> hyphens, punctuation stripped).')
  process.exit(1)
}

console.log(`check-doc-links: OK — ${linkCount} relative link(s) across ${sources.length} file(s)`)
