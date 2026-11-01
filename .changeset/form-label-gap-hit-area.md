---
'@yasmro/schatten': patch
---

`Checkbox` / `Radio` / `Switch` で、コントロールとラベルの間の隙間をクリックしても値が切り替わらない不具合を直しました。カーソルも pointer になりませんでした（`Switch` は pointer になるのに切り替わりませんでした）。`.st-*-wrapper__label` の `::before` を隙間まで広げ、隙間もラベルとして動くようにしています。`.st-switch-wrapper` からは `cursor` の指定を外しました。レイアウトと見た目は変わりません。
