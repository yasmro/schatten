# Design Decision Log

Schatten's `.claude/rules/` codifies *what is true*. This directory captures
*why we chose it* — the trade-off analysis, the alternatives considered, the
context that the codebase and git history alone do not preserve.

## Two entry types

This directory holds **two families of record**, distinguished by filename:

| Family | Naming | Scope | Change frequency |
|---|---|---|---|
| **Foundational ADR** | `ADR-NNNN-<slug>.md` (4-digit, zero-padded) | The small set of project-shaping architecture decisions — adopted tech, distribution model, layer structure. | Rarely change. To reverse one, write a **new** ADR that supersedes it and set the old one's `Status` to `Superseded by ADR-00XX`. |
| **Incremental log** | `YYYY-MM-<slug>.md` | Implementation-level trade-offs — a token shape, a single variant decision, a build tweak. | Added as work happens. |

Both use the same [format](#format) and both are the *why* counterpart to a
`.claude/rules/` *what*. The only difference is the naming and the durability:
foundational ADRs are numbered and near-permanent; incremental logs are dated
and accrete over time. (An ADR is just a decision log that earned a stable
number because the whole project leans on it — CONTRIBUTING.md treats
"decision log" and "ADR" as the same mechanism.)

### Foundational ADR index

| # | Decision | Rule it explains |
|---|---|---|
| [ADR-0001](ADR-0001-shadcn-base.md) | shadcn/ui をベースに採用 | component-architecture |
| [ADR-0002](ADR-0002-npm-distribution.md) | npm パッケージ配布（copy-in ではなく） | api-stability |
| [ADR-0003](ADR-0003-framework-agnostic.md) | Framework-Agnostic 二層 DS | css-api |
| [ADR-0004](ADR-0004-tailwind-v4-cva.md) | Tailwind CSS v4 + CVA（dist は後に脱 Tailwind） | css-api / theme-architecture |
| [ADR-0005](ADR-0005-radix-primitives.md) | Radix UI primitives（型は非継承） | component-architecture / api-stability |
| [ADR-0006](ADR-0006-variant-vocabulary.md) | Variant 語彙統一（Pattern A / B） | component-api-conventions |
| [ADR-0007](ADR-0007-lv1-lv2-layering.md) | lv1 / lv2 二層構造 | component-architecture |
| [ADR-0008](ADR-0008-seasonal-theme.md) | 季節テーマ（Special 軸・8 パレット） | theme-architecture |
| [ADR-0009](ADR-0009-no-polymorphic-as.md) | Polymorphic `as` 不採用（Text 例外） | component-architecture |
| [ADR-0010](ADR-0010-no-layout-primitives.md) | Layout primitives 不採用 | css-api |

## When to add an entry

Add a decision log when a change involves a non-obvious choice that future
contributors (or your future self) might reasonably want to re-litigate:

- New semantic token shapes or naming patterns
- New variant patterns that diverge from existing components
- API choices where multiple defensible options were on the table
- Accessibility / contrast trade-offs that go beyond WCAG minimums
- Theme / Mode / Special partitioning decisions
- Build / bundling / packaging trade-offs — output layout, tree-shaking,
  entry points, `exports`-map shape
- "We considered X but rejected it because Y" — capture both X and Y

Skip an entry when:

- The decision is fully captured by the corresponding `.claude/rules/` file
- It's a bug fix or a mechanical refactor with no real alternatives
- It's already documented in the changeset or PR description in enough
  depth that re-deriving the reasoning is cheap

## Format

```
docs/decisions/YYYY-MM-<kebab-slug>.md   # incremental log
docs/decisions/ADR-NNNN-<kebab-slug>.md  # foundational ADR (numbered)
```

Each entry should include, at minimum:

- Status (Proposed / Accepted / Superseded)
- Related issue / PR / rules
- Context — what problem prompted the decision
- Decision — what was chosen
- Rationale — including alternatives considered and rejected
- Consequences — positive and negative
- Review history — who signed off and when

See [`2026-05-non-interactive-state-tokens.md`](2026-05-non-interactive-state-tokens.md)
for the canonical template.

## Relationship to `.claude/rules/`

| Surface | Audience | Content |
|---|---|---|
| `.claude/rules/*.md` | Future contributors writing code | *What* the convention is — terse, prescriptive |
| `docs/decisions/*.md` | Future contributors questioning the convention | *Why* the convention is — narrative, trade-off-aware |

When updating a rule, link back to the decision log that produced it.
When writing a decision log, link forward to the rule it codifies. The two
surfaces are intentionally coupled but separate — confusing them produces
either over-explained rules or under-explained narratives.
