// TypeScript declarations for scripts/lv1-slugs.mjs (lv1 + lv2 discovery). The .mjs carries
// JSDoc-typed annotations, but typed consumers (e.g.
// src/docs/CSSApi.coverage.test.ts) import the functions from a .ts module —
// an explicit .d.mts gives TypeScript a strongly-typed view of the exported
// symbols without converting the script to .ts. Mirrors the
// generate-manifest.d.mts / csp-hash.d.mts pattern.

export interface Lv1Entry {
  /** Component name (e.g. "Button", "FieldSet"). */
  readonly name: string
  /** Lowercased name (e.g. "button", "fieldset") — matches the `.st-<block>` slug. */
  readonly slug: string
  /** Component directory relative to repo root. */
  readonly dir: string
  /** `<Name>.tsx` path. */
  readonly tsx: string
  /** `<Name>.css` path (may not exist — see `hasCss`). */
  readonly css: string
  /** Whether the `.css` file exists on disk. */
  readonly hasCss: boolean
}

/**
 * Discover every lv1 component directory (dir with `<Name>.tsx`) on disk.
 * Throws when the lv1 directory is missing or holds no component.
 * @param root repo root (defaults to the current directory)
 */
export function discoverLv1(root?: string): Lv1Entry[]

/** Like {@link discoverLv1} but throws when any component lacks its `.css`. */
export function discoverLv1WithCss(root?: string): Lv1Entry[]

/**
 * Discover every lv2 component directory (dir with `<Name>.tsx`) on disk.
 * Never throws: a missing directory or zero components yields `[]`, and a
 * missing `.css` is reported through `hasCss` (an lv2 ships a `.css` only
 * when it has visual rules of its own — lv2-composition-guideline §5.4).
 * @param root repo root (defaults to the current directory)
 */
export function discoverLv2(root?: string): Lv1Entry[]
