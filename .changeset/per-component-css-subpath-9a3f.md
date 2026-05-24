---
'@yasmro/schatten': minor
---

CSS API: per-component CSS subpath `@yasmro/schatten/css/<component>` を
追加（#291）。**18 lv1 全コンポ**（`badge` / `button` / `callout` /
`checkbox` / `dialog` / `field` / `fieldset` / `icon` / `input` / `radio`
/ `select` / `separator` / `spinner` / `switch` / `text` / `textarea` /
`toast` / `tooltip`）がそれぞれ独立した CSS subpath で配布されるように
なる。

- **新規 build step `build:component-css`** — `scripts/build-component-css.mjs`
  が `src/components/lv1/<Name>/<Name>.css` をそれぞれ
  `dist/css/<slug>.css` に minify 出力（Tailwind v4 CLI 経由 = 既存
  `build:css` と同じ lightningcss パス）。`pnpm build` の chain に
  `build:css` 直後で組み込み。
- **`package.json#exports` に `./css/*` wildcard を追加**。`./dist/css/*.css`
  にマップ。consumer は `import '@yasmro/schatten/css/button'` 1 行で
  Button だけのスタイルを読み込める（前提: `./tokens` も別 import）。
- **size-limit per-component budget** — `.size-limit.json` に 18 件 + 集約
  1 件を追加。各コンポ 1.5 KB（brotli）、集約 20 KB。現状最大は
  `css/select` の 815 B（45% 余裕）、最小は `css/separator` の 88 B。
- **`@yasmro/schatten/variants` の React-free 性を再確認** — 既存の
  multi-entry tsup + `peerDependenciesMeta.react.optional`（v0.8.0 で
  着地済）の上に乗る形。`dist/variants/index.js` / `dist/variants/index.cjs`
  / `dist/tokens/index.js` / `dist/tokens/index.cjs` いずれも `react` /
  `react-dom` への import なし（grep で 0 件確認、DoD #3）。
- **README に "Per-component CSS" セクション追加**。vanilla HTML / bundler
  両系統のサンプル + 必要 import の説明 + 詳細な Lighthouse / critical
  CSS recipe への参照（#293 — 別 issue）。
- **lv2 / monorepo split は対象外** — `./components/lv2` subpath は
  post-1.0 で別途、`@yasmro/schatten-core` / `-react` の物理分割は v1.x
  で実需が立った時点で再検討。

DoD（全 6 項目完了）:

1. `package.json#exports` に subpath 宣言 → `./css/*` wildcard で 18 件
   をまとめて宣言。
2. `dist/css/<component>.css` × 18 生成 → `pnpm build` で確認。
3. `dist/variants/index.{js,cjs}` に react 参照なし → grep 0 件。
4. `@yasmro/schatten/css/button` 単独 import で Button スタイル適用
   （vanilla HTML）→ `var(--color-solid)` 等の参照が `dist/core/tokens/`
   で resolve することを構造確認。
5. size-limit per-component budget → 18 件追加、`pnpm size` で all green。
6. CHANGELOG `CSS API:` prefix → 本エントリ。

closes #291
