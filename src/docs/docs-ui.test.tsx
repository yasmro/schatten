import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DocsTable } from './docs-ui'

/*
 * DocsTable is a docs-only prose helper (no public API surface). The single
 * contract worth pinning is its a11y STRUCTURE: every column header carries
 * `scope="col"`. This is the enforcement chosen in #384 over a per-page axe
 * spec, precisely because axe's WCAG 2.1 A/AA tags do NOT flag a missing
 * `scope` — so a screenshot/axe pass would not catch the drift this test does.
 */
describe('DocsTable', () => {
  it('renders every column header with scope="col"', () => {
    render(
      <DocsTable
        headers={['Token', 'Meaning']}
        rows={[{ key: 'r', cells: ['--color-error', 'error state'] }]}
      />,
    )
    const headers = screen.getAllByRole('columnheader')
    expect(headers).toHaveLength(2)
    for (const th of headers) {
      expect(th).toHaveAttribute('scope', 'col')
    }
  })

  it('maps each row cell to a data cell under the matching header', () => {
    render(
      <DocsTable
        headers={['A', 'B']}
        rows={[
          { key: 'r1', cells: ['a1', 'b1'] },
          { key: 'r2', cells: ['a2', 'b2'] },
        ]}
      />,
    )
    expect(screen.getAllByRole('row')).toHaveLength(3) // 1 header row + 2 body rows
    expect(screen.getAllByRole('cell')).toHaveLength(4)
    expect(screen.getByText('b2')).toBeInTheDocument()
  })

  it('exposes an accessible table name when caption is provided', () => {
    render(
      <DocsTable
        caption="State tokens"
        headers={['Token']}
        rows={[{ key: 'r', cells: ['--color-error'] }]}
      />,
    )
    expect(screen.getByRole('table', { name: 'State tokens' })).toBeInTheDocument()
  })
})
