---
'@yasmro/schatten': minor
---

feat(lv1): FieldContext に `labelId` を追加 — Field label が self-labelled / group コンポーネントの accessible name になるように (#345)

- `FieldContextValue` に `labelId?: string` を追加 (additive)。`<Field label>` が描画する `<label>` 要素に id が付き、context 経由で参照できます。
- `Checkbox` / `Switch` は自前の `label` prop が無く、`aria-label` / `aria-labelledby` の明示指定も無い場合に限り、Field の label を `aria-labelledby` で参照します。`<Field label="Notifications"><Switch /></Field>` がスクリーンリーダーで「Notifications」と読み上げられるようになります (従来は無名 — axe `button-name` 違反)。
- `RadioGroup` は group root (`role="radiogroup"`) で Field label を `aria-labelledby` 参照します (radiogroup は `htmlFor` では命名できないため)。
- 優先順位: 明示の `aria-label` / `aria-labelledby` > 自前 `label` > Field の `labelId`。既存の利用形 (自前 label あり / Field 外) の出力 DOM は不変です。
- 既知の限界: Field label クリックでの focus / toggle 連動は self-labelled コンポーネントでは効きません (SR 名の配線のみ)。
