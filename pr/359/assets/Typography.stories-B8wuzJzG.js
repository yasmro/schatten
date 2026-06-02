import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{n,t as r}from"./Text-DJ5gcrz8.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Tokens/Typography`,parameters:{layout:`fullscreen`}},o=({children:e})=>(0,i.jsx)(`h2`,{className:`text-2xl font-bold text-foreground mt-8 mb-2`,children:e}),s=({children:e})=>(0,i.jsx)(`h3`,{className:`text-base font-semibold text-foreground mt-6 mb-3`,children:e}),c=({label:e,token:t,value:n,style:r})=>(0,i.jsxs)(`div`,{className:`flex items-baseline gap-4 py-2 border-b border-border last:border-b-0`,children:[(0,i.jsx)(`span`,{className:`shrink-0 w-32 text-sm text-foreground`,style:r,children:e}),(0,i.jsx)(`span`,{className:`shrink-0 text-xs text-foreground-muted font-mono`,children:t}),(0,i.jsx)(`span`,{className:`text-xs text-foreground-muted ml-auto`,children:n})]}),l=({name:e,description:t,variant:n,size:a,sampleText:o,sampleTextJa:s})=>(0,i.jsxs)(`div`,{className:`py-4 border-b border-border last:border-b-0`,children:[(0,i.jsx)(r,{variant:n,size:a,className:`mb-1`,children:o}),(0,i.jsx)(r,{variant:n,size:a,className:`mb-2`,children:s}),(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsx)(`span`,{className:`text-xs font-medium text-foreground font-mono`,children:e}),(0,i.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:t})]})]}),u={name:`Typography`,render:()=>(0,i.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,i.jsx)(`h1`,{className:`text-4xl font-bold text-foreground mb-4`,children:`Typography`}),(0,i.jsxs)(`p`,{className:`text-base text-foreground-muted leading-relaxed mb-8`,children:[`Schatten's typography system provides consistent text styling across the design system. Each named role — Heading, Body, and Label — bundles font size, line height, and weight into a single `,(0,i.jsx)(`code`,{children:`.st-text`}),` class (used here via the `,(0,i.jsx)(`code`,{children:`<Text>`}),`component), so text styles are applied consistently without manual configuration.`]}),(0,i.jsx)(o,{children:`Font families`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsxs)(`div`,{className:`py-4 border-b border-border`,children:[(0,i.jsx)(`p`,{className:`font-sans text-xl text-foreground mb-1`,children:`Hanken Grotesk — The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(`p`,{className:`font-sans text-xl text-foreground-muted mb-1`,children:`LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:`--font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:`Default typeface for UI and body text.`})]}),(0,i.jsxs)(`div`,{className:`py-4 border-b border-border`,children:[(0,i.jsx)(`p`,{className:`font-serif text-xl text-foreground mb-1`,children:`The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:`--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:`Serif fallback for editorial content.`})]}),(0,i.jsxs)(`div`,{className:`py-4`,children:[(0,i.jsx)(`p`,{className:`font-mono text-xl text-foreground mb-1`,children:`The quick brown fox jumps over the lazy dog.`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:`--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`}),(0,i.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:`Monospace for code and technical content.`})]})]}),(0,i.jsx)(o,{children:`Type scale`}),(0,i.jsx)(s,{children:`Heading`}),(0,i.jsx)(`p`,{className:`text-sm text-foreground-muted mb-3`,children:`Used for page titles, section headers, and card headings. Uses semibold/bold weight with snug/tight line height.`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(l,{name:`heading-2xl`,description:`Display titles`,variant:`heading`,size:`2xl`,sampleText:`Display Title`,sampleTextJa:`表示タイトル`}),(0,i.jsx)(l,{name:`heading-xl`,description:`Page titles`,variant:`heading`,size:`xl`,sampleText:`Page Title`,sampleTextJa:`ページタイトル`}),(0,i.jsx)(l,{name:`heading-lg`,description:`Section titles`,variant:`heading`,size:`lg`,sampleText:`Section Title`,sampleTextJa:`セクションタイトル`}),(0,i.jsx)(l,{name:`heading-md`,description:`Subsection titles`,variant:`heading`,size:`md`,sampleText:`Subsection Title`,sampleTextJa:`サブセクションタイトル`}),(0,i.jsx)(l,{name:`heading-sm`,description:`Card titles`,variant:`heading`,size:`sm`,sampleText:`Card Title`,sampleTextJa:`カードタイトル`})]}),(0,i.jsx)(s,{children:`Body`}),(0,i.jsx)(`p`,{className:`text-sm text-foreground-muted mb-3`,children:`For paragraphs, descriptions, and general content. Uses normal weight with relaxed line height for readability.`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(l,{name:`body-lg`,description:`Lead paragraphs and introductions`,variant:`body`,size:`lg`,sampleText:`Lead paragraphs and introductions for emphasis.`,sampleTextJa:`リード文や導入部分に使用する強調テキストです。`}),(0,i.jsx)(l,{name:`body-md`,description:`Default body text`,variant:`body`,size:`md`,sampleText:`The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application.`,sampleTextJa:`素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。`}),(0,i.jsx)(l,{name:`body-sm`,description:`Secondary text and descriptions`,variant:`body`,size:`sm`,sampleText:`Secondary text for descriptions, helper text, and supporting content.`,sampleTextJa:`説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。`}),(0,i.jsx)(l,{name:`body-xs`,description:`Captions and footnotes`,variant:`body`,size:`xs`,sampleText:`Captions, footnotes, and fine print.`,sampleTextJa:`キャプション、脚注、注意書き。`})]}),(0,i.jsx)(s,{children:`Label`}),(0,i.jsx)(`p`,{className:`text-sm text-foreground-muted mb-3`,children:`For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight with tight line height.`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(l,{name:`label-lg`,description:`Navigation items`,variant:`label`,size:`lg`,sampleText:`Navigation Item`,sampleTextJa:`ナビゲーション項目`}),(0,i.jsx)(l,{name:`label-md`,description:`Form labels and buttons`,variant:`label`,size:`md`,sampleText:`Form Label`,sampleTextJa:`フォームラベル`}),(0,i.jsx)(l,{name:`label-sm`,description:`Tags and badges`,variant:`label`,size:`sm`,sampleText:`Badge Text`,sampleTextJa:`バッジテキスト`}),(0,i.jsx)(l,{name:`label-xs`,description:`Overlines and micro labels`,variant:`label`,size:`xs`,sampleText:`OVERLINE TEXT`,sampleTextJa:`オーバーライン`})]}),(0,i.jsx)(o,{children:`Primitives`}),(0,i.jsx)(s,{children:`Font sizes`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(c,{label:`Extra Small`,token:`--text-xs`,value:`0.75rem (12px)`,style:{fontSize:`0.75rem`}}),(0,i.jsx)(c,{label:`Small`,token:`--text-sm`,value:`0.875rem (14px)`,style:{fontSize:`0.875rem`}}),(0,i.jsx)(c,{label:`Base`,token:`--text-base`,value:`1rem (16px)`,style:{fontSize:`1rem`}}),(0,i.jsx)(c,{label:`Large`,token:`--text-lg`,value:`1.125rem (18px)`,style:{fontSize:`1.125rem`}}),(0,i.jsx)(c,{label:`XL`,token:`--text-xl`,value:`1.25rem (20px)`,style:{fontSize:`1.25rem`}}),(0,i.jsx)(c,{label:`2XL`,token:`--text-2xl`,value:`1.5rem (24px)`,style:{fontSize:`1.5rem`}}),(0,i.jsx)(c,{label:`3XL`,token:`--text-3xl`,value:`1.875rem (30px)`,style:{fontSize:`1.875rem`}}),(0,i.jsx)(c,{label:`4XL`,token:`--text-4xl`,value:`2.25rem (36px)`,style:{fontSize:`2.25rem`}})]}),(0,i.jsx)(s,{children:`Font weights`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(c,{label:`Normal`,token:`--font-normal`,value:`400`,style:{fontWeight:400}}),(0,i.jsx)(c,{label:`Medium`,token:`--font-medium`,value:`500`,style:{fontWeight:500}}),(0,i.jsx)(c,{label:`Semibold`,token:`--font-semibold`,value:`600`,style:{fontWeight:600}}),(0,i.jsx)(c,{label:`Bold`,token:`--font-bold`,value:`700`,style:{fontWeight:700}})]}),(0,i.jsx)(s,{children:`Line heights`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(c,{label:`None`,token:`--leading-none`,value:`1`}),(0,i.jsx)(c,{label:`Tight`,token:`--leading-tight`,value:`1.25`}),(0,i.jsx)(c,{label:`Snug`,token:`--leading-snug`,value:`1.375`}),(0,i.jsx)(c,{label:`Normal`,token:`--leading-normal`,value:`1.5`}),(0,i.jsx)(c,{label:`Relaxed`,token:`--leading-relaxed`,value:`1.625`}),(0,i.jsx)(c,{label:`Loose`,token:`--leading-loose`,value:`2`})]}),(0,i.jsx)(s,{children:`Letter spacing`}),(0,i.jsxs)(`div`,{className:`border border-border rounded-xl px-5`,children:[(0,i.jsx)(c,{label:`Tighter`,token:`--tracking-tighter`,value:`-0.05em`}),(0,i.jsx)(c,{label:`Tight`,token:`--tracking-tight`,value:`-0.025em`}),(0,i.jsx)(c,{label:`Normal`,token:`--tracking-normal`,value:`0`}),(0,i.jsx)(c,{label:`Wide`,token:`--tracking-wide`,value:`0.025em`}),(0,i.jsx)(c,{label:`Wider`,token:`--tracking-wider`,value:`0.05em`})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Typography',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Typography</h1>
      <p className="text-base text-foreground-muted leading-relaxed mb-8">
        Schatten's typography system provides consistent text styling across the design system. Each
        named role — Heading, Body, and Label — bundles font size, line height, and weight into a
        single <code>.st-text</code> class (used here via the <code>&lt;Text&gt;</code>
        component), so text styles are applied consistently without manual configuration.
      </p>

      <SectionTitle>Font families</SectionTitle>
      <div className="border border-border rounded-xl px-5">
        <div className="py-4 border-b border-border">
          <p className="font-sans text-xl text-foreground mb-1">
            Hanken Grotesk — The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-sans text-xl text-foreground-muted mb-1">
            LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Default typeface for UI and body text.
          </p>
        </div>
        <div className="py-4 border-b border-border">
          <p className="font-serif text-xl text-foreground mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Serif fallback for editorial content.
          </p>
        </div>
        <div className="py-4">
          <p className="font-mono text-xl text-foreground mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Monospace for code and technical content.
          </p>
        </div>
      </div>

      <SectionTitle>Type scale</SectionTitle>

      <SubsectionTitle>Heading</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Used for page titles, section headers, and card headings. Uses semibold/bold weight with
        snug/tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="heading-2xl" description="Display titles" variant="heading" size="2xl" sampleText="Display Title" sampleTextJa="表示タイトル" />
        <TypographyRow name="heading-xl" description="Page titles" variant="heading" size="xl" sampleText="Page Title" sampleTextJa="ページタイトル" />
        <TypographyRow name="heading-lg" description="Section titles" variant="heading" size="lg" sampleText="Section Title" sampleTextJa="セクションタイトル" />
        <TypographyRow name="heading-md" description="Subsection titles" variant="heading" size="md" sampleText="Subsection Title" sampleTextJa="サブセクションタイトル" />
        <TypographyRow name="heading-sm" description="Card titles" variant="heading" size="sm" sampleText="Card Title" sampleTextJa="カードタイトル" />
      </div>

      <SubsectionTitle>Body</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        For paragraphs, descriptions, and general content. Uses normal weight with relaxed line
        height for readability.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="body-lg" description="Lead paragraphs and introductions" variant="body" size="lg" sampleText="Lead paragraphs and introductions for emphasis." sampleTextJa="リード文や導入部分に使用する強調テキストです。" />
        <TypographyRow name="body-md" description="Default body text" variant="body" size="md" sampleText="The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application." sampleTextJa="素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。" />
        <TypographyRow name="body-sm" description="Secondary text and descriptions" variant="body" size="sm" sampleText="Secondary text for descriptions, helper text, and supporting content." sampleTextJa="説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。" />
        <TypographyRow name="body-xs" description="Captions and footnotes" variant="body" size="xs" sampleText="Captions, footnotes, and fine print." sampleTextJa="キャプション、脚注、注意書き。" />
      </div>

      <SubsectionTitle>Label</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight
        with tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="label-lg" description="Navigation items" variant="label" size="lg" sampleText="Navigation Item" sampleTextJa="ナビゲーション項目" />
        <TypographyRow name="label-md" description="Form labels and buttons" variant="label" size="md" sampleText="Form Label" sampleTextJa="フォームラベル" />
        <TypographyRow name="label-sm" description="Tags and badges" variant="label" size="sm" sampleText="Badge Text" sampleTextJa="バッジテキスト" />
        <TypographyRow name="label-xs" description="Overlines and micro labels" variant="label" size="xs" sampleText="OVERLINE TEXT" sampleTextJa="オーバーライン" />
      </div>

      <SectionTitle>Primitives</SectionTitle>

      <SubsectionTitle>Font sizes</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Extra Small" token="--text-xs" value="0.75rem (12px)" style={{
        fontSize: '0.75rem'
      }} />
        <TokenRow label="Small" token="--text-sm" value="0.875rem (14px)" style={{
        fontSize: '0.875rem'
      }} />
        <TokenRow label="Base" token="--text-base" value="1rem (16px)" style={{
        fontSize: '1rem'
      }} />
        <TokenRow label="Large" token="--text-lg" value="1.125rem (18px)" style={{
        fontSize: '1.125rem'
      }} />
        <TokenRow label="XL" token="--text-xl" value="1.25rem (20px)" style={{
        fontSize: '1.25rem'
      }} />
        <TokenRow label="2XL" token="--text-2xl" value="1.5rem (24px)" style={{
        fontSize: '1.5rem'
      }} />
        <TokenRow label="3XL" token="--text-3xl" value="1.875rem (30px)" style={{
        fontSize: '1.875rem'
      }} />
        <TokenRow label="4XL" token="--text-4xl" value="2.25rem (36px)" style={{
        fontSize: '2.25rem'
      }} />
      </div>

      <SubsectionTitle>Font weights</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Normal" token="--font-normal" value="400" style={{
        fontWeight: 400
      }} />
        <TokenRow label="Medium" token="--font-medium" value="500" style={{
        fontWeight: 500
      }} />
        <TokenRow label="Semibold" token="--font-semibold" value="600" style={{
        fontWeight: 600
      }} />
        <TokenRow label="Bold" token="--font-bold" value="700" style={{
        fontWeight: 700
      }} />
      </div>

      <SubsectionTitle>Line heights</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="None" token="--leading-none" value="1" />
        <TokenRow label="Tight" token="--leading-tight" value="1.25" />
        <TokenRow label="Snug" token="--leading-snug" value="1.375" />
        <TokenRow label="Normal" token="--leading-normal" value="1.5" />
        <TokenRow label="Relaxed" token="--leading-relaxed" value="1.625" />
        <TokenRow label="Loose" token="--leading-loose" value="2" />
      </div>

      <SubsectionTitle>Letter spacing</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Tighter" token="--tracking-tighter" value="-0.05em" />
        <TokenRow label="Tight" token="--tracking-tight" value="-0.025em" />
        <TokenRow label="Normal" token="--tracking-normal" value="0" />
        <TokenRow label="Wide" token="--tracking-wide" value="0.025em" />
        <TokenRow label="Wider" token="--tracking-wider" value="0.05em" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Typography`]}))();export{u as Typography,d as __namedExportsOrder,a as default};