---
'@yasmro/schatten': minor
---

CSS API: Callout / Toast のアイコン整列とアクション/クローズのレイアウトを調整。

- **アイコンの垂直中心を title の1行目に合わせた。** title+body（Toast は
  title+description）の multi-line regime で、アイコン（1.25rem）が title の
  line-box（0.875rem×1.25 = 1.09375rem）より背が高いため、従来の `flex-start`
  + `margin-top: 0.125rem` ではアイコン中心が title 中心より約3px下にずれて
  いた。`margin-top: calc((0.875rem * 1.25 - 1.25rem) / 2)` で title の1行目に
  乗せる（icon + title を `align-items: center` の行で囲ったのと数学的に等価、
  DOM 再構成なし）。Toast は regime トリガを `:has(.st-toast__description)` →
  `:has(.st-toast__title):has(.st-toast__description)` に変更して Callout と
  ミラー（description 単独の Toast はアイコンが1行にセンタリングされる）。
- **action を body の下へ移動。** `.st-callout__action` / `.st-toast__action`
  は trailing slot（右）ではなく `__content` 列内の body 下
  （`align-self: flex-start`）に描画。
- **close (X) を専用ボタン化。** 従来は `<Button size="sm" icon={X}>`
  （= `.st-btn--sm.st-btn--icon-only`、2rem 角）を流用していたが text-button の
  padding でコーナーでは過大に見えたため、専用の `.st-callout__close` /
  `.st-toast__close`（1.5rem 角・`currentColor` で tone 非依存・DS の focus
  ring）に置換。`.st-btn` は付与しない。multi-line regime では close を
  `margin-top: -0.25rem` 上げて title 行／コーナーに寄せる（single-line は
  `align-items: center` でセンタリング維持）。

クラス追加: `.st-callout__close` / `.st-toast__close`（additive）。
`.st-callout__action` / `.st-toast__action` は配置が trailing → below-body に
変わる（既存クラスの意味変更）。React の `action` / `onClose` props は不変。
Sonner swipe 対策（`.st-toast__close svg { pointer-events: none }`、#318）は
専用ボタンへ引き継ぎ済み。Callout / Toast の VRT baseline 再生成が必要。
