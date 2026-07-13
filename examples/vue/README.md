# Vue 3

Vue 3 + Vite. The CSS bundle is imported once in `src/main.ts`; every SFC
template then writes `.st-*` class chains directly — no Schatten JS import.

## Run

```sh
# Build the package at the repo root first (file:../.. packs its dist)
cd ../.. && pnpm install && pnpm build && cd examples/vue

pnpm install --ignore-workspace     # --ignore-workspace is required (see examples/README.md)
pnpm dev                            # or: pnpm build && pnpm preview
```

## What it exercises

- **Class API in SFC templates** — Button (incl. disabled), Badge, Callout,
  Input (`aria-invalid` error state).
- **Theme toggles** — `toggleDark()` / `onSeason()` mutate `<html>`, exactly as
  the React `<ThemeProvider>` would.
- **Per-component subpath** — `src/main.ts` documents the
  `import '@yasmro/schatten/css/button'` alternative that ships only Button's
  rules (~1 KB) instead of the full bundle.

`pnpm build` emits `dist/assets/*.css` containing the full schatten stylesheet
(~11.7 KB gzip), confirming the bundle resolves and tree-shakes through Vite.
