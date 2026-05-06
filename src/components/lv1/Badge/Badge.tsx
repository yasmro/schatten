import { icons } from 'lucide-react'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type BadgeVariants, badgeVariants } from '../../../variants/badge'

export type IconName = keyof typeof icons

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, BadgeVariants {
  icon?: IconName
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
