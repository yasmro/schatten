# CLAUDE.md — schatten-ui

Design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand.
When adding or modifying components, follow shadcn/ui conventions (Radix UI + CVA + cn utility) as the baseline.

> Non-Claude-Code AI tools (Codex / Cursor / Aider / OpenHands, etc.) should read [AGENTS.md](AGENTS.md) — a tool-agnostic mirror of this file that also covers main commands, anti-patterns, and a resource map.

## Tech Stack

- **Base**: shadcn/ui
- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS + class-variance-authority (CVA)
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
- See [.claude/rules/component-testid-guideline.md](.claude/rules/component-testid-guideline.md) for the `data-testid` pass-through policy and the no-auto-testid rule

## Claude Code skills

`.claude/skills/` holds project-level skills (team-shared, checked into git):

- **[add-lv1-component](.claude/skills/add-lv1-component/SKILL.md)** — scaffolds a new lv1 primitive. Generates the full 6-file set (variants CVA / tsx / stories / unit test / VRT spec / index) from placeholder templates, registers the component in [src/components/lv1/index.ts](src/components/lv1/index.ts) and [src/variants/index.ts](src/variants/index.ts), and follows every `.claude/rules/` guideline. Use it whenever you add a new lv1 — it structurally prevents test-less / VRT-less additions. Triggered automatically by requests like "add a new lv1 component" or invoked explicitly via the skill name.

## Claude Code hooks

`.claude/settings.json` registers two project-level hooks (team-shared, checked into git — distinct from the per-user `.claude/settings.local.json`):

- **PostToolUse(Edit|Write|MultiEdit)** → [scripts/check-lv1-companions.mjs](scripts/check-lv1-companions.mjs). When an edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that `{X}.test.tsx` and `{X}.vrt.spec.ts` exist as siblings. Missing files produce a non-blocking system-reminder so test/vrt-less lv1 additions get caught immediately.
- **Stop** → [scripts/check-lv1-export-integrity.mjs](scripts/check-lv1-export-integrity.mjs). At session end, diffs the lv1 component directories against the `from './...'` re-exports in [src/components/lv1/index.ts](src/components/lv1/index.ts). Mismatches surface as a non-blocking system-reminder.

Both hooks are **non-blocking** — they print to `hookSpecificOutput.additionalContext` and always exit 0. They complement (do not replace) the lefthook pre-commit step.
