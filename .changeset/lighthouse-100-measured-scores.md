---
'@yasmro/schatten': patch
---

docs(perf): record measured Lighthouse scores for
`examples/lighthouse-100/` (nextjs + vanilla) and fix three issues the
real measurement surfaced so both examples genuinely score
100/100/100/100. Closes #304.

- Both examples now establish the page surface from Schatten tokens
  (`background-color: var(--color-background)` /
  `color: var(--color-foreground)` on `<body>`). Without it, a
  dark-mode host flipped `--color-foreground` to a light value while
  the body stayed white, failing the color-contrast a11y audit.
- vanilla `prepare-css.mjs` now flattens the token `@import` graph
  before inlining it. The entry files are only `@import` directives;
  pasting them verbatim into an inline `<style>` left the tokens
  unresolved, so they never loaded. It also emits a valid `robots.txt`
  (previously `serve -s` fell through to `index.html`, a −9 on SEO).
- Both examples ship an inline SVG favicon so the browser's automatic
  `/favicon.ico` request never 404s (a Best Practices console error).

No public API surface change — examples / docs only.
