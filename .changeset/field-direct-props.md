---
'@yasmro/schatten': minor
---

`Field` の中でも、コントロールに直接渡した `disabled`・`isError`・`aria-describedby` が反映されるようにしました。これまでは `Field` の値が優先され、直接渡した値は捨てられていました。たとえば `<Field label="通知"><Switch disabled /></Field>` の `Switch` は、無効になりませんでした。

- `disabled` と `isError` は、`Field` とコントロールのどちらかが `true` なら `true` になります。コントロールの `false` で `Field` の `true` を打ち消せないのは、これまでと同じです。
- `aria-describedby` は、`Field` の説明とエラーの id のあとに、直接渡した id をつなぎます。

対象は `Input`・`Textarea`・`SelectTrigger`・`Checkbox`・`Switch`・`RadioGroup`・`DateCalendar`・`DateRangeCalendar`・`DatePicker`・`DateRangePicker` です。
