import type { LucideIcon, LucideProps } from 'lucide-react'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { type IconVariants, iconVariants } from '../../../variants/icon'

export interface IconProps extends Omit<LucideProps, 'ref' | 'size' | 'color'>, IconVariants {
  /**
   * Lucide icon component to render. Import it from `lucide-react` and pass
   * it directly — e.g. `import { Search } from 'lucide-react'` then
   * `<Icon icon={Search} />`. Passing the component (not a name string)
   * keeps icon imports tree-shakeable and surfaces typos as a build error.
   */
  icon: LucideIcon
  /**
   * Size of the icon.
   * - `sm` — 16px
   * - `md` — 20px
   * - `lg` — 24px
   *
   * For a one-off size outside this scale, pass a Tailwind sizing class via
   * `className` (e.g. `className="size-8"`) instead.
   * @default 'md'
   */
  size?: IconVariants['size']
  /**
   * Color of the icon. The vocabulary mirrors `Text`'s `color` so an icon and
   * its adjacent label share one token:
   * - Foreground: `default` / `muted` / `subtle` (most → least prominent)
   * - State: `error` / `success` / `warning` / `info`
   * - Inverted: `inverted` / `inverted-muted` / `inverted-subtle` (for saturated surfaces)
   * - Brand: `vermillion` (朱) / `indigo` (藍)
   * - Plus: `inherit` — takes the surrounding `currentColor`
   * @default 'inherit'
   */
  color?: IconVariants['color']
  /**
   * Accessible label. When provided, the icon is exposed to assistive tech
   * with `role="img"`. When omitted, the icon is treated as decorative and
   * `aria-hidden="true"` is applied automatically.
   *
   * `Icon` is not interactive — for a clickable icon use `<Button icon={…} />`.
   */
  'aria-label'?: string
}

/**
 * Thin wrapper around a `lucide-react` icon that normalizes sizing and color
 * and applies accessibility defaults.
 *
 * - Decorative by default: with no `aria-label`, `aria-hidden="true"` is set.
 * - Meaningful when labelled: with `aria-label`, `role="img"` is set so the
 *   icon is queryable via `getByRole('img', { name })`.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size, color, className, ...props }, ref) => {
    const isDecorative = props['aria-label'] == null
    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        aria-hidden={isDecorative ? true : undefined}
        role={isDecorative ? undefined : 'img'}
        {...props}
      />
    )
  },
)

Icon.displayName = 'Icon'
