# Contributing to Schatten

Thanks for your interest in Schatten. This guide is the **step-by-step
on-ramp for human contributors** — how to set up the repo, make a change,
and get it through the quality gates into a PR.

> **Which doc do I read?** Schatten keeps three entry points, each a
> different *surface* over one source of truth ([`.claude/rules/`](.claude/rules)):
>
> | You are… | Read |
> |---|---|
> | a human contributor | **this file** |
> | using an AI assistant (Codex / Cursor / Aider / …) | [AGENTS.md](AGENTS.md) |
> | using Claude Code | [CLAUDE.md](CLAUDE.md) |
>
> The prescriptive rules themselves live in [`.claude/rules/`](.claude/rules) and
> are the single source of truth. This guide **links into** those rules rather
> than restating them — when the two ever disagree, the rule file wins.

## Getting started

Prerequisites: a current **Node.js** LTS and **[pnpm](https://pnpm.io/)** (the
only supported package manager — the pinned version is in
[`package.json`](package.json)'s `packageManager` field).

```sh
pnpm install
pnpm dev          # Start Storybook on http://localhost:6006
```

Storybook is the primary workbench — every component is developed, documented,
and visually tested there. A high-level tour of the source tree is in
[README.md § Project Structure](README.md#project-structure); AGENTS.md carries
an annotated layout diagram.

## Branch, commit & PR conventions

- **Base your branch on `develop`, not `main`.** Schatten's release flow is
  `develop → main` — feature work lands on `develop`, and a release PR promotes
  `develop` to `main`. A PR opened against `main` will be redirected.
- **Branch name**: `type/<issue>-<slug>`, e.g. `feat/127-icon-component`,
  `fix/301-button-focus-ring`, `chore/159-contributing-docs`. Slug is
  lowercase ASCII + hyphens.
- **Commit message & PR title** follow [Conventional Commits](https://www.conventionalcommits.org/):
  `feat(lv1): …`, `fix(tokens): …`, `docs: …`, `chore(ci): …`. Reference the
  issue with `closes #<n>` in the PR body when the PR resolves it.

## Making a change

### Adding an lv1 component

A new `lv1` primitive is never just a `.tsx`. It ships as a **7-file set** —
`variants` CVA / `.tsx` / `.css` (the public `.st-*` class API) / `.stories.tsx`
/ `.test.tsx` / `.vrt.spec.ts` / `index.ts` — plus a re-export in
[`src/components/lv1/index.ts`](src/components/lv1/index.ts) and a fixture
section in [`src/docs/__fixtures__/cssApiSamples.html.ts`](src/docs/__fixtures__/cssApiSamples.html.ts).

The canonical scaffold lives in
[`.claude/skills/add-lv1-component/templates/`](.claude/skills/add-lv1-component)
— use those placeholder templates as your reference even if you are not running
the Claude Code skill. Before writing code, read the component rules:
[component-architecture.md](.claude/rules/component-architecture.md),
[component-api-conventions.md](.claude/rules/component-api-conventions.md),
[css-api.md](.claude/rules/css-api.md), and
[state-token-guideline.md](.claude/rules/state-token-guideline.md).

`pnpm audit:coverage` reports any missing companion file across every lv1 —
run it locally; the CI `audit` job runs the same check.

### Adding or changing a rule

`.claude/rules/*.md` is the contract, so add a rule only when it expresses an
implementer **correctness** concern (color / a11y / types / API shape) — not an
aesthetic preference. The adoption bar and file format are described in
[lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md). Keep the
AGENTS.md and CLAUDE.md indexes in sync when you add or remove a rule file (see
[§ Keeping the three docs in sync](#keeping-the-three-docs-in-sync)).

### Adding a decision log (ADR)

When a change involves a non-obvious choice a future contributor might
re-litigate (a new token shape, a rejected alternative, an a11y trade-off
beyond WCAG minimums), record it under
[`docs/decisions/`](docs/decisions/README.md). That directory's README defines
*when* to write one and the required format.

## Quality gates

Every PR must pass these before review. Run them locally — they mirror the CI
jobs one-to-one, so a green local run is a green CI run.

| Command | What it guards |
|---|---|
| `pnpm lint` | Biome lint + format, and the custom `no-primitive-color` / doc-link / layer-order checks in the `lint` job. |
| `pnpm typecheck` | `tsc --noEmit` — no type errors. |
| `pnpm test --run` | Vitest unit suite. |
| `pnpm test:vrt` | Playwright visual regression (compare only). |
| `pnpm test:a11y` | `@axe-core/playwright` — zero WCAG 2.1 A/AA violations. |
| `pnpm size` | Per-entry bundle-size budgets in [`.size-limit.json`](.size-limit.json). |
| `pnpm check:manifest` | The public CSS class / variable manifest matches the committed snapshot. |
| `pnpm check:layer-order` | The `@layer` declaration in the dist matches [css-api.md](.claude/rules/css-api.md). |
| `pnpm check:doc-links` | Relative links & heading anchors in the prose docs resolve. |
| `pnpm check:readme` | README's component list matches the lv1 directories on disk. |
| `pnpm audit:coverage` | Every lv1 has its required companion files. |

`pnpm lint:fix` auto-fixes the formatter-safe subset — review its diff before
committing.

## Tests & VRT

Unit-test conventions (required cases per component type, BDD naming, typed
factories, what *not* to test) are in
[testing-guideline.md](.claude/rules/testing-guideline.md). Visual-regression
conventions — the spec template, story-id mapping, and the **re-baselining
discipline** (always run `pnpm test:vrt` and inspect the `*-diff.png` before
`pnpm test:vrt:update`; never blind-update baselines) — are in
[vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md).

> A new `*.vrt.spec.ts` needs its `__snapshots__/` baseline **committed by
> you** — CI runs `pnpm test:vrt` in compare-only mode and does *not* generate
> baselines, so a spec with no committed PNG fails CI on the first run.

## Accessibility

Every component must satisfy the a11y contract in
[component-architecture.md § 8](.claude/rules/component-architecture.md#8-accessibility-contract):
an explicit role, a queryable accessible name, keyboard support, and
`aria-*` state announcements. The target is **WCAG 2.1 AA**, gated by
`pnpm test:a11y` (a blocking CI job). During development, the Storybook
**Accessibility** panel (`@storybook/addon-a11y`) runs the same axe rule set on
the current story.

## Code style

- **Biome** owns lint + format — run `pnpm lint:fix`, don't hand-format.
- **TSDoc on every public prop.** It is the source of truth that IDE hover,
  AI assistants, and Storybook's args table all read.
- **Never write primitive color classes** (`bg-red-500`, `text-gray-700`) in
  component code — use semantic tokens (`bg-error`, `text-foreground-muted`).
  The `no-primitive-color` Biome plugin enforces this.
- Match the surrounding code's naming and idioms. Storybook-facing text
  (labels, `argTypes` descriptions) is **English only**.

The full Biome rule set and its rationale are in
[lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md).

## Changesets & release

Add a changeset for any **user-facing** change (a component, prop, token,
variant, CSS class, or CSS variable — anything on the published surface):

```sh
pnpm changeset
```

Pick the bump level per the breaking-change policy and CHANGELOG prefixes in
[api-stability.md](.claude/rules/api-stability.md#changelog-conventions)
(`patch` for fixes, `minor` for additions; pre-1.0 permits breaking changes).
CI runs `changeset status` and fails a source change that ships without one.

**Internal-only PRs** — `.github/` workflows, docs, `.claude/`, test-only work
— do not touch the published package. Skip the changeset by applying the
**`no-changeset`** label to the PR. Release mechanics are described in
[README.md § Release](README.md#release); the pre-release safety checks live in
the [`prepare-release`](.claude/skills/prepare-release) skill.

## Issue & pull-request templates

Open issues through the [GitHub issue forms](.github/ISSUE_TEMPLATE) (bug
report / feature request). PRs are pre-filled from
[`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) — keep
its checklist honest.

## Keeping the three docs in sync

CONTRIBUTING.md, [AGENTS.md](AGENTS.md), and [CLAUDE.md](CLAUDE.md) are three
surfaces over the same [`.claude/rules/`](.claude/rules) source of truth — they
**link into** the rules rather than copy them, so there is no rule body to keep
in sync. What must stay aligned is the **cross-links and the rule index**: when
you add or remove a `.claude/rules/*.md` file, update the index in AGENTS.md
(*Required reading* + *Resource Map*) and CLAUDE.md (*Guidelines*). Relative
links and anchors in all three files are checked by `pnpm check:doc-links` in
CI, so a renamed rule that leaves a dead link fails the build.

---

Questions that aren't covered here usually have an answer in
[`.claude/rules/`](.claude/rules) or [README.md](README.md). If you're using an
AI assistant, point it at [AGENTS.md](AGENTS.md) (or [CLAUDE.md](CLAUDE.md) for
Claude Code) first.
