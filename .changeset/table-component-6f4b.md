---
'@yasmro/schatten': minor
---

Add `Table` — a semantic, **presentational-only / logic-agnostic** data table
(#152). Compose it from `Table` / `TableHeader` / `TableBody` / `TableRow` /
`TableHead` / `TableCell` / `TableCaption`. It ships the chrome only — `size`
density (`sm` / `md` / `lg`) plus three orthogonal boolean treatments
(`striped` / `bordered` / `hoverable`) and a `selected` row highlight — and
holds **no** sort / filter / pagination / virtualization logic, so any headless
layer (TanStack Table, react-table, your own) composes on top. Every
behavioural hook (`<th onClick>` / `aria-sort`, row `data-state` /
`aria-selected`) passes straight through `...props`; cells take an `align`
(`start` / `center` / `end`). Out-of-pattern (like `Card` / `Spinner`); named
via `TableCaption` or `aria-label`; the table renders inside a `.st-table-scroll`
container for horizontal overflow.

CSS API: new `.st-table*` classes (`.st-table`, `.st-table-scroll`, `--sm` /
`--md` / `--lg`, `--striped` / `--bordered` / `--hoverable`, `__caption` /
`__header` / `__body` / `__row` / `__head` / `__cell`, and the
`__head--{start,center,end}` / `__cell--{start,center,end}` align modifiers),
with selection on the `[data-state="selected"]` row hook. Also published
per-component at `@yasmro/schatten/css/table`.
