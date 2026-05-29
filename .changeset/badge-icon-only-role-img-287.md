---
'@yasmro/schatten': patch
---

Badge の icon-only（`icon` あり・`children` なし）時に `role="img"` を自動付与し、`aria-label` が a11y tree に確実に露出するよう修正。

bare な `<div>` は default role が `generic` で、これは accessible name を持てないため、`<Badge icon={Check} aria-label="Done" />` の `aria-label` は screen reader から無視されていました。`role="img"` を付けることでラベルが addressable になり、`getByRole('img', { name: 'Done' })` で参照できます（component-architecture.md §8 の "queryable accessible name" 契約を満たす）。

- consumer が `role` を明示した場合は常にそちらが勝ちます（`role` を destructure し、末尾の `{...props}` spread に上書きされないようにしています）。
- `children` を持つ Badge には role を付与しません（text node が accessible name を担うため）。

CSS-only consumer 向けにも同じ契約を文書化: icon-only の `.st-badge--icon-only` には `role="img"` + `aria-label` の両方が必要（`CSSApi.stories.tsx` の attribute 表と code 例、`Badge.parity.stories.tsx` を更新）。`role` は manifest の data-attribute surface には含まれないため manifest 変化なし。

closes #287
