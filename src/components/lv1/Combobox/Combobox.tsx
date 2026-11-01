import * as PopoverPrimitive from '@radix-ui/react-popover'
import { Check, ChevronDown, Search } from 'lucide-react'
import {
  Children,
  type ComponentPropsWithoutRef,
  createContext,
  forwardRef,
  isValidElement,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { useControllable } from '../../../lib/use-controllable'
import { cn } from '../../../lib/utils'
import { type ComboboxTriggerVariants, comboboxTriggerVariants } from '../../../variants/combobox'
import './Combobox.css'

// Every public Props type below is native-element props plus curated
// redeclarations — Radix types never appear in the public signature
// (api-stability.md §Radix type boundary).

const OPTION_SELECTOR = '[role="option"]'
const ENABLED_OPTION_SELECTOR = `${OPTION_SELECTOR}:not([aria-disabled="true"])`

/** Case- and width-insensitive, so `ｱｲｳ` finds `アイウ` and `abc` finds `ABC`. */
const normalize = (text: string) => text.normalize('NFKC').toLowerCase()

const defaultFilter = (text: string, search: string) =>
  normalize(text).includes(normalize(search.trim()))

/** The text of a React node, for matching when `textValue` is not given. */
const textOf = (node: ReactNode): string =>
  Children.toArray(node)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') return String(child)
      return isValidElement(child)
        ? textOf((child as ReactElement<{ children?: ReactNode }>).props.children)
        : ''
    })
    .join('')

interface ComboboxContextValue {
  value: string
  isSelected: (value: string) => boolean
  selectValue: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  disabled?: boolean
  required: boolean
  search: string
  setSearch: (search: string) => void
  filter: ((text: string, search: string) => boolean) | false
  labelOf: (value: string) => string | undefined
  registerLabel: (value: string, label: string) => void
  listRef: RefObject<HTMLDivElement | null>
  listId: string
  triggerId?: string
  setTriggerId: (id: string) => void
  activeId: string | null
  setActiveId: (id: string | null) => void
  isEmpty: boolean
  setIsEmpty: (isEmpty: boolean) => void
}

const ComboboxContext = createContext<ComboboxContextValue | null>(null)

/** True inside the open panel, false in the hidden pass that collects labels. */
const InPanelContext = createContext(false)

const GroupLabelContext = createContext<string | undefined>(undefined)

function useComboboxContext(part: string) {
  const context = useContext(ComboboxContext)
  if (!context) throw new Error(`${part} must be rendered inside <Combobox>.`)
  return context
}

/* ----- Root ----- */

export interface ComboboxProps {
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
   * Controlled open state of the panel.
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
   * Fired when the search text changes, and with `''` when the panel has
   * closed and the text is cleared. Pair with `filter={false}` to fetch the
   * options yourself.
   */
  onSearchChange?: (search: string) => void
  /**
   * How options are matched against the search text. Receives the option's
   * text and the search text. Pass `false` when the options are already
   * filtered, for example by a server.
   *
   * The default ignores case and full-width / half-width differences.
   */
  filter?: ((text: string, search: string) => boolean) | false
  /**
   * Disables the combobox.
   */
  disabled?: boolean
  /**
   * Marks the control required for native form validation. Inside
   * `<Field required>`, the field's `required` adds `aria-required` only
   * (announce-only) — see field-context-guideline.
   */
  required?: boolean
  /**
   * Name submitted with the form data.
   */
  name?: string
  children?: ReactNode
}

/**
 * Single-select dropdown whose options are narrowed by a search field inside
 * the panel. Use `Select` when the options are few enough to scan.
 *
 * Built on Radix Popover because Radix Select cannot host a text input: its
 * typeahead and focus handling take the keys the input needs. Focus stays in
 * the input while the panel is open, and the highlighted option is exposed
 * through `aria-activedescendant`.
 */
const Combobox = ({
  value: valueProp,
  defaultValue = '',
  onValueChange,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onSearchChange,
  filter = defaultFilter,
  disabled: disabledProp,
  required = false,
  name,
  children,
}: ComboboxProps) => {
  const field = useFieldContext()
  const disabled = field?.disabled ?? disabledProp

  const [value, setValue] = useControllable(valueProp, defaultValue, onValueChange)
  const [open, setOpen] = useControllable(openProp, defaultOpen, onOpenChange)
  const [search, setSearchState] = useState('')
  const [triggerId, setTriggerId] = useState<string>()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isEmpty, setIsEmpty] = useState(false)

  const listRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const nativeInputRef = useRef<HTMLInputElement>(null)

  // Options only exist in the DOM while the panel is open, so their labels are
  // kept here for the trigger. Entries outlive the option: a selected option
  // that a server search no longer returns must still display.
  const labels = useRef(new Map<string, string>())
  const [, setLabelVersion] = useState(0)
  const valueRef = useRef(value)
  valueRef.current = value

  const registerLabel = useCallback((itemValue: string, label: string) => {
    if (labels.current.get(itemValue) === label) return
    labels.current.set(itemValue, label)
    if (itemValue === valueRef.current) setLabelVersion((version) => version + 1)
  }, [])
  const labelOf = useCallback((itemValue: string) => labels.current.get(itemValue), [])

  const onSearchChangeRef = useRef(onSearchChange)
  onSearchChangeRef.current = onSearchChange
  const searchRef = useRef(search)
  const setSearch = useCallback((next: string) => {
    if (next === searchRef.current) return
    searchRef.current = next
    setSearchState(next)
    onSearchChangeRef.current?.(next)
  }, [])

  const isSelected = useCallback((itemValue: string) => itemValue === value, [value])
  const selectValue = useCallback(
    (itemValue: string) => {
      setValue(itemValue)
      setOpen(false)
    },
    [setOpen, setValue],
  )

  // The hidden input does not follow a form reset on its own.
  useEffect(() => {
    const form = nativeInputRef.current?.form
    if (!form) return
    const handleReset = () => setValue(defaultValue)
    form.addEventListener('reset', handleReset)
    return () => form.removeEventListener('reset', handleReset)
  }, [defaultValue, setValue])

  const context = useMemo<ComboboxContextValue>(
    () => ({
      value,
      isSelected,
      selectValue,
      open,
      setOpen,
      disabled,
      required,
      search,
      setSearch,
      filter,
      labelOf,
      registerLabel,
      listRef,
      listId,
      triggerId,
      setTriggerId,
      activeId,
      setActiveId,
      isEmpty,
      setIsEmpty,
    }),
    [
      value,
      isSelected,
      selectValue,
      open,
      setOpen,
      disabled,
      required,
      search,
      setSearch,
      filter,
      labelOf,
      registerLabel,
      listId,
      triggerId,
      activeId,
      isEmpty,
    ],
  )

  return (
    <ComboboxContext.Provider value={context}>
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        {children}
      </PopoverPrimitive.Root>
      {(name || required) && (
        <input
          ref={nativeInputRef}
          className="st-combobox__native-input"
          aria-hidden="true"
          tabIndex={-1}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          // `readOnly` would exempt the input from native validation.
          onChange={() => {}}
        />
      )}
    </ComboboxContext.Provider>
  )
}
Combobox.displayName = 'Combobox'

/* ----- Value ----- */

export interface ComboboxValueProps extends ComponentPropsWithoutRef<'span'> {
  /**
   * Shown while no value is selected.
   */
  placeholder?: ReactNode
}

/**
 * The selected option's text. Pass `children` to display something else, for
 * example when a server-filtered option has not been rendered yet.
 */
const ComboboxValue = forwardRef<HTMLSpanElement, ComboboxValueProps>(
  ({ className, placeholder, children, ...props }, ref) => {
    const { value, labelOf } = useComboboxContext('ComboboxValue')
    return (
      <span ref={ref} className={cn('st-combobox__value', className)} {...props}>
        {children ?? (value ? (labelOf(value) ?? value) : placeholder)}
      </span>
    )
  },
)
ComboboxValue.displayName = 'ComboboxValue'

/* ----- Trigger ----- */

/**
 * Props for the combobox trigger button.
 *
 * Accessible name: like `SelectTrigger`, the trigger renders as
 * `role="combobox"`, which does NOT derive its name from content. Always render
 * it inside a `<Field label="…">` or pass an explicit `aria-label`.
 */
export interface ComboboxTriggerProps
  extends ComponentPropsWithoutRef<'button'>,
    ComboboxTriggerVariants {
  /**
   * Size of the combobox trigger.
   * @default 'md'
   */
  size?: ComboboxTriggerVariants['size']
  /**
   * Displays the combobox trigger in an error state with error border and ring.
   * When used inside a `<Field>`, the field's error state takes precedence.
   * @default false
   */
  isError?: boolean
}

const ComboboxTrigger = forwardRef<HTMLButtonElement, ComboboxTriggerProps>(
  (
    {
      className,
      size,
      isError: isErrorProp = false,
      children,
      id: idProp,
      disabled: disabledProp,
      onKeyDown,
      'aria-describedby': ariaDescribedByProp,
      ...props
    },
    ref,
  ) => {
    const context = useComboboxContext('ComboboxTrigger')
    const { setOpen, setTriggerId, required } = context
    const field = useFieldContext()
    const autoId = useId()

    const id = field?.id ?? idProp ?? autoId
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? context.disabled
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp

    useEffect(() => setTriggerId(id), [id, setTriggerId])

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event)
      if (event.defaultPrevented) return
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        setOpen(true)
      }
    }

    return (
      <PopoverPrimitive.Trigger
        ref={ref}
        id={id}
        role="combobox"
        disabled={disabled}
        className={cn(comboboxTriggerVariants({ size }), className)}
        aria-invalid={isError || undefined}
        aria-required={field?.required || required || undefined}
        aria-describedby={ariaDescribedBy}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
        <ChevronDown className="st-combobox__icon" aria-hidden="true" />
      </PopoverPrimitive.Trigger>
    )
  },
)
ComboboxTrigger.displayName = 'ComboboxTrigger'

/* ----- Content ----- */

export interface ComboboxContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Custom container element for the portal. Useful for rendering inside
   * a Dialog or Drawer.
   */
  container?: Element | DocumentFragment | null
}

const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>(
  ({ className, children, container, ...props }, ref) => {
    const { open, triggerId } = useComboboxContext('ComboboxContent')
    return (
      <>
        {/* Rendered while closed so the items can report their labels to the
            trigger. Nothing inside draws: the parts check InPanelContext. */}
        {!open && <div hidden>{children}</div>}
        <PopoverPrimitive.Portal container={container}>
          <PopoverPrimitive.Content
            ref={ref}
            align="start"
            sideOffset={4}
            className={cn('st-combobox__content', className)}
            aria-labelledby={triggerId}
            {...props}
          >
            <InPanelContext.Provider value={true}>{children}</InPanelContext.Provider>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </>
    )
  },
)
ComboboxContent.displayName = 'ComboboxContent'

/* ----- Input ----- */

export interface ComboboxInputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'defaultValue' | 'type'> {}

/**
 * The search field. It is named by `aria-label`, then `placeholder`, then
 * "Search" — pass a translated name when the placeholder is not enough.
 */
const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ className, placeholder, onChange, onKeyDown, 'aria-label': ariaLabel, ...props }, ref) => {
    const { search, setSearch, setOpen, listRef, listId, activeId, setActiveId } =
      useComboboxContext('ComboboxInput')
    const inPanel = useContext(InPanelContext)

    // The panel unmounts after its exit animation, so the options do not jump
    // back to the full list while it fades.
    useEffect(() => () => setSearch(''), [setSearch])

    if (!inPanel) return null

    const moveActive = (direction: 1 | -1) => {
      const options = Array.from(
        listRef.current?.querySelectorAll<HTMLElement>(ENABLED_OPTION_SELECTOR) ?? [],
      )
      if (options.length === 0) return
      const index = options.findIndex((option) => option.id === activeId)
      const next = options[Math.min(Math.max(index + direction, 0), options.length - 1)]
      setActiveId(next.id)
      next.scrollIntoView({ block: 'nearest' })
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event)
      // Enter also confirms an IME conversion; that must not pick an option.
      if (event.defaultPrevented || event.nativeEvent.isComposing) return
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        moveActive(event.key === 'ArrowDown' ? 1 : -1)
      } else if (event.key === 'Enter') {
        event.preventDefault()
        if (activeId) document.getElementById(activeId)?.click()
      } else if (event.key === 'Tab') {
        // The panel is portaled to <body>, so Tab would leave the page order.
        // Closing returns focus to the trigger.
        event.preventDefault()
        setOpen(false)
      }
    }

    return (
      <div className="st-combobox__search">
        <Search className="st-combobox__search-icon" aria-hidden="true" />
        <input
          ref={ref}
          type="search"
          className={cn('st-combobox__input', className)}
          placeholder={placeholder}
          value={search}
          autoComplete="off"
          aria-label={ariaLabel ?? placeholder ?? 'Search'}
          aria-autocomplete="list"
          aria-controls={listId}
          aria-activedescendant={activeId ?? undefined}
          onChange={(event) => {
            onChange?.(event)
            setSearch(event.target.value)
          }}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
    )
  },
)
ComboboxInput.displayName = 'ComboboxInput'

/* ----- List ----- */

export interface ComboboxListProps extends ComponentPropsWithoutRef<'div'> {}

const ComboboxListbox = forwardRef<HTMLDivElement, ComboboxListProps>(
  ({ className, children, ...props }, ref) => {
    const { listRef, listId, triggerId, search, activeId, setActiveId, setIsEmpty } =
      useComboboxContext('ComboboxList')
    const previousSearch = useRef(search)

    // Runs after every render: the options can change without any prop here,
    // when a server search resolves.
    useLayoutEffect(() => {
      const list = listRef.current
      if (!list) return
      setIsEmpty(!list.querySelector(OPTION_SELECTOR))

      const first = list.querySelector<HTMLElement>(ENABLED_OPTION_SELECTOR)
      if (search !== previousSearch.current) {
        previousSearch.current = search
        setActiveId(first?.id ?? null)
        first?.scrollIntoView({ block: 'nearest' })
      } else if (
        !activeId ||
        !list.querySelector(`[id="${activeId}"]:not([aria-disabled="true"])`)
      ) {
        const next =
          list.querySelector<HTMLElement>(`${ENABLED_OPTION_SELECTOR}[aria-selected="true"]`) ??
          first
        setActiveId(next?.id ?? null)
        next?.scrollIntoView({ block: 'nearest' })
      }
    })

    return (
      <div
        ref={mergeRefs(ref, listRef)}
        id={listId}
        role="listbox"
        className={cn('st-combobox__list', className)}
        aria-labelledby={triggerId}
        {...props}
      >
        {children}
      </div>
    )
  },
)
ComboboxListbox.displayName = 'ComboboxListbox'

/** The scrolling `role="listbox"` that holds the items. */
const ComboboxList = forwardRef<HTMLDivElement, ComboboxListProps>(
  ({ children, ...props }, ref) => {
    // The label pass also runs on the server, where useLayoutEffect warns.
    if (!useContext(InPanelContext)) return <>{children}</>
    return (
      <ComboboxListbox ref={ref} {...props}>
        {children}
      </ComboboxListbox>
    )
  },
)
ComboboxList.displayName = 'ComboboxList'

/* ----- Empty ----- */

export interface ComboboxEmptyProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * Shown when no option matches. It stays mounted as an empty `role="status"`
 * region so assistive tech announces the text when it appears.
 */
const ComboboxEmpty = forwardRef<HTMLDivElement, ComboboxEmptyProps>(
  ({ className, children, ...props }, ref) => {
    const { isEmpty } = useComboboxContext('ComboboxEmpty')
    if (!useContext(InPanelContext)) return null
    return (
      <div ref={ref} role="status" className={cn('st-combobox__empty', className)} {...props}>
        {isEmpty ? children : null}
      </div>
    )
  },
)
ComboboxEmpty.displayName = 'ComboboxEmpty'

/* ----- Group ----- */

export interface ComboboxGroupProps extends ComponentPropsWithoutRef<'div'> {}

/** Groups items under a `ComboboxLabel`. Hidden while no item in it matches. */
const ComboboxGroup = forwardRef<HTMLDivElement, ComboboxGroupProps>(
  ({ className, children, ...props }, ref) => {
    const labelId = useId()
    if (!useContext(InPanelContext)) return <>{children}</>
    return (
      <GroupLabelContext.Provider value={labelId}>
        {/* biome-ignore lint/a11y/useSemanticElements: <fieldset> is not allowed inside role="listbox" */}
        <div
          ref={ref}
          role="group"
          className={cn('st-combobox__group', className)}
          aria-labelledby={labelId}
          {...props}
        >
          {children}
        </div>
      </GroupLabelContext.Provider>
    )
  },
)
ComboboxGroup.displayName = 'ComboboxGroup'

/* ----- Label ----- */

const ComboboxLabel = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const labelId = useContext(GroupLabelContext)
    if (!useContext(InPanelContext)) return null
    return <div ref={ref} id={labelId} className={cn('st-combobox__label', className)} {...props} />
  },
)
ComboboxLabel.displayName = 'ComboboxLabel'

/* ----- Item ----- */

export interface ComboboxItemProps extends ComponentPropsWithoutRef<'div'> {
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
   * Text used for matching and for the trigger. Defaults to the item's text
   * content — pass it when the children render no text, such as an icon only.
   */
  textValue?: string
}

const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItemProps>(
  (
    {
      className,
      children,
      value,
      disabled = false,
      textValue,
      id: idProp,
      onClick,
      onMouseDown,
      onPointerMove,
      ...props
    },
    ref,
  ) => {
    const { isSelected, selectValue, search, filter, registerLabel, activeId, setActiveId } =
      useComboboxContext('ComboboxItem')
    const inPanel = useContext(InPanelContext)
    const autoId = useId()
    const id = idProp ?? autoId
    const text = textValue ?? textOf(children)

    useEffect(() => registerLabel(value, text), [registerLabel, text, value])

    if (!inPanel) return null
    if (filter && search.trim() && !filter(text, search)) return null

    const selected = isSelected(value)

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      onClick?.(event)
      if (!disabled && !event.defaultPrevented) selectValue(value)
    }

    return (
      // biome-ignore lint/a11y/useFocusableInteractive: focus stays in the input; aria-activedescendant points here
      // biome-ignore lint/a11y/useKeyWithClickEvents: the input handles the keyboard
      <div
        ref={ref}
        id={id}
        role="option"
        className={cn('st-combobox__item', className)}
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        data-state={selected ? 'checked' : 'unchecked'}
        data-disabled={disabled ? '' : undefined}
        data-highlighted={activeId === id ? '' : undefined}
        onClick={handleClick}
        onMouseDown={(event) => {
          onMouseDown?.(event)
          // Keeps focus in the input, so the keyboard keeps working.
          event.preventDefault()
        }}
        onPointerMove={(event) => {
          onPointerMove?.(event)
          if (!disabled && activeId !== id) setActiveId(id)
        }}
        {...props}
      >
        <span className="st-combobox__item-indicator">
          {selected && <Check aria-hidden="true" />}
        </span>
        <span className="st-combobox__item-text">{children}</span>
      </div>
    )
  },
)
ComboboxItem.displayName = 'ComboboxItem'

/* ----- Separator ----- */

/** Hidden while searching, when it would divide nothing. */
const ComboboxSeparator = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { search } = useComboboxContext('ComboboxSeparator')
    if (!useContext(InPanelContext) || search.trim()) return null
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn('st-combobox__separator', className)}
        {...props}
      />
    )
  },
)
ComboboxSeparator.displayName = 'ComboboxSeparator'

export {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
}
