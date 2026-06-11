---
'@yasmro/schatten': patch
---

docs(storybook): `Providers/*` ストーリーを docs IA 7 グループ内の `Theming/*` へ移設

`Providers/ThemeProvider` / `Providers/ThemeInitScript` は #320 で確定した
7 グループ IA (storybook-guideline §Story title taxonomy) の外側に 8 番目の
トップレベルを作っていた。両者は Mode × Special のランタイム機構なので
決定表「Anything about Mode × Special → Theming」に従い
`Theming/ThemeProvider` / `Theming/ThemeInitScript` へ retitle。
旧 story ID (`providers-*`) への参照は VRT spec / Welcome deep link /
storySort のいずれにも存在しないことを確認済み。公開 API の変更なし。
