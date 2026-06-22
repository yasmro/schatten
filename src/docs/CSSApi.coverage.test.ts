import { readFileSync } from 'node:fs'
import * as ts from 'typescript'
import { describe, expect, it } from 'vitest'
import { discoverLv1WithCss } from '../../scripts/lv1-slugs.mjs'

/**
 * Mechanical guard for the CSS API `Reference` story's "every lv1 component"
 * claim.
 *
 * The Reference is a hand-curated page: each lv1 gets a `<Section id="<slug>">`
 * plus a side-effect `import` of its `.css`. Both are easy to forget when a new
 * lv1 lands — which is exactly how the page drifted to 16/23 (title still said
 * "18") before #433 re-synced it. This test turns "remembered to update the
 * Reference" into an enforced contract, so the drift cannot silently recur.
 *
 * Two failure classes it catches:
 * - **Missing section** — a new lv1 with no Reference entry (coverage drift).
 * - **Missing CSS import** — a sectioned component whose `.css` is not imported.
 *   In the Storybook *build*, per-story code-splitting drops the un-imported
 *   chunk and the vanilla markup renders un-styled (the #313 regression class);
 *   it looks fine in dev, so neither VRT nor a manual dev check catches it.
 *
 * The story source is read through the TypeScript AST (not regex), so the
 * extraction is independent of prop order on `<Section>` and of incidental
 * formatting. lv1 discovery comes from `scripts/lv1-slugs.mjs` — the SSOT also
 * used by the build (`build-component-css` / `ensure-dist`).
 */

const STORY_PATH = 'src/docs/CSSApi.stories.tsx'
const AST = ts.createSourceFile(
  STORY_PATH,
  readFileSync(STORY_PATH, 'utf8'),
  ts.ScriptTarget.Latest,
  /* setParentNodes */ true,
  ts.ScriptKind.TSX,
)

/** Collect a value for every AST node the picker matches. */
function collect<T>(pick: (node: ts.Node) => T | undefined): T[] {
  const out: T[] = []
  const visit = (node: ts.Node): void => {
    const value = pick(node)
    if (value !== undefined) out.push(value)
    ts.forEachChild(node, visit)
  }
  visit(AST)
  return out
}

/** lv1 slugs (SSOT: scripts/lv1-slugs.mjs). */
function lv1Slugs(): string[] {
  return discoverLv1WithCss()
    .map((entry) => entry.slug)
    .sort()
}

/** ids of every `<Section id="…">` element, regardless of prop order. */
function sectionIds(): string[] {
  return collect((node) => {
    if (!ts.isJsxOpeningElement(node) && !ts.isJsxSelfClosingElement(node)) return undefined
    if (!ts.isIdentifier(node.tagName) || node.tagName.text !== 'Section') return undefined
    for (const attr of node.attributes.properties) {
      if (
        ts.isJsxAttribute(attr) &&
        ts.isIdentifier(attr.name) &&
        attr.name.text === 'id' &&
        attr.initializer &&
        ts.isStringLiteral(attr.initializer)
      ) {
        return attr.initializer.text
      }
    }
    return undefined
  }).sort()
}

/** slugs whose CSS is side-effect-imported (`import '../components/lv1/X/X.css'`). */
function importedSlugs(): string[] {
  return collect((node) => {
    if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier)) return undefined
    const match = node.moduleSpecifier.text.match(/^\.\.\/components\/lv1\/\w+\/(\w+)\.css$/)
    return match ? match[1].toLowerCase() : undefined
  }).sort()
}

/** The N in the story name `Reference (all N lv1 components)`, or null. */
function titleCount(): number | null {
  for (const text of collect((node) => (ts.isStringLiteralLike(node) ? node.text : undefined))) {
    const match = text.match(/^Reference \(all (\d+) lv1 components\)$/)
    if (match) return Number(match[1])
  }
  return null
}

describe('CSS API Reference coverage', () => {
  it('documents exactly the set of lv1 components (no missing or stale sections)', () => {
    expect(sectionIds()).toEqual(lv1Slugs())
  })

  it('imports the CSS of every documented component (guards the #313 un-styled build)', () => {
    const imported = importedSlugs()
    expect(sectionIds().filter((id) => !imported.includes(id))).toEqual([])
  })

  it('states the correct component count in the story name', () => {
    expect(titleCount()).toBe(lv1Slugs().length)
  })
})
