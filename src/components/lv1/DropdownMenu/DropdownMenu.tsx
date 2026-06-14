import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle, type LucideIcon } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
  type HTMLAttributes,
} from 'react'
import { cn } from '../../../lib/utils'
import {
  type DropdownMenuItemVariants,
  dropdownMenuItemVariants,
} from '../../../variants/dropdown-menu'
import './DropdownMenu.css'

/* ----- Root ----- */

const DropdownMenu = DropdownMenuPrimitive.Root

/* ----- Group ----- */

const DropdownMenuGroup = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Group>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Group
    ref={ref}
    className={cn('st-dropdown-menu__group', className)}
    {...props}
  />
))
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName

/* ----- Sub (submenu root) ----- */

const DropdownMenuSub = DropdownMenuPrimitive.Sub

/* ----- RadioGroup ----- */

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/* ----- Trigger ----- */

/**
 * The element that opens the menu.
 *
 * Like `TooltipTrigger`, `asChild` is not part of the public API — it is
 * decided internally from the child: an element child (e.g. `<Button>`) is
 * rendered via `asChild` so the menu's behaviour merges onto it, while a
 * string child lets Radix render its own `<button>`. Wrap a `<Button>` for
 * a styled trigger; for an icon-only trigger pass `aria-label` on that
 * Button so the trigger has an accessible name.
 */
export interface DropdownMenuTriggerProps
  extends Omit<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'asChild'> {}

const DropdownMenuTrigger = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownMenuTriggerProps
>(({ children, ...props }, ref) => {
  const isTextOnly = typeof children === 'string' || typeof children === 'number'
  return (
    <DropdownMenuPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  )
})
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface DropdownMenuContentProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  /**
   * Custom container element for the portal. Useful for rendering inside
   * a Dialog or Drawer.
   */
  container?: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>['container']
}

const DropdownMenuContent = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, container, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal container={container}>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn('st-dropdown-menu__content', className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/* ----- Item ----- */

export interface DropdownMenuItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    DropdownMenuItemVariants {
  /**
   * Visual role of the item.
   * - `default` — standard action
   * - `destructive` — destructive intent (delete, remove); routes to `--color-destructive`
   * @default 'default'
   */
  variant?: DropdownMenuItemVariants['variant']
  /**
   * Leading Lucide icon component, rendered `aria-hidden` before the label.
   * Import from `lucide-react` and pass the component directly — e.g.
   * `import { Edit } from 'lucide-react'` then `<DropdownMenuItem icon={Edit} />`.
   */
  icon?: LucideIcon
}

const DropdownMenuItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, variant, icon, children, ...props }, ref) => {
  const IconComponent = icon ?? null
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(dropdownMenuItemVariants({ variant }), className)}
      {...props}
    >
      {IconComponent && (
        <IconComponent className="st-dropdown-menu__item-icon" aria-hidden="true" />
      )}
      {children}
    </DropdownMenuPrimitive.Item>
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/* ----- CheckboxItem ----- */

const DropdownMenuCheckboxItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn('st-dropdown-menu__item', 'st-dropdown-menu__checkbox-item', className)}
    checked={checked}
    {...props}
  >
    <span className="st-dropdown-menu__item-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check aria-hidden="true" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

/* ----- RadioItem ----- */

const DropdownMenuRadioItem = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn('st-dropdown-menu__item', 'st-dropdown-menu__radio-item', className)}
    {...props}
  >
    <span className="st-dropdown-menu__item-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle aria-hidden="true" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/* ----- Label ----- */

const DropdownMenuLabel = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('st-dropdown-menu__label', className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/* ----- Separator ----- */

const DropdownMenuSeparator = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('st-dropdown-menu__separator', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/* ----- Shortcut ----- */

/**
 * Inline keyboard-hint text (e.g. `⌘E`), pushed to the trailing edge of an
 * item. Purely presentational — not a Radix part.
 */
const DropdownMenuShortcut = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('st-dropdown-menu__shortcut', className)} {...props} />
  ),
)
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

/* ----- SubTrigger ----- */

export interface DropdownMenuSubTriggerProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  /**
   * Leading Lucide icon component, rendered `aria-hidden` before the label.
   */
  icon?: LucideIcon
}

const DropdownMenuSubTrigger = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, icon, children, ...props }, ref) => {
  const IconComponent = icon ?? null
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn('st-dropdown-menu__item', 'st-dropdown-menu__sub-trigger', className)}
      {...props}
    >
      {IconComponent && (
        <IconComponent className="st-dropdown-menu__item-icon" aria-hidden="true" />
      )}
      {children}
      <ChevronRight className="st-dropdown-menu__sub-trigger-chevron" aria-hidden="true" />
    </DropdownMenuPrimitive.SubTrigger>
  )
})
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

/* ----- SubContent ----- */

const DropdownMenuSubContent = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn('st-dropdown-menu__content', 'st-dropdown-menu__sub-content', className)}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
