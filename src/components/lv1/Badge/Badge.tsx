import { icons } from 'lucide-react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type BadgeVariants, badgeVariants } from '../../../variants/badge'

export type IconName = keyof typeof icons

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, BadgeVariants {
  /**
   * Semantic state of the badge. Shares the state semantic tokens with `Toast` and `Callout`.
   * Use `error` for "failed/invalid" tags. For destructive *actions*, use `<Button variant="destructive">`.
   * @default 'default'
   */
  variant?: BadgeVariants['variant']
  /**
   * Visual treatment.
   * - `subtle` — soft tinted background, suited for ambient list rows and status tags
   * - `solid` — filled emphasis
   * - `outline` — lightest, border-only style
   * @default 'subtle'
   */
  treatment?: BadgeVariants['treatment']
  /**
   * Size of the badge.
   * @default 'md'
   */
  size?: BadgeVariants['size']
  /** Lucide icon name in PascalCase (e.g. `"Check"`, `"AlertCircle"`). */
  icon?: IconName
  /**
   * Position of the icon relative to the label text.
   * @default 'start'
   */
  iconPosition?: 'start' | 'end'
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant, treatment, size, icon, iconPosition = 'start', children, ...props },
    ref,
  ) => {
    const IconComponent = icon ? icons[icon] : null
    const isIconOnly = !children && !!icon

    return (
      <div
        className={cn(
          badgeVariants({ variant, treatment, size }),
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
