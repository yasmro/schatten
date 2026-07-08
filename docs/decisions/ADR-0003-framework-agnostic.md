# ADR-0003: Framework-Agnostic 路線（二層デザインシステム）を採る

- **Status**: Accepted（実現済み — #58 / #154 / #317）
- **Date**: 2026-03 起点（路線決定）/ v0.9.0 実装（#154）/ v0.15.0 で dist 脱 Tailwind（#317）
- **Related**: [#58](https://github.com/yasmro/schatten/issues/58)（framework-agnostic ロードマップ）,
  [#154](https://github.com/yasmro/schatten/issues/154)（`.st-*` クラス API + manifest）,
  [#317](https://github.com/yasmro/schatten/issues/317)（dist 脱 Tailwind） /
  [css-api.md](../../.claude/rules/css-api.md),
  [api-stability.md](../../.claude/rules/api-stability.md),
  [ADR-0002](ADR-0002-npm-distribution.md), [ADR-0004](ADR-0004-tailwind-v4-cva.md)

## Context

React コンポーネントだけを配ると、非 React（vanilla HTML / Astro / Vue …）の消費者は
Schatten のビジュアルを一切使えない。一方、shadcn ベース（[ADR-0001](ADR-0001-shadcn-base.md)）の
素の形は Tailwind ユーティリティを JSX に直書きするため、CSS だけを切り出して配ることが
できなかった。ビジュアル契約（見た目）を React 実装から独立させる必要があった。

## Decision

**二層で提供する:**

1. **React 層** — `<Button variant="primary">…</Button>`
2. **Framework-agnostic な CSS 層** — `<button class="st-btn st-btn--primary">…</button>`

両経路は**同一のクラス文字列を出力し、同一の `dist/schatten.css` に当たり、ピクセル一致**する
（[css-api.md](../../.claude/rules/css-api.md)）。CSS 層は prefix `st-` + BEM + 属性駆動 state
（`[aria-invalid]` / `[data-state]` …）の契約を持ち、公開クラス / state hook / CSS 変数は
`dist/schatten.manifest.json` に列挙され 1.0 で凍結される。

消費者は `import '@yasmro/schatten/schatten.css'` 一発で、Tailwind も PostCSS もビルド工程も
不要でクラス API を使える。

## Rationale

- **検討した他案:**
  - **React のみ配布** — 非 React 経路を最初から諦める。portfolio としての射程が狭い。棄却。
  - **Tailwind を消費者にも要求（`@apply` ソースを配る）** — 消費者に Tailwind セットアップを
    強制し、"framework-agnostic" と言えない。棄却 → これが #317（下記）の動機。
- **CVA 出力を `.st-*` に一本化した効果:** variant タプル → クラス連鎖が決定的になり、CVA 出力
  文字列自体を公開契約にできた（[api-stability.md](../../.claude/rules/api-stability.md) CVA output stability）。

## Consequences

- (+) vanilla / Astro / Vue から同一ビジュアルを利用可能（[framework-agnostic.md](../verification/framework-agnostic.md)）。
- (+) manifest による公開面の機械検証（`pnpm check:manifest`）が成立。
- (−) React 経路と CSS 経路の**視覚的一致を恒久的に保証**する責務が生じる（区分 A/B は parity VRT、
  区分 C/D は manifest + unit + interaction test、[vrt-spec-guideline.md](../../.claude/rules/vrt-spec-guideline.md)）。
- **#317 との連鎖:** この路線を完遂するため dist から Tailwind を除去した（[ADR-0004](ADR-0004-tailwind-v4-cva.md)）。

## Review

- v0.9.0（#154）— `.st-*` クラス API + manifest パイプラインを実装（全 lv1 カバー）。
- v0.15.0（#317）— dist を lightningcss で Tailwind-free コンパイル、路線を完遂。
