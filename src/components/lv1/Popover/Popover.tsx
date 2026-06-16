import * as PopoverPrimitive from '@radix-ui/react-popover'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import './Popover.css'

/* ----- Root ----- */

/**
 * Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no
 * `Provider`, so the root is used directly. `open` / `defaultOpen` /
 * `onOpenChange` / `modal` are透過する (Radix props).
 *
 * `modal` defaults to Radix's `false` — Popover is non-modal: the rest of the
 * page stays interactive, there is no scroll lock, and Tab can leave the
 * panel. Set `modal` when a focus trap + scroll lock is required.
 */
const Popover = PopoverPrimitive.Root

/* ----- Anchor ----- */

/**
 * Optional positioning anchor. Render it around the element the content should
 * be positioned against when that element is not the `PopoverTrigger`.
 */
const PopoverAnchor = PopoverPrimitive.Anchor

/* ----- Trigger ----- */

/**
 * The element that opens the popover.
 *
 * Like `TooltipTrigger`, `asChild` is not part of the public API — it is
 * decided internally from the child: an element child (e.g. `<Button>`) is
 * rendered via `asChild` so the popover's behaviour merges onto it, while a
 * string child lets Radix render its own `<button>`. Wrap a `<Button>` for a
 * styled trigger; for an icon-only trigger pass `aria-label` on that Button so
 * the trigger has an accessible name.
 */
export interface PopoverTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>, 'asChild'> {}

const PopoverTrigger = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Trigger>,
  PopoverTriggerProps
>(({ children, ...props }, ref) => {
  const isTextOnly = typeof children === 'string' || typeof children === 'number'
  return (
    <PopoverPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  )
})
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  /**
   * The preferred side of the trigger to render the popover against.
   * @default 'bottom'
   */
  side?: ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>['side']
  /**
   * The alignment against the trigger.
   * @default 'center'
   */
  align?: ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>['align']
  /**
   * Custom container element for the portal. Useful for rendering inside a
   * Dialog or Drawer.
   */
  container?: ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>['container']
}

const PopoverContent = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 8, container, ...props }, ref) => (
  // The 8px gap comes from Radix `sideOffset` (which moves the popper
  // wrapper), NOT a CSS `translate:` on the content — keeping the gap off the
  // content itself matches the project-wide convention. Popover content holds
  // no nested `position: fixed` child, so the enter/exit animation MAY use
  // `transform` (slide + fade), unlike DropdownMenu. See Popover.css.
  <PopoverPrimitive.Portal container={container}>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn('st-popover__content', className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

/* ----- Close ----- */

/**
 * Closes the popover. Wrap a `<Button>` with `asChild` for a styled close
 * action inside the panel.
 */
const PopoverClose = PopoverPrimitive.Close

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
