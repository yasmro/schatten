import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from '../Field/Field'
import { Input } from '../Input/Input'
import { FieldSet } from './FieldSet'

/**
 * Parity stories — React `<FieldSet>` and a hand-written vanilla
 * `<fieldset>` with the matching `.st-fieldset` class chain must render
 * pixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.
 *
 * FieldSet is in #297 区分 A (layout / context wrapper, fully renderable
 * in vanilla HTML). The nested `<Field>` / form input class chains are
 * covered by their own sweeps; we wire them in here so the demo shows a
 * realistic combined surface (FieldSet wrapping Fields wrapping Inputs)
 * rather than bare `<input>` elements that would render without a
 * visual frame.
 *
 * The error case (Address) demonstrates that:
 * - FieldSet root carries `[data-error]` + `[aria-invalid]` for
 *   external observability, but does NOT itself drive a visual border
 *   (matches the visual-less observability hook variant — css-api.md
 *   §state).
 * - The inner Field's form input carries `[aria-invalid]` via the
 *   FieldSet → Field → input collapse chain, which IS visually
 *   styled by `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4).
 */
const meta: Meta<typeof FieldSet> = {
  title: 'Components/lv1/FieldSet',
  component: FieldSet,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof FieldSet>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">React</p>
        <FieldSet legend="Personal Info" description="Optional details">
          <Field label="First name">
            <Input id="rfs1" />
          </Field>
          <Field label="Last name">
            <Input id="rfs2" />
          </Field>
        </FieldSet>
        <FieldSet legend="Address" error="Address is required" isError>
          <Field label="Street">
            <Input id="rfs3" />
          </Field>
        </FieldSet>
      </div>
      <div className="space-y-6">
        <p className="text-xs text-foreground-muted">Vanilla HTML</p>
        <fieldset className="st-fieldset" aria-describedby="vfs1-desc">
          <legend className="st-fieldset__legend">Personal Info</legend>
          <p id="vfs1-desc" className="st-fieldset__description">
            Optional details
          </p>
          <div className="st-fieldset__children">
            <div className="st-field">
              <div className="st-field__label-row">
                <label htmlFor="vfs1" className="st-field__label">
                  First name
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs1" className="st-input" />
              </div>
            </div>
            <div className="st-field">
              <div className="st-field__label-row">
                <label htmlFor="vfs2" className="st-field__label">
                  Last name
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs2" className="st-input" />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset
          className="st-fieldset"
          data-error="true"
          aria-invalid="true"
          aria-describedby="vfs3-error"
        >
          <legend className="st-fieldset__legend">Address</legend>
          <div className="st-fieldset__children">
            <div className="st-field" data-error="true">
              <div className="st-field__label-row">
                <label htmlFor="vfs3" className="st-field__label">
                  Street
                </label>
              </div>
              <div className="st-input-wrapper st-input-wrapper--md">
                <input id="vfs3" className="st-input" aria-invalid="true" />
              </div>
            </div>
          </div>
          <p id="vfs3-error" className="st-fieldset__error">
            Address is required
          </p>
        </fieldset>
      </div>
    </div>
  ),
}
