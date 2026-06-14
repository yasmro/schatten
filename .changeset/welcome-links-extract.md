---
'@yasmro/schatten': patch
---

refactor(docs): Welcome のリンクマニフェスト (`WELCOME_DEEP_LINKS` /
`WELCOME_COMPONENT_SLUGS`) を `Welcome.stories.tsx` の named export から
非 stories モジュール `Welcome.links.ts` へ切り出し。Storybook の CSF
スキャナがこれらの定数をストーリーと誤認し、空の `WELCOME DEEP LINKS` /
`WELCOME COMPONENT SLUGS` というサイドバー項目を生成していた不具合を解消する
(CSF は `*.stories.tsx` のみ走査するため構造的に解決し、`excludeStories` の
ような後付け抑制が不要)。Welcome ページの deep-link カードと drift テストは
新モジュールから import するよう更新。公開 API (React props / CSS class /
CSS variable / types) の変更なし。
