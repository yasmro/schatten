---
'@yasmro/schatten': patch
---

dist ビルドパイプラインを脱 Tailwind 化 (lightningcss へ置換)。`dist/schatten.css` / `dist/css/*.css` は Tailwind v4 CLI ではなく lightningcss で bundle + minify されるようになり、`@theme` 展開はハンドメンテナンスの public registrar (`src/styles/public-tokens.css`)、preflight はベンダリング (`src/styles/preflight.css`) に置き換え。公開 surface (`.st-*` クラス 252 / state 属性 8 / CSS 変数 129) は完全不変 — manifest 0 diff・dist VRT 0 diff を確認済み。Tailwind は Storybook (dev) 専用依存として残る。(#317)
