# Lint Rules Guideline

## Overview

[biome.json](../../biome.json) starts from `recommended: true` and adds a small,
deliberate set of rules on top. This document records **why** each non-default
rule was selected, so future contributors can judge edge cases and decide
whether new rules belong here.

Tooling: Biome (single binary handles lint + format + import sort). Run
`pnpm lint` (CI mode, read-only) or `pnpm lint:fix` (auto-fix where safe).

## Rules added on top of `recommended`

### `correctness/useExhaustiveDependencies` — `error`

Catches missing or stale dependencies on `useEffect` / `useMemo` / `useCallback`.

**Why:** A miscounted dependency array is one of the most common React bugs and
typically silent — the hook stops re-running but tests still pass. AI-generated
hooks are especially prone to this when the hook is edited later and a captured
variable is forgotten. We treat it as `error` rather than `warn` so it must be
addressed at PR time, not deferred.

**Escape hatch:** If a dependency is genuinely meant to be excluded (e.g. a
ref or a setter from `useState` that's stable by contract), add an inline
`// biome-ignore lint/correctness/useExhaustiveDependencies: <reason>` rather
than silencing the rule globally.

### `correctness/noUnusedImports` / `noUnusedVariables` — `error`

**Why:** Dead imports/variables accumulate fast in a component library where
prop types, variant tuples, and Radix primitives are constantly being
re-shuffled. Most are the residue of incomplete refactors. Keeping them is
strictly downside — bigger bundles, noisier diffs, harder PR reviews.

`noUnusedVariables` also flags unused function parameters. The convention is
to prefix intentional unused names with `_` (e.g. `_event`) — Biome treats
that prefix as "intentionally unused" and skips the rule.

### `style/useImportType` / `useExportType` — `error`

**Why:** TypeScript erases type-only imports at compile time, but only when
the import is explicitly marked `import type` (or per-symbol `import { type X }`).
Mixing types into value imports keeps the runtime module reference alive
unnecessarily, can confuse tree-shaking, and causes subtle issues with
circular type-only references.

Both Biome rules auto-fix to the canonical `import { type Foo } from '…'` /
`export type { Foo }` form. Keep using them — manual fixes drift.

### `style/noNonNullAssertion` — `warn`

**Why:** `value!` silences the type system without proof. In a design system
that consumers depend on, a stray non-null assertion can quietly hide a real
nullable case and ship the bug to every downstream app.

Set to `warn` (not `error`) because there are a handful of legitimate cases —
Radix slot refs, well-known DOM globals inside a `typeof window !== 'undefined'`
branch — where the assertion is the cleanest expression of an invariant the
type system can't follow. A `warn` keeps these visible in editor hover and PR
review without blocking CI.

**When you do use `!`:** add a brief comment next to it explaining the
invariant that makes the assertion safe.

### `style/noRestrictedImports` — `error` (core / variants / themes scope)

Inside `src/core/**` / `src/variants/**` / `src/themes/**` / `src/tokens.ts`,
`react` / `react-dom` / `@radix-ui/*` imports are an `error` (applied via a
scoped `overrides` entry in [biome.json](../../biome.json)).

**Why:** v0.9.0 ([#291](https://github.com/yasmro/schatten/issues/291)) ships
multi-entry `exports` so consumers can reach `@yasmro/schatten/variants` /
`/tokens` / `/themes/*` as **framework-agnostic** subpaths. For that promise
to hold, the *source* of those subpaths must actually be React-free — not
just at distribution time. The `exports` map gates the package boundary;
this lint gates the source boundary. Either one alone permits an "import
slips in and the build still passes" failure mode.

The architectural layer table in
[component-architecture.md §6 Dependency direction](component-architecture.md#6-dependency-direction)
already says `core/` / `variants/` / `themes/` may import from external
packages *only* (no `react`, no Radix). This rule mechanises that table.
`lib/` is deliberately out of scope — it's allowed to depend on React
(see `src/lib/merge-refs.ts`), so React-typed helpers belong there.

Same philosophy as `no-primitive-color` below: **structural invariants
should be enforced by the linter, not by code review**.

**Why `@radix-ui/*` is in the same scope:** Radix is React-only. A
`@radix-ui/react-slot` import in `src/variants/` pulls in the React tree
just as surely as a direct `react` import — and it's exactly the
mistake someone reaching for `asChild` plumbing inside a CVA file might
make. Blocking the namespace pattern (`@radix-ui/*`) catches every
Radix subpackage in one entry.

**Escape hatch:** none. If a helper genuinely needs React or Radix, it
belongs in `src/lib/` (lib-layer helpers like
[`merge-refs.ts`](../../src/lib/merge-refs.ts) already do this) or in
`src/components/lv1/` (the React layer that owns Radix integration).

**Scope additions:** if a new top-level directory under `src/` is
introduced that should stay framework-agnostic, update the `includes`
list in [biome.json](../../biome.json) explicitly. The current entries
are `src/core/**`, `src/variants/**`, `src/themes/**`, `src/tokens.ts`
— no implicit catch-all, so new directories don't acquire the
restriction by accident or lose it silently.

The same `noRestrictedImports` + scoped `overrides` shape is the
intended enforcement mechanism for any future framework-agnostic
layer (e.g. a hypothetical `src/foundation/` for compound primitives,
or an `lv0/` tier introduced post-1.0). Extend the `includes` list
of *this* override rather than introducing a new rule or a parallel
plugin — the contract reads better as a single allow-list.

**Verifying:** [`biome-plugins/boundary-no-react.test.ts`](../../biome-plugins/boundary-no-react.test.ts)
runs `biome lint` over fixture files and asserts the diagnostic. A
typo in the `paths` / `patterns` list, a misplaced `includes` glob, or
a Biome version-up that changes the rule's surface all surface as a
CI failure rather than as a quiet contract drift.

(`biome-plugins/` thus holds two kinds of file: GritQL plugin sources
like `no-primitive-color.grit`, **and** Biome-config regression tests
like `boundary-no-react.test.ts`. Both exercise lint behaviour via
fixtures and `biome lint`, so they live together.)

### `suspicious/noConsole` — `error` with `allow: ["warn", "error"]`

**Why:** Stray `console.log` is the most common source of accidental noise
shipped to consumer apps. A design system should never emit dev-time chatter
into its users' browsers.

`console.warn` and `console.error` are explicitly allowed because we use them
to surface *misuses of a component* back to developers — e.g.
[Button](../../src/components/lv1/Button/Button.tsx) warns when `isLoading`
is combined with `asChild` (an unsupported combination), and
[Dialog](../../src/components/lv1/Dialog/Dialog.tsx) warns when
`actionButton.onClick` is undefined (a footgun — clicking the action button
becomes a silent no-op). That's a feature, not noise.

## GritQL plugins

Beyond the built-in rules above, Biome 2.x's GritQL plugin support lets us
ship custom checks. Plugins are `.grit` files under
[`biome-plugins/`](../../biome-plugins) and are loaded via `plugins` arrays
in [`biome.json`](../../biome.json) — either globally or, where the check
should only apply to a subset of files, inside a scoped `overrides` entry.

### `no-primitive-color` — `error`

Bans Tailwind *primitive* color utility classes (`bg-red-500`,
`text-gray-700`, `ring-vermillion-600`, …) in component JSX, forcing the
use of Layer-2 semantic tokens (`bg-error`, `text-foreground-muted`, …).

**Why:** primitive color classes are exactly the kind of thing an AI
assistant emits from training-data muscle memory. A machine check stops
them before review does, and keeps the public CSS-variable surface (the
semantic tokens) as the only color contract. Set to `error` so it blocks
CI, not just editor hover.

**Scope:** a scoped `overrides` entry restricts the plugin to
`src/components/**/*.tsx`, excluding `*.stories.tsx` / `*.test.tsx` —
stories and docs render the primitive palette intentionally.

**Limitations of GritQL plugins** (worth knowing before writing more):

- A plugin diagnostic cannot register a named rule category, so it is
  suppressed with `// biome-ignore lint/plugin: <reason>`, not a
  rule-specific name.
- GritQL (in Biome 2.4) cannot match a JSX attribute by name; the plugin
  matches a whole JSX element and regex-scans its attribute text. CVA
  variant files (`src/variants/*.ts`) are therefore out of reach.
- Multiple top-level `where` blocks in one `.grit` file fail to compile —
  combine alternatives with `or { … } where { … }`.
- Regex capture groups `( … )` are treated as bindings; use
  non-capturing `(?: … )`.

The contract this plugin enforces lives in
[state-token-guideline](state-token-guideline.md#enforcement--the-no-primitive-color-lint-plugin).

## Rules deliberately **not** added

- **`nursery/useSortedClasses` (Tailwind utility sort)** — under consideration
  for Phase 2. Not enabled yet because it churns existing files and the
  ergonomic win is marginal compared to the diff cost.
- **Custom rule enforcing the component API contract** — planned for v0.8.0.
  [component-api-conventions](component-api-conventions.md)
  defines two patterns (Role-based for `Button`; Tone × Shape for
  `Badge` / `Callout` / `Toast`) and a per-component variant matrix, but
  today the contract is only enforced via TS unions and code review —
  nothing stops a Pattern A component from sprouting an `appearance` prop,
  or a matrix-violating CVA variant from slipping in. A Biome custom rule
  would mechanize the check (e.g. reject `appearance` on `Button`'s
  variant definition, reject CVA `variants.variant` keys outside the
  matrix). Until then, the contract document plus reviewer attention is
  the line of defense.

## When adding a new rule

1. Open a draft PR enabling the rule at the desired severity.
2. Run `pnpm lint` and report the violation count in the PR description.
3. Justify the rule with a real bug class it would have caught (don't enable
   rules just because they sound nice).
4. If the violation count is large, prefer auto-fix; if it requires manual
   judgment, raise an issue first to land the rule and the fix in separate PRs.
5. Add a paragraph here recording the **why**.
