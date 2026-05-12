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

### `correctness/noUnusedImports` — `error`

### `correctness/noUnusedVariables` — `error`

**Why:** Dead imports/variables accumulate fast in a component library where
prop types, variant tuples, and Radix primitives are constantly being
re-shuffled. Most are the residue of incomplete refactors. Keeping them is
strictly downside — bigger bundles, noisier diffs, harder PR reviews.

`noUnusedVariables` also flags unused function parameters. The convention is
to prefix intentional unused names with `_` (e.g. `_event`) — Biome treats
that prefix as "intentionally unused" and skips the rule.

### `style/useImportType` — `error`

### `style/useExportType` — `error`

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

### `suspicious/noConsole` — `error` with `allow: ["warn", "error"]`

**Why:** Stray `console.log` is the most common source of accidental noise
shipped to consumer apps. A design system should never emit dev-time chatter
into its users' browsers.

`console.warn` and `console.error` are explicitly allowed because we use them
to surface *misuses of a component* back to developers — e.g.
[Button.tsx:102](../../src/components/lv1/Button/Button.tsx#L102) warns when
`isLoading` is combined with `asChild` (an unsupported combination), and
[Dialog.tsx:241](../../src/components/lv1/Dialog/Dialog.tsx#L241) warns when
required props are missing. That's a feature, not noise.

## Rules deliberately **not** added

- **`nursery/useSortedClasses` (Tailwind utility sort)** — under consideration
  for Phase 2. Not enabled yet because it churns existing files and the
  ergonomic win is marginal compared to the diff cost.
- **Custom rule banning primitive color classes (`bg-red-*`, …)** — planned
  for v0.8.0. The convention is enforced today via [state-token-guideline](state-token-guideline.md)
  and code review; a Biome custom rule will make it mechanical.

## When adding a new rule

1. Open a draft PR enabling the rule at the desired severity.
2. Run `pnpm lint` and report the violation count in the PR description.
3. Justify the rule with a real bug class it would have caught (don't enable
   rules just because they sound nice).
4. If the violation count is large, prefer auto-fix; if it requires manual
   judgment, raise an issue first to land the rule and the fix in separate PRs.
5. Add a paragraph here recording the **why**.
