import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

/**
 * Parity stories — React `<Skeleton>` and a hand-written vanilla `<div>` with
 * the matching `.st-skeleton` class chain must render pixel-identical. Backs
 * the VRT in `Skeleton.parity.vrt.spec.ts`.
 *
 * The React `<Skeleton>` import pulls in `Skeleton.css` as a side effect, so
 * the `.st-skeleton` rule is loaded for the vanilla half too. The VRT spec
 * pauses the shimmer before screenshotting so the comparison is a still frame.
 *
 * Note the vanilla side writes `aria-hidden="true"` by hand — the React layer
 * sets it for you, but the framework-agnostic CSS path does not auto-wire ARIA
 * (see css-api.md). It does not affect the visual, only the a11y contract.
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Components/lv1/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <div className="w-[240px] space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-16 w-24" />
        </div>
      </div>
      <div className="space-y-6">
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="w-[240px] space-y-2">
          <div className="st-skeleton h-4 w-full" aria-hidden="true" />
          <div className="st-skeleton h-4 w-3/4" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-4">
          <div className="st-skeleton h-12 w-12 rounded-full" aria-hidden="true" />
          <div className="st-skeleton h-6 w-20 rounded-full" aria-hidden="true" />
          <div className="st-skeleton h-16 w-24" aria-hidden="true" />
        </div>
      </div>
    </div>
  ),
}
