---
'@yasmro/schatten': minor
---

Unify naming of "inverted" color treatment across tokens, primitives, and
component variants. Previously the codebase had three forms — `inverse`
(semantic tokens, Spinner variant), `inverted` (Button / Text / Callout /
Toast variants), and the `-inv` suffix (primitive variables) — for the
same concept. They are now all `inverted`.

**Token renames** (Tailwind utilities, CSS custom properties):

- `--color-inverse-foreground{,-muted,-subtle}` →
  `--color-inverted-foreground{,-muted,-subtle}`
- Tailwind utilities: `bg-inverse-foreground` / `text-inverse-foreground`
  / `border-inverse-foreground` (and `-muted` / `-subtle` variants) →
  `bg-inverted-foreground` etc.

**Component variant renames:**

- `Spinner` `variant="inverse"` → `variant="inverted"`

**Primitive renames** (internal — components should not consume these
directly per the layer rules in `state-token-guideline.md`):

- `--ink-{black,dark,medium,light,subtle}-inv` →
  `--ink-{...}-inverted`
- `--paper-{white,warm,cream}-inv` → `--paper-{...}-inverted`

Other component variant names (`Button` `variant="inverted"`, `Text`
`color="inverted" | "inverted-muted" | "inverted-subtle"`) were already
on the `inverted` form and are unchanged.
