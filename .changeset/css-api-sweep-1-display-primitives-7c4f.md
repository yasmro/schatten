---
'@yasmro/schatten': minor
---

BREAKING(pre-1.0): Separator / Text / Icon の class 出力を Tailwind utility（`shrink-0 bg-border h-px w-full` / `text-error text-center truncate` / `size-5 text-inherit`）から `.st-*` semantic class chain（`st-separator` / `st-text st-text--body st-text--md st-text--default` / `st-icon st-icon--md st-icon--inherit`）に変更。React 利用は `<Separator>` / `<Text>` / `<Icon>` の prop 経由のままで影響なし。

消費者影響:

- `cn(textVariants(...), 'truncate')` のような **CVA 出力との重複 utility 指定** をしているケースは、出力 class セットの内訳が変わる（動作は等価）。
- `<Text className="font-bold">` 等の `className` override は、`@layer components` → `@layer utilities` の順序で従来より**確実に勝つ方向**になる。意図せず CVA 出力に依存していたケースのみ要確認。
- VRT baseline を持つ消費者は再生成が必要。

CSS API: 3 コンポを `@layer components` 配下に追加（44 クラス、`data-orientation` 1 属性が新規）。vanilla HTML から以下が動く:

```html
<div class="st-separator" data-orientation="horizontal" role="none"></div>
<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
<svg class="st-icon st-icon--md st-icon--inherit">...</svg>
```

Note: Icon の root class `.st-icon` 自体は CSS rule を持たない（全 visual property は modifier 側）。Tailwind の minify が空ルールを除去するため、`dist/schatten.css` には `.st-icon` 規則が含まれない（modifier `st-icon--{sm/md/lg}` / `st-icon--{color}` は全て存在）。
