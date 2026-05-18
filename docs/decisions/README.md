# Design Decision Log

Schatten's `.claude/rules/` codifies *what is true*. This directory captures
*why we chose it* — the trade-off analysis, the alternatives considered, the
context that the codebase and git history alone do not preserve.

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
docs/decisions/YYYY-MM-<kebab-slug>.md
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
