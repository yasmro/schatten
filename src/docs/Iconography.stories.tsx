import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  Copy,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  Info,
  type LucideIcon,
  Minus,
  Pencil,
  Plus,
  Search,
  Settings,
  Star,
  Trash2,
  TriangleAlert,
  Upload,
  User,
  X,
} from 'lucide-react'
import { Icon } from '../components/lv1/Icon/Icon'
import { CodeBlock, Lead, Note, PageTitle, SectionTitle, SubsectionTitle } from './docs-ui'

/*
 * Tokens/Iconography — narrative + conventions doc for the icon system.
 *
 * Intentionally ships WITHOUT a `*.vrt.spec.ts`. The icon visual contract
 * (sizes / colors / a representative gallery) is already pixel-locked by
 * `src/components/lv1/Icon/Icon.vrt.spec.ts`, so a docs-side VRT would only
 * re-shoot the same icons under a prose wrapper. This matches the other
 * narrative token docs that carry no VRT (Motion, ZIndex). If a future
 * section adds a visual NOT covered by the Icon component, add a spec then.
 */
const meta: Meta = {
  title: 'Tokens/Iconography',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="mb-3 ml-5 list-disc space-y-1 text-sm text-foreground-muted">
    {items.map((item, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: static, never-reordered prose list
      <li key={i}>{item}</li>
    ))}
  </ul>
)

export const WhyLucide: Story = {
  name: 'Why lucide-react',
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Iconography</PageTitle>
      <Lead>
        Schatten standardizes on <code>lucide-react</code> for all iconography. Icons are rendered
        through the <code>Icon</code> component, which normalizes size and color and wires the right
        accessibility attributes. This page explains why Lucide, how to use <code>Icon</code>, and
        the patterns to follow and avoid.
      </Lead>

      <SectionTitle>Why lucide-react</SectionTitle>
      <Bullets
        items={[
          <>
            <strong>Lightweight &amp; tree-shakeable</strong> — each icon is its own ES module, so
            only the icons you import ship in the bundle.
          </>,
          <>
            <strong>Modern &amp; actively maintained</strong> — a consistent 24×24 grid and stroke
            language across 1000+ icons, with regular releases.
          </>,
          <>
            <strong>shadcn/ui alignment</strong> — Lucide is shadcn/ui's default icon set, and
            Schatten follows shadcn conventions as its baseline.
          </>,
          <>
            <strong>One vendor, one contract</strong> — a single icon source keeps sizing, stroke
            weight, and visual rhythm uniform across the whole design system.
          </>,
        ]}
      />
    </div>
  ),
}

export const Usage: Story = {
  name: 'Usage',
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Usage</PageTitle>
      <Lead>
        Import the icon you need from <code>lucide-react</code> and pass the component to{' '}
        <code>Icon</code> via the <code>icon</code> prop — not a name string.
      </Lead>
      <CodeBlock>{`import { Search } from 'lucide-react'
import { Icon } from '@yasmro/schatten'

<Icon icon={Search} />`}</CodeBlock>

      <SectionTitle>Size</SectionTitle>
      <Note>
        Three sizes: <code>sm</code> (16px) / <code>md</code> (20px, default) / <code>lg</code>{' '}
        (24px). For a one-off size outside the scale, pass a Tailwind sizing class via{' '}
        <code>className</code> (e.g. <code>className="size-8"</code>) instead.
      </Note>
      <div className="flex items-end gap-6">
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <div key={size} className="flex flex-col items-center gap-1">
            <Icon icon={Search} size={size} color="default" />
            <span className="font-mono text-xs text-foreground-muted">{size}</span>
          </div>
        ))}
      </div>

      <SectionTitle>Color</SectionTitle>
      <Note>
        The <code>color</code> vocabulary mirrors <code>Text</code> so an icon and its adjacent
        label share one token. It defaults to <code>inherit</code> (takes the surrounding{' '}
        <code>currentColor</code>), which keeps <code>Icon</code> composition-safe inside an
        already-colored surface such as a solid Button. <code>inverted-*</code> colors are previewed
        on a dark surface.
      </Note>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {(['default', 'muted', 'subtle', 'vermillion', 'indigo'] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={Star} size="lg" color={color} />
              <span className="font-mono text-xs text-foreground-muted">{color}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {(['error', 'success', 'warning', 'info'] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={CircleAlert} size="lg" color={color} />
              <span className="font-mono text-xs text-foreground-muted">{color}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4">
          {(['inverted', 'inverted-muted', 'inverted-subtle'] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={Star} size="lg" color={color} />
              <span className="font-mono text-xs text-inverted-foreground-muted">{color}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle>Accessibility</SectionTitle>
      <Note>
        Accessibility is driven by the standard <code>aria-label</code> attribute — there is no
        dedicated prop. Omit it for decorative icons (<code>aria-hidden="true"</code> is applied
        automatically); provide it for meaningful icons (<code>role="img"</code> is applied, so the
        icon is queryable via <code>getByRole('img', {'{ name }'})</code>).
      </Note>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center gap-1">
          <Icon icon={Star} size="lg" color="default" />
          <span className="font-mono text-xs text-foreground-muted">decorative</span>
          <span className="text-xs text-foreground-subtle">aria-hidden="true"</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Icon icon={Trash2} size="lg" color="default" aria-label="Delete" />
          <span className="font-mono text-xs text-foreground-muted">aria-label="Delete"</span>
          <span className="text-xs text-foreground-subtle">role="img"</span>
        </div>
      </div>
      <CodeBlock>{`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"`}</CodeBlock>
    </div>
  ),
}

export const PassTheComponent: Story = {
  name: 'Pass the component, not a name',
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Pass the component, not a name</PageTitle>
      <Lead>
        <code>Icon</code> takes a Lucide <em>component</em> (<code>icon={'{Search}'}</code>), not a
        name string (<code>name="Search"</code>). This is a deliberate design choice with three
        benefits.
      </Lead>

      <SectionTitle>1. Tree-shaking</SectionTitle>
      <Note>
        Only the icons you actually import end up in the bundle. A name-string API would have to
        reference a map of every possible icon, defeating tree-shaking.
      </Note>

      <SectionTitle>2. Typos become build errors</SectionTitle>
      <Note>
        A misspelled component name is a compile-time error. A misspelled <em>string</em> would fail
        silently at runtime (an undefined icon).
      </Note>
      <CodeBlock>{`// component — a typo is a build error
import { Search } from 'lucide-react'
<Icon icon={Search} />

// there is no \`name\` prop in Schatten — this does not type-check
<Icon name="Search" />
<Icon name="Serach" />  // …and a typo could never be caught at build time`}</CodeBlock>

      <SectionTitle>3. No allowlist to maintain</SectionTitle>
      <Note>
        <code>Icon</code> accepts <strong>any</strong> Lucide icon — there is no{' '}
        <code>ICON_MAP</code> or allowlist file to keep in sync. The vendor is fixed to Lucide (the{' '}
        <code>icon</code> prop is typed <code>LucideIcon</code>); widening to a vendor-agnostic type
        later is an additive, non-breaking change.
      </Note>
    </div>
  ),
}

const GALLERY_ICONS: { name: string; icon: LucideIcon }[] = [
  { name: 'ArrowRight', icon: ArrowRight },
  { name: 'ArrowLeft', icon: ArrowLeft },
  { name: 'ArrowUp', icon: ArrowUp },
  { name: 'ArrowDown', icon: ArrowDown },
  { name: 'ChevronRight', icon: ChevronRight },
  { name: 'ChevronLeft', icon: ChevronLeft },
  { name: 'ChevronDown', icon: ChevronDown },
  { name: 'ChevronUp', icon: ChevronUp },
  { name: 'Check', icon: Check },
  { name: 'X', icon: X },
  { name: 'Plus', icon: Plus },
  { name: 'Minus', icon: Minus },
  { name: 'Search', icon: Search },
  { name: 'Settings', icon: Settings },
  { name: 'Trash2', icon: Trash2 },
  { name: 'Pencil', icon: Pencil },
  { name: 'Copy', icon: Copy },
  { name: 'Eye', icon: Eye },
  { name: 'EyeOff', icon: EyeOff },
  { name: 'Info', icon: Info },
  { name: 'CircleAlert', icon: CircleAlert },
  { name: 'CircleCheck', icon: CircleCheck },
  { name: 'TriangleAlert', icon: TriangleAlert },
  { name: 'Download', icon: Download },
  { name: 'Upload', icon: Upload },
  { name: 'ExternalLink', icon: ExternalLink },
  { name: 'Bell', icon: Bell },
  { name: 'Calendar', icon: Calendar },
  { name: 'User', icon: User },
  { name: 'Star', icon: Star },
]

export const Gallery: Story = {
  name: 'Gallery',
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Gallery</PageTitle>
      <Lead>
        A representative selection of <code>lucide-react</code> icons commonly used across Schatten
        components. <strong>This is documentation, not an allowlist</strong> — <code>Icon</code>{' '}
        accepts any of Lucide's 1000+ icons. Browse the full set at{' '}
        <a
          href="https://lucide.dev/icons"
          target="_blank"
          rel="noreferrer"
          className="text-info underline"
        >
          lucide.dev/icons
        </a>
        .
      </Lead>
      <div className="grid grid-cols-6 gap-6">
        {GALLERY_ICONS.map(({ name, icon }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <Icon icon={icon} size="lg" color="default" />
            <span className="font-mono text-xs text-foreground-muted">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const DosAndDonts: Story = {
  name: "Do's and Don'ts",
  render: () => (
    <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Do's &amp; Don'ts</PageTitle>
      <Lead>
        All of these render — the difference is consistency and accessibility. Always go through{' '}
        <code>Icon</code> so size, color tokens, and a11y defaults stay uniform.
      </Lead>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Wrap in Icon</SubsectionTitle>
          <Note>Size, color tokens, and a11y defaults are applied.</Note>
          <div className="rounded-lg border border-success bg-success-subtle p-4">
            <Icon icon={Search} size="lg" color="default" />
          </div>
          <CodeBlock>{`<Icon icon={Search} />`}</CodeBlock>
        </div>
        <div>
          <SubsectionTitle>❌ Raw Lucide element</SubsectionTitle>
          <Note>Bypasses the size scale, color tokens, and a11y defaults.</Note>
          <div className="rounded-lg border border-warning bg-warning-subtle p-4 text-foreground">
            <Search />
          </div>
          <CodeBlock>{`<Search />  // not normalized`}</CodeBlock>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Label a meaningful icon</SubsectionTitle>
          <Note>Exposed as role="img" with an accessible name.</Note>
          <CodeBlock>{`<Icon icon={Trash2} aria-label="Delete" />`}</CodeBlock>
        </div>
        <div>
          <SubsectionTitle>❌ aria-hidden on a labelled icon</SubsectionTitle>
          <Note>Contradicts the label and drops it from the a11y tree — Icon warns in dev.</Note>
          <CodeBlock>{`<Icon icon={Trash2} aria-label="Delete" aria-hidden />`}</CodeBlock>
        </div>
      </div>

      <SectionTitle>Don't hand-write SVG for icons Lucide already ships</SectionTitle>
      <Note>
        If the icon exists in Lucide, use it through <code>Icon</code> so sizing, color tokens, and
        accessibility stay consistent. Reserve a raw <code>&lt;svg&gt;</code> for genuinely custom
        marks that are not part of the icon set.
      </Note>
    </div>
  ),
}
