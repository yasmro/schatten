import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'

/**
 * Parity stories — React `<Spinner>` and a hand-written vanilla SVG with
 * the matching `.st-spinner` / `.st-spinner__*` class chain must render
 * pixel-identical. Backs the VRT in `Spinner.parity.vrt.spec.ts`.
 *
 * The vanilla side reproduces both spinner types (default rotating circle
 * and ripple) using the same SVG geometry the React side emits. The VRT
 * spec pauses CSS animations before screenshotting so the comparison is a
 * still-frame match.
 */
const meta: Meta<typeof Spinner> = {
  title: 'Components/lv1/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

// Inline copies of the SVG bodies — kept as raw markup so the vanilla half
// can be lifted into a non-React project unchanged. SVG sizing comes from
// the `.st-spinner > svg` child selector in Spinner.css (no Tailwind
// `size-full` needed) — that's what #285 closed for the default type.
const DefaultVanilla = ({ className }: { className: string }) => (
  <div className={className} role="status">
    <svg className="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        className="st-spinner__track"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="st-spinner__arc"
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
    <span className="sr-only">Loading</span>
  </div>
)

const RippleVanilla = ({ className }: { className: string }) => (
  <div className={className} role="status">
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle className="st-spinner__dot" cx="36" cy="36" r="2.6" />
      <circle
        className="st-spinner__ripple-1"
        cx="36"
        cy="36"
        r="10"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        className="st-spinner__ripple-2"
        cx="36"
        cy="36"
        r="10"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
    <span className="sr-only">Loading</span>
  </div>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
        <div className="flex items-center gap-6">
          <Spinner type="ripple" size="sm" />
          <Spinner type="ripple" size="md" />
          <Spinner type="ripple" size="lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <Spinner variant="inverted" />
          <Spinner variant="inverted" type="ripple" />
        </div>
      </div>
      <div className="space-y-8">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-6">
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <DefaultVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6">
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--sm" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--default st-spinner--lg" />
        </div>
        <div className="flex items-center gap-6 rounded-md bg-solid p-4">
          <DefaultVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
          <RippleVanilla className="st-spinner st-spinner--inverted st-spinner--md" />
        </div>
      </div>
    </div>
  ),
}
