---
'@yasmro/schatten': patch
---

docs(storybook): `Tokens/Motion` ストーリーを追加。共有 duration scale
(`--st-duration-fast/base/slow` = 100/150/200ms) を用途名・semantic alias
(`--motion-*`)・消費 component 付きで可視化し、各値を体感できるインタラクティブ
demo (prefers-reduced-motion 自己対応) を載せた。`--motion-*` は applied 0 の
define-only として明示し、用途別ガイドと設計原則 (reduced-motion 必須 / loop は
component CSS / 不要 animation 禁止) を整理。時間 token は静止 PNG に写らないため
VRT は付けず、値は `Motion.drift.test.ts` + `resolution.test.ts` で pin。可視化
対象 token は #145 で追加済のため公開 API は不変。
