---
'@yasmro/schatten': patch
---

chore(tooling): `.claude/skills/prepare-release/` を新設 (closes #133)。
リリース直前に走らせる、非破壊な pre-flight skill。

- 未消費 changeset の inventory + 予測 version の提示
- 非破壊な quality gate (`lint` / `typecheck` / `test --run` / `build` /
  `check:manifest` / `size` / `lint:pkg` / `check:readme`) を一括実行
- **dependency-bump-aware sanity check**: 直近 release tag との `package.json`
  diff で `lucide-react` / `@radix-ui/*` / `tailwindcss` の bump を検出し、
  該当ファミリの parity VRT (`Icon parity` / per-component parity /
  manifest 再生成) を強制実行。PR #282 の Lucide path-inline pin 事故を
  構造的に防ぐ。
- 不可逆操作 (version bump / tag / npm publish / GitHub Release) は
  既存 `/release` slash command に hand-off する。skill 側は一切
  mutate しない (改めて人間の承認を経由する設計)。

公開 API (React props / CSS class / CSS variables / TypeScript types) に
変更なし — 内部 tooling のみ。
