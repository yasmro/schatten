---
'@yasmro/schatten': patch
---

perf(lv1): Button のローディングスピナーをアイドル時に停止

非 link / 非 asChild の Button は、ローディング transition をレイアウトシフトなしでクロスフェードさせるため、`.st-btn__spinner-overlay`（中の `Spinner`）を常に DOM に保持し、アイドル時は `opacity: 0` で隠している。だが `opacity: 0` の要素もコンポジット対象なので、Spinner の `animation: schatten-spin … infinite` が**全アイドルボタン上で回り続け**、ローディング中のボタン数ではなく描画ボタン数に比例した無駄なコンポジタ処理が発生していた（タブが idle に落ちず、低スペック / モバイルでの電力影響、`O(全ボタン数)` のスケール特性）。

`.st-btn__spinner-overlay .st-spinner__rotor` を既定で `animation-play-state: paused` にし、`.st-btn[aria-busy="true"]` 配下でのみ `running` に切り替える。クロスフェードの UX（overlay の `opacity` 0↔1 transition）と DOM 常駐はそのまま、見えていないスピナーのアニメーション tick だけを止める。

CSS API: クラス・状態属性・CSS 変数の追加 / 改名 / 削除はなし（既存 `.st-btn__spinner-overlay` / `.st-spinner__rotor` / `[aria-busy="true"]` を使った `animation-play-state` の付与のみ — component-architecture.md §7 が lv1-local CSS で許可する「`animation-play-state` を状態属性に紐づける」パターン）。静止画の見た目は不変（アイドル時は `opacity: 0`、ローディング時は停止フレームと実行中フレームが静止画では区別不能）なため、VRT baseline の再生成は不要。
