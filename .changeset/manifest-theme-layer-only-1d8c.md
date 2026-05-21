---
'@yasmro/schatten': minor
---

CSS API: manifest の `cssVariables` 抽出を **Tailwind v4 `@theme` 登録分** に限定。`scripts/generate-manifest.mjs` を `:root` 直下の `--*` 全部から prefix で絞る方式 → `@layer theme { :root, :host { … } }` (Tailwind が `@theme` ディレクティブを compile した出力) 配下に限定する方式に書き換えた。

これにより `dist/schatten.manifest.json#cssVariables` から以下のような **`@theme` 未登録の内部トークン** が除外される:

- font weight 数値 (`--font-bold` / `--font-medium` / `--font-normal` / `--font-semibold`)
- font fallback stack (`--font-sans-fallback` / `--font-serif-fallback` / `--font-mono-fallback`)
- 生 typography スケール (`--text-xs` / `--text-sm` / `--text-2xl` 等 — Tailwind utility `text-xs` 経由で参照する内部値)
- spacing の sub-step 値 (`--spacing-0-5` / `--spacing-1-5` / `--spacing-2-5` / `--spacing-3-5` / `--spacing-7` / `--spacing-9` / `--spacing-14`)

代わりに、prefix list で見落としていた `@theme` 由来トークンが正しく capture されるように:

- `--default-font-family` / `--default-mono-font-family` (Tailwind v4 が `@theme { --font-sans }` から自動で emit するもの)
- `--leading-normal` / `--leading-snug` / `--leading-tight` (line-height utility)

Pre-1.0 の保守的縮小 — manifest を依存していた consumer はまだ存在しないと想定。**v1.0 凍結前に「公開 = `@theme` 登録分」原則を機械的に確立**し、内部 primitive を後から rename する自由を確保する。closes #280
