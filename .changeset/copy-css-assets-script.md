---
---

Extract the `dist/` CSS asset copy out of tsup's `onSuccess` hook into a
standalone `build:copy-css` step (`scripts/copy-css-assets.mjs`). Build-pipeline
refactor only — the `dist/` output is unchanged, so this is an empty changeset
with no consumer-facing release.
