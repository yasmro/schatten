# ADR-0009: 汎用 Polymorphic API（`as` prop）は不採用（`Text` のみ carved exception）

- **Status**: Accepted
- **Date**: 2026-03 起点 / v0.11.0（`Text` の `asChild` 撤去、`as` + `textVariants()` に集約）
- **Related**: [#192](https://github.com/yasmro/schatten/issues/192)（asChild adoption criteria） /
  [component-architecture.md](../../.claude/rules/component-architecture.md) §4,
  [component-api-conventions.md](../../.claude/rules/component-api-conventions.md)（asChild vs `*Variants()`）,
  [ADR-0001](ADR-0001-shadcn-base.md)

## Context

「Button を `<a>` として描きたい」「Text を `<h2>` にしたい」といった多態ニーズがある。
汎用 polymorphic（`<Button as="a" href=…>`、`as: ElementType`）はこれを一発で解くが、
型推論に重いジェネリック（`ElementType` + `PolymorphicComponentProp`）が要り、`forwardRef` と
競合し、大規模消費者アプリでエディタ性能を劣化させる。

## Decision

**汎用 polymorphic `as` は採らない**（shadcn / Radix と同じ方針、
[component-architecture.md](../../.claude/rules/component-architecture.md) §4）。代替は
**CVA variants 関数のエクスポート**: `buttonVariants()` / `textVariants()` を
`@yasmro/schatten/variants` から公開し、消費者が自分の要素に適用する。

```tsx
<a href="/docs" className={buttonVariants({ variant: 'primary' })}>Docs</a>
```

> ⚠️ **carved exception — `Text` は `as` を持つ。** `as?: 'p' | 'span' | 'h1'..'h6'` の
> **閉じた列挙**（`ElementType` ではない union）。8 タグは同じ属性面・同じ DOM role（テキスト
> コンテナ）を共有し、推論コストがゼロ。原則「不採用」＋「Text 例外」が正確な記述。

`asChild`（Radix Slot）とは役割が違う: `*Variants()` は**クラス文字列だけ**を渡す
（見た目だけ欲しい時）。`asChild` は className + props/ref を子に転送する（要素を button として
「振る舞わせたい」時）。新 lv1 は既定で `asChild` を付けない（[component-api-conventions.md](../../.claude/rules/component-api-conventions.md)）。

## Rationale

- **汎用 polymorphic を却下した理由:** 型推論コストと `forwardRef` 競合、エディタ性能劣化。
  `*Variants()` で同じユースケース（framework `<Link>` を含む）を、消費者の要素を完全に型付けした
  まま解ける。
- **`Text` を例外にできる理由:** 8 タグは属性面と役割が同一で union が小さい（≤8）ため推論コスト
  ゼロ。`Button → a` は role（interactive → navigation）と必須属性（`type` → `href`）が変わり、
  まさに polymorphic 型が narrow に苦しむ形 → `buttonVariants` に委ねる。

## Consequences

- (+) 公開型面が軽く、`forwardRef` と素直に両立。消費者の要素は native 型を保つ。
- (+) framework `<Link>`（Next / Router / Remix）にそのまま `className` を渡せる。
- (−) 「見た目だけ欲しい」と「button として振る舞わせたい」で `*Variants()` / `asChild` を
  使い分ける必要がある（[component-api-conventions.md](../../.claude/rules/component-api-conventions.md)
  に決定表）。
- **判断の目安:** `as` が `ElementType` を受けるなら拒否。閉じた同族タグ集合（≤8、属性面共通）なら
  可、ただし PR で正当化。

## Review

- 2026-03 — 汎用 polymorphic 不採用（遡及記録）。
- v0.11.0 — `Text` の `asChild` を撤去し `as`（閉じた enum）+ `textVariants()` に集約。
