---
'@yasmro/schatten': minor
---

CSS API: Toast / Dialog を `.st-toast` + `.st-toaster` / `.st-dialog__*`
クラス API に移行（#271 / #154 sweep-6）。2 コンポの視覚規則が
`@layer components` に集約され、portal compound 系コンポにもクラス API が
行き渡る。

- **Toast**: `.st-toast` (per-toast `<li>`) + Pattern B double-class
  (`--neutral/--success/--error/--warning/--info` × `--subtle/--solid`)
  + sub-elements `.st-toast__icon/__content/__title/__description`。
  viewport は `.st-toaster` + 6 値の position modifier
  (`--top-left/--top-center/--top-right/--bottom-left/--bottom-center/--bottom-right`)。
  title-only vs title+description のアライメント分岐は
  `:has(.st-toast__description)` で JSX 側 conditional 廃止
  （Callout sweep-2 の `:has()` precedent 踏襲）。`[data-state]` /
  `[data-swipe]` 駆動の dissolve enter/exit / swipe handoff /
  `prefers-reduced-motion` は CSS に温存。
- **Dialog**: `.st-dialog__overlay` / `.st-dialog__content` /
  `.st-dialog__header/__title/__description/__body/__footer/__close`
  の 8 sub-element。**`.st-dialog` block ルートは出さない** — Radix の
  `DialogPrimitive.Root` が DOM を吐かず、Overlay / Content が portal の
  独立兄弟になるため。Footer 内 Button の `order-N` は Radix focus 都合
  (DOM 順 ≠ 視覚順) で JSX 側 Tailwind utility に温存し、`.st-dialog__footer`
  は flex container だけに責任を持つ（vanilla HTML 消費者は DOM 順 =
  視覚順で書けば良いことを CSSApi で明文化）。`translate: -50% -50%` は
  standalone プロパティ、keyframes は `transform: scale(...)` のみで
  Tailwind v4 centering との合成を避ける既存仕様を継承。

manifest snapshot: classes +27（Toast 12 / Toaster 7 / Dialog 8）。
`dataAttributes` への新規追加なし（`data-state` / `data-swipe` は sweep
前から計上済）。

BREAKING(pre-1.0): 2 コンポが出力する className 文字列が Tailwind utility
列から semantic class（`st-toast st-toast--error st-toast--solid`、
`st-dialog__content` 等）に変更。`className` prop の追加マージは不変。
`toastVariants()` / `toastViewportVariants()` の戻り値も同様。

- 内部実装クラス rename: `.toast-item` → `.st-toast`、`.dialog-overlay` →
  `.st-dialog__overlay`、`.dialog-content` → `.st-dialog__content`。
  Toast.css / Dialog.css に直接アクセスしていた消費者のみ影響
  （通常の `<Dialog>` / `<Toaster>` / `toast()` 利用は無影響）。
- React 公開 API (`<Dialog>` / `<Toaster>` / `toast()` / `DialogProps` /
  `ToastInput` etc.) は完全に不変。
- VRT baseline を持つ消費者は再生成が必要（描画値は token 経由で不変、
  sub-pixel diff のみ想定）。
- Toast / Dialog の portal-only な挙動（focus trap、dismissal、auto-dismiss、
  swipe、enter/exit アニメ）は **React 経由のみ**で、vanilla HTML 消費者は
  静的な視覚フレームしか得られない。これは PR #298 (sweep-5) と同じ判断で、
  portal compound には parity story を出さない方針を継承。CSSApi リファレンス
  に Toast / Dialog 章を追加し、vanilla 利用時の必須 ARIA 属性
  (`role="status"`/`role="dialog"`/`aria-modal`/`aria-labelledby` 等) を
  明文化。
