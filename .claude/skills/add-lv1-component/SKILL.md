---
name: add-lv1-component
description: >-
  Scaffold a new lv1 primitive component for the Schatten design system.
  Use whenever the user wants to add, create, or generate a new lv1 / primitive
  component (e.g. "add a new lv1 component", "新しいコンポーネントを追加して",
  "lv1 に Alert を作って", "Banner コンポーネントを新設"). Generates the core
  7-file set — variants CVA / tsx / css / stories / unit test / VRT spec /
  index — plus a parity story + VRT spec for 区分 A / B components, in a form
  that complies with every .claude/rules/ guideline, and registers the
  component in src/components/lv1/index.ts. Prevents test-less, VRT-less, or
  css-less component additions structurally.
---

# add-lv1-component

Scaffold a new **lv1 primitive** component. The point of this skill: a new lv1
*always* ships with its unit test and VRT spec, and *always* matches the
project's API conventions — no test-less or convention-drifting additions.

## What it generates

For a component named `Foo`, the **core 7-file set** ships for every new lv1
regardless of classification:

| File | Purpose |
|---|---|
| `src/variants/foo.ts` | CVA variant definition (`fooVariants` + `FooVariants` type) |
| `src/components/lv1/Foo/Foo.tsx` | The component (`forwardRef`, typed `Props`, TSDoc) |
| `src/components/lv1/Foo/Foo.css` | Class-API CSS — the SSOT for `.st-foo` / `.st-foo--<modifier>` rules, also published per-component at `@yasmro/schatten/css/foo` (#291) |
| `src/components/lv1/Foo/Foo.stories.tsx` | Storybook — `Playground` + grouped render stories |
| `src/components/lv1/Foo/Foo.test.tsx` | Vitest unit test |
| `src/components/lv1/Foo/Foo.vrt.spec.ts` | Playwright VRT spec |
| `src/components/lv1/Foo/index.ts` | Folder barrel re-export |

The **parity 2-file set** ships *only for 区分 A / B* components (Step 2's
classification step decides):

| File | Purpose |
|---|---|
| `src/components/lv1/Foo/Foo.parity.stories.tsx` | Storybook — React vs vanilla-HTML side-by-side, proving the `.st-*` class chain reproduces the React render |
| `src/components/lv1/Foo/Foo.parity.vrt.spec.ts` | Playwright VRT spec pinning that parity pixel-identically |

For 区分 C / D components the parity pair is **not** generated; instead the
component name is added to `PARITY_EXEMPT` in
[`scripts/audit-coverage.mjs`](../../../scripts/audit-coverage.mjs) so the
coverage audit does not flag the missing parity files. See
`.claude/rules/vrt-spec-guideline.md` §"Parity stories — when to write one,
when to skip" for the classification.

Plus an edit to **`src/components/lv1/index.ts`** adding the public re-export,
and to **`src/variants/index.ts`** adding the variants re-export, an import
line in **`src/styles/entry.css`** so the new `.css` lands in the integrated
`dist/schatten.css`, and a CSS API fixture sample in
**`src/docs/__fixtures__/cssApiSamples.html.ts`** (plus its `.tsx` companion) so
the framework-agnostic dist-CSS VRT — which auto-discovers every lv1 — has a
`<section>` to render for the new component (Step 3 item 8).

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
- `.claude/rules/vrt-spec-guideline.md` — VRT spec template, story-id mapping,
  and especially §"Parity stories — when to write one, when to skip" (the
  区分 A/B/C/D classification that Step 2 asks for)
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
6. **Parity classification — 区分 A / B / C / D**
   (`vrt-spec-guideline.md` §"Parity stories"). This decides whether the
   parity story + VRT spec are generated (A / B) or the component is added
   to `PARITY_EXEMPT` (C / D). Ask with `AskUserQuestion`, four options:
   - **A — 完全 vanilla 可** — renders + behaves fully in vanilla HTML from
     the `.st-*` chain + HTML/ARIA attributes (Button / Badge / Callout /
     Text / Icon / Separator / Spinner). → parity generated.
   - **B — ブラウザがハンドル** — vanilla-renderable; the browser supplies the
     interactivity (form controls: Input / Textarea / Checkbox / Switch /
     Radio). → parity generated.
   - **C — 静的描画のみ / JS 位置決め要** — static markup is renderable but
     positioning / trigger needs JS (Tooltip). → PARITY_EXEMPT, no parity.
   - **D — JS 必須 / compound / imperative** — open/close/select/focus-trap
     needs Radix-equivalent JS Schatten doesn't ship (Select / Dialog /
     Toast). → PARITY_EXEMPT, no parity.

   **Auto-suggest a default from the earlier answers, but let the user
   confirm.** Heuristic for the pre-selected option:
   - Form pattern (item 2) → suggest **B**.
   - Compound (item 4) or imperative API → suggest **D**.
   - Portal-positioned single surface (Tooltip-like) → suggest **C**.
   - Otherwise (Role-based / Display, flat, fully static) → suggest **A**.

   **When genuinely borderline, default to A / B (generate parity), not
   C / D.** This is the *opposite* of `vrt-spec-guideline.md`'s "default to
   skip" — that doc advises a maintainer auditing an *existing* component,
   where adding parity later is non-breaking churn. Here you are scaffolding
   a *new* lv1, and the failure mode is the expensive one: mis-routing a
   区分 A / B component to C / D means it ships with **no parity VRT**, so a
   React-vs-vanilla pixel drift goes uncaught (the #302 class of silent
   bug). A wrongly-generated parity story is a one-line delete; a missing one
   is an invisible gap. Reach for C / D only when the component genuinely
   cannot render + behave in vanilla HTML (compound / imperative / JS-driven
   positioning); if you can picture a consumer writing the `.st-*` chain by
   hand and expecting it to work, it is A / B.

   **⚠️ Do not conflate this 区分 with the prop-API Pattern from item 2.**
   Both vocabularies use the letters A / B but they are orthogonal: Badge is
   prop-Pattern **B** (Tone × Shape) yet parity-区分 **A**; Input is the
   **Form** pattern yet parity-区分 **B**. Always state the 区分 in full
   ("parity 区分 A") when confirming, so the answer can't be misread as the
   prop pattern.

Do not invent variant vocabulary — subset the canonical lists; extending them
requires a discussion per `component-api-conventions.md`.

### Step 3 — Generate the files

1. Copy each file in [`templates/`](templates/) to its destination, renaming
   `Component.*` → `<Name>.*` and `variants.ts` → `<kebab>.ts`. The `.css`
   template lands at `src/components/lv1/<Name>/<Name>.css` — it is
   the SSOT for the public `.st-<kebab>` class API and is published per-
   component at `@yasmro/schatten/css/<kebab>` (#291), so it is **not
   optional**: the `build:component-css` step fails the build when any
   lv1 dir is missing this file, and the `check-lv1-companions`
   PostToolUse hook warns at edit time.
2. Substitute every placeholder token (table above).
3. Adapt to the Step 2 answers:
   - Replace the placeholder `variant: { neutral: '' }` with the real
     vocabulary; for Pattern B add the `appearance` axis.
   - Fill CVA classes with **semantic tokens only** (`bg-error`,
     `text-foreground-muted`, …) — never primitive classes (`bg-red-500`).
   - In `<Name>.css`, replace each `TODO(<Name>)` marker with real rules
     that mirror the CVA chain (so React and vanilla HTML render
     identically). Author per `.claude/rules/css-api.md` — raw CSS +
     `var(--color-*)`, no `@apply`, state via attribute selectors.
   - Form components: drop `variant`, add `isError`, wire `FieldContext`
     per `.claude/rules/field-context-guideline.md`.
   - Replace the `it.todo(...)` placeholders in the test with real
     assertions for the component's type (`testing-guideline.md`).
   - Add/rename Storybook `argTypes` and render stories to match the real
     props; keep `Playground` first.
4. Edit `src/components/lv1/index.ts` — add the re-export, keeping the list
   alphabetically sorted.
5. Edit `src/variants/index.ts` — add the variants re-export, alphabetically.
6. Edit `src/styles/entry.css` — add
   `@import "../components/lv1/<Name>/<Name>.css";` in the
   "Component CSS" block so the new rules land in the integrated
   `dist/schatten.css` alongside the per-component subpath.
7. **Branch on the parity 区分 from Step 2 item 6:**
   - **区分 A / B** — also copy the two parity templates
     (`Component.parity.stories.tsx.template` →
     `src/components/lv1/<Name>/<Name>.parity.stories.tsx`,
     `Component.parity.vrt.spec.ts.template` →
     `src/components/lv1/<Name>/<Name>.parity.vrt.spec.ts`), substitute the
     placeholder tokens, and fill in the `TODO(<Name>)` markers: mirror every
     variant × size of the React component with the hand-written vanilla
     `.st-*` chain, inlining any icon SVG and copying the same a11y
     attributes (`aria-hidden` on decorative SVG, `aria-busy` / `disabled` on
     state). `Button.parity.stories.tsx` is the reference.
   - **区分 C / D** — do **not** copy the parity templates. Instead edit
     [`scripts/audit-coverage.mjs`](../../../scripts/audit-coverage.mjs):
     insert `<Name>` into the `PARITY_EXEMPT` set **in alphabetical order**
     (the set is `new Set(['Dialog', 'Select', 'Toast', 'Tooltip'])` today —
     e.g. adding `Popover` yields
     `new Set(['Dialog', 'Popover', 'Select', 'Toast', 'Tooltip'])`). This is
     the only edit to that file — the audit logic is unchanged.
8. **Register the CSS API fixture sample (mandatory — CI-enforced, easy to
   miss).** [`CSSApiDist.vrt.spec.ts`](../../../src/docs/CSSApiDist.vrt.spec.ts)
   auto-discovers every `src/components/lv1/<Name>/` dir that has both
   `<Name>.tsx` and `<Name>.css` (mirroring `scripts/lv1-slugs.mjs`) and
   **requires** a matching `<section data-component="<kebab>">` in the shared
   vanilla-HTML fixture — without it the dist-CSS VRT throws
   `CSSApiDist: no <section data-component="<kebab>"> in vanillaHtml`. Neither
   the `check-lv1-companions` hook nor `pnpm audit:coverage` catches this (both
   only check the component-local 7 files), so the gap is invisible until VRT
   runs. Add the sample to BOTH fixture files, kept in sync:
   - **`src/docs/__fixtures__/cssApiSamples.html.ts`** — append a
     `<section class="cssapi-fixture__sample" data-component="<kebab>">` (a
     `cssapi-fixture__sample-label` span + the hand-written `.st-<kebab>*`
     markup). This string is the SSOT the dist test reads, so it is the
     **REQUIRED** half. Mirror an existing section — `card` / `skeleton` are
     the simplest references; for a 区分 C/D portal/JS component copy how
     `tooltip` / `select` / `dialog` / `toast` show static markup only.
   - **`src/docs/__fixtures__/cssApiSamples.tsx`** — add the matching
     `<section data-component="<kebab>">` rendering the real `<Name>` (import it
     into the named-import block, alphabetically). This keeps the
     `parity-comparison` story's React column consistent with the vanilla
     column. A 区分 C/D component that portal-mounts may be omitted from the
     React column (see the file header) but still needs the `.html.ts` section.
   Keep the markup minimal and **deterministic** — no network images (use
   initials / a fallback / an inline data-URI), since the dist test screenshots
   the section with `waitUntil: 'load'`.

### Step 4 — Strip the scaffold residue

The templates carry placeholders that are **not** meant to survive into a
finished component. After Step 3, grep the generated files and make sure none
of these remain. The `src/components/lv1/<Name>` glob already covers the
parity files when they were generated (区分 A / B):

```sh
grep -rn 'it\.todo(\|describe each option here\|TODO(\|__ComponentName__\|__componentName__\|__component-name__' \
  src/components/lv1/<Name> src/variants/<kebab>.ts
```

- `__ComponentName__` / `__componentName__` / `__component-name__` — an
  un-substituted placeholder token. Must be **zero** hits.
- `it.todo(...)` — a stub test. Each one must be replaced with a real
  assertion (or deleted if genuinely not applicable) per
  `testing-guideline.md` § Required test cases. A component that ships with
  `it.todo` is an under-tested component — the `check-lv1-companions.mjs`
  hook only checks that the test *file* exists, not that it is meaningful.
- `TODO(<Name>)` — a stub CSS rule from `Component.css.template`. Each
  one must be filled in with a real rule (or the whole modifier deleted
  if your CVA does not have that axis value). The build does not detect
  empty rule bodies; this grep is the structural check.
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
pnpm build:component-css   # the new per-component CSS subpath (#291) — fails
                           # loudly if `<Name>.css` is missing
```

VRT baselines do not exist yet — the first `pnpm test:vrt` run writes them.
The new fixture section (Step 3 item 8) also shifts **three existing docs
baselines**, which must be regenerated in the same change:

- `src/docs/__snapshots__/dist-css-<slug>-{light,dark}.png` — new, the
  per-component dist render.
- `src/docs/__snapshots__/dist-schatten-css-{light,dark}.png` — the integrated
  reference grew by one section.
- `src/docs/__snapshots__/parity-comparison-light.png` — the React≡vanilla
  story grew by one section.

Run plain `pnpm test:vrt` **first** and confirm the only failures are the new
component's own stories plus those three docs baselines; open each
`*-diff.png` to verify the change is purely additive (a column reflow would
light up unrelated rows — that would be a regression, not a clean add). Only
then re-baseline with `pnpm test:vrt:update` (scope with `--grep '<Name>'` and
`--grep 'CSS API'`). Tell the user to review the generated PNGs before
committing (`vrt-spec-guideline.md` § Re-baselining).

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
