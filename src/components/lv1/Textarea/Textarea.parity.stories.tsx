import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

/**
 * Parity stories — React `<Textarea>` and a hand-written `<textarea
 * class="st-textarea st-textarea--md">` must render pixel-identical.
 * Backs the VRT in `Textarea.parity.vrt.spec.ts`.
 *
 * Covered combinations:
 * - 3 sizes (sm / md / lg)
 * - error / disabled / readOnly / readOnly + error
 *
 * Vanilla side carries `aria-invalid`, `readonly`, and `disabled`
 * manually — the CSS targets those attributes (per css-api.md §state),
 * so vanilla HTML consumers must set them.
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/lv1/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

type VanillaProps = {
  size: 'sm' | 'md' | 'lg'
  isError?: boolean
  disabled?: boolean
  readOnly?: boolean
  defaultValue?: string
  placeholder?: string
  rows?: number
}

const VanillaTextarea = ({
  size,
  isError,
  disabled,
  readOnly,
  defaultValue,
  placeholder,
  rows = 3,
}: VanillaProps) => (
  <textarea
    rows={rows}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    readOnly={readOnly}
    aria-invalid={isError ? 'true' : undefined}
    className={`st-textarea st-textarea--${size}`}
  />
)

export const Parity: Story = {
  name: 'React vs Vanilla HTML',
  render: () => (
    <div className="grid grid-cols-2 gap-12 max-w-5xl">
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex flex-col gap-3 w-72">
          <Textarea aria-label="ta-sm" size="sm" placeholder="Small" rows={2} />
          <Textarea aria-label="ta-md" size="md" placeholder="Medium" rows={3} />
          <Textarea aria-label="ta-lg" size="lg" placeholder="Large" rows={3} />
          <Textarea aria-label="ta-error" isError placeholder="Error" rows={2} />
          <Textarea aria-label="ta-disabled" disabled defaultValue="Disabled" rows={2} />
          <Textarea aria-label="ta-readonly" readOnly defaultValue="Read-only" rows={2} />
          <Textarea
            aria-label="ta-readonly-error"
            readOnly
            isError
            defaultValue="Read-only + error"
            rows={2}
          />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex flex-col gap-3 w-72">
          <VanillaTextarea size="sm" placeholder="Small" rows={2} />
          <VanillaTextarea size="md" placeholder="Medium" rows={3} />
          <VanillaTextarea size="lg" placeholder="Large" rows={3} />
          <VanillaTextarea size="md" isError placeholder="Error" rows={2} />
          <VanillaTextarea size="md" disabled defaultValue="Disabled" rows={2} />
          <VanillaTextarea size="md" readOnly defaultValue="Read-only" rows={2} />
          <VanillaTextarea size="md" readOnly isError defaultValue="Read-only + error" rows={2} />
        </div>
      </div>
    </div>
  ),
}
