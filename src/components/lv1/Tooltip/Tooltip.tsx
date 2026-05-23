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

export interface TooltipTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>, 'asChild'> {}

const TooltipTrigger = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ children, ...props }, ref) => {
  const isTextOnly = typeof children === 'string' || typeof children === 'number'
  return (
    <TooltipPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  )
})
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface TooltipContentProps
  extends Omit<
    ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    'sideOffset' | 'alignOffset' | 'align'
  > {
  /**
   * The preferred side of the trigger to render the tooltip.
   * @default 'top'
   */
  side?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>['side']
  /** Custom container element for the portal. Useful for rendering inside a Dialog. */
  container?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal>['container']
}

const TooltipContent = forwardRef<
  ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, container, children, ...props }, ref) => (
  <TooltipPrimitive.Portal container={container}>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={4}
      className={cn('st-tooltip__content', className)}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="st-tooltip__arrow" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
