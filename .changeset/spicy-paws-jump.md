---
'@yasmro/schatten': patch
---

Add the `no-primitive-color` Biome GritQL linter plugin. It bans Tailwind
primitive color utility classes (`bg-red-500`, `text-gray-700`,
`ring-vermillion-600`, …) in component JSX, enforcing the
state-token-guideline contract that components consume only Layer-2 semantic
tokens. Scoped to `src/components/**/*.tsx` (stories and tests are exempt).
Internal tooling only — no change to the published package surface.
