---
'@yasmro/schatten': minor
---

BREAKING(pre-1.0): ripple 型 Spinner のアニメーション timing 変数を `--schatten-spinner-*` から `--st-*` prefix に rename（class API と prefix を揃え、v1.0 freeze 前に変数契約を確定）。

- `--schatten-spinner-duration` → `--st-spinner-duration`（default `2.8s`）
- `--schatten-spinner-ripple-delay` → `--st-spinner-ripple-delay`（default `1.1s`）

消費者で override していた場合は sed 一発で移行できます:

```sh
sed -i '' 's/--schatten-spinner-/--st-spinner-/g' <your-css>
```

CSS API: 上記 2 変数を `src/core/tokens/animation.css`（raw `:root` 宣言の SSOT）に集約し、`base.css` の `@theme { … }` で自己参照 idiom (`--st-spinner-duration: var(--st-spinner-duration);`) として登録。これにより両変数が初めて `@theme`-registered の public surface に乗り、`dist/schatten.manifest.json` の `cssVariables` に出現します（145 → 147 vars）。`animation.css` は color token の `semantic.css` + `base.css` 二層パターンと同形で、`index.css`（`/core/tokens` raw entry、`@theme` 無し）からも import されます。

Spinner.css の 3 箇所の参照（`__dot` / `__ripple-1` / `__ripple-2`）は `var(--st-spinner-duration, 2.8s)` / `var(--st-spinner-ripple-delay, 1.1s)` の形に変更。fallback は per-component standalone build (`dist/css/spinner.css`、#291 — token を bundle しない) で timing が空に解決されるのを防ぐためで、統合 build + `/core/tokens` 経由では override 可能な変数が供給されます。

React 利用は無変更。

closes #286
