---
'@yasmro/schatten': patch
---

`<Field label="…"><Switch /></Field>` のように `Checkbox` / `Switch` 自身の `label` がない形で、`Field` のラベルを押しても値が切り替わらない不具合を直しました。`Field` のラベルが名前になるときは、コントロールが `field.id` を使います。`Field` の `description` を押しても切り替わります。自身の `label`、`aria-label`、`aria-labelledby`、`id` を渡している場合の動きは変わりません。
