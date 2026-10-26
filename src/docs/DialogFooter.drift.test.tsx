import { readFileSync } from 'node:fs'
import { render } from '@testing-library/react'
import * as ts from 'typescript'
import { describe, expect, it } from 'vitest'
import { Dialog } from '../components/lv1/Dialog'
import { dialogFooterHtml } from './__fixtures__/cssApiSamples.html'

/*
 * Dialog footer markup drift guard (#575).
 *
 * The Dialog footer's visual order comes from `order` on four sub-element
 * classes, applied to children written in focus order (action → cancel →
 * separator → sub-action). That markup lives in three places:
 *
 *   - React          — `Dialog.tsx` (the source of truth)
 *   - dist fixture   — `dialogFooterHtml`, rendered Tailwind-free by
 *                      `CSSApiDist.vrt.spec.ts`
 *   - docs snippet   — the vanilla HTML in the CSS API `Reference` story
 *
 * The dist VRT only sees the fixture, and the docs snippet is a code block
 * nobody renders as markup, so a change to one of them would not reach the
 * others. Unifying them is not an option: the snippet is simplified for
 * readers (no `st-btn__*` inner spans) and sits in the `reference-*`
 * screenshot, so any edit to its text forces a re-baseline. Instead, this
 * test pins that all three emit the same footer children, in the same order,
 * with the same classes.
 *
 * The story is read as TEXT through the TypeScript AST (never imported),
 * like CSSApi.coverage.test.ts.
 */

type Footer = string[][]

/** Class list of each `.st-dialog__footer` child, in DOM order (classes sorted). */
function footerOf(root: ParentNode): Footer {
  const footer = root.querySelector('.st-dialog__footer')
  if (!footer) throw new Error('no .st-dialog__footer')
  return Array.from(footer.children).map((child) => Array.from(child.classList).sort())
}

function parseHtml(html: string): Footer {
  const host = document.createElement('div')
  host.innerHTML = html
  return footerOf(host)
}

/** The vanilla HTML snippet in the Reference story that contains the Dialog footer. */
function storySnippet(): string {
  const path = 'src/docs/CSSApi.stories.tsx'
  const source = ts.createSourceFile(
    path,
    readFileSync(path, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  const found: string[] = []
  const visit = (node: ts.Node) => {
    if (
      ts.isNoSubstitutionTemplateLiteral(node) &&
      node.text.includes('class="st-dialog__footer"')
    ) {
      found.push(node.text)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  expect(found).toHaveLength(1)
  return found[0]
}

function reactFooter(): Footer {
  render(
    <Dialog
      isOpen
      onOpenChange={() => {}}
      title="Delete project?"
      actionButton={{ label: 'Confirm', onClick: () => {} }}
      cancelButton={{ label: 'Cancel' }}
      subActionButton={{ label: 'Delete', onClick: () => {} }}
    />,
  )
  // Dialog content is portaled into document.body.
  return footerOf(document.body)
}

describe('Dialog footer markup (drift guard)', () => {
  it('renders all four footer children from React, in focus order', () => {
    const order = reactFooter().map((classes) => classes.find((c) => c.startsWith('st-dialog__')))
    expect(order).toEqual([
      'st-dialog__action',
      'st-dialog__cancel',
      'st-dialog__separator',
      'st-dialog__sub-action',
    ])
  })

  it('keeps the dist fixture in step with React', () => {
    expect(parseHtml(dialogFooterHtml)).toEqual(reactFooter())
  })

  it('keeps the CSS API Reference snippet in step with React', () => {
    expect(parseHtml(storySnippet())).toEqual(reactFooter())
  })
})
