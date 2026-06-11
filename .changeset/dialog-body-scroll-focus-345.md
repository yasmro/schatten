---
'@yasmro/schatten': patch
---

fix(lv1): Dialog の本文スクロール領域をキーボードフォーカス可能に (#345)

`.st-dialog__body` は内容がオーバーフローした時のみ `tabIndex={0}` を持つようになり、focusable な子要素を含まない長文ダイアログでもキーボードでスクロールできます (WCAG 2.1.1 / axe `scrollable-region-focusable`)。オーバーフローしていない通常のダイアログには tab stop を追加しません。focus ring は Button と同じ ring トークンの 2 段 box-shadow です。CSS クラス・属性セレクタの増減はありません (manifest 不変)。
