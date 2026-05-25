import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight, Plus } from 'lucide-react'
import { Button } from './Button'

/**
 * Parity stories — React `<Button>` and a hand-written vanilla `<button>`
 * with the matching `.st-btn` class chain must render pixel-identical.
 * Backs the VRT in `Button.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 6 variants × md size
 * - 3 sizes (primary)
 * - icon-only
 * - isLoading (vanilla side hand-rolls `aria-busy="true" disabled` + the
 *   spinner overlay markup; animations are paused by the VRT spec)
 * - link variant × 3 sizes (different DOM shape — flat, no overlay)
 *
 * `asChild` is out of parity scope because it's a React-only API (Slot).
 *
 * Inline `<svg>` icons match the Lucide source so the vanilla side has no
 * React dependency.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/lv1/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Lucide ArrowRight (1.x) — kept inline so the vanilla side stays React-free.
const ArrowRightSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const PlusSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
)

// Static SVG body of the default-type Spinner — matches Spinner.tsx output.
const SpinnerSvg = () => (
  <span className="st-spinner st-spinner--inverted st-spinner--sm" role="status">
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
  </span>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-md bg-solid p-3">
          <Button variant="inverted">Inverted</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button icon={Plus} aria-label="Add" />
          <Button icon={ArrowRight} iconPosition="end">
            Next
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button isLoading>Saving</Button>
          <Button variant="destructive" isLoading>
            Deleting
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="link" size="sm">
            Small link
          </Button>
          <Button variant="link" size="md">
            Medium link
          </Button>
          <Button variant="link" size="lg">
            Large link
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Primary</span>
          </button>
          <button type="button" className="st-btn st-btn--secondary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Secondary</span>
          </button>
          <button type="button" className="st-btn st-btn--tertiary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Tertiary</span>
          </button>
          <button type="button" className="st-btn st-btn--destructive st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Destructive</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3 rounded-md bg-solid p-3">
          <button type="button" className="st-btn st-btn--inverted st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Inverted</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--primary st-btn--sm">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Small</span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Medium</span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--lg">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Large</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="st-btn st-btn--primary st-btn--md st-btn--icon-only"
            aria-label="Add"
          >
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">
              <PlusSvg />
            </span>
          </button>
          <button type="button" className="st-btn st-btn--primary st-btn--md">
            <span className="st-btn__spinner-overlay" aria-hidden="true">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">
              Next
              <ArrowRightSvg />
            </span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="st-btn st-btn--primary st-btn--md"
            aria-busy="true"
            disabled
          >
            <span className="st-btn__spinner-overlay">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Saving</span>
          </button>
          <button
            type="button"
            className="st-btn st-btn--destructive st-btn--md"
            aria-busy="true"
            disabled
          >
            <span className="st-btn__spinner-overlay">
              <SpinnerSvg />
            </span>
            <span className="st-btn__content">Deleting</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="st-btn st-btn--link st-btn--sm">
            Small link
          </button>
          <button type="button" className="st-btn st-btn--link st-btn--md">
            Medium link
          </button>
          <button type="button" className="st-btn st-btn--link st-btn--lg">
            Large link
          </button>
        </div>
      </div>
    </div>
  ),
}
