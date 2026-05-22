import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

/**
 * Parity stories — React `<Checkbox>` and a hand-written vanilla checkbox
 * with the matching `.st-checkbox-wrapper` / `.st-checkbox` class chain
 * must render pixel-identical. Backs the VRT in
 * `Checkbox.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg) × unchecked
 * - checked / indeterminate (md)
 * - isError (md unchecked + md checked)
 * - disabled (md unchecked + md checked)
 * - with label / without label
 *
 * Vanilla side carries `data-state` and `aria-invalid` manually — the CSS
 * targets attributes only, so vanilla HTML consumers must set them.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/lv1/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

const CheckSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
  </svg>
)

const MinusSvg = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="butt" />
  </svg>
)

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  state?: 'checked' | 'unchecked' | 'indeterminate'
  disabled?: boolean
  isError?: boolean
  label?: string
  id: string
}

const VanillaCheckbox = ({
  size,
  state = 'unchecked',
  disabled,
  isError,
  label,
  id,
}: VanillaProps) => {
  return (
    <div className="st-checkbox-wrapper">
      {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's own
       * Checkbox.Root output (<button role="checkbox">). Using <input
       * type="checkbox"> would diverge from the React side and break the
       * parity contract. */}
      <button
        type="button"
        id={id}
        role="checkbox"
        aria-checked={state === 'indeterminate' ? 'mixed' : state === 'checked'}
        aria-invalid={isError ? 'true' : undefined}
        data-state={state}
        disabled={disabled}
        className={`st-checkbox st-checkbox--${size}`}
      >
        <span className="st-checkbox__indicator">
          {state === 'indeterminate' ? <MinusSvg /> : <CheckSvg />}
        </span>
      </button>
      {label && (
        <label htmlFor={id} className="st-checkbox-wrapper__label">
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
          <Checkbox aria-label="cb-sm" size="sm" />
          <Checkbox aria-label="cb-md" size="md" />
          <Checkbox aria-label="cb-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-checked" defaultChecked />
          <Checkbox
            aria-label="cb-indeterminate"
            checked="indeterminate"
            onCheckedChange={() => {}}
          />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-error" isError />
          <Checkbox aria-label="cb-error-checked" isError defaultChecked />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox aria-label="cb-disabled" disabled />
          <Checkbox aria-label="cb-disabled-checked" disabled defaultChecked />
        </div>
        <div className="flex flex-col items-start gap-3">
          <Checkbox label="With label (sm)" size="sm" />
          <Checkbox label="With label (md)" />
          <Checkbox label="With label (lg)" size="lg" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-sm" size="sm" />
          <VanillaCheckbox id="v-cb-md" size="md" />
          <VanillaCheckbox id="v-cb-lg" size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-checked" size="md" state="checked" />
          <VanillaCheckbox id="v-cb-indeterminate" size="md" state="indeterminate" />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-error" size="md" isError />
          <VanillaCheckbox id="v-cb-error-checked" size="md" state="checked" isError />
        </div>
        <div className="flex items-center gap-6">
          <VanillaCheckbox id="v-cb-disabled" size="md" disabled />
          <VanillaCheckbox id="v-cb-disabled-checked" size="md" state="checked" disabled />
        </div>
        <div className="flex flex-col items-start gap-3">
          <VanillaCheckbox id="v-cb-label-sm" size="sm" label="With label (sm)" />
          <VanillaCheckbox id="v-cb-label-md" size="md" label="With label (md)" />
          <VanillaCheckbox id="v-cb-label-lg" size="lg" label="With label (lg)" />
        </div>
      </div>
    </div>
  ),
}
