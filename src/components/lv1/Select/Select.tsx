import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef, useId } from 'react'
import { useFieldContext } from '../../../contexts/field'
import { cn } from '../../../lib/utils'
import { type SelectTriggerVariants, selectTriggerVariants } from '../../../variants/select'
import './Select.css'

/* ----- Root ----- */

const Select = SelectPrimitive.Root

/* ----- Group ----- */

const SelectGroup = forwardRef<
  ComponentRef<typeof SelectPrimitive.Group>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Group ref={ref} className={cn('st-select__group', className)} {...props} />
))
SelectGroup.displayName = SelectPrimitive.Group.displayName

/* ----- Value ----- */

const SelectValue = forwardRef<
  ComponentRef<typeof SelectPrimitive.Value>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Value ref={ref} className={cn('st-select__value', className)} {...props} />
))
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
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'size' | 'asChild'>,
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

const SelectTrigger = forwardRef<ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
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

const SelectScrollUpButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('st-select__scroll-up', className)}
    {...props}
  >
    <ChevronUp />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

/* ----- ScrollDownButton ----- */

const SelectScrollDownButton = forwardRef<
  ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('st-select__scroll-down', className)}
    {...props}
  >
    <ChevronDown />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

/* ----- Content ----- */

export interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  /**
   * Custom container element for the portal. Useful for rendering inside
   * a Dialog or Drawer.
   */
  container?: ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>['container']
}

const SelectContent = forwardRef<ComponentRef<typeof SelectPrimitive.Content>, SelectContentProps>(
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

const SelectLabel = forwardRef<
  ComponentRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn('st-select__label', className)} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

/* ----- Item ----- */

const SelectItem = forwardRef<
  ComponentRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn('st-select__item', className)} {...props}>
    <span className="st-select__item-indicator">
      <SelectPrimitive.ItemIndicator>
        <Check />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText className="st-select__item-text">{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

/* ----- Separator ----- */

const SelectSeparator = forwardRef<
  ComponentRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('st-select__separator', className)}
    {...props}
  />
))
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
