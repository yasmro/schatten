# AGENTS.md

> **What is this file?**
>
> Common entry point for AI coding assistants (Codex / Cursor / Aider / OpenHands, etc.). Claude Code reads [CLAUDE.md](CLAUDE.md) instead — that file is Claude Code-specific. Human contributors read [CONTRIBUTING.md](CONTRIBUTING.md). All three share the same source of truth in [`.claude/rules/`](.claude/rules).

## About this repo

**Schatten** is a design system component library based on [shadcn/ui](https://ui.shadcn.com/), customized for the Schatten brand. Components are built on Radix UI primitives, styled through a raw-CSS `.st-*` class API, and authored with `class-variance-authority` (CVA).

> **Consumers do NOT need Tailwind — and since #317, neither does the
> published CSS.** `dist/schatten.css` is compiled Tailwind-free
> (lightningcss bundles plain-CSS sources) and ships all design tokens,
> the base reset, and the full `.st-*` component class API as
> ready-to-use CSS. Consumers `import '@yasmro/schatten/schatten.css'`
> once and write `<button class="st-btn st-btn--primary">` (or use the
> React layer) — no Tailwind setup, no PostCSS, no build step required
> on the consumer side. Tailwind v4 remains a **dev-only** dependency
> for the Storybook path (stories use Tailwind utilities as layout
> scaffolding) — it never ships.

- **Framework**: React 18 / 19 + TypeScript
- **Styling**: raw CSS `.st-*` class API + CVA (Tailwind CSS v4 is Storybook-only)
- **Primitives**: Radix UI
- **Build / Test / VRT**: tsup + lightningcss / Vitest / Playwright
- **Lint / Format**: Biome
- **Release**: Changesets
- **Package manager**: pnpm

Layout:

```
src/
├── components/lv1/   # Primitive components (Button, Input, …)
├── components/lv2/   # Composite components
├── contexts/         # React contexts (Field, FieldSet, …)
├── core/tokens/      # Primitive & semantic CSS tokens (3-layer system)
├── themes/           # Default and seasonal themes
├── variants/         # CVA variant definitions
├── lib/              # Shared utilities (cn, etc.)
└── docs/             # Storybook docs (Color, Typography, …)
    └── __fixtures__/ # Shared vanilla markup for integration VRT
                      #   (consumed by stories + Playwright specs;
                      #   see .claude/rules/vrt-spec-guideline.md
                      #   §"Shared markup fixtures")
```

## Required reading

Before adding or modifying components, read the guideline files under [`.claude/rules/`](.claude/rules):

- [`component-architecture.md`](.claude/rules/component-architecture.md) — lv1 vs lv2 folder responsibilities, compound vs flat, `asChild` default-off for new lv1s + hard exclusions on form inputs / portal content (complements `component-api-conventions.md` §`asChild`; `buttonVariants` / `textVariants` are the preferred alternative), polymorphic `as` not adopted, unified `FieldContext` consumption, one-way dependency direction (lv1 → lv2 forbidden, no barrel laundering), when an lv1-local `.css` file is allowed, accessibility contract every lv1 must satisfy (role + accessible name + keyboard + `aria-*` state announcements).
- [`component-api-conventions.md`](.claude/rules/component-api-conventions.md) — Public prop API shape: two patterns (**Role-based** for action components like `Button`; **Tone × Shape** for state components like `Badge` / `Callout` / `Toast`), per-component matrix, common props (`size` / `isError` / `isLoading` / `disabled` / `readOnly`), and `asChild` adoption criteria.
- [`storybook-guideline.md`](.claude/rules/storybook-guideline.md) — Story structure (`Playground` story first, group by prop), `argTypes`, English-only labels.
- [`state-token-guideline.md`](.claude/rules/state-token-guideline.md) — 3-layer token system, state semantic tokens (`error` / `success` / `warning` / `info` / `destructive`) and the 5-token shape (`base` / `hover` / `foreground` / `subtle` / `emphasis`).
- [`theme-architecture.md`](.claude/rules/theme-architecture.md) — Mode × Special two-axis theme model, cascade (`Special > Mode > base semantic`), token allowlist, DOM application (`.dark` / `[data-theme=...]`).
- [`field-context-guideline.md`](.claude/rules/field-context-guideline.md) — `FieldContext` integration patterns for form components (Input / Checkbox / Switch / Radio / Select / Textarea).
- [`vrt-spec-guideline.md`](.claude/rules/vrt-spec-guideline.md) — Playwright VRT spec template, story-id mapping, snapshot naming.
- [`testing-guideline.md`](.claude/rules/testing-guideline.md) — Unit test conventions: required cases per component type (form / compound / action / display), BDD naming, typed factories, what NOT to test.
- [`lint-rules-guideline.md`](.claude/rules/lint-rules-guideline.md) — Biome rules added on top of `recommended` (`useExhaustiveDependencies`, `noUnusedImports/Variables`, `useImportType/ExportType`, `noNonNullAssertion`, `noConsole`) and the rationale for each.
- [`api-stability.md`](.claude/rules/api-stability.md) — Public API stability contract effective from v1.0.0: what counts as public API (React props, CSS classes, CSS variables, CVA output), breaking-change policy, and CHANGELOG prefix conventions.
- [`css-api.md`](.claude/rules/css-api.md) — Framework-agnostic CSS class API: prefix `st-`, BEM convention (`.st-{block}` / `--{modifier}` / `__{element}`), state expressed as attributes (`[aria-invalid]` / `[aria-busy]` / `[data-state]` / …), `@layer` order (`theme, base, reset, tokens, components, utilities` — `theme` = the hand-written public-variable registrar, `base` = the vendored preflight, then schatten's 4 layers; doc ⇄ entry.css consistency is CI-enforced by `pnpm check:layer-order`), dark / seasonal cascade with `:where(.dark)`, and the "no color-only signal" rule.
- [`component-testid-guideline.md`](.claude/rules/component-testid-guideline.md) — `data-testid` flows through `...rest` (no `testId` prop); Schatten never auto-emits testids; how to reach Portal-rendered content.

## Main commands

```sh
pnpm dev               # Start Storybook on :6006
pnpm build             # Build JS + CSS into dist/
pnpm test              # Run Vitest
pnpm test:vrt          # Run Playwright VRT
pnpm test:vrt:update   # Update VRT snapshots
pnpm lint              # Biome CI checks
pnpm lint:fix          # Biome auto-fix
pnpm typecheck         # tsc --noEmit
pnpm changeset         # Create a changeset for user-facing changes
pnpm audit:coverage    # Audit lv1 companion-file coverage (test / VRT / .css / __snapshots__ / barrel / CSS API fixture)
```

## Things you MUST NOT do

- **Do not** write primitive color classes (`bg-red-500`, `text-blue-700`, `bg-vermillion-600`, …) directly in JSX or CSS. Use **state semantic tokens** (`bg-error`, `text-error-foreground`, `bg-error-subtle`, `bg-destructive`, …) so light/dark and seasonal themes stay correct. See [state-token-guideline](.claude/rules/state-token-guideline.md).
- **Do not** confuse `destructive` and `error`. They share the same primitive (`red`) but are semantically distinct — `destructive` is for actions (e.g. `<Button variant="destructive">`), `error` is for form/notification state (e.g. `<Input isError>`). See [state-token-guideline](.claude/rules/state-token-guideline.md).
- **Do not** build new components with ad-hoc styles outside the design system. Compose existing `lv1` primitives, or extend the variant definitions in `src/variants/`.
- **Do not** add a new `lv1` / `lv2` component without **Storybook story + Vitest test + VRT spec + class-API CSS** alongside it. Follow the Storybook conventions (Playground story first, group by prop) and place the VRT spec at `ComponentName.vrt.spec.ts` next to the component. The class-API `ComponentName.css` is the SSOT for the `.st-<component>` public class API and is published per-component at `@yasmro/schatten/css/<component>` (#291); `pnpm build:component-css` fails the build when any lv1 dir is missing it. The canonical 7-file shape (variants / tsx / css / stories / test / vrt / index) is captured in [`.claude/skills/add-lv1-component/templates/`](.claude/skills/add-lv1-component/templates) — use those placeholder templates as the reference scaffold even if your tool cannot run the Claude Code skill itself. **Also add a `<section data-component="<slug>">` sample to [`src/docs/__fixtures__/cssApiSamples.html.ts`](src/docs/__fixtures__/cssApiSamples.html.ts) (and the `.tsx` companion)** — `CSSApiDist.vrt.spec.ts` auto-discovers every lv1 with a `.css` and fails without it; `pnpm audit:coverage` and the `check-lv1-companions` hook flag the gap.
- **Do not** create individual stories for every prop value (`Default`, `Secondary`, `Outline` as separate exports). Group them into render stories (`AllVariants`, `Sizes`, `Disabled`, …). See [storybook-guideline](.claude/rules/storybook-guideline.md).
- **Do not** write Storybook `description`, `argTypes`, button labels, etc. in Japanese — Storybook surfaces use **English only**.
- **Do not** ship user-facing changes without a changeset entry. Run `pnpm changeset` and pick the appropriate semver bump. CI enforces this via `changeset status --since=origin/main`. For internal-only PRs (`.github/` workflow changes, docs, test-only additions), apply the `no-changeset` label to skip the check; dependabot PRs are auto-skipped.

## Resource Map

| File | One-liner |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Claude Code-specific tech stack and rule index. |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Human contributor on-ramp — setup, branch / PR conventions, quality gates, changesets. |
| [README.md](README.md) | Public-facing overview, installation, and usage. |
| [.claude/rules/component-architecture.md](.claude/rules/component-architecture.md) | Component-level design choices — lv1 / lv2 folders, compound vs flat, `asChild` default-off for new lv1s + hard exclusions, unified context consumption, one-way dependency direction, lv1-local `.css` criteria, a11y contract (role + accessible name + keyboard + `aria-*`). |
| [.claude/rules/component-api-conventions.md](.claude/rules/component-api-conventions.md) | Public prop API shape — Role-based (Button) vs Tone × Shape (Badge/Callout/Toast) patterns, common props, `asChild` criteria. |
| [.claude/rules/storybook-guideline.md](.claude/rules/storybook-guideline.md) | Storybook conventions — Playground story, `argTypes`, grouping. |
| [.claude/rules/state-token-guideline.md](.claude/rules/state-token-guideline.md) | 3-layer token system, 4-token shape, `destructive` vs `error`. |
| [.claude/rules/theme-architecture.md](.claude/rules/theme-architecture.md) | Mode × Special two-axis theme model, cascade rule, token allowlist. |
| [.claude/rules/field-context-guideline.md](.claude/rules/field-context-guideline.md) | `FieldContext` patterns for form components. |
| [.claude/rules/vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md) | Playwright VRT spec template and snapshot naming. |
| [.claude/rules/testing-guideline.md](.claude/rules/testing-guideline.md) | Unit test conventions — required cases per component type, BDD naming, typed factories. |
| [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md) | Biome rules added on top of `recommended` and the rationale for each. |
| [.claude/rules/api-stability.md](.claude/rules/api-stability.md) | Public API stability contract (effective v1.0.0) — what is public, breaking-change policy, CHANGELOG conventions. |
| [.claude/rules/css-api.md](.claude/rules/css-api.md) | Framework-agnostic CSS class API — `st-` prefix, BEM, attribute-driven state, `@layer` order (`theme, base, reset, tokens, components, utilities`; `pnpm check:layer-order` enforces doc ⇄ entry.css), dark / seasonal cascade. |
| [src/docs/__fixtures__/](src/docs/__fixtures__) | Shared vanilla HTML markup consumed by both a Storybook story and a Playwright `page.setContent()` spec. Split into `.html.ts` (string-only SSOT, Babel-safe) and `.tsx` (React companions). See [vrt-spec-guideline.md §"Shared markup fixtures"](.claude/rules/vrt-spec-guideline.md). |
| [.claude/rules/component-testid-guideline.md](.claude/rules/component-testid-guideline.md) | `data-testid` pass-through policy, Portal content handling, no-auto-testid rule. |
| [.claude/skills/add-lv1-component/](.claude/skills/add-lv1-component) | Claude Code skill that scaffolds a new lv1 — `templates/` doubles as the reference 7-file shape (variants / tsx / css / stories / test / vrt / index) for any AI tool. |

## Maintenance

When you add or remove a file under [`.claude/rules/`](.claude/rules), update **Required reading** and **Resource Map** above so AI agents pick it up automatically. CLAUDE.md's `Guidelines` section also lists the same files — keep both indexes in sync. [CONTRIBUTING.md](CONTRIBUTING.md) is the third surface over these rules (human-facing); it links into them rather than indexing them, but the cross-links between the three files must stay valid — `pnpm check:doc-links` scans all three and fails on a dead link.

When you change a rule that the [`add-lv1-component`](.claude/skills/add-lv1-component) skill depends on (component API conventions, testing, VRT, storybook, token usage), check that the skill's `templates/` still match the updated rule — the templates are a frozen scaffold and do not auto-update. `templates.test.ts` only guards their *syntax*, not their *conformance* to the rules.
