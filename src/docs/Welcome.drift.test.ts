/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { sanitize, storyNameFromExport } from 'storybook/internal/csf'
import { describe, expect, it } from 'vitest'
import { WELCOME_COMPONENT_SLUGS, WELCOME_DEEP_LINKS } from './Welcome.stories'

/*
 * Welcome deep-link drift guard (#375).
 *
 * `Welcome.stories.tsx` links to other stories by a hard-coded `slug--suffix`
 * id. Those ids derive from the target module's `meta.title` (slug) and a story
 * export name (suffix) — a rename of either silently breaks the link (Storybook
 * renders "story not found" / "No Preview"; nothing fails to build).
 *
 * This test reconstructs the real Storybook id from each target module and
 * reconciles it against the `WELCOME_DEEP_LINKS` manifest. It runs as a plain
 * unit test (no Storybook build):
 *
 *   - The story files are read as TEXT (readFileSync), never imported — eagerly
 *     importing every story executes import-time side effects, and some docs
 *     stories (SeasonalShowcase) read `*.css?raw`, which Vitest resolves to an
 *     empty string and throws. Source-parsing is also the established
 *     *.drift.test.ts approach (Elevation / Motion / Radius).
 *   - Id derivation stays faithful by reusing Storybook's own `sanitize` /
 *     `storyNameFromExport` (pure functions, no side effects) on the parsed
 *     `title` strings and export names.
 *
 * NOTE: the suffix comes from the export *name*, not the story's `name:` field
 * (e.g. CSSApi's `export const Reference` keeps id suffix `reference` despite
 * `name: 'Reference (all 18 lv1 components)'`). So an export rename is caught;
 * a `name:` change is intentionally not — it does not change the URL.
 */

// Glob KEYS only (paths) — the loaders are never called, so no story module's
// import-time side effect runs. `../**/*.stories.tsx` from src/docs resolves to
// src/**/*.stories.tsx (lv1 catalog + docs pages + providers).
const storyPaths = Object.keys(import.meta.glob('../**/*.stories.tsx'))

interface ParsedStory {
  slug: string
  exports: string[]
  autodocs: boolean
}

function parseStory(raw: string): ParsedStory | null {
  // Strip block comments first — a TSDoc example can contain a `title: '…'`
  // line (e.g. Toast's usage snippet) that would otherwise shadow meta.title.
  const src = raw.replace(/\/\*[\s\S]*?\*\//g, '')
  const title = src.match(/title:\s*'([^']+)'/)?.[1]
  if (!title) return null
  const autodocs = /tags:\s*\[[^\]]*['"]autodocs['"]/.test(src)
  // PascalCase `export const Foo` = a CSF story export. Over-capturing a
  // non-story const (e.g. WELCOME_DEEP_LINKS) is harmless — it only adds an
  // extra candidate suffix to a `.toContain` check.
  const exports = [...src.matchAll(/export const ([A-Z][A-Za-z0-9_]*)/g)].map((m) => m[1])
  return { slug: sanitize(title), exports, autodocs }
}

// Index by sanitize(meta.title). Titles can collide (CSSApi + CSSApiParity both
// declare 'CSS API/Overview'), so each slug maps to an array of parsed modules.
const bySlug = new Map<string, ParsedStory[]>()
for (const rel of storyPaths) {
  const parsed = parseStory(readFileSync(resolve(__dirname, rel), 'utf8'))
  if (!parsed) continue
  bySlug.set(parsed.slug, [...(bySlug.get(parsed.slug) ?? []), parsed])
}

/** Id suffixes a slug's module group exposes (export → storyNameFromExport → sanitize). */
function suffixesForSlug(slug: string): Set<string> {
  const out = new Set<string>()
  for (const mod of bySlug.get(slug) ?? []) {
    for (const exp of mod.exports) out.add(sanitize(storyNameFromExport(exp)))
  }
  return out
}

const hasAutodocs = (slug: string): boolean => (bySlug.get(slug) ?? []).some((m) => m.autodocs)

// Dedupe by slug--suffix: patterns-accessibility/overview is linked from both
// the Engineering and Patterns sections with different card copy.
const uniqueLinks = [
  ...new Map(WELCOME_DEEP_LINKS.map((l) => [`${l.slug}--${l.suffix}`, l])).values(),
]

describe('Welcome deep links ↔ story definitions', () => {
  it.each(uniqueLinks)('$slug resolves to a real story title', (link) => {
    expect(bySlug.has(link.slug)).toBe(true)
  })

  it.each(uniqueLinks)('$slug--$suffix matches an export-derived story id', (link) => {
    expect([...suffixesForSlug(link.slug)]).toContain(link.suffix)
  })

  it.each(uniqueLinks)('$slug viewMode matches the index entry type', (link) => {
    if (link.viewMode === 'docs') {
      // `/docs/<slug>--docs` only exists when the component is autodocs-tagged.
      expect(hasAutodocs(link.slug)).toBe(true)
    } else {
      // A story-mode link must point at a real Canvas story export.
      expect([...suffixesForSlug(link.slug)]).toContain(link.suffix)
    }
  })
})

describe('Welcome component cards ↔ lv1 autodocs', () => {
  // Pin the const against the storyPaths actually wired into the ComponentCards,
  // so a new card (or a removed one) that desyncs from the const fails here.
  const SRC = readFileSync(resolve(__dirname, 'Welcome.stories.tsx'), 'utf8')
  const wiredSlugs = [...SRC.matchAll(/storyPath="(components-lv1-[a-z]+)"/g)].map((m) => m[1])

  it('WELCOME_COMPONENT_SLUGS lists exactly the storyPaths used by ComponentCards', () => {
    expect(new Set(wiredSlugs)).toEqual(new Set(WELCOME_COMPONENT_SLUGS))
  })

  it.each(WELCOME_COMPONENT_SLUGS)('%s resolves to an lv1 module with autodocs', (slug) => {
    expect(bySlug.has(slug)).toBe(true)
    expect(hasAutodocs(slug)).toBe(true)
  })
})

describe('Welcome Patterns coverage', () => {
  // Patterns pages intentionally NOT linked from Welcome (none today). An entry
  // here is the documented escape hatch for e.g. an internal-only recipe page.
  const WELCOME_LINK_EXEMPT = new Set<string>([])

  const patternsSlugs = [...bySlug.keys()].filter((s) => s.startsWith('patterns-'))
  const linkedSlugs = new Set(WELCOME_DEEP_LINKS.map((l) => l.slug))

  it('there is at least one Patterns page to check', () => {
    expect(patternsSlugs.length).toBeGreaterThan(0)
  })

  it.each(patternsSlugs)('Patterns page %s is linked from Welcome (or exempt)', (slug) => {
    expect(linkedSlugs.has(slug) || WELCOME_LINK_EXEMPT.has(slug)).toBe(true)
  })
})
