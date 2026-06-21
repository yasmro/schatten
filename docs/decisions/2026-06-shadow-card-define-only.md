# `--shadow-card` は define-only のまま据え置く（Switch knob には流用しない）

- **Status**: Accepted
- **Related**: [#349](https://github.com/yasmro/schatten/issues/349) (本判断),
  [#145](https://github.com/yasmro/schatten/issues/145) (semantic shadow token 追加),
  [#136](https://github.com/yasmro/schatten/issues/136) (Elevation story で define-only を可視化) /
  [css-api.md](../../.claude/rules/css-api.md),
  [state-token-guideline.md](../../.claude/rules/state-token-guideline.md)

## Context

#145 で `--shadow-card`（= `--shadow-sm` の value-preserving alias）を、消費先より
**先に** semantic 定義した。結果、唯一の自然な消費先候補だった Switch knob 影
([Switch.css](../../src/components/lv1/Switch/Switch.css) の `.st-switch__thumb` が
`box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);` をハードコード）に適用するか、据え置くかを
確定する必要があった。

選択肢は2つ、どちらも value-preserving（最終的な見た目は `--shadow-sm` 相当で不変）:

- **(a)** knob 影を `var(--shadow-card, …)` に寄せ、define-only を物理的に解消する。
- **(b)** knob 影は component ローカルのハードコードのまま据え置き、`--shadow-card` は
  本来の用途の consumer が現れるまで define-only で待つ。

## Decision

**(b) 据え置き。** Switch の knob 影には `--shadow-card` を適用しない。Switch.css は
変更しない。`--shadow-card` は本来の用途（resting content card 面の elevation）を持つ
consumer = **将来の lv2 Card** が初めて消費する。

あわせて、**「1.0 までに define-only token をゼロにする」方針は取らない**。同じく
define-only である `--radius-control` / `--radius-surface`（Button / Input / Dialog は
現状直角のまま未適用）も、本来の用途の consumer（角丸適用の designer spike）が現れた
時点で回収する。define-only token は自然な consumer を待つ。

## Rationale

- **semantic 名と用途の一致を優先する。** 「card」= 静止コンテンツ面の resting
  elevation と、「knob」= 可動部品の微小影は、値が同一（`--shadow-sm` 相当）でも
  意味が別物。`destructive` と `error` を同値でも別 semantic に保つのと同じ governance
  原則で、manufactured consumer を作って define-only を消すより、名前の純度を守る。
- **define-only は pre-1.0 で許容され、かつ既に可視化されている。** #136 の Elevation
  story が defined-only を warning バッジで表示しているため、これは「隠れた不整合」では
  なく「意図された待機状態」。隠れた未消費トークンという問題はもう存在しない。
- **speculative token は本来の consumer が回収する。** lv2 Card（post-1.0）が
  `--shadow-card` を本来の意味で初消費する。それが正しい回収経路。

## Consequences

- (+) semantic の純度を維持。値変更ゼロ・VRT 影響ゼロ・公開 manifest surface 変化なし
  （`--shadow-card` は #145 時点で既に `@theme` 登録・manifest 掲載済み）。
- (−) `--shadow-card` は lv2 Card 着手まで define-only が継続する。
- **持ち越し（DoD carry-forward）**: lv2 Card 実装時に `--shadow-card` を
  **初の consumer** として配線すること。追跡は
  [#361](https://github.com/yasmro/schatten/issues/361)（milestone `v1+`）が担い、
  Elevation story の `usedBy` memo と本 decision log がその導線を補強する。

## Review

- 2026-06-03 — #349 の refinement で設計判断を確定。本 issue は lv2 Card への持ち越しを
  記録した上で close。
- 2026-06-21 — #43 の refinement で Card の分類を確定: アーキ定義（素の div サブ要素・
  lv1 非合成、`Dialog` と同型の compound primitive）に厳密に当てると Card は **lv1**
  であり、兄弟の Skeleton / Avatar / Table と同じく **v0.13.0** で出荷する。本文中の
  「**将来の lv2 Card / post-1.0**」という表現は分類未確定時のものとして、ここに
  「lv1 / v0.13.0」へ整合修正する（判断そのもの — 「`--shadow-card` は据置し、本来の
  用途の consumer = Card が初めて消費する」— は不変）。carry-forward は #43 で消化:
  `Card.css` が `box-shadow: var(--shadow-card)` で**初の consumer** として配線し、
  Elevation story の `card` を `applied` / `usedBy='Card'` に更新。`--radius-surface`
  は Card が square 出荷のため**消費せず**、define-only を継続（角丸 designer spike 待ち）。
  追跡 #361 は v0.13.0 に re-milestone 済みで #43 が close する。
