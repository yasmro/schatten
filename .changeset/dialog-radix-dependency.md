---
'@yasmro/schatten': patch
---

`Dialog` の中で開いた `Select` などで Esc を押すと、`Dialog` まで閉じてしまう不具合を直しました。`@radix-ui/react-dialog` が `devDependencies` に入っていたため、ビルド時に Radix Dialog とその内部パッケージ（DismissableLayer など）が dist に同梱されていました。その結果、利用者のアプリの中では、`Dialog` と `Select` / `DropdownMenu` / `Popover` / `Tooltip` が別々のインスタンスでレイヤーを管理していました。`@radix-ui/react-dialog` を `dependencies` に移したので、これらは利用者の `node_modules` にある同じ Radix のパッケージを使うようになります。props や DOM は変わりません。
