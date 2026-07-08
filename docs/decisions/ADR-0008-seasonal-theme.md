# ADR-0008: 季節テーマを Special 軸として持つ（24節気に着想、8 パレットで実装）

- **Status**: Accepted
- **Date**: 2026-03 起点 / v0.6.x（`data-theme` / `--color-theme-*` rename）
- **Related**: [#150](https://github.com/yasmro/schatten/issues/150)（solid が theme ramp を参照） /
  [theme-architecture.md](../../.claude/rules/theme-architecture.md),
  [2026-06-solid-theme-rung.md](2026-06-solid-theme-rung.md),
  [state-token-guideline.md](../../.claude/rules/state-token-guideline.md),
  [ADR-0004](ADR-0004-tailwind-v4-cva.md)

## Context

Schatten ブランドは季節性という表現軸を持ちたかった。しかし surface / foreground / border /
state 色まで季節で動かすと a11y 検証の組合せが爆発し、意味（disabled は「使えない」等）まで
ドリフトする。表現軸を、基盤の Mode（light/dark）から分離する必要があった。

## Decision

**テーマを 2 つの独立軸でモデル化する**（[theme-architecture.md](../../.claude/rules/theme-architecture.md)）:

- **Mode**（排他: light / dark）— 基盤層（surface / foreground / border / state のシェード）を所有。
- **Special**（排他: `data-theme="<name>"` または無し）— 表現層（`--color-theme-*` スケール、
  ブランド名トークン）を所有。**季節テーマは Special 軸の一員**。

**季節は「24節気」を着想元とし、実装は 8 パレット**にまとめる（`season--spring-early` /
`spring-late` / `summer-early` / `summer-peak` / `autumn-early` / `autumn-late` /
`winter-early` / `winter-deep`）。各パレットは **theme スケール（`--color-theme-*`）のみ**を
override し、allowlist は `['--color-theme-*']`。

> ⚠️ 実装粒度は **24 ではなく 8**。24節気はネーミング／期間区切りの発想源であり、
> 出荷しているパレット数は 8。

Special は specificity（`:root[data-theme=…]` = (0,2,0)）で Mode に勝つため、ロード順ではなく
カスケードで合成される。solid ファミリーは Mode が rung を選び Special が ramp を供給する
（[2026-06-solid-theme-rung.md](2026-06-solid-theme-rung.md)、#150）。

## Rationale

- **Mode / Special を分けた理由:** 「シェードを light/dark で反転するもの」は Mode、
  「ブランド性を表現するもの」は Special、と所有を明確化。Special が Mode 所有トークン
  （surface / foreground / disabled / `info-*`）を触るのは誤分類。
- **累積 Special（家族ごとに別 DOM 属性）を却下:** カスケードのタイブレーク・allowlist の交差・
  複数属性の同期という組合せコストが、想定ユースケースに見合わない。Special は単一 `data-theme`・排他。
- **24 → 8 に丸めた理由:** 24 パレットは a11y 検証（各 Special × Mode）の行数を過剰に増やす。
  8 で季節感を表現でき、全 ramp が共通の明度ラダーを共有するので solid 上の fg コントラストが
  構造的に安定する。

## Consequences

- (+) コンポーネントは semantic トークン（`bg-theme-500` 等）を参照するだけで、どの軸が
  効いているか知らなくてよい。SSR も `data-theme` 属性で hydration mismatch なし。
- (+) `info-*` は blue 固定で季節に引きずられない（[state-token-guideline.md](../../.claude/rules/state-token-guideline.md)）。
- (−) 各 Special は両 Mode で可読性を要検証（8 × 2 = 16 通り）。16-pattern audit story は v0.7.0。
- (−) Special が全 11 rung（50–950）を宣言しないと solid 上で季節色と alabaster が混ざる。

## Review

- 2026-03 — Mode × Special 二軸を採用、季節を Special として持つ（遡及記録）。
- #150 — solid を theme ramp の rung 参照に変更、季節が solid も recolor するようになった。
