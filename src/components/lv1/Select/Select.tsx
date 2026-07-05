import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useId } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type SelectTriggerVariants, selectTriggerVariants } from '../../../variants/select'
import './Select.css'

// Every public Props type below is native-element props plus curated
// redeclarations — Radix types never appear in the public signature
// (api-stability.md §Radix type boundary).

/* ----- Root ----- */

export interface SelectProps {
  /**
   * The selected value (controlled).
   */
  value?: string
  /**
   * The initially selected value (uncontrolled).
   */
  defaultValue?: string
  /**
   * Fired when the selected value changes.
   */
  onValueChange?: (value: string) => void
  /**
   * Controlled open state of the dropdown.
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
   * Disables the select.
   */
  disabled?: boolean
  /**
   * Marks the control required for native form validation (blocks submission
   * via the hidden select). Inside `<Field required>`, the field's `required`
   * adds `aria-required` only (announce-only) — see field-context-guideline.
   */
  required?: boolean
  /**
   * Name submitted with the form data.
   */
  name?: string
  children?: ReactNode
}

const Select = (props: SelectProps) => <SelectPrimitive.Root {...props} />
Select.displayName = 'Select'

/* ----- Group ----- */

const SelectGroup = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Group ref={ref} className={cn('st-select__group', className)} {...props} />
  ),
)
SelectGroup.displayName = SelectPrimitive.Group.displayName

/* ----- Value ----- */

export interface SelectValueProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Shown while no value is selected.
   */
  placeholder?: ReactNode
}

const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Value ref={ref} className={cn('st-select__value', className)} {...props} />
  ),
)
SelectValue.displayName = SelectPrimitive.Value.displayName

/* ----- Trigger ----- */

/**
 * Props for the select trigger button.
 *
 * Accessible name: the trigger renders as `role="combobox"`, which does NOT
 * derive its name from content — the visible placeholder / selected value
 * never becomes the accessible name. Always render the trigger inside a
 * `<Field label="…">` (named via the Field label's `htmlFor`) or pass an
 * explicit `aria-label`.
 */
export interface SelectTriggerProps
  extends ComponentPropsWithoutRef<'button'>,
    SelectTriggerVariants {
  /**
   * Size of the select trigger.
   * @default 'md'
   */
  size?: SelectTriggerVariants['size']
  /**
   * Displays the select trigger in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      className,
      size,
      isError: isErrorProp = false,
      children,
      id: idProp,
      disabled: disabledProp,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const autoId = useId()

    const id = field?.id ?? idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    return (
      <SelectPrimitive.Trigger
        ref={ref}
        id={id}
        disabled={disabled}
        className={cn(selectTriggerVariants({ size }), className)}
        aria-invalid={isError || undefined}
        // Announce-only: never emit `aria-required={undefined}`, which would
        // clobber the `<Select required>`-derived value Radix sets from
        // `context.required` (Radix spreads consumer props after its
        // `aria-required`). The trigger button has no native `required`.
        {...(field?.required ? { 'aria-required': true } : null)}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="st-select__icon" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  },
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/* ----- ScrollUpButton ----- */

const SelectScrollUpButton = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn('st-select__scroll-up', className)}
      {...props}
    >
      <ChevronUp />
    </SelectPrimitive.ScrollUpButton>
  ),
)
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

/* ----- ScrollDownButton ----- */

const SelectScrollDownButton = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn('st-select__scroll-down', className)}
      {...props}
    >
      <ChevronDown />
    </SelectPrimitive.ScrollDownButton>
  ),
)
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

/* ----- Content ----- */

export interface SelectContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Positioning mode.
   * - `popper` — floats below the trigger like a menu
   * - `item-aligned` — overlays the trigger, aligning the selected item (native-select style)
   * @default 'popper'
   */
  position?: 'item-aligned' | 'popper'
  /**
   * Custom container element for the portal. Useful for rendering inside
   * a Dialog or Drawer.
   */
  container?: Element | DocumentFragment | null
}

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, position = 'popper', container, ...props }, ref) => (
    <SelectPrimitive.Portal container={container}>
      <SelectPrimitive.Content
        ref={ref}
        className={cn('st-select__content', className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="st-select__viewport">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
)
SelectContent.displayName = SelectPrimitive.Content.displayName

/* ----- Label ----- */

const SelectLabel = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label ref={ref} className={cn('st-select__label', className)} {...props} />
  ),
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

/* ----- Item ----- */

export interface SelectItemProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The value reported via `onValueChange` (and submitted with the form) when
   * this item is selected. Required.
   */
  value: string
  /**
   * Disables the item.
   */
  disabled?: boolean
  /**
   * Text used for typeahead matching. Defaults to the item's text content —
   * pass it when the children are not plain text.
   */
  textValue?: string
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item ref={ref} className={cn('st-select__item', className)} {...props}>
      <span className="st-select__item-indicator">
        <SelectPrimitive.ItemIndicator>
          <Check />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="st-select__item-text">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
)
SelectItem.displayName = SelectPrimitive.Item.displayName

/* ----- Separator ----- */

const SelectSeparator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn('st-select__separator', className)}
      {...props}
    />
  ),
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
