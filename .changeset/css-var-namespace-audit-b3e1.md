---
'@yasmro/schatten': patch
---

CSS API: 公開 CSS 変数の命名 audit (#231) を確定。命名規約を 4 層モデル
(プリミティブ=非公開 / Tailwind 慣習=bare / セマンティック `--color-*`=bare・
衝突は文書化して回避側は consumer scoping / schatten 固有=`--st-` prefix) として
api-stability.md に一本化した。

公開面に残っていた唯一の Tailwind 規約名 `--default-font-family` /
`--default-mono-font-family` を撤去 (consumer 自前 Tailwind v4 preflight と
`@layer theme` 内で衝突するため)。vendored preflight は `var(--font-sans, …)` /
`var(--font-mono, …)` を直参照するよう書き換え — 間接層は元々これらを指すだけなので
**解決値・レンダリング不変**。公開 CSS 変数は 129 → 127。
