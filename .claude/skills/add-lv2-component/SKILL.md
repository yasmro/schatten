---
name: add-lv2-component
description: >-
  Scaffold a new lv2 composite component for the Schatten design system. Use
  whenever the user wants to add, create, or generate a new lv2 / composite
  component (e.g. "add a new lv2 component", "lv2 に ConfirmDialog を作って",
  "このコンポジションを lv2 にして"). Runs the promotion criterion first and stops
  if the candidate fails, then generates the companion set from templates,
  decides the optional files (.css / variants / interaction spec) from the
  answers, and registers the component in every place the audit and drift tests
  read. Do not use it for lv1 primitives — that is add-lv1-component.
---

# add-lv2-component

Scaffold a new **lv2 composite**. The point of this skill: an lv2 passes the
promotion criterion before any file exists, ships with its companions, and is
registered everywhere the gates look.

The rules live in `.claude/rules/lv2-composition-guideline.md`. This file holds
the order and the branches; every `§` below is a section of that document. When
the two disagree, the guideline wins, and this file gets fixed.

## What it generates

For a component named `Foo`:

| File | When |
|---|---|
| `src/components/lv2/Foo/Foo.tsx` | Always |
| `src/components/lv2/Foo/Foo.stories.tsx` | Always |
| `src/components/lv2/Foo/Foo.test.tsx` | Always |
| `src/components/lv2/Foo/Foo.vrt.spec.ts` | Always |
| `src/components/lv2/Foo/index.ts` | Always |
| `src/components/lv2/Foo/Foo.css` | Only with visual rules of its own (§5.4) |
| `src/variants/foo.ts` | Only with a variant axis (§6.1) |
| `src/components/lv2/Foo/Foo.interaction.vrt.spec.ts` | Only when interactive (§6.2) |

## Templates

Placeholder templates live in [`templates/`](templates/). They scaffold the
static, own-root shape (EmptyState). Adapt them to the answers from Step 3.

Replace **every** occurrence of each token:

| Token | Replace with | Example (`SearchField`) | Used for |
|---|---|---|---|
| `__ComponentName__` | PascalCase name | `SearchField` | Component, directory, story title |
| `__componentName__` | camelCase name | `searchField` | `searchFieldVariants` |
| `__component-name__` | kebab-case name | `search-field` | `.st-*` block, variants filename |
| `__componentname__` | lowercased name (the slug) | `searchfield` | Story ID, `css/<slug>`, Welcome slug |

`<kebab>` and `<slug>` below are two different strings for a multi-word name.

## Procedure

### Step 1 — Read the rules (always, every run)

Rules drift; never scaffold from memory. Read:

- `.claude/rules/lv2-composition-guideline.md`
- `.claude/rules/component-architecture.md`
- `.claude/rules/component-api-conventions.md`
- `.claude/rules/css-api.md`
- `.claude/rules/state-token-guideline.md`
- `.claude/rules/storybook-guideline.md`
- `.claude/rules/testing-guideline.md`
- `.claude/rules/vrt-spec-guideline.md`
- `.claude/rules/component-testid-guideline.md`
- `.claude/rules/field-context-guideline.md`, when the lv2 touches forms

### Step 2 — Run the promotion criterion (§2)

Read the closest lv1 first, and list what it already freezes. Then walk the
disqualifiers D1–D3 and the gates G1–G4, and write the result for each into the
issue with a one-line reason. G1 needs evidence: two design systems, or two
named screen types.

**If the candidate fails, stop.** Generate nothing, and tell the user which gate
failed. A rejected candidate is recorded in the catalogue (§3), and D2 usually
means an additive prop on the lv1 is the right change.

### Step 3 — Gather the decisions (ask the user)

These answers decide the file set, so settle them before generating. Use
`AskUserQuestion` when the choices are closed.

1. **Name** — PascalCase. It must not exist under `src/components/lv1/` or
   `src/components/lv2/`.
2. **Root** (§4.2) — its own element, or a curated-props lv1 without `...rest`
   (e.g. an lv2 over `Dialog`).
3. **Field relation** (§4.4) — none / wraps a `Field` / a form control with one
   input / a form control with two or more inputs.
4. **Interactive?** (§6.2) — does it open, close, select, confirm or sync values
   in response to user input?
5. **Visual rules of its own?** (§5.4)
6. **Variant axis?** (§4.3) — Pattern A, Pattern B, or an out-of-pattern single
   axis. Look vocabulary up; do not invent it.
7. **Role + accessible name on its own root?** — decides `ROLE_NAME_CONTRACT` or
   `ROLE_NAME_EXEMPT`.
8. **Depends on another lv2?** (§4.6) — the PR must justify it.

The A–D classification does not apply (§5.0). Do not ask for it.

### Step 4 — Generate and register

Copy the templates that apply, rename `Component.*` → `<Name>.*` and
`variants.ts` → `<kebab>.ts`, and substitute the tokens. Then:

- **No `.css`:** drop the `.css` import from the `.tsx`, and skip `entry.css` and
  `css/<slug>`.
- **No variant axis:** drop the variants import. With a `.css`, pass the block
  with `cn('st-<kebab>', className)`.
- **No title:** drop `headingLevel`. A title always goes through `Text`'s `as`,
  never a bare `<h2>` (§4.5).
- **Static:** ships role-less, and its TSDoc tells the consumer how to announce it
  (§4.5).
- **Root is a curated lv1:** document the inherited `...rest` exception in TSDoc,
  and rewrite the testid test around `children` and `getByRole` (§4.2).
- **Portal content:** follow `portalStories` in
  `src/components/lv2/DatePicker/DatePicker.vrt.spec.ts`. Screenshot with
  `fullPage: true`, and run axe on the whole page.

**Form control** (§4.4) — the template does not cover this shape. Follow
`src/components/lv2/DatePicker/DatePicker.tsx`:

- Read `useFieldContext()` in the lv2, so non-input parts follow `disabled` and
  `isError`. Never provide a context value of your own.
- **One input:** the inner `Input` consumes `field.id`.
- **Two or more inputs:** do not consume `field.id`. Put `role="group"` and
  `aria-labelledby={field?.labelId}` on the root, name each input, and pin it
  with `getByRole('group', { name })`. See "Range input" in
  `field-context-guideline.md`.
- **Shield a part with `<FieldContext.Provider value={null}>`** when an lv1 would
  misread `Field`: the inputs of a range, and a calendar inside a popover, which
  a portal does not shield. `DatePicker` needs it too, despite having one input.
  Resolve the value in the lv2 and pass it down.

**Register:**

| Where | When | What |
|---|---|---|
| `src/components/lv2/index.ts` | Always | Re-export, alphabetical |
| `ROLE_NAME_CONTRACT` or `ROLE_NAME_EXEMPT` in `scripts/audit-coverage.mjs` | Always | Exactly one, alphabetical. `audit-coverage.test.ts` fails otherwise |
| `WELCOME_COMPONENT_SLUGS` + a `ComponentCard` in `Welcome.stories.tsx` | Unless exempt | `'components-lv2-<slug>'`. `Welcome.drift.test.ts` fails otherwise |
| `WELCOME_CARD_EXEMPT` | A static card cannot show it | Instead of the row above |
| Per-component matrix in `component-api-conventions.md` | Always | One row (§4.3) |
| `LV2_INTERACTIVE` in `scripts/audit-coverage.mjs` | Interactive | Alphabetical, plus the interaction spec |
| webkit `testMatch` in `playwright.config.ts` | Interactive and moves focus | Add the interaction spec. Safari does not focus a button on click |
| `src/styles/entry.css` | With a `.css` | `@import` **after** every lv1 it composes (§5.4) |
| `.size-limit.json` `css/<slug>` | With a `.css` | `"limit": "1.5 KB"` |
| Tables in `field-context-guideline.md` | Form control | Its row, in the same PR (§4.4) |

**Leave these alone.** They are habits from the lv1 skill:

- `src/variants/index.ts` — lv2 variants are not re-exported (§6.1)
- `src/docs/__fixtures__/cssApiSamples.html.ts`, its `.tsx`, and the vanilla
  harness — lv2 is React-only (§5.0)
- `*.parity.*` and `PARITY_EXEMPT` — the classification does not apply (§5.0)
- `.st-<kebab>__*` sub-elements — block and modifiers only (§5.2)
- `package.json` `exports`, `src/components/index.ts`, `tsup.config.ts` — they
  already pick a new lv2 up (§7)

### Step 5 — Strip the scaffold residue

```sh
grep -rn 'it\.todo(\|describe each option here\|TODO(\|__ComponentName__\|__componentName__\|__component-name__\|__componentname__' \
  src/components/lv2/<Name> src/variants/<kebab>.ts
```

Zero hits. Replace each `it.todo` with a real assertion, or delete it if it does
not apply. Cover the decisions the lv2 freezes: those are why it exists (§1).
An empty rule body in the `.css` survives the build, so this grep is the only
check on it.

### Step 6 — Verify

```sh
pnpm lint:fix
pnpm typecheck
pnpm lint
pnpm test --run src/components/lv2/<Name> scripts/__tests__/audit-coverage.test.ts src/docs/Welcome.drift.test.ts
pnpm build
pnpm update:manifest      # reads dist, so it runs after the build
pnpm sync:readme
pnpm check:manifest
pnpm check:readme
pnpm check:registrar
pnpm audit:coverage
pnpm size
```

**Size budget.** `pnpm size` decides whether to raise `components/lv2 (all)` and
`css/*`. Bundling lv1s adds a lot: #568 took the first from 3 KB to 32 KB. A
raise is an additive surface change, so name it in the changeset.

**VRT.** Check that nothing else serves port 6006 (`lsof -ti:6006`), then run
`pnpm test:vrt --grep '<Name>'`. Baselines do not exist yet, and CI never
generates them. Tell the user to open each new PNG before committing. Unlike an
lv1, an lv2 shifts no docs baseline, because it adds no fixture section. A docs
diff is a regression. Run `pnpm test:a11y --grep '<Name>'` too.

### Step 7 — Changeset and hand-off

Add a `minor` changeset (§8). Write a `CSS API:` line when the lv2 ships classes,
naming the `css/<slug>` subpath and any budget change.

Stop before committing. Show the user the file list and the G1–G4 / D1–D3 result.
The PostToolUse and Stop hooks check the companions and the barrel.

## Recovery

Generated files are plain new files. `git clean -fd src/components/lv2/<Name>`,
removing `src/variants/<kebab>.ts`, and `git restore` on the registered files roll
everything back.
