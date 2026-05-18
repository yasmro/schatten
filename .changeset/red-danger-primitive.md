---
'@yasmro/schatten': minor
---

CSS API: add the `--red-*` primitive color scale (`--red-50` … `--red-950`) and
repoint the `error` / `destructive` semantics off `vermillion` onto it.

`vermillion` previously backed both the brand 朱 (`--color-vermillion`) and the
danger colors (`--color-error` / `--color-destructive`), so retuning brand
vermillion would drag every error state along (and vice versa). The new `red`
scale is a dedicated danger primitive — `error` / `destructive` now reference
`--red-*`, while `--color-vermillion` keeps referencing `--vermillion-*`.

`red` is a **value-identical copy** of `vermillion` today (hue 22, same L/C at
every shade), so this is a governance seam, not a visual change — **no token
value moves and VRT snapshots are unchanged**. The split exists purely to make
brand 朱 and danger red independently retunable. Whether danger red *should*
diverge in hue from brand vermillion is a designer-owned call tracked in design
spike #239.

Registered in the Tailwind `@theme` so `bg-red-*` / `text-red-*` utilities are
available, and shown in the Foundation/Color story next to the vermillion scale.
