import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '../../components/lv1/Badge'
import { Callout } from '../../components/lv1/Callout'

const meta: Meta = {
  title: 'Getting Started/Vanilla HTML',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-foreground mt-12 mb-3">{children}</h2>
)

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>
)

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-foreground-muted leading-relaxed mb-3">{children}</p>
)

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1 py-0.5 text-xs font-mono bg-surface border border-border rounded">
    {children}
  </code>
)

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-surface border border-border rounded-md p-4 text-sm font-mono overflow-x-auto leading-relaxed text-foreground">
    <code>{children}</code>
  </pre>
)

const ClassRow = ({
  className,
  status,
  description,
}: {
  className: string
  status: 'available' | 'coming'
  description: string
}) => (
  <div className="grid grid-cols-[1fr_auto_2fr] items-center gap-4 py-3 border-b border-border last:border-b-0">
    <code className="text-xs font-mono text-foreground">{className}</code>
    {status === 'available' ? (
      <Badge variant="success" appearance="subtle">
        Available
      </Badge>
    ) : (
      <Badge variant="info" appearance="outline">
        Coming in v1.0
      </Badge>
    )}
    <span className="text-xs text-foreground-muted">{description}</span>
  </div>
)

const SETUP_CDN = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Schatten — Vanilla HTML</title>

    <!-- jsDelivr (recommended). Pin to a major range once v1.0.0 ships. -->
    <link
      href="https://cdn.jsdelivr.net/npm/@yasmro/schatten@^0.7.0/dist/schatten.css"
      rel="stylesheet"
    />

    <!-- or unpkg -->
    <!--
    <link
      href="https://unpkg.com/@yasmro/schatten@^0.7.0/dist/schatten.css"
      rel="stylesheet"
    />
    -->
  </head>
  <body>
    <!-- v0.7.0: the class below is currently a no-op (no CSS rule emitted). -->
    <!-- It will style the button once the class API lands in v0.14.0 — see  -->
    <!-- "Class API surface" below for the full status table.                -->
    <button class="btn btn--primary">Click me</button>
  </body>
</html>`

const SETUP_LOCAL = `<link href="/path/to/node_modules/@yasmro/schatten/dist/schatten.css" rel="stylesheet" />

<!-- or import from a JS entry your bundler picks up -->
<!-- import '@yasmro/schatten/schatten.css' -->`

const TOKEN_USAGE = `<style>
  /* Tokens (CSS custom properties) are available today on :root */
  .my-button {
    background-color: var(--color-solid);
    color: var(--color-solid-foreground);
    padding: 0.5rem 1.25rem;
    border-radius: var(--radius-md, 0.375rem);
  }
</style>

<button class="my-button">Available today</button>`

const CVA_BRIDGE = `<!-- 1. Import the CSS bundle (no JS runtime cost) -->
<link href="https://cdn.jsdelivr.net/npm/@yasmro/schatten@^0.7.0/dist/schatten.css" rel="stylesheet" />

<!-- 2. Import the variants module from any framework with a JS toolchain. -->
<!-- Example: Astro / Vue / Svelte                                        -->
<script type="module">
  import { buttonVariants } from 'https://cdn.jsdelivr.net/npm/@yasmro/schatten@^0.7.0/dist/variants/index.js'

  document.querySelectorAll('button[data-schatten="primary"]').forEach((el) => {
    el.className = buttonVariants({ variant: 'primary' })
  })
</script>

<button data-schatten="primary">Hydrated by CVA</button>`

const SEASONAL_THEME = `<!-- Activate a seasonal palette via the data-theme attribute -->
<html data-theme="season--spring-early">
  <!-- ... -->
</html>`

const DARK_MODE = `<!-- Light mode — :root default -->
<html>...</html>

<!-- Dark mode — toggle the .dark class on <html> -->
<html class="dark">...</html>

<!-- Or respect the user's OS preference (handled automatically) -->`

export const VanillaHTML: Story = {
  name: 'Vanilla HTML',
  render: () => (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-3 tracking-tight">Vanilla HTML</h1>
        <p className="text-base text-foreground-muted leading-relaxed">
          Use Schatten in plain HTML, Astro, Vue, Svelte, or any project without a React runtime.
          Tokens and the base reset ship today; the full class API ships in v1.0.0.
        </p>
      </div>

      <Callout variant="warning" title="Heads up — v0.7.0 status">
        Schatten's framework-agnostic surface is{' '}
        <strong>under active development through the v0.7.x → v0.14.x</strong> cycle. Design tokens
        (CSS custom properties) and the base reset are available today; the data-attribute class API
        (<InlineCode>.btn[data-variant="solid"]</InlineCode>) lands in <strong>v0.14.0</strong>.
        Until then, the recommended bridge for non-React projects is the exported{' '}
        <InlineCode>buttonVariants(...)</InlineCode> / <InlineCode>badgeVariants(...)</InlineCode> /
        etc. — see{' '}
        <a href="#cva-bridge" className="underline">
          CVA bridge
        </a>{' '}
        below.
      </Callout>

      <SectionTitle>Why a Vanilla HTML path?</SectionTitle>
      <Paragraph>
        Schatten is a <strong>two-layer</strong> design system. The lower layer is plain CSS —
        design tokens plus a class API keyed on <InlineCode>data-*</InlineCode> attributes. The
        upper layer is an optional React component runtime that consumes the same tokens. Either
        layer can be used in isolation.
      </Paragraph>
      <Paragraph>
        That split exists because a design system should outlive any one framework choice. A
        WordPress theme, an Astro static site, a Vue / Svelte SPA, or a server-rendered HTML page
        should all be able to wear the same visual identity without first installing React.
      </Paragraph>
      <Paragraph>
        Long-term goal: <InlineCode>{'<button class="btn" data-variant="solid">'}</InlineCode>{' '}
        renders identically to <InlineCode>{'<Button variant="primary">'}</InlineCode>, with no JS
        runtime required.
      </Paragraph>

      <SectionTitle>Minimum setup</SectionTitle>
      <SubsectionTitle>1. Load the CSS bundle</SubsectionTitle>
      <Paragraph>
        The CSS bundle is published to npm and mirrored to both jsDelivr and unpkg. Drop it into the{' '}
        <InlineCode>&lt;head&gt;</InlineCode>:
      </Paragraph>
      <CodeBlock>{SETUP_CDN}</CodeBlock>

      <SubsectionTitle>2. Or import locally</SubsectionTitle>
      <Paragraph>
        For build pipelines that bundle CSS (Astro, Vite, Webpack), import the bundle once at your
        entry:
      </Paragraph>
      <CodeBlock>{SETUP_LOCAL}</CodeBlock>

      <SectionTitle>What works today (v0.7.0)</SectionTitle>
      <Paragraph>
        The bundle ships <strong>design tokens</strong> (primitive scales + semantic tokens),
        <strong> base reset</strong>, and an <InlineCode>@theme</InlineCode> block that registers
        the tokens with Tailwind v4. The most reliable path today is to consume tokens directly via
        CSS custom properties:
      </Paragraph>
      <CodeBlock>{TOKEN_USAGE}</CodeBlock>
      <Paragraph>
        See{' '}
        <a href="?path=/docs/foundation-color--colors" className="underline">
          Foundation / Color
        </a>{' '}
        for the full token list and{' '}
        <a href="?path=/docs/foundation-typography--typography" className="underline">
          Foundation / Typography
        </a>{' '}
        for the type scale.
      </Paragraph>

      <SectionTitle>Class API surface</SectionTitle>
      <Paragraph>
        Below is the <strong>planned</strong> class surface. Classes marked "Coming in v1.0" are
        part of the v1.0.0 public API contract (see{' '}
        <a
          href="https://github.com/yasmro/schatten/issues/154"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          #154
        </a>
        ) — they are <em>not yet</em> emitted as standalone CSS rules and will not style your markup
        yet.
      </Paragraph>

      <div className="border border-border rounded-lg px-4 py-2 my-4">
        <ClassRow className=".btn" status="coming" description="Button base class." />
        <ClassRow
          className='.btn[data-variant="solid"]'
          status="coming"
          description="Primary button (filled accent)."
        />
        <ClassRow
          className='.btn[data-variant="outline"]'
          status="coming"
          description="Secondary button (outlined)."
        />
        <ClassRow
          className='.btn[data-variant="ghost"]'
          status="coming"
          description="Tertiary button (no background)."
        />
        <ClassRow
          className='.btn[data-size="sm|md|lg"]'
          status="coming"
          description="Button sizing."
        />
        <ClassRow
          className=".input-wrapper / .input"
          status="coming"
          description="Text input with optional icon slots."
        />
        <ClassRow
          className=".badge[data-variant][data-appearance]"
          status="coming"
          description="Badge with tone × shape (success/error/warning/info × solid/outline/subtle)."
        />
        <ClassRow
          className=".callout[data-variant][data-appearance]"
          status="coming"
          description="Inline contextual notice."
        />
        <ClassRow
          className=".checkbox / .radio / .switch"
          status="coming"
          description="Toggle form controls."
        />
        <ClassRow
          className=".select-trigger / .select-content"
          status="coming"
          description="Select primitives (popup positioning still requires JS)."
        />
      </div>

      <Paragraph>
        Custom properties (tokens) are <em>not</em> phantom — they are emitted today and stable from
        v1.0.0:
      </Paragraph>

      <div className="border border-border rounded-lg px-4 py-2 my-4">
        <ClassRow
          className="--color-foreground / --color-background"
          status="available"
          description="Base surface and foreground."
        />
        <ClassRow
          className="--color-solid / --color-solid-foreground"
          status="available"
          description="Primary interactive fill (matches Button primary)."
        />
        <ClassRow
          className="--color-{state}, --color-{state}-subtle, …"
          status="available"
          description="State tokens (error / success / warning / info / destructive)."
        />
        <ClassRow
          className="--color-theme-50 … --color-theme-950"
          status="available"
          description="Theme scale (retunable per data-theme)."
        />
        <ClassRow
          className="--color-surface-disabled, --color-foreground-disabled, …"
          status="available"
          description="Non-interactive state tokens."
        />
      </div>

      <SectionTitle>
        <span id="cva-bridge">Bridge — use the CVA variant functions</span>
      </SectionTitle>
      <Paragraph>
        Until the data-attribute class API lands in v0.14.0, projects with any JS toolchain can call
        the exported variant functions (<InlineCode>buttonVariants</InlineCode>,{' '}
        <InlineCode>badgeVariants</InlineCode>, …) to get a ready-to-use class string. The functions
        are framework-agnostic — they only return strings — and tree-shake cleanly.
      </Paragraph>
      <CodeBlock>{CVA_BRIDGE}</CodeBlock>
      <Paragraph>
        For Astro / Vue / Svelte examples, see the{' '}
        <a
          href="https://github.com/yasmro/schatten#astro--vue--svelte"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          README — Astro / Vue / Svelte
        </a>{' '}
        section.
      </Paragraph>

      <SectionTitle>Theming</SectionTitle>
      <SubsectionTitle>Light / dark mode</SubsectionTitle>
      <Paragraph>
        Light is the implicit default. Toggle the <InlineCode>.dark</InlineCode> class on{' '}
        <InlineCode>&lt;html&gt;</InlineCode> to switch, or omit the class to follow the user's OS
        preference via <InlineCode>prefers-color-scheme</InlineCode>:
      </Paragraph>
      <CodeBlock>{DARK_MODE}</CodeBlock>

      <SubsectionTitle>Seasonal palettes</SubsectionTitle>
      <Paragraph>
        Schatten ships eight seasonal palettes that retune the theme scale. Activate one via the{' '}
        <InlineCode>data-theme</InlineCode> attribute on <InlineCode>&lt;html&gt;</InlineCode>:
      </Paragraph>
      <CodeBlock>{SEASONAL_THEME}</CodeBlock>
      <Paragraph>
        See the{' '}
        <a href="?path=/docs/foundation-color--colors" className="underline">
          Foundation / Color
        </a>{' '}
        story for all available <InlineCode>data-theme</InlineCode> values.
      </Paragraph>

      <SectionTitle>Roadmap</SectionTitle>
      <div className="border border-border rounded-lg overflow-hidden my-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border bg-surface">
          <span className="text-xs font-mono text-foreground-muted">v0.7.0</span>
          <span className="text-sm text-foreground">
            Framework-agnostic README + this Getting Started story.
          </span>
          <Badge variant="success" appearance="subtle">
            Now
          </Badge>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 border-b border-border">
          <span className="text-xs font-mono text-foreground-muted">v0.14.0</span>
          <span className="text-sm text-foreground">
            Data-attribute class API lands (<InlineCode>.btn[data-variant="solid"]</InlineCode> and
            friends). Tracked in{' '}
            <a
              href="https://github.com/yasmro/schatten/issues/154"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              #154
            </a>
            .
          </span>
          <Badge variant="info" appearance="subtle">
            Planned
          </Badge>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3">
          <span className="text-xs font-mono text-foreground-muted">v1.0.0</span>
          <span className="text-sm text-foreground">
            Class names and CSS variables are pinned by the{' '}
            <a
              href="https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              API stability contract
            </a>
            .
          </span>
          <Badge variant="info" appearance="subtle">
            Planned
          </Badge>
        </div>
      </div>

      <SectionTitle>Related</SectionTitle>
      <ul className="list-disc list-inside text-sm text-foreground-muted space-y-2 mb-12">
        <li>
          <a
            href="https://github.com/yasmro/schatten/issues/58"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            #58
          </a>{' '}
          — umbrella issue tracking the framework-agnostic CSS roadmap.
        </li>
        <li>
          <a
            href="https://github.com/yasmro/schatten/issues/154"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            #154
          </a>{' '}
          — Phase 2 implementation (v0.14.0): the data-attribute class API.
        </li>
        <li>
          <a
            href="https://github.com/yasmro/schatten/blob/main/README.md"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            README
          </a>{' '}
          — Quick start, including Astro / Vue / Svelte snippets.
        </li>
        <li>
          <a
            href="https://github.com/yasmro/schatten/blob/main/.claude/rules/api-stability.md"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            api-stability.md
          </a>{' '}
          — What "public API" means for CSS classes and variables from v1.0.0.
        </li>
      </ul>
    </div>
  ),
}
