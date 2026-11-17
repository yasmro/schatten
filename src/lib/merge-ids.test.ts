import { describe, expect, it } from 'vitest'
import { mergeIds } from './merge-ids'

describe('mergeIds', () => {
  it('joins the lists in the order given', () => {
    expect(mergeIds('field-description', 'extra')).toBe('field-description extra')
  })

  it('splits a list that holds several ids', () => {
    expect(mergeIds('field-description field-error', 'extra')).toBe(
      'field-description field-error extra',
    )
  })

  it('keeps only the first of a duplicated id', () => {
    expect(mergeIds('a b', 'b c')).toBe('a b c')
  })

  it('drops undefined and empty lists', () => {
    expect(mergeIds(undefined, '', '  extra  ')).toBe('extra')
  })

  it('returns undefined when no id is left', () => {
    expect(mergeIds(undefined, '')).toBeUndefined()
  })
})
