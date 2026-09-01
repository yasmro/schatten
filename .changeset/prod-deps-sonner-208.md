---
'@yasmro/schatten': patch
---

`sonner` を 2.0.7 → 2.0.8 に更新（`dependencies` の exact pin なので、公開パッケージのインストールグラフが変わる）。あわせて `@radix-ui/*` 11 パッケージ（caret 範囲内 / package.json は不変）と `react` / `react-dom` 19.2.8 を更新。

視覚契約への影響なし — VRT 411 件・a11y 268 件がゼロ差分で通過（区分 A/B の parity VRT、区分 C/D の実ブラウザ interaction test を含む）。`@radix-ui/react-tooltip` 1.2.16 で `role="tooltip"` がコンテンツ要素そのものに載るようになったため、`Tooltip.test.tsx` の `.parentElement` 経由のアサーションを要素直参照に更新（テストのみ・公開 API 不変）。
