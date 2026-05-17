# Schatten

[![npm](https://img.shields.io/npm/v/@yasmro/schatten.svg)](https://www.npmjs.com/package/@yasmro/schatten)

Design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand.

Built on Radix UI primitives, styled with Tailwind CSS, and authored with `class-variance-authority` (CVA). Ships React components, CVA variants, and a layered token system (primitive → semantic → component).

## Tech Stack

- **Framework**: React 18 / 19 + TypeScript
- **Styling**: Tailwind CSS v4 + class-variance-authority (CVA)
- **Primitives**: Radix UI
- **Storybook**: Component documentation & visual testing
- **Build**: tsup + Lightning CSS
- **Lint / Format**: Biome
- **Test**: Vitest
- **VRT**: Playwright
- **Git Hooks**: lefthook
- **Release**: Changesets
- **Package Manager**: pnpm

## Installation

```sh
pnpm add @yasmro/schatten
# or
npm install @yasmro/schatten
```

`react` and `react-dom` (`^18` or `^19`) are required as peer dependencies.

## Usage

Import the bundled stylesheet once at your app entry, then use any component:

```tsx
import '@yasmro/schatten/schatten.css'
import { Button } from '@yasmro/schatten'

export function App() {
  return <Button variant="primary">Click me</Button>
}
```

### Recommended import path

The package root (`@yasmro/schatten`) is the **canonical entry** — it re-exports
every primitive component, and modern bundlers (Vite, Next.js, Rollup, esbuild)
tree-shake unused components out of the final bundle. The package declares
`"sideEffects": ["**/*.css"]` so only the CSS import has a side effect.

For bundle-size-sensitive contexts (RSC bundles, edge runtime, legacy
non-ESM-clean bundlers) you can scope imports to the leaf entry:

```tsx
import { Button } from '@yasmro/schatten/components/lv1'  // sub-path also works
import { buttonVariants } from '@yasmro/schatten/variants'
```

Both forms are supported and stable.

### Token-only usage

If you want only the design tokens (CSS custom properties) without components, import the token bundle:

```tsx
import '@yasmro/schatten/core/tokens'
import '@yasmro/schatten/themes/default'
```

### Seasonal themes

```tsx
import '@yasmro/schatten/themes/seasonal/themes.css'
```

### Typed token references

Prefer Tailwind utilities (`bg-error`, `text-foreground-muted`, …) for everyday styling. When you need a CSS variable reference in inline style or CSS-in-JS, the `tokens` export provides typed pointers:

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
