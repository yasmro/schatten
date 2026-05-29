import type { LucideIcon } from 'lucide-react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type BadgeVariants, badgeVariants } from '../../../variants/badge'
import './Badge.css'

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
    {
      className,
      variant,
      appearance,
      size,
      icon,
      iconPosition = 'start',
      role,
      children,
      ...props
    },
    ref,
  ) => {
    const IconComponent = icon ?? null
    // `--icon-only` is judged from props (`!children && !!icon`) which CVA's
    // variants model cannot express, so the modifier is added outside CVA.
    // This is the precedent for sweep-2 onward — a documented escape hatch
    // for state-derived modifiers that don't slot into a CVA axis.
    const isIconOnly = !children && !!icon

    return (
      <div
        className={cn(
          badgeVariants({ variant, appearance, size }),
          isIconOnly && 'st-badge--icon-only',
          className,
        )}
        // An icon-only badge has no text node, so a bare <div> (default role
        // `generic`, which cannot hold an accessible name) would drop the
        // `aria-label` from the a11y tree — screen readers ignore it entirely.
        // `role="img"` makes the label addressable. A consumer-supplied `role`
        // (e.g. "status") always wins; `role` is destructured so the trailing
        // `{...props}` spread can't clobber the value we resolve here.
        role={role ?? (isIconOnly ? 'img' : undefined)}
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
