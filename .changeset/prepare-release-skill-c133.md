---
'@yasmro/schatten': patch
---

chore(tooling): `.claude/skills/prepare-release/` を新設 (closes #133)。
リリース直前に走らせる、非破壊な pre-flight skill とその執行装置一式。

- `.claude/skills/prepare-release/SKILL.md`: 5 step の対話 skill 本体。
  - 未消費 changeset の inventory + 予測 version の提示
  - 非破壊な quality gate (`lint` / `typecheck` / `test --run` / `build` /
    `check:manifest` / `size` / `lint:pkg` / `check:readme`) を一括実行
  - **dependency-bump-aware sanity check**: 直近 release tag との
    `package.json` diff で `lucide-react` / `@radix-ui/*` / `tailwindcss`
    の bump を検出し、該当ファミリの parity VRT (`Icon parity` /
    Checkbox / Radio / Separator / Switch parity / manifest 再生成) を
    強制実行。Radix の Tooltip / Dialog / Toast / Select (区分 C/D —
    parity story 無し) と `react-slot` は manual 検証行で別立て扱い。
    PR #282 の Lucide path-inline pin 事故を構造的に防ぐ。
  - 不可逆操作 (version bump / tag / npm publish / GitHub Release) は
    既存 `/release` slash command に hand-off。skill 側は一切 mutate
    しない (人間の承認境界を保つ設計)。
- `.claude/skills/prepare-release/grep.test.ts`: SKILL.md 内の parity
  grep パターンと、ディスク上の `*.parity.stories.tsx` /
  `*.parity.vrt.spec.ts` の整合を CI で pin する Vitest gate。grep に
  実在しない component 名が紛れ込んで Playwright `--grep` が 0 マッチで
  exit 0 を返す (= false greenlight) のを防ぐ。
- `.claude/rules/api-stability.md`: "Visual-contract-affecting dependencies"
  セクションを新設。`lucide-react` / `@radix-ui/*` / `react-slot` /
  `tailwindcss` の SSOT 化。今後同種の dep が増えたとき skill / 他 tooling
  はこのテーブルを参照する。

公開 API (React props / CSS class / CSS variables / TypeScript types) に
変更なし — 内部 tooling のみ。
