# CLAUDE.md — schatten-ui

Design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand.
When adding or modifying components, follow shadcn/ui conventions (Radix UI + CVA + cn utility) as the baseline.

> Non-Claude-Code AI tools (Codex / Cursor / Aider / OpenHands, etc.) should read [AGENTS.md](AGENTS.md) — a tool-agnostic mirror of this file that also covers main commands, anti-patterns, and a resource map.

## Tech Stack

> **Consumers do NOT need Tailwind — and since #317, neither does the
> published CSS.** `dist/schatten.css` is compiled Tailwind-free
> (lightningcss bundles plain-CSS sources: raw tokens + the hand-written
> `@layer theme` registrar + vendored preflight + component `.st-*`
> rules) and ships all design tokens, the base reset, and the full
> `.st-*` component class API as ready-to-use CSS (since v0.9.0, all lv1
> components covered). Consumers `import '@yasmro/schatten/schatten.css'`
> once and write `<button class="st-btn st-btn--primary">` (or use the
> React layer) — no Tailwind setup, no PostCSS, no build step required on
> the consumer side. Tailwind v4 remains a **dev-only** dependency for
> the Storybook path (`src/styles/globals.css` via `@tailwindcss/vite`;
> stories use Tailwind utilities as layout scaffolding) — it never ships.

- **Base**: shadcn/ui
- **Styling**: raw CSS `.st-*` class API + class-variance-authority (CVA); Tailwind CSS v4 is Storybook-only
- **Framework**: React + TypeScript
- **Primitives**: Radix UI
- **Storybook**: Component documentation & visual testing
- **Build**: tsup
- **Lint / Format**: Biome
- **Test**: Vitest
- **VRT**: Playwright
- **Git Hooks**: lefthook
- **Release**: Changesets
- **Package Manager**: pnpm

## Project Structure

- `src/components/lv1/` — Primitive components (Button, etc.)
- `src/variants/` — CVA variant definitions
- `src/lib/` — Shared utilities

## Guidelines

- See [.claude/rules/component-architecture.md](.claude/rules/component-architecture.md) for component-level design choices (lv1 vs lv2 folders, compound vs flat, `asChild` default-off for new lv1s + hard exclusions on form inputs / portal content, polymorphic `as` not adopted, unified context consumption, one-way dependency direction, when an lv1-local `.css` file is allowed, a11y contract every lv1 must satisfy — role + accessible name + keyboard + `aria-*` wiring)
- See [.claude/rules/component-api-conventions.md](.claude/rules/component-api-conventions.md) for the public prop API shape — the two patterns (Role-based / Tone × Shape), per-component matrix, common props (`size` / `isError` / `isLoading` / `disabled` / `readOnly`), and `asChild` criteria
- See [.claude/rules/storybook-guideline.md](.claude/rules/storybook-guideline.md) for Storybook conventions, including the **Story title taxonomy (IA)** — the fixed 7-group docs information architecture (`Welcome` / `Getting Started` / `Tokens` / `Theming` / `CSS API` / `Patterns` / `Components`) that is the single source of truth for where a new docs page belongs (docs IA spike #320)
- See [.claude/rules/field-context-guideline.md](.claude/rules/field-context-guideline.md) for Field context integration patterns
- See [.claude/rules/state-token-guideline.md](.claude/rules/state-token-guideline.md) for state semantic tokens (error / success / warning / info / destructive) and the 4-token shape
- See [.claude/rules/theme-architecture.md](.claude/rules/theme-architecture.md) for the Mode × Special two-axis theme model, cascade, and token allowlist
- See [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md) for VRT spec conventions
- See [.claude/rules/testing-guideline.md](.claude/rules/testing-guideline.md) for unit test conventions (required cases per component type, writing style, typed factories)
- See [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md) for the Biome rules added on top of `recommended` and the rationale for each
- See [.claude/rules/api-stability.md](.claude/rules/api-stability.md) for the public API stability contract (effective from v1.0.0) — what counts as public API across React props, CSS classes, CSS variables, and CVA output, and the breaking-change policy
- See [.claude/rules/css-api.md](.claude/rules/css-api.md) for the framework-agnostic CSS class API — prefix `st-`, BEM convention, attribute-driven state (`[aria-invalid]` / `[aria-busy]` / `[data-state]` / …), `@layer` order (`theme, base, reset, tokens, components, utilities` — `pnpm check:layer-order` enforces the doc ⇄ [src/styles/entry.css](src/styles/entry.css) declaration match), dark / seasonal cascade, and the "no color-only signal" rule. Integration-level VRT consumes shared markup from [src/docs/__fixtures__/](src/docs/__fixtures__) (`.html.ts` strings + `.tsx` React companions) — see [vrt-spec-guideline.md §"Shared markup fixtures"](.claude/rules/vrt-spec-guideline.md)
- See [.claude/rules/component-testid-guideline.md](.claude/rules/component-testid-guideline.md) for the `data-testid` pass-through policy and the no-auto-testid rule

## Claude Code skills

`.claude/skills/` holds project-level skills (team-shared, checked into git):

- **[add-lv1-component](.claude/skills/add-lv1-component/SKILL.md)** — scaffolds a new lv1 primitive. Generates the full 7-file set (variants CVA / tsx / css / stories / unit test / VRT spec / index) from placeholder templates, registers the component in [src/components/lv1/index.ts](src/components/lv1/index.ts) / [src/variants/index.ts](src/variants/index.ts) / [src/styles/entry.css](src/styles/entry.css), and follows every `.claude/rules/` guideline. Use it whenever you add a new lv1 — it structurally prevents test-less / VRT-less / css-less additions. Triggered automatically by requests like "add a new lv1 component" or invoked explicitly via the skill name.
- **[add-vrt-spec](.claude/skills/add-vrt-spec/SKILL.md)** — generates a `{Name}.vrt.spec.ts` for an *existing* lv1 component: parses its stories, picks the right template (standard / animation / Portal), and pairs each VRT screenshot test with an `@axe-core/playwright` a11y assertion (WCAG 2.1 A/AA, pinned via `.withTags`). `@axe-core/playwright` ships as a devDependency since v0.11.0 (#147), so the full version is the default; the skill keeps a VRT-only fallback for the case the dep is ever absent (a top-level axe import would otherwise wipe out the screenshot tests in the same file too). Conforms to [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md).
- **[audit-component](.claude/skills/audit-component/SKILL.md)** — audits one existing lv1 component against every `.claude/rules/*.md` in a single pass. Walks the per-rule checklist (component-architecture / component-api-conventions / css-api / state-token / theme / field-context / storybook / testing / vrt-spec / api-stability / testid / lint-rules) and emits a ✅/⚠️/❌ report anchored at `file:line` with proposed fixes — but never edits files itself. The qualitative per-component counterpart to the structural [/audit-coverage](.claude/commands/audit-coverage.md) command and the edit-time `check-lv1-companions` hook (closes #132).
- **[prepare-release](.claude/skills/prepare-release/SKILL.md)** — pre-release sanity checks before [`/release`](.claude/commands/release.md) is run. Inventories pending changesets and predicts the next version, runs the full non-mutating quality gate (`lint` / `typecheck` / `test` / `build` / `check:manifest` / `size` / `lint:pkg` / `check:readme`), and — most importantly — diffs `package.json` against the last released tag to detect `lucide-react` / `@radix-ui/*` / `tailwindcss` bumps. For each detected family it runs the matching parity VRT (`Icon parity` / per-component parity / manifest re-check) so a dependency upgrade can never silently break the visual contract (PR [#282](https://github.com/yasmro/schatten/pull/282) の学び). The skill is **non-mutating** — it never bumps version, never runs `test:vrt:update`, never calls `/release` automatically. Use whenever you ask "次のリリース準備して" or "release 大丈夫?".

## Claude Code hooks

`.claude/settings.json` registers two project-level hooks (team-shared, checked into git — distinct from the per-user `.claude/settings.local.json`):

- **PostToolUse(Edit|Write|MultiEdit)** → [scripts/check-lv1-companions.mjs](scripts/check-lv1-companions.mjs). When an edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that `{X}.test.tsx`, `{X}.vrt.spec.ts`, and `{X}.css` exist as siblings, and — once the `.css` exists — that a `<section data-component="<slug>">` for it exists in [src/docs/__fixtures__/cssApiSamples.html.ts](src/docs/__fixtures__/cssApiSamples.html.ts) (the CSS API fixture that `CSSApiDist.vrt.spec.ts` auto-discovers every lv1 against — a missing section throws in the dist-CSS VRT). Missing files / fixture produce a non-blocking system-reminder so test-less / vrt-less / css-less / fixture-less lv1 additions get caught immediately (the `.css` companion is required because post-#154 it carries the public `.st-*` class API and feeds the per-component CSS subpath at `@yasmro/schatten/css/<slug>`).
- **Stop** → [scripts/check-lv1-export-integrity.mjs](scripts/check-lv1-export-integrity.mjs). At session end, diffs the lv1 component directories against the `from './...'` re-exports in [src/components/lv1/index.ts](src/components/lv1/index.ts). Mismatches surface as a non-blocking system-reminder.

Both hooks are **non-blocking** — they print to `hookSpecificOutput.additionalContext` and always exit 0. They complement (do not replace) the lefthook pre-commit step.

### Hook (non-blocking) vs CI gate (blocking) — responsibility split

The companion-coverage concern is defended at **two timings**, deliberately overlapping:

- **Edit / session unit (the two hooks above) — non-blocking, immediate feedback.** `check-lv1-companions.mjs` (per edited component) and `check-lv1-export-integrity.mjs` (export integrity) warn only. They are **kept, not retired** — their value is catching a gap *while you are editing*, before a PR even exists.
- **PR unit (the CI `audit` job) — blocking, whole-tree integrity gate.** The `audit` job in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs **`pnpm audit:coverage --check`** ([scripts/audit-coverage.mjs](scripts/audit-coverage.mjs)) across every lv1 and fails the PR when a required companion (test / VRT spec / class-API CSS / `__snapshots__/` baseline / `index.ts` re-export / CSS API fixture section, plus parity series for classification A/B and a non-screenshot Playwright interaction test for classification C/D) is missing or an export is orphaned. The full report (including "Recommended actions") is written to the PR's job summary. Currently `continue-on-error: true` (Phase 1 observation, see [#307](https://github.com/yasmro/schatten/issues/307)); Phase 2 removes that and adds `audit` to `develop`'s required checks.

The two layers **intentionally report the same gap at different timings** — this is multi-layer defense, not redundancy. Reproduce the CI gate locally with `pnpm audit:coverage` (no `--check`); the output is identical.

In addition to those hooks, the CI `lint` job runs **`pnpm check:readme`** ([scripts/sync-readme-components.mjs](scripts/sync-readme-components.mjs)) — verifies that the "Available components" list in [README.md](README.md) matches the lv1 directories on disk (filtered to those that ship a `.tsx` + `.css` pair). When a new lv1 is added but the README block is not regenerated, this gate fails the PR with a `current vs expected` diff. Run `pnpm sync:readme` locally to fix the drift.

## Claude Code commands

`.claude/commands/` holds project-level slash commands (team-shared, checked into git):

- **[/audit-coverage](.claude/commands/audit-coverage.md)** — scans every lv1 component for the required companion files (test / VRT spec / class-API CSS / `__snapshots__/` baseline / `index.ts` re-export / CSS API fixture section in `src/docs/__fixtures__/cssApiSamples.html.ts`, plus `*.parity.stories.tsx` / `*.parity.vrt.spec.ts` for classification A/B per [vrt-spec-guideline](.claude/rules/vrt-spec-guideline.md)). Reports the per-component status as a markdown table plus a "missing files" action list, and lists orphaned exports (entries in `src/components/lv1/index.ts` without a matching directory). The library-wide periodic counterpart to the single-component / session-end hooks above; the script underneath is [scripts/audit-coverage.mjs](scripts/audit-coverage.mjs) and is also runnable as `pnpm audit:coverage` (CI flag `--check`, JSON output `--json`).
- **[/review-pr](.claude/commands/review-pr.md)** — self-review the current branch's PR (or the local diff). Emits the canonical 3-section output (2 perspectives × ship verdict × prioritised improvements).
- **[/implement-and-review](.claude/commands/implement-and-review.md)** — single-shot "implement → quality gates → PR → /review-pr" flow for a task or `#<issue>`. PR base is always `develop` (the repo's release flow is `develop → main`).
- **[/release](.claude/commands/release.md)** — consume pending changesets, bump version, tag / npm publish / GitHub Release.
