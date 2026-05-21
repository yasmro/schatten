import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import './Separator.css'

export interface SeparatorProps extends ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  /**
   * Orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>['orientation']
  /**
   * When true, the separator is purely visual and hidden from assistive technologies.
   * When false, it is exposed as a semantic divider with `role="separator"`.
   * @default true
   */
  decorative?: boolean
}

export const Separator = forwardRef<ComponentRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn('st-separator', className)}
      {...props}
    />
  ),
)

Separator.displayName = SeparatorPrimitive.Root.displayName
