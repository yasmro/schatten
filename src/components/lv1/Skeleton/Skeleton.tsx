import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { skeletonVariants } from '../../../variants/skeleton'
import './Skeleton.css'

/**
 * Props for the {@link Skeleton} component.
 *
 * Skeleton adds no Schatten-specific props — width / height / border-radius
 * are supplied through `className`. Every standard `<div>` attribute
 * (`className`, `style`, `data-*`, `id`, `ref`, …) is forwarded to the root,
 * including `aria-hidden`, which defaults to `"true"` but can be overridden.
 */
export type SkeletonProps = HTMLAttributes<HTMLDivElement>

/**
 * A shimmering placeholder shown while content is loading.
 *
 * Skeleton is purely decorative: it carries `aria-hidden="true"` by default
 * and exposes no role. Announce the loading state on the *container* instead
 * — e.g. `<div role="status" aria-busy="true">…skeletons…</div>` — so a screen
 * reader hears "loading" once rather than a wall of empty placeholders.
 *
 * Size and shape are set via `className`:
 * - text line — `className="h-4 w-[200px]"`
 * - avatar    — `className="h-12 w-12 rounded-full"`
 *
 * The shimmer animation is disabled automatically under
 * `prefers-reduced-motion: reduce`.
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(skeletonVariants(), className)} aria-hidden="true" {...props} />
    )
  },
)

Skeleton.displayName = 'Skeleton'
