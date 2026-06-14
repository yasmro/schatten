import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Tokens/Z-Index',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl font-bold text-foreground mb-4">{children}</h1>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">{children}</h2>
)

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-foreground-muted leading-relaxed mb-8">{children}</p>
)

const Note = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-foreground-muted mb-4">{children}</p>
)

const Z_LAYERS = [
  { token: '--z-base', value: 0, layer: 'Default flow', reserved: true },
  { token: '--z-dropdown', value: 10, layer: 'Consumer-reserved', reserved: true },
  { token: '--z-sticky', value: 20, layer: 'Consumer-reserved (sticky chrome)', reserved: true },
  { token: '--z-fixed', value: 30, layer: 'Consumer-reserved (fixed chrome)', reserved: true },
  { token: '--z-modal-backdrop', value: 40, layer: 'Dialog overlay', reserved: false },
  { token: '--z-modal', value: 50, layer: 'Dialog content', reserved: false },
  { token: '--z-popover', value: 60, layer: 'Select / popover content', reserved: false },
  { token: '--z-tooltip', value: 70, layer: 'Tooltip', reserved: false },
  { token: '--z-toast', value: 80, layer: 'Toast (front-most)', reserved: false },
] as const

// Overlapping cards, each one tier up, to show the paint order visually.
const STACK_DEMO = [
  { label: 'modal-backdrop (40)', z: 'var(--z-modal-backdrop)', bg: 'bg-surface', offset: 0 },
  { label: 'modal (50)', z: 'var(--z-modal)', bg: 'bg-theme-100', offset: 36 },
  { label: 'popover (60)', z: 'var(--z-popover)', bg: 'bg-theme-300', offset: 72 },
  { label: 'tooltip (70)', z: 'var(--z-tooltip)', bg: 'bg-theme-500', offset: 108 },
  { label: 'toast (80)', z: 'var(--z-toast)', bg: 'bg-theme-700', offset: 144 },
] as const

/**
 * Z-index is the *stacking* token scale — the order overlapping portal /
 * overlay layers paint in. It is distinct from elevation/depth
 * (`--shadow-*`); a layer's shadow says how raised it looks, its z-index
 * says what it paints in front of. Source of truth:
 * `src/core/tokens/z-index.css`.
 */
export const StackingOrder: Story = {
  name: 'Stacking Order',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Z-Index</PageTitle>
      <Lead>
        Schatten reserves the <code>0–100</code> z-index band for its portal / overlay layers.
        Components reference the <code>--z-*</code> semantic tokens (also exposed as Tailwind{' '}
        <code>z-*</code> utilities and <code>tokens.zIndex.*</code>) so a Tooltip opened inside a
        Dialog always paints in front of the modal, never behind it.
      </Lead>

      <SectionTitle>The scale</SectionTitle>
      <Note>
        Values increase strictly with stacking order. The four lowest slots carry no internal
        consumer and are reserved for your own page chrome — keep application stacking values{' '}
        <strong>outside the 0–100 band</strong> to avoid colliding with Schatten overlays.
      </Note>
      <div className="border border-border rounded-xl overflow-hidden">
        {Z_LAYERS.map((l) => (
          <div
            key={l.token}
            className="flex items-center gap-4 px-5 py-2.5 border-b border-border last:border-b-0"
          >
            <span className="w-10 text-right text-sm font-mono text-foreground tabular-nums">
              {l.value}
            </span>
            <span className="w-44 text-sm font-mono text-foreground">{l.token}</span>
            <span className="text-sm text-foreground-muted">{l.layer}</span>
            {l.reserved && (
              <span className="ml-auto text-[10px] uppercase tracking-wide text-foreground-subtle">
                reserved
              </span>
            )}
          </div>
        ))}
      </div>

      <SectionTitle>Paint order</SectionTitle>
      <Note>
        Overlapping cards, each one tier higher than the last. The later token in the scale paints
        on top, regardless of DOM order.
      </Note>
      <div className="relative h-64">
        {STACK_DEMO.map((c) => (
          <div
            key={c.label}
            className={`absolute h-28 w-56 rounded-xl border border-border-strong ${c.bg} flex items-start p-3 text-xs font-mono text-foreground`}
            style={{ zIndex: c.z, left: c.offset, top: c.offset / 3 }}
          >
            {c.label}
          </div>
        ))}
      </div>
    </div>
  ),
}
