---
'@yasmro/schatten': patch
---

test: add unit tests for 8 lv1 components

Add `*.test.tsx` for the 8 lv1 components that previously only had VRT coverage:
Badge, Checkbox, Radio (+ RadioGroup), Select, Spinner, Switch, Text, Textarea.
VRT keeps the look in check; unit tests now cover the logic that VRT cannot
catch — props handling, `aria-*` attributes, keyboard / click events, controlled
vs. uncontrolled state, and `<Field>` / `<RadioGroup>` context propagation.

For Radix-backed components (Checkbox / Radio / Select / Switch), tests focus
on the Schatten wrapping layer (variant classes, `isError`, `disabled`, context
inheritance) rather than re-testing Radix internals.

Adds a `scrollIntoView` polyfill to `vitest.setup.ts` so jsdom can run Radix
Select tests that open the dropdown.

No public API change.
