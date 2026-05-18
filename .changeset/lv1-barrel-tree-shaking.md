---
'@yasmro/schatten': patch
---

Make the `components/lv1` barrel tree-shakeable. `tsup` now builds each lv1
component as its own ESM entry with code splitting, instead of bundling all 17
components into one shared chunk. A consumer importing a single component drops
~81 % — `import { Button }` goes from ~48 KB to ~9.7 KB (minified + brotlied).

No public API change: the `package.json#exports` map is unchanged (same `.`
and `./components/lv1` entry points), and consumers write imports exactly as
before. CJS keeps the single-barrel build (`require()` does not tree-shake).
See `docs/decisions/2026-05-lv1-barrel-tree-shaking.md` for the root-cause
analysis and the alternatives that were rejected.
