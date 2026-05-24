# Lighthouse 100 — Next.js example

A minimal Next.js 15 App Router page that targets a **100/100/100/100**
Lighthouse score (Performance / Accessibility / Best Practices / SEO)
while using Schatten components.

## Setup

```sh
pnpm install
pnpm build
pnpm start          # serves the production build at http://localhost:3000
```

In a second terminal:

```sh
pnpm lhci           # runs @lhci/cli 3× and asserts all categories scored 100
```

The `lhci` script reads `lighthouserc.json`, starts the production
server, hits `http://localhost:3000`, and exits non-zero if any of the
four categories slipped below 100.

## What makes the bundle fast

| Technique | Where | What it addresses |
|---|---|---|
| **Token layer imported in `layout.tsx`** | [`app/layout.tsx`](app/layout.tsx) | Next.js inlines the imported CSS into the document `<head>` as a `<style>` block — no `<link>` round-trip on the critical path |
| **Per-component CSS imports adjacent to usage** | [`app/page.tsx`](app/page.tsx) | Only `css/button` + `css/badge` are imported; the other 16 lv1 components ship zero bytes for this page |
| **`optimizePackageImports`** | [`next.config.mjs`](next.config.mjs) | Tree-shakes the `@yasmro/schatten` root entry — only Button + Badge survive into the route's JS chunk |
| **No client-side theme flicker** | (n/a — this demo stays in light mode) | If you add `ThemeProvider`, also drop in the FOUC snippet from the [main README](../../../README.md#fouc-avoidance) |

## How it maps to Lighthouse audits

The corresponding [Performance section in the main
README](../../../README.md#performance) maps each technique to the
Lighthouse audit it addresses. The two artifacts most directly affected
by this example are:

- **Reduce unused CSS** — only Button + Badge selectors land on the
  page. With the integrated `schatten.css` we would ship the full
  `.st-*` table; here we ship two files of ~1 KB each.
- **Eliminate render-blocking resources** — the tokens CSS arrives
  inline; no stylesheet on the critical path requires a network
  round-trip before first paint.

## Pointing at the worktree's source

By default, `@yasmro/schatten` resolves to the latest npm release. To
test changes from a worktree:

```sh
# From the repo root:
pnpm build

# In this example's package.json, change "@yasmro/schatten" to "file:../../.."
# Then in this directory:
pnpm install
```

The `file:` resolver in pnpm symlinks `node_modules/@yasmro/schatten` to
the source directory; subsequent rebuilds at the root pick up
automatically.

## Files

```
nextjs/
├── app/
│   ├── layout.tsx        # token-layer import (critical CSS path)
│   └── page.tsx          # per-component CSS imports + the demo page
├── next.config.mjs       # optimizePackageImports
├── tsconfig.json
├── package.json
├── lighthouserc.json     # asserts all categories at 100
└── README.md
```
