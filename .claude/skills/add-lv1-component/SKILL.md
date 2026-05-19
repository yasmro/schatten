---
name: add-lv1-component
description: >-
  Scaffold a new lv1 primitive component for the Schatten design system.
  Use whenever the user wants to add, create, or generate a new lv1 / primitive
  component (e.g. "add a new lv1 component", "新しいコンポーネントを追加して",
  "lv1 に Alert を作って", "Banner コンポーネントを新設"). Generates the full
  6-file set — variants CVA / tsx / stories / unit test / VRT spec / index —
  in a form that complies with every .claude/rules/ guideline, and registers
  the component in src/components/lv1/index.ts. Prevents test-less or
  VRT-less component additions structurally.
---

# add-lv1-component

Scaffold a new **lv1 primitive** component. The point of this skill: a new lv1
*always* ships with its unit test and VRT spec, and *always* matches the
project's API conventions — no test-less or convention-drifting additions.

## What it generates

For a component named `Foo`:

| File | Purpose |
|---|---|
| `src/variants/foo.ts` | CVA variant definition (`fooVariants` + `FooVariants` type) |
| `src/components/lv1/Foo/Foo.tsx` | The component (`forwardRef`, typed `Props`, TSDoc) |
| `src/components/lv1/Foo/Foo.stories.tsx` | Storybook — `Playground` + grouped render stories |
| `src/components/lv1/Foo/Foo.test.tsx` | Vitest unit test |
| `src/components/lv1/Foo/Foo.vrt.spec.ts` | Playwright VRT spec |
| `src/components/lv1/Foo/index.ts` | Folder barrel re-export |

Plus an edit to **`src/components/lv1/index.ts`** adding the public re-export,
and to **`src/variants/index.ts`** adding the variants re-export.

## Templates

Placeholder templates live in [`templates/`](templates/). They are a *correct
scaffold*, not the finished component — after substitution you must adapt the
variant vocabulary, classes, and tests to the answers gathered in Step 2.

Placeholder tokens (replace **every** occurrence):

| Token | Replace with | Example (`SearchField`) |
|---|---|---|
| `__ComponentName__` | PascalCase name | `SearchField` |
| `__componentName__` | camelCase name | `searchField` |
| `__component-name__` | kebab-case name | `search-field` |

## Procedure

### Step 1 — Read the rules (always, every run)

Rules drift; never scaffold from memory. Read these before generating anything:

- `.claude/rules/component-architecture.md` — lv1 vs lv2, compound vs flat,
  `asChild` (default **off** for new lv1s), dependency direction, a11y contract
- `.claude/rules/component-api-conventions.md` — the two prop patterns, the
  per-component matrix, common prop names/types
- `.claude/rules/storybook-guideline.md` — `Playground` first, group by prop,
  TSDoc as source of truth
- `.claude/rules/testing-guideline.md` — required test cases per component type
- `.claude/rules/vrt-spec-guideline.md` — VRT spec template, story-id mapping
- `.claude/rules/state-token-guideline.md` — semantic tokens only, never
  primitive color classes (`bg-red-500` is banned by a lint plugin)
- `.claude/rules/component-testid-guideline.md` — `...props` pass-through

### Step 2 — Gather requirements (ask the user)

Ask, and wait for answers, in this order. Use `AskUserQuestion` when the
choices are closed.

1. **Component name** — PascalCase (e.g. `Alert`, `Banner`). Confirm it does
   not already exist under `src/components/lv1/`.
2. **Pattern** (`component-api-conventions.md`):
   - **A — Role-based** (single `variant` axis; action components like Button)
   - **B — Tone × Shape** (`variant` tone × `appearance` shape; state
     components like Badge / Callout / Toast)
   - **Form** (no `variant`; error via `isError` boolean)
   - **Display / out-of-pattern** (Separator / Spinner / Text-like)
3. **Compound or flat** (`component-architecture.md` §2). Default **flat**.
   Compound is for wrapping a Radix primitive with multiple parts — if so,
   tell the user the templates cover the flat case and the compound parts
   must be hand-written following `Select` / `Dialog`.
4. **`variant` values** and **`size` values** (default `sm | md | lg`).
5. **Root element / role** — interactive components MUST render a native
   interactive element or a Radix primitive (a11y contract §8). A plain
   `<div>` is only for non-interactive display content.

Do not invent variant vocabulary — subset the canonical lists; extending them
requires a discussion per `component-api-conventions.md`.

### Step 3 — Generate the files

1. Copy each file in [`templates/`](templates/) to its destination, renaming
   `Component.*` → `<Name>.*` and `variants.ts` → `<kebab>.ts`.
2. Substitute every placeholder token (table above).
3. Adapt to the Step 2 answers:
   - Replace the placeholder `variant: { neutral: '' }` with the real
     vocabulary; for Pattern B add the `appearance` axis.
   - Fill CVA classes with **semantic tokens only** (`bg-error`,
     `text-foreground-muted`, …) — never primitive classes (`bg-red-500`).
   - Form components: drop `variant`, add `isError`, wire `FieldContext`
     per `.claude/rules/field-context-guideline.md`.
   - Replace the `it.todo(...)` placeholders in the test with real
     assertions for the component's type (`testing-guideline.md`).
   - Add/rename Storybook `argTypes` and render stories to match the real
     props; keep `Playground` first.
4. Edit `src/components/lv1/index.ts` — add the re-export, keeping the list
   alphabetically sorted.
5. Edit `src/variants/index.ts` — add the variants re-export, alphabetically.

### Step 4 — Strip the scaffold residue

The templates carry placeholders that are **not** meant to survive into a
finished component. After Step 3, grep the generated files and make sure none
of these remain:

```sh
grep -rn 'it\.todo(\|describe each option here\|__ComponentName__\|__componentName__\|__component-name__' \
  src/components/lv1/<Name> src/variants/<kebab>.ts
```

- `__ComponentName__` / `__componentName__` / `__component-name__` — an
  un-substituted placeholder token. Must be **zero** hits.
- `it.todo(...)` — a stub test. Each one must be replaced with a real
  assertion (or deleted if genuinely not applicable) per
  `testing-guideline.md` § Required test cases. A component that ships with
  `it.todo` is an under-tested component — the `check-lv1-companions.mjs`
  hook only checks that the test *file* exists, not that it is meaningful.
- `describe each option here` and similar instruction text inside TSDoc —
  replace with the real per-option documentation.

Do not proceed to Step 5 while any of the above is still present.

### Step 5 — Verify

Run, and fix anything that fails:

```sh
pnpm lint:fix          # auto-format — generated indentation/line-wrapping is
                       # name-length dependent, so always format before linting
pnpm typecheck
pnpm lint              # confirm lint + format are clean
pnpm test --run src/components/lv1/<Name>
```

VRT baselines do not exist yet — the first `pnpm test:vrt` run writes them.
Tell the user to review the generated PNGs before committing
(`vrt-spec-guideline.md` § Re-baselining).

### Step 6 — Add a changeset

A new lv1 component is a **user-facing, additive change**, so it needs a
changeset — CI enforces this (`changeset status`). Create one:

```sh
pnpm changeset         # pick `minor` — a new component is an additive feature
```

Write the summary as `Add <Name> component` (see `api-stability.md` for the
CHANGELOG prefix conventions). This is *not* a `.claude/`-only change, so the
`no-changeset` label does **not** apply here.

### Step 7 — Hand off

Stop before committing. Show the user the file list and tell them to review,
then commit. The project's `Stop` / `PostToolUse` hooks
(`scripts/check-lv1-companions.mjs`, `scripts/check-lv1-export-integrity.mjs`)
will cross-check that the test, VRT spec, and index export are all present.

## Recovery

If generation stops partway, the files written so far are plain new files —
`git status` lists them and `git clean -fd src/components/lv1/<Name>` (plus
removing `src/variants/<kebab>.ts` and reverting the two `index.ts` edits)
fully rolls back. Nothing here is destructive.
