---
'@yasmro/schatten': patch
---

CSS API: `.st-btn` のラベル font-weight を 500 (medium) から 700 (bold) に変更し、ボタンテキストを太字に。あわせて `destructive` variant の hover でラベル文字色も沈むよう調整（背景の暗色化だけでなく文字色も `color-mix` で destructive base 側へシフト — primary の `--color-solid-foreground-hover` 相当の挙動を、state トークンの 4-token shape を崩さず CSS 側で表現）。

いずれもクラス API・状態属性・CSS 変数の追加/改名/削除はなく、既存 `.st-btn` ルールの値変更のみ。`link` variant は `font-weight: inherit` のままなので、段落に埋め込まれたリンクテキストは周囲のウェイトに追従し影響を受けない。ボタンを描画する全 VRT baseline（Button / parity / Dialog / Toast / CSSApi / CSSApiDist / Composition / Spacing / ThemeAudit / SeasonalShowcase）を再生成済み。
