import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '../components/lv1/Text/Text'

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">{children}</h2>
)

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">{children}</h3>
)

const TokenRow = ({
  label,
  token,
  value,
  style,
}: {
  label: string
  token: string
  value: string
  style?: React.CSSProperties
}) => (
  <div className="flex items-baseline gap-4 py-2 border-b border-border last:border-b-0">
    <span className="shrink-0 w-32 text-sm text-foreground" style={style}>
      {label}
    </span>
    <span className="shrink-0 text-xs text-foreground-muted font-mono">{token}</span>
    <span className="text-xs text-foreground-muted ml-auto">{value}</span>
  </div>
)

const TypographyRow = ({
  name,
  description,
  variant,
  size,
  sampleText,
  sampleTextJa,
}: {
  name: string
  description: string
  variant: 'body' | 'label' | 'heading'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  sampleText: string
  sampleTextJa: string
}) => (
  <div className="py-4 border-b border-border last:border-b-0">
    {/* Rendered via the `.st-text--{variant}.st-text--{size}` class API
        (`<Text>`) — this IS the typography shorthand since #144. */}
    <Text variant={variant} size={size} className="mb-1">
      {sampleText}
    </Text>
    <Text variant={variant} size={size} className="mb-2">
      {sampleTextJa}
    </Text>
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-foreground font-mono">{name}</span>
      <span className="text-xs text-foreground-muted">{description}</span>
    </div>
  </div>
)

export const Typography: Story = {
  name: 'Typography',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Typography</h1>
      <p className="text-base text-foreground-muted leading-relaxed mb-8">
        Schatten's typography system provides consistent text styling across the design system. Each
        named role — Heading, Body, and Label — bundles font size, line height, and weight into a
        single <code>.st-text</code> class (used here via the <code>&lt;Text&gt;</code>
        component), so text styles are applied consistently without manual configuration.
      </p>

      <SectionTitle>Font families</SectionTitle>
      <div className="border border-border rounded-xl px-5">
        <div className="py-4 border-b border-border">
          <p className="font-sans text-xl text-foreground mb-1">
            Hanken Grotesk — The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-sans text-xl text-foreground-muted mb-1">
            LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Default typeface for UI and body text.
          </p>
        </div>
        <div className="py-4 border-b border-border">
          <p className="font-serif text-xl text-foreground mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Serif fallback for editorial content.
          </p>
        </div>
        <div className="py-4">
          <p className="font-mono text-xl text-foreground mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Monospace for code and technical content.
          </p>
        </div>
      </div>

      <SectionTitle>Type scale</SectionTitle>

      <SubsectionTitle>Heading</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Used for page titles, section headers, and card headings. Uses semibold/bold weight with
        snug/tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow
          name="heading-2xl"
          description="Display titles"
          variant="heading"
          size="2xl"
          sampleText="Display Title"
          sampleTextJa="表示タイトル"
        />
        <TypographyRow
          name="heading-xl"
          description="Page titles"
          variant="heading"
          size="xl"
          sampleText="Page Title"
          sampleTextJa="ページタイトル"
        />
        <TypographyRow
          name="heading-lg"
          description="Section titles"
          variant="heading"
          size="lg"
          sampleText="Section Title"
          sampleTextJa="セクションタイトル"
        />
        <TypographyRow
          name="heading-md"
          description="Subsection titles"
          variant="heading"
          size="md"
          sampleText="Subsection Title"
          sampleTextJa="サブセクションタイトル"
        />
        <TypographyRow
          name="heading-sm"
          description="Card titles"
          variant="heading"
          size="sm"
          sampleText="Card Title"
          sampleTextJa="カードタイトル"
        />
      </div>

      <SubsectionTitle>Body</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        For paragraphs, descriptions, and general content. Uses normal weight with relaxed line
        height for readability.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow
          name="body-lg"
          description="Lead paragraphs and introductions"
          variant="body"
          size="lg"
          sampleText="Lead paragraphs and introductions for emphasis."
          sampleTextJa="リード文や導入部分に使用する強調テキストです。"
        />
        <TypographyRow
          name="body-md"
          description="Default body text"
          variant="body"
          size="md"
          sampleText="The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application."
          sampleTextJa="素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。"
        />
        <TypographyRow
          name="body-sm"
          description="Secondary text and descriptions"
          variant="body"
          size="sm"
          sampleText="Secondary text for descriptions, helper text, and supporting content."
          sampleTextJa="説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。"
        />
        <TypographyRow
          name="body-xs"
          description="Captions and footnotes"
          variant="body"
          size="xs"
          sampleText="Captions, footnotes, and fine print."
          sampleTextJa="キャプション、脚注、注意書き。"
        />
      </div>

      <SubsectionTitle>Label</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight
        with tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow
          name="label-lg"
          description="Navigation items"
          variant="label"
          size="lg"
          sampleText="Navigation Item"
          sampleTextJa="ナビゲーション項目"
        />
        <TypographyRow
          name="label-md"
          description="Form labels and buttons"
          variant="label"
          size="md"
          sampleText="Form Label"
          sampleTextJa="フォームラベル"
        />
        <TypographyRow
          name="label-sm"
          description="Tags and badges"
          variant="label"
          size="sm"
          sampleText="Badge Text"
          sampleTextJa="バッジテキスト"
        />
        <TypographyRow
          name="label-xs"
          description="Overlines and micro labels"
          variant="label"
          size="xs"
          sampleText="OVERLINE TEXT"
          sampleTextJa="オーバーライン"
        />
      </div>

      <SectionTitle>Primitives</SectionTitle>

      <SubsectionTitle>Font sizes</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow
          label="Extra Small"
          token="--text-xs"
          value="0.75rem (12px)"
          style={{ fontSize: '0.75rem' }}
        />
        <TokenRow
          label="Small"
          token="--text-sm"
          value="0.875rem (14px)"
          style={{ fontSize: '0.875rem' }}
        />
        <TokenRow
          label="Base"
          token="--text-base"
          value="1rem (16px)"
          style={{ fontSize: '1rem' }}
        />
        <TokenRow
          label="Large"
          token="--text-lg"
          value="1.125rem (18px)"
          style={{ fontSize: '1.125rem' }}
        />
        <TokenRow
          label="XL"
          token="--text-xl"
          value="1.25rem (20px)"
          style={{ fontSize: '1.25rem' }}
        />
        <TokenRow
          label="2XL"
          token="--text-2xl"
          value="1.5rem (24px)"
          style={{ fontSize: '1.5rem' }}
        />
        <TokenRow
          label="3XL"
          token="--text-3xl"
          value="1.875rem (30px)"
          style={{ fontSize: '1.875rem' }}
        />
        <TokenRow
          label="4XL"
          token="--text-4xl"
          value="2.25rem (36px)"
          style={{ fontSize: '2.25rem' }}
        />
      </div>

      <SubsectionTitle>Font weights</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Normal" token="--font-normal" value="400" style={{ fontWeight: 400 }} />
        <TokenRow label="Medium" token="--font-medium" value="500" style={{ fontWeight: 500 }} />
        <TokenRow
          label="Semibold"
          token="--font-semibold"
          value="600"
          style={{ fontWeight: 600 }}
        />
        <TokenRow label="Bold" token="--font-bold" value="700" style={{ fontWeight: 700 }} />
      </div>

      <SubsectionTitle>Line heights</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="None" token="--leading-none" value="1" />
        <TokenRow label="Tight" token="--leading-tight" value="1.25" />
        <TokenRow label="Snug" token="--leading-snug" value="1.375" />
        <TokenRow label="Normal" token="--leading-normal" value="1.5" />
        <TokenRow label="Relaxed" token="--leading-relaxed" value="1.625" />
        <TokenRow label="Loose" token="--leading-loose" value="2" />
      </div>

      <SubsectionTitle>Letter spacing</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Tighter" token="--tracking-tighter" value="-0.05em" />
        <TokenRow label="Tight" token="--tracking-tight" value="-0.025em" />
        <TokenRow label="Normal" token="--tracking-normal" value="0" />
        <TokenRow label="Wide" token="--tracking-wide" value="0.025em" />
        <TokenRow label="Wider" token="--tracking-wider" value="0.05em" />
      </div>
    </div>
  ),
}
