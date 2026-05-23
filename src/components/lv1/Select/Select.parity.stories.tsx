import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'

/**
 * Parity stories — React `<SelectTrigger>` and a hand-written
 * `<button class="st-select__trigger st-select__trigger--{sm,md,lg}">`
 * must render pixel-identical. Backs the VRT in
 * `Select.parity.vrt.spec.ts`.
 *
 * **Scope: trigger only.** The dropdown content portals into
 * `document.body` and uses Radix runtime variables
 * (`--radix-select-trigger-width`, popper positioning) that a vanilla
 * consumer cannot replicate without their own JS. Content parity is
 * intentionally out of scope for sweep-5 — see [#270 "vanilla HTML
 * parity の範囲"] and the deferred docs effort in [#297].
 *
 * Trigger covers:
 * - 3 sizes (sm / md / lg)
 * - error state (vanilla side sets `aria-invalid="true"` directly —
 *   the CSS targets the attribute, so no `--error` modifier exists)
 * - disabled state
 *
 * Inline `<svg>` icon matches `lucide-react`'s ChevronDown so the
 * vanilla side stays React-free.
 */
const meta: Meta<typeof SelectTrigger> = {
  title: 'Components/lv1/Select',
  component: SelectTrigger,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof SelectTrigger>

// Lucide ChevronDown (matches Lucide source) — kept inline so the
// vanilla side has no React dependency.
const ChevronDownSvg = () => (
  <svg
    className="st-select__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-3xl">
      {/* ===== React side ===== */}
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>

        <div className="space-y-3" style={{ width: 240 }}>
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg">
              <SelectValue placeholder="Large" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger isError>
              <SelectValue placeholder="Error" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ===== Vanilla HTML side =====
       * Reproduces the trigger DOM Radix would render. Note:
       * - `type="button"` because Radix Trigger is a `<button>`
       * - `aria-haspopup="listbox"` and `aria-expanded="false"` mirror
       *   Radix's static attributes (vanilla consumers must set these
       *   themselves — Schatten doesn't auto-wire ARIA outside React)
       * - Placeholder `<span>` is the equivalent of `<SelectValue
       *   placeholder="…">` — Radix renders the placeholder text inside
       *   a span and applies the data-placeholder attribute; the
       *   `.st-select__trigger > span` rule handles truncation.
       */}
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>

        <div className="space-y-3" style={{ width: 240 }}>
          <button
            type="button"
            className="st-select__trigger st-select__trigger--sm"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <span>Small</span>
            <ChevronDownSvg />
          </button>
          <button
            type="button"
            className="st-select__trigger st-select__trigger--md"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <span>Medium</span>
            <ChevronDownSvg />
          </button>
          <button
            type="button"
            className="st-select__trigger st-select__trigger--lg"
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <span>Large</span>
            <ChevronDownSvg />
          </button>
          <button
            type="button"
            className="st-select__trigger st-select__trigger--md"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-invalid="true"
          >
            <span>Error</span>
            <ChevronDownSvg />
          </button>
          <button
            type="button"
            className="st-select__trigger st-select__trigger--md"
            aria-haspopup="listbox"
            aria-expanded="false"
            disabled
          >
            <span>Disabled</span>
            <ChevronDownSvg />
          </button>
        </div>
      </div>
    </div>
  ),
}
