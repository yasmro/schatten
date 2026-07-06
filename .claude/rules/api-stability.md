# API Stability Guideline

## Overview

This document defines Schatten's **public API stability contract**, in effect from
**v1.0.0 onward**. Pre-1.0 releases are explicitly **out of scope** — breaking
changes are permitted in any release while we settle the surface.

Schatten ships both **React components** and a **framework-agnostic CSS layer**
(see [#58](https://github.com/yasmro/schatten/issues/58)). Both surfaces are
consumer-facing and need the same stability guarantees. That means CSS class
names, CSS variable names, and CVA output strings are part of the contract —
not just the React props.

> **Before tagging the v1.0.0 RC, re-read this document end-to-end** and
> reconcile it against the actual surface (the `package.json` `exports` map,
> the generated `dist/schatten.manifest.json` if it exists by then, the
> exported CSS classes and variables). This doc was written while pre-1.0;
> some claims (e.g. the class-name audit deadline, the manifest's existence,
> peer dependency ranges) will need to be confirmed or revised before the
> contract goes live. Track that review as a v1.0 release blocker.

## What counts as public API

From v1.0.0 onward, the following are treated as **public API** and any
breaking change requires a `major` version bump and a migration note in the
CHANGELOG:

| Surface | Examples |
|---|---|
| React component props | `<Button variant="primary">`, `<Input isError>`, `<Toast variant="error">` |
| Exported TypeScript types | `ButtonProps`, `IconName`, `FieldContextValue`, the return type of `buttonVariants()` |
| CSS class names | `.st-btn`, `.st-btn--primary`, `.st-input-wrapper`, `.st-callout__icon`, plus the `[aria-invalid="true"]` / `[aria-busy="true"]` / `[data-state]` / `[data-side]` state hooks they target. The naming convention (prefix `st-`, BEM, attribute-driven state) is fixed in [css-api.md](css-api.md); this document only sets the breaking-change policy that sits on top. |
| CSS custom properties | `--color-primary-600`, `--color-error`, `--spacing-4`, `--font-sans` |
| CVA output strings | The class string returned by `buttonVariants({ variant: 'primary' })` |
| Multi-entry exports | `@yasmro/schatten/components/lv1`, `/tokens`, `/variants`, `/themes/default`, `/themes/seasonal`, `/providers` |
| Theme contract | Which CSS variables a custom theme must define to be valid |
| Provider runtime contract | The `localStorage` key (`'schatten-theme'`) and JSON shape (`{ mode, special }`) that `<ThemeProvider>` reads/writes. This is the contract the FOUC inline snippet ([#129](https://github.com/yasmro/schatten/issues/129)) and any consumer-side persistence code depends on. Renaming the key, adding/removing a field, or changing field semantics is a breaking change. |
| FOUC snippet bytes | The exact byte sequence of `THEME_INIT_SCRIPT` (and the output of `buildThemeInitScript()`). Consumers paste its SHA-256 into a `script-src 'sha256-…'` CSP directive, so the bytes themselves are public surface. See [FOUC snippet byte stability](#fouc-snippet-byte-stability-theme_init_script) below. |

## What is **not** public API

The following are internal implementation details. They may change in any
release — including a `patch` — without notice:

- Utilities under `src/lib/` (`cn`, `merge-refs`, etc.). These are not exported
  from the package entry points; consumers should not deep-import them.
- Storybook stories (`*.stories.tsx`) and the docs site they generate.
- Test files (`*.test.tsx`, `*.vrt.spec.ts`) and the `__snapshots__/` directory.
- Internal React state, context shape that is not exposed via an exported hook
  or provider, and any private helper component that is not exported.
- The exact DOM structure inside a component, **except** where a documented
  CSS class name pins it. Adding/removing a wrapper `<div>` that has no
  documented class is **not** a breaking change.
- File paths inside `dist/` other than the ones declared in `package.json`'s
  `exports` map.
- **Primitive-scale CSS variables** (`--vermillion-*`, `--red-*`, `--blue-*`,
  `--gray-*`, `--sumi-*`, `--alabaster-*`, `--paper-*`, `--ink-*`, …). They
  ship in the dist `:root` (unlayered) but are **not** in the registrar /
  manifest, so they are not public surface — renaming or retuning them is
  **not** a breaking change and does not require the pre-1.0 settle. Consumers
  reference the semantic layer (`--color-vermillion`, `--color-error`, the
  `--color-theme-*` scale) instead. This is decided, not deferred — see
  [CSS variable naming — the four-layer model](#css-variable-naming--the-four-layer-model)
  (layer 1) and the #231 decision log.

If a consumer reaches into one of these, that's a usage outside the contract —
we will not consider their breakage when scoping a release.

## Breaking change policy

| Phase | Policy |
|---|---|
| **Pre-1.0** (current) | Breaking changes permitted in any release. CHANGELOG should still call them out so early adopters can migrate. |
| **1.0+ patch** | Bug fixes only. No public API **surface** changes — no renames, removals, or additions. Token value tweaks (e.g. a slight hex shift on `--color-primary-600`) are permitted because they don't change the *contract*, only the *value at the named slot*; flag them in the CHANGELOG. |
| **1.0+ minor** | Additive surface changes only (new components, new variants, new CSS variables, new exports). Existing surface must remain compatible. |
| **1.0+ major** | Breaking changes permitted. Must ship a migration guide. |
| **Deprecation** | Anything to be removed in a major must spend at least one full major cycle marked deprecated first — in TSDoc (`@deprecated`), in console warnings where feasible, and in the CHANGELOG. |

### What counts as "breaking" for CSS

CSS breakage is easy to miss because TypeScript can't catch it. Treat these as
breaking:

- Renaming or removing a documented `.st-*` class (`.st-btn`,
  `.st-input-wrapper`, `.st-dialog__content`, …). The naming shape is fixed in
  [css-api.md](css-api.md); renaming the `st-` prefix itself, the BEM
  separators, or the block name of an existing component are all `major`.
- Renaming or removing a CSS custom property declared in `src/core/tokens/`
  or `src/themes/`.
- Changing the *meaning* of a class — e.g. swapping which selector a class
  applies to, repointing `.st-btn--primary` from `--color-solid` to a
  different token, or changing the CSS cascade order in a way that flips
  precedence between the `tokens` / `components` / `utilities` layers.
- Removing or repurposing a `data-*` / `aria-*` attribute that documented
  selectors target — e.g. dropping `[data-state="open"]` from
  `.st-dialog__content`, or moving error styling off `[aria-invalid="true"]`
  onto a new state class. The full state-attribute table is in
  [css-api.md §state](css-api.md#state-is-expressed-as-attributes-not-classes).

These are **not** breaking:

- Tweaking a token's color value (`--color-primary-600` going from one hex to
  a slightly different hex) — call this out in the CHANGELOG but it's a `minor`
  or `patch`, not `major`.
- Adding new `.st-*` classes, new modifier values, new sub-elements, or new
  documented state attributes.
- Refactoring internal CSS that has no documented class name attached — e.g.
  collapsing a `:where(.dark) .st-btn--primary { … }` rule into a token swap,
  provided the resulting cascade is observably identical.

## CHANGELOG conventions

Use these prefixes inside the changeset description so the rendered CHANGELOG
groups changes by surface. The semver bump itself is chosen by
`pnpm changeset`; the prefix is purely a label for the human reader.

| Prefix | Used for |
|---|---|
| `BREAKING:` | Any breaking change to a public surface (major only). |
| `CSS API:` | Any change visible to consumers of the CSS build — added, removed, or renamed class/variable. |
| `Types:` | Changes to exported TypeScript types that are not React-prop-shaped (e.g. utility type renames, generic signature changes). |
| `Deprecated:` | Anything newly marked `@deprecated`. |

A `BREAKING:` entry **must** link to a migration section. Place the migration
notes in the changeset body so they end up in the rendered CHANGELOG; for
large migrations, also publish a standalone guide under `docs/migrations/`
and link to it from the changeset.

When the FOUC snippet bytes change (a `major` — see
[FOUC snippet byte stability](#fouc-snippet-byte-stability-theme_init_script)),
the changeset description **must** include the new `sha256-…` so CSP consumers
can re-pin without rebuilding the package themselves. Regenerate it with
`pnpm schatten:csp-hash`.

Example (illustrative — uses a hypothetical rename):

```md
---
'@yasmro/schatten': major
---

BREAKING: `<Input isError>` is renamed to `<Input invalid>` for parity with
ARIA. Replace all occurrences in your code. See docs/migrations/v2-input-invalid.md
for a sed snippet and a checklist.

CSS API: `.st-input-wrapper` now routes its error state via
`[aria-invalid="true"]` (the standard hook from [css-api.md](css-api.md)).
The previous `[data-error]` attribute is removed. Consumers writing vanilla
HTML must swap `<div data-error class="st-input-wrapper">` to `<div
class="st-input-wrapper"><input aria-invalid="true" …></div>`.
```

## CVA output stability

`buttonVariants({ variant: 'primary' })` returning a class string makes the
string itself part of the public API. Consumers can — and do — paste that
string into non-React contexts (server-rendered HTML, email templates,
WordPress blocks).

The implications:

- **Pin the `class-variance-authority` dependency** at v1.0. CVA changing how
  it joins, dedupes, or orders class names would silently break consumers.
  Upgrading CVA across a version where output shape changes is a `major`.
- The **deduplicated set** of class names produced for a given variant tuple
  is part of the contract; the **order** within the string is not. This is
  safe *only because* CVA + `tailwind-merge` dedupe conflicting utilities
  before emitting the string — Tailwind utilities share CSS specificity, so
  if two conflicting utilities ever made it into the output, "last one wins"
  would mean order silently became contract-relevant. If we ever drop the
  dedup step (or `tailwind-merge` changes its conflict-resolution behavior),
  order has to be reclassified as part of the contract, and the change is a
  `major`.
- Adding a new variant option to an existing prop (e.g. `<Button variant="ghost">`
  when only `primary | secondary` existed) is `minor` — additive.

## FOUC snippet byte stability (`THEME_INIT_SCRIPT`)

The FOUC-avoidance snippet shipped from `@yasmro/schatten/theme-init`
(`THEME_INIT_SCRIPT`, and the output of `buildThemeInitScript(storageKey)`)
is an **inline `<script>` body** consumers drop into their document `<head>`
to set the theme before first paint. In a strict Content-Security-Policy
environment, an inline script only runs if its SHA-256 is allow-listed via a
`script-src 'sha256-…'` source expression. That makes the *exact bytes* of
the snippet public API — analogous to [CVA output stability](#cva-output-stability):
the value a consumer pins is derived from the string we emit, so we can't
change the string without breaking their pin.

The contract:

- **The byte sequence of `THEME_INIT_SCRIPT` is frozen across non-major
  releases.** Any change — even a semantically-neutral whitespace or
  identifier tweak — shifts the SHA-256 and silently breaks every
  hash-pinning consumer's CSP (the snippet stops executing, FOUC returns).
  Changing it is a `major`.
- **`buildThemeInitScript()`'s output shape is equally frozen.** Consumers on
  a custom `storageKey` recompute their own hash from it, so the template
  around the key is contract; only the interpolated key differs.
- **The published default-key hash is
  `sha256-YKmfjVUKTYOL4QdVTkV/AUzMrHhhfPw//OthidDmEEE=`.** It is byte-pinned
  in CI by [`src/theme-init.test.ts`](../../src/theme-init.test.ts) (the
  snippet → hash direction) and
  [`scripts/__tests__/print-csp-hash.test.ts`](../../scripts/__tests__/print-csp-hash.test.ts)
  (the maintainer CLI emits the same string a consumer pastes). A snippet
  edit fails both tests, so the breaking change cannot land silently — the
  red test is the forcing function that routes it through the `major` +
  changeset process below.
- **Regenerate the hash with `pnpm schatten:csp-hash`** (reads the built
  `dist/theme-init/index.js`; pass `--key=<storageKey>` for a custom key).
  This is a maintainer command, not consumer-facing — see the script header
  in [`scripts/print-csp-hash.mjs`](../../scripts/print-csp-hash.mjs).

## Peer dependency ranges

The `peerDependencies` ranges in `package.json` (currently `react` and
`react-dom` at `^18.0.0 || ^19.0.0`) are part of the contract because consumers
resolve them against their own trees. If we ever promote `class-variance-authority`
or `tailwind-merge` to peer deps, the same rules apply.

- **Narrowing a range** (e.g. dropping React 18 support so the package only
  accepts React 19+) is **breaking** — a `major` is required. Some
  consumers' installs will start failing peer-dep resolution.
- **Widening a range** (e.g. adding React 20 once it's released and we've
  verified compatibility) is **additive** — `minor`.
- **Bumping a tooling dep that affects output** (e.g. `class-variance-authority`
  in a way that changes the emitted class string) is covered separately by
  the "CVA output stability" section above and is a `major`.

## Visual-contract-affecting dependencies

A small set of production / peer / dev dependencies can break the visual
contract **without any source-file change** — a bump alone is enough.
They're listed here as the single source of truth; any tooling that
needs to react to such bumps (notably the [`prepare-release`](../skills/prepare-release/SKILL.md)
skill's Step 3) should consult this table rather than duplicate it.

| Dependency | Why it affects the visual contract |
|---|---|
| `lucide-react` | The Icon parity story ([`Icon.parity.stories.tsx`](../../src/components/lv1/Icon/Icon.parity.stories.tsx)) hand-pins inline SVG (`<circle>` + `<path>`) against a specific Lucide render. A Lucide bump that adjusts any icon's path / attributes drifts the parity baseline. |
| `@radix-ui/*` (primitives that emit DOM — `react-checkbox` / `react-radio-group` / `react-select` / `react-separator` / `react-switch` / `react-tooltip` / `react-dialog` / `react-avatar`) | Radix sometimes adds, renames, or removes `data-*` / `aria-*` attributes on its rendered primitives. Parity-covered components (Checkbox / Radio / Separator / Switch — 区分 A/B per [vrt-spec-guideline §Parity stories](vrt-spec-guideline.md#parity-stories--when-to-write-one-when-to-skip)) catch the drift via parity VRT; non-parity components (Tooltip / Dialog / Select / Avatar — 区分 C/D) require manual verification because no parity baseline exists. For `Avatar` specifically, the image→fallback swap is the load-status surface a `react-avatar` bump could shift — verify `pnpm test:vrt --grep "Avatar"` (incl. the broken-image interaction test) after the bump. |
| `sonner` | Renders the `Toast` (since [#318](https://github.com/yasmro/schatten/issues/318), replacing `@radix-ui/react-toast`). Schatten renders each toast body itself via `toast.custom()` (real `Icon` / `Spinner` / `Button` + `.st-toast*` classes) under `toastOptions.unstyled`, so the inner visual is Schatten's — but Sonner still owns the `<li>` wrapper, viewport positioning, stacking, swipe, and enter/exit animation. A Sonner bump that changes the custom-content wrapper structure, the `unstyled` behavior, or its injected positioning / stacking / animation styles can shift the Toast visual with no source-side change. No parity baseline exists (Toast is 区分 D — JS 必須), so verify manually: `pnpm test:vrt --grep "Toast"` + Storybook visual review. Pinned exact in `package.json`. |
| `@radix-ui/react-slot` | Slot doesn't emit DOM of its own, but it's the `asChild` plumbing — a bump can change prop-merging order or ref-forwarding behavior. This affects the one component that exposes `asChild` publicly (`Button`) **and** every component that uses Slot internally (`Tooltip.Trigger`'s `isTextOnly` path, `Dialog`'s internal `DialogPrimitive.Close asChild`, `Select`'s `SelectPrimitive.Icon asChild`). |
| `tailwindcss` / `@tailwindcss/vite` | **Storybook/dev path only since #317** (the dist build is Tailwind-free — lightningcss, below). Storybook is what every component VRT screenshots, and stories lean on Tailwind utilities (`flex` / `gap-4` / `bg-surface` / …) as layout scaffolding, so a Tailwind bump can still drift **component/docs VRT baselines** without a source change. It can no longer affect the manifest or the shipped `dist/schatten.css`. |
| `lightningcss` | The engine that compiles `dist/schatten.css` and every `dist/css/<component>.css` (#317, `scripts/build-css.mjs` / `build-component-css.mjs`). Its output feeds the `CSSApiDist.vrt.spec.ts` baselines **and** is the source `generate-manifest.mjs` parses, so a version bump can shift both without a source change. Exact-pinned in `package.json` (the same rule as `vite` / `@biomejs/biome`); `scripts/__tests__/build-css.test.ts` smoke-pins the output shape (layer order, no downleveling, prefix preservation). |
| `vite` | Vite is the **engine that renders every VRT screenshot** — it builds the Storybook the Playwright specs screenshot against (`@storybook/react-vite` builder) and is the runtime under which Vitest executes. A Vite major bump can shift font / antialiasing / sub-pixel rendering across the whole suite, drifting **every** `*.png` baseline at once — exactly the bulk-re-baseline case in [vrt-spec-guideline §"Bulk re-baseline"](vrt-spec-guideline.md#re-baselining-updating-snapshots). It is pinned exact in `package.json` (not caret) for this reason. Note Vite also rides in transitively as a Vitest peer (`vite >= 6` for Vitest 4), so a Vitest major can force a Vite major — see [#254](https://github.com/yasmro/schatten/issues/254). |

When adding a new dependency that can shift the visual contract without a
source-side change (e.g. a positioning library like `@floating-ui/react`
that owns Tooltip / Popover geometry, or an animation library that's
applied via CSS class), extend this table **and** update the tooling
that pivots on dep bumps (today: `prepare-release` Step 3). The skill's
[`grep.test.ts`](../skills/prepare-release/grep.test.ts) gate catches
drift between the SKILL.md grep pattern and the on-disk parity stories;
the dep-list ↔ SKILL.md table sync is currently maintainer-reviewed.

## Radix type boundary (anti-corruption layer)

The prop types of Radix-based lv1 components are **authored by Schatten,
never inherited from Radix** ([#156](https://github.com/yasmro/schatten/issues/156)).
Before this rule, public interfaces extended
`ComponentPropsWithoutRef<typeof XPrimitive.Y>` — which makes the published
type surface track whatever Radix version the consumer's lockfile resolves
(Radix rides in `dependencies` with caret ranges), so the surface could
change with **zero Schatten source diff and zero release**. That is
incompatible with the 1.0 contract above ("1.0+ patch: no surface
additions"). The boundary has three rules:

1. **No direct re-export of a Radix component instance.** `const Select =
   SelectPrimitive.Root` passes through the props type, `displayName`, and
   every future Radix prop change untouched. Even DOM-less roots
   (context-only providers) get a thin wrapper with a curated Props
   interface.
2. **Public Props types never extend Radix types.** The base is the
   **native element** the part renders (`ComponentPropsWithoutRef<'button'>`
   etc. — this is what keeps the `data-testid` / `aria-*` / event-handler
   pass-through contract of [component-testid-guideline](component-testid-guideline.md)
   intact), and every Radix behavioral prop Schatten exposes is
   **redeclared literally** with its own TSDoc (`side?: 'top' | 'right' |
   'bottom' | 'left'`, never the indexed-access form
   `RadixProps['side']`, which silently widens when Radix widens).
   `forwardRef` element types are concrete DOM types (`HTMLButtonElement`),
   not `ComponentRef<typeof …>`.
3. **The boundary is machine-enforced, twice.**
   [`radix-type-boundary.test.tsx`](../../src/components/lv1/__tests__/radix-type-boundary.test.tsx)
   scans every lv1 implementation file for the two banned shapes (Radix-derived
   type references, direct instance re-exports) and pins representative
   shielded props with `@ts-expect-error`. Value-level compatibility needs no
   extra harness: the implementation **spreads the curated props into the
   Radix primitive**, so a Radix bump that renames or narrows a prop fails
   `pnpm typecheck` inside Schatten — the break is absorbed here instead of
   reaching consumers.

Consequences and conventions:

- **Curation policy**: expose the controlled/uncontrolled prop pairs
  (`value`/`defaultValue`/`onValueChange`, `open`/`defaultOpen`/`onOpenChange`,
  `checked`/…), the native-validation set on form controls
  (`disabled` / `required` / `name` / `value`), and any Radix prop an
  existing story/test/doc already uses. Everything else (`dir`,
  `forceMount`, dismiss-control callbacks, collision tuning) stays
  unexposed — **adding one back later is `minor` and non-breaking;
  removing is breaking**, so start minimal.
- **Radix stays caret-ranged.** With types decoupled, a Radix minor can no
  longer move the public type surface; runtime/visual drift from Radix
  bumps is governed by the [visual-contract table](#visual-contract-affecting-dependencies)
  + dependabot triage + parity VRT as before.
- **New Radix-based components** follow the same shape from the start:
  native-element base + curated redeclarations + thin wrappers for the
  DOM-less parts. When curating, walk the exposure policy above rather
  than copying Radix's full prop list.

## CSS class naming — frozen by [css-api.md](css-api.md)

The class-naming surface itself — prefix, BEM shape, attribute-driven state,
`@layer` order — is pinned in [css-api.md](css-api.md). That document is
the source of truth for *what* the classes are called; this document is the
source of truth for *what happens* when one of them is renamed, removed, or
repointed.

Two consequences worth pinning here:

- **The `st-` prefix is part of the v1.0 contract.** Renaming it post-1.0 is
  `major`. Pre-1.0 it would still ship with a `BREAKING:` CHANGELOG line so
  early adopters can sed-migrate.
- **State attributes are the contract, not the styling classes.** Consumers
  rely on `[aria-invalid="true"]` triggering the same error visual that
  `<Input isError>` does. Moving error styling off `[aria-invalid]` onto a
  new class — or vice versa — is `major`, because it forces every vanilla-HTML
  consumer to rewrite their attribute wiring. (See [css-api.md §state](css-api.md#state-is-expressed-as-attributes-not-classes)
  for the full attribute table.)

The class-name audit is tracked by
[#154](https://github.com/yasmro/schatten/issues/154) (v0.9.0) and writes
every public class into the manifest below. Once #154 ships, the manifest
becomes the diff a reviewer sees on every CSS change.

## CSS variable naming — the four-layer model

A CSS variable rename is `major` after 1.0, so the public variable surface
was audited and settled pre-1.0 by
[#231](https://github.com/yasmro/schatten/issues/231). The audit's finding is
that **collision with a consumer's own tokens is harmful only where the two
sides put a *different meaning* on the same name** — a consumer's `--spacing-4`
means the same 1rem Schatten's does (harmless, even useful to share), but a
shadcn consumer's `--color-background` means something different from
Schatten's (harmful). That principle sorts every public variable into one of
four layers, each with its own naming rule:

| # | Layer | Names | Public? | Rule |
|---|---|---|---|---|
| 1 | **Primitive** | `--vermillion-*` `--red-*` `--blue-*` `--gray-*` `--sumi-*` `--alabaster-*` `--paper-*` `--ink-*` | **No** — ships in dist `:root` but not in the registrar/manifest | Internal. Rename/retune freely (see [What is not public API](#what-is-not-public-api)). Consumers use the semantic layer instead. |
| 2 | **Tailwind-convention** | `--spacing-*` `--text-*` `--leading-*` `--font-*` `--radius-none/sm..2xl/full` `--shadow-sm..xl` | Yes, **bare** | Keep the Tailwind-scale names. The value is a shared convention, so a consumer overriding / colliding is **intended** — it lets their Tailwind pick Schatten's scale up. |
| 3 | **Semantic** | `--color-*` (surfaces / foregrounds / state / inverted / brand / `--color-theme-*`), the schatten-specific aliases `--radius-control` `--radius-surface` `--radius-pill` `--shadow-card/popover/modal/toast` `--z-*` `--motion-*` | Yes, **bare** | The meaning is Schatten's, so these **can** collide with another full design system (shadcn defines `--color-background` too). Not namespaced — the collision is **documented, not renamed away** (see below). Consumers with a conflicting token scope Schatten (below). |
| 4 | **Schatten-namespaced** | `--st-duration-*` `--st-spinner-*` | Yes, **`--st-` prefix** | For axes with no Tailwind-convention counterpart (raw enter/exit timing, spinner cadence). `--st-` mirrors the `.st-` class prefix ([css-api.md](css-api.md)). New schatten-specific tokens that don't fit layers 2–3 go here. |

The table is **exhaustive over the public surface**: every variable in the
manifest (`src/__generated__/schatten.manifest.json` `cssVariables`) maps to
exactly one layer above — layer 2 = the Tailwind-convention scales, layer 3 =
the `--color-*` semantics plus the schatten-specific `--radius-control` /
`--radius-surface` / `--radius-pill` / `--shadow-{card,popover,modal,toast}` /
`--z-*` / `--motion-*` aliases, layer 4 = the two `--st-*` families. Primitives
(layer 1) are deliberately **absent** from the manifest. When you add a public
token, it must fit one of these four layers; if it doesn't, that's a signal to
discuss before shipping, not to invent a fifth naming shape.

### Why the semantic layer stays bare

The audit **considered and rejected** namespacing the whole semantic layer to
`--st-color-*`. Full namespacing would make collision mechanically impossible,
but at the cost of (a) ~50 color-variable renames + a migration guide, (b)
uglier token names for *every* consumer, and (c) breaking the layer-2 win
where Schatten's `--spacing-*` / `--text-*` share Tailwind's names on purpose.
The harmful-collision case — Schatten used **alongside another full design
system** on the same `:root` — is rare, and a consumer in that situation can
scope Schatten's tokens under a wrapper rather than pay a global rename. So the
DoD's "collision avoided **or** the un-avoidable collision is documented" is
satisfied on the *documented* side for layer 3: this table **is** that
documentation, and the mitigation is a **consumer-facing escape-hatch recipe**
— Schatten's token values ship **unlayered** on `:root`, so a consumer either
imports Schatten into a cascade layer (`@import "…schatten.css"
layer(schatten)`, their own `:root` then wins globally) or scopes Schatten onto
a container for true subtree isolation. The worked recipes (and the honest
"deeply-interleaved → alias one side" caveat) live in the
[README](../../README.md#using-schatten-alongside-another-design-system-token-collisions);
the full rationale is in the #231 decision log,
`docs/decisions/2026-07-css-variable-namespace.md`.

**Semantic token shape.** The state token names (`--color-error`,
`--color-destructive`, …) are meaning-based and their 5-slot shape
(`base / hover / foreground / subtle / emphasis` — see
[state-token-guideline](state-token-guideline.md)) is final for 1.0.

**No Tailwind-convention names on the public surface.** #231 removed the last
two — `--default-font-family` / `--default-mono-font-family` (Tailwind's own
preflight variable names, which collided with a consumer's Tailwind v4
preflight in the shared `@layer theme`). The vendored preflight now references
`--font-sans` / `--font-mono` directly; the change was value-identical (the
indirection already resolved to those). See the decision log.

The class-name audit shipped in v0.9.0 (#58 Phase 2, implemented by
[#154](https://github.com/yasmro/schatten/issues/154)). The CSS-variable audit
([#231](https://github.com/yasmro/schatten/issues/231)) settled the four-layer
model above before v1.0.0. CONTRIBUTING.md (planned for v0.15.0) will reference
this document as the source of truth for what consumers can rely on.

## Manifest as the authoritative API listing

`dist/schatten.manifest.json` enumerates every public `.st-*` class, every
state-hook attribute (`data-*` / `aria-invalid` / `aria-busy`), and every
CSS custom property declared in the hand-maintained registrar — i.e. the
machine-readable form of this contract. **The `@layer theme` registrar
([`src/styles/public-tokens.css`](../../src/styles/public-tokens.css)) is
the authoritative public-surface signal for CSS variables** (#317; before
that, the same block was compiled by Tailwind v4 from `@theme { … }`
registrations — the extraction criterion is unchanged): the generator
extracts declarations from the `@layer theme { :root, :host { … } }` block
of the compiled dist, so primitives declared in source token files
(`--font-bold`, `--font-sans-fallback`, raw `--text-xs`) that are not
listed in the registrar are intentionally excluded. Adding / removing a
registrar row is therefore a public-surface change and follows the same
changeset policy as any other CSS API change.
The manifest ships under `@yasmro/schatten/schatten.manifest.json` and is
regenerated by `pnpm build:manifest` from `dist/schatten.css`. Schema:

```jsonc
{
  "$schemaVersion": 1,
  "package": "@yasmro/schatten",
  "version": "0.9.0",
  "generatedAt": "2026-05-22T…",
  "classes": ["st-btn", "st-btn--primary", …],
  "dataAttributes": ["aria-busy", "data-state", …],
  "cssVariables": ["--color-error", "--spacing-4", …]
}
```

A companion snapshot lives at `src/__generated__/schatten.manifest.json`,
deliberately omitting `package` / `version` / `generatedAt` so the file is
stable across `changeset version` bumps — this is the file CI's
`pnpm check:manifest` diffs against. A drift between dist and the snapshot
fails the `manifest` CI job, with the per-section set difference printed
inline so the PR reviewer reads the surface change directly from the CI
log. When the drift is intentional, `pnpm update:manifest` re-writes the
snapshot and the change must ship with a `CSS API:` changeset.

**The manifest is authoritative.** If it disagrees with this document
about what is public, treat the manifest as the source of truth and update
this document. Landed alongside
[#265](https://github.com/yasmro/schatten/issues/265).

### Per-component CSS size budgets

Each `@yasmro/schatten/css/<component>` subpath shipped by
[#291](https://github.com/yasmro/schatten/issues/291) carries a
size-limit budget enforced by the CI `size` job. The budgets live in
[`.size-limit.json`](../../.size-limit.json):

- Every lv1 component: **≤ 1.5 KB brotli**.
- Aggregate across all 18 lv1 components: **≤ 20 KB brotli**.
- The integrated `dist/schatten.css`: **≤ 50 KB brotli**.

The manifest and the size-limit budgets are **two complementary
contracts** on the same CSS surface:

| Pin | Mechanism | Failure mode |
|---|---|---|
| Name of every public `.st-*` class / state attribute / `--color-*` variable | `pnpm check:manifest` against `src/__generated__/schatten.manifest.json` | A rename / removal / addition without the right `CSS API:` changeset entry fails CI |
| Cost of every per-component CSS subpath | `pnpm size` against `.size-limit.json` | A runaway component CSS — e.g. a new variant that doubles the bundle — fails CI |

A change that touches either contract goes through the same
breaking-change policy as the rest of this document. Adjusting a budget
*upward* is an additive surface change (`minor` pre-1.0, document it in
the changeset); pruning it *downward* without a corresponding source
shrink is breaking because consumers' historical artifact sizes may
exceed the new limit on re-build.

The per-component delivery story (and the Lighthouse audit mapping it
addresses) is documented for consumers in the README's
[Performance](../../README.md#performance) section.

## When you're about to ship a change

Ask, in order:

1. Does this touch any surface listed under "What counts as public API"?
   - No: ship with whatever semver bump fits (`patch` for fixes, `minor` for
     features). No CHANGELOG prefix needed.
   - Yes: continue.
2. Is the change purely additive (new prop value, new class, new variable,
   new export)?
   - Yes: `minor` bump. Add the matching CHANGELOG prefix (`CSS API:` etc.).
   - No (rename, removal, semantic change): continue.
3. Are we pre-1.0?
   - Yes: ship it. Call it out clearly in the changeset so early adopters can
     migrate. No formal migration guide required, but a one-line note helps.
   - No: `major` bump, with migration notes. Confirm the change has gone
     through at least one minor as `@deprecated` first.

## Related

- [css-api.md](css-api.md) — the CSS class-naming convention this document
  freezes (prefix `st-`, BEM, attribute-driven state, `@layer` order,
  dark/seasonal pattern, no-color-alone)
- [#58](https://github.com/yasmro/schatten/issues/58) — framework-agnostic CSS
  roadmap (Phase 2 introduces the `.st-*` class API)
- [#154](https://github.com/yasmro/schatten/issues/154) — Phase 2 implementation
  tracker (CSS sweep + manifest pipeline, v0.9.0)
- [state-token-guideline](state-token-guideline.md) — names and shapes of state
  semantic tokens (subject to this contract from v1.0)
- [lint-rules-guideline](lint-rules-guideline.md) — Biome rules and GritQL
  plugins; the `no-primitive-color` plugin enforces "no primitive color
  classes in components" so the public CSS-variable surface stays the only
  color contract
