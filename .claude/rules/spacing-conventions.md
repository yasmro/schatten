# Spacing Conventions Guideline

## Overview

Schatten **does not ship Layout primitives** (`Stack` / `HStack` / `VStack` /
`Cluster`). Composition is done with Tailwind utilities directly. The trade-off
is that without a primitive policing the spacing scale, any author — human or
AI — can sprinkle `gap-3`, `gap-5`, `gap-7`, `gap-[10px]` etc. across an app
and erode visual rhythm.

This rule defines the **canonical spacing scale** so utility-direct authoring
stays disciplined. It complements the [state token guideline](state-token-guideline.md)
(which polices color) by doing the same for spacing.

## Audience: consumer vs implementer

The rule applies differently depending on **who is writing the class**:

| Surface | Examples | Half-scale (`*-1.5`, `*-2.5`, …) | Off-scale (`*-5`, `*-7`, `*-9`, `*-11`) | Arbitrary (`*-[10px]`) |
|---|---|---|---|---|
| **Consumer** — app code using Schatten | `<div className="flex gap-3 p-4">…</div>` in a downstream app | ❌ | ❌ | ❌ |
| **Implementer** — Schatten library code | [`src/variants/*.ts`](../../src/variants), `src/components/lv1/**/*.tsx` JSX | ✅ allowed for visual fine-tuning, VRT-verified | ❌ (avoid; migrate when possible) | ❌ |

The consumer-facing scale below is the bar Schatten asks downstream apps to
hold. Library internals get an ergonomic escape hatch (half-scale) because
some details — vertical text centering inside a button, the gap between a
small icon and an `xs`-sized label — genuinely don't snap to the integer
scale at typical font sizes.

## Consumer-facing scale

### Inner — `gap-*`, `p-*` (within a component / card / section)

| Class | px | Typical use |
|---|---|---|
| `*-1` | 4px | tight icon adjacency, badge interior |
| `*-2` | 8px | inline form controls, tight grid |
| `*-3` | 12px | default inline spacing, form rows |
| `*-4` | 16px | default block spacing inside a card |
| `*-6` | 24px | section interior padding |
| `*-8` | 32px | generous card padding |

### Outer — `m-*` (between components / between sections)

| Class | px | Typical use |
|---|---|---|
| `*-4` | 16px | sibling block spacing |
| `*-6` | 24px | sibling section spacing |
| `*-8` | 32px | major block separators |
| `*-12` | 48px | top-level section gaps |
| `*-16` | 64px | hero / page-level gaps |

`5` is intentionally excluded — `4` or `6` is almost always the right choice;
reaching for `5` is a smell that the scale is being eyeballed rather than
followed.

## NG patterns (consumer-facing)

- **`gap-1.5`, `gap-2.5`, `gap-3.5`, `py-1.5`, …** — half-scale values.
  Reserved for library internals (see below). Consumers should snap to the
  integer scale.
- **`gap-5`, `gap-7`, `gap-9`, `gap-11`** — off-scale even though they're
  integers. They almost always indicate "I wanted `gap-4` but it looked
  slightly tight." Move the visual hierarchy with type or grouping instead.
- **`gap-[10px]`, `p-[14px]`, arbitrary values** — bypass the scale entirely.
  No exceptions for consumer code. If the design genuinely needs a value
  outside the scale, that's a token discussion, not a one-off override.

## Implementer exceptions

Inside the Schatten library — CVA variant strings in [`src/variants/`](../../src/variants)
and JSX in [`src/components/lv1/`](../../src/components/lv1) — **half-scale
spacing is allowed** for visual fine-tuning. Concretely:

- The gap between an icon and a label inside a sized button or input
  (`gap-1.5`, `gap-2.5`) — the integer scale is visibly off at small font
  sizes.
- Vertical padding tuned to a fixed-height control (`py-1.5` inside an
  `h-8` Badge, `py-2.5` inside an `h-12` Input).
- Optical micro-shifts (`-mt-1.5` to lift a description into a label's
  baseline).

Constraints when you use a half-scale:

1. **It must live inside the library**, not be a className prop a consumer is
   expected to compose with.
2. **VRT must cover it.** If you change a half-scale value, the affected
   component's VRT snapshot will move — that's the safety net. See
   [vrt-spec-guideline](vrt-spec-guideline.md).
3. **Add a one-line comment** next to the value if the intent is non-obvious
   (e.g. why `py-2.5` rather than `py-2`).

Off-scale integers (`px-5`, `gap-7`, …) and arbitrary values (`p-[14px]`) are
**not** part of the implementer exception. A handful exist in
[`src/variants/`](../../src/variants) today (notably `px-5` carried over from
shadcn defaults) and are tracked for migration in
[issue #186](https://github.com/yasmro/schatten/issues/186). Don't add new
ones.

## Why no `Stack` / `HStack` / `VStack`

The trade-off was deliberate:

- **AI affinity.** Tailwind utilities have orders of magnitude more training
  data than any custom primitive. Tools like Copilot, Cursor, Claude Code,
  and v0 produce correct utility-class layouts on the first attempt; a
  bespoke `<Stack gap={3}>` primitive forces a "remember this library exists"
  step they often skip.
- **DX.** One fewer component to import, one fewer API to memorize. Layout
  composes from the same utilities that already style everything else.
- **Cost.** Without a primitive enforcing the scale, scale escape is a real
  risk — this rule plus the Biome custom rule planned for v0.8.0 is the
  mitigation.

If, in practice, this rule fails to hold the line (audits keep finding
violations, AI-generated code keeps regressing) we revisit Layout primitives
in Phase 5. The evaluation report § 1.3 tracks this signal.

## Future enforcement

- **Biome custom rule (v0.8.0)** — mechanical enforcement of `gap-(5|7|9|11)`,
  half-scales in JSX (excluding CVA strings), and arbitrary-value patterns.
  Tracked alongside the primitive-color custom rule mentioned in
  [lint-rules-guideline](lint-rules-guideline.md).
- **`Patterns / Layout` Storybook story (v0.10.0)** — a recipe page showing
  the canonical compositions (form row, card, page header, two-column layout)
  using only this scale, so authors have something concrete to copy.

## Adding to this rule

1. **Don't add a new "everyone gets to use this" value without evidence.**
   If you find yourself wanting `gap-5`, look for whether a hierarchy
   adjustment (heading size, group, divider) is the right answer instead.
2. **Don't expand the implementer exception silently.** If a component needs
   an off-scale integer or an arbitrary value, raise it — that's a token
   conversation, not a local choice.
3. **Always update VRT** when changing half-scale values inside the library.
