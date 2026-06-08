---
'@yasmro/schatten': patch
---

docs(storybook): `Patterns/Testing` ストーリーを追加 (closes #143)。consumer の
E2E (Playwright / Cypress / RTL) 向けに `data-testid` の受け渡し契約を live demo で
実演する — root pass-through / compound (Select) / asChild caveat (Tooltip) /
Portal content / curated-props 例外 (Dialog・Toast) / flat Field の form ケース /
命名は利用者責任 / no-auto-testid。`component-testid-guideline.md` (#106) から本
ストーリーへの pointer を追加。最も近い兄弟 `Patterns/Form States` に倣い VRT spec
は持たない。公開 API (React props / CSS class / CSS variable / types) の変更なし。
