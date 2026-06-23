---
'@yasmro/schatten': patch
---

Add a `Patterns/Data Table` Storybook recipe showing how to compose the
presentational lv1 `Table` (#152) with a headless logic layer (TanStack Table
v8) for sorting / filtering / pagination. Sorting is a live demo; the toggle is
a real `<button>` inside the `<th>` and `aria-sort` is forwarded onto the cell.
Docs only — `@tanstack/react-table` is a devDependency, never shipped as a
prod / peer dependency.
