---
'@yasmro/schatten': patch
---

docs(storybook): `Patterns/Accessibility` ストーリーを追加 (closes #139)

WCAG 2.1 AA を目標水準に、フォーカス可視性 / ARIA 規約 / コントラスト /
キーボード操作 / スクリーンリーダ対応 / 自動テスト (axe・addon-a11y) を
live demo 付きで 7 section にまとめた docs story。最も近い兄弟
`Patterns/Form States` に倣い VRT spec は持たない (dev-time の addon-a11y で
検証)。公開 API (props / CSS class / CSS variable) の変更なし。
