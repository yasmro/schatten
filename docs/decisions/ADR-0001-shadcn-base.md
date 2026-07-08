# ADR-0001: shadcn/ui をベースに採用する

- **Status**: Accepted
- **Date**: 2026-03（発足期。git 履歴以前の判断を遡及記録）
- **Related**: #158（本 ADR 群） / [CLAUDE.md](../../CLAUDE.md)（冒頭）,
  [component-architecture.md](../../.claude/rules/component-architecture.md),
  [ADR-0004](ADR-0004-tailwind-v4-cva.md)（Tailwind + CVA）,
  [ADR-0005](ADR-0005-radix-primitives.md)（Radix）

## Context

Schatten は Schatten ブランド向けのデザインシステムコンポーネントライブラリを、
ゼロから設計するのではなく確立された下地の上に構築する必要があった。純粋な自作は
アクセシビリティ・キーボード操作・variant 設計・トークン構成といった「解けた問題」を
再発明することになり、portfolio / 学習目的に対してもコストが見合わない。

## Decision

**[shadcn/ui](https://ui.shadcn.com/) の規約を baseline として採用する。**
コンポーネント設計の既定は「shadcn/ui + Radix conventions」とし、明示的に上書きした
点だけを `.claude/rules/` に記録する（[component-architecture.md](../../.claude/rules/component-architecture.md)
冒頭「Anything not covered here defaults to shadcn/ui + Radix conventions」）。

技術的帰結として shadcn の 3 本柱をそのまま引く:

- **Radix UI**（プリミティブ / a11y）→ [ADR-0005](ADR-0005-radix-primitives.md)
- **CVA**（variant 定義）→ [ADR-0004](ADR-0004-tailwind-v4-cva.md)
- **`cn` ユーティリティ**（クラス合成）

## Rationale

- **検討した他案:**
  - **完全自作** — a11y / variant / トークンを一から設計。学習価値はあるが、解決済み
    問題の再発明で、真に差別化したい「rule-driven な運用パターン」に投資できなくなる。棄却。
  - **MUI / Chakra 等のフル DS 採用** — スタイルが重く、`.st-*` のような framework-agnostic
    CSS 層（[ADR-0003](ADR-0003-framework-agnostic.md)）を後付けしにくい。テーマ機構も
    それぞれ固有で、二軸テーマ（Mode × Special）を載せる自由度が乏しい。棄却。
  - **Headless UI のみ** — Radix と役割が重なるが、shadcn ほどの「copy-in してカスタムする」
    エコシステムと variant 慣習の蓄積がない。棄却。
- **shadcn を選んだ決め手:** copy-in 方式で内部を完全に所有できる（依存としてブラックボックス化
  しない）ため、`.st-*` クラス API や二軸テーマといった Schatten 固有の拡張を無理なく被せられる。

## Consequences

- (+) a11y / キーボード / variant の土台を継承し、Schatten 固有の価値（rule-driven 運用、
  framework-agnostic CSS、季節テーマ）に集中できる。
- (+) 規約が「shadcn 既定 + 差分だけ明文化」になり、`.claude/rules/` が薄く保てる。
- (−) shadcn / Radix の設計思想に縛られる。polymorphic API を持たない（[ADR-0009](ADR-0009-no-polymorphic-as.md)）等、
  shadcn の選択を追認する場面が生じる。
- (neutral) shadcn は「配布ライブラリ」ではなく「copy-in レシピ」なので、npm 配布
  （[ADR-0002](ADR-0002-npm-distribution.md)）は Schatten 側の独立判断になった。

## Review

- 2026-03 — 発足時に採用（遡及記録）。以降のコンポーネント設計は本 ADR を既定とし、
  逸脱のみ `.claude/rules/` に記録している。
