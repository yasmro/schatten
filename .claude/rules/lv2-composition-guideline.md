# lv2 Composition Guideline

## Overview

An **lv2** is a composition of lv1 primitives shipped as a single component
([component-architecture.md §1](component-architecture.md#1-lv1-vs-lv2--folder-responsibilities)).
This document defines the rules that `component-architecture.md` deliberately
deferred until the first lv2 was about to land
([#492](https://github.com/yasmro/schatten/issues/492)):

- **when** a recurring composition is promoted to lv2 (the promotion criterion),
- **what shape** its public API takes,
- **how** it sits on the `.st-*` CSS class contract,
- **which companions** it must ship with, and
- **how** it is exported.

What makes something an lv1 or an lv2 in the first place — whether it
introduces a primitive of its own — is defined in
[component-architecture.md §1](component-architecture.md#1-lv1-vs-lv2--folder-responsibilities).
The folder split and the one-way dependency direction
([component-architecture.md §6](component-architecture.md#6-dependency-direction--strictly-one-way))
are unchanged and are not repeated here.

**lv2 is React-only** (§5). The framework-agnostic CSS path that every lv1
supports does not extend to lv2: an lv2's value is behaviour, and a
vanilla-HTML consumer composes the lv1 classes directly instead.

> **Scope of this document vs. the tooling.** This rule fixes *what* the lv2
> tooling must do (§6, §7). The tooling lands in two steps around the first
> lv2 ([#125](https://github.com/yasmro/schatten/issues/125) EmptyState):
> the **lv2 foundation PR** makes the scripts (`audit-coverage`, the
> companion hooks, the CSS build, the registrar check, the README sync)
> discover and audit lv2, and the **first lv2's own PR** wires what needs a
> real component — size-limit, `entry.css`, and the `./components/lv2`
> export (§6.2, §7).

## 1. Central claim — count decisions, not lv1s

> **An lv2 is worth shipping in proportion to the decisions it freezes, not
> the number of lv1s it bundles.**

A *decision* is something every consumer would otherwise decide again on
every screen: which button gets initial focus, what counts as destructive,
when the surface closes, which `aria-*` is wired to which element, how two
inputs stay in sync.

The previous wording ("treat any composition of 3+ lv1s as a candidate")
measured the wrong thing. The candidate that bundled the **most** lv1s —
`FormField` (Field + label + input + error message, #123) — was the **first
one rejected**, because `Field` already froze every decision it would have
frozen (§3). Counting lv1s rewards repackaging; counting decisions rewards
value.

## 2. Promotion criterion

A composition is promoted to lv2 only if it passes **all four gates** and
hits **none of the disqualifiers**.

### Gates (all required — AND)

| # | Gate | Question |
|---|---|---|
| **G1** | Recurrence | Does the same composition recur across at least two screen types or products? (Evidence: see below.) |
| **G2** | Canonicality | Is there one correct way to compose it, such that **getting it wrong causes real a11y or safety harm** (focus order, destructive confirmation, live region, `aria-describedby` wiring, value sync)? A purely visual arrangement fails here. |
| **G3** | Non-derivability | Do the existing lv1s' curated props **not** already deliver the same value? Read what the lv1 already provides **before** counting what the composition adds. |
| **G4** | Freeze-worthiness | Can the variation be expressed as props, without the component becoming a bag of slots? **Three or more composition slots** (defined below) is the signal that the consumer should be composing it, not the library. |

What counts as **evidence for G1**: Schatten has no product of its own to
observe, so "it recurs in our screens" cannot be shown directly. Accept
either of:

- the same pattern shipped by **at least two established design systems or
  component collections** (shadcn/ui blocks, Primer, Carbon, Spectrum,
  Polaris, …) — link them in the issue; or
- **at least two concrete screen types** where the composition appears
  (e.g. "empty search results" and "empty inbox"), named in the issue.

An assertion with neither ("this is common") is not evidence; the gate is △
at best and must be argued as described in the decision flow.

What counts as a **composition slot** for G4 — count by role, not by type:

- **Counts:** a prop where the consumer drops in *arbitrary components* to
  compose a region the lv2 does not shape — an `action` area, a
  `breadcrumb`, a custom header region, a render prop.
- **Does not count:** a content prop whose place and presentation the lv2
  fixes, even when it is typed `ReactNode` so it can hold inline markup —
  `title`, `description`, `label`, `children` as the body text. The lv2
  still decides where it goes and how it looks; nothing is handed back.

Example: EmptyState (`title` / `description` / `action`, all `ReactNode`)
has **one** composition slot (`action`), so it passes G4. Counting by type
would give three and reject it — that is the misreading this definition
rules out.

What counts toward **G3**:

- **Taking state ownership away from the consumer** counts. A composition
  that owns a piece of state the consumer would otherwise manage (e.g.
  resolving an async confirm and closing itself) delivers value no lv1 prop
  can.
- **A different default on an existing lv1 does not count.** If the only
  difference is a default (initial focus, a preset label), the right change
  is an additive prop on that lv1 — see disqualifier D2.

### Disqualifiers (any one → not an lv2)

| # | Disqualifier | Reason |
|---|---|---|
| **D1** | A generic layout container (Stack / Box / Grid / an unnamed row) | [ADR-0010](../../docs/decisions/ADR-0010-no-layout-primitives.md) — Schatten ships no layout primitives. See §5 for where a *named* pattern differs. |
| **D2** | The value could be delivered by **one additive prop on an existing lv1** | Two public surfaces for one concern. The correct change is a `minor` on the lv1. |
| **D3** | It imports **no** lv1 | Not a composition. It is either an lv1 or a docs recipe. |

### Decision flow

1. Read the closest existing lv1 and list what its curated props and context
   already freeze. (Most candidates end here — G3.)
2. Check D1–D3. Any hit → stop.
3. Walk G1–G4 and write the result for each into the issue (✅ / △ / ❌ with a
   one-line reason). A △ on any gate must be argued in the PR description —
   and the argument must be a G2-type reason (a11y / safety / state), not a
   visual one ("native pickers look different per browser" is a visual
   reason and does not count).
4. All four ✅ / argued △, no disqualifier → lv2.

> Why the criterion replaced the "3+ lv1s" rule, and how #124 / #126 were
> judged against it, is recorded in
> [#492](https://github.com/yasmro/schatten/issues/492) (§2 / §6 of its
> design).

## 3. Rejected-candidate catalogue

Record every candidate rejected by the criterion here, with the gate it
failed. The catalogue is how the criterion stays calibrated.

### #123 `FormField` — failed G3

| Gate | Result |
|---|---|
| G1 Recurrence | ✅ label + input + error is the most common form shape |
| G2 Canonicality | ✅ `aria-describedby` / `aria-invalid` wiring causes real harm when wrong |
| G3 Non-derivability | ❌ **failed here** |
| G4 Freeze-worthiness | ✅ |

[`Field`](../../src/components/lv1/Field/Field.tsx) already takes `label` /
`description` / `error` / `required` / `tooltip` as curated props and wires
`id` / `labelId` / `describedBy` / `isError` / `disabled` / `required` into its
child through `FieldContext`
([field-context-guideline](field-context-guideline.md)).
`<FormField label error><Input /></FormField>` was only an alias of
`<Field label error><Input /></Field>`.

**Lesson:** read what the lv1 already provides before measuring how much the
composition bundles.

## 4. API shape

### 4.1 Flat + curated props by default; compound is not allowed

An lv2 exists to freeze how its parts are composed. A compound API (named
parts the consumer assembles) hands the composition back to the consumer and
removes the reason the lv2 exists.

- The lv1 compound-vs-flat rule
  ([component-architecture.md §2](component-architecture.md#2-compound-vs-flat))
  does **not** apply to lv2. That rule is about wrapping a multi-part Radix
  primitive; an lv2 composes lv1s, it does not wrap Radix directly.
- An lv2 that seems to want named parts is a G4 failure, not a reason to go
  compound.
- The precedent to follow is **`Dialog`** (lv1, curated props:
  `title` / `actionButton` / `cancelButton` / …), not `Card` (lv1, compound).

### 4.2 `...rest` pass-through

[component-testid-guideline](component-testid-guideline.md) requires every
lv1 / lv2 to spread `...props` onto its root. For lv2:

| lv2 root | `...rest` | `data-testid` route |
|---|---|---|
| Renders its **own** root element (e.g. EmptyState) | **Required**, spread onto the root | `data-testid` lands on the root |
| Its root **is** a curated-props lv1 without `...rest` (e.g. an lv2 over `Dialog`) | **Inherits that lv1's documented exception** | Document it in TSDoc; route testids to `children` / slot elements, and the frame to `getByRole(role, { name })` |

### 4.3 Vocabulary — no new dialect

An lv2 uses the [component-api-conventions](component-api-conventions.md)
vocabulary unchanged:

- Variants follow **Pattern A** (role) or **Pattern B** (tone × shape). A
  dangerous confirmation is Pattern A `destructive` (an action's intent), not
  Pattern B `error` (a state tone).
- `size` is `'sm' | 'md' | 'lg'`; booleans are `isError` / `isLoading` /
  `disabled` / `readOnly` / `required` exactly as defined there.
- Icon props are typed `LucideIcon` (a component, never a name string).
- If an lv2 needs an axis neither pattern covers, add it as an
  **out-of-pattern single axis** row in the per-component matrix (like `Card`
  / `Spinner`). Do not invent a third pattern.
- Every lv2 gets a row in that per-component matrix in the PR that adds it.

### 4.4 Field context

lv2s fall into two kinds with respect to `Field`:

| Kind | Example | `FieldContext` |
|---|---|---|
| **Wraps a `Field`** (the lv2 renders a `Field` inside itself) | (hypothetical) a settings row | **Neither reads nor provides it.** It passes its props to the `Field` and lets `Field` do the wiring. |
| **Is placed inside a `Field`** (the lv2 is a form control) | #568 `DatePicker` / `DateRangePicker` | **Reads it; never provides it.** Apply the unified rule of [component-architecture.md §5](component-architecture.md#5-context-consumption--unified-rule) as a form lv1 would. |

Rules common to both kinds:

- **An lv2 never provides its own React Context.** It would compete with the
  `Field` / `FieldSet` / `Tooltip` contexts and add a fourth stage to the
  `FieldSet → Field → form lv1` collapse chain.
- A form-control lv2 reads `FieldContext` itself (rather than relying on its
  inner lv1 `Input` to pick it up) so that **its non-input parts** — a popover
  trigger, a clear button — follow `disabled` / `isError` too. An inner
  `Input` alone would leave those parts out of sync.
- `id` and naming follow the lv1 precedents
  ([field-context-guideline](field-context-guideline.md)):
  - **One input** (DatePicker) — the inner `Input` consumes `field.id`, so the
    Field label names it through `htmlFor` (the `Input` precedent).
  - **Two or more inputs** (DateRangePicker) — `field.id` is **not**
    consumed. The group root carries **`role="group"`** and applies
    `aria-labelledby={field.labelId}` (the `RadioGroup` precedent), and each
    inner input gets its own name (e.g. "Start date" / "End date").
    The role is not optional: `RadioGroup` gets `role="radiogroup"` from
    Radix, but a bare `<div>` is role `generic`, which **cannot hold an
    accessible name** — `aria-labelledby` on it is silently ignored, and axe
    does not necessarily flag it (the same trap `Badge` hit, see
    [component-architecture.md §8](component-architecture.md#8-accessibility-contract)).
    Pin it with a `getByRole('group', { name })` unit test. Putting this
    role on a wrapper is ARIA wiring, not a primitive of the lv2's own, so it
    does not make the component an lv1
    ([component-architecture.md §1](component-architecture.md#1-lv1-vs-lv2--folder-responsibilities)).
- `aria-required` follows the two idioms in
  [field-context-guideline §Required propagation](field-context-guideline.md#required-propagation-via-aria-required-announce-only)
  — conditional injection (never `undefined`) for Radix-based parts.
- A form-control lv2 falls under the **`asChild` hard exclusion** for form
  inputs ([component-architecture.md §3](component-architecture.md#3-aschild--no-new-lv1-additions)),
  and `isError` applies to it as to a form lv1.
- When a form-control lv2 lands, add its row to the consumption tables in
  `field-context-guideline.md` in the same PR.

### 4.5 Accessibility

An lv2 inherits the four guarantees of
[component-architecture.md §8](component-architecture.md#8-accessibility-contract)
from its lv1 parts. On top of that:

1. **Do not add a role the parts don't already provide.** A static lv2 with
   its own root (EmptyState) ships role-less, like `Callout`. Its TSDoc tells
   the consumer how to announce it when it appears at runtime: put
   `role="status"` on a wrapper that **stays mounted**. A status region
   announces changes to its content, so one that mounts together with that
   content is usually not read out
   ([component-architecture.md §8](component-architecture.md#8-accessibility-contract)).
2. **The consumer chooses heading levels.** An lv2 that renders a title
   exposes a `headingLevel` prop (a closed numeric union) and renders the
   heading **through `Text`'s `as`** (`<Text as="h2">`), not as its own
   `<h{n}>` — the semantic element comes from the lv1, which keeps the lv2
   from introducing a primitive of its own
   ([component-architecture.md §1](component-architecture.md#1-lv1-vs-lv2--folder-responsibilities)).
   It does not decide the page's heading outline. This is not a polymorphic
   `as` on the lv2 ([ADR-0009](../../docs/decisions/ADR-0009-no-polymorphic-as.md)).
3. **An lv2 may freeze focus defaults** — that is part of the value it
   delivers (§1). A frozen default is a rule of the component, not a prop.
4. **VRT a11y assertions are the same as lv1's** — `@axe-core/playwright` with
   the WCAG 2.1 A/AA tags pinned; portal-rendered lv2s analyze the whole page
   ([vrt-spec-guideline §a11y](vrt-spec-guideline.md#a11y-assertions-axe--paired-with-every-vrt-test)).

### 4.6 Dependencies

[component-architecture.md §6](component-architecture.md#6-dependency-direction--strictly-one-way)
applies unchanged (`lv1 → lv2` forbidden, no barrel laundering). `lv2 → lv2`
is allowed by that table, but the PR that introduces one must justify it
(cycle risk and the size budget of the importing lv2).

## 5. CSS API contract

### 5.0 lv2 is React-only

Every lv1 ships on two paths — React and framework-agnostic CSS — that
render pixel-identically ([css-api.md](css-api.md),
[ADR-0003](../../docs/decisions/ADR-0003-framework-agnostic.md)). **lv2
ships on the React path only.**

- **An lv2's value does not survive the trip to vanilla HTML.** What an lv2
  freezes — initial focus, `aria-*` wiring, state ownership, value sync
  (§1) — is behaviour. A vanilla consumer writing `class="st-empty-state"`
  gets the look and none of the decisions; that is the same "performative
  parity" vrt-spec-guideline already refuses for classification C/D.
- **A vanilla consumer already has the parts.** In vanilla HTML a
  composition is just markup: the lv1 classes (`.st-icon`, `.st-text`,
  `.st-btn`, …) cover it. A docs recipe is the vanilla answer when one is
  needed, not an lv2 class.
- **It keeps the inner DOM out of the contract.** With no vanilla consumer
  writing an lv2's inner markup by hand, that markup stays an
  implementation detail, as
  [api-stability.md](api-stability.md#what-is-not-public-api) already says
  of DOM not pinned by a documented class. This is what lets §5.2 style the
  inside with descendant selectors.

Consequences:

- An lv2's `.st-*` classes still ship and are still in the manifest (§5.1),
  because React consumers override them with `className` / their own CSS.
  Renaming or removing one is `major`, as for lv1.
- **Using an lv2's classes without rendering the React component is outside
  the contract.** The CSS-path guarantees — parity, the vanilla harness, the
  `CSSApiDist` fixture — do not apply (§6.1).
- **The A–D classification is not applied to lv2.** It exists to decide
  vanilla support; for lv2 that answer is fixed. Interaction testing is
  decided by behaviour instead (§6.1).
- Adding a vanilla path for one lv2 later is additive — publish its
  sub-elements, add parity — and goes through this rule first.

### 5.1 lv2 `.st-*` classes are public API

An lv2's `.st-*` classes are on the same public naming contract as lv1's
([css-api.md](css-api.md), [api-stability.md](api-stability.md)) and are
listed in the manifest — for the React consumers who override them (§5.0).
This is derived from constraints, not chosen:

1. **An lv2 cannot use Tailwind utilities in JSX.** Since #317 the dist CSS is
   Tailwind-free and consumers have no Tailwind, so an lv2 with its own layout
   **must** write raw CSS
   ([css-api.md §raw CSS over `@apply`](css-api.md#component-css-authoring-conventions--raw-css-over-apply)).
   Inline `style` is not an option either — it cannot express media queries.
   Pinned by
   [`no-tailwind-in-component-jsx.test.ts`](../../src/components/__tests__/no-tailwind-in-component-jsx.test.ts),
   which scans lv2 as well as lv1 (#575).
2. **CSS that ships is observable.** Once imported by
   [`src/styles/entry.css`](../../src/styles/entry.css) it is in
   `dist/schatten.css`, and `generate-manifest.mjs` parses the dist, so its
   `st-` classes enter `classes` automatically.
3. Excluding lv2 classes from the manifest would make the manifest disagree
   with what ships — and let lv2 CSS change without passing
   `pnpm check:manifest`. The manifest is authoritative
   ([api-stability.md](api-stability.md#manifest-as-the-authoritative-api-listing)),
   so what ships is what is listed.

> The alternatives considered — a manifest exclusion list, inline `style`
> instead of CSS — and why each was rejected are recorded in
> [#492](https://github.com/yasmro/schatten/issues/492) (§1 of its design,
> decision A).

### 5.2 Publish the smallest surface — block + modifiers only

Manifest membership is asymmetric:

| Direction | Bump | Cost |
|---|---|---|
| Not listed → listed later | `minor` (additive) | Almost none |
| Listed → removed or renamed later | `major` | Migration guide + at least one minor of `@deprecated` |

So an lv2 publishes **its block class and its modifiers only**
(`.st-empty-state`, `.st-empty-state--md`, …). Internal parts are styled with
descendant selectors from the block; **sub-element classes (`__*`) are not
published by default.** Add one only when a concrete consumer needs to
override that part on its own, and name that use case in the PR description.

The descendant selectors are safe only because lv2 is React-only (§5.0): the
inner DOM they target is rendered by the component, never written by a
consumer, so changing it is not a breaking change. Keep them anchored on
the block and on the **lv1 classes** of the parts (`.st-empty-state .st-icon`)
rather than on bare tags (`.st-empty-state > svg`) — the lv1 classes are
public and stable, a tag is incidental
([css-api.md §Structural `:has()`](css-api.md#structural-has-for-layout-selection)
makes the same point).

Two details that a descendant selector needs here:

- **Use the child combinator (`>`) when the lv2 has a composition slot.** A
  slot holds arbitrary consumer content, so `.st-empty-state .st-icon` would
  also reach the icon of a `Button` passed in `action`.
- **A wrapper of the lv2's own has no lv1 class, and an `st-` class on it
  would be published.** Select it by what it is not —
  `.st-empty-state > :not(.st-icon, .st-text)` — and pin its place in the DOM
  with a unit test.

This is deliberately the **opposite** of lv1's default (Callout and Card
publish their sub-elements). An lv1 is a part the consumer composes, so a
per-slot override is value; an lv2 is a frozen composition, so a per-slot
override mostly undoes it. (Decision B in
[#492](https://github.com/yasmro/schatten/issues/492).)

### 5.3 Named pattern vs. layout primitive (the ADR-0010 line)

ADR-0010 rejects **generic** layout primitives (`.st-stack`, `<Box>`). An lv2
ships the internal layout of a **named semantic pattern** — the same kind of
thing lv1 already ships in `.st-field` / `.st-card__header` / `.st-callout`.

> **The test:** does the class name say *what* it lays out? `.st-empty-state`
> does (an empty state). `.st-stack` does not (anything). A class that does
> not name its content is not shipped by an lv2 either — it falls under D1.

### 5.4 Mechanics

| Item | lv1 | lv2 |
|---|---|---|
| `{X}.css` | **Always required** | **Required only when the lv2 has visual rules of its own.** An lv2 that only re-emits its parts' classes (e.g. one over `Dialog`) has none. |
| Published classes | block + modifiers + sub-elements | block + modifiers (§5.2) |
| `entry.css` import | Required | Only with a `.css`. **Import it after every lv1 it composes** — inside `@layer components`, source order breaks specificity ties (the same reason `Dialog` follows `Button`). |
| Manifest | Listed | Listed (automatically) |
| `@yasmro/schatten/css/<slug>` subpath | Required | Only with a `.css` (the `./css/*` export is a wildcard, so the build picking it up is enough) |
| Authoring | Raw CSS + `var(--color-*)`, inside `@layer components` | Same |
| Vanilla-HTML path | Supported (parity-pinned for classification A/B) | **Not supported** — React-only (§5.0) |
| Classification A–D | [vrt-spec-guideline decision flow](vrt-spec-guideline.md#parity-stories--when-to-write-one-when-to-skip) | **Not applied** (§5.0) |

## 6. Companion set

### 6.1 What an lv2 ships (diff against lv1)

| Companion | lv1 | lv2 | Note |
|---|---|---|---|
| `{X}.tsx` | Required | Required | — |
| `index.ts` + barrel re-export | Required | Required | `src/components/lv2/index.ts` |
| `{X}.stories.tsx` | Required | Required | Title `Components/lv2/{X}` ([storybook-guideline](storybook-guideline.md)) |
| `{X}.test.tsx` | Required | Required | Apply the [testing-guideline](testing-guideline.md) bucket by behaviour (a form-control lv2 is "form input", a static one "display") |
| `{X}.vrt.spec.ts` + `__snapshots__/` | Required | Required | Story-id prefix `components-lv2-{x}` |
| `{X}.css` | **Always** | **Only with own visual rules** | §5.4 |
| `src/variants/{x}.ts` (CVA) | Effectively always | **Only with a variant axis** | Not re-exported from `src/variants/index.ts`: that entry serves non-React consumers, and an lv2 is React-only (§5.0). Exporting it later is additive |
| CSS API fixture section (`cssApiSamples.html.ts` + `.tsx`) | Required | **Not required** | Vanilla markup — React-only (§5.0); `CSSApiDist.vrt.spec.ts` does not discover lv2 |
| Vanilla harness sample | Required | **Not required** | React-only (§5.0) |
| Parity story + spec | Classification A/B | **Not required** | React-only (§5.0) |
| Non-screenshot interaction test | Classification C/D | **Required when the lv2 is interactive** (opens, selects, confirms, syncs values — e.g. DatePicker), not for a static one (EmptyState) | jsdom misses real-pointer bugs the same way it does for lv1 C/D ([vrt-spec-guideline](vrt-spec-guideline.md#区分-cd-js-必須--a-playwright-interaction-test-is-required)) |
| README per-component CSS row | Required | Only with a `.css` | `pnpm check:readme` |

### 6.2 Tooling the first lv2 must extend

Split across two PRs (#125). The **foundation PR** lands the script rows —
1–7, 11, 12 — each a no-op while `src/components/lv2/` holds only its barrel,
and each pinned by a unit test on a temp-dir fixture rather than by a dummy
lv2 in the repo. The **first lv2's PR** lands rows 8 and 9, which need a real
stylesheet to point at, together with the export path (§7). The tooling
treats `.css` as optional for lv2 from the start — `discoverLv2()` reports
it through `hasCss`, the audit renders a missing one as `n/a`, and the
companion hook does not ask for it — so the rule above (`.css` only with own
visual rules) needs no later loosening.

| # | File | Change |
|---|---|---|
| 1 | `scripts/lv1-slugs.mjs` | Add `discoverLv2()`. For lv2, a missing `.css` is **filtered via `hasCss`, not thrown** (asymmetric with `discoverLv1WithCss()`). Do not rename the file. |
| 2 | `scripts/audit-coverage.mjs` | Replace the "lv2 is out of scope" warning branch with a real audit. For lv2: no parity / fixture / harness columns (React-only); `.css` conditional; the interaction column required only for the lv2s listed in a new **`LV2_INTERACTIVE`** set (see below). |
| 3 | `scripts/check-lv1-companions.mjs` | Extend `LV1_TSX_RE` to `lv1\|lv2`; `.css` optional for lv2. |
| 4 | `scripts/check-lv1-export-integrity.mjs` | Cover the lv2 barrel too. |
| 5 | `scripts/build-component-css.mjs` | Add lv2s that have a `.css`. |
| 6 | `scripts/sync-readme-components.mjs` | Add `.css`-bearing lv2s to the per-component CSS table; list lv2 in its own section of the support matrix. |
| 7 | `scripts/check-harness-sync.mjs` | **No change** — lv2 has no vanilla harness (React-only). Keep it on `discoverLv1()`. |
| 8 | `.size-limit.json` | Add `components/lv2 (all)` and `css/<lv2 slug>`; raise the `css/*` aggregate if the new total needs it. Raising a budget is an additive surface change — say so in the changeset ([api-stability.md](api-stability.md#per-component-css-size-budgets)). |
| 9 | `src/styles/entry.css` | `@import` the lv2 CSS **after** the lv1s it composes. |
| 10 | `src/docs/__fixtures__/cssApiSamples.{html.ts,tsx}` + `CSSApiDist.vrt.spec.ts` | **No lv2 section.** Keep `CSSApiDist` on `discoverLv1WithCss()` so lv2 is never auto-discovered (it would throw on the missing section). |
| 11 | `scripts/check-registrar-sync.mjs` | Scan `.css`-bearing lv2 stylesheets. **Skipping this lets an lv2 reference an unregistered variable with every gate green** — the exact failure this script exists to catch. |
| 12 | `scripts/ensure-dist.mjs` | Require `dist/css/<lv2 slug>.css`. |
| — | `.storybook/preview.tsx` | No change — the sort comparator only orders top-level groups, so `Components/lv1/*` and `Components/lv2/*` sort naturally. |

**How "interactive" is decided — `LV2_INTERACTIVE`.** `audit-coverage.mjs`
cannot infer whether an lv2 is interactive, and the A–D classification that
drives `PARITY_EXEMPT` for lv1 does not apply to lv2. So the decision is a
hard-coded, alphabetical `export const LV2_INTERACTIVE = new Set([...])` next
to `PARITY_EXEMPT`, with the same maintenance shape: the PR that adds an
interactive lv2 adds its name, and the audit then requires at least one
non-screenshot, non-a11y `test(` block in its `*.vrt.spec.ts` files (the
existing `interaction` column logic). An lv2 **not** in the set gets no
interaction requirement. "Interactive" means the lv2 opens, closes,
selects, confirms or syncs values in response to user input — DatePicker
is in, EmptyState is out. The set is introduced (empty) in the first lv2's
foundation PR and gets its first entry with #568.

Rows 5, 7, 11, 12 cover every importer of `lv1-slugs.mjs` today (row 7 as
a deliberate "no change"); a new importer added later must be checked
against lv2 as well — and decide explicitly whether it belongs to the CSS
path (lv1 only) or the shipped-CSS path (lv1 + lv2).

## 7. Export path

Restored in **the first lv2's own PR** (#125), not in the foundation PR —
**never as an empty barrel**. PR #210 removed `./components/lv2` precisely
because an export that resolves to an empty module reads as incomplete, and
the foundation PR (§6.2) ships no component, so the export had to wait for
one. A later lv2 only adds its re-export to the barrel; the rest is in place:

```
src/components/lv2/{X}/index.ts           named export
src/components/lv2/index.ts               re-export
src/components/index.ts                   `export * from './lv2'`
package.json#exports["./components/lv2"]  types + import only — ESM-only, api-stability.md
tsup.config.ts                            'components/lv2/index' in componentBarrelEntries,
                                          plus per-component entries shaped like lv1's (tree-shaking)
.size-limit.json                          'components/lv2 (all)'
```

Restoring the export is an additive surface change (`minor`).

## 8. Checklist — adding a new lv2

1. **Run the criterion** (§2) and write the G1–G4 / D1–D3 result into the
   issue. If it fails, add it to the catalogue (§3) instead.
2. **Shape the API** (§4): flat + curated props, `...rest` on the root,
   existing vocabulary, a per-component matrix row, no own context.
3. **Decide the Field kind** (§4.4) if it touches forms.
4. **Decide whether it is interactive** → if yes, add it to `LV2_INTERACTIVE`
   in `scripts/audit-coverage.mjs` and ship a non-screenshot interaction test
   (§6.1, §6.2). The A–D classification does not apply (§5.0).
5. **Decide whether it has its own visual rules** → `.css` or not (§5.4). If
   yes: block + modifiers only, descendant selectors on lv1 classes,
   imported after its lv1 parts.
6. **Ship the companions** (§6.1) in the same PR as the component.
7. **If it is the first lv2**, land the script tooling (§6.2 foundation
   rows) in a separate foundation PR first; the export path (§7) and the
   size-limit / `entry.css` rows ship with the component itself.
8. **Changeset**: `minor` (a new component is additive), with a `CSS API:`
   line when it ships classes.

## When this rule changes

- **React-only (§5.0):** a vanilla path for an lv2 is added only through
  this rule — name the consumer, publish the sub-elements it needs, add
  parity, and record the lv2 as an exception here.
- **The criterion (§2):** each rejected candidate goes into §3. If a gate
  turns out to let through something it should not (or block something it
  should not), adjust the gate and cite the case.
- **Sub-element publication (§5.2):** when the first sub-element is published,
  record the consumer use case next to it.
- **Scaffolding skill:** there is no `add-lv2-component` skill yet. It is
  filed when the second lv2 starts (#568), once two real lv2s show which
  steps repeat.
- **Audit skill:** `audit-component` mirrors this document section by section
  in its `lv2-composition-guideline.md` checklist. A new numbered section here
  fails `SKILL.test.ts` until the checklist cites it or the test excuses it.
