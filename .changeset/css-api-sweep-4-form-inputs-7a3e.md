---
'@yasmro/schatten': minor
---

CSS API: Input / Textarea / Radio を `.st-input-wrapper` / `.st-input` /
`.st-textarea` / `.st-radio-group` / `.st-radio-wrapper` / `.st-radio`
クラス API に移行（#269 / #154 sweep-4）。3 コンポの視覚規則が
`@layer components` に集約され、vanilla HTML / WordPress でも同一見た目で利用可能に。

- **Input**: `.st-input-wrapper` + 3 sizes（wrapper 側）+ `.st-input`
  + sub-elements `.st-input__icon-left/right` / `.st-input__text-left/right`
  + 派生 modifier `.st-input--date`。focus-visible ring は
  `.st-input-wrapper:has(.st-input:focus-visible)` で wrapper 側に。
  state precedence は CSS source order で `error < readOnly < disabled`
  （pre-sweep の tailwind-merge dedupe と意味的に等価）。
- **Textarea**: `.st-textarea` + 3 sizes。error / readOnly / disabled の
  precedence は単一要素の source order で表現。
- **Radio**: `.st-radio-group` + `.st-radio-wrapper` + `.st-radio` + 3 sizes
  + `.st-radio__indicator` + `.st-radio__dot`。label sizing と dot sizing は
  `:has()` 経由で size modifier から派生。Radix Radio が unchecked 時に
  indicator を unmount するため CSS 側に hide 規則は不要。

manifest snapshot: classes +23（Input 10 / Textarea 4 / Radio 9）。
`dataAttributes` への新規追加なし（`aria-invalid` は sweep-3 で導入済）。

BREAKING(pre-1.0): 3 コンポが出力する className 文字列が Tailwind utility 列から
semantic class（`st-input-wrapper st-input-wrapper--md` 等）に変更。`className`
prop の追加マージは不変。`inputWrapperVariants()` / `inputVariants()` /
`textareaVariants()` / `radioVariants()` の戻り値も同様。

- 消費者影響: `cn(textareaVariants(...), 'border-error')` 等で utility を重複
  指定している場合のみ visible。通常の `<Input>` / `<Textarea>` / `<Radio>` 利用は
  無影響。
- VRT baseline を持つ消費者は再生成が必要。
- Input のラッパクリックで input にフォーカスする挙動は **React のみ** の
  ergonomic 機能（Input.tsx の `onClick` 経由）。vanilla HTML 利用者は input
  自身をクリックする必要がある（CSSApi reference に明記）。
- Field 経由の Input / Textarea / RadioGroup transitive 影響は visual contract
  が保持されているため React API 経由なら無影響。
