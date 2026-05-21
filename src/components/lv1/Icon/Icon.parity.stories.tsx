import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from 'lucide-react'
import { Icon } from './Icon'

/**
 * Parity stories — React `<Icon>` and a hand-written vanilla `<svg>` with
 * the matching `.st-icon` class chain must render pixel-identical. Backs
 * the VRT in `Icon.parity.vrt.spec.ts`.
 *
 * The vanilla side inlines a Lucide-shaped `<svg>` so the comparison is
 * apples-to-apples (size + color + stroke), not "Schatten-managed Lucide
 * vs raw symbol".
 */
const meta: Meta<typeof Icon> = {
  title: 'Components/lv1/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Icon>

// Inline copy of the Lucide `<Search>` SVG body — kept as raw markup so the
// vanilla half doesn't pull in React/Lucide and can be lifted straight into a
// non-React project.
const SearchSvgBody = (
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
)

const VanillaSvg = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {SearchSvgBody}
  </svg>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12">
      <div className="w-64 space-y-6">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-3">
          <Icon icon={Search} size="sm" />
          <Icon icon={Search} size="md" />
          <Icon icon={Search} size="lg" />
        </div>
        <div className="flex items-center gap-3">
          <Icon icon={Search} color="default" />
          <Icon icon={Search} color="muted" />
          <Icon icon={Search} color="subtle" />
          <Icon icon={Search} color="error" />
          <Icon icon={Search} color="success" />
        </div>
        <div className="flex items-center gap-3">
          <Icon icon={Search} color="warning" />
          <Icon icon={Search} color="info" />
          <Icon icon={Search} color="vermillion" />
          <Icon icon={Search} color="indigo" />
        </div>
        <div className="text-error">
          <Icon icon={Search} />
          <span className="ml-2 align-middle text-sm">inherit on red parent</span>
        </div>
      </div>
      <div className="w-64 space-y-6">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--sm st-icon--inherit" />
          <VanillaSvg className="st-icon st-icon--md st-icon--inherit" />
          <VanillaSvg className="st-icon st-icon--lg st-icon--inherit" />
        </div>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--md st-icon--default" />
          <VanillaSvg className="st-icon st-icon--md st-icon--muted" />
          <VanillaSvg className="st-icon st-icon--md st-icon--subtle" />
          <VanillaSvg className="st-icon st-icon--md st-icon--error" />
          <VanillaSvg className="st-icon st-icon--md st-icon--success" />
        </div>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--md st-icon--warning" />
          <VanillaSvg className="st-icon st-icon--md st-icon--info" />
          <VanillaSvg className="st-icon st-icon--md st-icon--vermillion" />
          <VanillaSvg className="st-icon st-icon--md st-icon--indigo" />
        </div>
        <div className="text-error">
          <VanillaSvg className="st-icon st-icon--md st-icon--inherit" />
          <span className="ml-2 align-middle text-sm">inherit on red parent</span>
        </div>
      </div>
    </div>
  ),
}
