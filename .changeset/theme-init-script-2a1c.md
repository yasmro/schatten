---
'@yasmro/schatten': minor
---

Add `<ThemeInitScript>` and export the FOUC-avoidance snippet as
`THEME_INIT_SCRIPT` / `buildThemeInitScript(storageKey)` from
`@yasmro/schatten/providers`. Previously the synchronous `<head>` script
that applies the persisted Mode (`.dark`) and Special (`data-theme`)
before first paint lived only as a copy-paste block in the README;
consumers had to keep their hand-pasted copy in sync with the Provider's
`localStorage` contract by hand.

- `<ThemeInitScript nonce? storageKey? />` — a zero-dependency component
  that serializes the snippet into a `<script>` for `<head>`. Renders to
  a string under SSR without touching any DOM global, so it is safe in a
  React Server Component / SSR `<head>`. Forwards a CSP `nonce` and
  accepts a custom `storageKey` (default `'schatten-theme'`).
- `THEME_INIT_SCRIPT` — the exact snippet bytes for the default
  `storageKey`, for non-React consumers who inline the script themselves.
- `buildThemeInitScript(storageKey)` — builds the snippet for a custom
  key. The key is JSON-escaped so the `<` byte cannot break out of the
  surrounding `<script>`, making it safe to inject via
  `dangerouslySetInnerHTML` / server-rendered HTML.

The snippet is the single source of truth shared by the README, the
component, and the Provider's persistence contract (`{ mode, special }`
under `storageKey`) — see the "Provider runtime contract" row in
`.claude/rules/api-stability.md`. A SHA-256 hash of the snippet bytes
will be published separately (#262) to let CSP consumers pin it.

Component / lv1 / lv2 / CSS API: unchanged.
