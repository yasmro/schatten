import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

/**
 * Parity stories — React `<RadioGroup>` / `<Radio>` and hand-written
 * vanilla markup with the matching `.st-radio-group` / `.st-radio-wrapper`
 * / `.st-radio` class chain must render pixel-identical. Backs the VRT in
 * `Radio.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg) × unchecked
 * - checked state (md)
 * - isError (unchecked + checked, md)
 * - disabled (unchecked + checked, md)
 * - with label / without label
 *
 * Vanilla side carries `data-state`, `aria-checked`, `aria-invalid`,
 * `disabled` manually — the CSS targets attributes only. The indicator
 * `<span>` is rendered ONLY in the checked state (mirrors Radix Item
 * Indicator unmount behaviour, unlike Checkbox's forceMount).
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/lv1/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Radio>

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  state?: 'checked' | 'unchecked'
  disabled?: boolean
  isError?: boolean
  label?: string
  id: string
}

const VanillaRadio = ({
  size,
  state = 'unchecked',
  disabled,
  isError,
  label,
  id,
}: VanillaProps) => {
  const isChecked = state === 'checked'
  return (
    <div className="st-radio-wrapper">
      {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's own
       * RadioGroup.Item output (<button role="radio">). Using <input
       * type="radio"> would diverge from the React side and break the
       * parity contract. */}
      <button
        type="button"
        id={id}
        role="radio"
        aria-checked={isChecked}
        aria-invalid={isError ? 'true' : undefined}
        data-state={state}
        disabled={disabled}
        className={`st-radio st-radio--${size}`}
      >
        {/* Radix Item Indicator unmounts when unchecked — vanilla mirrors
         * that by only rendering the span chain when checked. */}
        {isChecked && (
          <span className="st-radio__indicator">
            <span className="st-radio__dot" />
          </span>
        )}
      </button>
      {label && (
        <label htmlFor={id} className="st-radio-wrapper__label">
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
        <RadioGroup defaultValue="md">
          <Radio value="sm" size="sm" label="Small (unchecked)" />
          <Radio value="md" size="md" label="Medium (checked)" />
          <Radio value="lg" size="lg" label="Large (unchecked)" />
        </RadioGroup>
        <RadioGroup defaultValue="er2" isError>
          <Radio value="er1" label="Error, unchecked" />
          <Radio value="er2" label="Error, checked" />
        </RadioGroup>
        <RadioGroup defaultValue="dis2">
          <Radio value="dis1" label="Disabled, unchecked" disabled />
          <Radio value="dis2" label="Disabled, checked" disabled />
        </RadioGroup>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div role="radiogroup" aria-label="vanilla-sizes" className="st-radio-group">
          <VanillaRadio id="v-r-sm" size="sm" label="Small (unchecked)" />
          <VanillaRadio id="v-r-md" size="md" state="checked" label="Medium (checked)" />
          <VanillaRadio id="v-r-lg" size="lg" label="Large (unchecked)" />
        </div>
        <div
          role="radiogroup"
          aria-label="vanilla-error"
          aria-invalid="true"
          className="st-radio-group"
        >
          <VanillaRadio id="v-r-er1" size="md" isError label="Error, unchecked" />
          <VanillaRadio id="v-r-er2" size="md" state="checked" isError label="Error, checked" />
        </div>
        <div role="radiogroup" aria-label="vanilla-disabled" className="st-radio-group">
          <VanillaRadio id="v-r-dis1" size="md" disabled label="Disabled, unchecked" />
          <VanillaRadio
            id="v-r-dis2"
            size="md"
            state="checked"
            disabled
            label="Disabled, checked"
          />
        </div>
      </div>
    </div>
  ),
}
