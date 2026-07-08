# Schatten framework-agnostic examples

Verification harnesses for the framework-agnostic (CSS class API) surface —
the 1.0 quality gate for [#161](https://github.com/yasmro/schatten/issues/161).
Each project uses Schatten in a different environment and exercises the same
checklist. The recorded results live in
[`docs/verification/framework-agnostic.md`](../docs/verification/framework-agnostic.md).

| Example | What it verifies | Run |
|---|---|---|
| [`vanilla-html/`](vanilla-html/) | The pure CSS path — one `<link>`, hand-written `.st-*` chains, theme toggles, no build step, no JS runtime | open `index.html` in a browser |
| [`astro/`](astro/) | `.astro` templates using the class API **plus** a React island (`<Button client:load>`) — CSS layer and React layer share one token set | `pnpm install --ignore-workspace && pnpm build && pnpm preview` |
| [`vue/`](vue/) | Vue 3 SFC templates using the class API; also demonstrates the per-component subpath (`@yasmro/schatten/css/button`) | `pnpm install --ignore-workspace && pnpm build && pnpm dev` |

> **`--ignore-workspace` is required.** The repo root ships a `pnpm-workspace.yaml`
> (for `onlyBuiltDependencies`), so a plain `pnpm install` inside an example is
> redirected to the workspace root and the example's own deps never land. The
> flag makes the example a standalone install, which is what these harnesses want.

## Prerequisite: build the package first

`astro/` and `vue/` depend on Schatten via `"@yasmro/schatten": "file:../.."`,
which packs the repo's `dist/`. Build it once at the repo root before installing
an example:

```sh
# repo root
pnpm install
pnpm build          # writes dist/schatten.css and dist/css/*.css
```

`vanilla-html/index.html` also reads `../../dist/schatten.css`, so it needs the
same `pnpm build` first (or switch its `<link>` to the CDN — see that file's
header comment).

## Not part of the published package

`examples/` is tracked in git but excluded from the npm tarball (`package.json`
`files: ["dist"]`) and from the lint / typecheck / test pipeline. These are
verification harnesses, not shipped code, and they are **not** a pnpm workspace
member (so installing an example never pulls Astro/Vue into the root install).

## CDN vs npm

Both delivery methods are covered:

- **npm / local dist** — `import '@yasmro/schatten/schatten.css'` (Astro/Vue) or
  a relative `<link>` to `dist/schatten.css` (vanilla). This is the pre-1.0
  verification path.
- **CDN** — `<link href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css">`.
  Only resolvable once the package is published; `vanilla-html/index.html` keeps
  the CDN `<link>` ready (commented) to smoke-test after the 1.0 publish.
