---
'@yasmro/schatten': patch
---

DefaultSpinner の Tailwind utility 依存 (`size-full animate-spin opacity-25/75`) を raw CSS + `.st-spinner__*` sub-element class に置き換え、Spinner が default 型でも CSS-only consumer から Tailwind 無しで動作するようになりました。`#154` の "Tailwind 不要" 公約に default 型 Spinner だけが空けていた穴を解消。

新しい sub-element class:

- `.st-spinner__rotor` — default 型の SVG (回転、`animation: schatten-spin 1s linear infinite`)
- `.st-spinner__track` — 背景 ring (`opacity: 0.25`)
- `.st-spinner__arc` — 移動 arc (`opacity: 0.75`)
- `.st-spinner > svg` — 子セレクタで SVG sizing を universal 化 (default / ripple 共通)

`@keyframes schatten-spin` を Spinner.css に追加 (既存の `schatten-dot-breathe` / `schatten-ripple-wave` と同じ private namespace)。

React 利用は無変更。CSS-only consumer 向けに `size-full` / `animate-spin` / `opacity-25` / `opacity-75` の Tailwind class を SVG に書く必要が無くなりました:

```html
<!-- Before (sweep-2): Tailwind 依存 -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg class="size-full animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
    <path class="opacity-75" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- After: .st-spinner__* chain で完結 -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
    <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
  <span class="sr-only">Loading</span>
</div>
```

CSS API: 3 sub-element classes 追加 (`.st-spinner__rotor` / `.st-spinner__track` / `.st-spinner__arc`)。manifest は 79 → 82 classes。

Notes:
- Default 型の rotation duration は `1s linear infinite` を hardcode (Tailwind `animate-spin` と一致)。ripple 型の `--schatten-spinner-duration` (2.8s, ease-in-out) とは意図的に別の cadence — 異なるアニメーション性格のため。
- `--schatten-spinner-default-duration` のような新規 public CSS variable は本 PR で追加せず、`--st-*` rename を扱う [#286](https://github.com/yasmro/schatten/issues/286) でまとめて整理。
- VRT: 既存 6 baseline + parity 2 baseline + 内部利用先の Button 14 baseline すべて pixel-identical で pass (visual contract 完全保持)。

closes #285
