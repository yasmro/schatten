---
'@yasmro/schatten': minor
---

CSS API: motion の用途トークンを 9 個追加しました。コンポーネントの開閉と hover などの時間は、すべてこのトークンで決まります。

| トークン | 値 | 用途 |
|---|---|---|
| `--motion-overlay-enter` / `--motion-overlay-exit` | 200ms / 150ms | モーダル（Dialog）の開閉 |
| `--motion-popover-enter` / `--motion-popover-exit` | 150ms / 100ms | モーダル以外の開閉（Popover・Select・Tooltip・DropdownMenu） |
| `--motion-ease-enter` / `--motion-ease-exit` | `cubic-bezier(0.22, 1, 0.36, 1)` / `ease-in` | 開閉の曲線 |
| `--motion-feedback` | 200ms | hover・色や状態の変化 |
| `--st-ease-smooth-out` / `--st-ease-in` | 上の曲線の元の値 | `--motion-ease-*` の下の層 |

既存の `--motion-quick` / `--motion-base` / `--motion-expressive` と `--st-duration-*` は、名前も値も変わりません。

見た目の変更:

- **Dialog・Popover・Select の開閉が、フェードだけになります。** Dialog と Select の縮小、Popover の開く向きへの 8px のスライドをやめました。時間は変わりませんが、立ち上がりの速い曲線になるので、開いた面が読める状態に早く着きます。
- **時間が変わる箇所が 3 つあります。** Badge の色の変化（150ms → 200ms）、Button の読み込み表示の切り替え（300ms → 200ms）、Tabs の下線の不透明度（150ms → 200ms）です。
- **`prefers-reduced-motion: reduce` のとき、開閉のアニメーションが止まるようになりました。** Dialog・Popover・Tooltip にはこれまでも対策のルールがありましたが、セレクタの詳細度が足りず、アニメーションが止まっていませんでした。Select と DropdownMenu にも対策を足しました。Switch のつまみは、スライドせずに切り替わります。
- **keyframes の名前が変わりました。** Dialog は `dialog-overlay-fade-in` / `dialog-content-zoom-in` などを `dialog-fade-in` / `dialog-fade-out` にまとめ、Popover の向きごとのスライド（`popover-slide-in-from-top` など 8 個）は削除しました。keyframes の名前は公開 API ではありませんが、名前を指定してアニメーションを上書きしていた場合、その上書きは効かなくなります。

単体配布の CSS（`@yasmro/schatten/css/<slug>`）はトークンを含まないので、各ルールはトークンと同じ値を既定値として書き添えています（`var(--motion-feedback, 200ms)`）。トークンを上書きしない限り、単体配布の CSS でも同じ時間で動きます。
