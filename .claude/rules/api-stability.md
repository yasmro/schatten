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
| CSS class names | `.btn`, `.btn--primary`, `.input-wrapper`, `[data-variant="solid"]` (Phase 2 of #58) |
| CSS custom properties | `--color-primary-600`, `--color-error`, `--spacing-4`, `--font-sans` |
| CVA output strings | The class string returned by `buttonVariants({ variant: 'primary' })` |
| Multi-entry exports | `@yasmro/schatten/components/lv1`, `/tokens`, `/variants`, `/themes/default`, `/themes/seasonal` |
| Theme contract | Which CSS variables a custom theme must define to be valid |

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

- Renaming or removing a documented CSS class (`.btn`, `.input-wrapper`).
- Renaming or removing a CSS custom property declared in `src/core/tokens/`
  or `src/themes/`.
- Changing the *meaning* of a class — e.g. swapping which selector a class
  applies to, or changing the CSS cascade order in a way that flips precedence.
- Removing a `data-*` attribute that the documented selectors target
  (e.g. `[data-variant="solid"]`).

These are **not** breaking:

- Tweaking a token's color value (`--color-primary-600` going from one hex to
  a slightly different hex) — call this out in the CHANGELOG but it's a `minor`
  or `patch`, not `major`.
- Adding new utility classes or new data attributes.
- Refactoring internal CSS that has no documented class name attached.

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

Example (illustrative — uses a hypothetical rename):

```md
---
'@yasmro/schatten': major
---

BREAKING: `<Input isError>` is renamed to `<Input invalid>` for parity with
ARIA. Replace all occurrences in your code. See docs/migrations/v2-input-invalid.md
for a sed snippet and a checklist.

CSS API: `.input-wrapper[data-error]` is renamed to `[data-invalid]` for the
same reason.
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

## CSS variable naming — settle before 1.0

A CSS variable rename is `major` after 1.0. So names like `--vermillion-600`
need to be intentional now, not later. Two checkpoints:

1. **Primitive scale names** (`--vermillion-*`, `--green-*`) — if we ever want
   to rename to brand-neutral names (`--brand-red-*`), it must happen pre-1.0.
2. **Semantic token names** (`--color-error`, `--color-destructive`) — these
   are intentionally meaning-based and should age better, but verify the
   shape (`base / hover / foreground / subtle` — see
   [state-token-guideline](state-token-guideline.md)) is final before 1.0.

The class-name audit is scheduled for v0.9.0 (#58 Phase 2, implemented by
[#154](https://github.com/yasmro/schatten/issues/154) — pulled forward from
v0.14.0 so it lands before the lv2 components, see #154 for the rationale).
The CSS variable audit is tracked by
[#231](https://github.com/yasmro/schatten/issues/231) (currently milestoned at
v0.15.0 as a backstop); the only hard requirement is that it lands **before
v1.0.0**. CONTRIBUTING.md (planned for v0.15.0) will reference this document as
the source of truth for what consumers can rely on.

## Manifest as the authoritative API listing (planned)

A `dist/schatten.manifest.json` file is planned for v0.9.0 (part of
[#154](https://github.com/yasmro/schatten/issues/154)). It will list every
public class, every CSS variable, and every exported symbol — i.e. the
machine-readable form of this contract. The intent is for a CI lint to diff
the generated manifest against the committed one and require a changeset when
it changes, so adds/removes/renames can't slip through review unnoticed.

Once the manifest exists, the **manifest is authoritative**. If it disagrees
with this document about what is public, treat the manifest as the source of
truth and update this document.

Until the manifest exists, this document and the `package.json` `exports` map
together define the surface.

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

- [#58](https://github.com/yasmro/schatten/issues/58) — framework-agnostic CSS
  roadmap (Phase 2 introduces the data-attribute class API)
- [state-token-guideline](state-token-guideline.md) — names and shapes of state
  semantic tokens (subject to this contract from v1.0)
- [lint-rules-guideline](lint-rules-guideline.md) — Biome rules and GritQL
  plugins; the `no-primitive-color` plugin enforces "no primitive color
  classes in components" so the public CSS-variable surface stays the only
  color contract
