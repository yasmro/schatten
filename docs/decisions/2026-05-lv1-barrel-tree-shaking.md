# lv1 Barrel Tree-Shaking — Design Decision Log

| | |
|---|---|
| Date | 2026-05-18 |
| Status | Accepted |
| Related issue | [#119](https://github.com/yasmro/schatten/issues/119) |
| Related PR | [#226](https://github.com/yasmro/schatten/pull/226) (size-limit CI — predecessor) |
| Related rules | [api-stability.md](../../.claude/rules/api-stability.md) |
| Files affected | `tsup.config.ts`, `.size-limit.json` |

## Context

The `@yasmro/schatten/components/lv1` barrel did not tree-shake. A consumer
importing a single component pulled in the entire library.

The evidence came from the `.size-limit.json` added in PR #226: the
`components/lv1 (Button only, tree-shaken)` entry — which imports `{ Button }`
from `dist/components/lv1/index.js` — measured **48.31 KB**, essentially
identical to the `components/lv1 (all)` entry at **48.46 KB** (both minified +
brotlied, peer deps excluded). Importing one component cost the same as
importing all 17.

### Root cause

`tsup.config.ts` built `src/components/lv1/index.ts` as a **single bundled
entry**. That produced:

- `dist/components/lv1/index.js` — a ~1 KB barrel that only re-exports.
- `dist/chunk-*.js` — one ~142 KB raw chunk containing **all 17 components
  plus all of their bundled Radix dependencies**, concatenated into a single
  module scope.

A consumer's bundler, when it sees `import { Button }` resolve into that
shared chunk, can only tree-shake a top-level declaration if the declaration's
initializer is provably side-effect-free. esbuild emits `var Button =
forwardRef(...)`, `var Dialog = forwardRef(...)`, etc. **without** a
`/* @__PURE__ */` annotation, and emits the bundled Radix internals the same
way. With no annotation, a call expression is assumed to have side effects, so
every component declaration — and everything it transitively references — is
retained. One unshakeable chunk.

## Decision

Build each lv1 component as **its own tsup ESM entry**, with code splitting
enabled. `src/components/lv1/index.ts` and `src/components/index.ts` remain
entries too; esbuild rewrites the barrels to re-export from the per-component
entry files. Shared code (`cn`, CVA variant tables, Radix primitives) is
deduplicated into shared chunks that load only when a component that needs
them is imported.

CJS is **not** split — the two barrels (`components/index`,
`components/lv1/index`) are still bundled whole for `require()` consumers.

The `package.json#exports` map is unchanged: the same two public entry points
(`.` and `./components/lv1`) are published. No per-component subpath exports
were added — the barrel itself now tree-shakes, so subpaths would add public
API surface without adding capability.

`.size-limit.json`'s `Button only` budget is lowered from **55 KB to 12 KB**.

## Rationale — alternatives considered

Three fixes were evaluated empirically (esbuild re-bundle, minified, brotli,
peer deps external):

| Approach | `import { Button }` | Verdict |
|---|---|---|
| **Current** — single bundled chunk | 49.5 KB | baseline |
| **Maximal `/* @__PURE__ */` annotation** — every component declaration + every `cva()` + every `createContext()` in the chunk annotated | **48.3 KB** | **rejected — 0 % improvement** |
| **Per-component ESM entries + splitting** | **9.5 KB (−81 %)** | **chosen** |

### Why pure annotations were rejected

Annotating *our own* `forwardRef` / `cva` calls is necessary-but-insufficient.
The single chunk's weight is dominated by **Radix internals** —
`React.forwardRef(...)`, `createContext(...)`, IIFEs, prototype mutations —
which live in `node_modules` and which we cannot annotate. A patched build
that annotated every declaration we *could* reach still measured 48.3 KB for
`{ Button }`: no improvement. Pre-bundling third-party code into one module
scope is fundamentally hostile to consumer-side tree-shaking, and no amount of
annotation on the slice we control changes that.

### Why the `treeshake` tsup option was rejected

`treeshake` removes code that is dead *from the bundle's own entry's
perspective*. The barrel deliberately re-exports all 17 components, so nothing
is dead — the problem is entirely consumer-side. The option is irrelevant
here.

### Why per-component subpath exports were not added

A per-component subpath (`./components/lv1/Button`) measured an identical
9.5 KB to importing `{ Button }` from the tree-shaken barrel — it adds no
capability. It *would* add public API surface (every subpath becomes a
contract under [api-stability.md](../../.claude/rules/api-stability.md)) and
would require per-component CJS targets, duplicating bundled Radix across 17
standalone files and bloating the published package. Subpaths remain a
possible future addition — doing so later is additive and non-breaking.

### Why CJS is not split

`require()` consumers do not benefit from tree-shaking, and per-component CJS
files would duplicate the bundled Radix code across 17 standalone bundles,
inflating the npm package for no consumer gain. CJS keeps the single-barrel
build.

## Consequences

**Positive**

- A single-component import drops ~81 % (`{ Button }`: 49.5 KB → 9.5 KB;
  `{ Dialog }`: 19.9 KB). The barrel tree-shakes with no change to how
  consumers write imports.
- Both public entry points (`.` and `./components/lv1`) benefit — the root
  entry re-exports the lv1 barrel and shakes the same way.
- New lv1 components are picked up automatically: `tsup.config.ts` enumerates
  `src/components/lv1/*/index.ts`, so adding a component needs no build-config
  edit.

**Negative / trade-offs**

- `dist/` gains 17 per-component ESM files and per-component CSS files
  (`Dialog/index.css`, etc.) instead of one `index.css`. None are in the
  `exports` map, so per [api-stability.md](../../.claude/rules/api-stability.md)
  they are not public API and may change freely. The published package is
  marginally larger in raw file count; the shared-chunk dedup keeps total
  bytes essentially flat.
- CJS consumers still get the whole library on any import. Accepted: `require`
  does not tree-shake regardless.
- ESM and CJS now build in separate tsup config blocks (splitting is
  ESM-only), and a third block emits the barrels' `.d.ts` / `.d.cts`. More
  config blocks, but each has a single clear responsibility.

## Verification

Built with the new config and measured with `size-limit`
(`@size-limit/preset-small-lib`, esbuild + brotli, peer deps excluded):

| size-limit entry | Before | After | Budget |
|---|---|---|---|
| `components/lv1 (Button only, tree-shaken)` | ~48.3 KB | **9.67 KB** | 12 KB |
| `components/lv1 (all)` | ~48.5 KB | 48.65 KB | 60 KB |

The `Button only` budget is set to 12 KB — comfortably above the 9.67 KB
measured, well under the ~20 KB [#119](https://github.com/yasmro/schatten/issues/119)
originally targeted, leaving headroom for Button to grow before the budget
needs revisiting.

> **Note on `.size-limit.json`.** The size-limit *tooling* (the `size-limit`
> devDependencies, the `size` / `size:why` scripts, the CI job) is introduced
> by PR #226. This change carries only `.size-limit.json` with the lowered
> budget; it assumes #226 lands first. If the two are reconciled, keep the
> 12 KB `Button only` limit.

## Review history

| Date | Reviewer | Notes |
|---|---|---|
| 2026-05-18 | Yu Ohno (engineering) | Investigation, measurement, and implementation |

## References

- Issue [#119](https://github.com/yasmro/schatten/issues/119) — bundle-size monitoring + tree-shaking target
- PR [#226](https://github.com/yasmro/schatten/pull/226) — size-limit CI (predecessor)
- [api-stability.md](../../.claude/rules/api-stability.md) — what counts as public API (the `exports` map)
- [esbuild — `/* @__PURE__ */` annotations](https://esbuild.github.io/api/#pure)
