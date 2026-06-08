---
'@yasmro/schatten': patch
---

docs(storybook): `Patterns/Layout` ストーリーを追加 (closes #142)

Stack / HStack / VStack を採用せず Tailwind utility で直接組むためのレシピ集
(Flex 横+縦 / Grid / Container max-width / Responsive)。不採用の根拠は
`Tokens/Spacing › Why No Layout Primitives` に委ね prose で相互リンク。Container は
Tailwind v4 で廃止された `max-w-screen-*` を避け、content 幅スケールと breakpoint
変数参照 (`max-w-(--breakpoint-*)`) の両系統を提示。兄弟 `Patterns/*` docs 同様
VRT spec は持たない。公開 API (React props / CSS class / CSS variable / types) は不変。
