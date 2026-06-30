// no-primitive-color — oxlint JS plugin (ESLint-compatible API)
//
// Port of the former Biome GritQL plugin (biome-plugins/no-primitive-color.grit).
// Bans Tailwind *primitive* color utility classes (`bg-red-500`,
// `text-gray-700`, `border-blue-300`, `ring-vermillion-600`, …) inside
// component JSX. Components must consume Layer-2 *semantic* tokens
// (`bg-error`, `text-foreground-muted`, `bg-surface`, …).
//
// Contract: .claude/rules/state-token-guideline.md
// Issue:    https://github.com/yasmro/schatten/issues/122
//
// ── Difference from the GritQL original ─────────────────────────────
// GritQL could not match a JSX attribute by name, so it regex-scanned the
// whole attribute list of every element. The ESLint visitor API CAN target
// the attribute directly, so this version visits only `className` /
// `class` attributes — narrower span, fewer false positives, and the
// diagnostic points at the className value rather than the whole element.
//
// ── Suppressing ─────────────────────────────────────────────────────
//   // oxlint-disable-next-line schatten/no-primitive-color -- <reason>

const PRIMITIVE_COLOR_RE =
  /\b(?:bg|text|border|ring)-(?:red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|grey|zinc|neutral|stone|sumi|vermillion)-[0-9]{2,3}\b/

const MESSAGE =
  'Primitive color utility class (e.g. `bg-red-500`, `text-gray-700`) is not allowed in ' +
  'component JSX. Use a semantic token instead — state: `bg-error` / `bg-success-subtle`, ' +
  'foreground: `text-foreground-muted`, surface: `bg-surface`. ' +
  'See .claude/rules/state-token-guideline.md. To keep a primitive class intentionally, add ' +
  '`// oxlint-disable-next-line schatten/no-primitive-color -- <reason>`.'

/** @type {import('oxlint').Plugin} */
const plugin = {
  meta: { name: 'schatten' },
  rules: {
    'no-primitive-color': {
      meta: {
        type: 'problem',
        docs: { description: 'Disallow Tailwind primitive color classes in component JSX.' },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            const attrName = node.name && node.name.name
            if (attrName !== 'className' && attrName !== 'class') return
            // Scan the full attribute value text: covers both a string
            // literal (`className="bg-red-500"`) and an expression
            // container (`className={cn('bg-red-500', …)}`).
            const text = context.sourceCode.getText(node.value)
            if (PRIMITIVE_COLOR_RE.test(text)) {
              context.report({ node: node.value, message: MESSAGE })
            }
          },
        }
      },
    },
  },
}

export default plugin
