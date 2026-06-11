---
'@yasmro/schatten': patch
---

docs(storybook): `Theming/Seasonal Showcase` ストーリーを追加 (closes #151)

8 季節 × solid 面 (#150 の rung model payoff) を魅せる showcase。
Eight Seasons (8 季節カード × light/dark) / Side by Side (任意 2 季節対比) /
Dashboard Mockup (lv1 のみで組んだ実画面) / Auto Season (`getCurrentSeason()`
の date デモ) の 4 stories。per-cell スコープの substitution freeze 対策は
ThemeAudit から共有 helper (`scoped-theme-css.ts`) に昇格し、季節表示メタを
`SEASONAL_THEME_METADATA` 由来の SSOT に統合 (ThemeAudit の winter-deep
表示「深紅・墨」→ 実 ramp hue 255 に一致する「藍色・濃紺」へ修正)。
公開 API (props / CSS class / CSS variable) の変更なし。
