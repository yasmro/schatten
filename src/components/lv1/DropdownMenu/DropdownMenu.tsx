import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle, type LucideIcon } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../../lib/utils'
import {
  type DropdownMenuItemVariants,
  dropdownMenuItemVariants,
} from '../../../variants/dropdown-menu'
import './DropdownMenu.css'

// Every public Props type below is native-element props plus curated
// redeclarations — Radix types never appear in the public signature
// (api-stability.md §Radix type boundary). Menu items omit the native
// `onSelect` (the DOM text-selection event) so the Radix menu-item
// `onSelect?: (event: Event) => void` can be redeclared in its place.

/* ----- Root ----- */

export interface DropdownMenuProps {
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
   * Whether the menu traps focus and locks scroll while open.
   * @default true
   */
  modal?: boolean
  children?: ReactNode
}

const DropdownMenu = (props: DropdownMenuProps) => <DropdownMenuPrimitive.Root {...props} />
DropdownMenu.displayName = 'DropdownMenu'

/* ----- Group ----- */

const DropdownMenuGroup = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Group
      ref={ref}
      className={cn('st-dropdown-menu__group', className)}
      {...props}
    />
  ),
)
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName

/* ----- Sub (submenu root) ----- */

export interface DropdownMenuSubProps {
  /**
   * Controlled open state of the submenu.
   */
  open?: boolean
  /**
   * Initial open state (uncontrolled).
   */
  defaultOpen?: boolean
  /**
   * Fired when the submenu open state changes.
   */
  onOpenChange?: (open: boolean) => void
  children?: ReactNode
}

const DropdownMenuSub = (props: DropdownMenuSubProps) => <DropdownMenuPrimitive.Sub {...props} />
DropdownMenuSub.displayName = 'DropdownMenuSub'

/* ----- RadioGroup ----- */

export interface DropdownMenuRadioGroupProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The selected radio item's value.
   */
  value?: string
  /**
   * Fired when the selected radio item changes.
   */
  onValueChange?: (value: string) => void
}

const DropdownMenuRadioGroup = forwardRef<HTMLDivElement, DropdownMenuRadioGroupProps>(
  (props, ref) => <DropdownMenuPrimitive.RadioGroup ref={ref} {...props} />,
)
DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName

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
export interface DropdownMenuTriggerProps extends ComponentPropsWithoutRef<'button'> {}

const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, ...props }, ref) => {
    const isTextOnly = typeof children === 'string' || typeof children === 'number'
    return (
      <DropdownMenuPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
        {children}
      </DropdownMenuPrimitive.Trigger>
    )
  },
)
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface DropdownMenuContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The preferred side of the trigger to render the menu against.
   * @default 'bottom'
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * The alignment against the trigger.
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end'
  /**
   * Distance from the trigger, in pixels.
   * @default 8
   */
  sideOffset?: number
  /**
   * Offset along the alignment axis, in pixels.
   */
  alignOffset?: number
  /**
   * Whether arrow-key navigation loops from the last item back to the first.
   * @default false
   */
  loop?: boolean
  /**
   * Custom container element for the portal. Useful for rendering inside
   * a Dialog or Drawer.
   */
  container?: Element | DocumentFragment | null
}

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, sideOffset = 8, container, ...props }, ref) => (
    // 8px gap via Radix sideOffset (not a CSS `translate:`) — a transform on the
    // content would establish a containing block for the nested SubContent popper
    // and misplace the submenu. See DropdownMenu.css.
    <DropdownMenuPrimitive.Portal container={container}>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn('st-dropdown-menu__content', className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  ),
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

/* ----- Item ----- */

export interface DropdownMenuItemProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'>,
    DropdownMenuItemVariants {
  /**
   * Fired when the item is chosen (click or Enter/Space). Call
   * `event.preventDefault()` to keep the menu open.
   */
  onSelect?: (event: Event) => void
  /**
   * Disables the item.
   */
  disabled?: boolean
  /**
   * Text used for typeahead matching. Defaults to the item's text content —
   * pass it when the children are not plain text.
   */
  textValue?: string
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

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
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
  },
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

/* ----- CheckboxItem ----- */

export interface DropdownMenuCheckboxItemProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /**
   * Controlled checked state. `'indeterminate'` renders the mixed state.
   */
  checked?: boolean | 'indeterminate'
  /**
   * Fired when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * Fired when the item is chosen. Call `event.preventDefault()` to keep the
   * menu open (common for checkbox items).
   */
  onSelect?: (event: Event) => void
  /**
   * Disables the item.
   */
  disabled?: boolean
  /**
   * Text used for typeahead matching. Defaults to the item's text content.
   */
  textValue?: string
}

const DropdownMenuCheckboxItem = forwardRef<HTMLDivElement, DropdownMenuCheckboxItemProps>(
  ({ className, children, checked, ...props }, ref) => (
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
  ),
)
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

/* ----- RadioItem ----- */

export interface DropdownMenuRadioItemProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /**
   * The value reported via the surrounding `DropdownMenuRadioGroup`'s
   * `onValueChange` when this item is chosen. Required.
   */
  value: string
  /**
   * Fired when the item is chosen. Call `event.preventDefault()` to keep the
   * menu open.
   */
  onSelect?: (event: Event) => void
  /**
   * Disables the item.
   */
  disabled?: boolean
  /**
   * Text used for typeahead matching. Defaults to the item's text content.
   */
  textValue?: string
}

const DropdownMenuRadioItem = forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>(
  ({ className, children, ...props }, ref) => (
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
  ),
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/* ----- Label ----- */

const DropdownMenuLabel = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn('st-dropdown-menu__label', className)}
      {...props}
    />
  ),
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

/* ----- Separator ----- */

const DropdownMenuSeparator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn('st-dropdown-menu__separator', className)}
      {...props}
    />
  ),
)
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

export interface DropdownMenuSubTriggerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Disables the sub-trigger.
   */
  disabled?: boolean
  /**
   * Text used for typeahead matching. Defaults to the item's text content.
   */
  textValue?: string
  /**
   * Leading Lucide icon component, rendered `aria-hidden` before the label.
   */
  icon?: LucideIcon
}

const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, DropdownMenuSubTriggerProps>(
  ({ className, icon, children, ...props }, ref) => {
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
  },
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

/* ----- SubContent ----- */

export interface DropdownMenuSubContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Distance from the sub-trigger edge, in pixels. See the derivation comment
   * in the implementation before changing the default.
   * @default 9
   */
  sideOffset?: number
  /**
   * Offset along the alignment axis, in pixels.
   */
  alignOffset?: number
  /**
   * Whether arrow-key navigation loops from the last item back to the first.
   * @default false
   */
  loop?: boolean
}

const DropdownMenuSubContent = forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ className, sideOffset = 9, ...props }, ref) => (
    // sideOffset is measured from the sub-trigger edge, which sits inside the
    // parent panel's outer edge by [panel right padding (0.25rem ≈ 4px) + border
    // (1px)] = 5px (see `.st-dropdown-menu__content` in DropdownMenu.css). So the
    // default 9 = 5 (clear the panel edge) + 4 (visible gap) ⇒ ~4px gap. If that
    // padding/border ever changes, re-derive this so the gap stays 4px. It also
    // keeps the submenu vertically aligned to the sub-trigger (sideOffset is the
    // cross-axis distance, not the alignment).
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn('st-dropdown-menu__content', 'st-dropdown-menu__sub-content', className)}
      {...props}
    />
  ),
)
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
