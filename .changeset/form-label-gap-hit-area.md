---
'@yasmro/schatten': patch
---

`Checkbox` / `Radio` / `Switch` で、コントロールとラベルの間の隙間をクリックしても値が切り替わらない不具合を直しました。カーソルも pointer になりませんでした（`Switch` は pointer になるのに切り替わりませんでした）。`.st-*-wrapper__label` の `::before` を隙間まで広げ、隙間もラベルとして動くようにしています。`.st-switch-wrapper` からは `cursor` の指定を外しました。通常の配置では見た目は変わりません。

次の場合は隙間の全体が反応するわけではありません。

- ラッパーの `gap` を 8px より広げている場合は、広げた分が反応しません。
- ラッパーを `flex-row-reverse` や `flex-col` にしている場合は、隙間は反応せず、`::before` がラベルの反対側に 8px はみ出して、隣の要素のクリックを受け取ることがあります。

`.st-*-wrapper__label` に `position: relative` を指定したので、`label` に絶対配置の要素を渡している場合は、基準がラベルになります。
