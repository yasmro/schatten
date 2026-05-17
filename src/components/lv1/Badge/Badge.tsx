import type { LucideIcon } from 'lucide-react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type BadgeVariants, badgeVariants } from '../../../variants/badge'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, BadgeVariants {
  /**
   * Tone of the badge.
   * - `neutral` — no semantic meaning, ambient list rows / status tags (all three appearances supported; `solid` is the "muted-but-emphatic" treatment)
   * - `success` / `error` / `warning` / `info` — state semantics; shares tokens with `Toast` and `Callout`
   *
   * For destructive *actions*, use `<Button variant="destructive">` instead of `<Badge variant="error">`.
   * @default 'neutral'
   */
  variant?: BadgeVariants['variant']
  /**
   * Visual appearance / weight.
   * - `subtle` (default) — soft tinted background, suited for ambient list rows and status tags
   * - `solid` — filled emphasis (uses `*-foreground` text on a saturated background)
   * - `outline` — lightest, border-only style
   *
   * Value names align 1:1 with the underlying token suffix (`bg-{state}`,
   * `bg-{state}-subtle`).
   * @default 'subtle'
   */
  appearance?: BadgeVariants['appearance']
  /**
   * Size of the badge.
   * @default 'md'
   */
  size?: BadgeVariants['size']
  /**
   * Lucide icon component to render alongside the label.
   * Import the icon from `lucide-react` and pass it directly — e.g.
   * `import { Check } from 'lucide-react'` then `<Badge icon={Check} />`.
   * Passing the component (not a name string) keeps icon imports
   * tree-shakeable in consumer bundles.
   */
  icon?: LucideIcon
  /**
   * Position of the icon relative to the label text.
   * @default 'start'
   */
  iconPosition?: 'start' | 'end'
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant, appearance, size, icon, iconPosition = 'start', children, ...props },
    ref,
  ) => {
    const IconComponent = icon ?? null
    const isIconOnly = !children && !!icon

    return (
      <div
        className={cn(
          badgeVariants({ variant, appearance, size }),
          isIconOnly && 'aspect-square p-1',
          className,
        )}
        ref={ref}
        {...props}
      >
        {IconComponent && iconPosition === 'start' && <IconComponent aria-hidden="true" />}
        {children}
        {IconComponent && iconPosition === 'end' && <IconComponent aria-hidden="true" />}
      </div>
    )
  },
)

Badge.displayName = 'Badge'
