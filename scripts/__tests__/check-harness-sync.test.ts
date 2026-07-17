import { describe, expect, it } from 'vitest'
import { diffHarnessSlugs, parseHarnessSlugs } from '../check-harness-sync.mjs'

// Unit tests for the pure helpers behind the `check:harness` gate. Feeding
// them string fixtures keeps the assertions independent of the real harness —
// the CI script itself is what wires them to `examples/vanilla-html/index.html`
// and `discoverLv1()` at the integration layer.

describe('parseHarnessSlugs', () => {
  it('collects every data-component slug in the source', () => {
    const source = `
      <div class="demo-sample" data-component="button">…</div>
      <div class="demo-sample" data-component="dialog">…</div>
      <div class="demo-sample" data-component="dropdownmenu">…</div>
    `
    expect(parseHarnessSlugs(source)).toEqual(new Set(['button', 'dialog', 'dropdownmenu']))
  })

  it('dedupes repeated slugs', () => {
    const source = '<i data-component="button"></i><i data-component="button"></i>'
    expect(parseHarnessSlugs(source)).toEqual(new Set(['button']))
  })

  it('returns an empty set when no marker is present', () => {
    expect(parseHarnessSlugs('<html><body>no markers</body></html>')).toEqual(new Set())
  })
})

describe('diffHarnessSlugs', () => {
  it('reports nothing when the sets match', () => {
    const { missing, orphaned } = diffHarnessSlugs(
      ['button', 'dialog'],
      new Set(['dialog', 'button']),
    )
    expect(missing).toEqual([])
    expect(orphaned).toEqual([])
  })

  it('reports an lv1 without a harness sample as missing (the PR #488 drift)', () => {
    const { missing, orphaned } = diffHarnessSlugs(
      ['button', 'dialog', 'dropdownmenu'],
      new Set(['button']),
    )
    expect(missing).toEqual(['dialog', 'dropdownmenu'])
    expect(orphaned).toEqual([])
  })

  it('reports a harness sample without an lv1 directory as orphaned', () => {
    const { missing, orphaned } = diffHarnessSlugs(
      ['button'],
      new Set(['button', 'ghost-component']),
    )
    expect(missing).toEqual([])
    expect(orphaned).toEqual(['ghost-component'])
  })

  it('sorts both lists for stable output', () => {
    const { missing, orphaned } = diffHarnessSlugs(
      ['b-comp', 'a-comp'],
      new Set(['z-orphan', 'y-orphan']),
    )
    expect(missing).toEqual(['a-comp', 'b-comp'])
    expect(orphaned).toEqual(['y-orphan', 'z-orphan'])
  })
})
