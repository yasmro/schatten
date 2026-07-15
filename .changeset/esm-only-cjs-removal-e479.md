---
'@yasmro/schatten': major
---

BREAKING: The package is now ESM-only. Every `require` condition in
`package.json#exports`, the top-level `main` field, and all `dist/**/*.cjs`
/ `*.d.cts` artifacts are removed — `require('@yasmro/schatten')` now fails
fast with `ERR_PACKAGE_PATH_NOT_EXPORTED` instead of risking the
dual-package hazard (the `Toast` store and `Field` / `FieldSet` / `Tooltip`
Contexts fail silently when ESM and CJS module instances coexist; #208,
#479). Supported consumers: Vite / Next.js 13+ / Remix / Astro / Node ESM.
ESM consumers need no change. Migration:
[docs/migrations/v0-to-v1.md §12](https://github.com/yasmro/schatten/blob/main/docs/migrations/v0-to-v1.md#12-esm-only--the-cjs-build-is-removed--v100).
