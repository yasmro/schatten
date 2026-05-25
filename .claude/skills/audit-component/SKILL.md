---
name: audit-component
description: >-
  Audit a single existing component against every .claude/rules/ guideline in
  one pass. Use when the user wants to verify that an lv1 / lv2 component
  conforms to the API / state-token / Field-context / Storybook / VRT / test /
  testid / CSS / API-stability rules — e.g. "audit Button", "Button を rule
  ベースで監査", "audit-component Tooltip", "Input が rules に準拠してるか
  チェックして". Reports per-rule findings as ✅ pass / ⚠️ recommendation /
  ❌ violation with file:line references and proposed fixes — but never edits
  files itself.
---

# audit-component

Take one existing component under `src/components/lv1/` (or `lv2/`) and run
**every applicable `.claude/rules/` guideline** over it in one pass. The
output is a report a reviewer can read top-to-bottom, with each finding
marked ✅ / ⚠️ / ❌, anchored to a `file:line` location, and paired with a
proposed fix (the user, not the skill, applies fixes).

This skill audits **content quality** — does the code conform to the rules?
It is deliberately separate from the structural sibling tooling so the three
do not duplicate each other:

| Surface | What it answers | Trigger |
|---|---|---|
| `audit-component` (this skill) | "Does the implementation of *this one* component conform to every rule?" | user invokes per-component, on demand |
| [`/audit-coverage`](../../commands/audit-coverage.md) | "Are the **required files** (test / VRT spec / class-API CSS / `__snapshots__/` / barrel re-export / parity files) present across **all** lv1?" | user runs library-wide; CI also runs it |
| `scripts/check-lv1-companions.mjs` + `scripts/check-lv1-export-integrity.mjs` (hooks) | Same structural check as `/audit-coverage`, but at edit-time / session-end | automatic |

If the question is "is the file there?", run `/audit-coverage`. If it is "is
the code right?", run this skill.

## When to run

Invoke explicitly when the user asks for a per-component review against the
rules — e.g. before splitting work into a follow-up sweep, when handing off a
component that has accumulated changes, or when a new contributor wants to
learn the rule surface by seeing it applied to a real component.

Do **not** invoke automatically on every edit — the skill reads the rule
docs and the component files in full and produces a substantial report;
running it constantly is wasteful. Edit-time conformance is the
[`PostToolUse` hook's](../../../scripts/check-lv1-companions.mjs) job.

## Procedure

### Step 1 — Resolve the target

Get the component name from the user argument or the conversation. Accept
either PascalCase (`Button`, `RadioGroup`) or kebab-case
(`button`, `radio-group`) — normalize to PascalCase internally.

Verify the component exists at `src/components/lv1/<Name>/<Name>.tsx`
(or `lv2/<Name>/<Name>.tsx`). If it does not, stop and ask which component
the user meant; do not silently pick the closest match.

If the user names something that is **not** an individual component (a
folder, a barrel re-export, a story), stop and ask. This skill audits
exactly one `<Name>.tsx` per run.

### Step 2 — Read every rule (always, every run)

Rules drift. **Never audit from memory.** Glob and read every file under
`.claude/rules/` before generating any finding:

```sh
ls .claude/rules/*.md
```

Read each one in full — even rules that look unrelated at first
(`api-stability` matters when the audit touches a public prop;
`theme-architecture` matters when the component consumes theme tokens).
If a new rule has been added since this skill was last touched, dynamic
discovery picks it up automatically; cover it in a best-effort section
in the report and flag in "Skill / rule maintenance" at the end.

### Step 3 — Read the component's full file set

For `<Name>` (PascalCase), `<name-kebab>` (kebab-case):

| File | Purpose |
|---|---|
| `src/components/lv1/<Name>/<Name>.tsx` | The component itself — props, render, a11y wiring |
| `src/components/lv1/<Name>/<Name>.css` | The `.st-<name-kebab>` class-API source of truth |
| `src/components/lv1/<Name>/<Name>.stories.tsx` | Storybook surface |
| `src/components/lv1/<Name>/<Name>.test.tsx` | Vitest unit tests |
| `src/components/lv1/<Name>/<Name>.vrt.spec.ts` | Playwright VRT spec |
| `src/components/lv1/<Name>/<Name>.parity.stories.tsx` (optional) | Parity story (classification A/B) |
| `src/components/lv1/<Name>/<Name>.parity.vrt.spec.ts` (optional) | Parity VRT (classification A/B) |
| `src/components/lv1/<Name>/index.ts` | Folder barrel |
| `src/variants/<name-kebab>.ts` (optional) | CVA variant definition |
| `src/components/lv1/index.ts` | The relevant re-export line for `<Name>` |
| `src/styles/entry.css` | The component CSS `@import` line |

Read whatever exists. Missing files are themselves findings — but cross-check
against `pnpm audit:coverage` rather than re-deriving the structural matrix
here (this skill is content-first; refer the user to `/audit-coverage` for
missing-file detail).

For compound components (`Dialog`, `Select`, `Tooltip`, `Radio` / `RadioGroup`),
the `.tsx` is multi-export — read every named export.

### Step 4 — Run the audit, rule by rule

Walk the rule checklists in §"Rule-by-rule checklist" below. For each
checkpoint:

- **✅ Pass** — explicitly call it out only when worth emphasising (e.g.
  the component correctly uses Field context, or correctly opts out of
  a default role). Routine passes can be implied by absence.
- **⚠️ Recommendation** — the code works today and matches the rule on
  the *letter*, but a cleaner expression would match the *spirit*.
  Optional to fix.
- **❌ Violation** — the code contradicts the rule. Must fix (or document
  an exception in the rule itself, per the rule's "when this rule changes"
  section, or via a `biome-ignore` / inline comment with rationale).

Always anchor a finding to `file:line` — never a vague "in the component".
The reviewer should be able to click straight to the spot.

**Respect explicit suppression.** If the code carries an inline comment that
acknowledges the exception (e.g. a TODO that names the rule, a `biome-ignore`
with a reason, a TSDoc note that the component intentionally diverges with
a stated reason), drop the finding from ❌ to ⚠️ or omit it entirely —
mention it once in the report so the reviewer sees the audit *saw* it.
Anti-pattern: silencing a finding just because the code says "// known".

### Step 5 — Emit the report

Use the template in §"Output format". One section per rule (skip sections
where there is genuinely nothing to say). End with:

1. **🎯 Top 3 actions** — the highest-leverage fixes from the body.
2. **🤖 Optional auto-fix sketch** — a proposed edit set the user can
   apply by saying "apply the fixes". Do **not** edit any file in the
   audit run itself; auto-fix is a separate, explicitly-approved step.

If the user later asks "apply the fixes", switch to edit mode and apply
the sketched changes one-by-one — but only the ones they confirm. Never
batch-apply without re-confirming.

## Rule-by-rule checklist

For each rule below, walk the listed checkpoints against the component's
file set. The checkpoints are the **minimum** — re-read the rule before
each run; new checkpoints there must show up here in spirit, even if this
list is not updated yet.

### component-architecture.md

- **lv1 vs lv2 placement** — the component lives in the right folder for
  its scope. (Today the lv2 folder is empty; flag any lv1 that already
  reads as a composition of 3+ lv1s as a candidate for promotion post-1.0.)
- **Compound vs flat** — a compound component (multi-export) wraps a
  Radix primitive with multiple parts and names them 1-to-1 (Schatten
  `SelectTrigger` ↔ `SelectPrimitive.Trigger`). A flat component has one
  styled tag and at most one content slot.
- **`asChild` adoption (§3)** — for any new lv1 added since v0.7.0,
  `asChild` should be **absent** unless the three adoption criteria
  (real reason, internal state composes, leaf-ish) all hold. **Hard
  exclusions**: form inputs and Portal content must never expose
  `asChild`.
- **Polymorphic `as` (§4)** — only `Text` may carry one today (closed
  enum of semantic HTML tags). Any other component sprouting an `as`
  prop is a finding.
- **Context consumption (§5)** — form lv1s read `isError` / `disabled`
  / `describedBy` from `FieldContext` with prop fallback. `id` is read
  **only** by externally-labelled inputs (Input / Textarea / Select),
  not by self-labelled ones (Checkbox / Switch / Radio).
- **Dependency direction (§6)** — `lv1/` imports `lib/` / `contexts/` /
  `variants/` / other `lv1/`. `lv1/` must not import `lv2/`. No
  barrel-export laundering through a higher layer.
- **lv1-local `.css` files (§7)** — `<Name>.css` is allowed because it
  is the SSOT for the `.st-<name>` class API (post-#154 exemption). But
  any *additional* `.css` (animation-only, scoped vars,
  `prefers-reduced-motion`) must still meet the "not expressible in
  Tailwind / CVA" bar.
- **A11y contract (§8 — four guarantees)**:
  1. Explicit role from a native element / Radix primitive /
     `role="..."`. Calling out a `<div onClick>` masquerading as a button
     is a ❌.
  2. Queryable accessible name — `getByRole(role, { name })` returns the
     component. Icon-only triggers need `aria-label`.
  3. Keyboard support — reachable via Tab, activates with the
     role-appropriate key, visible focus ring (`focus-visible:ring-*`
     in variants).
  4. State announcements — `aria-invalid` on `isError`, `aria-describedby`
     via Field context, `disabled` HTML attr, `aria-hidden` on
     decorative icons. "Hard rules" (no `<div onClick>`, no color-alone
     state, no stripped focus ring, no root `tabIndex={-1}`).

### component-api-conventions.md

- **Pattern picked correctly** — Pattern A (single `variant`, action
  components like Button) vs Pattern B (`variant` tone × `appearance`
  shape, state components like Badge / Callout / Toast) vs Form (no
  `variant`, `isError`) vs Display (out-of-pattern). Mixing patterns in
  one component is a ❌.
- **Variant vocabulary** — values match the per-component matrix table.
  No invented variants (`<Button variant="success">` is a ❌, `<Badge
  variant="default">` is a ❌ — should be `neutral`).
- **`size`** — always `sm | md | lg`, never `small | medium | large` or
  `xs | xl`.
- **Boolean prop naming** — schatten-specific state: `is*` prefix
  (`isError`, `isLoading`). HTML-native attributes: no prefix
  (`disabled`, `readOnly`, `required`, `checked`, `open`).
- **TSDoc on every public prop** — every prop on `Props` has a `/** ... */`
  with `@default` matching CVA's `defaultVariants`. For `variant` /
  `appearance` / `size`, each option is documented with a bullet list.
  Do **not** flag inherited HTML props (`onClick`, `className`,
  `disabled`) for missing TSDoc.
- **Defaults in sync** — the component's destructuring defaults and the
  CVA `defaultVariants` match.

### css-api.md

- **`.st-<name-kebab>` block exists** in `<Name>.css` and uses the
  three-form BEM (`.st-block` / `.st-block--mod` / `.st-block__element`).
- **One axis per modifier** — no `--error-subtle` collapsed modifiers;
  emit `--error` and `--subtle` side-by-side. Pattern B uses double-class
  selectors (`.st-callout--success.st-callout--subtle`).
- **State via attributes, not classes** — `:disabled` / `:read-only` /
  `[aria-invalid="true"]` / `[aria-busy="true"]` / `[data-state]` /
  `[data-side]` / `[data-swipe]` / `[data-error]` / `[data-disabled]`.
  Spotting a `.st-input--error` class is a ❌.
- **Raw CSS over `@apply`** in `<Name>.css` — `color: var(--color-error)`
  rather than `@apply text-error` (the `@reference` corner-case
  documented in css-api.md).
- **`@layer components`** — every rule is inside the components layer.
- **Dark mode** — token-driven by default; `:where(.dark) .st-*` only
  when a rule (not just a value) differs.
- **No color-alone signal** — every state must have an icon / label /
  attribute partner, not just a colour swap.
- **Sub-elements** — flat under the block (`.st-dialog__content`, not
  `.st-dialog__content__header`).
- **Derived modifiers (`cn(...)` outside CVA)** — when the component
  emits a modifier like `--icon-only` based on a derived condition,
  it lives in the `.tsx` via `cn()`, not in the CVA `variants` shape.

### state-token-guideline.md + lint-rules-guideline.md

- **No primitive colour classes** in `<Name>.tsx` or `<Name>.css` —
  `bg-red-500`, `text-gray-700`, `ring-vermillion-600`, etc. are
  forbidden. (`no-primitive-color` Biome plugin catches JSX. CVA
  variants in `src/variants/<name>.ts` and `<Name>.css` are NOT covered
  by the plugin — they are a code-review concern, so the audit must
  read them explicitly.)
- **Semantic tokens only** — `bg-error`, `text-foreground-muted`,
  `bg-error-subtle`, `border-error`. State tokens follow the
  `base / hover / foreground / subtle` shape.
- **`destructive` vs `error`** — actions use `destructive-*`, form /
  notification state uses `error-*`. Sharing the primitive (`red`) does
  not mean the semantic names are interchangeable.
- **`info` pinned to blue** — never routes through the theme scale.
- **`disabled` / `readOnly` token shape** — `disabled` = surface +
  foreground + border, `readOnly` = surface + border (foreground stays
  readable). Conflating the two (e.g. `opacity-50` on both) is a ❌.

### theme-architecture.md

- **Component is theme-unaware** — references only semantic tokens
  (`bg-theme-500`, `text-foreground`); no `useTheme()` hook, no
  `<ThemeProvider>` wrapping inside the component.
- **No primitive class names baked into JSX** (`bg-red-500`) — these
  ignore `data-theme` and break Special / Mode cascades. Already
  covered by `state-token-guideline`; mention here only if the violation
  has a theme-cascade implication.

### field-context-guideline.md

Only applies to form components (`Input`, `Textarea`, `Select`,
`Checkbox`, `Radio`, `Switch`, `RadioGroup`, plus `Field` / `FieldSet`).

- **Fallback pattern** — `field?.value ?? propValue ?? defaultValue` for
  every consumed field. The fallback chain order is part of the
  contract.
- **`id` consumption** — externally-labelled inputs (Input / Textarea /
  Select) use `field?.id`; self-labelled inputs (Checkbox / Switch /
  Radio) do **not** (each generates its own per-instance id).
- **`aria-describedby` wiring** — flows through `field?.describedBy`.
- **Description as `<label htmlFor>`** — clickable description focuses
  the input via `htmlFor` while `aria-describedby` carries the SR
  announcement.

### storybook-guideline.md

- **`Playground` is the first export** — args-based, single instance for
  the Controls panel.
- **No `Default` / `Secondary` / `Outline` per-prop-value stories** —
  group into `AllVariants` / `Sizes` / `States` / `Disabled` etc.
- **All public props have `argTypes`** with English `description` /
  `table.type.summary` / `table.defaultValue.summary`.
- **English only** in story labels, button text, descriptions
  ("Search" not "検索").
- **TSDoc is source of truth** — when `argTypes.description` disagrees
  with TSDoc, TSDoc wins. Both must be present and consistent.
- **Meta** — `tags: ['autodocs']`, `parameters: { layout: 'centered' }`
  unless full-width is needed.

### testing-guideline.md

- **File exists** — `<Name>.test.tsx` co-located with `<Name>.tsx`.
- **Common cases** — renders without crashing, `children` / `className`
  forwarded, `ref` reaches the DOM node, `variant` / `size` distinct
  classes, `disabled` blocks interactions, `getByRole(role, { name })`
  returns the component.
- **Component-type cases** — match the bucket (Form Input / Compound /
  Action / Display). Form-input components must cover controlled +
  uncontrolled + Field-context integration.
- **BDD-style naming** — `it('renders ...', ...)` not `it('should ...')`
  or `it('test #3', ...)`.
- **`describe` is the "Given"** — shared preconditions in nested
  `describe`, "When + Then" in the `it`.
- **No AAA section labels** (`// Arrange / // Act / // Assert`).
- **Typed factory** when render setup is non-trivial — see
  `Select.test.tsx`'s `BasicSelect`.
- **Query by role first** — fall back to `getByText` / `getByLabelText`
  / `getByTestId` only when role-based queries don't apply.
- **`userEvent` over `fireEvent`** unless there is a specific reason.

### vrt-spec-guideline.md

- **File exists** — `<Name>.vrt.spec.ts` co-located.
- **Template choice** matches the component shape — standard /
  animation (component has `@keyframes`) / Portal (Dialog / Tooltip /
  Toast / Select-open).
- **`STORY_ID_PREFIX`** matches the Storybook `title:` kebab-cased.
- **Story roster sync** — every `*.stories.tsx` export that represents
  a distinct visual state is in the spec's `stories` array (or
  explicitly skipped with a one-line comment naming the reason).
- **Standard wait logic** — `networkidle` + root visible + content
  rendered.
- **Animation pause** — `addStyleTag` pauses animations before
  screenshot on Animation / Portal templates.
- **Portal strategy** — open state pinned (Tooltip), trigger click
  (Dialog), or `container` prop (rare). The strategy is documented in a
  comment.
- **Parity story / spec** — for classification A/B (fully vanilla-able
  + browser-handled), `*.parity.stories.tsx` and `*.parity.vrt.spec.ts`
  exist. For classification C/D (JS-driven compounds — Tooltip / Select
  / Dialog / Toast), they must **not** exist.

### api-stability.md

- **Public API surface** — every prop on the component's exported
  `Props` interface is part of the public contract from v1.0.0. Flag
  newly-added props that are not TSDoc'd or that diverge from the
  per-component matrix.
- **Renames / removals** since the last release are flagged as
  candidates for the `BREAKING:` / `CSS API:` changeset prefix.
- **CSS classes / state attributes** — every `.st-*` class and
  `[data-*]` / `[aria-*]` styling hook used by `<Name>.css` will land
  in the manifest. Flag undocumented additions (must come with a
  `CSS API:` changeset entry).
- **CVA output shape** — the dedup is part of the contract; do not
  rely on class order inside the emitted string.

### component-testid-guideline.md

- **`...props` pass-through** — the component spreads `...rest` (or
  `...props`) onto its rendered root. A component that *intentionally*
  doesn't pass through (Dialog, Toast) must document the alternative
  (children-based testid).
- **No internal testid** — Schatten must not emit `data-testid="..."`
  from inside the library. Spotting a hardcoded internal testid is a ❌.
- **Compound components** — each named subcomponent independently
  accepts `data-testid`.
- **Portal-rendered Content** — testid lands on the Content, not on
  the Trigger (Trigger's testid never reaches the portaled DOM via
  traversal).

### lint-rules-guideline.md

`pnpm lint` (Biome + GritQL plugins) catches the vast majority of this
rule mechanically — `useExhaustiveDependencies`, `useImportType` /
`useExportType`, `noNonNullAssertion`, `noConsole`, `noRestrictedImports`,
and `no-primitive-color` against JSX. **Do not re-judge those in this
audit** — CI will fail before the audit ever runs if any of them trips.

The audit's only added value here is the two **GritQL plugin blind
spots** that `no-primitive-color` cannot reach:

- **`src/variants/<name-kebab>.ts`** — CVA variant files hold bare class
  strings inside `cva(...)`, not JSX. The plugin's GritQL pattern matches
  JSX attribute text only, so primitive colour utilities slipping into
  the `variants: { variant: { primary: 'bg-red-500 ...' } }` block are
  invisible to the linter. Read the file and grep for
  `\b(bg|text|border|ring)-(red|gray|blue|green|amber|yellow|purple|sumi|vermillion)-\d{2,3}\b`
  — any hit is a ❌.
- **`src/components/lv1/<Name>/<Name>.css`** — component CSS is also
  out of the GritQL plugin's reach. Read the file and grep for the
  same pattern (note that `var(--color-*)` references are the correct
  form, not `bg-*` utilities; see css-api.md "raw CSS over `@apply`").

That is the entirety of this section's contribution. If the audit
catches itself reasoning about `console.log` or `useEffect` deps, stop
— that is `pnpm lint`'s job.

## Output format

Emit one section per rule, plus the closing wrap-up. Use this template:

```md
# audit-component: <Name>

## 概要 / Summary

<Name> は <Pattern A | Pattern B | Form | Display> の <flat | compound> な
lv1 で、<a11y role の出どころ>。Audit 対象: <.tsx / .css / .stories.tsx /
.test.tsx / .vrt.spec.ts / (.parity.*?)>.

- ✅ <pass count> / ⚠️ <warning count> / ❌ <violation count>

## component-architecture.md

- ✅ <observation worth keeping>
- ⚠️ <something to tighten — file:line — proposed fix>
- ❌ <violation — file:line — proposed fix>

## component-api-conventions.md
...

## css-api.md
...

## state-token-guideline.md
...

## field-context-guideline.md
(only if form component)

## storybook-guideline.md
...

## testing-guideline.md
...

## vrt-spec-guideline.md
...

## api-stability.md
...

## component-testid-guideline.md
...

## lint-rules-guideline.md
...

(Add a section for any newly-discovered rule in .claude/rules/ that did not
exist when this skill was last updated.)

## 🎯 Top 3 actions

1. <highest-leverage fix — rule — file:line>
2. <second>
3. <third>

## 🤖 Optional auto-fix sketch

If the user replies "apply", make these edits (preview only — not yet
applied):

- `<file:line>` — <one-line edit description>
- `<file:line>` — <one-line edit description>

## Skill / rule maintenance

- <newly-discovered rule, if any>
- <a rule that this audit could not check thoroughly and why>
```

Pick the language of the prose (Japanese vs English) to match the
conversation. The structural anchors (`✅`/`⚠️`/`❌`, rule file names,
`file:line` references) stay constant across languages.

## What the skill does NOT do

- **Edit files.** The audit's output is a report. Auto-fix is a separate,
  approve-each-edit step that only runs when the user explicitly says
  "apply" after seeing the sketch.
- **Re-run `pnpm lint` / `pnpm test` / `pnpm test:vrt`.** Mechanical
  enforcement is CI's job and is already covered by the lint plugin /
  Vitest / Playwright. The skill cross-references *reasoning* the
  mechanical tools cannot do.
- **Update VRT baselines** (`pnpm test:vrt:update`). The blind-update
  prohibition in [vrt-spec-guideline.md](../../rules/vrt-spec-guideline.md)
  applies to all agent-driven runs.
- **Audit `lv2`** as a separate scope. The lv2 folder is empty pre-1.0;
  when a real lv2 lands, this skill will need an lv2 section. Until
  then, point the user at `component-architecture` §1 if they ask.
- **Replace `/audit-coverage`.** Structural file-presence checks belong
  to that command — this skill defers to it for the "is the file
  there" question.
- **Replace `/review-pr`.** A PR self-review is diff-scoped and includes
  ship-verdict semantics; this skill is component-scoped and produces a
  rule-conformance report instead.

## Recovery / limitations

- **Interpretive findings are not infallible.** AI judgment about
  Pattern A vs B fit, asChild justification, or a11y role choice is
  best-effort. If the audit flags something that the team has
  explicitly decided is fine, document the exception in the rule's
  "when this rule changes" section *or* leave an inline comment that
  the next run can pick up as a suppression marker.
- **Dynamic rule discovery is best-effort.** If a brand-new rule has
  shipped under `.claude/rules/` and this SKILL.md has not been
  updated yet, the audit reads the rule but does **not** invent
  detailed checkpoints — it covers it in a best-effort one-paragraph
  section and flags the gap in "Skill / rule maintenance" so the next
  PR can backfill the checklist.
- **CVA variant files and component CSS are not covered by
  `no-primitive-color`.** The audit explicitly grep-reads
  `src/variants/<name-kebab>.ts` and `src/components/lv1/<Name>/<Name>.css`
  for primitive colour usage — do not rely on `pnpm lint` alone.
- **Compound components produce a longer report** because each named
  export gets its own audit. Mark each sub-component's findings under
  a sub-heading so the reader can navigate.

## When this skill changes

When you add or rename a `.claude/rules/*.md`, also:

1. Add (or update) the matching section in §"Rule-by-rule checklist".
2. Add (or update) the bullet in CLAUDE.md's `## Claude Code skills`.
3. Bump no version — the skill is `.claude/`-internal and ships behind
   the `no-changeset` label.

The skill itself is the lesser of two evils: a stale skill that still
points to the rule files is better than no skill at all. If you ship a
new rule and forget to extend this skill, the audit still reads the rule
(via dynamic glob) and reports something useful — but the report quality
will be lower until the checklist is updated.
