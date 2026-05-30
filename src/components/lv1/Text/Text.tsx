import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type TextVariants, textVariants } from '../../../variants/text'
import './Text.css'

type TextElement = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'>, TextVariants {
  /**
   * Semantic role of the text.
   * - `body` — paragraph copy
   * - `label` — form labels and inline metadata
   * - `heading` — headings (use `as` to pick `h1`–`h6`)
   * @default 'body'
   */
  variant?: TextVariants['variant']
  /**
   * Size of the text. Available sizes depend on the variant.
   * @default 'md'
   */
  size?: TextVariants['size']
  /**
   * Color of the text. Three parallel hierarchies plus state colors:
   * - Foreground: `default` / `muted` / `subtle` (most → least prominent)
   * - State: `error` / `success` / `warning` / `info` (inline status text)
   * - Inverted: `inverted` / `inverted-muted` / `inverted-subtle` (for saturated surfaces)
   * - Brand: `vermillion` (朱) / `indigo` (藍) — the brand colors for deliberate emphasis
   * - Plus: `inherit` (delegates to the parent)
   * @default 'default'
   */
  color?: TextVariants['color']
  /** Text alignment. */
  align?: TextVariants['align']
  /**
   * Truncate text with ellipsis on overflow.
   * @default false
   */
  truncate?: TextVariants['truncate']
  /**
   * HTML element to render.
   * Defaults to `<p>` for `body` and `heading`, and `<label>` for `label`.
   *
   * To render Text styling on an arbitrary element (e.g. a framework
   * `<Link>`), apply `textVariants(...)` to that element directly — Text
   * does not expose `asChild`.
   */
  as?: TextElement
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, color, align, truncate, as, ...props }, ref) => {
    const defaultTag = variant === 'label' ? 'label' : 'p'
    const Comp = as ?? defaultTag

    return (
      <Comp
        className={cn(textVariants({ variant, size, color, align, truncate, className }))}
        ref={ref as React.Ref<never>}
        {...props}
      />
    )
  },
)

Text.displayName = 'Text'
