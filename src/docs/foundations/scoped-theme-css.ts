import { SEASONAL_THEME_METADATA, type SeasonalThemeId } from '../../themes/seasonal'

/*
 * Shared infrastructure for docs stories that render seasonal Specials in
 * per-cell scopes (`src/docs/foundations/*`). This file is NOT a
 * `*.stories.tsx`, so Storybook does not load it as stories — it is plain
 * TS imported by the story files. It carries no public API surface.
 *
 * The CSS sources are injected by the caller rather than `?raw`-imported
 * here: story files load them via Vite (`import … from '….css?raw'`), while
 * the drift test loads the same files via `readFileSync` — Vitest's CSS
 * pipeline resolves `?raw` CSS imports to an empty string, so a `?raw`
 * import at this layer would make the helper untestable.
 */

/** Docs-facing display view of one seasonal Special. */
export interface SeasonalDisplayEntry {
  /** Full `data-theme` value (`season--spring-early`). */
  id: SeasonalThemeId
  /** English label derived from the id (`Spring Early`). */
  label: string
  /** Solar-term range (`立春 - 春分前`). */
  term: string
  /** Traditional color reference (`桜色・薄紅`). */
  colors: string
}

/**
 * The eight seasonal Specials in calendar order, with display strings
 * derived from `SEASONAL_THEME_METADATA` — the single source of truth.
 * Deriving (instead of hand-copying labels per story) is what keeps a
 * ramp retune or description fix propagating to every docs page; the
 * Theme Audit story used to carry its own copy and drifted on
 * winter-deep ("深紅・墨" vs the actual hue-255 indigo ramp).
 */
export const SEASONAL_DISPLAY: readonly SeasonalDisplayEntry[] = Object.values(
  SEASONAL_THEME_METADATA,
).map((m) => {
  const [term = '', colors = ''] = (m.description ?? '').split(': ')
  return {
    id: m.name,
    label: m.name
      .replace('season--', '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    term,
    colors,
  }
})

/*
 * The solid family (--color-solid*) is declared on `:root` referencing rungs
 * of the theme ramp (`var(--color-theme-700)` etc., #150). CSS custom
 * properties substitute `var()` at the element where they are DECLARED, so a
 * per-cell `data-theme` override cannot re-resolve a solid value that was
 * already substituted on `<html>` against the default ramp. Re-declaring the
 * solid family on the cell makes the substitution happen where the scoped
 * seasonal ramp is visible:
 *   - `${scopeClass}[data-theme]`       (0,2,0) — light rungs
 *   - `${scopeClass}.dark[data-theme]`  (0,3,0) — dark rungs (must beat
 *     both the light injection and the global `.dark` block at (0,1,0))
 * The declarations are EXTRACTED from the production semantic.css, so the
 * rung mapping cannot drift from the shipped one. See
 * theme-architecture.md §"Things that do NOT propagate this way".
 */
function extractSolidDeclarations(semanticCss: string, blockSelector: string): string {
  const stripped = semanticCss.replace(/\/\*[\s\S]*?\*\//g, '')
  const start = stripped.indexOf(blockSelector)
  if (start === -1) {
    throw new Error(`scoped-theme-css: block "${blockSelector}" not found in semantic.css`)
  }
  const body = stripped.slice(start, stripped.indexOf('}', start))
  const declarations = body.match(/--color-solid[\w-]*:\s*[^;]+;/g)
  if (!declarations || declarations.length === 0) {
    throw new Error(`scoped-theme-css: no --color-solid* declarations in "${blockSelector}"`)
  }
  return declarations.join('\n  ')
}

/** Raw CSS sources `buildScopedThemeCss` rewrites. */
export interface ScopedThemeCssSources {
  /** Contents of `src/core/tokens/semantic.css` (the solid-family SSOT). */
  semanticCss: string
  /** Contents of `src/themes/seasonal/themes.css` (the Special palettes). */
  seasonalCss: string
}

/**
 * Builds the CSS that scopes every seasonal Special palette — plus the
 * solid-family re-declaration above — to `scopeClass` instead of `:root`.
 * Render the result once per page inside a `<style>` tag; cells then opt
 * in with `class="${scopeClass} [dark]" data-theme="season--…"`.
 */
export function buildScopedThemeCss(scopeClass: string, sources: ScopedThemeCssSources): string {
  const scopedSeasonal = sources.seasonalCss.replace(/:root\[/g, `${scopeClass}[`)
  const scopedSolid = [
    `${scopeClass}[data-theme] {\n  ${extractSolidDeclarations(sources.semanticCss, ':root {')}\n}`,
    `${scopeClass}.dark[data-theme] {\n  ${extractSolidDeclarations(sources.semanticCss, '.dark {')}\n}`,
  ].join('\n')
  return `${scopedSeasonal}\n${scopedSolid}`
}
