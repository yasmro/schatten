# Framework-agnostic 動作確認

[#161](https://github.com/yasmro/schatten/issues/161) の 1.0 品質ゲート。
Schatten の framework-agnostic (CSS class API) surface が Vanilla HTML / Astro
/ Vue の 3 環境で想定通り動くことを実測した記録。検証ハーネスは
[`examples/`](../../examples/) にあり、この文書はその結果表。

- **契約**: [`css-api.md`](../../.claude/rules/css-api.md)（`.st-*` class API、
  attribute-driven state）/ [`theme-architecture.md`](../../.claude/rules/theme-architecture.md)
  （Mode × Special、`data-theme` 軸）
- **前提**: [#154](https://github.com/yasmro/schatten/issues/154)（class 棚卸し、
  v0.9.0 で完了）

## 検証環境（この記録の実測条件）

| 環境 | 手段 | schatten の入り方 |
|---|---|---|
| Vanilla HTML | Playwright Chromium で `file://.../examples/vanilla-html/index.html` を開き、computed style を assert + スクリーンショット | `../../dist/schatten.css` を相対 `<link>`（ローカル dist 版） |
| Vanilla HTML（CDN） | 同上（`<link>` を CDN へ一時反転、[#468](https://github.com/yasmro/schatten/issues/468)） | `https://cdn.jsdelivr.net/npm/@yasmro/schatten@0.15.0/dist/schatten.css`（`@0.15.0` ピン留め） |
| Astro | `pnpm install --ignore-workspace && pnpm build`（Astro 5 + @astrojs/react 4 + React 19） | `import '@yasmro/schatten/schatten.css'`、`@yasmro/schatten` は `file:../..` |
| Vue | `pnpm install --ignore-workspace && pnpm build`（Vue 3.5 + Vite 7） | `import '@yasmro/schatten/schatten.css'`、`@yasmro/schatten` は `file:../..` |

CDN 版は lightningcss 産 dist が npm に載った最初のリリース（v0.15.0、
2026-07-13 publish）に対して 2026-07-15 にスモーク済み — 下記
「[CDN スモーク（jsdelivr）](#cdn-スモーク（jsdelivr）--468)」。

## チェック項目 × 環境

✅ 実測で確認 / ⚠️ 区分 C/D の想定通りの制限（不具合ではない）

| チェック項目 | Vanilla | Astro | Vue | 根拠 |
|---|:--:|:--:|:--:|---|
| CSS rule が当たる（色/spacing/typography） | ✅ | ✅ | ✅ | `.st-btn--primary` の `background-color` = `oklch(0.37 0.01 70)`（非透明 → preflight OK）。Astro 生成 HTML に `st-btn st-btn--secondary st-btn--sm`、bundle CSS にトークン。Vue build で `dist/assets/*.css` 77 KB (11.7 KB gzip) |
| light/dark（`.dark` toggle） | ✅ | ✅ | ✅ | `.dark` 付与で `body` bg が `rgb(30, 30, 28)` に。3 環境ともトグル JS は `<html>` を書き換えるだけ |
| seasonal（**`data-theme="season--*"`**） | ✅ | ✅ | ✅ | `data-theme="season--spring-early"` で `--color-theme-500` が `oklch(58% .01 70)`（neutral alabaster）→ `oklch(64% .1 12)`（spring-early）にシフト |
| hover/focus state | ✅ | ✅ | ✅ | 実ブラウザで Button の hover / focus-visible ring を確認 |
| disabled state | ✅ | ✅ | ✅ | `<button ... disabled>` が muted 表示 + 非活性 |
| form error（**`aria-invalid="true"` 経由**、class 単体不可） | ✅ | ✅ | ✅ | `.st-input-wrapper:has(.st-input[aria-invalid])` の border が `oklch(0.56 0.17 22)`（error red）、通常は `oklch(0.18 0.01 250)`。class を書いただけ（属性なし）ではエラー表示にならない契約を実証 |
| animation：**Spinner（純 CSS）** | ✅ | ✅ | ✅ | `.st-spinner` は CSS animation のみで vanilla でも回る |
| animation：**Toast（React/Sonner 必須）** | ⚠️ | ⚠️ | ⚠️ | `.st-toast` は静的な見た目のみ。enter/exit・swipe・portal・live region は Sonner（React）必須 |
| Portal/interactive は class API 単体で動かない | ⚠️ | ⚠️ | ⚠️ | 下記「React 必須リスト」参照。静的シェルは描画されるが機能しない |
| per-component subpath（`@yasmro/schatten/css/button`） | — | — | ✅ | Vue の `src/main.ts` に個別 import のパスを明記（全 CSS 不要の配信例） |

### スクリーンショット（Vanilla）

- [`screenshots/vanilla-light.png`](screenshots/vanilla-light.png) — light、区分 A/B 17 個 + 区分 C/D 静的シェル
- [`screenshots/vanilla-dark.png`](screenshots/vanilla-dark.png) — `.dark`
- [`screenshots/vanilla-seasonal.png`](screenshots/vanilla-seasonal.png) — `data-theme="season--spring-early"`

## 区分（vanilla 可否）

`scripts/audit-coverage.mjs` の `PARITY_EXEMPT` と parity story の有無が正典。

### 区分 A/B — vanilla 完全可（17 個）

Badge, Button, Callout, Card, Checkbox, Field, FieldSet, Icon, Input, Radio,
Separator, Skeleton, Spinner, Switch, Table, Text, Textarea。

class + HTML/ARIA 属性だけで成立し、React 側と parity VRT でピクセル一致保証済。

### 区分 C/D — React 必須（8 個、静的描画のみ）

| コンポーネント | vanilla での状態 | React が必要な理由 |
|---|---|---|
| **Avatar** | fallback（イニシャル）のみ表示 | image→fallback スワップに Radix の JS |
| **Dialog** | overlay + content の静的描画 | portal / focus trap / open-close |
| **DropdownMenu** | メニューパネルの静的描画 | portal / positioning / keyboard / open-close |
| **Popover** | パネルの静的描画 | portal / positioning / open-close |
| **Select** | trigger（closed）の静的描画 | portal / listbox / keyboard / open-close |
| **Tabs** | タブ + パネルの静的描画 | パネル切替 JS |
| **Toast** | 1 件の静的描画 | Sonner の portal / live region / swipe / animation |
| **Tooltip** | content（開いた状態）の静的描画 | hover/focus トリガ / Floating UI positioning |

これらは `@yasmro/schatten`（React 層）を使う。class API は静的な見た目の契約
のみ提供する。

## a11y（vanilla 特有）

- form 例では `aria-invalid` / `aria-describedby` / `<label for>` を**消費者が
  自分で配線**する必要がある（React 層が自動配線する分を手書き）。
  `examples/vanilla-html/` の Input / Field 例で実演。
- 区分 C/D は vanilla では role/focus/live-region が欠ける（例: `.st-toast` は
  Sonner の live region がないと読み上げされない）。

## CDN スモーク（jsdelivr） — #468

**配信経路（npm tarball → jsdelivr）のスモーク**。コンポーネントの見た目契約
自体は上記ローカル dist 版で実測済みのため、検証対象は配信経路のみに閉じる。
v0.15.0（lightningcss 産 dist が npm に載った最初のリリース、2026-07-13
publish）に対して **2026-07-15 実施**。

### Phase 1 — 機械的確認（curl）

| # | 確認 | 結果 |
|---|---|---|
| 1 | `@0.15.0` ピン留め URL が 200 + `text/css` | ✅ `HTTP/2 200`、`content-type: text/css; charset=utf-8` |
| 2 | CDN のバイト列 == npm tarball のバイト列 | ✅ `cmp` 差分ゼロ（77,259 bytes） |
| 3 | バージョン省略 URL の解決先（data.jsdelivr.com resolved API） | ✅ `"version": "0.15.0"` |
| 4 | per-component subpath（`dist/css/button.css` / `dist/core/tokens/index.css` / `dist/themes/default/index.css`） | ✅ 3 本すべて 200 + `text/css` |

### Phase 2 — 実ブラウザスモーク（7 項目）

`examples/vanilla-html/index.html` の `<link>` を `@0.15.0` ピン留めの CDN URL
へ**一時反転**し（コミットする既定状態はローカル dist 有効のまま）、#466 と同じ
方法 — Playwright Chromium で `file://` を開き computed style を assert する
ad-hoc 検証（spec はコミットしない）— で確認。**計測値はローカル dist 版の記録
と完全一致**（Phase 1 手順 2 のバイト一致の帰結）。

| チェック項目 | 結果 | 計測値 |
|---|---|---|
| CSS rule 適用（`@layer` 順が配信後も正しい — #277 型の事故検出） | ✅ | `.st-btn--primary` の `background-color` = `oklch(0.37 0.01 70)`（非透明） |
| light/dark（`.dark` トグル） | ✅ | body bg `rgb(245, 243, 240)` → `rgb(30, 30, 28)` |
| seasonal（`data-theme="season--spring-early"`） | ✅ | `--color-theme-500` が `oklch(58% .01 70)` → `oklch(64% .1 12)` にシフト |
| hover / focus-visible ring | ✅ | hover で primary bg シフト、キーボード focus で 2px + 4px の ring（box-shadow） |
| disabled | ✅ | bg == `--color-surface-disabled`（`oklch(0.96 0 0)`） |
| form error（`aria-invalid="true"` 経由でのみ発火、class 単体不可） | ✅ | error border `oklch(0.56 0.17 22)`、属性なしの同 class は `oklch(0.18 0.01 250)` |
| Spinner animation（純 CSS） | ✅ | `animation: schatten-spin 1s` |

スクリーンショットは追加コミットしない — Phase 1 のバイト一致でローカル dist 版
（上記 `screenshots/vanilla-*.png`）と同一描画が証明されるため、記録はこの結果表
で足りる（#468 refinement で決定）。

**1.0.0 publish 時の再確認**は Phase 1（curl 4 点）のみ再実行すれば足りる —
[#480](https://github.com/yasmro/schatten/issues/480) の「publish 後」節に
チェックボックス設置済み。#479（ESM-only 化）は JS エントリのみで CSS の dist
パスに触れないため、本記録は 1.0.0 でも配信経路の証明として有効。

## TODO

- [ ] （後続 [#160](https://github.com/yasmro/schatten/issues/160)）この記録の
  スクリーンショット + コードサンプルを公開 Storybook ページへ反映。
