# Astro

Astro + `@astrojs/react`. The CSS bundle is imported once in the layout; the
index page uses the class API in `.astro` markup **and** hydrates a React island
so both layers can be compared side by side.

## Run

```sh
# Build the package at the repo root first (file:../.. packs its dist)
cd ../.. && pnpm install && pnpm build && cd examples/astro

pnpm install --ignore-workspace     # --ignore-workspace is required (see examples/README.md)
pnpm dev                            # or: pnpm build && pnpm preview
```

## What it exercises

- **Class API (static)** — `src/pages/index.astro` writes `.st-btn` / `.st-badge`
  chains in plain `.astro` markup; `src/layouts/Base.astro` imports
  `@yasmro/schatten/schatten.css` once for the whole site.
- **React island** — `src/components/Island.tsx` renders real `<Button>` /
  `<Badge>` components with `client:load`. It sits directly under the static
  class-API row and must render **identically**, proving the CSS layer and the
  React component layer resolve against the same tokens.
- **Mode toggle** — an inline `<script>` in the layout toggles `.dark` on
  `<html>`.

`pnpm build` produces a static `dist/index.html` whose markup contains the
`.st-*` classes and whose bundled CSS carries the schatten tokens, alongside
the hydrated island's JS chunk — confirming the mixed CSS + React setup builds.
