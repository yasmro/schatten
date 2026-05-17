# Schatten

[![npm](https://img.shields.io/npm/v/@yasmro/schatten.svg)](https://www.npmjs.com/package/@yasmro/schatten)

> **A two-layer design system: framework-agnostic CSS + optional React components.**

Schatten is designed to work **without React**. Use it as plain CSS classes
(`<button class="btn btn--primary">`) in vanilla HTML, Astro, Vue, or Svelte —
and optionally lean on the React component layer
(`<Button variant="primary">`) for richer composition.

Inspired by [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten
brand. Where shadcn distributes copy-pasteable React source, Schatten ships a
single installable package whose CSS class API is intended to outlive any one
framework choice.

Built on Radix UI primitives, styled with Tailwind CSS v4, and authored with
`class-variance-authority` (CVA).

## Quick start

### Vanilla HTML

> **Status (v0.7.0):** The CSS bundle currently ships design tokens + base
> reset. Component classes like `.btn` / `.input` are scheduled to land in
> **v0.14.0** (see [#58](https://github.com/yasmro/schatten/issues/58) /
> [#154](https://github.com/yasmro/schatten/issues/154)). Until then,
> styling components without React requires building on top of the token
> layer.

```html
<link
  href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css"
  rel="stylesheet"
/>

<!-- Coming in v1.0: -->
<button class="btn btn--primary">Click me</button>
```

### React

```sh
pnpm add @yasmro/schatten
```

```tsx
import '@yasmro/schatten/schatten.css'
import { Button } from '@yasmro/schatten'

export function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Astro / Vue / Svelte

Import the CSS bundle once at your app entry, then call the exported CVA
variant functions to get the class string for any non-React element. This
path works today — the utilities used by `buttonVariants`,
`badgeVariants`, `inputVariants`, etc. are baked into `schatten.css`.

```astro
---
// src/pages/index.astro
import '@yasmro/schatten/schatten.css'
import { buttonVariants } from '@yasmro/schatten/variants'
---

<button class={buttonVariants({ variant: 'primary' })}>Click me</button>
<a href="/docs" class={buttonVariants({ variant: 'secondary' })}>Docs</a>
```

```vue
<!-- Vue -->
<script setup lang="ts">
import { buttonVariants } from '@yasmro/schatten/variants'
</script>
<template>
  <button :class="buttonVariants({ variant: 'primary' })">Click me</button>
</template>
```

```svelte
<!-- Svelte -->
<script lang="ts">
  import { buttonVariants } from '@yasmro/schatten/variants'
</script>
<button class={buttonVariants({ variant: 'primary' })}>Click me</button>
```

When the data-attribute class API lands (v0.14.0, see
[#58](https://github.com/yasmro/schatten/issues/58) /
[#154](https://github.com/yasmro/schatten/issues/154)), the same code
drops the JS import entirely:

```astro
---
import '@yasmro/schatten/schatten.css'
---

<!-- v0.14.0 onward — no buttonVariants() needed -->
<button class="btn" data-variant="solid">Click me</button>
<a href="/docs" class="btn" data-variant="outline">Docs</a>
```

Until then, `buttonVariants(...)` is the recommended bridge.

## Two-layer architecture

Schatten ships two consumer-facing surfaces. Both reference the same
underlying design tokens, so a project can mix layers freely or commit to
one.

### Layer A — Framework-agnostic CSS

The CSS bundle (`@yasmro/schatten/schatten.css`) ships design tokens
(primitive → semantic) and, going forward, component classes keyed on
`data-*` attributes (`<button class="btn" data-variant="solid">`). No
JavaScript runtime is required.

- **Tokens** today (v0.7.0): primitive scales, semantic tokens, base reset
- **Component classes** ([#58](https://github.com/yasmro/schatten/issues/58) Phase 2): land in v0.14.0
- **Build**: Lightning CSS

Stable from **v1.0.0**: class names and CSS custom properties are
part of the public API contract (see
[`.claude/rules/api-stability.md`](.claude/rules/api-stability.md)).

### Layer B — Optional React components

When React is on the table, the same tokens drive a typed component layer
(`<Button variant="primary">`, `<Input isError>`, `<Toast variant="error">`,
…) on top of Radix UI primitives. Variants are authored with CVA and the
output class strings are also part of the public API from v1.0.0.

- **Framework**: React 18 / 19 + TypeScript
- **Primitives**: Radix UI (Dialog, Tooltip, Select, Toast, …)
- **Variants**: class-variance-authority (CVA)
- **Build**: tsup
- **Test**: Vitest + Testing Library
- **VRT**: Playwright
- **Storybook**: Component documentation & visual testing

### Shared tooling

- **Lint / Format**: Biome
- **Git hooks**: lefthook
- **Release**: Changesets
- **Package manager**: pnpm

## Installation

```sh
pnpm add @yasmro/schatten
# or
npm install @yasmro/schatten
```

`react` and `react-dom` (`^18` or `^19`) are required as peer dependencies
when consuming Layer B. Layer A has no runtime dependencies.

`lucide-react` is a peer dependency of the React component layer — install it
alongside `@yasmro/schatten` whenever you use the React components:

```sh
pnpm add lucide-react
```

`Toast`, `Callout`, `Select`, `Field`, and `Dialog` render Lucide icons
internally, and `Button` / `Badge` / `Input` accept Lucide icon components via
their `icon` props. It is declared `optional` in `peerDependenciesMeta` only so
that Layer A (CSS / token-only) consumers — who never touch the React layer —
are not warned about a dependency they do not need.

## Usage

### Recommended import path

The package root (`@yasmro/schatten`) is the **canonical entry** — it
re-exports every primitive component, and modern bundlers (Vite, Next.js,
Rollup, esbuild) tree-shake unused components out of the final bundle. The
package declares `"sideEffects": ["*.css", "**/*.css"]` so only CSS imports
have a side effect.

For bundle-size-sensitive contexts (RSC bundles, edge runtime, legacy
non-ESM-clean bundlers) you can scope imports to the leaf entry:

```tsx
import { Button } from '@yasmro/schatten/components/lv1'  // sub-path also works
import { buttonVariants } from '@yasmro/schatten/variants'
```

Both forms are supported and stable.

### Icons

Components that take an icon (`Button` / `Badge` `icon`, `Input`
`iconLeft` / `iconRight`, `Dialog`'s footer-button `icon`) accept a Lucide
**icon component** — import it from `lucide-react` and pass it directly:

```tsx
import { Search } from 'lucide-react'
import { Button } from '@yasmro/schatten'

<Button icon={Search}>Search</Button>
```

Passing the component (rather than a name string) means your bundler only
includes the icons you actually use — there is no icon registry inside
schatten to bloat your bundle, and no allowlist to contend with.

**String-driven icons (CMS content, Astro island / RSC boundaries).** When
an icon must be chosen from a serializable value — a string from a CMS, or a
prop crossing an Astro island / React Server Component boundary — keep a
small icon map **in your own app**. You own the map, so it stays
tree-shakeable and never needs a change to schatten:

```ts
// app/icons.ts — your app owns this
import { Search, Trash2, ArrowRight, type LucideIcon } from 'lucide-react'

export const appIcons = { Search, Trash2, ArrowRight } satisfies Record<string, LucideIcon>
export type AppIconName = keyof typeof appIcons
```

```tsx
// Resolve the string to a component on your side of the boundary
import { Button } from '@yasmro/schatten'
import { appIcons, type AppIconName } from './app/icons'

function IconButton({ iconName, label }: { iconName: AppIconName; label: string }) {
  return <Button icon={appIcons[iconName]}>{label}</Button>
}
```

### Token-only usage

If you want only the design tokens (CSS custom properties) without
components, import the token bundle:

```tsx
import '@yasmro/schatten/core/tokens'
import '@yasmro/schatten/themes/default'
```

This is the most reliable Layer A path today — it works in any framework
that can `import` a CSS file.

### Seasonal themes

```tsx
import '@yasmro/schatten/themes/seasonal/themes.css'
```

### Typed token references

Prefer Tailwind utilities (`bg-error`, `text-foreground-muted`, …) for
everyday styling. When you need a CSS variable reference in inline style
or CSS-in-JS, the `tokens` export provides typed pointers:

```tsx
import { tokens, type ColorToken } from '@yasmro/schatten/tokens'

function Banner({ tone }: { tone: ColorToken }) {
  return <div style={{ background: tokens.color[tone] }}>...</div>
}

<div style={{ background: tokens.color.errorSubtle, color: tokens.color.error }}>
  Something went wrong
</div>
```

## Components

Primitive components live under `src/components/lv1/`:

Badge · Button · Callout · Checkbox · Dialog · Field · FieldSet · Input · Radio · Select · Separator · Spinner · Switch · Text · Textarea · Toast · Tooltip

See Storybook for live examples and prop documentation.

## Project Structure

```
src/
├── components/lv1/   # Primitive components
├── components/lv2/   # Composite components
├── contexts/         # React contexts (Field, FieldSet, …)
├── core/tokens/      # Primitive & semantic CSS tokens
├── themes/           # Default and seasonal themes
├── variants/         # CVA variant definitions
├── lib/              # Shared utilities (cn, etc.)
└── docs/             # Storybook docs (Color, Typography, …)
```

## Development

```sh
pnpm install

pnpm dev               # Start Storybook on :6006
pnpm build             # Build JS + CSS into dist/
pnpm build:storybook   # Build static Storybook

pnpm test              # Run Vitest
pnpm test:vrt          # Run Playwright VRT
pnpm test:vrt:update   # Update VRT snapshots

pnpm lint              # Biome CI checks
pnpm lint:fix          # Biome auto-fix
pnpm lint:pkg          # publint — validate package.json / exports shape
pnpm typecheck         # tsc --noEmit
```

## Release

This package uses [Changesets](https://github.com/changesets/changesets). When introducing a user-facing change, add a changeset:

```sh
pnpm changeset
```

CI runs `changeset status --since=origin/main` on every PR and fails when source
changes ship without a changeset. The check is automatically skipped for:

- PRs authored by `dependabot[bot]`
- PRs labeled **`no-changeset`** — use this for `.github/` workflow changes,
  docs-only edits, test-only PRs, and other internal work that does not affect
  the published package

If the check fails and the PR is genuinely user-facing, run `pnpm changeset` and
commit the generated file. If the PR is internal, apply the `no-changeset`
label and re-run the job.

## License

MIT
