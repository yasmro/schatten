---
'@yasmro/schatten': patch
---

Storybook に `@storybook/addon-a11y` を導入し、dev 時に各 story の a11y 違反を
パネル表示する。axe の scan 面は VRT (`@axe-core/playwright`, #147) と同じ
WCAG 2.1 A/AA タグに pin し、Phase 1 は observe-only (`test: 'todo'`)。
