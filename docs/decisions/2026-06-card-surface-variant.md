# Card の背景軸は out-of-pattern の `variant`（`filled` / `plain`）、`plain` は透明

- **Status**: Accepted
- **Related**: [#429](https://github.com/yasmro/schatten/issues/429)（本実装）,
  [#427](https://github.com/yasmro/schatten/pull/427)（Card lv1 着地・variant なしで凍結）,
  [#43](https://github.com/yasmro/schatten/issues/43)（Card refinement で weight 軸を保留）/
  [component-api-conventions.md](../../.claude/rules/component-api-conventions.md),
  [theme-architecture.md](../../.claude/rules/theme-architecture.md)

## Context

#427 で Card は単一 surface（variant なし）で着地した。#43 refinement で「Card は
Pattern A/B いずれにも属さないため、背景の weight 軸が要るなら別途議論」と保留して
いた（component-api-conventions §6 の "stop and discuss"）。その後、nested / secondary
パネルの差別化という実需に対し、背景の2タイプを足す要望が出た。論点は3つ:

1. **軸の形と prop 名** — Pattern A/B に押し込むか、out-of-pattern にするか。
2. **2つ目の背景をどう表現するか** — 薄い neutral 塗り（専用トークン）か、透明か。
3. **値名**。

## Decision

1. **out-of-pattern の単一 `variant` 軸**（`Spinner` / `Icon` と同じ扱い）。prop 名は
   `variant`（`appearance` は Pattern B を含意するため不可）。既定値は base ではなく
   自分のクラスを持つ（`.st-icon--inherit` 前例 = default は first-class）。
2. **2つ目は「薄い塗り」ではなく「透明」**。`plain` は `background: transparent` +
   border のみ・shadow なし。`filled` は `--color-surface` 塗り + `--shadow-card`。
3. 値名は **`filled`（既定 = 色あり）/ `plain`（色なし）**。

## Rationale

- **当初案（薄い neutral 塗り `subtle` + 専用トークン `--color-surface-subtle`）を却下**。
  実装して並べたところ、light モードでは `filled`(surface ≒ 白) と `subtle`(alabaster-100)
  が**どちらも「塗りあり」**に見え、「色なし/色あり」の対比にならなかった。さらに dark で
  は `subtle`(alabaster-800) が `filled`(#1a1a1a) より明るく、light の「沈む」方向と
  **知覚が反転**していた。
- **透明 `plain` がこれらを一掃する**:
  - 「背景を持つ / 持たない」という対比が light/dark で**一貫**（透明はモード非依存）。
  - dark の知覚反転が**消える**（塗りが無いので反転しようがない）。
  - **新トークンが不要**（`--color-surface-subtle` を semantic/base/resolution/theme-
    architecture/Color story から全削除）。公開トークン surface を増やさずに済む。
- **out-of-pattern が正しい分類** — Card は role（action）でも state tone でもない。
  `Spinner` の単一軸と同型。
- **既定 `filled` は #427 と同値**なので additive・非破壊。既存の Card 描画・VRT
  baseline は不変。

## Consequences

- (+) Card が「色あり / 色なし」の背景軸を持ち、nested / 低 emphasis なグループ化を表現可能に。
- (+) 公開トークンを増やさない（#429 初稿で足した `--color-surface-subtle` は不採用）。
- (−) bare `.st-card`（modifier 無し）は塗り/影を持たない layout shell になる。CVA は
  既定で `--filled` を必ず emit するので React 利用者は無影響。vanilla 利用者は
  `.st-card--filled` / `.st-card--plain` を必ず併記する（parity fixture もそう書く）。

## Review

- 2026-06-22 — #429 refinement で「薄い塗り subtle + 専用トークン」案を確定・実装
  （PR #430）したが、light で両方が「塗りあり」に見える指摘を受け、**透明 `plain` /
  `filled`** に作り替え。トークン追加を撤回し、PR #430 を force-push で差し替え。
