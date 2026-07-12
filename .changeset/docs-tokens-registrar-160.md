---
'@yasmro/schatten': patch
---

docs: final cross-page sweep of the Storybook docs pages for 1.0 (refs #160) —

- fix post-#317/#231 stale prose: the public-token registrar is `src/styles/public-tokens.css` (`@layer theme`), not the Storybook-only `@theme` block in `base.css` (Spacing / Radius / Motion / Elevation), and the dist minifier is lightningcss, not Tailwind's `--minify` (CSS API overview)
- correct stale behavioral claims: Toast has no `role="status"` on the visible element (Sonner's live region announces — query by text), and `Field required` **does** propagate `aria-required` (announce-only) since #428 (Testing / Form Composition / Accessibility)
- resolve every real axe violation on the docs pages: state chips move to the `-emphasis` text tokens, unnamed Select demos get `aria-label`, scrollable code blocks become keyboard-focusable, Z-Index stack tiles get mode-proof ramp-pinned label colors; the documented intentional color-contrast exceptions (solid trilemma / subtle-tier demos) are story-scoped-disabled with rationale
- add a manifest/registrar note to the CSS API overview and refresh stale counts (25 lv1, 区 C/D set incl. DropdownMenu / Popover, Welcome "Five places", Tailwind-free hero copy)
