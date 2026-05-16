---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/testing-guideline.md`

The repo had VRT conventions written down ([vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md))
but no equivalent rule for **unit tests**, even though 16 `lv1` components
shipped with ~290 test cases across them. The conventions were enforced by
PR review and "follow Button.test.tsx style" — fine for humans, but a thin
contract for AI-assisted contributions and new contributors.

New rule codifies:

- **Responsibility split** with [vrt-spec-guideline](.claude/rules/vrt-spec-guideline.md):
  unit tests assert behavior + a11y wiring, VRT specs assert pixels.
- **Required cases per component type** — Form / Compound / Action / Display.
  Form-input components must cover controlled+uncontrolled, error state, and
  Field-context propagation; compound components must cover open/close
  transitions and portal rendering; action components must cover handler
  firing and `asChild`.
- **Writing style** — BDD-style `it` names, `describe` as the Given
  container, typed factories for non-trivial setup, no `// Arrange / Act /
  Assert` labels (tests are too small to benefit).
- **What NOT to test** — Radix internals, Tailwind class strings verbatim,
  coverage as a number, Storybook stories.
- **Canonical examples** cross-linked to real test files:
  [`BasicSelect`](src/components/lv1/Select/Select.test.tsx) (typed
  factory), [`ContextConsumer`](src/components/lv1/Field/Field.test.tsx)
  (context wiring helper),
  [`Controlled`](src/components/lv1/Dialog/Dialog.test.tsx) (stateful
  wrapper), [`renderTooltip`](src/components/lv1/Tooltip/Tooltip.test.tsx)
  (provider wrapper).

Linked from CLAUDE.md `Guidelines` and AGENTS.md `Required reading` + Resource
Map, alongside the other rule files. No source / test changes; existing tests
already match the codified conventions.

Closes #103.
