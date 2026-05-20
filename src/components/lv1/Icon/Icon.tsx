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
}

/**
 * Thin wrapper around a `lucide-react` icon that normalizes sizing and color
 * and applies accessibility defaults.
 *
 * Accessibility is driven by the standard `aria-label` / `aria-labelledby`
 * attributes (inherited from the SVG prop surface, so no dedicated prop is
 * needed):
 * - Decorative by default: with no label, `aria-hidden="true"` is set. An
 *   empty-string `aria-label` does not count as a label.
 * - Meaningful when labelled: with `aria-label` (or `aria-labelledby`),
 *   `role="img"` is set so the icon is queryable via
 *   `getByRole('img', { name })`.
 *
 * `Icon` is not interactive — for a clickable icon use `<Button icon={…} />`.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size, color, className, ...props }, ref) => {
    // A non-empty `aria-label` / `aria-labelledby` makes the icon meaningful;
    // anything else (including an empty-string label) is decorative.
    const isLabelled = Boolean(props['aria-label']) || Boolean(props['aria-labelledby'])

    if (
      process.env.NODE_ENV !== 'production' &&
      isLabelled &&
      (props['aria-hidden'] === true || props['aria-hidden'] === 'true')
    ) {
      console.warn(
        'Icon: `aria-hidden` is set on a labelled icon. A labelled icon is exposed to assistive tech via `role="img"`; `aria-hidden` removes it from the accessibility tree, contradicting the label. Drop one of them.',
      )
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, color }), className)}
        aria-hidden={isLabelled ? undefined : true}
        role={isLabelled ? 'img' : undefined}
        {...props}
      />
    )
  },
)

Icon.displayName = 'Icon'
