---
'@yasmro/schatten': patch
---

fix(lv1): Checkbox / Radio / Switch の `disabled + isError` で disabled を優先

`disabled` かつ `isError`（`aria-invalid="true"`）のとき、Checkbox / Radio / Switch がエラーの赤系トークンを表示していたのを修正。disabled なコントロールは送信されず error 状態を表示する意味がないため、disabled の grey トークンが勝つべき。Input / Textarea は既にこの優先順位（`default < [aria-invalid="true"] < :disabled`）だったので、3 コンポーネントを揃えた。

CSS API: `.st-checkbox` / `.st-radio` / `.st-switch` の `:disabled` ルールを `[aria-invalid="true"]` ルールより後ろに移動し、同一 specificity を source order で解決させる。クラス名・属性 hook の追加 / 削除はなし（cascade 優先順位のみの変更）。`aria-invalid="true"` は引き続き emit されるので assistive tech 向けの contract は不変。
