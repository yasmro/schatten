---
'@yasmro/schatten': minor
---

CSS API: Input / Textarea / Radio を `.st-input-wrapper` + `.st-input` /
`.st-textarea` / `.st-radio-group` + `.st-radio-wrapper` + `.st-radio`
クラス API に移行（#269 / #154 sweep-4）。3 コンポの視覚規則が
`@layer components` に集約され、vanilla HTML / WordPress でも同一見た目で利用可能に。

- **Input**: `.st-input-wrapper` + 3 sizes（wrapper 側）+ `.st-input` +
  sub-elements `.st-input__icon-left/-right` / `.st-input__text-left/-right`、
  派生 modifier `.st-input--date`（CVA 外で `type` が date 系のときに emit、
  `.st-input--date::-webkit-calendar-picker-indicator { margin-left: auto }`）。
  focus-visible ring は `.st-input-wrapper:has(.st-input:focus-visible)` で
  wrapper 側 box-shadow に（Tailwind `has-focus-visible:` の `@apply` 不安定を
  raw CSS で回避、#154 Q4）。state precedence は CSS source order で
  `default < [aria-invalid] < :read-only < :disabled` を表現（disabled が error /
  readOnly を上書き、legacy tailwind-merge precedence と意味的に等価）。
  ラッパクリックで input にフォーカスする ergonomic は React のみの機能。
- **Textarea**: `.st-textarea` + 3 sizes。state は単一要素に source order で
  `default < [aria-invalid] < :read-only < :disabled`。
- **Radio**: `.st-radio-group`（group root）+ `.st-radio-wrapper`（per-instance）
  + `.st-radio` + 3 sizes + `.st-radio__indicator` + `.st-radio__dot`。
  label sizing と dot sizing は `:has()` 経由で size modifier から派生
  （Checkbox / Switch precedent と同形）。Radix Item Indicator は unchecked 時
  unmount されるため CSS 側に hide 規則不要（Checkbox `forceMount` と異なる）。

manifest snapshot: classes +23（Input 10 / Textarea 4 / Radio 9）、
dataAttributes は変更なし。

BREAKING(pre-1.0): 3 コンポが出力する className 文字列が Tailwind utility 列から
semantic class（`st-input-wrapper st-input-wrapper--md` 等）に変更。`className`
prop の追加マージは不変。`inputWrapperVariants()` / `inputVariants()` /
`textareaVariants()` / `radioVariants()` の戻り値も同様。

- 消費者影響: `cn(textareaVariants(...), 'border-error')` 等で utility を重複指定
  している場合のみ visible。通常の `<Input>` / `<Textarea>` / `<Radio>` 利用は無影響。
- VRT baseline を持つ消費者は再生成が必要。
- Input ラッパクリックで input にフォーカスする挙動は React のみの機能で、
  vanilla HTML 利用者は input 自身をクリックする必要がある（CSSApi reference に明記）。
- Radio の wrapping `<div>` に `.st-radio-wrapper` クラスが新規に付与されるため、
  この `<div>` をクラス名で targeting している CSS が消費者側にあれば影響。
