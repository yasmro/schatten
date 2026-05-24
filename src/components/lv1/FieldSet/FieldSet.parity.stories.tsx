import type { Meta, StoryObj } from '@storybook/react-vite'
import { FieldSet } from './FieldSet'

/**
 * Parity stories — React `<FieldSet>` and a hand-written vanilla
 * `<fieldset>` with the matching `.st-fieldset` class chain must render
 * pixel-identical. Backs the VRT in `FieldSet.parity.vrt.spec.ts`.
 *
 * FieldSet is in #297 区分 A (layout / context wrapper, fully renderable
 * in vanilla HTML). Nested `<Field>` / form inputs are NOT part of this
 * parity surface — their own classes are covered by sweep-4 / sweep-7
 * Field parity. Here we verify the FieldSet chrome (legend / description
 * / children layout / error) matches across paths, using a single
 * `<input>` per item so the chrome is the dominant signal.
 *
 * The `:has(> .st-fieldset__legend)` structural rule that pushes
 * `__children` down by 1rem is exercised by the header-present case;
 * the structural contract is independently pinned in
 * FieldSet.test.tsx → `class API` → `places legend / description /
 * children / error as direct children of the root fieldset`.
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
          <input id="rfs1" placeholder="First name" />
          <input id="rfs2" placeholder="Last name" />
        </FieldSet>
        <FieldSet legend="Address" error="Address is required">
          <input id="rfs3" placeholder="Street" />
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
            <input id="vfs1" placeholder="First name" />
            <input id="vfs2" placeholder="Last name" />
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
            <input id="vfs3" placeholder="Street" />
          </div>
          <p id="vfs3-error" className="st-fieldset__error">
            Address is required
          </p>
        </fieldset>
      </div>
    </div>
  ),
}
