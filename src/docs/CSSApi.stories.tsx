// Component CSS for vanilla examples — loaded for the side-effect.
import '../components/lv1/Icon/Icon.css'
import '../components/lv1/Separator/Separator.css'
import '../components/lv1/Text/Text.css'

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
 *   `[data-state]`, `[data-orientation]`, …).
 * - Pixel parity between the React side and the vanilla HTML side is
 *   verified per-component in each `{Component}.parity.stories.tsx` and
 *   pinned by `{Component}.parity.vrt.spec.ts`.
 *
 * **Coverage today**: sweep-1 of #154 — Separator, Text, Icon. The
 * remaining 15 lv1 components arrive in sweep-2 through sweep-7 and will
 * be added here as each sweep lands.
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
  name: 'Reference (sweep-1)',
  render: () => (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="st-text st-text--heading st-text--2xl st-text--default mb-2">
        CSS API — sweep-1 reference
      </h1>
      <p className="st-text st-text--body st-text--md st-text--muted mb-8">
        The classes below are emitted by `dist/schatten.css`. Import it once and the markup samples
        render with no React and no consumer Tailwind setup.
      </p>

      <Section
        id="separator"
        title="Separator — .st-separator"
        intro="Visual divider. Orientation comes from the data-orientation attribute (no --horizontal / --vertical modifier)."
        attributes={[
          {
            name: 'data-orientation',
            meaning: '"horizontal" or "vertical"',
            required: 'always',
          },
          {
            name: 'role',
            meaning: '"separator" for semantic dividers, "none" / omit for decorative',
            required: 'when-applicable',
          },
          {
            name: 'aria-orientation',
            meaning: 'Mirrors data-orientation for assistive tech (only for role="separator")',
            required: 'when-applicable',
          },
        ]}
      >
        <div className="w-72 space-y-3">
          <span className="st-text st-text--body st-text--sm st-text--muted">Above</span>
          <div className="st-separator" data-orientation="horizontal" role="none" />
          <span className="st-text st-text--body st-text--sm st-text--muted">Below</span>
        </div>
        <CodeBlock>{`<div class="st-separator" data-orientation="horizontal" role="none"></div>`}</CodeBlock>
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

      <p className="st-text st-text--body st-text--sm st-text--subtle mt-8">
        Coming in subsequent sweeps: Spinner / Badge / Callout (sweep-2), Button / Checkbox / Switch
        (sweep-3), Input / Textarea / Radio (sweep-4), Select / Tooltip (sweep-5), Toast / Dialog
        (sweep-6), Field / FieldSet (sweep-7).
      </p>
    </div>
  ),
}
