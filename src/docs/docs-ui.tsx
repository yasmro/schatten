import type { ReactNode } from 'react'

/*
 * Shared prose primitives for the docs stories under `Tokens/*` and
 * `Patterns/*` (Spacing, Elevation, Iconography, Accessibility, …). These carry
 * no public API surface — they exist only to keep the docs pages typographically
 * consistent without each page re-declaring the same helpers.
 *
 * This file is NOT a `*.stories.tsx`, so Storybook does not load it as stories
 * (`.storybook/main.ts` globs `*.stories.@(ts|tsx)` only). It is plain JSX
 * imported by the story files.
 */

export const PageTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="text-4xl font-bold text-foreground mb-4">{children}</h1>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-foreground mt-8 mb-2">{children}</h2>
)

export const SubsectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground mt-6 mb-3">{children}</h3>
)

export const Lead = ({ children }: { children: ReactNode }) => (
  <p className="text-base text-foreground-muted leading-relaxed mb-8">{children}</p>
)

export const Note = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-foreground-muted mb-3">{children}</p>
)

const codeBlockClasses =
  'my-3 overflow-x-auto whitespace-pre rounded-lg border border-border bg-surface p-4 font-mono text-sm text-foreground'

/** Monospace code sample box, framework-agnostic (no syntax highlighting needed for short snippets). */
export const CodeBlock = ({ children }: { children: ReactNode }) => (
  // biome-ignore lint/a11y/noNoninteractiveTabindex: horizontally scrollable code block — keyboard users need focus to scroll it (axe scrollable-region-focusable)
  <pre tabIndex={0} className={codeBlockClasses}>
    {children}
  </pre>
)

export type DocsTableRow = { key: string; cells: ReactNode[] }

/*
 * Shared docs-prose table. Bakes in `<th scope="col">` + thead/tbody so the
 * column-header association can't drift: axe's WCAG 2.1 A/AA tags do NOT flag a
 * missing `scope`, so this STRUCTURE — not a per-page a11y spec — is the
 * enforcement (the policy decision in #384). A contributor cannot add a docs
 * table without `scope` because they go through this component, not raw
 * `<table>`. See `.claude/rules/vrt-spec-guideline.md` "docs page tables and a11y".
 */
export const DocsTable = ({
  headers,
  rows,
  caption,
}: {
  headers: string[]
  rows: DocsTableRow[]
  /** Optional accessible table name, rendered as a visually-hidden <caption>. */
  caption?: string
}) => (
  <div className="overflow-x-auto mb-4">
    <table className="w-full text-sm border-collapse">
      {caption ? <caption className="sr-only">{caption}</caption> : null}
      <thead>
        <tr className="border-b border-border">
          {headers.map((h) => (
            <th
              key={h}
              scope="col"
              className="text-left font-semibold text-foreground py-2 pr-4 align-top"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className="border-b border-border last:border-b-0 align-top">
            {row.cells.map((cell, idx) => (
              <td key={headers[idx]} className="py-2 pr-4 text-foreground-muted">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
