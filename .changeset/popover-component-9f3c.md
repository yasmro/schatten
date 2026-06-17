---
'@yasmro/schatten': minor
---

feat(lv1): Popover コンポーネントを追加

クリックでトリガーするポップオーバーパネル（日付/カラーピッカー・フィルター設定などの土台）。`@radix-ui/react-popover` ベースの compound primitive で、`Popover` / `PopoverAnchor` / `PopoverTrigger` / `PopoverContent` / `PopoverClose` を公開。既定は非モーダル（`modal={false}` 透過）。

CSS API: `.st-popover__content`（portal パネル）を追加。状態は `[data-state]` / `[data-side]` で表現し、`@yasmro/schatten/css/popover` サブパスで配信。`components/lv1 (all)` の size budget を 60 KB → 64 KB に引き上げ（新規コンポーネント + Radix 依存追加に伴う additive な増分）。
