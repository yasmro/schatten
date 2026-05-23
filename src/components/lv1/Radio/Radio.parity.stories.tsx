import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

/**
 * Parity stories — React `<RadioGroup>` / `<Radio>` and a hand-written
 * `.st-radio-group` / `.st-radio-wrapper` / `.st-radio` chain must
 * render pixel-identical. Backs the VRT in `Radio.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - RadioGroup × 3 sizes (sm / md / lg)
 * - Single Radio with label × 3 sizes
 * - Selected / unselected within a group
 * - isError
 * - disabled (group-level)
 * - disabled + error
 * - Horizontal (RadioGroup with consumer className overriding the
 *   default `flex-direction: column`)
 *
 * Vanilla side carries `data-state`, `aria-checked`, `aria-invalid`,
 * and `disabled` manually. Radix Radio unmounts the indicator when
 * unchecked — the vanilla side mirrors that by omitting the
 * `.st-radio__indicator` element for unchecked items.
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
}: VanillaProps) => (
  <div className="st-radio-wrapper">
    {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's own
     * RadioGroup.Item output (<button role="radio">). Using <input
     * type="radio"> would diverge from the React side and break the
     * parity contract. */}
    <button
      type="button"
      id={id}
      role="radio"
      aria-checked={state === 'checked'}
      aria-invalid={isError ? 'true' : undefined}
      data-state={state}
      disabled={disabled}
      className={`st-radio st-radio--${size}`}
    >
      {/* Radix unmounts the indicator when unchecked; vanilla mirrors. */}
      {state === 'checked' && (
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

type VanillaGroupProps = {
  size: 'sm' | 'md' | 'lg'
  selectedValue?: string
  disabled?: boolean
  isError?: boolean
  horizontal?: boolean
  items: { value: string; label: string }[]
  idPrefix: string
}

const VanillaRadioGroup = ({
  size,
  selectedValue,
  disabled,
  isError,
  horizontal,
  items,
  idPrefix,
}: VanillaGroupProps) => (
  <div
    role="radiogroup"
    aria-invalid={isError ? 'true' : undefined}
    className={`st-radio-group${horizontal ? ' flex flex-row gap-4' : ''}`}
  >
    {items.map((it) => (
      <VanillaRadio
        key={it.value}
        size={size}
        state={selectedValue === it.value ? 'checked' : 'unchecked'}
        disabled={disabled}
        isError={isError}
        label={it.label}
        id={`${idPrefix}-${it.value}`}
      />
    ))}
  </div>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Sizes</p>
          <RadioGroup defaultValue="sm" size="sm">
            <Radio value="sm" label="Small" />
          </RadioGroup>
          <RadioGroup defaultValue="md" size="md" className="mt-2">
            <Radio value="md" label="Medium" />
          </RadioGroup>
          <RadioGroup defaultValue="lg" size="lg" className="mt-2">
            <Radio value="lg" label="Large" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Group with selection</p>
          <RadioGroup defaultValue="b">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B (selected)" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">isError</p>
          <RadioGroup defaultValue="b" isError>
            <Radio value="a" label="Unselected error" />
            <Radio value="b" label="Selected error" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled</p>
          <RadioGroup defaultValue="b" disabled>
            <Radio value="a" label="Disabled unselected" />
            <Radio value="b" label="Disabled selected" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled + error</p>
          <RadioGroup defaultValue="b" disabled isError>
            <Radio value="a" label="Disabled + error, unselected" />
            <Radio value="b" label="Disabled + error, selected" />
          </RadioGroup>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Horizontal</p>
          <RadioGroup defaultValue="one" className="flex flex-row gap-4">
            <Radio value="one" label="One" />
            <Radio value="two" label="Two" />
            <Radio value="three" label="Three" />
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Sizes</p>
          <VanillaRadioGroup
            size="sm"
            selectedValue="sm"
            items={[{ value: 'sm', label: 'Small' }]}
            idPrefix="v-rg-sm"
          />
          <div className="mt-2">
            <VanillaRadioGroup
              size="md"
              selectedValue="md"
              items={[{ value: 'md', label: 'Medium' }]}
              idPrefix="v-rg-md"
            />
          </div>
          <div className="mt-2">
            <VanillaRadioGroup
              size="lg"
              selectedValue="lg"
              items={[{ value: 'lg', label: 'Large' }]}
              idPrefix="v-rg-lg"
            />
          </div>
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Group with selection</p>
          <VanillaRadioGroup
            size="md"
            selectedValue="b"
            items={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B (selected)' },
              { value: 'c', label: 'Option C' },
            ]}
            idPrefix="v-rg-sel"
          />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">isError</p>
          <VanillaRadioGroup
            size="md"
            selectedValue="b"
            isError
            items={[
              { value: 'a', label: 'Unselected error' },
              { value: 'b', label: 'Selected error' },
            ]}
            idPrefix="v-rg-err"
          />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled</p>
          <VanillaRadioGroup
            size="md"
            selectedValue="b"
            disabled
            items={[
              { value: 'a', label: 'Disabled unselected' },
              { value: 'b', label: 'Disabled selected' },
            ]}
            idPrefix="v-rg-dis"
          />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Disabled + error</p>
          <VanillaRadioGroup
            size="md"
            selectedValue="b"
            disabled
            isError
            items={[
              { value: 'a', label: 'Disabled + error, unselected' },
              { value: 'b', label: 'Disabled + error, selected' },
            ]}
            idPrefix="v-rg-de"
          />
        </div>

        <div>
          <p className="text-xs text-foreground-muted mb-2">Horizontal</p>
          <VanillaRadioGroup
            size="md"
            selectedValue="one"
            horizontal
            items={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
            ]}
            idPrefix="v-rg-h"
          />
        </div>
      </div>
    </div>
  ),
}
