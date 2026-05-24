import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from './Field'

/**
 * Parity stories — React `<Field>` and a hand-written vanilla `<div>`
 * with the matching `.st-field` class chain must render pixel-identical.
 * Backs the VRT in `Field.parity.vrt.spec.ts`.
 *
 * Field is in #297 区分 A (layout / context wrapper, fully renderable
 * in vanilla HTML). The form input children themselves (`<input>` /
 * `<Input>`) are NOT part of this parity surface — their own classes
 * are covered by sweep-4's Input.parity.stories. Here we only verify
 * that the Field chrome (label / required marker / description / error)
 * matches across paths.
 *
 * Vanilla consumers MUST wire `htmlFor` / `id` / `aria-describedby` /
 * `aria-invalid` / `data-error` themselves — the framework-agnostic CSS
 * does not auto-wire ARIA. Per-attribute requirements are documented
 * in CSSApi.stories.tsx → Field section.
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
          <input id="r1-input" type="email" defaultValue="user@example.com" />
        </Field>
        <Field label="Name" required error="Name is required">
          <input id="r2-input" defaultValue="" />
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
          <input
            id="v1-input"
            type="email"
            defaultValue="user@example.com"
            aria-describedby="v1-description"
          />
        </div>
        <div className="st-field" data-error="true">
          <div className="st-field__label-row">
            <label htmlFor="v2-input" className="st-field__label">
              Name
              <span className="st-field__required-marker">*</span>
            </label>
          </div>
          <input
            id="v2-input"
            defaultValue=""
            required
            aria-invalid="true"
            aria-describedby="v2-error"
          />
          <p id="v2-error" className="st-field__error">
            Name is required
          </p>
        </div>
      </div>
    </div>
  ),
}
