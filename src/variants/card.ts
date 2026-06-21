import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Card` component — class-name concatenation only.
 *
 * Card has no visual variant axis: it ships as a single neutral surface
 * (component-api-conventions — Card fits neither Pattern A nor Pattern B, so a
 * weight axis would be a new dialect; it can be added additively later). This
 * is therefore the minimal `cva('st-card')` form, mirroring `skeletonVariants`.
 * It exists for two reasons:
 *
 * 1. consistency with the per-component variants export convention, and
 * 2. so consumers can apply the card surface to their own semantic element via
 *    `cardVariants()` — e.g. `<article className={cardVariants()}>…</article>`
 *    — the `*Variants()` pattern (component-architecture §3) preferred over
 *    `asChild` for new lv1s.
 *
 * The actual visual rules live in `src/components/lv1/Card/Card.css` under
 * `@layer components`. Sub-element classes (`.st-card__header` / `__title` /
 * …) are written by Card.tsx directly; they are not CVA-managed.
 *
 * See: .claude/rules/css-api.md, .claude/rules/component-api-conventions.md, #43.
 */
export const cardVariants = cva('st-card')

export type CardVariants = VariantProps<typeof cardVariants>
