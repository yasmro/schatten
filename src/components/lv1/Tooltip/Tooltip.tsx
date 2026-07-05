import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import './Tooltip.css'

// Every public Props type below is native-element props plus curated
// redeclarations — Radix types never appear in the public signature
// (api-stability.md §Radix type boundary).

/* ----- Provider ----- */

export interface TooltipProviderProps {
  /**
   * How long a pointer must hover before any tooltip in the subtree opens,
   * in milliseconds.
   * @default 700
   */
  delayDuration?: number
  /**
   * Grace window in milliseconds after a tooltip closes during which the next
   * tooltip opens immediately (no delay).
   * @default 300
   */
  skipDelayDuration?: number
  /**
   * When true, hovering the tooltip content itself does not keep it open.
   */
  disableHoverableContent?: boolean
  children: ReactNode
}

const TooltipProvider = (props: TooltipProviderProps) => <TooltipPrimitive.Provider {...props} />
TooltipProvider.displayName = 'TooltipProvider'

/* ----- Root ----- */

export interface TooltipProps {
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * Initial open state (uncontrolled).
   */
  defaultOpen?: boolean
  /**
   * Fired when the open state changes.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Per-tooltip override of the provider's `delayDuration`, in milliseconds.
   */
  delayDuration?: number
  /**
   * Per-tooltip override of the provider's `disableHoverableContent`.
   */
  disableHoverableContent?: boolean
  children?: ReactNode
}

const Tooltip = (props: TooltipProps) => <TooltipPrimitive.Root {...props} />
Tooltip.displayName = 'Tooltip'

/* ----- Trigger ----- */

export interface TooltipTriggerProps extends ComponentPropsWithoutRef<'button'> {}

const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ children, ...props }, ref) => {
    const isTextOnly = typeof children === 'string' || typeof children === 'number'
    return (
      <TooltipPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
        {children}
      </TooltipPrimitive.Trigger>
    )
  },
)
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface TooltipContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The preferred side of the trigger to render the tooltip.
   * @default 'top'
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /** Custom container element for the portal. Useful for rendering inside a Dialog. */
  container?: Element | DocumentFragment | null
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, container, children, ...props }, ref) => (
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
  ),
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
