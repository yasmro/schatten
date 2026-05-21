---
'@yasmro/schatten': minor
---

Types: `dist/schatten.manifest.json` を新規 export。`@yasmro/schatten` の公開 CSS surface（`.st-*` クラス・`data-*` / `aria-invalid` / `aria-busy` の state hook 属性・`@theme` 登録済の CSS 変数）を機械可読 JSON として配布する。

- 新しい export エントリ: `@yasmro/schatten/schatten.manifest.json`
- スキーマ: `{ $schemaVersion: 1, package, version, generatedAt, classes, dataAttributes, cssVariables }`。すべての配列はアルファベット昇順ソート + 重複排除
- 内部の API gate として `src/__generated__/schatten.manifest.json` を commit、CI の `manifest` ジョブ (`pnpm check:manifest`) で diff 検知（差分時は集合差分を CI ログに整形出力 + `CSS API:` 付き changeset の要求メッセージ）
- 新スクリプト: `pnpm build:manifest` (build chain に組込)、`pnpm update:manifest` (commit 版を意図的に再生成)、`pnpm check:manifest` (CI gate / ローカル検証)
- `.claude/rules/api-stability.md` の「Manifest as the authoritative API listing (planned)」節を **"shipped"** に書き換え。以降は **manifest が public surface の authoritative listing**、本文書と食い違う場合は manifest を信じる運用に切り替わる

infra-3 着地時点では `classes: []`（sweep-1〜7 が実体を追加していく）。sweep PR が `.st-*` を増やすたび manifest diff が出て、reviewer に変化が見える仕組みが整う。
