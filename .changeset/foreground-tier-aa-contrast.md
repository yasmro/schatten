---
'@yasmro/schatten': minor
---

a11y: foreground-muted / foreground-subtle のコントラストを WCAG 2.1 AA に合わせて引き上げ (#344 / #147 Phase 2)。

- `--color-foreground-muted` を 1 ink rung 暗く（light `ink-light`/sumi-400 → `ink-medium`/sumi-600、dark alabaster-500 → alabaster-400）。小テキストで ≥ 4.5:1 を満たす。
- `--color-foreground-subtle` を 1 ink rung 暗く（light `ink-subtle`/sumi-300 → 新設 `ink-faint`/sumi-500、dark alabaster-600 → alabaster-500）。三次テキスト段は維持しつつ大テキスト 3:1 を満たす。subtle は小/本文テキスト不可（大・付随テキスト専用）として明文化。
- 変数名は不変のため CSS API surface（manifest）に変更なし。トークン値の更新のみ。
