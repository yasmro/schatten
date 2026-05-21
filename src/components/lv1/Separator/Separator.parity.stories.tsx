import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './Separator'

/**
 * Parity stories — verifies that the React `<Separator>` and a hand-written
 * vanilla HTML element with the same `.st-separator` class produce
 * pixel-identical output. Backs the VRT in `Separator.parity.vrt.spec.ts`.
 *
 * Radix Separator renders a `<div>` (not `<hr>`), so the vanilla example
 * uses `<div>` to match. `data-orientation` is what the CSS hooks the
 * sizing rule off — it must be set on both sides for parity.
 */
const meta: Meta<typeof Separator> = {
  title: 'Components/lv1/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="w-64">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="space-y-3">
          <p className="text-sm">Above</p>
          <Separator />
          <p className="text-sm">Below</p>
        </div>
        <div className="mt-6 flex h-6 items-center gap-3 text-sm">
          <span>A</span>
          <Separator orientation="vertical" />
          <span>B</span>
          <Separator orientation="vertical" />
          <span>C</span>
        </div>
      </div>
      <div className="w-64">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="space-y-3">
          <p className="text-sm">Above</p>
          <div className="st-separator" data-orientation="horizontal" role="none" />
          <p className="text-sm">Below</p>
        </div>
        <div className="mt-6 flex h-6 items-center gap-3 text-sm">
          <span>A</span>
          <div className="st-separator" data-orientation="vertical" role="none" />
          <span>B</span>
          <div className="st-separator" data-orientation="vertical" role="none" />
          <span>C</span>
        </div>
      </div>
    </div>
  ),
}
