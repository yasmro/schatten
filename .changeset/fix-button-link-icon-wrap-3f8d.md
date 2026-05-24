---
'@yasmro/schatten': patch
---

Fix: `<Button variant="link" icon={…}>` 内の icon が段落内で次行に孤立する不具合を
修正し、テキストとアイコンのあいだに 4px の隙間を追加(sweep-3 #268 のリグレッション)。

原因は 2 つの相互作用:

1. Tailwind v4 preflight が `svg { display: block }` を強制。`.st-btn--link` は
   `.st-btn__content` のような inline-flex ラッパーを持たず svg を直接の子として
   レンダリングするため、`display: block` の svg が独立ブロックとなり強制改行
   を発生させる(他 variant は inline-flex ラッパー内の flex item なので影響なし)。
2. `.st-btn--link { white-space: normal }` がテキストノードと隣接 svg のあいだの
   行分割を許容していた。

加えて、icon とテキストのあいだに視覚的な間が無く貼り付いて見える問題もあり、
これら 3 つを 1 つの修正で解決するため `.st-btn--link` を
`display: inline-flex; align-items: baseline; gap: 0.25rem` に変更:

- svg が flex item となり `display: block` でも改行を起こさない。
- `gap: 0.25rem` で text↔icon 間に 4px の固定余白(iconPosition `start` /
  `end` どちらでも対称に効く)。
- `align-items: baseline` でアイコンを段落テキストのベースラインに揃える。
- `white-space: nowrap` を併用し、長い link テキストの mid-text wrap を抑制
  (link variant は短い inline affordance "Learn more →" 用途を想定)。

`Button.vrt.spec.ts` に `link-variant` story(light / dark の 2 baseline)を追加
してリグレッションを CI で検知できるようにした。manifest snapshot に差分なし
(195 classes / 8 attrs / 145 vars — 公開 API surface は不変)。
