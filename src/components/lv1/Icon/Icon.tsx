import type { LucideIcon, LucideProps } from 'lucide-react'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils'

/** Maps the semantic `size` token to a Tailwind sizing class. */
const SIZE_CLASS = {
  sm: 'size-4', // 16px
  md: 'size-5', // 20px
  lg: 'size-6', // 24px
} as const

export interface IconProps extends Omit<LucideProps, 'ref' | 'size'> {
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
  size?: 'sm' | 'md' | 'lg'
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
 * Thin wrapper around a `lucide-react` icon that normalizes sizing and applies
 * accessibility defaults.
 *
 * - Decorative by default: with no `aria-label`, `aria-hidden="true"` is set.
 * - Meaningful when labelled: with `aria-label`, `role="img"` is set so the
 *   icon is queryable via `getByRole('img', { name })`.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = 'md', className, ...props }, ref) => {
    const isDecorative = props['aria-label'] == null
    return (
      <IconComponent
        ref={ref}
        className={cn(SIZE_CLASS[size], className)}
        aria-hidden={isDecorative ? true : undefined}
        role={isDecorative ? undefined : 'img'}
        {...props}
      />
    )
  },
)

Icon.displayName = 'Icon'
