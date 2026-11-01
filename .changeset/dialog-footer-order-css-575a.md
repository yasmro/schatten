---
'@yasmro/schatten': minor
---

CSS API: `Dialog` のフッターのボタンの並び順を `Dialog.css` だけで決めるようにしました。`.st-dialog__action` / `.st-dialog__cancel` / `.st-dialog__sub-action` / `.st-dialog__separator` を追加しています。これまで並び順は Tailwind のユーティリティ（`order-*` / `sm:mr-auto` など）に頼っていたため、Tailwind を読み込まない利用者の環境では、フッターが DOM 順（action → cancel → separator → subAction）のまま表示されていました。React の props と DOM 順は変わりません。vanilla HTML で書く場合も、React と同じ DOM 順で 4 つのクラスを付ければ同じ並びになります。
