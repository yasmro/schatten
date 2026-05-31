---
'@yasmro/schatten': minor
---

BREAKING: `--text-{body,label,heading}-{xs..2xl}-{size,leading,weight}` の 39 個の
composite typography 変数を公開サーフェスから撤去。タイポグラフィの shorthand は
`.st-text--{variant}.st-text--{size}` クラス API（および React `<Text>`）に一本化。

CSS API: 上記 39 変数を manifest から削除。基底スケール（`--text-*` / `--leading-*`
/ `--font-*`）は存続。独自 CSS で composite 変数を参照していた利用者は、`.st-text`
クラスへ移行するか基底スケール変数を直接束ねること。視覚は不変（値保存リファクタ）。
