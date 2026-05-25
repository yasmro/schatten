import type { Meta, StoryObj } from '@storybook/react-vite'
import { Callout } from './Callout'

/**
 * Parity stories — React `<Callout>` and a hand-written vanilla `<div>`
 * with the matching `.st-callout` class chain must render pixel-identical.
 * Backs the VRT in `Callout.parity.vrt.spec.ts`.
 *
 * The vanilla side reproduces the icon + title + body structure using the
 * sub-element classes (`.st-callout__icon` / `__title` / `__body`). The
 * Close button is omitted from parity coverage because it depends on
 * Button's class chain (which lands in sweep-3) — parity for that button
 * will be covered by Button.parity.stories.tsx.
 *
 * Lucide icon SVG bodies are inlined here, pinned to lucide-react@1.x
 * (currently 1.14.0). When the dep is bumped, re-verify the paths match
 * the Lucide source.
 */
const meta: Meta<typeof Callout> = {
  title: 'Components/lv1/Callout',
  component: Callout,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Callout>

const InfoSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="st-callout__icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

const CheckSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="st-callout__icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const AlertSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="st-callout__icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <Callout variant="neutral" title="Neutral subtle">
          The quick brown fox jumps over the lazy dog.
        </Callout>
        <Callout variant="success" title="Saved">
          Changes have been persisted.
        </Callout>
        <Callout variant="error" appearance="solid" title="Failed">
          Could not connect to the upstream.
        </Callout>
        <Callout variant="info">Title-less body — runs centered alongside the icon.</Callout>
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="st-callout st-callout--neutral st-callout--subtle">
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Neutral subtle</div>
            <div className="st-callout__body">The quick brown fox jumps over the lazy dog.</div>
          </div>
        </div>
        <div className="st-callout st-callout--success st-callout--subtle">
          <CheckSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Saved</div>
            <div className="st-callout__body">Changes have been persisted.</div>
          </div>
        </div>
        <div className="st-callout st-callout--error st-callout--solid">
          <AlertSvg />
          <div className="st-callout__content">
            <div className="st-callout__title">Failed</div>
            <div className="st-callout__body">Could not connect to the upstream.</div>
          </div>
        </div>
        <div className="st-callout st-callout--info st-callout--subtle">
          <InfoSvg />
          <div className="st-callout__content">
            <div className="st-callout__body">
              Title-less body — runs centered alongside the icon.
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
