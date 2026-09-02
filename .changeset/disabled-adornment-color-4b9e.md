---
'@yasmro/schatten': patch
---

fix(lv1): `disabled` 時に装飾アイコンが `--color-foreground-muted` のまま残り、退いたはずの値のテキスト (`--color-foreground-disabled`) より濃く読めてしまう問題を修正。対象は Input の `iconLeft` / `iconRight`、Select トリガーの chevron、DropdownMenu の shortcut / サブメニュー chevron。ブロックの `:disabled` / `[data-disabled]` 状態から明示的に塗り直す形にした (resting の muted ティアは不変)。

Input の `textLeft` / `textRight` は**意図的に対象外**。`disabled` 属性が兄弟の `<input>` にあり `aria-disabled` 祖先を持たないため WCAG 1.4.3 の免除が及ばず、`--color-foreground-disabled` にすると 3.83:1 (light) / 3.52:1 (dark) で AA を割る。公開クラス名 / トークン名の増減はなし。
