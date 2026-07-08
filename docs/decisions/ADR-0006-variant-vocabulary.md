# ADR-0006: Variant 語彙を 2 パターン（Role 単軸 / Tone × Shape 二軸）に統一する

- **Status**: Accepted
- **Date**: 2026-03 起点 / v0.7.0（#108, treatment→appearance / default→neutral の統一）
- **Related**: [#108](https://github.com/yasmro/schatten/issues/108)（語彙統一の実装） /
  [component-api-conventions.md](../../.claude/rules/component-api-conventions.md),
  [state-token-guideline.md](../../.claude/rules/state-token-guideline.md),
  [css-api.md](../../.claude/rules/css-api.md),
  [ADR-0004](ADR-0004-tailwind-v4-cva.md)

## Context

variant 名がコンポーネントごとに漂流すると、AI コーディング支援も人も存在しない variant を
発明する（`<Button variant="success">`、`<Badge variant="primary">` など）。語彙を固定し、
1 コンポーネント = 1 パターンに統一する必要があった。当初は state コンポーネントで
`treatment` / `default` という語が混在していた。

## Decision

**すべての variant を 2 パターンのいずれか一つに割り当てる**（[component-api-conventions.md](../../.claude/rules/component-api-conventions.md)）:

- **Pattern A — Role ベース（単軸）**: `variant` のみ。各値が「役割」（色 × 形を内包）を表す。
  **アクション系（Button）**。例: `primary` / `secondary` / `tertiary` / `destructive` /
  `inverted` / `link`。`appearance` prop は持たない。
- **Pattern B — Tone × Shape（二軸）**: `variant`（tone）× `appearance`（shape）。**state /
  通知系（Badge / Callout / Toast）**。tone = `neutral` / `success` / `error` / `warning` / `info`、
  shape = `solid` / `outline` / `subtle`。

> ⚠️ 「color tone × appearance」は **Pattern B のみ**の話。Button は Pattern A（role 単軸）で
> `appearance` を持たない。両パターンの併記が正確な語彙。

選択規準:「色を視覚的重みと独立に動かしたいか」→ No なら Pattern A、Yes なら Pattern B。
フォーム系（Input 等）はどちらでもなく `variant` を持たず、エラーは `isError` boolean。
`Text` は唯一の例外で `variant` をタイポグラフィ role（`body`/`label`/`heading`）に再利用する。

v0.7.0（#108）で旧語彙を一掃: `treatment` → `appearance`、Pattern B の `default` → `neutral`。

## Rationale

- **Pattern A で色 × 形を分解しない理由:** アクションは少数の既知 role を持ち、分解すると
  `destructive + link` のような無意味な組合せが生まれ、共通ケースのエルゴノミクスも悪化する。
  shadcn の Button も単軸。
- **Pattern B で二軸にする理由:** state は「error solid Toast」と「error subtle Callout」が
  同じ意味で異なる視覚的重みで両立する。各ペアに個別名（`error-solid`…）を付けると語彙が爆発する。
- **`accent` tone を Pattern B に足さなかった理由:** `neutral + solid` と視覚が重複し、区別できる
  role を足さない（2026-05-17 レビューで却下）。ブランド表現はテーマ層（Mode × Special）に委ねる。

## Consequences

- (+) variant 語彙が固定され、存在しない variant の発明を防げる（AI 支援にも効く）。
- (+) CSS 側は Pattern B を double-class セレクタ（`.st-callout--success.st-callout--subtle`）で
  表現し、CVA が side-by-side にクラスを emit する契約と一致（[css-api.md](../../.claude/rules/css-api.md)）。
- (−) 新コンポーネントは必ずどちらかのパターンを選ぶ必要がある。どちらにも収まらない場合は
  「まず議論」（分解の兆候）。
- **将来:** 語彙違反を Biome custom rule で機械化する案は v0.8.0 で検討（未実装、
  [lint-rules-guideline.md](../../.claude/rules/lint-rules-guideline.md)）。

## Review

- 2026-03 — 2 パターン方針を採用（遡及記録）。
- v0.7.0（#108）— `treatment→appearance` / `default→neutral` を一掃し語彙統一を完了。
