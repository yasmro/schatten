import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mail, Search, X } from 'lucide-react'
import { Input } from './Input'

/**
 * Parity stories — React `<Input>` and a hand-written
 * `<div class="st-input-wrapper st-input-wrapper--md"><input class="st-input"></div>`
 * must render pixel-identical. Backs the VRT in
 * `Input.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg)
 * - text adornments (textLeft + textRight)
 * - icon adornments (iconLeft + iconRight)
 * - error / disabled / readOnly
 * - disabled + error / readOnly + error
 * - type=date (carries the `.st-input--date` derived modifier)
 *
 * Vanilla side carries `aria-invalid`, `readonly`, and `disabled`
 * manually — the CSS targets those attributes (per css-api.md §state),
 * so vanilla HTML consumers must set them.
 *
 * NB: wrapper-click → input focus is **React-only**. The vanilla side
 * intentionally omits the focus delegation handler so the parity
 * screenshot reflects what a CSS-only consumer would see.
 */
const meta: Meta<typeof Input> = {
  title: 'Components/lv1/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Input>

const SearchIcon = () => (
  // The Lucide icon ships its own className/sub-element wiring; the
  // hand-written vanilla side has to reach for the same `.st-input__icon-*`
  // class to land on the same rule. Inline SVG here so the vanilla story
  // is self-contained and does not depend on the React Lucide wrapper.
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="st-input__icon-left"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="st-input__icon-right"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  isError?: boolean
  disabled?: boolean
  readOnly?: boolean
  defaultValue?: string
  placeholder?: string
  type?: string
  textLeft?: string
  textRight?: string
  withIcons?: boolean
  id?: string
}

const VanillaInput = ({
  size,
  isError,
  disabled,
  readOnly,
  defaultValue,
  placeholder,
  type,
  textLeft,
  textRight,
  withIcons,
  id,
}: VanillaProps) => {
  const isDate =
    type === 'date' ||
    type === 'datetime-local' ||
    type === 'month' ||
    type === 'week' ||
    type === 'time'
  return (
    <div className={`st-input-wrapper st-input-wrapper--${size}`}>
      {textLeft && <span className="st-input__text-left">{textLeft}</span>}
      {withIcons && <SearchIcon />}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={isError ? 'true' : undefined}
        className={`st-input${isDate ? ' st-input--date' : ''}`}
      />
      {textRight && <span className="st-input__text-right">{textRight}</span>}
      {withIcons && <XIcon />}
    </div>
  )
}

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Input aria-label="in-sm" size="sm" placeholder="Small" />
        <Input aria-label="in-md" size="md" placeholder="Medium" />
        <Input aria-label="in-lg" size="lg" placeholder="Large" />
        <Input aria-label="in-text" textLeft="$" textRight="USD" placeholder="0.00" />
        <Input aria-label="in-icons" iconLeft={Search} iconRight={X} placeholder="With icons" />
        <Input aria-label="in-error" isError placeholder="Error" />
        <Input aria-label="in-disabled" disabled defaultValue="Disabled" />
        <Input aria-label="in-readonly" readOnly defaultValue="Read-only" />
        <Input aria-label="in-disabled-error" disabled isError defaultValue="Disabled + error" />
        <Input aria-label="in-readonly-error" readOnly isError defaultValue="Read-only + error" />
        <Input aria-label="in-date" type="date" />
        <Input aria-label="in-mail" iconLeft={Mail} placeholder="Email" />
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaInput size="sm" placeholder="Small" />
        <VanillaInput size="md" placeholder="Medium" />
        <VanillaInput size="lg" placeholder="Large" />
        <VanillaInput size="md" textLeft="$" textRight="USD" placeholder="0.00" />
        <VanillaInput size="md" withIcons placeholder="With icons" />
        <VanillaInput size="md" isError placeholder="Error" />
        <VanillaInput size="md" disabled defaultValue="Disabled" />
        <VanillaInput size="md" readOnly defaultValue="Read-only" />
        <VanillaInput size="md" disabled isError defaultValue="Disabled + error" />
        <VanillaInput size="md" readOnly isError defaultValue="Read-only + error" />
        <VanillaInput size="md" type="date" />
        {/* Mail icon is rendered as a Lucide SVG on the React side; the
         * vanilla side uses the SearchIcon helper to demonstrate that any
         * inline SVG with the `.st-input__icon-left` class gets the
         * wrapper-derived size. */}
        <VanillaInput size="md" withIcons placeholder="Email" />
      </div>
    </div>
  ),
}
