---
---

Add `src/core/tokens/__tests__/resolution.test.ts` — a semantic→primitive
resolution test that parses `primitives.css` + `semantic.css`, follows every
`var(...)` chain to its leaf primitive, and pins the result against a fixture
covering the theme scale, mode-owned base layer, brand tokens, the 4-token
interactive states (`error` / `success` / `warning` / `info` / `destructive`),
and the non-interactive states (`disabled` / `readOnly`) in both light and dark
mode. A typo or hue swap in `semantic.css` previously only surfaced through VRT
(and not at all for the VRT-less CSS-only consumer surface); it now fails a unit
test. Test-only — no consumer-facing change, hence an empty changeset.
