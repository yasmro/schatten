---
'@yasmro/schatten': patch
---

fix(lv1): Switch の `disabled` + `checked` でチェックアイコンがトラックに埋もれて見えなくなる問題を修正。チェックアイコンの色を `.st-switch__check` にハードコードするのをやめ、Checkbox と同じ idiom (ブロックが `color` を持ち、子が `currentColor` を継承) に揃えたことで、`:disabled` 時にアイコンも `--color-foreground-disabled` へ退く。公開クラス名 / トークン名の増減はなし。
