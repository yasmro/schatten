---
'@yasmro/schatten': minor
---

CSS API: add `.st-spinner__label` — the Spinner's visually-hidden accessible
label class. The JSX previously hid the label with Tailwind's `sr-only`
utility, which does not exist in the Tailwind-free dist build, so
framework-agnostic CSS consumers (and React consumers styling via
`dist/schatten.css`) saw the label rendered as visible text — most visibly
"Loading" inside a busy `<Button isLoading>`. The label span now carries
`.st-spinner__label`, shipped in the dist with the standard visually-hidden
pattern. Vanilla-HTML spinner markup should adopt the same class.
