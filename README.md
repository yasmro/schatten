# Schatten

[![npm](https://img.shields.io/npm/v/@yasmro/schatten.svg)](https://www.npmjs.com/package/@yasmro/schatten)

> **A two-layer design system: framework-agnostic CSS + optional React components.**

Schatten is designed to work **without React**. Use it as plain CSS classes
(`<button class="st-btn st-btn--primary">`) in vanilla HTML, Astro, Vue, or
Svelte — and optionally lean on the React component layer
(`<Button variant="primary">`) for richer composition.

Inspired by [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten
brand. Where shadcn distributes copy-pasteable React source, Schatten ships a
single installable package whose CSS class API is intended to outlive any one
framework choice.

Built on Radix UI primitives, styled with Tailwind CSS v4, and authored with
`class-variance-authority` (CVA).

## Quick start

### Vanilla HTML

The CSS bundle ships design tokens, the base reset, animation keyframes,
**and the full set of `.st-*` component classes** for every lv1
component (see [css-api.md](.claude/rules/css-api.md)). One `<link>` to
`schatten.css` is enough — **no Tailwind setup, no JavaScript runtime,
no build step required.**

```html
<link
  href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css"
  rel="stylesheet"
/>

<button class="st-btn st-btn--primary">Click me</button>
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

Import the CSS bundle once at your app entry, then write `.st-*` class
chains directly on any element. **No JavaScript import needed.**

```astro
---
// src/pages/index.astro
import '@yasmro/schatten/schatten.css'
---

<button class="st-btn st-btn--primary">Click me</button>
<a href="/docs" class="st-btn st-btn--secondary">Docs</a>
```

```vue
<!-- Vue -->
<template>
  <button class="st-btn st-btn--primary">Click me</button>
</template>
```

```svelte
<!-- Svelte -->
<button class="st-btn st-btn--primary">Click me</button>
```

The exported CVA variant functions (`buttonVariants`, `badgeVariants`,
…) are still available from `@yasmro/schatten/variants` for cases where
you want the class string computed programmatically — but for static
markup the `.st-*` chain is the simpler path.

## Two-layer architecture

Schatten ships two consumer-facing surfaces. Both reference the same
underlying design tokens, so a project can mix layers freely or commit to
one.

### Layer A — Framework-agnostic CSS

The CSS bundle (`@yasmro/schatten/schatten.css`) ships design tokens
(primitive → semantic) and, going forward, component classes following
BEM (see [css-api.md](.claude/rules/css-api.md): prefix `st-`, modifiers
as `--variant`, sub-elements as `__name`, e.g.
`<button class="st-btn st-btn--primary">`). State is conveyed via HTML /
ARIA attributes (`[aria-invalid]`, `[aria-busy]`, `[data-state]`), not
modifier classes. No JavaScript runtime is required.

- **Tokens**: primitive scales, semantic tokens, base reset, animation keyframes
- **Component classes** ([css-api.md](.claude/rules/css-api.md) — [#58](https://github.com/yasmro/schatten/issues/58) Phase 2): every lv1 component is reachable via `.st-*` since v0.9.0
- **Build**: Tailwind CSS v4 CLI — used internally to compile `dist/schatten.css`. **Consumers do not need to install Tailwind.**

Stable from **v1.0.0**: class names and CSS custom properties are
part of the public API contract (see
[`.claude/rules/api-stability.md`](.claude/rules/api-stability.md)).

#### Using Schatten alongside another design system (token collisions)

Schatten's semantic tokens are **bare** (`--color-background`, `--color-error`,
the `--color-theme-*` scale, …) — the meaning is Schatten's, but the name is
not namespaced. This is deliberate: it lets Schatten share Tailwind's scale
names (`--spacing-4`, `--text-sm`) with your own Tailwind on purpose. The
trade-off is that if you run Schatten **alongside another full design system**
that also declares `--color-background` on `:root` (shadcn/ui does), the two
collide by last-wins. The naming rationale is the
[four-layer model](.claude/rules/api-stability.md#css-variable-naming--the-four-layer-model).

Schatten declares its token values **unlayered** on `:root` (unlayered wins
over any `@layer`), so pick the recipe that matches your situation:

**A consumer's own tokens should win globally** — import Schatten into a
cascade layer. Your unlayered `:root` then beats Schatten's layered values
deterministically (no reliance on import order):

```css
@import "@yasmro/schatten/schatten.css" layer(schatten);
:root {
  --color-background: #fff; /* your value — wins everywhere */
}
```

Note this is a *global* override: Schatten's own components read
`var(--color-background)` too, so they will adopt your value. Use it when you
*want* Schatten to inherit your surface, not when the two meanings genuinely
differ.

**True isolation for separable subtrees** — scope Schatten's tokens onto a
container. Custom properties resolve to the nearest declaring ancestor, so
Schatten components inside the wrapper stay on Schatten's values while your
`:root` keeps its own meaning everywhere else:

```html
<div class="schatten-scope"><!-- Schatten UI here --></div>
```

```css
/* Re-assert only the tokens you actually collide on, scoped to the subtree. */
.schatten-scope {
  --color-background: #fafafa; /* Schatten's intended surface */
}
```

**Deeply interleaved with conflicting meanings** is the rare irreducible case
the naming audit named explicitly: when both systems render on the same
elements and disagree on what `--color-background` means, no cascade trick
isolates them — alias one side's token in your own build. Because this case is
uncommon, Schatten does not pay a global `--st-color-*` rename to pre-empt it
(see the [decision log](docs/decisions/2026-07-css-variable-namespace.md)).

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

## SSR / Next.js App Router

From **v0.8.0**, every Schatten lv1 component bundle carries a `'use client'`
directive at the top (injected at build time via tsup's `banner.js`, see
[#116](https://github.com/yasmro/schatten/issues/116)). This means you can
**import Schatten components from a Next.js App Router Server Component
without a build error** — the directive marks the module as a Client
Component boundary for you. The components themselves still render on the
client; only the import is friction-free.

### Basic usage

No wrapper, no provider — import and render:

```tsx
// app/page.tsx — a Server Component is fine
import { Button } from '@yasmro/schatten'

export default function Page() {
  return <Button variant="primary">Click me</Button>
}
```

Import the CSS bundle once, in the root layout:

```tsx
// app/layout.tsx
import '@yasmro/schatten/schatten.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Theme switching

Runtime light/dark and seasonal (Special) theme switching is driven by the
`ThemeProvider` / `useTheme` pair exported from `@yasmro/schatten/providers`
(added in **v0.9.0**, [#128](https://github.com/yasmro/schatten/issues/128)).
The Provider is a thin wrapper around the existing `<html>` contract
(`.dark` class for Mode + `data-theme="<id>"` for Special — see
[`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)),
so Schatten components themselves never subscribe to it — they're repainted
via the CSS cascade.

The Provider is a Client Component (its bundle ships with a `'use client'`
banner), so you can import it from a Server Component layout directly — no
wrapper file needed:

```tsx
// app/layout.tsx
import '@yasmro/schatten/schatten.css'
import { ThemeProvider } from '@yasmro/schatten/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultMode="system" defaultSpecial="auto-seasonal">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```tsx
// Anywhere in a Client Component
'use client'
import { useTheme } from '@yasmro/schatten/providers'

export function ThemeSwitcher() {
  const { mode, modeSetting, setMode } = useTheme()
  return (
    <select value={modeSetting} onChange={(e) => setMode(e.target.value as never)}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}
```

**Props (most useful)**:

- `defaultMode`: `'light' | 'dark' | 'system'` — `'system'` subscribes to `prefers-color-scheme: dark`. Default `'system'`.
- `defaultSpecial`: a `SpecialThemeId` (e.g. `'season--spring-late'`), `'auto-seasonal'` (resolves the current date), or `null`. Default `null`.
- `storageKey`: `localStorage` key used to persist the user's selection across reloads. Default `'schatten-theme'`; pass `null` to disable persistence.
- `disableTransitionOnChange`: pass `true` for instantaneous swaps (suppresses CSS transitions during a Mode/Special change).

**`useTheme()` returns**:

- `mode`: the **resolved** `'light' | 'dark'` value (use this for CSS judgments).
- `modeSetting`: the **raw** setting including `'system'` (use this for UI toggles that need to show the system-tracking state).
- `setMode(setting)`: pass `'system'` to return to OS-following.
- `special` / `setSpecial(id | null)`: writes / removes `data-theme`.
- `isHydrated`: `true` once the client effect has reconciled with `localStorage` + `matchMedia`.

Reach for `useTheme()` only when you need to **read or mutate** the active
theme — don't branch JSX subtrees on `mode`. Schatten components repaint
through the CSS cascade with no React reconciliation, so a switch is free;
JSX branching forfeits that.

Multiple React roots on the same page (Astro Islands, micro-frontends,
two separate React mounts) work without explicit coordination: each
`ThemeProvider` observes `<html>` via `MutationObserver`, so when one
root mutates Mode or Special, the others sync automatically. `modeSetting`
(the `'system'` / `'light'` / `'dark'` choice itself) is not encoded in
the DOM — keep the actual switcher in one root if you need to expose it.

### FOUC avoidance

When `defaultMode="system"` (or any persisted selection differs from the
SSR default), a server-rendered page can briefly flash light before the
client effect upgrades the DOM. The fix is a tiny synchronous inline
script in `<head>` that mirrors the same `localStorage` / `matchMedia`
logic the Provider runs — but **before** first paint
([#129](https://github.com/yasmro/schatten/issues/129)).

Schatten ships this snippet two ways so you never hand-maintain the string:

- **React SSR** (Next.js, Remix, …) — render `<ThemeInitScript />` from
  `@yasmro/schatten/providers` in `<head>`.
- **Non-React / server / RSC** — import the `THEME_INIT_SCRIPT` string (or
  `buildThemeInitScript(key)` for a custom `storageKey`) from
  `@yasmro/schatten/theme-init`.

Both read the same JSON shape the Provider writes (`{ mode, special }`) under
the same `storageKey` (default `'schatten-theme'`). Drop it in as the very
first `<head>` child:

> **Two entry points, on purpose.** `@yasmro/schatten/providers` is a Client
> Component bundle (`'use client'`) — it owns the `<ThemeInitScript />`
> *component* and `<ThemeProvider>`. `@yasmro/schatten/theme-init` is a
> **framework-agnostic** bundle (no `'use client'`) — it owns the raw
> `THEME_INIT_SCRIPT` / `buildThemeInitScript` *string* exports.
>
> The split matters in a React Server Component graph: a Server Component can
> render `<ThemeInitScript />` (Next.js serializes its static `<script>` into
> the streamed HTML before hydration), but importing the **string** from a
> `'use client'` module would hand you a client reference, not the literal
> bytes. So import the string from `@yasmro/schatten/theme-init` — that entry
> is server-/RSC-importable precisely because it carries no `'use client'`.

#### Next.js App Router

```tsx
// app/layout.tsx
import '@yasmro/schatten/schatten.css'
import { ThemeInitScript, ThemeProvider } from '@yasmro/schatten/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <ThemeProvider defaultMode="system">{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

`suppressHydrationWarning` on `<html>` is required because the script
mutates that element before React hydrates the tree.

#### Vite / plain HTML

No build step or import is available here, so paste the exact value of the
exported `THEME_INIT_SCRIPT` string (it's the default-`storageKey` build):

```html
<!-- index.html -->
<head>
  <script>(function(){try{var s=localStorage.getItem("schatten-theme");var t=s?JSON.parse(s):{};var m=t.mode||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');if(t.special)document.documentElement.setAttribute('data-theme',t.special)}catch(e){}})();</script>
  <link rel="stylesheet" href="/path/to/schatten.css" />
</head>
```

#### Remix

Render the snippet in `root.tsx`'s `<head>`:

```tsx
// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { ThemeInitScript } from '@yasmro/schatten/providers'

export default function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
```

#### Strict CSP environments

If your Content-Security-Policy forbids inline scripts, the snippet needs an
explicit allowance — by `nonce`, by `hash`, or by externalizing it. See the
dedicated [CSP setup guide](#csp-setup-guide) below for copy-paste recipes
(Next.js / Astro / Remix), the security must-fixes, and the anti-patterns to
avoid.

The snippet runs **synchronously** and **must not be deferred** — `defer`
/ `async` / loading from a delayed CDN re-introduces the flash this
exists to prevent.

#### What the snippet handles

- Reads `localStorage.schatten-theme` if present, otherwise treats it as
  `mode='system'` with no Special.
- Adds `class="dark"` to `<html>` when the resolved Mode is dark.
- Writes `data-theme="<id>"` when the persisted Special is set.
- Wraps everything in `try/catch` so a disabled-storage or private window
  silently falls back to the SSR default — never throws.

If you customize `storageKey` on the Provider, pass the same key to
`<ThemeInitScript storageKey="my-key" />` (or call
`buildThemeInitScript('my-key')` from `@yasmro/schatten/theme-init` for the
string form). The two values are a public contract: a mismatch silently
breaks FOUC avoidance with no error.

### CSP setup guide

The FOUC snippet is an **inline `<script>`**. Under a strict
Content-Security-Policy (one without `'unsafe-inline'` in `script-src`) the
browser blocks it unless you explicitly allow it. There are three ways, in
descending order of preference.

> **Schatten never requires `'unsafe-inline'`.** If a guide tells you to add
> `'unsafe-inline'` to `script-src` to make the snippet run, stop — that
> disables the protection your CSP exists to provide and is never necessary
> here. Use a nonce or a hash instead. (Schatten also does **not** require
> `style-src 'unsafe-inline'`: the stylesheet is a static `<link>`, not an
> inline `<style>`.)

#### Option A — nonce (recommended for SSR)

A nonce is a per-response random token. You generate it on the server, put it
in both the CSP header and the `<script nonce>`, and the browser runs only
scripts carrying the matching token. `<ThemeInitScript nonce={…} />` forwards
the value onto the emitted `<script>`.

**The nonce must be cryptographically random and regenerated on every
response.** Use a CSPRNG (`crypto.randomBytes` in Node, `crypto.getRandomValues`
in the Edge/Web runtime) — **never** `Math.random()`, a build-time constant, or
a reused value. A predictable or static nonce is equivalent to no nonce at all.

**Next.js App Router** — generate the nonce in `middleware.ts`, set the CSP
header, and read it back in the layout:

```ts
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware() {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const csp = [
    `script-src 'self' 'nonce-${nonce}'`,
    `style-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ].join('; ')

  const requestHeaders = new Headers()
  requestHeaders.set('x-nonce', nonce)
  const res = NextResponse.next({ request: { headers: requestHeaders } })
  res.headers.set('Content-Security-Policy', csp)
  return res
}
```

```tsx
// app/layout.tsx
import { headers } from 'next/headers'
import { ThemeInitScript, ThemeProvider } from '@yasmro/schatten/providers'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript nonce={nonce} />
      </head>
      <body>
        <ThemeProvider defaultMode="system">{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

> **Next.js nonce × static caching footgun.** Reading the nonce via
> `headers()` opts the route into dynamic rendering. If you instead try to
> nonce a *statically cached* page, every visitor is served the same cached
> nonce — which defeats the nonce entirely. Either keep the page dynamic (as
> above) or pin the snippet by hash (Option B) for static pages. Do **not**
> reach for `'strict-dynamic'` to paper over this; it changes how the rest of
> your `script-src` is interpreted and is unrelated to running this one inline
> snippet.

**Astro** — Astro exposes a per-request nonce when CSP is enabled; pass it to
your own inline `<script>` (Astro islands don't render `<ThemeInitScript />`
directly, so use the string form):

```astro
---
// src/layouts/Base.astro
import { THEME_INIT_SCRIPT } from '@yasmro/schatten/theme-init'
const nonce = Astro.locals.cspNonce // however your middleware exposes it
---
<head>
  <script nonce={nonce} is:inline set:html={THEME_INIT_SCRIPT} />
</head>
```

**Remix** — generate the nonce in your `entry.server.tsx`, thread it through
the loader context, and pass it to `<ThemeInitScript nonce={nonce} />` in
`root.tsx` (same shape as the Next.js layout above).

#### Option B — hash (recommended for static pages)

A hash pin allow-lists the snippet by the SHA-256 of its exact bytes — no
per-response work, so it survives static caching. Add the published digest of
the default-key snippet to `script-src`:

```
Content-Security-Policy: script-src 'self' 'sha256-YKmfjVUKTYOL4QdVTkV/AUzMrHhhfPw//OthidDmEEE='; object-src 'none'; base-uri 'self'
```

This digest is the hash of `THEME_INIT_SCRIPT` (default `storageKey`
`'schatten-theme'`). It is byte-pinned in CI, so a snippet change can't drift
the published value silently — and any such change ships as a `major` (see the
[API stability contract](.claude/rules/api-stability.md)).

**Availability trap — a custom `storageKey` changes the hash.** If you pass a
non-default `storageKey`, the snippet bytes differ and the digest above no
longer matches; the browser will block the script. Recompute the hash for your
key with a tiny Node one-liner (no repo checkout needed — it uses the published
`buildThemeInitScript`):

```js
import { createHash } from 'node:crypto'
import { buildThemeInitScript } from '@yasmro/schatten/theme-init'

const script = buildThemeInitScript('my-app-theme') // your storageKey
const hash = createHash('sha256').update(script, 'utf8').digest('base64')
console.log(`sha256-${hash}`)
```

(Maintainers of this repo can instead run `pnpm schatten:csp-hash`, or
`pnpm schatten:csp-hash --key=my-app-theme` for a custom key — it reads the
built `dist/` so the hash is taken from exactly the shipped bytes.)

#### Option C — externalize the snippet

If you'd rather not manage a nonce or a hash, copy the snippet into a static
`.js` file served from your own origin and reference it:

```html
<head>
  <script src="/theme-init.js"></script>
  <link rel="stylesheet" href="/path/to/schatten.css" />
</head>
```

`script-src 'self'` then covers it with no extra directive. The cost is that
you now own a copy of the bytes and must re-sync it when you upgrade Schatten
across a `major` that changes the snippet. Generate the file contents from
`THEME_INIT_SCRIPT` / `buildThemeInitScript(key)` rather than hand-copying, so
the copy can't drift.

#### Recommended baseline directives

Whichever option you choose, harden the surrounding policy:

- `object-src 'none'` — there's no legitimate `<object>`/`<embed>` use here,
  and it closes a common injection vector.
- `base-uri 'self'` — stops an injected `<base>` tag from rewriting every
  relative URL on the page.

#### Anti-patterns to avoid

- ❌ Adding `'unsafe-inline'` to `script-src` "to make it work" — use a nonce
  or hash; `'unsafe-inline'` re-opens the hole the CSP closes.
- ❌ A static or `Math.random()` nonce — it must be a fresh CSPRNG value per
  response.
- ❌ Nonce-ing a statically cached page — the nonce is cached and reused; pin
  by hash (Option B) instead.
- ❌ `defer` / `async` on the snippet — it must run synchronously before first
  paint, or the flash returns.

### Remix

Remix renders on both the server and the client without a React Server
Component boundary, so the `'use client'` directive is a no-op there — import
and use Schatten components exactly as you would in any React app. Import
`@yasmro/schatten/schatten.css` from your `root.tsx` via the `links` export
or a direct `import`.

### Astro

Use Schatten React components as [Astro islands](https://docs.astro.build/en/concepts/islands/)
with a client directive so the component hydrates in the browser:

```astro
---
// src/pages/index.astro
import '@yasmro/schatten/schatten.css'
import { Button } from '@yasmro/schatten'
---

<Button client:load>Click me</Button>
```

For static, non-interactive markup you can skip React entirely and apply the
CVA variant classes to a plain element — see
[Astro / Vue / Svelte](#astro--vue--svelte) under Quick start.

### Known constraints (v0.8.0)

- **Class-based (no-React) usage is limited.** The `.st-*` component
  classes (`.st-btn`, `.st-input`, …) do not exist yet, so vanilla HTML
  and Astro cannot style components by class name alone. Use the exported
  `buttonVariants()` / `inputVariants()` … bridge in the meantime. Full
  class API (per [css-api.md](.claude/rules/css-api.md)) lands in
  **v0.9.0** ([#58](https://github.com/yasmro/schatten/issues/58) /
  [#154](https://github.com/yasmro/schatten/issues/154)).
- **`ThemeProvider` / FOUC snippet are not available yet** — both arrive in
  **v0.9.0** (see the two sections above).

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

### Per-component CSS

If you only need a handful of components and want to keep the CSS payload
as small as possible — or you're authoring vanilla HTML and writing
`<button class="st-btn st-btn--primary">` directly — each `lv1` component
ships its own subpath under `@yasmro/schatten/css/<component>`. Each file
contains just that component's `.st-*` rules, minified (≤ ~1 KB gzipped
each today; max measured 1026 B for `css/select`, with a `size-limit`
budget of 1.5 KB enforced in CI).

```html
<!-- vanilla HTML — design tokens + just the Button rules -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/core/tokens/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/themes/default/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yasmro/schatten/dist/css/button.css">

<button class="st-btn st-btn--primary st-btn--md">Save</button>
```

```ts
// bundler-based — same shape, declared via subpath imports
import '@yasmro/schatten/core/tokens'
import '@yasmro/schatten/themes/default'
import '@yasmro/schatten/css/button'
```

Available components (one subpath per lv1):
<!-- generated:lv1-components:start -->
`avatar` · `badge` · `button` · `callout` · `card` · `checkbox` ·
`dialog` · `dropdownmenu` · `field` · `fieldset` · `icon` · `input` ·
`popover` · `radio` · `select` · `separator` · `skeleton` ·
`spinner` · `switch` · `table` · `tabs` · `text` · `textarea` ·
`toast` · `tooltip`.
<!-- generated:lv1-components:end -->

Tokens must be imported separately — the per-component files reference
`var(--color-*)` but do not redeclare the variables themselves. The
integrated `@yasmro/schatten/schatten.css` is still the right default
for projects that use most of the library; per-component subpaths are
the escape hatch for "only import what you use" scenarios.

A detailed delivery recipe (critical-CSS inlining, defer patterns,
Lighthouse "Reduce unused CSS" remediation) lives in
[Performance](#performance) below, with runnable examples in
[`examples/lighthouse-100/`](examples/lighthouse-100/).

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

### Reserved z-index range

Schatten reserves the `0–100` z-index band for its portal / overlay
layers. Components reference these via the `--z-*` semantic tokens (also
exposed as Tailwind `z-*` utilities and `tokens.zIndex.*`):

| Token / utility      | Value | Layer                    |
|----------------------|-------|--------------------------|
| `--z-modal-backdrop` | 40    | Dialog overlay           |
| `--z-modal`          | 50    | Dialog content           |
| `--z-popover`        | 60    | Select / popover content |
| `--z-tooltip`        | 70    | Tooltip                  |
| `--z-toast`          | 80    | Toast (front-most)       |

`--z-base` (0) / `--z-dropdown` (10) / `--z-sticky` (20) / `--z-fixed`
(30) are reserved for consumer use. Keep your own stacking values
**outside the 0–100 band** (or slot them between the tokens above) to
avoid colliding with Schatten's overlays.

## Performance

Schatten ships as a single installable package, which trades shadcn's
copy-paste-no-unused-code property for ergonomics. The delivery modes
below close that gap — pick one based on the bundle budget. All three
target a 100/100/100/100 Lighthouse score; the differentiators are how
much of the library you carry and where it loads.

### Three delivery modes

| Mode | What you import | Bundle behavior | When to choose |
|---|---|---|---|
| **Easy** | `import '@yasmro/schatten/schatten.css'` | Full integrated stylesheet ships; unused selectors remain | Prototyping; using most of the library; bundle size is not the bottleneck |
| **Optimized — per-component CSS** | `import '@yasmro/schatten/core/tokens'` + `import '@yasmro/schatten/themes/default'` + `import '@yasmro/schatten/css/<component>'` for each component used | Only the rules for components you import (≤ 1.5 KB brotli each, see [budgets](#per-component-css-budgets)) | Production, especially when only a handful of components are used |
| **Optimized — Tailwind preset** *(planned)* | A `@yasmro/schatten/tailwind-preset` configures the consumer's Tailwind to compile + purge Schatten alongside the rest of the app's CSS | One purged stylesheet — only the utilities actually emitted by your JSX survive | Apps that already run Tailwind and want a single optimized stylesheet |

The Tailwind preset row is intentionally aspirational — it lands when a
concrete consumer ask exists. The per-component path is the
production-ready story today.

### Lighthouse audit mapping

| Audit | Easy mode | Optimized — per-component |
|---|---|---|
| **Reduce unused CSS** | Substantial unused% on a small app — the full `.st-*` table is shipped | ~0% unused — only imported components carry rules |
| **Eliminate render-blocking resources** | One `<link>` blocks first paint | Inline tokens in `<head>` + defer component CSS (recipe below) |
| **Avoid enormous network payloads** | All seasonal themes shipped together | Import `themes/seasonal` only when a Special is used |
| **Cumulative Layout Shift (CLS)** | Theme swap after JS load reflows content | SSR-emitted `<html data-theme>` + the [FOUC snippet](#fouc-avoidance) eliminate the swap window |

### Critical CSS recipe

The token layer (`core/tokens` + `themes/default`) defines every CSS
variable that Schatten components consume via `var(--color-*)`. Inlining
it in `<head>` means the first paint already has correct typography,
spacing, and color scheme; component CSS can then arrive asynchronously
without re-flowing the page.

#### Next.js App Router

Next.js inlines CSS imported anywhere in the React tree as one
`<style>` tag in the document `<head>`. Import the token layer in your
root layout and the per-component CSS adjacent to where it is used —
Next.js handles deduplication and ordering automatically:

```tsx
// app/layout.tsx
import '@yasmro/schatten/core/tokens'
import '@yasmro/schatten/themes/default'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

```tsx
// app/page.tsx
import '@yasmro/schatten/css/button'
import '@yasmro/schatten/css/badge'
import { Button, Badge } from '@yasmro/schatten'

export default function Page() {
  return (
    <main>
      <Button variant="primary">Save</Button>
      <Badge variant="success">Active</Badge>
    </main>
  )
}
```

No `_document` boilerplate, no `<style>` duplication. The downside is
that all per-component CSS Next.js sees gets concatenated into the same
critical chunk — keep imports adjacent to usage so route-level code
splitting can prune them when a route does not need them.

#### Vanilla HTML — inline + preload

For static HTML (Astro static pages, plain HTML), inline the tokens
directly and `preload` the component CSS so it downloads in parallel
with first paint without blocking it:

```html
<head>
  <style>/* paste contents of node_modules/@yasmro/schatten/dist/core/tokens/index.css */</style>
  <style>/* paste contents of node_modules/@yasmro/schatten/dist/themes/default/index.css */</style>
  <link
    rel="preload"
    as="style"
    href="/css/button.css"
    onload="this.rel='stylesheet'"
  >
  <noscript><link rel="stylesheet" href="/css/button.css"></noscript>
</head>
```

The `preload` + `onload="this.rel='stylesheet'"` pattern starts the
fetch immediately, then promotes the stylesheet to render-applying once
it arrives. `<noscript>` keeps the page styled when JavaScript is
disabled.

### Per-component CSS budgets

Every lv1 component's CSS subpath is size-limit-budgeted at **1.5 KB
brotli**, with a **20 KB** aggregate cap across all 18 components. The
full list lives in [`.size-limit.json`](.size-limit.json), with
matching entries in the API contract
([api-stability.md](.claude/rules/api-stability.md#manifest-as-the-authoritative-api-listing)).

The CI `size` job re-measures every PR and fails when any single
component or the aggregate exceeds its budget. The manifest pins the
*names* of public classes / attributes / variables; size-limit pins the
*cost* of carrying each component. Together they keep the per-component
delivery story honest: a rename trips `pnpm check:manifest`, a runaway
component CSS trips `pnpm size`.

### Runnable examples

End-to-end runnable demos that target a 100/100/100/100 Lighthouse
score:

- [`examples/lighthouse-100/nextjs`](examples/lighthouse-100/nextjs) —
  Next.js 15 App Router; uses per-component subpath imports and
  Next.js's built-in critical-CSS inlining for the token layer.
- [`examples/lighthouse-100/vanilla`](examples/lighthouse-100/vanilla)
  — plain HTML; inlines tokens, preloads component CSS, no framework.

Each example ships a `lighthouserc.json` that asserts a 100% score
across Performance / Accessibility / Best Practices / SEO via
[`@lhci/cli`](https://github.com/GoogleChrome/lighthouse-ci). Run
`pnpm install && pnpm lhci` inside an example to reproduce the
measurement. The latest measured scores (with the Chrome / Lighthouse
versions they were taken under) are recorded in each example's
`## Measured scores` section.

## Components

Primitive components live under `src/components/lv1/`:

Badge · Button · Callout · Checkbox · Dialog · DropdownMenu · Field · FieldSet · Icon · Input · Popover · Radio · Select · Separator · Skeleton · Spinner · Switch · Tabs · Text · Textarea · Toast · Tooltip

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
└── docs/             # Storybook docs (Tokens, Theming, CSS API, Patterns)
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

pnpm size              # Check bundle size against .size-limit.json
pnpm size:why          # Inspect what contributes to the bundle size
```

### Bundle size

Bundle size is monitored in CI with [`size-limit`](https://github.com/ai/size-limit).
The budgets live in [`.size-limit.json`](.size-limit.json) and a `size` CI job
fails the build when any budget is exceeded. The tracked entry points are:

| Entry | Budget | What it covers |
| --- | --- | --- |
| `components/lv1 (all)` | 60 KB | The full `lv1` component bundle. |
| `components/lv1 (Button only, tree-shaken)` | 55 KB | A single-component import — a canary for tree-shakeability. |
| `variants` | 5 KB | The framework-agnostic CVA variants entry. |
| `schatten.css` | 5 KB | The standalone CSS bundle. |

Budgets are measured minified + brotlied and exclude peer dependencies
(`react`, `react-dom`, `lucide-react`). They are initial values — re-calibrate
against real measurements as the surface grows.

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
