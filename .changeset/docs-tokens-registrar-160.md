---
'@yasmro/schatten': patch
---

docs: fix post-#317 stale prose on the Tokens pages (Spacing / Radius / Motion / Elevation) — the public-token registrar is `src/styles/public-tokens.css` (`@layer theme`), not the Storybook-only `@theme` block in `base.css` — and correct the CSS API Overview's minifier note (lightningcss, not Tailwind's `--minify`) (refs #160)
