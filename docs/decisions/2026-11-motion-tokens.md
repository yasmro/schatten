# 開閉の動きはフェードにそろえ、時間はモーダルかどうかで 2 段に分ける

- **Status**: Accepted
- **Related**: [#630](https://github.com/yasmro/schatten/issues/630) (本判断),
  [PR #631](https://github.com/yasmro/schatten/pull/631) (PoC),
  [#653](https://github.com/yasmro/schatten/issues/653) (ブランドらしい動きの spike),
  [#145](https://github.com/yasmro/schatten/issues/145) / [#350](https://github.com/yasmro/schatten/issues/350) (`--motion-*` と `--st-duration-*` の導入) /
  [css-api.md §Motion](../../.claude/rules/css-api.md#motion--tokens-tiers-and-what-moves),
  [api-stability.md](../../.claude/rules/api-stability.md#css-variable-naming--the-four-layer-model),
  [brand-concept.md](../brand-concept.md)

## Context

motion のトークンは、duration の 3 段階（`--st-duration-fast / base / slow` = 100 / 150 / 200ms）と、その別名の `--motion-quick / base / expressive` だけだった。課題は 3 つあった。

- easing のトークンがなく、`ease-out`・`ease-in`・`ease-in-out`・`ease`・指定なしが部品ごとに混ざっていた。
- hover などの色の変化に、時間の直書き（150〜300ms）が 13 個の CSS ファイル（18 の宣言）に残っていた。
- 開閉の動きの形が部品ごとに違った（Dialog と Select は縮小、Popover と Tooltip はスライド、DropdownMenu はフェード）。

参考にした [transitions.dev](https://transitions.dev/) は、duration・easing・distance・scale・blur の 5 つの軸を、用途の名前で選ぶ形で持っている。この形を取り入れ、あわせて「ブランドらしい開閉の動き」も決めようとした。

## 検討した案

PoC（PR #631）で 5 案を比べた。評価は、Playwright でアニメーションを止めて時刻ごと（0 / 25 / 50 / 75 / 100%）に撮ったコマを、差分も意図も知らない別のエージェントが [brand-concept.md](../brand-concept.md) に照らして判定する方法で行った。レビューごとに新しいエージェントを使った。

| 候補 | 動き | 評価 |
|---|---|---|
| a | 今の動き | 基準 |
| b | フェード＋縮小（0.97 → 1）。全部品で入り 250ms・出 150ms | — |
| c | b の入りにぼかし（3px → 0）を足す | 不採用（3/10） |
| d | b の出に、逆再生のぼかしを足す | 不採用（4/10） |
| e | b の時間を面の大きさで分ける | 条件付きで採用（7/10） |

- **c が不採用になった理由:** 不透明度とぼかしを同じ曲線で動かしたため、ぼかしは面がほぼ透明なあいだにしかかからなかった。計算では、ぼかしが 2px を超えるのは入りの最初の約 15ms で、その時点の不透明度は 0.3 未満。また「焦点が合う」はレンズの比喩で、墨と和紙の語彙にない。
- **d が不採用になった理由:** ぼかしは見えたが、ピンぼけ（奥行き）に見え、§3.4「影は elevation ではない」と食い違った。ぼけた枠線が影のふちに見えた。
- **e に残った条件:** 縮小 0.97 はほとんど見えない（250ms の 25% の時点で 0.993 倍、幅 292px の面で約 2px の差）。Dialog は入力を止める面なので、総時間は短いほうがよい。

この 2 点を受けて、e から縮小を外し、Dialog の入りを 200ms に戻したものを最終の組み合わせとした。PR #654 のレビューのあと、実装した部品の story（Dialog・Popover・Select、light / dark）で、develop の動きと並べて同じ方法で撮り、別のエージェントに評価させた。結果は「採用してよい」（7.5/10）。a より読みにくくなるコマはなく、入りでは背面の文字と重なる時間が短くなった。出の途中で背面の文字と重なる時間は a と変わらず、改善は入りの側だけだった。

## Decision

1. **開閉の動きはフェードにそろえる。** 縮小もぼかしも使わない。入りは `cubic-bezier(0.22, 1, 0.36, 1)`、出は `ease-in`。
2. **時間は「モーダルかどうか」で 2 段に分ける。** overlay の段（Dialog、将来の Sheet）は 200 / 150ms、popover の段（Popover・Select・Tooltip・DropdownMenu、将来の Combobox）は 150 / 100ms。どちらも今と同じ長さで、立ち上がりの速い曲線に変わる分だけ、読める状態に早く着く（入りの 50ms の時点の不透明度は、Dialog が 0.38 → 0.76、popover の段が 0.49 → 0.87）。
3. **トークンは用途の名前で選ぶ。** `--motion-overlay-enter / -exit`、`--motion-popover-enter / -exit`、`--motion-ease-enter / -exit`、`--motion-feedback` を足す。その下に `--st-ease-smooth-out` / `--st-ease-in` を置く。コンポーネントの CSS は `--motion-*` だけを参照し、値を既定値として必ず書き添える。
4. **scale・blur・distance の軸は置かない。** scale と blur は使わないと決めたため。distance は Tooltip の 8px のスライドでしか使わず、Tooltip の動きは変えないので、公開トークンにする理由がない。
5. **Tooltip と DropdownMenu は、時間だけをトークンにする。** 動き（Tooltip の 8px のスライドと `ease-in-out`、DropdownMenu の `ease-out` / `ease-in`）は変えない。
6. **ブランドらしい動きは、この判断から外す。** ぼかし以外の表現（色の階調で薄れる、など）を #653 で探す。

## Consequences

- 公開 CSS 変数が 9 個増える（`minor`）。既存の `--motion-quick / base / expressive` と `--st-duration-*` は名前も値も変えない。
- `--motion-base` と `--motion-expressive` は使う部品がなくなり、define-only になる。開閉の時間は overlay / popover の段のトークンが受け持つので、**使う予定の部品はない**。名前（quick / base / expressive）も、用途で選ぶ今の語彙と合わない。css-api.md の define-only の決まりのとおり、`Tokens/Motion` に `defined only` の印を付けて見えるようにしてある。次の major で廃止する候補とし、廃止するなら api-stability.md の決まりに従って、その前の minor で `@deprecated` にする。`--motion-quick` は Table の行の hover が使い続ける。
- 値が変わる箇所が 3 つある。Badge の色の変化（150ms → 200ms）、Button の読み込み表示の切り替え（300ms → 200ms）、Tabs の下線の不透明度（150ms → 200ms）。どれも用途（feedback）でトークンを選んだ結果。
- Popover は、開く向きへの 8px のスライドをやめる。向きの手がかりはなくなるが、e のレビューでは劣化とまでは判定されなかった。
- reduced-motion の対策が、開閉する 5 部品で実際に効くようになる。Dialog・Popover・Tooltip にはもともと対策があったが、`.st-popover__content { animation: none }` のような素のクラスのセレクタだったため、`[data-state]` 付きの開閉のルールに詳細度で負けて、アニメーションが止まっていなかった。今回 Select と DropdownMenu に足した対策も、最初は同じ形で効いていなかった（PR #654 のレビューで、Chromium の計算済みスタイルを読んで見つけた）。5 部品とも `[data-state]` 付きのセレクタに直し、Switch のつまみにも対策を足した。
- [`motion-token-usage.test.ts`](../../src/components/__tests__/motion-token-usage.test.ts) が、直書きの禁止・第 3 層だけの参照・既定値とトークンの一致・reduced-motion の有無と `[data-state]` の有無を、CSS を文字列として読んで検査する。reduced-motion のルールが実際に勝つかは文字列からは決まらないので、各部品の `*.vrt.spec.ts` の「reduced motion」の Playwright テストが、実際のブラウザで `animation-name: none` を確かめる。
