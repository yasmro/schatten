# ADR-0005: プリミティブに Radix UI を採用する（型は継承せず境界を設ける）

- **Status**: Accepted
- **Date**: 2026-03（採用）/ v0.9.0+（#156, Radix 型境界）
- **Related**: [#156](https://github.com/yasmro/schatten/issues/156)（Radix type boundary）,
  [#318](https://github.com/yasmro/schatten/issues/318)（Toast は Radix → Sonner に移行） /
  [component-architecture.md](../../.claude/rules/component-architecture.md),
  [api-stability.md](../../.claude/rules/api-stability.md)（Radix type boundary）,
  [ADR-0001](ADR-0001-shadcn-base.md)

## Context

Dialog / Tooltip / Select / Checkbox / Radio / Switch などは、フォーカストラップ・
キーボードナビゲーション・ARIA 配線・ポータルといった「正しく実装するのが難しい」挙動を
必要とする。shadcn ベース（[ADR-0001](ADR-0001-shadcn-base.md)）はこれらを Radix UI に委ねる。

## Decision

**インタラクティブ・プリミティブの土台に Radix UI を採用する。** ただし公開型は
**Radix 由来ではなく Schatten が著述する**（[api-stability.md](../../.claude/rules/api-stability.md)
Radix type boundary, #156）:

- Radix コンポーネントインスタンスを直接 re-export しない。
- 公開 Props は **native element props + curated redeclarations**。`ComponentPropsWithoutRef<typeof XPrimitive.Y>`
  を継承しない（継承すると Radix のバージョン差が公開型面をゼロ diff で動かす）。
- compound 部品は Radix の part 名に 1:1 対応させる（[component-architecture.md](../../.claude/rules/component-architecture.md) §2）。

## Rationale

- **検討した他案:**
  - **a11y を自作** — フォーカストラップ・ロービングタブインデックス等を再発明。バグ温床。棄却。
  - **Radix の型をそのまま公開** — 実装は楽だが、Radix は `dependencies`（caret）で入るため
    公開型面が消費者の lockfile 解決に追従して動く。1.0 の api-stability（patch で surface 不変）と
    両立不能。→ #156 の型境界（anti-corruption layer）で解決。棄却。
- **Radix を選んだ決め手:** a11y / キーボード / ポータルの正しさを継承しつつ、値レベルの
  互換性は「curated props を Radix に spread する」形で Schatten 内の `pnpm typecheck` が
  Radix bump を吸収する。

## Consequences

- (+) a11y 契約（[component-architecture.md](../../.claude/rules/component-architecture.md) §8）の
  role / キーボード / ARIA を Radix が担い、Schatten は「壊さない」ことに集中できる。
- (+) 型境界により Radix を caret 範囲に置いても公開型面が動かない。
- (−) Radix が emit する `data-*` / `aria-*` の変化は視覚契約をソース無変更でドリフトさせうる
  （区分 A/B は parity VRT、C/D は手動、[api-stability.md](../../.claude/rules/api-stability.md)
  visual-contract-affecting deps）。
- (neutral) Toast は後に Radix から **Sonner** に移行（#318）。プリミティブ選定は
  コンポーネント個別に見直しうることを示す先例。

## Review

- 2026-03 — Radix UI を採用（遡及記録）。
- #156 — 公開型を Radix 非継承に。値互換は spread + typecheck で吸収。
- #318 — Toast のみ Sonner へ移行。
