---
'@yasmro/schatten': minor
---

CSS API: sweep-5 compound (heavy) — Select と Tooltip の公開クラス API を追加。`<button class="st-select__trigger st-select__trigger--md">` 形式の semantic class が `dist/schatten.css` に同梱され、React 利用と同じ trigger の見た目が vanilla HTML でも得られる（Tooltip も同様に `.st-tooltip__content` / `.st-tooltip__arrow`）。

BREAKING(pre-1.0): Select と Tooltip が出力するクラス文字列が Tailwind utility (`flex w-full ...` / `tooltip-content z-[var(--z-tooltip)] ...`) から semantic class (`st-select__trigger st-select__trigger--md` / `st-tooltip__content`) に変更。`className` prop のマージは不変。
- `selectTriggerVariants()` の戻り値も同様に変更
- 消費者影響: `cn(selectTriggerVariants(...), 'h-12')` のような Tailwind utility 重複指定をしているケースのみ。通常の `<SelectTrigger>` / `<Tooltip>` 利用は無影響
- VRT baseline を持つ消費者は再生成が必要

CSS API: `.tooltip-content` クラスを `.st-tooltip__content` に rename（pre-1.0 のクラス命名揃え）。`.st-tooltip__arrow` を新規追加（Tooltip Arrow に dedicated class を提供）。

Select の vanilla HTML 利用は **trigger のビジュアル parity のみ**保証。content（dropdown）の動作は Radix JS が必要 — vanilla で content を使う場合は Floating UI 等の BYO-JS が要る（#297 で post-1.0 にドキュメント化予定）。

closes #270
