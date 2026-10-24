import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { describe, expect, it } from 'vitest'

// Pins the files deploy-pages-root.yml ships to the Pages root (#563): the
// router, the redirect stubs for the retired /schatten/site/, and the 404
// fallback. None of them is built or exercised by any other gate — a deleted
// stub or a retargeted router would only surface as a dead link after the
// next deploy. The inline <script>s are run against a fake `location`, so the
// assertions cover the actual redirect, not a regex over the markup.

const ROOT = join(__dirname, '../../.github/pages-root')
const NEW_SITE = 'https://yasmro.github.io/schatten-site/'

/** The six pages of the retired site (en + ja × index / brand / components). */
const OLD_SITE_PAGES = ['', 'brand/', 'components/', 'ja/', 'ja/brand/', 'ja/components/']

function read(path: string) {
  return readFileSync(join(ROOT, path), 'utf8')
}

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? listFiles(full) : [full]
  })
}

function inlineScript(html: string) {
  const match = html.match(/<script>([\s\S]*?)<\/script>/)
  if (!match) throw new Error('no inline <script>')
  return match[1]
}

/** Runs a page's inline script and returns the URL it redirected to (or null). */
function redirectOf(html: string, location: { pathname?: string; search?: string; hash?: string }) {
  let target: string | null = null
  const fakeLocation = {
    pathname: '/',
    search: '',
    hash: '',
    ...location,
    replace: (url: string) => {
      target = url
    },
  }
  new Function('location', inlineScript(html))(fakeLocation)
  return target
}

describe('pages-root router (index.html)', () => {
  const html = read('index.html')

  it('sends visitors without ?path= to schatten-site', () => {
    expect(redirectOf(html, { search: '' })).toBe(NEW_SITE)
  })

  it('sends ?path= Storybook deep links to storybook/', () => {
    expect(redirectOf(html, { search: '?path=/docs/x' })).toBe('storybook/?path=/docs/x')
  })

  it('falls back to schatten-site without JavaScript', () => {
    expect(html).toContain(
      `<noscript><meta http-equiv="refresh" content="0; url=${NEW_SITE}"></noscript>`,
    )
  })
})

describe('site/ redirect stubs', () => {
  it('has exactly one stub per page of the retired site', () => {
    const stubs = listFiles(join(ROOT, 'site')).map((f) => relative(join(ROOT, 'site'), f))
    expect(stubs.sort()).toEqual(OLD_SITE_PAGES.map((p) => `${p}index.html`).sort())
  })

  describe.each(OLD_SITE_PAGES)('site/%sindex.html', (page) => {
    // Read lazily: a deleted stub should fail its own tests (and the
    // inventory test above), not abort collection of the whole file.
    const html = () => read(`site/${page}index.html`)
    const target = `${NEW_SITE}${page}`

    it('points canonical at the same path on schatten-site', () => {
      expect(html()).toContain(`<link rel="canonical" href="${target}">`)
    })

    it('falls back to a meta refresh to the same path', () => {
      expect(html()).toContain(`<meta http-equiv="refresh" content="0; url=${target}">`)
    })

    it('redirects to the same path, keeping query and hash', () => {
      expect(redirectOf(html(), { search: '?a=1', hash: '#x' })).toBe(`${target}?a=1#x`)
    })
  })
})

describe('404.html', () => {
  const html = read('404.html')

  it('maps any other /schatten/site/<rest> URL onto schatten-site', () => {
    expect(
      redirectOf(html, { pathname: '/schatten/site/_astro/app.js', search: '?v=2', hash: '#h' }),
    ).toBe(`${NEW_SITE}_astro/app.js?v=2#h`)
  })

  it('leaves missing paths outside /schatten/site/ alone', () => {
    expect(redirectOf(html, { pathname: '/schatten/storybook/missing' })).toBeNull()
    expect(redirectOf(html, { pathname: '/schatten/sitemap.xml' })).toBeNull()
  })
})

describe('deploy-pages-root.yml', () => {
  const workflow = readFileSync(
    join(__dirname, '../../.github/workflows/deploy-pages-root.yml'),
    'utf8',
  )
  const cleanExclude = workflow.match(/clean-exclude: \|\n((?: {12}\S.*\n?)+)/)?.[1]

  it('protects only the directories other workflows own', () => {
    // site/ must NOT be excluded: the clean is what replaces the old site
    // build left on gh-pages with the stubs above.
    expect(
      cleanExclude
        ?.split('\n')
        .map((l) => l.trim())
        .filter(Boolean),
    ).toEqual(['storybook', 'pr'])
  })
})
