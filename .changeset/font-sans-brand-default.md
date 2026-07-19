---
'@yasmro/schatten': minor
---

CSS API: `--font-sans` のブランドスタック (`"Hanken Grotesk", "LINE Seed JP", …`) が `dist/schatten.css` の live default になりました。従来は `entry.css` 末尾の unlayered `:root { --font-sans: var(--font-sans-fallback) }`(#33 standalone CSS 時代の carry-over)が `@layer theme` レジストラの宣言を常に上書きしており、Hanken Grotesk / LINE Seed JP をロードしても `--font-sans` を自分で再宣言しない限りブランド描画が届きませんでした(dead default)。この上書きを撤去し、`--font-serif` と同じ **load-to-activate**(フォントをロードすればブランド描画、しなければ stack 末尾の system fallback へ自然にフォールバック)に統一します。

- 変数名・上書き recipe(`:root { --font-sans: "Your Font", var(--font-sans-fallback) }`)は不変 — contract surface は変わらず、named slot の既定値のみ変更。
- ブランドフォントをロード/インストールしていない環境では描画は従来と同一。**Hanken Grotesk / LINE Seed JP をページにロード済み(または OS にインストール済み)の環境では、UI/body テキストが system フォント → ブランドフォントに変わります。** 従来挙動(system 既定)を維持したい場合は unlayered `:root { --font-sans: var(--font-sans-fallback) }` を自分の CSS に宣言してください。
- 対称契約は `scripts/__tests__/build-css.test.ts` で機械固定。経緯と判断は `docs/decisions/2026-07-font-sans-brand-default.md`。
