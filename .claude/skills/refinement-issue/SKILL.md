---
name: refinement-issue
description: >-
  Produce an implementation-ready detailed design for a single GitHub issue —
  file layout, public API and types, implementation approach, test plan, a11y
  contract, dependencies, changeset, and open questions — all reconciled
  against the repo's own convention docs. Use this whenever the user wants to
  flesh out, spec, refine, or "do the detailed design for" a specific issue,
  says "refinement-issue <number>", names an issue and asks to break it down
  or make it ready to implement, or wants an issue's stale body brought up to
  date before work starts.
---

# refinement-issue

Take one GitHub issue and turn it into a design a developer can implement
without further questions: concrete files, concrete API, concrete tests, and
the open questions called out explicitly.

## When to run

The user names a single issue (`refinement-issue 154`, "issue #128 の詳細
設計をして", "#123 を実装できる状態にして"). If the user gives a **version**
instead of an issue, that is `refinement-version` — hand off.

## Process

### 1. Fetch the issue and its context

```sh
gh issue view <n> --json number,title,body,labels,milestone,comments
```

Read the **whole** body and every comment. Schatten issues are usually
well-structured (概要 / 設計内容 / API / DoD) — a detailed design refines and
corrects what is there, it does not start from nothing.

### 2. Reconcile against the repo's conventions

Read the relevant `.claude/rules/` docs and `CLAUDE.md`. Issue bodies drift:
one written several versions ago may use renamed variants, removed props, old
token names, or superseded milestone numbers. Treat the rule docs as the
source of truth and **flag every divergence** you find in the issue body —
e.g. a `variant="accent"` example for a component whose `accent` tone was
removed.

### 3. Explore the codebase

Find the files the work will touch and the closest existing pattern to follow
(a sibling component, an analogous build step). The design must name real
files and mirror real conventions, not invent structure.

### 4. Write the detailed design

Cover the following, adapting to the issue type (component / build / docs /
CI):

- **配置 / ファイル構成** — every file created or changed, by path.
- **公開 API** — props / types / exports, with the TSDoc each public prop
  needs. Pin every choice to the convention docs (naming, the two variant
  patterns, common-prop names).
- **実装方針** — the approach, key decisions, and the reason for each.
- **エッジケース** — the non-obvious paths.
- **テスト計画** — unit (per `testing-guideline`) + VRT (per
  `vrt-spec-guideline`); list the required cases.
- **a11y** — role, accessible name, keyboard, `aria-*`, per the a11y contract
  in `component-architecture` §8.
- **依存・着手順** — what must land first, what this unblocks.
- **changeset / CHANGELOG** — bump level and prefix.
- **未解決の論点** — open questions for the user or designer. Do not paper
  over a real decision; surface it.

### 5. Deliver

1. **Present the full design in chat first** — this is the reviewable
   artifact.
2. List the **stale-body corrections** separately so they are not lost.
3. **Default: update the issue body** with the refined design — the user
   opted into body-update as the default. Confirm once ("本文を更新します")
   before the `gh issue edit`, since it overwrites. For a large design that
   would bury the original intent, post it as a **comment** instead and say
   why.

Editing GitHub is an outward action — fetch the body, edit it precisely
(keep the parts that are still correct), and write the result back with
`gh issue edit <n> --body-file`. Never blind-overwrite a body you have not
read.

## Schatten-specific context

- The `.claude/rules/` contract docs — `component-api-conventions`,
  `component-architecture`, `state-token-guideline`, `theme-architecture`,
  `api-stability`, `field-context-guideline`, `testing-guideline`,
  `vrt-spec-guideline`, `component-testid-guideline`, `lint-rules-guideline`.
  Match the design to whichever apply.
- A new `lv1` component needs `.tsx` + `.stories.tsx` + `.test.tsx` +
  `.vrt.spec.ts` + `index.ts`, plus a re-export in
  `src/components/lv1/index.ts`.
- Changesets: `minor` for additive, `patch` for fixes; pre-1.0 allows
  breaking changes. baseBranch is `develop`.
- If the issue depends on or feeds other issues, note it — and if the user is
  really asking about the whole milestone, suggest `refinement-version`.
