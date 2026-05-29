// The synchronous FOUC-avoidance snippet. It runs in `<head>` *before*
// first paint, reads the persisted theme from `localStorage`, and applies
// the `.dark` class / `data-theme` attribute to `<html>` so the page paints
// in the correct Mode × Special on the very first frame — no flash of the
// light/default theme before React hydrates.
//
// The snippet's behavior is pinned, character-for-character, by
// `fouc-snippet.test.ts`. Its `localStorage` key + JSON shape
// (`{ mode, special }`) are the same public runtime contract `<ThemeProvider>`
// reads/writes — see `.claude/rules/api-stability.md` ("Provider runtime
// contract"). #262 will publish a SHA-256 hash of these bytes so consumers
// can pin a CSP hash instead of using a nonce.

/**
 * Build the inline FOUC-avoidance script for a given `localStorage` key.
 *
 * The key is embedded via `JSON.stringify` (so it is a valid JS string
 * literal regardless of its contents), then three byte sequences that are
 * inert inside a JS string literal but dangerous inside a raw `<script>`
 * element are escaped to their `\u…` form:
 *
 * - `<` → `<` — prevents a key such as `</script><script>…` from
 *   closing the `<script>` element and injecting arbitrary markup.
 * - `U+2028` (line separator) / `U+2029` (paragraph separator) →
 *   `\u2028` / `\u2029` — `JSON.stringify` leaves these raw, and they are
 *   line terminators in pre-ES2019 parsers, so an un-escaped one can break
 *   the inline script in an older engine before hydration.
 *
 * Each escape decodes back to the original character when the JS runs, so
 * the key's value is unchanged — only its raw bytes are made inert.
 *
 * Most consumers want the default key and can use {@link THEME_INIT_SCRIPT}
 * (or render `<ThemeInitScript />`) directly. Reach for this builder only
 * when persisting under a custom `storageKey`.
 */
export function buildThemeInitScript(storageKey: string): string {
  const key = JSON.stringify(storageKey)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
  return `(function(){try{var s=localStorage.getItem(${key});var t=s?JSON.parse(s):{};var m=t.mode||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');if(t.special)document.documentElement.setAttribute('data-theme',t.special)}catch(e){}})();`
}

/**
 * The FOUC-avoidance snippet for the default `storageKey`
 * (`'schatten-theme'`). Paste this string into an inline `<script>` in your
 * document `<head>`, before any stylesheet, when you cannot render the
 * `<ThemeInitScript />` React component (e.g. a plain-HTML or non-React SSR
 * setup):
 *
 * ```html
 * <script>${THEME_INIT_SCRIPT}</script>
 * ```
 *
 * If you persist the theme under a custom key, generate a matching snippet
 * with {@link buildThemeInitScript} instead — a key mismatch silently
 * defeats FOUC avoidance.
 */
export const THEME_INIT_SCRIPT: string = buildThemeInitScript('schatten-theme')
