---
name: refinement-version
description: >-
  Organize the dependency relationships and recommended work order of every
  GitHub issue tied to a version milestone. Produces a dependency graph,
  ordered work "waves", the critical path, and a list of stale references and
  scope inconsistencies to fix. Use this whenever the user names a version or
  milestone and wants to plan it — e.g. "refinement-version v0.9.0", "v0.9.0
  のタスクの依存関係を整理して", "このマイルストーン何から着手する?", "次の
  リリースの着手順を考えたい". Trigger it even when the user only names a
  version and asks a vague "どう進める?" — milestone planning is exactly what
  this skill is for.
---

# refinement-version

Take a version milestone and turn its loose pile of issues into an ordered
plan: what depends on what, what to do first, what the critical path is, and
which issue bodies have drifted out of date.

## When to run

The user gives a version (`v0.9.0`) or a milestone name. Treat
`refinement-version <version>` as the explicit invocation, but also trigger on
any "help me plan this milestone / what order / what depends on what" request
scoped to a version. If the user names a single **issue** instead, that is
`refinement-issue` — hand off.

## Process

### 1. Resolve the milestone

The repo is inferred from the working directory — `gh` commands need no
`--repo` flag. Find the milestone whose title matches the requested version:

```sh
gh api repos/{owner}/{repo}/milestones \
  --jq '.[] | "\(.title) | open:\(.open_issues) closed:\(.closed_issues)"'
```

If there is no exact match, list the milestones and ask the user which one
they meant rather than guessing.

### 2. Fetch every issue in the milestone

```sh
gh issue list --milestone "<version>" --state all --limit 100 \
  --json number,title,state,labels,body
```

Dependency information lives in the **body text**, not the title — pull full
bodies. For long bodies, fetch individually with
`gh issue view <n> --json title,body,labels,milestone`.

### 3. Extract dependency signals

Read each body and look for:

- **Explicit dependency wording** — `依存`, `前提`, `ブロック`, `後続`,
  `〜の後`, `〜より先に`, `→`, "depends on #N", "blocked by #N".
- **Phase / label hints** — `phase-1/2/3` labels, "Phase 2 の分割", meta /
  umbrella issues.
- **Shared artifacts** — two issues touching the same file, type, or export
  imply a soft ordering even when neither says so.
- **Cross-issue references** — `#NNN` mentions, and whether the referenced
  issue is in this milestone, an earlier one, or later.

Distinguish **hard dependencies** (B genuinely cannot start until A lands —
B consumes A's output, type, or API) from **soft dependencies** (doing A
first just makes B cheaper or safer). Both matter, but only hard deps
constrain the order.

### 4. Cross-check the repo's own rules

Schatten keeps cross-cutting constraints in `.claude/rules/` and `CLAUDE.md`.
Read the ones relevant to the milestone's issues. They are the source of
truth when an issue body disagrees with them — bodies written several
versions ago drift (stale variant names, old milestone numbers, renamed
tokens).

### 5. Build the graph and the plan

- Group issues into **independent tracks** — sets with no cross dependency
  that can run in parallel.
- Find the **critical path** — the longest dependency chain. That chain, not
  the issue count, gates the release date. Call out a disproportionately
  large critical-path issue.
- Order the work into **waves**: wave 0 = unblocked + high-leverage (tooling
  or CI that makes every later issue cheaper), later waves = work their
  dependencies unlocked. A skill / CI issue that nothing depends on but that
  speeds everything after it still belongs early.

### 6. Flag adjustments

A milestone refinement is also an audit. Surface, **separately** from the
plan:

- **Stale references** — issue bodies pointing at outdated milestone numbers,
  renamed APIs, superseded decisions.
- **Scope inconsistencies** — a new component that should be folded into an
  existing sweep issue rather than retrofitted later; an issue that belongs
  in a different milestone.
- **Milestone load** — if the critical-path issue is disproportionately large,
  suggest splitting it or pulling items out.

Do **not** silently edit anything — list the adjustments and let the user
decide. To act on one issue, hand off to `refinement-issue`.

## Output format

Present in chat, in this order:

1. **全体像** — one or two sentences on what the milestone is about, plus the
   issue count.
2. **依存グラフ** — an ASCII graph showing tracks, arrows for hard deps, and
   the release / meta issue at the end.
3. **着手順（ウェーブ）** — a table: wave / issues / rationale.
4. **ハード依存** — the must-be-ordered pairs, each with one line of why.
5. **調整提案** — stale references, scope issues, milestone-load concerns.

End by offering the natural next step — usually running `refinement-issue` on
the critical-path issue.

## Schatten-specific context

- Milestones are named `vX.Y.Z`. Each milestone ends with a
  `chore(release): vX.Y.Z …` issue — it depends on everything else and is
  always the last node.
- **Meta / umbrella issues** (`type: meta`) stay open past the milestone —
  they are tracking issues, not work nodes; exclude them from the ordering.
- Work happens on `develop`, released `develop → main`. This does not affect
  ordering but is worth noting in the plan.
- The `.claude/rules/` docs (`component-api-conventions`,
  `component-architecture`, `state-token-guideline`, `theme-architecture`,
  `api-stability`, …) are the contract issue bodies must be reconciled
  against.
