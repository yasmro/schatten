---
'@yasmro/schatten': minor
---

CSS API: add the `--indigo-*` primitive color scale (`--indigo-50` … `--indigo-950`),
a traditional Japanese indigo (藍) intended as the second brand color alongside
vermillion (朱). Registered in the Tailwind `@theme` so `bg-indigo-*` / `text-indigo-*`
utilities are available, and shown in the Foundation/Color story next to the
vermillion scale.

This is purely additive — `--blue-*` is untouched and stays pinned to the
`info` semantic. The indigo scale is hue-shifted toward purple (hue 265) and
more saturated than `blue`, giving a deeper, darker character. OKLCH values and
WCAG AA contrast were verified in #181: solid treatment reaches 4.78 (light, on
`-500`) and 5.73 (dark, on `-400`).

Semantic-layer integration (`--color-indigo`) lands separately in #185.
