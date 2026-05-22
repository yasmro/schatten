---
'@yasmro/schatten': patch
---

chore(lint): Biome `style/noRestrictedImports` で `src/core/**` /
`src/variants/**` / `src/themes/**` / `src/tokens.ts` からの
`react` / `react-dom` / `@radix-ui/*` import を error として禁止
(closes #292)。v0.9.0 の framework-agnostic 境界 ([#291](https://github.com/yasmro/schatten/issues/291))
を `package.json` の `exports` map に頼らず source level でも CI ゲートで
担保する。`no-primitive-color` plugin と同じ「構造的不変条件は lint で
機械化する」哲学。

消費者影響なし — 公開 API / CSS classes / CVA 出力はすべて不変。詳細は
[`.claude/rules/lint-rules-guideline.md`](https://github.com/yasmro/schatten/blob/develop/.claude/rules/lint-rules-guideline.md)
の `style/noRestrictedImports` 節。回帰テストは
[`biome-plugins/boundary-no-react.test.ts`](https://github.com/yasmro/schatten/blob/develop/biome-plugins/boundary-no-react.test.ts)。
