import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import './Separator.css'

// Public props are native <div> props plus curated redeclarations — Radix types
// never appear in the public signature (api-stability.md §Radix type boundary).
export interface SeparatorProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * When true, the separator is purely visual and hidden from assistive technologies.
   * When false, it is exposed as a semantic divider with `role="separator"`.
   * @default true
   */
  decorative?: boolean
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'st-separator',
        orientation === 'vertical' ? 'st-separator--vertical' : 'st-separator--horizontal',
        className,
      )}
      {...props}
    />
  ),
)

Separator.displayName = SeparatorPrimitive.Root.displayName
