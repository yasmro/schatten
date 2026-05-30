---
'@yasmro/schatten': minor
---

CSS API: 用途別 semantic token を追加（shadow: `--shadow-card/popover/modal/toast`、radius: `--radius-control/surface/pill`、motion: `--motion-quick/base/expressive`）。`@theme` 登録済みで `tokens.ts` からも参照可能（`shadow.card` 等、新規 `motion` セクション + `MotionToken` 型）。

既存コンポーネントは value-preserving に置換（視覚変更なし・VRT zero diff）: Dialog/Toast/Tooltip/Select の elevation を `--shadow-modal`(=lg)/`--shadow-toast`(=md)/`--shadow-popover`(=md) 経由に、Badge/Radio/Switch の pill を `--radius-pill`(=full) 経由に。standalone CSS 向けに literal fallback 付き。

motion semantic は死蔵していた `--transition-*` ではなく生きている `--st-duration-*` のエイリアスとして定義。`tokens.ts` の `transition` セクションは `@deprecated` 注記。`--radius-control/surface` は定義のみ（Button/Input 等への角丸適用は別 spike）。
