# Non-Interactive State Tokens — Design Decision Log

| | |
|---|---|
| Date | 2026-05-16 |
| Status | Accepted |
| Related issue | [#180](https://github.com/yasmro/schatten/issues/180) |
| Related PR | [#197](https://github.com/yasmro/schatten/pull/197) |
| Related rules | [state-token-guideline.md](../../.claude/rules/state-token-guideline.md), [theme-architecture.md](../../.claude/rules/theme-architecture.md) |
| Tokens affected | `--color-surface-disabled`, `--color-foreground-disabled`, `--color-border-disabled`, `--color-surface-readonly`, `--color-border-readonly` |

This is the first entry in `docs/decisions/`. The directory exists to capture
design-time *reasoning* that would otherwise be lost — the choices that
codebase, rules, and tests do not preserve. Future entries should follow the
same structure.

## Context

Schatten's form-control lv1s (`Input`, `Textarea`, `Select`, `Radio`,
`Checkbox`, `Switch`) had been using `cursor-not-allowed opacity-50` for
`disabled` and inheriting HTML default behaviour for `readOnly`. Two
problems followed:

1. **`opacity-50` conflates two distinct UX states.** Disabled controls and
   readOnly controls look identical, but they communicate different
   things: "you cannot use this" vs "this is a value, not an input."
2. **No token surface to consume.** Component authors had no semantic
   name for either state, so retuning required edits across N components.

This log records *why* the chosen tokens look the way they do, so future
contributors (human or AI) can extend the pattern without re-litigating the
same questions.

## Decision

Add five semantic tokens at the `semantic.css` layer:

| Token | Light | Dark | Slot |
|---|---|---|---|
| `--color-surface-disabled` | `gray-100` | `gray-800` | surface |
| `--color-foreground-disabled` | `gray-500` | `gray-500` | foreground |
| `--color-border-disabled` | `gray-200` | `gray-700` | border |
| `--color-surface-readonly` | `alabaster-100` | `alabaster-800` | surface |
| `--color-border-readonly` | `gray-200` | `gray-700` | border |

**Shape**: `disabled` has 3 slots, `readOnly` has 2. No `hover` slot, no
`subtle` slot. (See "Why not the 4-token shape" below.)

**Axis**: Mode-owned. Special themes must not override these. (See
[theme-architecture.md](../../.claude/rules/theme-architecture.md#specials-must-not-override-non-interactive-state-tokens).)

## Rationale

### 1. Cool gray (disabled) vs warm alabaster (readOnly)

The two states sit at the same OKLCH lightness levels (`0.96` in light,
`0.27` in dark). They are differentiated by **hue family**:

- `gray-*` (chroma 0, perceptually cool) → "muted / faded / dead"
- `alabaster-*` (chroma ≈ 0.005–0.01, warm-tinted) → "static / informational"

This encodes a UX distinction at minimal chromatic cost. Designers can read
the two surfaces apart at a glance when placed side by side, while neither
state is loud enough to compete with the active controls around it.

#### Alternatives considered

| Alternative | Why rejected |
|---|---|
| Both states cool, differentiated by **lightness** (e.g. disabled at gray-100, readOnly at gray-50) | Lightness is already heavily used (surface tiers, hover, foreground tiers). Stacking another lightness step would compress the perceptual ladder. Hue is the cheaper channel. |
| Pattern (diagonal lines / dots) on disabled surface | Strong signal but breaks token-only composition — component CSS would need pseudo-elements. Not implementable purely at the token layer. Could be revisited as a *component-level* enhancement. |
| Border-style (dashed for readOnly, solid for disabled) | Same problem — border-style is not a `--color-*` value. Adds a second axis (color + style) that the token system cannot express. |
| Stronger color cue (e.g. warm tan for readOnly) | Risks bleeding into "warning" territory. The whole point of these states is to *recede*, not announce themselves. |
| Use `opacity` at the token layer (e.g. `oklch(...)` with alpha) | Compounds with parent backgrounds unpredictably; reduces contrast control. Better to compose surface + foreground explicitly. |

### 2. Why `foreground-disabled` does not shift between light and dark

Every other state token in the system shifts shade between light/dark
(`error-600` → `error-500`, etc.). `foreground-disabled` is pinned at
`gray-500` in both.

**Why**: `gray-500` (OKLCH lightness ≈ 0.58) is the perceptual mid-point.
Against `gray-100` (light surface, lightness ≈ 0.96) it yields ~5:1
contrast — muted but legible. Against `gray-800` (dark surface, lightness
≈ 0.27) it yields ~4:1 — also legible. A symmetric mid-gray solves both
modes with one declaration.

WCAG 2.1 exempts disabled UI from contrast requirements (SC 1.4.3 Note 1),
but Schatten deliberately exceeds the exemption: low-vision and aging users
benefit when a disabled value is still readable, even if it is clearly
inactive.

#### Alternatives considered

| Alternative | Why rejected |
|---|---|
| `gray-400` light / `gray-600` dark (asymmetric shift like other states) | Higher fade ratio but worse legibility at smaller font sizes; the symmetric `gray-500` is the better trade-off given WCAG generosity. |
| `foreground-muted` (existing token) | Semantically wrong — `foreground-muted` is "secondary helper text" (still fully usable). Disabled foreground should communicate "this control is not in play." |

### 3. Why not the 4-token shape (`base` / `hover` / `foreground` / `subtle`)

The interactive state category (`error`, `success`, `warning`, `info`,
`destructive`) uses a 4-slot shape because each state has both a **filled**
treatment (`bg-{state}` + `text-{state}-foreground`) and a **soft**
treatment (`bg-{state}-subtle` + `text-{state}`), and most also have
hover affordances.

Non-interactive states have neither:

- **No `hover`** — by definition the user cannot interact. Adding a hover
  slot would be semantically incoherent.
- **No `subtle`** — disabled/readOnly *are* the subtle treatment. There is
  no "louder" filled variant that demands a "softer" sibling.
- **No `foreground` on `readOnly`** — the value must remain readable using
  the normal `--color-foreground`. Adding a separate readonly foreground
  would invite designers to fade readOnly text, which contradicts the
  state's meaning.

Forcing the 4-token shape onto these states would create 3 unused tokens
per state (10 dead tokens overall) and tempt future contributors to
"fill them in" with values that contradict the UX intent.

### 4. Why `border-readonly`, `border-disabled`, and `border` resolve to the same primitive today

In light mode, all three resolve to `gray-200`. In dark mode,
`border-readonly` and `border-disabled` both resolve to `gray-700` (same
as `border`). They are aliases by value, distinct by name.

**Why keep them separate**: the semantic name is the contract. Components
that reference `border-border-readonly` will pick up future re-tuning
automatically; components that hard-code `border-border` will not. This
mirrors the existing `destructive` / `error` policy (same primitive,
distinct name, future-flexible).

The trade-off is dead-code risk if the values never diverge. We accept that
because the renaming cost (post-1.0, per [api-stability.md](../../.claude/rules/api-stability.md))
of *adding* the semantic name later would be a `major` bump. Keeping the
name available now is cheap insurance.

### 5. Why Mode-owned, not Special-owned

Special themes own `--color-theme-*` and (optionally) `accent`. They must
not touch the new non-interactive tokens. Reasoning is captured in
[theme-architecture.md](../../.claude/rules/theme-architecture.md#specials-must-not-override-non-interactive-state-tokens);
the short version:

- Disabled "means" the same thing regardless of season or brand.
- Letting Specials retune disabled multiplies the audit matrix.
- Form-control consumers expect a stable disabled surface.

If a future Special truly needs theme-tinted disabled, revisit this rule
with a concrete example — do not bypass it.

## Consequences

### Positive

- Form-control authors can express `disabled` and `readOnly` via Tailwind
  utilities (`bg-surface-disabled`, `text-foreground-disabled`,
  `border-border-readonly`, etc.) without inventing component-local CSS.
- The two states are visually distinguishable at a glance, fixing the
  `opacity-50` conflation.
- Token layer remains framework-agnostic — the same tokens can be consumed
  by the CSS-only build (issue #58 Phase 2).

### Negative

- Two more "alias" tokens in light mode (`border-readonly` ≡
  `border-disabled` ≡ `border`). Manageable, but worth flagging in an API
  audit before v1.0.
- The cool/warm distinction is subtle on uncalibrated displays. Designers
  should verify both modes on at least one calibrated reference display
  during component-side adoption (see #182 / #183 review process).
- One more drift surface between the `@media (prefers-color-scheme: dark)`
  and `.dark` blocks in `semantic.css`. Will be addressed when the
  duplicate-block consolidation lands.

## Adoption path

This PR is tokens-only. Component-side adoption is split across follow-ups:

- **#182** — `opacity-50` system-wide sweep across form lv1s
- **#183** — Input/Textarea readOnly visual styling
- Designer review is required before merging either, per
  [#TBD](#) (issue to be opened in this PR's wake)

## Review history

| Date | Reviewer | Notes |
|---|---|---|
| 2026-05-16 | Yu Ohno (engineering) | Initial implementation and review |
| _pending_ | _design_ | Side-by-side verification on calibrated display, both Modes, with multiple Specials active |

## References

- Issue [#180](https://github.com/yasmro/schatten/issues/180) — feature request
- PR [#197](https://github.com/yasmro/schatten/pull/197) — implementation
- [state-token-guideline.md](../../.claude/rules/state-token-guideline.md) — codified rule
- [theme-architecture.md](../../.claude/rules/theme-architecture.md) — axis ownership
- WCAG 2.1 SC 1.4.3 Note 1 (disabled UI exemption from contrast)
