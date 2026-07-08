# ADR-0004: スタイリングに Tailwind CSS v4 + CVA を採用する（後に dist からは Tailwind を除外）

- **Status**: Accepted（採用は有効）。ただし **dist 配布物からの Tailwind 除外は #317 で確定**
  — 現在 Tailwind は dev / Storybook 専用（下記 Consequences）
- **Date**: 2026-03（採用）/ v0.15.0（#317, dist 脱 Tailwind）
- **Related**: [#317](https://github.com/yasmro/schatten/issues/317)（dist 脱 Tailwind → lightningcss）,
  [2026-07-css-variable-namespace.md](2026-07-css-variable-namespace.md) /
  [css-api.md](../../.claude/rules/css-api.md),
  [theme-architecture.md](../../.claude/rules/theme-architecture.md),
  [ADR-0001](ADR-0001-shadcn-base.md), [ADR-0003](ADR-0003-framework-agnostic.md),
  [ADR-0006](ADR-0006-variant-vocabulary.md)

## Context

shadcn ベース（[ADR-0001](ADR-0001-shadcn-base.md)）の既定スタイリングは Tailwind +
class-variance-authority（CVA）+ `cn` 合成。トークンを CSS 変数で持ち、二軸テーマ
（Mode × Special、[theme-architecture.md](../../.claude/rules/theme-architecture.md)）を
`var()` の paint-time 解決に載せるには、CSS 変数ネイティブな Tailwind v4（`@theme` 登録）が
噛み合っていた。

## Decision

- **スタイリング = Tailwind CSS v4 + CVA。** variant は CVA で定義し、トークンは
  `@theme` 登録して `bg-theme-500` 等のユーティリティを生む。
- **後日（#317）: dist からは Tailwind を除外する。** framework-agnostic 路線
  （[ADR-0003](ADR-0003-framework-agnostic.md)）を完遂するため、`dist/schatten.css` は
  **lightningcss** が plain-CSS ソース（raw トークン + 手書き `@layer theme` registrar +
  vendored preflight + `.st-*` component rules）をバンドルしてコンパイルする。
  **Tailwind は dev-only 依存**として Storybook 経路（`src/styles/globals.css` 経由）にのみ残る。

## Rationale

- **CVA を選んだ理由:** variant タプル → クラス連鎖が決定的で、出力文字列を公開契約にできる
  （[api-stability.md](../../.claude/rules/api-stability.md) CVA output stability）。
- **Tailwind v4 を選んだ理由:** `@theme` 登録が CSS 変数と直結し、二軸テーマの paint-time
  解決とゼロ JS のテーマ切替に噛み合う。
- **dist から外した理由（#317）:** Tailwind を出荷し続けると、消費者が `@apply` 解決や
  Tailwind セットアップに縛られ "framework-agnostic" が成立しない。component CSS は
  raw CSS + `var(--color-*)` 直書きに統一し（[css-api.md](../../.claude/rules/css-api.md)
  「raw CSS over `@apply`」）、lightningcss でコンパイルする経路に一本化した。

## Consequences

- (+) CVA 出力 + `.st-*` が公開契約として凍結可能（manifest）。
- (+) **消費者は Tailwind 不要**（#317 以降、dist も Tailwind-free）。
- (−) Storybook 経路のみ Tailwind 依存が残るため、Tailwind bump が **component / docs VRT
  baseline** をドリフトさせうる（[api-stability.md](../../.claude/rules/api-stability.md)
  visual-contract-affecting deps）。dist / manifest には影響しない。
- (−) component `.css` に Tailwind directive（`@apply` / `@theme` / `@utility`）を書くと
  lightningcss が invalid at-rule として素通しし壊れる。raw CSS 必須が **ビルド要件**化した。

## Review

- 2026-03 — Tailwind v4 + CVA を採用（遡及記録）。
- v0.15.0（#317）— dist を lightningcss で Tailwind-free 化。Tailwind を dev-only に縮小。
  本 ADR はこの縮小を後日談として併記する（別 supersede ADR は切らない — 採用判断自体は
  今も有効なため）。
