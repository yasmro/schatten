---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/component-architecture.md` (lv1/lv2 folders, compound vs flat, `asChild` no-new-additions default, polymorphic `as` not adopted, unified context consumption, one-way dependency direction, lv1-local `.css` allowlist)

Codifies the component-level design choices that have been implicit until now.
Complements [`component-api-conventions.md`](.claude/rules/component-api-conventions.md)
(added in #192, which holds the authoritative public prop API shape).

- **lv1 vs lv2 folders**: lv1 is single-responsibility primitives, lv2 is
  composition. The promotion criterion ("when does a recurring composition
  become an lv2?") is intentionally deferred — it will be defined as a
  follow-up rule when the first lv2 lands (~v0.9.0).
- **Compound vs flat**: Radix-wrapping components ship as compound (mirror
  Radix part names one-to-one to preserve ref / context / aria wires);
  self-built primitives ship as flat. Self-built composition belongs in lv2,
  not in a compound lv1. `Toast`'s imperative API is called out as the
  notification-class special case.
- **`asChild` — no new lv1 additions by default**. Cross-references
  `component-api-conventions.md` for the authoritative adoption list and
  the 3 criteria. Adds two further constraints on top: form inputs and
  portal content must never expose `asChild`, regardless of how the 3
  criteria appear to fit. The variants-function pattern (`buttonVariants` /
  `textVariants` from `@yasmro/schatten/variants`) is documented as the
  preferred alternative for "render as a different element" needs.
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

No public API or component behaviour changes.
