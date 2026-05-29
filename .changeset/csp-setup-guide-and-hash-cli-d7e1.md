---
'@yasmro/schatten': patch
---

Document how to run the FOUC-avoidance snippet under a strict Content-Security-Policy,
and pin its byte stability as a contract (#262).

- **README `### CSP setup guide`** — promotes the former inline "Strict CSP
  environments" note into a full section: nonce recipes for Next.js / Astro /
  Remix (with the CSPRNG-per-response requirement and the Next.js
  nonce × static-cache footgun called out), the hash-pin recipe with the
  published `sha256-…` and a standalone Node one-liner for custom `storageKey`,
  the externalized-`.js` fallback, recommended baseline directives
  (`object-src 'none'` / `base-uri 'self'`), and the anti-patterns to avoid
  (never `'unsafe-inline'`, never a static/`Math.random()` nonce).
- **`pnpm schatten:csp-hash`** (`scripts/print-csp-hash.mjs`) — a maintainer
  CLI that prints the `script-src` source expression for the snippet, reading
  the shipped `dist/theme-init/index.js`. Pass `--key=<storageKey>` for a
  custom key. Not consumer-facing.
- **API stability contract** — `.claude/rules/api-stability.md` now records the
  FOUC snippet bytes (`THEME_INIT_SCRIPT` / `buildThemeInitScript()`) as public
  surface: changing them is a `major`, and such a changeset must include the
  regenerated `sha256-…` so CSP consumers can re-pin.

Docs + maintainer tooling only — no component / lv1 / lv2 / CSS API change.
The `<ThemeInitScript>` component and `@yasmro/schatten/theme-init` entry
themselves shipped in #261.
