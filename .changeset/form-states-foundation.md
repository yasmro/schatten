---
'@yasmro/schatten': patch
---

docs(storybook): build out the `Foundation/Form States` page into a complete
form-state reference.

Implements the standalone Form States foundation page called for in
[#199](https://github.com/yasmro/schatten/issues/199). The previous
"Disabled audit" story covered only enabled-vs-disabled; the page now lays
out the full state story of every form `lv1` in one viewport:

- **Form lv1 state matrix** — six controls (Input / Textarea / Select /
  Checkbox / Radio / Switch) × seven states (default / filled / error /
  disabled / disabled-with-value / readOnly / readOnly-with-value). `readOnly`
  renders an explicit n/a cell for the controls that don't expose it.
- **Interactive states** — hover / focus shown as live controls with a note,
  since Storybook can't pin runtime pseudo-states in a static grid.
- **State tokens consumed** — a table mapping each state to the semantic
  surface / foreground / border tokens it pulls from.
- **Priority: disabled vs. isError** — the disabled visual wins; the control
  still emits `aria-invalid`.
- **Anti-patterns** — do (semantic non-interactive tokens) vs. don't
  (`opacity-50` alone, which conflates disabled with readOnly).

`Foundation/Color`'s "Non-Interactive States" section now links across to this
page. The `storybook-guideline.md` rule gains a "Foundation pages" section
codifying how documentation surfaces differ from per-component stories.

**Consumer impact** — none. Storybook-only docs surface; nothing changes in
`dist/` or the public component / token APIs.
