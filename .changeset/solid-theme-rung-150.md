---
'@yasmro/schatten': minor
---

feat(theme): seasonal payoff 強化 — `--color-solid` ファミリーを theme ramp の段参照に再配線 (#150)

- `--color-solid` / `--color-solid-hover` / `--color-solid-foreground` / `--color-solid-foreground-hover` が theme ramp の段 (light: 700/900/100/300、dark: 300/100/800/700) を参照するようになりました。「Mode が段を選び、Special が ramp を供給する」モデルです。seasonal テーマ (`data-theme="season--*"`) を有効にすると、Button primary / Badge・Callout・Toast の neutral × solid が季節色で再着色されます。
- default の theme scale (`--color-theme-50..950`) の解決先が blue → alabaster (中立 ramp) に変わりました。**Special 非適用時の solid 面の見た目は再配線前と完全に同一** (value-preserving) ですが、`bg-theme-*` ユーティリティや `tokens.theme*` (JS) を直接使っている場合は default 値が blue から warm neutral に変わります。
- CSS 変数名・`.st-*` クラスの増減はありません (manifest 不変)。seasonal の allowlist (`['--color-theme-*']`) も不変で、Special が solid を直接書くことは引き続き禁止です。
- 注意: custom property 連鎖の置換は宣言要素 (`:root`) で確定するため、`data-theme` は `<html>` に設定してください (サブツリーの wrapper では solid が再着色されません)。
