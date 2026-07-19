// Landing copy, both locales. Strings that carry inline markup (<code>…</code>)
// are marked `Html` and injected with `set:html` — they are authored constants,
// never user input.
export const locales = ['ja', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ja'

type Html = string

interface Strings {
  metaDescription: string
  heroTitle: string
  heroLead: Html
  ctaGetStarted: string
  ctaStorybook: string
  proofTitle: string
  proofDesc: string
  proofRenderLabel: string
  proofRenderButton: string
  proofFooter: Html
  seasonsTitle: string
  seasonsLead: Html
  seasonNames: readonly [string, string, string, string, string, string, string, string]
  calloutNote: Html
  langSwitchLabel: string
  themeToggleLabel: string
}

export const ui: Record<Locale, Strings> = {
  ja: {
    metaDescription:
      'Schatten design system — React コンポーネントと framework-agnostic な CSS クラス API を、ひとつのトークン基盤の上で。',
    heroTitle: '陰影のあるインターフェースを、ふたつの配信層で。',
    heroLead:
      'Schatten は React コンポーネントと framework-agnostic な <code>.st-*</code> クラス API を、同じデザイントークンの上で提供するデザインシステムです。このページ自体が後者の生きた証明 — React ゼロ、<code>dist/schatten.css</code> だけで描画されています。',
    ctaGetStarted: 'Get started',
    ctaStorybook: 'Storybook を見る',
    proofTitle: 'ひとつのボタン、ふたつの書き方',
    proofDesc: 'React でも、素の HTML でも、届く CSS は同じ 1 枚 — だから描画も同じです。',
    proofRenderLabel: 'Render(このページの実物)',
    proofRenderButton: '保存',
    proofFooter:
      'この見本を描画しているのも、いま読んでいるページ全体と同じ <code>dist/schatten.css</code> です。',
    seasonsTitle: '8 つの季節、ひとつの明度設計',
    seasonsLead:
      'Special テーマは <code>--color-theme-*</code> のランプだけを差し替え、明度の梯子は全季節で共有します。コントラスト構造を壊さずに、季節が色だけを運ぶ — <code>data-theme</code> ひとつで切り替わる設計です。',
    seasonNames: ['春・早', '春・晩', '夏・早', '夏・盛', '秋・早', '秋・晩', '冬・早', '冬・深'],
    calloutNote:
      'ダークモードは OS 設定に追従します(<code>prefers-color-scheme</code>)。この切り替えもトークン層の仕事で、ページ側のコードはゼロです。',
    langSwitchLabel: 'English',
    themeToggleLabel: 'ライト / ダークを切り替え',
  },
  en: {
    metaDescription:
      'Schatten design system — React components and a framework-agnostic CSS class API on one token foundation.',
    heroTitle: 'Interfaces with shadow, shipped in two layers.',
    heroLead:
      'Schatten is a design system that ships React components and a framework-agnostic <code>.st-*</code> class API on the same design tokens. This page is living proof of the latter — zero React, painted by <code>dist/schatten.css</code> alone.',
    ctaGetStarted: 'Get started',
    ctaStorybook: 'View Storybook',
    proofTitle: 'One button, two ways to write it',
    proofDesc: 'React or plain HTML — the same single stylesheet arrives, so the render is identical.',
    proofRenderLabel: 'Render (live on this page)',
    proofRenderButton: 'Save',
    proofFooter:
      'This sample is painted by the same <code>dist/schatten.css</code> as the page you are reading.',
    seasonsTitle: 'Eight seasons, one lightness ladder',
    seasonsLead:
      'A Special theme swaps only the <code>--color-theme-*</code> ramp; the lightness ladder is shared by every season. Color moves, the contrast structure does not — switched by a single <code>data-theme</code>.',
    seasonNames: [
      'Early spring',
      'Late spring',
      'Early summer',
      'Peak summer',
      'Early autumn',
      'Late autumn',
      'Early winter',
      'Deep winter',
    ],
    calloutNote:
      'Dark mode follows the OS setting (<code>prefers-color-scheme</code>). That switch is the token layer’s job too — zero page-side code.',
    langSwitchLabel: '日本語',
    themeToggleLabel: 'Toggle light / dark mode',
  },
}

/** Route prefix for a locale (`/` for the default locale, `/en/` otherwise). */
export const localePath = (locale: Locale): string => (locale === defaultLocale ? '/' : `/${locale}/`)
