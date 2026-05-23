import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert, Lock, Mail, Search, X } from 'lucide-react'
import { Input } from './Input'

/**
 * Parity stories — React `<Input>` and a hand-written vanilla
 * `<div class="st-input-wrapper">…<input class="st-input">…</div>` must
 * render pixel-identical. Backs the VRT in `Input.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg)
 * - text adornments (textLeft + textRight)
 * - icon adornments (iconLeft + iconRight)
 * - error / disabled / readOnly
 * - disabled + error / readOnly + error
 * - type=date (st-input--date derived modifier)
 *
 * Vanilla side carries `aria-invalid`, `disabled`, `readonly` manually —
 * the CSS targets attributes only. Wrapper-click-to-focus is React-only
 * (no CSS equivalent for focus delegation).
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

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  placeholder?: string
  defaultValue?: string
  isError?: boolean
  disabled?: boolean
  readOnly?: boolean
  textLeft?: string
  textRight?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  type?: string
  id: string
}

const VanillaInput = ({
  size,
  placeholder,
  defaultValue,
  isError,
  disabled,
  readOnly,
  textLeft,
  textRight,
  iconLeft,
  iconRight,
  type,
  id,
}: VanillaProps) => {
  const isDate = type === 'date' || type === 'datetime-local'
  return (
    <div className={`st-input-wrapper st-input-wrapper--${size}`}>
      {textLeft && <span className="st-input__text-left">{textLeft}</span>}
      {!textLeft && iconLeft && <span className="st-input__icon-left">{iconLeft}</span>}
      <input
        id={id}
        type={type ?? 'text'}
        className={`st-input${isDate ? ' st-input--date' : ''}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={isError ? 'true' : undefined}
        disabled={disabled}
        readOnly={readOnly}
      />
      {textRight && <span className="st-input__text-right">{textRight}</span>}
      {!textRight && iconRight && <span className="st-input__icon-right">{iconRight}</span>}
    </div>
  )
}

// Pre-instantiated SVGs so the vanilla side ships markup that's
// independent of `lucide-react` — vanilla HTML consumers paste their own
// SVGs into `.st-input__icon-*`. We use lucide here only so the React vs
// vanilla halves render the same geometry under VRT.
const SearchIcon = () => <Search aria-hidden="true" />
const MailIcon = () => <Mail aria-hidden="true" />
const XIcon = () => <X aria-hidden="true" />
const LockIcon = () => <Lock aria-hidden="true" />
const CircleAlertIcon = () => <CircleAlert aria-hidden="true" />

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-6xl">
      <div className="space-y-3 w-80">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
        <Input textLeft="https://" placeholder="example.com" />
        <Input textRight=".com" placeholder="domain" />
        <Input textLeft="$" textRight="USD" placeholder="0.00" />
        <Input iconLeft={Search} placeholder="Search…" />
        <Input iconLeft={Mail} iconRight={X} placeholder="Email" />
        <Input isError iconLeft={CircleAlert} placeholder="Error" />
        <Input disabled defaultValue="Disabled" />
        <Input readOnly defaultValue="Read-only" />
        <Input disabled isError defaultValue="Disabled + error" />
        <Input readOnly isError iconLeft={Lock} defaultValue="ReadOnly + error" />
        <Input type="date" />
      </div>
      <div className="space-y-3 w-80">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <VanillaInput id="v-in-sm" size="sm" placeholder="Small" />
        <VanillaInput id="v-in-md" size="md" placeholder="Medium" />
        <VanillaInput id="v-in-lg" size="lg" placeholder="Large" />
        <VanillaInput id="v-in-tl" size="md" textLeft="https://" placeholder="example.com" />
        <VanillaInput id="v-in-tr" size="md" textRight=".com" placeholder="domain" />
        <VanillaInput id="v-in-tlr" size="md" textLeft="$" textRight="USD" placeholder="0.00" />
        <VanillaInput id="v-in-il" size="md" iconLeft={<SearchIcon />} placeholder="Search…" />
        <VanillaInput
          id="v-in-ilr"
          size="md"
          iconLeft={<MailIcon />}
          iconRight={<XIcon />}
          placeholder="Email"
        />
        <VanillaInput
          id="v-in-err"
          size="md"
          isError
          iconLeft={<CircleAlertIcon />}
          placeholder="Error"
        />
        <VanillaInput id="v-in-dis" size="md" disabled defaultValue="Disabled" />
        <VanillaInput id="v-in-ro" size="md" readOnly defaultValue="Read-only" />
        <VanillaInput
          id="v-in-dis-err"
          size="md"
          disabled
          isError
          defaultValue="Disabled + error"
        />
        <VanillaInput
          id="v-in-ro-err"
          size="md"
          readOnly
          isError
          iconLeft={<LockIcon />}
          defaultValue="ReadOnly + error"
        />
        <VanillaInput id="v-in-date" size="md" type="date" />
      </div>
    </div>
  ),
}
