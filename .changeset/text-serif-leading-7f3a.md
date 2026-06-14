---
'@yasmro/schatten': minor
---

feat(lv1): Text に serif family + leading variants + JP/EN size 補正を追加

`Text` に直交軸を 2 つ追加: `family`（`sans` / `serif`）と `leading`（`--leading-*` スケールの override）。`serif` は EB Garamond / Noto Serif JP スタックに切替え（フォントは同梱せず consumer がロード）。

あわせて JP/EN の cap-height 補正を **body の reset 層にライブラリ全体で適用**: `font-size-adjust: var(--st-font-size-adjust, cap-height 0.7)`。Latin 系フォント（EB Garamond / Hanken Grotesk）の cap-height を CJK の高さに揃えるため、Button / Input / Badge / Text など**全コンポーネントの欧文混じりテキストの見た目が僅かに変わる**。font-agnostic な目標値なので単一の値で全 family・consumer フォントに効き、`--st-font-size-adjust` で上書き / 無効化できる（非対応ブラウザは補正なしに graceful degrade）。

CSS API: `.st-text--sans` / `.st-text--serif` / `.st-text--leading-{none,tight,snug,normal,relaxed,loose}` を追加。`--font-serif` セマンティックトークンを default theme で実体化し、`.st-text--serif` から参照されることで manifest に公開 surface 化。
