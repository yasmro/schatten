---
'@yasmro/schatten': patch
---

docs(storybook): Welcome に Patterns 節を新設し、全 6 Patterns ページ
(Accessibility / Composition with asChild / Form Composition / Form States /
Layout / Testing) へのリンクカードを追加 (closes #364)。7 グループ IA (#320 /
#332) の入口が Welcome から完結する。あわせて `navigateToStory` に `viewMode`
引数を追加し、autodocs を持たない Canvas ストーリーへの既存 deep link 5 本
(CSS API / Theme Audit / Patterns Accessibility / Tokens Color / Typography)
が「No Preview」になる不具合を修正。公開 API (React props / CSS class /
CSS variable / types) の変更なし。
