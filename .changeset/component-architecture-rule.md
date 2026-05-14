---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/component-architecture.md` (lv1/lv2 folders, compound vs flat, `asChild` not adopted, polymorphic `as` not adopted, unified context consumption, one-way dependency direction, lv1-local `.css` allowlist)

Codifies the component-level design choices that have been implicit until now:

- **lv1 vs lv2 folders**: lv1 is single-responsibility primitives, lv2 is
  composition. The promotion criterion ("when does a recurring composition
  become an lv2?") is intentionally deferred — it will be defined as a
  follow-up rule when the first lv2 lands (~v0.9.0).
- **Compound vs flat**: Radix-wrapping components ship as compound (mirror
  Radix part names one-to-one to preserve ref / context / aria wires);
  self-built primitives ship as flat. Self-built composition belongs in lv2,
  not in a compound lv1. `Toast`'s imperative API is called out as the
  notification-class special case.
- **`asChild` is not adopted on new lv1s**. The replacement is **exporting
  the CVA variants function** (e.g. `buttonVariants` / `textVariants`,
  already exported today from `@yasmro/schatten/variants`) and letting
  consumers apply it directly to their own element. The two existing
  `asChild` props (`Button.asChild`, `Text.asChild`) are flagged as legacy;
  removal is tracked in a separate issue.
- **Polymorphic `as` prop is not adopted** as a general pattern. Carved
  exception: `Text` exposes a fixed enumeration
  `as?: 'p' | 'span' | 'h1'…'h6'` — the union is closed, the attribute
  surface is uniform, and inference cost is zero.
- **Context consumption is unified into one rule**: every form lv1 reads
  `isError` / `disabled` / `describedBy` from `FieldContext` with prop
  fallback. Only externally-labelled components (`Input`, `Textarea`,
  `Select`) additionally consume `field.id`. `FieldSetContext` is consumed
  only by `Field`, which collapses-and-re-provides — form lv1s never read
  `FieldSetContext` directly.
- **Dependency direction is strictly one-way**:
  `lib` / `contexts` / `variants` → `lv1` → `lv2`. `lv1 → lv2` is forbidden
  (an lv1 needing an lv2 is misclassified); `lv1 → other lv1` is allowed
  (e.g. `Dialog` embedding `Button` in its action row); barrel-export
  laundering (reaching `lib` via `lv1/index.ts`) is forbidden.
- **lv1-local `.css` allowlist**: only for things Tailwind / CVA cannot
  express — `@keyframes`, `animation-play-state` conditional on data-state,
  `prefers-reduced-motion`, component-scoped CSS variables. The four
  existing files (Tooltip.css, Dialog.css, Toast.css, Spinner.css) are all
  animation-only and comply.

The rule is referenced from CLAUDE.md / AGENTS.md and the `review-pr`
command checklist.

No public API or component behaviour changes in this PR. The `asChild`
removal is breaking-change work scheduled separately.
