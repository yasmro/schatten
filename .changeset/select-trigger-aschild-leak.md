---
'@yasmro/schatten': patch
---

Types: `SelectTrigger` no longer accepts `asChild`. The prop was leaking
through Radix's `SelectPrimitive.Trigger` type inheritance (the interface
only omitted `size`), even though Select triggers are form controls that
fall under the `asChild` hard exclusion in `component-architecture.md §3`.
The interface now omits `'size' | 'asChild'`, closing the unintended
surface. No runtime behavior change — `asChild` was never a documented or
supported prop on `SelectTrigger`.
