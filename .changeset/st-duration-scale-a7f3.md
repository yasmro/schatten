---
'@yasmro/schatten': minor
---

CSS API: enter/exit のトランジション timing を集約する共有スケール `--st-duration-*`（`fast` 100ms / `base` 150ms / `slow` 200ms）を新設。`#286` の Spinner timing で確立した二層パターン（raw `:root` 宣言を `src/core/tokens/animation.css` に置き、`base.css` の `@theme { … }` で自己参照 idiom 登録）をそのまま雛形にしています。これにより 3 変数が `@theme`-registered の public surface に乗り、`dist/schatten.manifest.json` の `cssVariables` に出現します（147 → 150 vars）。consumer は 1 つの override で base motion を一括調整できます。

これは **value-preserving な集約**です。移行した各参照は元のハードコード値と完全一致するため、見た目は一切変わりません（VRT 再ベースライン不要 — Tooltip / Dialog / Toast の既存スナップショット 32 件がそのまま緑）:

- **Tooltip.css** — enter `--st-duration-base`（150ms）/ exit `--st-duration-fast`（100ms）
- **Dialog.css** — open `--st-duration-slow`（200ms）/ close `--st-duration-base`（150ms）
- **Toast.css** — swipe-cancel snap-back + swipe-end dissolve が `--st-duration-slow`（200ms）

各参照は `var(--st-duration-*, <fallback>)` 形で、per-component standalone build（`dist/css/*.css`、#291 — token を bundle しない）でも fallback により同じ cadence で動作します。

Toast の dissolve enter/exit（320ms / 220ms）は意図的にスケールの **外**に残しました — Tooltip/Dialog より重い独自 cadence で、スケールの 3 段（fast/base/slow）をきれいに保つためハードコードを維持。スケールに畳むべきかは将来の motion-retune spike に委ねる aesthetic な判断で、この seam の対象外です（`animation.css` / `Toast.css` のコメントに明記）。

また、icon-only / symbol-only な静的要素の role 選択基準を `component-architecture.md` §8 に追記（static meaning → `role="img"`、変化する meaning → live-region role、consumer 指定の role が常に優先）。doc のみの変更で public surface 影響なし。

React 利用は無変更。
