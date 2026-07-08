---
'@yasmro/schatten': patch
---

manifest export の消費経路を検証する CI ゲート `pnpm check:manifest:export`
(`scripts/check-manifest-export.mjs`) を追加。`package.json#exports` 経由で
`./schatten.manifest.json` を解決し、dist コピーが valid JSON で 4 つの surface
キー + dist 固有の `package` / `version` / `generatedAt` を持ち、surface が
committed snapshot と一致することを毎 PR で検証する (publint の「export
ターゲット存在」検査を「実際に解決・parse できる」まで補完)。#162。

README に「Programmatic introspection」小節を追加 — manifest は公開 **CSS
surface** の機械可読リストであり、prop union / default 値など **型情報は含まない**
(それは `.d.ts` + TSDoc の責務) という線引きを consumer 向けに明記。JSON Schema は
`$schemaVersion` + snapshot 不変条件テストで代替できるため不採用と結論し
api-stability.md に記録。あわせて #317 後に陳腐化していた「Tailwind v4 @theme」
系コメント (generate-manifest.mjs / src/__generated__/README.md /
generate-manifest.test.ts) を `public-tokens.css` レジストラ表現へ統一。

CSS surface (`dist/schatten.css` / manifest の内容) は不変。
