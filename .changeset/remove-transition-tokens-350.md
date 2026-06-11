---
'@yasmro/schatten': minor
---

BREAKING: 死蔵されていた `--transition-fast` / `--transition-normal` / `--transition-slow`（CSS 変数）、`tokens.transition.*`、`TransitionToken` 型を削除。#145 で deprecated 化済み・参照ゼロのため、pre-1.0 のうちに削除（#350）。

移行表:

| 旧 | 新 |
|---|---|
| `var(--transition-fast)`（150ms ease） | `var(--motion-base)`（150ms）+ easing は自分で指定 |
| `var(--transition-normal)`（200ms ease） | `var(--motion-expressive)`（200ms）+ 同上 |
| `var(--transition-slow)`（300ms ease） | 対応 step なし — 300ms 直書き、または 200ms へ寄せる |
| `tokens.transition.*` / `TransitionToken` | `tokens.motion.*` / `MotionToken` |

旧トークンは duration + easing を束ねた値（例 `150ms ease`）、新 `--motion-*` は duration 単体である点に注意（名前の対応も `fast` → `--motion-quick` ではなく `--motion-base`）。

CSS API: `dist/schatten.css` の tokens layer から上記 3 変数が消える（`@theme` 未登録のため manifest 差分はなし）。再導入は `src/core/tokens/__tests__/no-transition-tokens.test.ts` のソース走査ガードが防ぐ。
