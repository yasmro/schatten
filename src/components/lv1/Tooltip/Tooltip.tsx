import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import './Tooltip.css'

/* ----- Provider ----- */

export type TooltipProviderProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider>

const TooltipProvider = TooltipPrimitive.Provider

/* ----- Root ----- */

const Tooltip = TooltipPrimitive.Root

/* ----- Trigger ----- */

const TooltipTrigger = TooltipPrimitive.Trigger

/* ----- Portal ----- */

export interface TooltipPortalProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal> {}

const TooltipPortal = TooltipPrimitive.Portal

/* ----- Content ----- */

export interface TooltipContentProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  /** Portal container element */
  container?: TooltipPortalProps['container']
  /** Hide the arrow indicator. @default false */
  hideArrow?: boolean
}

const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, container, children, hideArrow = false, ...props }, ref) => (
  <TooltipPrimitive.Portal container={container}>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'tooltip-content z-50 bg-foreground px-3 py-1.5 text-sm text-background shadow-md',
        className,
      )}
      {...props}
    >
      {children}
      {!hideArrow && <TooltipPrimitive.Arrow className="fill-foreground" />}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

/* ----- Arrow ----- */

const TooltipArrow = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow ref={ref} className={cn('fill-background', className)} {...props} />
))
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName

export { Tooltip, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger }
