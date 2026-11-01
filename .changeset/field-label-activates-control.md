---
'@yasmro/schatten': patch
---

`<Field label="…"><Switch /></Field>` のように `Checkbox` / `Switch` 自身の `label` がない形で、`Field` のラベルを押しても値が切り替わらない不具合を直しました。`Field` のラベルが名前になるときは、コントロールが `field.id` を使います。自身の `label`、`aria-label`、`aria-labelledby`、`id` を渡している場合の動きは変わりません。`Field` の `description` を押しても切り替わりません。

同じ `Field` の中に、自身の `label` がない `Checkbox` / `Switch` と `Input` などを並べている場合は影響があります。`field.id` が重複し、先に書いたコントロールがラベルを受け取るので、`<Field label="Email"><Checkbox /><Input /></Field>` では `Input` の名前がなくなります。`Field` は 1 つのコントロールを包むものなので、`Checkbox` / `Switch` に `label` か `aria-label` を渡してください。開発中は、`id` が重複すると `Field` が `console.warn` を出します。
