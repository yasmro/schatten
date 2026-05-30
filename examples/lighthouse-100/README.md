# Lighthouse 100 examples

Two end-to-end demos that target a **100/100/100/100** Lighthouse score
(Performance / Accessibility / Best Practices / SEO) on a small page
that uses Schatten components.

| Example | Stack | Critical CSS delivery | Component CSS delivery |
|---|---|---|---|
| [`nextjs/`](nextjs/) | Next.js 15 App Router + React 19 | Imported tokens are inlined by Next.js into the document `<head>` automatically | Per-component subpaths (`@yasmro/schatten/css/<component>`) imported adjacent to usage, deduped by Next.js |
| [`vanilla/`](vanilla/) | Plain HTML served by [`serve`](https://www.npmjs.com/package/serve) | `<style>` block containing the tokens CSS copied at build time | `<link rel="preload" as="style" onload="this.rel='stylesheet'">` for component CSS — fetch in parallel with first paint, never blocks |

Both examples are intentionally minimal — a single page with two
Schatten components — so the techniques are easy to see in isolation.
Apply the same patterns to a real-size app: token import goes once in
the layout, component-CSS imports stay next to the component.

## Running an example

Each example carries its own `package.json` and lock-file-free
`pnpm install` install graph. They are **not** members of this
repository's pnpm workspace (the root `pnpm-workspace.yaml` does not
list `examples/*`), so:

- The example's `@yasmro/schatten` dependency installs the latest
  **published** version from npm by default. To test against the
  worktree's current source, run `pnpm build` at the repo root and then
  point the example's dependency at `file:../../..` before installing.
- `pnpm install` in an example does not touch the repo's own
  `node_modules`.

The full per-example workflow:

```sh
cd examples/lighthouse-100/nextjs   # or examples/lighthouse-100/vanilla

pnpm install
pnpm build      # nextjs only — produces an optimized production build
pnpm start      # serves the built page locally
pnpm lhci       # runs @lhci/cli against the served page
```

The `lhci` command runs Lighthouse 3× against the local server and
asserts every category scored 100; CI exits non-zero on any regression.
Each example's `lighthouserc.json` carries the assertion list and is
the contract — adjust if you genuinely need to add a new audit or relax
a threshold (and then explain why in the example's README).

The latest measured results (median of 3 runs, with the Chrome /
Lighthouse versions they were taken under) live in each example's own
`## Measured scores` section — see [`nextjs/`](nextjs/#measured-scores)
and [`vanilla/`](vanilla/#measured-scores).

## Why the score targets matter

The score itself is a proxy for the consumer-relevant question: *can a
production app using Schatten as a packaged library reach the same
performance floor as a hand-rolled CSS or copy-paste approach?* The
recipes in these examples — token inlining + per-component CSS subpaths
— are the answer. They are not magic; they are the same techniques any
high-performance design system uses, applied to Schatten's specific
subpath shape.

See the [Performance](../../README.md#performance) section of the
repo-root README for the audit-by-audit explanation of what each
technique addresses.
