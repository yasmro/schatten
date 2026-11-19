---
'@yasmro/schatten': minor
---

`Field` の説明文（`description`）が、コントロールの名前に入らないようにしました。これまでは説明文を `<label>` で描いていたため、`Input`・`Textarea`・`SelectTrigger`・`DatePicker` の名前に説明文がつながり、同じ文が名前と説明で 2 回読み上げられていました。`Field` にラベルがないときは、説明文がそのまま名前になっていました。

説明文は `<div>` になり、`aria-describedby` だけでコントロールにつながります。そのため、説明文を押しても入力欄にフォーカスは移りません。`Field` にラベルがなく説明文だけがある場合は、コントロールに `aria-label` で名前を付けてください。

素の HTML で `.st-field__description` を使っている場合も、`<label for>` ではなく `<div>` で書いてください。クラス名とスタイルは変わりません。
