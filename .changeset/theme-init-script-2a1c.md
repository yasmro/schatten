---
'@yasmro/schatten': minor
---

Add `<ThemeInitScript>` (from `@yasmro/schatten/providers`) and a new
framework-agnostic `@yasmro/schatten/theme-init` entry exporting the
FOUC-avoidance snippet as `THEME_INIT_SCRIPT` / `buildThemeInitScript(storageKey)`.
Previously the synchronous `<head>` script that applies the persisted Mode
(`.dark`) and Special (`data-theme`) before first paint lived only as a
copy-paste block in the README; consumers had to keep their hand-pasted copy
in sync with the Provider's `localStorage` contract by hand.

- `<ThemeInitScript nonce? storageKey? />` (from `@yasmro/schatten/providers`)
  — a zero-dependency component that serializes the snippet into a `<script>`
  for `<head>`. It renders to a static `<script>` string under SSR without
  touching any DOM global (verified by `ThemeInitScript.ssr.test.tsx`), so
  even though the `providers` entry is a Client Component (`'use client'`),
  you can render it directly inside a React Server Component / SSR `<head>`
  — Next.js serializes it before hydration. Forwards a CSP `nonce` and
  accepts a custom `storageKey` (default `'schatten-theme'`).
- `THEME_INIT_SCRIPT` / `buildThemeInitScript(storageKey)` (from
  **`@yasmro/schatten/theme-init`**) — the raw snippet bytes for the default
  key, and a builder for a custom key. This entry is **framework-agnostic**
  (no `'use client'` banner, unlike `providers`), so a React Server Component
  or a non-React server can `import` the string directly and inline it. The
  same string imported from a `'use client'` module would resolve to a client
  reference, not the literal bytes — that's why the string lives on its own
  entry, not on `providers`. `buildThemeInitScript` JSON-escapes the key and
  escapes three byte sequences that are inert inside a JS string literal but
  dangerous in a raw `<script>`: `<` (so the key can't close the `<script>`
  element) and the `U+2028` / `U+2029` line/paragraph separators
  (`JSON.stringify` leaves them raw, but they are line terminators in
  pre-ES2019 parsers). Each escape decodes back at runtime, so the key value
  is unchanged — only the raw bytes are made inert, making the snippet safe to
  inject via `dangerouslySetInnerHTML` / server-rendered HTML.

The snippet is the single source of truth shared by the README, the
component, and the Provider's persistence contract (`{ mode, special }`
under `storageKey`) — see the "Provider runtime contract" row in
`.claude/rules/api-stability.md`. A SHA-256 hash of the snippet bytes
will be published separately (#262) to let CSP consumers pin it.

Component / lv1 / lv2 / CSS API: unchanged.
