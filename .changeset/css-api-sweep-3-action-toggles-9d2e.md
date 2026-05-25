---
'@yasmro/schatten': minor
---

CSS API: Button / Checkbox / Switch を `.st-btn` / `.st-checkbox` / `.st-switch`
クラス API に移行（#268 / #154 sweep-3）。3 コンポの視覚規則が
`@layer components` に集約され、vanilla HTML / WordPress でも同一見た目で利用可能に。

- **Button**: `.st-btn` + 6 variants × 3 sizes + `.st-btn--icon-only` + sub-elements
  `.st-btn__spinner-overlay` / `.st-btn__content`。`link` variant は
  `.st-btn--link.st-btn--{size}` で font-size のみ切替（height/padding はリセット、
  base font-size は `inherit`）。Loading 状態は `[aria-busy="true"]` で CSS が
  overlay の opacity と cursor: wait を切替。
- **Checkbox**: `.st-checkbox-wrapper` + `.st-checkbox` + `.st-checkbox__indicator`。
  error は `[aria-invalid="true"]`、checked 状態は Radix の `[data-state]`。
  wrapper 内 label の sizing は `:has()` で派生。
- **Switch**: `.st-switch-wrapper` + `.st-switch` + `.st-switch__thumb` + `.st-switch__check`。
  thumb 位置 / check icon の opacity は `.st-switch[data-state="checked"]` で表現
  （`group` Tailwind utility は不要に）。

manifest snapshot: classes +28（13 / 7 / 8）、dataAttributes +2（`aria-busy` / `aria-invalid`）。

BREAKING(pre-1.0): 3 コンポが出力する className 文字列が Tailwind utility 列から
semantic class（`st-btn st-btn--primary st-btn--md` 等）に変更。`className` prop
の追加マージは不変。`buttonVariants()` / `checkboxVariants()` / `switchVariants()` /
`switchThumbVariants()` の戻り値も同様。
  - 消費者影響: `cn(buttonVariants(...), 'inline-flex')` 等で utility を重複指定して
    いる場合のみ visible。通常の `<Button>` / `<Checkbox>` / `<Switch>` 利用は無影響。
  - VRT baseline を持つ消費者は再生成が必要。
  - Dialog / Callout の Button 内部利用は transitive に class chain が変わる
    （visual contract は保持されているので React API 経由なら無影響）。
