# ADR-0010: Layout primitives（Stack / Box / Grid / Flex）は提供しない

- **Status**: Accepted
- **Date**: 2026-03（採用。遡及記録）
- **Related**: #158（本 ADR 群） /
  [css-api.md](../../.claude/rules/css-api.md)（`@layer` order — `utilities` は空・消費者用に予約）,
  [component-architecture.md](../../.claude/rules/component-architecture.md) §7（lv1-local CSS: layout は Tailwind）,
  [ADR-0003](ADR-0003-framework-agnostic.md), [ADR-0009](ADR-0009-no-polymorphic-as.md)

## Context

多くの DS は `<Stack>` / `<Box>` / `<Grid>` / `<Flex>` といった layout primitive を持つ。
Schatten でもこれらを足すか検討したが、レイアウトは「見た目の chrome」ではなく「配置の関心」で、
消費者が自分のグリッド／間隔システムを持っていることが多い。Schatten が layout primitive を
出すと、その意見を消費者に押し付けることになる。

## Decision

**layout primitive は提供しない。** レイアウトは消費者の責務とし、Schatten は:

- **コンポーネントの chrome（色・タイポ・state・アニメ）と design token**（`--spacing-*` /
  `--radius-*` / `--z-*` …）だけを出荷する。
- CSS の `@layer` は `theme, base, reset, tokens, components, utilities` で、**`utilities` 層は
  既定で空**にして**消費者が自前の Tailwind ユーティリティを載せる場所として予約**する
  （[css-api.md](../../.claude/rules/css-api.md)）。消費者のユーティリティは最後の層なので
  `components` に勝つ。
- Storybook のレイアウト足場は Tailwind ユーティリティ（`flex` / `gap-4` …）で組む（dev-only）。
  component `.css` でも layout は Tailwind に委ね、lv1-local CSS には書かない
  （[component-architecture.md](../../.claude/rules/component-architecture.md) §7）。

## Rationale

- **検討した他案:**
  - **Stack / Box / Grid / Flex を lv1 として追加** — Tailwind の layout ユーティリティと
    正面衝突し、公開面（props / `.st-*` クラス / manifest）を膨らませる。消費者が自前の
    layout システムを持つ場合は不要な意見の押し付け。棄却。
  - **CSS だけの layout ユーティリティ（`.st-stack` 等）を出荷** — `utilities` 層を Schatten が
    埋めると、消費者が同層で上書きする余地（framework-agnostic の設計）を奪う。棄却。
- **不採用を選んだ決め手:** [ADR-0009](ADR-0009-no-polymorphic-as.md) と同じ思想 — Schatten は
  shadcn ベースの**コンポーネント** DS であり、layout / utility フレームワークではない。
  レイアウトは Tailwind（または消費者自身の CSS）に委ね、Schatten は token + component 契約に集中する。

## Consequences

- (+) 公開面が小さく保たれ、Tailwind の layout ユーティリティと競合しない。
- (+) `utilities` 層が空のまま予約され、消費者が自前ユーティリティで `components` を上書きできる。
- (−) 「Schatten だけで完結するレイアウト」は提供されない。消費者は Tailwind か自前 CSS で配置する。
- **将来:** もし lv0（foundation）や lv2 で layout 合成の実需が出たら、本 ADR を新採番で supersede
  して再検討する（[component-architecture.md](../../.claude/rules/component-architecture.md) §1）。

## Review

- 2026-03 — layout primitive 不採用を採用（遡及記録）。
- ⚠️ **一次判断の出典が薄い ADR。** 対応する `.claude/rules/` の明示ルールは無く、本 ADR が
  唯一の記録。棄却理由の一次資料（評価レポート §1.6 等）が判明したら Rationale を補強する。
