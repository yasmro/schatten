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
 * literal regardless of its contents) and any `<` is escaped to `<`.
 * Escaping `<` is what makes the result safe to inject through
 * `dangerouslySetInnerHTML`: without it, a key such as
 * `</script><script>…` would close the `<script>` element and inject
 * arbitrary markup. `<` evaluates to `<` in the running JS, so the
 * key's value is unchanged — only its raw HTML bytes are made inert.
 *
 * Most consumers want the default key and can use {@link THEME_INIT_SCRIPT}
 * (or render `<ThemeInitScript />`) directly. Reach for this builder only
 * when persisting under a custom `storageKey`.
 */
export function buildThemeInitScript(storageKey: string): string {
  const key = JSON.stringify(storageKey).replace(/</g, '\\u003c')
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
