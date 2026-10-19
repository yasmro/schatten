---
'@yasmro/schatten': minor
---

`Text`: the `heading` variant now renders at **normal weight** (`--font-normal`)
at every size (`sm` … `2xl`), replacing the previous semibold (`sm`–`lg`) /
bold (`xl`–`2xl`). The visual hierarchy of headings now comes from size and
line-height alone — the brand's quiet, recede-into-the-page posture, and it
lets `family="serif"` headings render without a 600/700 cut loaded.

No class or variable is added, renamed, or removed (`.st-text--heading.st-text--*`
keep their names), so this is a visual value change, not a public-surface
change. Consumers who want bolder headings can set `font-weight` on the element
themselves. The font-loading guidance in the README / Typography docs is
updated accordingly (400 / 500 now cover every Text role).
