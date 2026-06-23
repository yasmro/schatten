import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Skeleton` component — class-name concatenation only.
 *
 * Skeleton has no variant axes: width / height / border-radius are
 * className-driven (per #37 and shadcn precedent), so this is the minimal
 * `cva('st-skeleton')` form. It exists for two reasons:
 *
 * 1. consistency with the per-component variants export convention, and
 * 2. so consumers can apply the skeleton look to their own element via
 *    `skeletonVariants()` (mirrors `buttonVariants` / `textVariants`).
 *
 * The actual visual rules (shimmer animation, surface color, radius) live in
 * `src/components/lv1/Skeleton/Skeleton.css` under `@layer components`.
 *
 * See: .claude/rules/css-api.md, #37.
 */
export const skeletonVariants = cva('st-skeleton')

export type SkeletonVariants = VariantProps<typeof skeletonVariants>
