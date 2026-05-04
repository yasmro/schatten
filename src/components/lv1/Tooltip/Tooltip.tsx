import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'

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
>(({ className, sideOffset = 6, container, children, hideArrow = false, ...props }, ref) => (
  <TooltipPrimitive.Portal container={container}>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden border border-border-strong bg-background px-3 py-1.5 text-sm text-foreground shadow-md',
        'animate-in fade-in-0 zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    >
      {children}
      {!hideArrow && (
        <TooltipPrimitive.Arrow className="fill-background drop-shadow-[0_1px_0_var(--color-border-strong)]" />
      )}
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
