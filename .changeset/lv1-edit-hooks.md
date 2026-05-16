---
'@yasmro/schatten': patch
---

chore(hook): add `.claude/settings.json` hooks for lv1 edit-time checks

Adds two non-blocking Claude Code hooks so test/vrt-less `lv1` additions
get caught at edit time (AI or human), without relying on post-hoc CI.

- **PostToolUse(Edit|Write|MultiEdit)** → [`scripts/check-lv1-companions.mjs`](scripts/check-lv1-companions.mjs).
  When the edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that
  `{X}.test.tsx` and `{X}.vrt.spec.ts` exist as siblings; surfaces a
  system-reminder via `hookSpecificOutput.additionalContext` if missing.
- **Stop** → [`scripts/check-lv1-export-integrity.mjs`](scripts/check-lv1-export-integrity.mjs).
  Diffs `lv1` component directories against the `from './...'` re-exports
  in `src/components/lv1/index.ts` (both directions, so orphan exports
  are flagged too).

Both scripts read the Claude Code stdin JSON contract
(`tool_input.file_path`, `$CLAUDE_PROJECT_DIR`), exit `0` always, and
emit messages via `additionalContext` so they reach Claude as a
system-reminder. node-only, no shell dependencies — works on Windows.
Complements (does not replace) the existing lefthook pre-commit step.

Repo-tooling change only — no source, no published artifact change.

Closes #107.
