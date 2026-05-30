# audit-coverage

Scan every lv1 component for the required companion files (test / VRT spec /
class-API CSS / `__snapshots__/` baseline / `index.ts` re-export, plus
`*.parity.stories.tsx` / `*.parity.vrt.spec.ts` for classification A/B per
[vrt-spec-guideline](../rules/vrt-spec-guideline.md)) and report any gaps.

This is the **library-wide periodic** counterpart to the existing
edit-trigger / session-end hooks:

| Trigger | Scope | Behaviour |
|---|---|---|
| `scripts/check-lv1-companions.mjs` (PostToolUse hook) | a single edited component | non-blocking warning |
| `scripts/check-lv1-export-integrity.mjs` (Stop hook) | barrel export integrity only | non-blocking warning |
| `/audit-coverage` (this command) | all lv1 components, every required surface | report on demand |

The edit-time hooks fire on a narrow signal; this command takes a snapshot of
the *current* coverage state for the whole lv1 tree whenever the user asks.

## Usage

```
/project:audit-coverage
```

No arguments.

## Flow

1. Run `pnpm audit:coverage` in Bash and capture stdout.
2. Pass the report (markdown) through to the user **verbatim** — do not
   summarise it.
   - The report layout is `summary header → per-component table → missing
     files → recommended actions`. Keep that order; users frequently read
     the table directly.
3. **Only when gaps are present**, append 1–3 lines of "what to do next",
   chosen from the matrix below:
   - **New lv1 added without companions** → suggest `/add-lv1-component`,
     or recheck `scripts/check-lv1-companions.mjs`'s hook output.
   - **Existing lv1 missing the VRT spec** → suggest `/add-vrt-spec`, and
     remind the user that baseline capture must be **manual** (see
     [vrt-spec-guideline](../rules/vrt-spec-guideline.md) "Re-baselining").
   - **No `__snapshots__/` baseline** → suggest
     `pnpm test:vrt -- --grep "{Name}"` to generate `__snapshots__/*.png`
     once, with the "blind update is forbidden" caveat applied.
   - **Barrel export drift** → point at the missing line in
     `src/components/lv1/index.ts` (`export { ... } from './{Name}'`).
   - **`Orphaned exports` section present** → ask the user whether to
     delete the export line or restore the missing directory.
4. **Do not** branch off, run `pnpm test:vrt:update`, or edit files —
   this command stops at "current state observed".

## Direct CLI route

```sh
pnpm audit:coverage          # markdown table (default, human-readable)
pnpm audit:coverage --check  # exit 1 when gaps are found (for CI)
pnpm audit:coverage --json   # AuditReport JSON (machine-readable)
```

`--format=plain` (tab-separated) is also accepted. The JSON schema lives
in [scripts/audit-coverage.d.mts](../../scripts/audit-coverage.d.mts)
(`AuditRow` / `AuditFiles` / `CellState`) and is pinned by
[scripts/__tests__/audit-coverage.test.ts](../../scripts/__tests__/audit-coverage.test.ts).

`--check` also runs in CI as the `audit` job
([.github/workflows/ci.yml](../../.github/workflows/ci.yml)), which pipes the
report into the PR's job summary. This command is the *on-demand display*
counterpart; CI is the *blocking PR gate* — see the hook-vs-CI-gate
responsibility split in [CLAUDE.md](../../CLAUDE.md).

## Reading the report

| Glyph | Meaning |
|---|---|
| ✓ | The expected file / re-export exists |
| ✗ | Expected but missing — action required |
| — | Not expected (parity columns for classification C/D — `Dialog` / `Select` / `Toast` / `Tooltip`) |
| n/a | Cannot be evaluated because the parent column (`tsx`) is `✗` |

When a directory has no `{Name}.tsx`, every other column cascades to `n/a`
to keep the signal-to-noise ratio sane — a WIP scaffold (or a non-component
directory) shouldn't drown the report in red.

## Gotchas

- **lv2 is out of scope** (deferred until post-1.0). When
  `src/components/lv2/` contains at least one component subdirectory, the
  report prints a one-line reminder at the end — the empty placeholder
  state is silent. The bootstrap work is tracked separately.
- **Classification A/B vs C/D** is hard-coded in `PARITY_EXEMPT` at the
  top of [scripts/audit-coverage.mjs](../../scripts/audit-coverage.mjs).
  When a new lv1 is added that is classification C or D, `PARITY_EXEMPT`
  must be updated; otherwise the audit will spuriously flag its parity
  files as missing. The source of truth for the classification is
  [vrt-spec-guideline.md §"Parity stories — when to write one, when to
  skip"](../rules/vrt-spec-guideline.md). Automating this sync from the
  `add-lv1-component` skill is tracked in #306.
- **`pnpm audit:coverage` is read-only**. It never creates files, edits
  files, or updates VRT baselines.
