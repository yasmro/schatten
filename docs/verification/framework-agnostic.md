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
| Astro | `pnpm install --ignore-workspace && pnpm build`（Astro 5 + @astrojs/react 4 + React 19） | `import '@yasmro/schatten/schatten.css'`、`@yasmro/schatten` は `file:../..` |
| Vue | `pnpm install --ignore-workspace && pnpm build`（Vue 3.5 + Vite 7） | `import '@yasmro/schatten/schatten.css'`、`@yasmro/schatten` は `file:../..` |

CDN 版（`cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css`）は publish
後のみ叩けるため、pre-1.0 の本記録はローカル dist 版で成立させている。CDN 版の
スモークは 1.0 publish 直後（下記 TODO）。

## チェック項目 × 環境

✅ 実測で確認 / ⚠️ 区分 C/D の想定通りの制限（不具合ではない）/ 🕓 publish 後

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

## TODO（1.0 publish 後）

- [ ] `examples/vanilla-html/index.html` の CDN `<link>` を有効化し、
  `cdn.jsdelivr.net/npm/@yasmro/schatten/dist/schatten.css` を実ブラウザで
  スモーク。この表の各行を CDN 版でも ✅ 化。
- [ ] （後続 [#160](https://github.com/yasmro/schatten/issues/160)）この記録の
  スクリーンショット + コードサンプルを公開 Storybook ページへ反映。
