---
'@yasmro/schatten': patch
---

chore(build): drop the empty `./components/lv2` exports entry until lv2 lands.

`src/components/lv2/index.ts` is still `export {}` and the matching
`package.json#exports["./components/lv2"]` plus the `tsup` entry were
exposing an empty surface to consumers — a signal that "an API is here but
incomplete." Until lv2 components ship in v0.9.0, the cleaner posture is
to not advertise the sub-path at all.

Closes [#110](https://github.com/yasmro/schatten/issues/110).

**Changes**

- `package.json#exports["./components/lv2"]` is removed. The remaining
  entries (`.`, `./components`, `./components/lv1`, …) are unchanged.
- `tsup.config.ts` no longer lists `components/lv2/index` as an entry, so
  `pnpm build` does not emit `dist/components/lv2/`.
- `src/components/lv2/index.ts` is **kept** as `export {}` — it's the
  placeholder that v0.9.0 will populate when the first lv2 lands. Removing
  the file would force re-creating it (and re-wiring the tsup / exports
  config) later for no gain today.

**Restoration plan (v0.9.0)**

When the first lv2 components (`FormField`, …) ship, re-add the
`./components/lv2` exports entry and the `components/lv2/index` tsup entry
in the same change.

**Consumer impact**

Effectively none — `import … from '@yasmro/schatten/components/lv2'`
previously resolved to an empty module, so no real callsite exists. Anyone
who somehow had that import will get a clear resolution error pointing
back at this changeset rather than a silent empty import.
