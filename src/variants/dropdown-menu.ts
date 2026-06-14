import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Class-name connector for DropdownMenu items — actual visual rules live in
 * [src/components/lv1/DropdownMenu/DropdownMenu.css](../components/lv1/DropdownMenu/DropdownMenu.css)
 * (`@layer components`). See css-api.md and #41.
 *
 * `variant` is a Pattern A-style action role (the menu item is an action,
 * not a state surface — `destructive` mirrors `Button`'s `destructive`
 * intent, routing to `--color-destructive`). `default` carries no extra
 * modifier — the base `.st-dropdown-menu__item` rule is the resting style.
 *
 * `inset` indents an item to align with sibling items that own a leading
 * indicator (checkbox / radio), so mixed menus stay visually aligned.
 */
export const dropdownMenuItemVariants = cva('st-dropdown-menu__item', {
  variants: {
    variant: {
      default: '',
      destructive: 'st-dropdown-menu__item--destructive',
    },
    inset: {
      true: 'st-dropdown-menu__item--inset',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    inset: false,
  },
})

export type DropdownMenuItemVariants = VariantProps<typeof dropdownMenuItemVariants>
