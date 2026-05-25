---
'@yasmro/schatten': minor
---

BREAKING(pre-1.0): Spinner / Badge / Callout の class 出力を Tailwind utility から `.st-*` semantic class chain に変更。React 利用は `<Spinner>` / `<Badge>` / `<Callout>` の prop 経由のままで影響なし。

消費者影響:

- **Spinner の内部 ripple SVG class が rename されました。** CSS 直接参照している消費者は以下に sed-migrate してください:
  - `.schatten-spinner-dot` → `.st-spinner__dot`
  - `.schatten-spinner-ripple-1` → `.st-spinner__ripple-1`
  - `.schatten-spinner-ripple-2` → `.st-spinner__ripple-2`
  - 共有 utility だった `.schatten-spinner-ripple` は削除（個別の `__ripple-1` / `__ripple-2` に統合済）
- **Spinner の public CSS 変数は維持されます** — `--schatten-spinner-duration` / `--schatten-spinner-ripple-delay` は変更なしで consumer override 可能。`@theme` 化（manifest 掲載）は別 issue で扱います。
- `cn(badgeVariants(...), 'aspect-square p-1')` のような **CVA 出力の icon-only utility 上書き** は `.st-badge--icon-only` modifier に置き換わります。Badge.tsx 側で `!children && !!icon` 判定により conditional emit されるので、消費者コードは無変更。CSS-only 利用者は `<div class="st-badge ... st-badge--icon-only" aria-label="...">` で表現してください。
- VRT baseline を持つ消費者は再生成が必要。

CSS API: 3 コンポを `@layer components` 配下に追加（+33 classes: Spinner 9 / Badge 13 / Callout 11）。vanilla HTML から以下が動く:

```html
<!-- Spinner -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg viewBox="0 0 24 24" aria-hidden="true">…</svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Badge (Pattern B: variant × appearance double-class) -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Active</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>

<!-- Callout -->
<div class="st-callout st-callout--info st-callout--subtle" role="status">
  <div class="flex gap-3 items-start">
    <svg class="st-callout__icon" aria-hidden="true">…</svg>
    <div>
      <div class="st-callout__title">Heads up</div>
      <div class="st-callout__body">…</div>
    </div>
  </div>
</div>
```

Note: Pattern B (Badge / Callout) は **double-class selector** (`.st-badge--success.st-badge--subtle` 等) で variant × appearance 組み合わせを解決します。default `subtle` も first-class — `solid` / `outline` と同じ specificity (0,2,0) で CSS rule を持ちます（sweep-1 Icon precedent と整合）。
