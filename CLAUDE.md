# CLAUDE.md — schatten-ui

Design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand.
When adding or modifying components, follow shadcn/ui conventions (Radix UI + CVA + cn utility) as the baseline.

> Non-Claude-Code AI tools (Codex / Cursor / Aider / OpenHands, etc.) should read [AGENTS.md](AGENTS.md) — a tool-agnostic mirror of this file that also covers main commands, anti-patterns, and a resource map.

## Tech Stack

> **Consumers do NOT need Tailwind.** Schatten is internally built with
> Tailwind CSS v4 CLI, but the published `dist/schatten.css` ships all
> design tokens, the base reset, and the full `.st-*` component class
> API as ready-to-use CSS (since v0.9.0, all 18 lv1 components covered).
> Consumers `import '@yasmro/schatten/schatten.css'` once and write
> `<button class="st-btn st-btn--primary">` (or use the React layer) —
> no Tailwind setup, no PostCSS, no build step required on the consumer
> side. The Tailwind reference below describes Schatten's *internal*
> implementation, not a consumer prerequisite.

- **Base**: shadcn/ui
- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS + class-variance-authority (CVA) — internal; consumers see `.st-*` classes
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
- See [.claude/rules/storybook-guideline.md](.claude/rules/storybook-guideline.md) for Storybook conventions
- See [.claude/rules/field-context-guideline.md](.claude/rules/field-context-guideline.md) for Field context integration patterns
- See [.claude/rules/state-token-guideline.md](.claude/rules/state-token-guideline.md) for state semantic tokens (error / success / warning / info / destructive) and the 4-token shape
- See [.claude/rules/theme-architecture.md](.claude/rules/theme-architecture.md) for the Mode × Special two-axis theme model, cascade, and token allowlist
- See [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md) for VRT spec conventions
- See [.claude/rules/testing-guideline.md](.claude/rules/testing-guideline.md) for unit test conventions (required cases per component type, writing style, typed factories)
- See [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md) for the Biome rules added on top of `recommended` and the rationale for each
- See [.claude/rules/api-stability.md](.claude/rules/api-stability.md) for the public API stability contract (effective from v1.0.0) — what counts as public API across React props, CSS classes, CSS variables, and CVA output, and the breaking-change policy
- See [.claude/rules/css-api.md](.claude/rules/css-api.md) for the framework-agnostic CSS class API — prefix `st-`, BEM convention, attribute-driven state (`[aria-invalid]` / `[aria-busy]` / `[data-state]` / …), `@layer` order, dark / seasonal cascade, and the "no color-only signal" rule
- See [.claude/rules/component-testid-guideline.md](.claude/rules/component-testid-guideline.md) for the `data-testid` pass-through policy and the no-auto-testid rule

## Claude Code skills

`.claude/skills/` holds project-level skills (team-shared, checked into git):

- **[add-lv1-component](.claude/skills/add-lv1-component/SKILL.md)** — scaffolds a new lv1 primitive. Generates the full 7-file set (variants CVA / tsx / css / stories / unit test / VRT spec / index) from placeholder templates, registers the component in [src/components/lv1/index.ts](src/components/lv1/index.ts) / [src/variants/index.ts](src/variants/index.ts) / [src/styles/entry.css](src/styles/entry.css), and follows every `.claude/rules/` guideline. Use it whenever you add a new lv1 — it structurally prevents test-less / VRT-less / css-less additions. Triggered automatically by requests like "add a new lv1 component" or invoked explicitly via the skill name.
- **[add-vrt-spec](.claude/skills/add-vrt-spec/SKILL.md)** — generates a `{Name}.vrt.spec.ts` for an *existing* lv1 component: parses its stories, picks the right template (standard / animation / Portal), and pairs each VRT screenshot test with an `@axe-core/playwright` a11y assertion. When `@axe-core/playwright` is not yet installed (planned for v0.11.0) it emits a VRT-only spec to avoid a broken top-level import. Conforms to [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md).
- **[audit-component](.claude/skills/audit-component/SKILL.md)** — audits one existing lv1 component against every `.claude/rules/*.md` in a single pass. Walks the per-rule checklist (component-architecture / component-api-conventions / css-api / state-token / theme / field-context / storybook / testing / vrt-spec / api-stability / testid / lint-rules) and emits a ✅/⚠️/❌ report anchored at `file:line` with proposed fixes — but never edits files itself. The qualitative per-component counterpart to the structural [/audit-coverage](.claude/commands/audit-coverage.md) command and the edit-time `check-lv1-companions` hook (closes #132).

## Claude Code hooks

`.claude/settings.json` registers two project-level hooks (team-shared, checked into git — distinct from the per-user `.claude/settings.local.json`):

- **PostToolUse(Edit|Write|MultiEdit)** → [scripts/check-lv1-companions.mjs](scripts/check-lv1-companions.mjs). When an edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that `{X}.test.tsx`, `{X}.vrt.spec.ts`, and `{X}.css` exist as siblings. Missing files produce a non-blocking system-reminder so test-less / vrt-less / css-less lv1 additions get caught immediately (the `.css` companion is required because post-#154 it carries the public `.st-*` class API and feeds the per-component CSS subpath at `@yasmro/schatten/css/<slug>`).
- **Stop** → [scripts/check-lv1-export-integrity.mjs](scripts/check-lv1-export-integrity.mjs). At session end, diffs the lv1 component directories against the `from './...'` re-exports in [src/components/lv1/index.ts](src/components/lv1/index.ts). Mismatches surface as a non-blocking system-reminder.

Both hooks are **non-blocking** — they print to `hookSpecificOutput.additionalContext` and always exit 0. They complement (do not replace) the lefthook pre-commit step.

In addition to those hooks, the CI `lint` job runs **`pnpm check:readme`** ([scripts/sync-readme-components.mjs](scripts/sync-readme-components.mjs)) — verifies that the "Available components" list in [README.md](README.md) matches the lv1 directories on disk (filtered to those that ship a `.tsx` + `.css` pair). When a new lv1 is added but the README block is not regenerated, this gate fails the PR with a `current vs expected` diff. Run `pnpm sync:readme` locally to fix the drift.

## Claude Code commands

`.claude/commands/` holds project-level slash commands (team-shared, checked into git):

- **[/audit-coverage](.claude/commands/audit-coverage.md)** — scans every lv1 component for the required companion files (test / VRT spec / class-API CSS / `__snapshots__/` baseline / `index.ts` re-export, plus `*.parity.stories.tsx` / `*.parity.vrt.spec.ts` for classification A/B per [vrt-spec-guideline](.claude/rules/vrt-spec-guideline.md)). Reports the per-component status as a markdown table plus a "missing files" action list, and lists orphaned exports (entries in `src/components/lv1/index.ts` without a matching directory). The library-wide periodic counterpart to the single-component / session-end hooks above; the script underneath is [scripts/audit-coverage.mjs](scripts/audit-coverage.mjs) and is also runnable as `pnpm audit:coverage` (CI flag `--check`, JSON output `--json`).
- **[/review-pr](.claude/commands/review-pr.md)** — self-review the current branch's PR (or the local diff). Emits the canonical 3-section output (2 perspectives × ship verdict × prioritised improvements).
- **[/implement-and-review](.claude/commands/implement-and-review.md)** — single-shot "implement → quality gates → PR → /review-pr" flow for a task or `#<issue>`. PR base is always `develop` (the repo's release flow is `develop → main`).
- **[/release](.claude/commands/release.md)** — consume pending changesets, bump version, tag / npm publish / GitHub Release.
