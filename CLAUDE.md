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

- See [.claude/rules/storybook-guideline.md](.claude/rules/storybook-guideline.md) for Storybook conventions
- See [.claude/rules/field-context-guideline.md](.claude/rules/field-context-guideline.md) for Field context integration patterns
- See [.claude/rules/state-token-guideline.md](.claude/rules/state-token-guideline.md) for state semantic tokens (error / success / warning / info / destructive) and the 4-token shape
- See [.claude/rules/spacing-conventions.md](.claude/rules/spacing-conventions.md) for the canonical `gap` / `padding` / `margin` scale, half-scale rules, and the consumer-vs-implementer distinction
- See [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md) for VRT spec conventions
- See [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md) for the Biome rules added on top of `recommended` and the rationale for each
