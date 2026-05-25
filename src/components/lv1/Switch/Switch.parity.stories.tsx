import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

/**
 * Parity stories — React `<Switch>` and a hand-written vanilla switch with
 * the matching `.st-switch-wrapper` / `.st-switch` class chain must render
 * pixel-identical. Backs the VRT in `Switch.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes × unchecked
 * - checked (md)
 * - isError (unchecked + checked, md)
 * - disabled (unchecked + checked, md)
 * - with label
 *
 * Vanilla side carries `data-state` and `aria-invalid` manually — the CSS
 * targets attributes only, so vanilla HTML consumers must set them.
 */
const meta: Meta<typeof Switch> = {
  title: 'Components/lv1/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Switch>

const CheckSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  state?: 'checked' | 'unchecked'
  disabled?: boolean
  isError?: boolean
  label?: string
  id: string
}

const VanillaSwitch = ({
  size,
  state = 'unchecked',
  disabled,
  isError,
  label,
  id,
}: VanillaProps) => {
  return (
    <div className="st-switch-wrapper">
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={state === 'checked'}
        aria-invalid={isError ? 'true' : undefined}
        data-state={state}
        disabled={disabled}
        className={`st-switch st-switch--${size}`}
      >
        <span className="st-switch__check">
          <CheckSvg />
        </span>
        <span className="st-switch__thumb" data-state={state} />
      </button>
      {label && (
        <label htmlFor={id} className="st-switch-wrapper__label">
          {label}
        </label>
      )}
    </div>
  )
}

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-sm" size="sm" />
          <Switch aria-label="sw-md" size="md" />
          <Switch aria-label="sw-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-checked" defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-error" isError />
          <Switch aria-label="sw-error-checked" isError defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Switch aria-label="sw-disabled" disabled />
          <Switch aria-label="sw-disabled-checked" disabled defaultChecked />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Switch label="With label (sm)" size="sm" />
          <Switch label="With label (md)" />
          <Switch label="With label (lg)" size="lg" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-sm" size="sm" />
          <VanillaSwitch id="v-sw-md" size="md" />
          <VanillaSwitch id="v-sw-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-checked" size="md" state="checked" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-error" size="md" isError />
          <VanillaSwitch id="v-sw-error-checked" size="md" state="checked" isError />
        </div>
        <div className="flex items-center gap-6">
          <VanillaSwitch id="v-sw-disabled" size="md" disabled />
          <VanillaSwitch id="v-sw-disabled-checked" size="md" state="checked" disabled />
        </div>
        <div className="flex flex-col items-start gap-3">
          <VanillaSwitch id="v-sw-label-sm" size="sm" label="With label (sm)" />
          <VanillaSwitch id="v-sw-label-md" size="md" label="With label (md)" />
          <VanillaSwitch id="v-sw-label-lg" size="lg" label="With label (lg)" />
        </div>
      </div>
    </div>
  ),
}
