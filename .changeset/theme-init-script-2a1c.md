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
  that serializes the snippet into a `<script>` for `<head>`. It renders
  to a static `<script>` string under SSR without touching any DOM global
  (verified by `ThemeInitScript.ssr.test.tsx`), so even though the
  `providers` entry is a Client Component (`'use client'`), you can render
  it directly inside a React Server Component / SSR `<head>` — Next.js will
  serialize and emit it before hydration. Forwards a CSP `nonce` and accepts
  a custom `storageKey` (default `'schatten-theme'`).
- `THEME_INIT_SCRIPT` — the exact snippet bytes for the default
  `storageKey`, for non-React consumers who inline the script themselves.
  Because the `providers` entry carries `'use client'`, an RSC that
  `import`s this string gets a client reference, not the literal bytes —
  in an RSC graph, render `<ThemeInitScript />` instead and reach for the
  raw string only in non-RSC / non-React contexts (Vite `index.html`,
  plain server-rendered HTML, email templates).
- `buildThemeInitScript(storageKey)` — builds the snippet for a custom
  key. The key is JSON-escaped, and three byte sequences that are inert
  inside a JS string literal but dangerous in a raw `<script>` are escaped
  to `\u…`: `<` (so the key can't close the `<script>` element) and the
  `U+2028` / `U+2029` line/paragraph separators (`JSON.stringify` leaves
  them raw, but they are line terminators in pre-ES2019 parsers). Each
  escape decodes back at runtime, so the key value is unchanged — only the
  raw bytes are made inert, making the snippet safe to inject via
  `dangerouslySetInnerHTML` / server-rendered HTML.

The snippet is the single source of truth shared by the README, the
component, and the Provider's persistence contract (`{ mode, special }`
under `storageKey`) — see the "Provider runtime contract" row in
`.claude/rules/api-stability.md`. A SHA-256 hash of the snippet bytes
will be published separately (#262) to let CSP consumers pin it.

Component / lv1 / lv2 / CSS API: unchanged.
