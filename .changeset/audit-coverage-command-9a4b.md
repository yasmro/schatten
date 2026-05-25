---
'@yasmro/schatten': patch
---

chore(tooling): `/audit-coverage` slash command と `scripts/audit-coverage.mjs`
を新設。lv1 全体で test / VRT / class-API CSS (`.st-*` SSOT) /
`__snapshots__/` baseline / `index.ts` re-export の過不足を一括スキャンする。

`scripts/check-lv1-companions.mjs` (PostToolUse, single component) と
`scripts/check-lv1-export-integrity.mjs` (Stop, export integrity only) が
**編集 / セッション単位**で動くのに対し、本コマンドは**任意タイミングで全
lv1** の充足度を markdown 表として出す。区分 A/B のコンポーネントは
`*.parity.stories.tsx` / `*.parity.vrt.spec.ts` も判定対象に含み、区分 C/D
(`Dialog` / `Select` / `Toast` / `Tooltip`) は `vrt-spec-guideline.md`
§"Parity stories — when to write one, when to skip" に従って parity 列を
`—` 表示で除外する。

CLI:

- `pnpm audit:coverage` — markdown 表
- `pnpm audit:coverage --check` — 不足検出時 exit 1 (CI 向け)
- `pnpm audit:coverage --json` — `$schemaVersion: 1` の JSON 出力

公開 API (React props / CSS class / CSS variables / TypeScript types) に
変更なし — 内部 tooling のみ。
