import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Card` component — class-name concatenation only.
 *
 * Card carries one **out-of-pattern** axis: `variant` toggles the background —
 * `filled` has a `surface` fill (+ shadow), `plain` is transparent (border
 * only). Same single-axis shape `Spinner` uses (component-api-conventions —
 * Card fits neither Pattern A nor Pattern B, so it is documented as out of
 * pattern, like `Spinner` / `Icon`). The default (`filled`) carries its own
 * class rather than living in the base `.st-card`, mirroring the
 * `.st-icon--inherit` precedent (a default value is first-class, not an empty
 * marker).
 *
 * Consumers can also apply the card surface to their own semantic element via
 * `cardVariants({ variant })` — e.g. `<article className={cardVariants()}>…`
 * — the `*Variants()` pattern (component-architecture §3) preferred over
 * `asChild` for new lv1s.
 *
 * The actual visual rules live in `src/components/lv1/Card/Card.css` under
 * `@layer components`. Sub-element classes (`.st-card__header` / `__title` /
 * …) are written by Card.tsx directly; they are not CVA-managed.
 *
 * See: .claude/rules/css-api.md, .claude/rules/component-api-conventions.md, #43, #429.
 */
export const cardVariants = cva('st-card', {
  variants: {
    variant: {
      filled: 'st-card--filled',
      plain: 'st-card--plain',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
})

export type CardVariants = VariantProps<typeof cardVariants>
