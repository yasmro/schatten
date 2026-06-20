/**
 * Welcome-page link manifests. These live in a plain `.ts` module — NOT in
 * `Welcome.stories.tsx` — so Storybook's CSF scanner never mistakes them for
 * stories and leaks a bogus sidebar entry. Both the Welcome story render and
 * `Welcome.drift.test.ts` import from here.
 */

/**
 * One internal deep link rendered on the Welcome page. This is the SSOT the
 * card render and `Welcome.drift.test.ts` both consume — the test reconciles
 * each entry's `slug` / `suffix` / `viewMode` against the target story module
 * so a title or export rename can no longer silently break the link.
 *
 * - `slug`     target module's `sanitize(meta.title)`
 * - `suffix`   target export-derived id suffix (`sanitize(storyNameFromExport(export))`)
 * - `viewMode` Storybook entry kind: `'docs'` for autodocs, `'story'` for Canvas
 *   (a mismatch renders "No Preview" — #377)
 * - `section`  which Welcome section renders this card (drift test ignores it)
 */
export interface WelcomeDeepLink {
  slug: string
  suffix: string
  viewMode: 'docs' | 'story'
  section: 'engineering' | 'tokens' | 'patterns'
  title: string
  description: string
}

export const WELCOME_DEEP_LINKS: readonly WelcomeDeepLink[] = [
  {
    slug: 'css-api-overview',
    suffix: 'reference',
    viewMode: 'story',
    section: 'engineering',
    title: 'Framework-agnostic CSS API',
    description:
      'Components ship a .st-* BEM class API and a prebuilt stylesheet, so they render with plain HTML — no React, no Tailwind, no build step required on the consumer side.',
  },
  {
    slug: 'theming-theme-audit',
    suffix: 'overview',
    viewMode: 'story',
    section: 'engineering',
    title: 'Mode × Special theming',
    description:
      'Two independent theme axes — light/dark Mode × an exclusive seasonal Special — compose at runtime through CSS variables. See all 16 combinations verified side by side.',
  },
  {
    slug: 'theming-seasonal-showcase',
    suffix: 'eight-seasons',
    viewMode: 'story',
    section: 'engineering',
    title: 'Seasonal showcase',
    description:
      'Eight palettes based on the 24 solar terms re-tint every solid surface at runtime — see all eight seasons worn by buttons, badges, and a full dashboard mockup.',
  },
  {
    slug: 'patterns-accessibility',
    suffix: 'overview',
    viewMode: 'story',
    section: 'engineering',
    title: 'Accessibility contract',
    description:
      'Every primitive guarantees a role, an accessible name, keyboard support, and aria-* wiring — asserted with axe-core in CI alongside the visual regression suite.',
  },
  {
    slug: 'tokens-color',
    suffix: 'colors',
    viewMode: 'story',
    section: 'tokens',
    title: 'Color',
    description: 'Color tokens and scales.',
  },
  {
    slug: 'tokens-typography',
    suffix: 'typography',
    viewMode: 'story',
    section: 'tokens',
    title: 'Typography',
    description: 'Font scales and text styles.',
  },
  {
    slug: 'patterns-accessibility',
    suffix: 'overview',
    viewMode: 'story',
    section: 'patterns',
    title: 'Accessibility',
    description:
      'Focus visibility, ARIA conventions, contrast, and keyboard support — the contract every primitive satisfies.',
  },
  {
    slug: 'patterns-composition-with-aschild',
    suffix: 'button-as-link',
    viewMode: 'story',
    section: 'patterns',
    title: 'Composition with asChild',
    description:
      'Rendering Button as a link, buttonVariants() on your own element, and Text polymorphism.',
  },
  {
    slug: 'patterns-form-composition',
    suffix: 'basic-field',
    viewMode: 'story',
    section: 'patterns',
    title: 'Form Composition',
    description: 'Wiring Field and FieldSet: labels, descriptions, and error messages.',
  },
  {
    slug: 'patterns-form-states',
    suffix: 'audit',
    viewMode: 'story',
    section: 'patterns',
    title: 'Form States',
    description: 'disabled / readOnly / error across every form control, audited side by side.',
  },
  {
    slug: 'patterns-layout',
    suffix: 'flex-recipes',
    viewMode: 'story',
    section: 'patterns',
    title: 'Layout',
    description: 'Flex and grid recipes for arranging primitives on the page.',
  },
  {
    slug: 'patterns-testing',
    suffix: 'overview',
    viewMode: 'story',
    section: 'patterns',
    title: 'Testing',
    description: 'data-testid pass-through and role-first queries for consumer test suites.',
  },
]

/**
 * The `storyPath` slugs the `ComponentCard`s link to (viewMode `'docs'`,
 * suffix `'docs'`). Kept here as the SSOT so `Welcome.drift.test.ts` can
 * assert each resolves to an lv1 module that actually carries autodocs — the
 * `--docs` entry only exists when the component is autodocs-tagged. The card
 * JSX (live previews) stays inline; the test pins the const against the
 * storyPaths actually wired into the cards.
 */
export const WELCOME_COMPONENT_SLUGS = [
  'components-lv1-button',
  'components-lv1-badge',
  'components-lv1-spinner',
  'components-lv1-text',
  'components-lv1-tooltip',
  'components-lv1-toast',
  'components-lv1-callout',
  'components-lv1-field',
  'components-lv1-fieldset',
  'components-lv1-input',
  'components-lv1-textarea',
  'components-lv1-select',
  'components-lv1-checkbox',
  'components-lv1-radio',
  'components-lv1-switch',
] as const
