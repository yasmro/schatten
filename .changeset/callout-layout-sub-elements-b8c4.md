---
'@yasmro/schatten': patch
---

Callout の内部 flex layout を `.st-callout` に昇格し、新しい sub-element class (`.st-callout__content` / `.st-callout__action`) を追加。CSS-only consumer の markup が冗長な inner `<div class="flex …">` を必要としなくなった。React 利用は無変更。

Before — vanilla HTML markup:

```html
<div class="st-callout st-callout--info st-callout--subtle">
  <div class="flex gap-3 items-start">  <!-- 消費者が手書きしていた wrapper -->
    <svg class="st-callout__icon">…</svg>
    <div class="flex min-w-0 flex-1 flex-col gap-1">  <!-- consumer が手書きしていた wrapper -->
      <div class="st-callout__title">…</div>
      <div class="st-callout__body">…</div>
    </div>
  </div>
</div>
```

After:

```html
<div class="st-callout st-callout--info st-callout--subtle">
  <svg class="st-callout__icon">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">…</div>
    <div class="st-callout__body">…</div>
  </div>
</div>
```

CSS API: 2 sub-element classes が追加 (`.st-callout__content` / `.st-callout__action`)、Callout のレイアウト責務が `.st-callout { display: flex; … }` に集約。multi-line 時の `align-items: flex-start` は `:has(.st-callout__title):has(.st-callout__body)` で自動分岐 — JSX / Tailwind 条件不要。

VRT: 既存 14 baseline + parity 2 baseline すべて pixel-identical で pass (visual contract 完全保持)。

closes #284
