import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../Input/Input'
import { Field } from './Field'

/**
 * Parity stories — React `<Field>` and a hand-written vanilla `<div>`
 * with the matching `.st-field` class chain must render pixel-identical.
 * Backs the VRT in `Field.parity.vrt.spec.ts`.
 *
 * Field is in #297 区分 A (layout / context wrapper, fully renderable
 * in vanilla HTML). The form input children's class API (`.st-input-
 * wrapper` / `.st-input`) is itself covered by sweep-4 Input parity;
 * we reuse the chain here so the demo shows the realistic combined
 * surface (Field chrome wrapping a real input) rather than bare
 * `<input>` elements that would render without any visual frame.
 *
 * The error case (Name field) demonstrates the visual-less
 * observability hook variant from css-api.md §state: `data-error` lands
 * on the Field root, but the red border / tinted background on the
 * input come from the inner `.st-input-wrapper:has(.st-input[aria-invalid="true"])`
 * selector (sweep-4) — Field root itself is not styled by `[data-error]`.
 *
 * Vanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /
 * `aria-invalid` themselves — the framework-agnostic CSS does not
 * auto-wire ARIA. Per-attribute requirements are documented in
 * CSSApi.stories.tsx → Field section.
 */
const meta: Meta<typeof Field> = {
  title: 'Components/lv1/Field',
  component: Field,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <Field label="Email" description="We never share your email">
          <Input id="r1-input" type="email" defaultValue="user@example.com" />
        </Field>
        <Field label="Name" required error="Name is required">
          <Input id="r2-input" defaultValue="" />
        </Field>
      </div>
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="st-field">
          <div className="st-field__label-row">
            <label htmlFor="v1-input" className="st-field__label">
              Email
            </label>
          </div>
          <label htmlFor="v1-input" id="v1-description" className="st-field__description">
            We never share your email
          </label>
          <div className="st-input-wrapper st-input-wrapper--md">
            <input
              id="v1-input"
              type="email"
              className="st-input"
              defaultValue="user@example.com"
              aria-describedby="v1-description"
            />
          </div>
        </div>
        <div className="st-field" data-error="true">
          <div className="st-field__label-row">
            <label htmlFor="v2-input" className="st-field__label">
              Name
              <span className="st-field__required-marker">*</span>
            </label>
          </div>
          <div className="st-input-wrapper st-input-wrapper--md">
            <input
              id="v2-input"
              className="st-input"
              defaultValue=""
              required
              aria-invalid="true"
              aria-describedby="v2-error"
            />
          </div>
          <p id="v2-error" className="st-field__error">
            Name is required
          </p>
        </div>
      </div>
    </div>
  ),
}
