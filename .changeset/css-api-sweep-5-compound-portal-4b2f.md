---
'@yasmro/schatten': minor
---

CSS API: sweep-5 compound (heavy) — Select と Tooltip の公開クラス API を追加。`<button class="st-select__trigger st-select__trigger--md">` 形式の semantic class が `dist/schatten.css` に同梱され、React 利用と同じ trigger の見た目が `dist/schatten.manifest.json` 経由で確定的に消費可能になる（Tooltip も同様に `.st-tooltip__content` / `.st-tooltip__arrow`）。

BREAKING(pre-1.0): Select と Tooltip が出力するクラス文字列が Tailwind utility (`flex w-full ...` / `tooltip-content z-[var(--z-tooltip)] ...`) から semantic class (`st-select__trigger st-select__trigger--md` / `st-tooltip__content`) に変更。`className` prop のマージは不変。
- `selectTriggerVariants()` の戻り値も同様に変更
- 消費者影響: `cn(selectTriggerVariants(...), 'h-12')` のような Tailwind utility 重複指定をしているケースのみ。通常の `<SelectTrigger>` / `<Tooltip>` 利用は無影響
- VRT baseline を持つ消費者は再生成が必要

CSS API: `.tooltip-content` クラスを `.st-tooltip__content` に rename（pre-1.0 のクラス命名揃え）。`.st-tooltip__arrow` を新規追加（Tooltip Arrow に dedicated class を提供）。

Note: Select / Tooltip は #297 の区分 D (JS 必須) / C (静的描画のみ) なので vanilla HTML での realistic な利用シナリオは無い (compound 動作 / 位置決めに JS 必須)。クラス API は manifest と unit test の `class API` describe block で defended、parity story は意図的に **作らない**。判定基準は [vrt-spec-guideline.md §Parity stories](.claude/rules/vrt-spec-guideline.md) に追記。

closes #270
