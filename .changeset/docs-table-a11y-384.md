---
'@yasmro/schatten': patch
---

docs(a11y): ハンドビルド docs ページの table を共有 `DocsTable` に集約し、`<th scope="col">` を構造的に強制 (closes #384)

`Accessibility` / `Testing` が二重定義していた `RefTable` を `docs-ui.tsx` の `DocsTable` に統合し、`scope` 欠落・`<th>`/`<td>` 不整合を構造で防ぐ。`CompositionWithAsChild` の比較表も `DocsTable` 化、`CSSApi` の bespoke table には `scope="col"` を直書き。`scope` 欠落は axe の WCAG 2.1 A/AA タグでは検出されないため、per-page axe spec ではなくコンポーネント + `docs-ui.test.tsx` で担保する方針を `vrt-spec-guideline.md` に明文化。docs / internal のみで公開 API は不変。
