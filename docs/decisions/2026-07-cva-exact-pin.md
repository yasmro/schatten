# `class-variance-authority` は exact pin（`0.7.1`）で固定する

- **Status**: Accepted
- **Related**: [#170](https://github.com/yasmro/schatten/issues/170)（API stability
  発効 — reconcile pass で言行不一致として検出）/
  [api-stability.md § CVA output stability](../../.claude/rules/api-stability.md#cva-output-stability)

## Context

api-stability.md は「CVA の出力文字列（`buttonVariants({ variant: 'primary' })`
が返すクラスチェーン）は公開 API であり、v1.0 で cva を pin せよ」と要求して
いたが、実際の `package.json` は `^0.7.1`（caret）のままだった — #170 の
reconcile pass で検出した言行不一致。

cva は `peerDependencies` ではなく **`dependencies`** に載っているため、caret の
ままだと **consumer の lockfile が Schatten のテストした版と異なる 0.7.x patch を
解決しうる**。cva が join / dedupe / 順序の挙動を patch で変えた場合、Schatten の
リリースを一切経ずに consumer 側の出力クラスチェーンが動く — CVA output
stability 契約の穴になる。

## Decision

**`0.7.1` に exact pin する**（v1.0.0 から）。判断材料:

- npm 上の 0.7.x は `0.7.0` / `0.7.1` のみ（canary 除く）で、lockfile も
  `0.7.1` を解決済み — **pin 実施時点で挙動変化はゼロ**。純粋な将来防御。
- 「出力が deterministic な契約 / 検査に食い込む依存は exact pin」という既存
  規律（`vite` / `lightningcss` / `@biomejs/biome` / `sonner`）と同型。

## Consequences

- 以後の cva バンプは dependabot の明示的 PR として届く。**レビュー時は
  「出力クラスチェーンの形が変わるか」を必ず確認**し、変わるなら `major`
  （api-stability.md § CVA output stability）。変わらない patch / minor は
  通常の dependabot triage（squash、visual-contract 依存に準ずる注意）で可。
- pin 解除（caret へ戻す）は契約の穴を再導入するため不可。緩めたい場合は
  cva を `peerDependencies` へ昇格する設計変更として別途議論する
  （api-stability.md § Peer dependency ranges が既にその場合のルールを規定）。
