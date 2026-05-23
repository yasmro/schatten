// Component CSS for vanilla examples — loaded for the side-effect.
import '../components/lv1/Badge/Badge.css'
import '../components/lv1/Button/Button.css'
import '../components/lv1/Callout/Callout.css'
import '../components/lv1/Checkbox/Checkbox.css'
import '../components/lv1/Icon/Icon.css'
import '../components/lv1/Input/Input.css'
import '../components/lv1/Radio/Radio.css'
import '../components/lv1/Separator/Separator.css'
import '../components/lv1/Spinner/Spinner.css'
import '../components/lv1/Switch/Switch.css'
import '../components/lv1/Text/Text.css'
import '../components/lv1/Textarea/Textarea.css'

import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * # CSS API
 *
 * Schatten ships both a React component surface and a framework-agnostic
 * CSS layer. This page is the **reference catalogue** for the CSS layer:
 * every `.st-*` class consumers can write directly in vanilla HTML, with
 * the matching markup and a11y requirements.
 *
 * - The class names follow the convention in [css-api.md](.claude/rules/css-api.md):
 *   `.st-{block}` / `.st-{block}--{modifier}` / `.st-{block}__{element}`,
 *   one axis per modifier, attribute-driven state (`[aria-invalid]`,
 *   `[data-state]`, `[data-swipe]`, …).
 * - Pixel parity between the React side and the vanilla HTML side is
 *   verified per-component in each `{Component}.parity.stories.tsx` and
 *   pinned by `{Component}.parity.vrt.spec.ts`.
 *
 * **Coverage today**: sweep-1 (Separator, Text, Icon) + sweep-2 (Spinner,
 * Badge, Callout) + sweep-3 (Button, Checkbox, Switch) + sweep-4 (Input,
 * Textarea, Radio) of #154. The remaining 6 lv1 components arrive in
 * sweep-5 through sweep-7 and will be added here as each sweep lands.
 */
const meta: Meta = {
  title: 'Foundation/CSS API',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const Section = ({
  id,
  title,
  intro,
  attributes,
  children,
}: {
  id: string
  title: string
  intro: string
  attributes?: { name: string; meaning: string; required: string }[]
  children: React.ReactNode
}) => (
  <section id={id} className="mb-12">
    <h2 className="st-text st-text--heading st-text--lg st-text--default mb-2">{title}</h2>
    <p className="st-text st-text--body st-text--md st-text--muted mb-4">{intro}</p>
    {attributes && attributes.length > 0 && (
      <div className="mb-4">
        <h3 className="st-text st-text--label st-text--sm st-text--default mb-2">
          Required attributes for vanilla HTML usage
        </h3>
        <table className="w-full max-w-2xl text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-1 pr-4 font-medium">Attribute</th>
              <th className="text-left py-1 pr-4 font-medium">Meaning</th>
              <th className="text-left py-1 font-medium">When</th>
            </tr>
          </thead>
          <tbody>
            {attributes.map((a) => (
              <tr key={a.name} className="border-b border-border">
                <td className="py-1 pr-4 font-mono text-xs">{a.name}</td>
                <td className="py-1 pr-4">{a.meaning}</td>
                <td className="py-1 text-foreground-muted">{a.required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    <div className="rounded-md border border-border p-4 bg-surface">{children}</div>
  </section>
)

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="mt-3 text-xs bg-surface-hover p-3 rounded overflow-x-auto">
    <code>{children}</code>
  </pre>
)

export const Reference: Story = {
  name: 'Reference (sweep-1 → sweep-4)',
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="st-text st-text--heading st-text--2xl st-text--default mb-2">
        CSS API — sweep-1 → sweep-4 reference
      </h1>
      <p className="st-text st-text--body st-text--md st-text--muted mb-8">
        The classes below are emitted by `dist/schatten.css`. Import it once and the markup samples
        render with no React and no consumer Tailwind setup.
      </p>

      <Section
        id="separator"
        title="Separator — .st-separator"
        intro="Visual divider. Orientation is an author configuration and goes through a modifier class (--horizontal / --vertical), matching the css-api.md author-config → modifier principle."
        attributes={[
          {
            name: 'role',
            meaning: '"separator" for semantic dividers, "none" / omit for decorative',
            required: 'recommended',
          },
          {
            name: 'aria-orientation',
            meaning:
              'For non-decorative vertical separators (assistive tech announces orientation)',
            required: 'role="separator" + vertical only',
          },
          {
            name: 'data-orientation',
            meaning:
              'Informational only — Radix emits this on the React side; vanilla HTML may include it for DOM parity but it does not drive styling',
            required: 'optional',
          },
        ]}
      >
        <div className="w-72 space-y-3">
          <span className="st-text st-text--body st-text--sm st-text--muted">Above</span>
          <div className="st-separator st-separator--horizontal" role="none" />
          <span className="st-text st-text--body st-text--sm st-text--muted">Below</span>
        </div>
        <CodeBlock>{`<!-- Decorative -->
<div class="st-separator st-separator--horizontal" role="none"></div>

<!-- Semantic vertical separator (announced to screen readers) -->
<div class="st-separator st-separator--vertical"
     role="separator" aria-orientation="vertical"></div>

<!-- Modifier vocabulary -->
<!-- orientation: --horizontal | --vertical -->`}</CodeBlock>
      </Section>

      <Section
        id="text"
        title="Text — .st-text"
        intro="Typography primitive. Five orthogonal axes (variant × size × color × align × truncate), all emitted as side-by-side modifiers — never collapsed."
      >
        <div className="space-y-2">
          <h2 className="st-text st-text--heading st-text--lg st-text--default">Heading lg</h2>
          <p className="st-text st-text--body st-text--md st-text--default">
            Body md, default color.
          </p>
          <p className="st-text st-text--body st-text--sm st-text--muted">Body sm, muted color.</p>
          <p className="st-text st-text--body st-text--md st-text--error">Body md, error color.</p>
          <p className="st-text st-text--body st-text--md st-text--vermillion">
            Body md, vermillion (朱).
          </p>
          <p className="st-text st-text--body st-text--md st-text--default st-text--align-right">
            Right-aligned body.
          </p>
          <p className="st-text st-text--body st-text--md st-text--default st-text--truncate w-64">
            A very long line that should be truncated on overflow.
          </p>
        </div>
        <CodeBlock>{`<p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
<h2 class="st-text st-text--heading st-text--lg st-text--default">Heading.</h2>
<label class="st-text st-text--label st-text--sm st-text--default" for="x">Label</label>

<!-- Modifier vocabulary -->
<!-- variant : --body | --label | --heading -->
<!-- size    : --xs | --sm | --md | --lg | --xl | --2xl
              (heading: sm–2xl, body/label: xs–lg) -->
<!-- color   : --default | --muted | --subtle | --inherit
              | --inverted | --inverted-muted | --inverted-subtle
              | --error | --success | --warning | --info
              | --vermillion | --indigo -->
<!-- align   : --align-left | --align-center | --align-right -->
<!-- truncate: --truncate (presence-only) -->`}</CodeBlock>
      </Section>

      <Section
        id="icon"
        title="Icon — .st-icon"
        intro="SVG icon primitive. The root class itself has no CSS body — every visual property lives on a modifier. Pair with any inline SVG (e.g. a Lucide path)."
        attributes={[
          {
            name: 'aria-hidden="true"',
            meaning: 'Decorative icons',
            required: 'always (decorative)',
          },
          {
            name: 'role="img" + aria-label',
            meaning: 'Meaningful icons that carry information',
            required: 'when-applicable',
          },
        ]}
      >
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="st-icon st-icon--sm st-icon--default"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="st-icon st-icon--md st-icon--error"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="st-icon st-icon--lg st-icon--vermillion"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <CodeBlock>{`<svg class="st-icon st-icon--md st-icon--inherit" aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- … icon path … -->
</svg>

<!-- Modifier vocabulary -->
<!-- size : --sm (16px) | --md (20px) | --lg (24px) -->
<!-- color: same vocabulary as Text — default / muted / subtle / inherit
            / inverted-* / error / success / warning / info
            / vermillion / indigo -->

<!-- Note: .st-icon itself has no CSS body. Tailwind's --minify strips it
     from dist/schatten.css, so the manifest's classes[] list won't include
     "st-icon". The class still works in JSX (.st-icon st-icon--md
     st-icon--inherit) and in vanilla HTML — every visual contribution
     comes from a modifier. -->`}</CodeBlock>
      </Section>

      <Section
        id="spinner"
        title="Spinner — .st-spinner"
        intro="Loading indicator. Two modifier axes (variant × size) plus six sub-element classes spanning the two animation types (default: rotor / track / arc; ripple: dot / ripple-1 / ripple-2). SVG sizing is handled automatically via the .st-spinner > svg child selector — no Tailwind utility needed. Ripple timing is exposed via two consumer-overridable CSS variables (--schatten-spinner-duration / --schatten-spinner-ripple-delay); default-type rotation is hardcoded to 1s linear infinite."
        attributes={[
          {
            name: 'role="status"',
            meaning: 'Announces the loading state to assistive tech',
            required: 'always',
          },
          {
            name: 'aria-hidden="true" (on inner SVG)',
            meaning: 'The SVG is decorative; the visually-hidden label carries the meaning',
            required: 'always',
          },
          {
            name: '<span class="sr-only">…</span>',
            meaning: 'Accessible label rendered visually-hidden',
            required: 'always',
          },
        ]}
      >
        <div className="flex items-center gap-6">
          <div className="st-spinner st-spinner--default st-spinner--sm" role="status">
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
          <div className="st-spinner st-spinner--default st-spinner--md" role="status">
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
          <div className="st-spinner st-spinner--default st-spinner--lg" role="status">
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
        </div>
        <CodeBlock>{`<!-- Default (rotating circle) — SVG carries the rotor + opacity stack -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
    <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Ripple (concentric pulsing rings) -->
<div class="st-spinner st-spinner--default st-spinner--md" role="status">
  <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <circle class="st-spinner__dot" cx="36" cy="36" r="2.6" />
    <circle class="st-spinner__ripple-1" cx="36" cy="36" r="10" stroke="currentColor" />
    <circle class="st-spinner__ripple-2" cx="36" cy="36" r="10" stroke="currentColor" />
  </svg>
  <span class="sr-only">Loading</span>
</div>

<!-- Modifier vocabulary -->
<!-- variant: --default | --inverted (use --inverted on saturated surfaces) -->
<!-- size   : --sm (16px) | --md (24px) | --lg (32px) -->

<!-- Sub-elements (default type) -->
<!-- __rotor : the SVG itself, rotates 360deg / 1s (replaces Tailwind animate-spin) -->
<!-- __track : background ring (opacity 0.25) -->
<!-- __arc   : moving arc (opacity 0.75) -->

<!-- Sub-elements (ripple type) -->
<!-- __dot       : central pulsing dot -->
<!-- __ripple-1  : outer ripple wave (no delay) -->
<!-- __ripple-2  : outer ripple wave (delayed by --schatten-spinner-ripple-delay) -->

<!-- Consumer-overridable timing (declared on :root, ripple type only) -->
<!-- --schatten-spinner-duration        default 2.8s -->
<!-- --schatten-spinner-ripple-delay    default 1.1s -->

<!-- Default-type rotation is hardcoded 1s linear infinite. SVG sizing is
     handled by the .st-spinner > svg child selector — no Tailwind utility
     is required on the inner SVG. -->`}</CodeBlock>
      </Section>

      <Section
        id="badge"
        title="Badge — .st-badge"
        intro="Status descriptor. Pattern B (tone × shape): five variants × three appearances, all written as double-class selectors so every combination shares the same specificity. Includes --icon-only modifier for square icon-only chips."
        attributes={[
          {
            name: 'aria-label',
            meaning: 'Required for icon-only badges (no visible text)',
            required: 'when --icon-only',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">subtle</span>
            <div className="st-badge st-badge--neutral st-badge--subtle st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--subtle st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--subtle st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--subtle st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--subtle st-badge--md">info</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">solid</span>
            <div className="st-badge st-badge--neutral st-badge--solid st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--solid st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--solid st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--solid st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--solid st-badge--md">info</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">outline</span>
            <div className="st-badge st-badge--neutral st-badge--outline st-badge--md">neutral</div>
            <div className="st-badge st-badge--success st-badge--outline st-badge--md">success</div>
            <div className="st-badge st-badge--error st-badge--outline st-badge--md">error</div>
            <div className="st-badge st-badge--warning st-badge--outline st-badge--md">warning</div>
            <div className="st-badge st-badge--info st-badge--outline st-badge--md">info</div>
          </div>
        </div>
        <CodeBlock>{`<!-- variant × appearance combination resolved by double-class selectors -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
<span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
<span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>

<!-- Icon-only — square, padded; requires aria-label -->
<span class="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only"
      aria-label="Done">
  <svg aria-hidden="true">…</svg>
</span>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid | --outline
                  (all three are first-class; emit alongside variant) -->
<!-- size       : --sm | --md | --lg -->
<!-- icon-only  : --icon-only (presence-only; square aspect ratio) -->`}</CodeBlock>
      </Section>

      <Section
        id="callout"
        title="Callout — .st-callout"
        intro="Inline status block. Pattern B (tone × shape): five variants × two appearances. Sub-elements (__icon / __content / __title / __body / __action) sit directly under the block — layout (display: flex) is on .st-callout itself, with align-items auto-switching between center (single-content) and start (multi-line, via :has()). No default ARIA role — pass role=&quot;status&quot; (polite) or role=&quot;alert&quot; (assertive) for dynamic callouts."
        attributes={[
          {
            name: 'role',
            meaning:
              '"status" (polite) or "alert" (assertive) for dynamic callouts; omit for static',
            required: 'when-dynamic',
          },
          {
            name: 'aria-hidden="true" (on icon SVG)',
            meaning: 'The icon is decorative; the title text carries the meaning',
            required: 'always (icon)',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="st-callout st-callout--info st-callout--subtle">
            <svg
              className="st-callout__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <div className="st-callout__content">
              <div className="st-callout__title">Heads up</div>
              <div className="st-callout__body">
                Subtle appearance — tinted background, tone color text.
              </div>
            </div>
          </div>
          <div className="st-callout st-callout--error st-callout--solid">
            <svg
              className="st-callout__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <div className="st-callout__content">
              <div className="st-callout__title">Failed</div>
              <div className="st-callout__body">
                Solid appearance — saturated fill, inverted foreground.
              </div>
            </div>
          </div>
        </div>
        <CodeBlock>{`<!-- Layout is on .st-callout itself — sub-elements sit directly under it -->
<div class="st-callout st-callout--info st-callout--subtle" role="status">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Heads up</div>
    <div class="st-callout__body">…</div>
  </div>
</div>

<!-- With action / close button (both use the __action trailing slot) -->
<div class="st-callout st-callout--warning st-callout--subtle">
  <svg class="st-callout__icon" aria-hidden="true">…</svg>
  <div class="st-callout__content">
    <div class="st-callout__title">Unsaved changes</div>
    <div class="st-callout__body">…</div>
  </div>
  <div class="st-callout__action"><button>Save now</button></div>
  <button class="st-callout__action" aria-label="Close">…</button>
</div>

<!-- Modifier vocabulary -->
<!-- variant    : --neutral | --success | --error | --warning | --info -->
<!-- appearance : --subtle | --solid
                  (both first-class; emit alongside variant) -->

<!-- Sub-elements -->
<!-- __icon    : variant icon wrapper (sizes itself to 20px square) -->
<!-- __content : title + body column (flex-col, fills remaining space) -->
<!-- __title   : bold heading -->
<!-- __body    : description content -->
<!-- __action  : trailing slot for action / close button (shrink-0) -->

<!-- Layout alignment is automatic:
       - title-only or body-only → align-items: center
       - title AND body present  → align-items: flex-start  (via :has()) -->`}</CodeBlock>
      </Section>

      <Section
        id="button"
        title="Button — .st-btn"
        intro="Action element. Pattern A (single-axis role): six variants × three sizes plus the --icon-only modifier. Loading state is signalled by aria-busy='true' alongside disabled; CSS routes the cursor to wait and fades the content / spinner overlay sub-elements. The link variant uses a flat DOM (no overlay / content wrapper) and inherits font-size by default so a <a class='st-btn st-btn--link'> embedded in a paragraph follows the surrounding text."
        attributes={[
          {
            name: 'type="button"',
            meaning: 'Avoid implicit form submission on <button>',
            required: 'when inside <form>',
          },
          {
            name: 'aria-label',
            meaning: 'Required for icon-only buttons (no visible text)',
            required: 'when --icon-only',
          },
          {
            name: 'aria-busy="true" + disabled',
            meaning: 'Loading state — CSS reveals the spinner overlay and switches cursor to wait',
            required: 'while loading',
          },
          {
            name: 'aria-hidden on spinner overlay',
            meaning: 'Set on .st-btn__spinner-overlay when NOT loading (hide from a11y tree)',
            required: 'always (toggle inverse of loading)',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="st-btn st-btn--primary st-btn--md">
              <span className="st-btn__spinner-overlay" aria-hidden="true" />
              <span className="st-btn__content">Primary</span>
            </button>
            <button type="button" className="st-btn st-btn--secondary st-btn--md">
              <span className="st-btn__spinner-overlay" aria-hidden="true" />
              <span className="st-btn__content">Secondary</span>
            </button>
            <button type="button" className="st-btn st-btn--tertiary st-btn--md">
              <span className="st-btn__spinner-overlay" aria-hidden="true" />
              <span className="st-btn__content">Tertiary</span>
            </button>
            <button type="button" className="st-btn st-btn--destructive st-btn--md">
              <span className="st-btn__spinner-overlay" aria-hidden="true" />
              <span className="st-btn__content">Destructive</span>
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
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
        <CodeBlock>{`<!-- Non-link variants — keep the __spinner-overlay + __content structure -->
<button type="button" class="st-btn st-btn--primary st-btn--md">
  <span class="st-btn__spinner-overlay" aria-hidden="true">
    <!-- Spinner SVG, only visible when host has aria-busy="true" -->
  </span>
  <span class="st-btn__content">Save</span>
</button>

<!-- Loading — set both aria-busy and disabled; remove aria-hidden from overlay -->
<button type="button" class="st-btn st-btn--primary st-btn--md"
        aria-busy="true" disabled>
  <span class="st-btn__spinner-overlay">…spinner…</span>
  <span class="st-btn__content">Saving</span>
</button>

<!-- Icon-only — add --icon-only and aria-label -->
<button type="button" class="st-btn st-btn--primary st-btn--md st-btn--icon-only"
        aria-label="Add">
  <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
  <span class="st-btn__content"><svg aria-hidden="true">…</svg></span>
</button>

<!-- Link — flat DOM, no overlay / content wrapper. Size modifier only
     affects font-size; height + padding stay at zero / inherit. -->
<a href="/docs" class="st-btn st-btn--link st-btn--md">Docs</a>

<!-- Modifier vocabulary -->
<!-- variant   : --primary | --secondary | --tertiary | --inverted | --destructive | --link -->
<!-- size      : --sm | --md | --lg
                 (link uses these for font-size only; height/padding reset) -->
<!-- icon-only : --icon-only (presence-only; square aspect ratio) -->

<!-- Sub-elements (non-link variants only) -->
<!-- __spinner-overlay : absolute-positioned loading box (CSS shows on [aria-busy]) -->
<!-- __content         : inline-flex row holding icon + children (CSS fades on [aria-busy]) -->

<!-- State attributes -->
<!-- :disabled                       — standard disabled treatment -->
<!-- [aria-busy="true"]:disabled     — restores variant colour + cursor: wait -->`}</CodeBlock>
      </Section>

      <Section
        id="checkbox"
        title="Checkbox — .st-checkbox + .st-checkbox-wrapper"
        intro="Two blocks: the wrapper carries the inline-flex layout for [checkbox] + <label>; the inner block is the Radix Root (the actual button). The label's font-size is derived from the inner checkbox's size modifier via :has(), so vanilla HTML consumers only set the size class on the checkbox itself."
        attributes={[
          {
            name: 'role="checkbox"',
            meaning: 'Schatten renders Radix Root which already provides the role',
            required: 'always (Radix-provided)',
          },
          {
            name: 'aria-checked',
            meaning: '"true" / "false" / "mixed" (mixed for indeterminate)',
            required: 'always',
          },
          {
            name: 'data-state',
            meaning: '"checked" / "unchecked" / "indeterminate" — drives the indicator visibility',
            required: 'always',
          },
          {
            name: 'aria-invalid="true"',
            meaning: 'Error state — CSS shifts border + bg-subtle + focus-ring',
            required: 'when in error',
          },
          {
            name: '<label for={id}>',
            meaning: 'Associates with the checkbox via id (the wrapper sees it)',
            required: 'when label present',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-6">
            <div className="st-checkbox-wrapper">
              {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's
               * Checkbox.Root output — vanilla HTML consumers replicate the
               * <button role="checkbox"> shape, not <input type="checkbox">. */}
              <button
                type="button"
                id="doc-cb-1"
                role="checkbox"
                aria-checked={false}
                data-state="unchecked"
                className="st-checkbox st-checkbox--md"
              >
                <span className="st-checkbox__indicator">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <label htmlFor="doc-cb-1" className="st-checkbox-wrapper__label">
                Unchecked
              </label>
            </div>
            <div className="st-checkbox-wrapper">
              {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
              <button
                type="button"
                id="doc-cb-2"
                role="checkbox"
                aria-checked={true}
                data-state="checked"
                className="st-checkbox st-checkbox--md"
              >
                <span className="st-checkbox__indicator">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <label htmlFor="doc-cb-2" className="st-checkbox-wrapper__label">
                Checked
              </label>
            </div>
            <div className="st-checkbox-wrapper">
              {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
              <button
                type="button"
                id="doc-cb-3"
                role="checkbox"
                aria-checked="mixed"
                data-state="indeterminate"
                className="st-checkbox st-checkbox--md"
              >
                <span className="st-checkbox__indicator">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </span>
              </button>
              <label htmlFor="doc-cb-3" className="st-checkbox-wrapper__label">
                Indeterminate
              </label>
            </div>
          </div>
        </div>
        <CodeBlock>{`<div class="st-checkbox-wrapper">
  <button type="button" id="terms"
          role="checkbox" aria-checked="false"
          data-state="unchecked"
          class="st-checkbox st-checkbox--md">
    <span class="st-checkbox__indicator">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
  </button>
  <label for="terms" class="st-checkbox-wrapper__label">Accept terms</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm (16px) | --md (20px) | --lg (24px) -->

<!-- Sub-elements -->
<!-- .st-checkbox-wrapper          — outer flex container (label sizing derived via :has) -->
<!-- .st-checkbox-wrapper__label   — internal <label> -->
<!-- .st-checkbox__indicator       — absolute-positioned check / minus icon
                                      (hidden via CSS when [data-state="unchecked"]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" / "indeterminate" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens (wrapper :has() also picks this up) -->`}</CodeBlock>
      </Section>

      <Section
        id="switch"
        title="Switch — .st-switch + .st-switch-wrapper"
        intro="On/off toggle. Same wrapper + block shape as Checkbox. The thumb's position and the check-icon's opacity are both driven by .st-switch[data-state='checked'] descendant selectors — no Tailwind 'group' utility on the JSX."
        attributes={[
          {
            name: 'role="switch"',
            meaning: 'Radix Root provides the role',
            required: 'always (Radix-provided)',
          },
          {
            name: 'aria-checked',
            meaning: '"true" / "false" — switches are binary',
            required: 'always',
          },
          {
            name: 'data-state',
            meaning: '"checked" / "unchecked" — drives thumb position + check icon visibility',
            required: 'always',
          },
          {
            name: 'aria-invalid="true"',
            meaning: 'Error state — CSS shifts border + bg + checked-state bg to error tokens',
            required: 'when in error',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-6">
            <div className="st-switch-wrapper">
              <button
                type="button"
                id="doc-sw-1"
                role="switch"
                aria-checked={false}
                data-state="unchecked"
                className="st-switch st-switch--md"
              >
                <span className="st-switch__check">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="st-switch__thumb" data-state="unchecked" />
              </button>
              <label htmlFor="doc-sw-1" className="st-switch-wrapper__label">
                Off
              </label>
            </div>
            <div className="st-switch-wrapper">
              <button
                type="button"
                id="doc-sw-2"
                role="switch"
                aria-checked={true}
                data-state="checked"
                className="st-switch st-switch--md"
              >
                <span className="st-switch__check">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="st-switch__thumb" data-state="checked" />
              </button>
              <label htmlFor="doc-sw-2" className="st-switch-wrapper__label">
                On
              </label>
            </div>
          </div>
        </div>
        <CodeBlock>{`<div class="st-switch-wrapper">
  <button type="button" id="notifications"
          role="switch" aria-checked="false"
          data-state="unchecked"
          class="st-switch st-switch--md">
    <span class="st-switch__check">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="…" fill="currentColor" />
      </svg>
    </span>
    <span class="st-switch__thumb" data-state="unchecked"></span>
  </button>
  <label for="notifications" class="st-switch-wrapper__label">Notifications</label>
</div>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg (track width × height pairs) -->

<!-- Sub-elements -->
<!-- .st-switch-wrapper          — outer flex container (cursor: pointer) -->
<!-- .st-switch-wrapper__label   — internal <label> -->
<!-- .st-switch__thumb           — sliding circle (translate driven by parent [data-state]) -->
<!-- .st-switch__check           — checkmark icon (opacity driven by parent [data-state]) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens -->`}</CodeBlock>
      </Section>

      <Section
        id="input"
        title="Input — .st-input-wrapper + .st-input"
        intro="Two blocks: the wrapper carries layout / border / bg / size modifier / focus-visible ring; the inner <input> is transparent and inherits font / color from the wrapper. State (error / read-only / disabled) is read off the inner input via :has() — vanilla HTML consumers set the matching HTML/ARIA attribute, never a modifier class. The wrapper-click-to-focus ergonomic is React-only — vanilla HTML consumers must click the <input> directly."
        attributes={[
          {
            name: 'aria-invalid="true"',
            meaning: 'Error state — CSS shifts border + bg-subtle + focus-ring via wrapper :has()',
            required: 'when in error',
          },
          {
            name: ':disabled / disabled',
            meaning: 'Disabled tokens propagate through :has(.st-input:disabled) on the wrapper',
            required: 'when disabled',
          },
          {
            name: ':read-only / readonly',
            meaning: 'Read-only tokens propagate through :has(.st-input:read-only) on the wrapper',
            required: 'when read-only',
          },
          {
            name: '<label for={id}>',
            meaning: 'Associates an external label with the input id (Field provides this)',
            required: 'when externally labelled',
          },
        ]}
      >
        <div className="space-y-3">
          <div className="st-input-wrapper st-input-wrapper--md w-80">
            <input type="email" id="doc-in-1" className="st-input" placeholder="you@example.com" />
          </div>
          <div className="st-input-wrapper st-input-wrapper--md w-80">
            <span className="st-input__text-left">$</span>
            <input type="text" id="doc-in-2" className="st-input" placeholder="0.00" />
            <span className="st-input__text-right">USD</span>
          </div>
          <div className="st-input-wrapper st-input-wrapper--md w-80">
            <input
              type="text"
              id="doc-in-3"
              className="st-input"
              aria-invalid="true"
              defaultValue="Invalid"
            />
          </div>
          <div className="st-input-wrapper st-input-wrapper--md w-80">
            <input
              type="text"
              id="doc-in-4"
              className="st-input"
              readOnly
              defaultValue="Read-only"
            />
          </div>
        </div>
        <CodeBlock>{`<div class="st-input-wrapper st-input-wrapper--md">
  <span class="st-input__text-left">$</span>
  <input type="text" id="amount" class="st-input" placeholder="0.00" />
  <span class="st-input__text-right">USD</span>
</div>

<!-- Modifier vocabulary -->
<!-- size (on the wrapper): --sm | --md | --lg -->
<!-- derived (on the input): --date  — type ∈ date / datetime-local / month / week / time -->

<!-- Sub-elements -->
<!-- .st-input-wrapper           — outer flex container (border + bg + size) -->
<!-- .st-input                   — inner <input> (transparent fill) -->
<!-- .st-input__text-left/-right — leading / trailing text adornment <span> -->
<!-- .st-input__icon-left/-right — leading / trailing Lucide/SVG icon -->

<!-- State attributes — set on the inner <input>, NOT a modifier class -->
<!-- [aria-invalid="true"]   — error styling on the wrapper via :has() -->
<!-- :disabled               — disabled tokens (wrapper :has picks it up) -->
<!-- :read-only              — read-only tokens (wrapper :has picks it up) -->

<!-- Precedence (CSS source order):
     default < [aria-invalid] < :read-only < :disabled
     The disabled visual wins over read-only over error, matching the
     legacy tailwind-merge precedence in Input.tsx. aria-invalid still
     stays on the element so screen readers see the error state. -->`}</CodeBlock>
      </Section>

      <Section
        id="textarea"
        title="Textarea — .st-textarea"
        intro="Single-element form input (no wrapper layer). State (error / read-only / disabled) is expressed as attributes on the textarea itself; the CSS encodes the precedence with source order."
        attributes={[
          {
            name: 'aria-invalid="true"',
            meaning: 'Error state — CSS shifts border + bg-subtle + focus-ring',
            required: 'when in error',
          },
          {
            name: ':disabled / disabled',
            meaning: 'Disabled tokens',
            required: 'when disabled',
          },
          {
            name: ':read-only / readonly',
            meaning: 'Read-only tokens',
            required: 'when read-only',
          },
        ]}
      >
        <div className="space-y-3 w-80">
          <textarea
            className="st-textarea st-textarea--md"
            rows={3}
            placeholder="Tell us about yourself"
          />
          <textarea
            className="st-textarea st-textarea--md"
            rows={3}
            aria-invalid="true"
            defaultValue="Error state"
          />
        </div>
        <CodeBlock>{`<textarea class="st-textarea st-textarea--md" rows="3"
          placeholder="Tell us about yourself"></textarea>

<!-- Modifier vocabulary -->
<!-- size: --sm | --md | --lg  (padding × paired font-size/line-height) -->

<!-- State attributes -->
<!-- [aria-invalid="true"]   — error styling -->
<!-- :disabled               — disabled tokens -->
<!-- :read-only              — read-only tokens -->

<!-- Precedence (CSS source order):
     default < [aria-invalid] < :read-only < :disabled -->`}</CodeBlock>
      </Section>

      <Section
        id="radio"
        title="Radio — .st-radio-group + .st-radio-wrapper + .st-radio"
        intro="Three blocks: the group root carries the layout container; each radio is wrapped in inline-flex for [radio] + <label>; the inner block is the Radix Item (the actual radio button). The label's font-size and the dot's size are both derived from the inner radio's size modifier via :has(). Unlike Checkbox, Radix Item Indicator UNMOUNTS when unchecked — vanilla HTML mirrors this by only rendering the indicator chain when checked."
        attributes={[
          {
            name: 'role="radiogroup"',
            meaning: 'On the .st-radio-group root (Radix provides on React side)',
            required: 'always',
          },
          {
            name: 'role="radio"',
            meaning: 'On each .st-radio (Radix Item provides on React side)',
            required: 'always',
          },
          {
            name: 'aria-checked',
            meaning: '"true" / "false" on each radio button',
            required: 'always',
          },
          {
            name: 'data-state',
            meaning:
              '"checked" / "unchecked" — drives the indicator presence (and any future state styling)',
            required: 'always',
          },
          {
            name: 'aria-invalid="true"',
            meaning: 'Error state — CSS shifts border + bg-subtle + focus-ring',
            required: 'when in error',
          },
        ]}
      >
        <div role="radiogroup" aria-label="doc-radio-example" className="st-radio-group">
          <div className="st-radio-wrapper">
            {/* biome-ignore lint/a11y/useSemanticElements: Mirrors Radix's
             * RadioGroup.Item output (<button role="radio">). */}
            <button
              type="button"
              id="doc-r-1"
              role="radio"
              aria-checked={false}
              data-state="unchecked"
              className="st-radio st-radio--md"
            />
            <label htmlFor="doc-r-1" className="st-radio-wrapper__label">
              Unchecked
            </label>
          </div>
          <div className="st-radio-wrapper">
            {/* biome-ignore lint/a11y/useSemanticElements: see preceding comment */}
            <button
              type="button"
              id="doc-r-2"
              role="radio"
              aria-checked={true}
              data-state="checked"
              className="st-radio st-radio--md"
            >
              <span className="st-radio__indicator">
                <span className="st-radio__dot" />
              </span>
            </button>
            <label htmlFor="doc-r-2" className="st-radio-wrapper__label">
              Checked
            </label>
          </div>
        </div>
        <CodeBlock>{`<div role="radiogroup" aria-label="Pick one" class="st-radio-group">
  <div class="st-radio-wrapper">
    <button type="button" id="opt-a"
            role="radio" aria-checked="false"
            data-state="unchecked"
            class="st-radio st-radio--md"></button>
    <label for="opt-a" class="st-radio-wrapper__label">Option A</label>
  </div>
  <div class="st-radio-wrapper">
    <button type="button" id="opt-b"
            role="radio" aria-checked="true"
            data-state="checked"
            class="st-radio st-radio--md">
      <span class="st-radio__indicator">
        <span class="st-radio__dot"></span>
      </span>
    </button>
    <label for="opt-b" class="st-radio-wrapper__label">Option B</label>
  </div>
</div>

<!-- Modifier vocabulary -->
<!-- size (on .st-radio): --sm (16px) | --md (20px) | --lg (24px) -->

<!-- Sub-elements -->
<!-- .st-radio-group            — group root (flex column with gap) -->
<!-- .st-radio-wrapper          — per-radio flex container (label sizing via :has) -->
<!-- .st-radio-wrapper__label   — internal <label> -->
<!-- .st-radio__indicator       — absolute-positioned flex container around the dot
                                  (render ONLY when [data-state="checked"]; Radix unmounts on uncheck) -->
<!-- .st-radio__dot             — the visible dot (currentColor, size paired with radio) -->

<!-- State attributes -->
<!-- [data-state]      — "checked" / "unchecked" -->
<!-- [aria-invalid]    — error styling -->
<!-- :disabled         — disabled tokens (wrapper :has() also picks this up for label) -->`}</CodeBlock>
      </Section>

      <p className="st-text st-text--body st-text--sm st-text--subtle mt-8">
        Coming in subsequent sweeps: Select / Tooltip (sweep-5), Toast / Dialog (sweep-6), Field /
        FieldSet (sweep-7).
      </p>
    </div>
  ),
}
