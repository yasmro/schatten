import { Slot } from '@radix-ui/react-slot'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type TextVariants, textVariants } from '../../../variants/text'

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
   * - Plus: `accent` (one-off emphasis), `inherit` (delegates to the parent)
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
   */
  as?: TextElement
  /**
   * Delegates props to the child element via Radix Slot.
   * @default false
   */
  asChild?: boolean
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, color, align, truncate, as, asChild = false, ...props }, ref) => {
    const defaultTag = variant === 'label' ? 'label' : 'p'
    const Comp = asChild ? Slot : (as ?? defaultTag)

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
