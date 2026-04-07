import{j as e}from"./iframe-BjR3nFHB.js";import"./preload-helper-DLx2GQLC.js";const c={title:"Foundation/Typography",parameters:{layout:"fullscreen"}},x=({children:l})=>e.jsx("h2",{className:"text-2xl font-bold text-text mt-8 mb-2",children:l}),i=({children:l})=>e.jsx("h3",{className:"text-base font-semibold text-text mt-6 mb-3",children:l}),t=({label:l,token:o,value:s,style:d})=>e.jsxs("div",{className:"flex items-baseline gap-4 py-2 border-b border-border last:border-b-0",children:[e.jsx("span",{className:"shrink-0 w-32 text-sm text-text",style:d,children:l}),e.jsx("span",{className:"shrink-0 text-xs text-text-muted font-mono",children:o}),e.jsx("span",{className:"text-xs text-text-muted ml-auto",children:s})]}),a=({name:l,description:o,tokens:s,sampleText:d,sampleTextJa:p})=>e.jsxs("div",{className:"py-4 border-b border-border last:border-b-0",children:[e.jsx("p",{className:"text-text mb-1",style:{fontSize:`var(${s.size})`,lineHeight:`var(${s.leading})`,fontWeight:`var(${s.weight})`},children:d}),e.jsx("p",{className:"text-text-muted mb-2",style:{fontSize:`var(${s.size})`,lineHeight:`var(${s.leading})`,fontWeight:`var(${s.weight})`},children:p}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-medium text-text font-mono",children:l}),e.jsx("span",{className:"text-xs text-text-muted",children:o})]})]}),n={name:"Typography",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-text mb-4",children:"Typography"}),e.jsx("p",{className:"text-base text-text-muted leading-relaxed mb-8",children:"Schatten's typography system provides consistent text styling across the design system. Semantic tokens bundle font size, line height, and weight into named roles — Heading, Body, and Label — so text styles are applied consistently without manual configuration."}),e.jsx(x,{children:"Font families"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsxs("div",{className:"py-4 border-b border-border",children:[e.jsx("p",{className:"font-sans text-xl text-text mb-1",children:"Hanken Grotesk — The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"font-sans text-xl text-text-muted mb-1",children:"LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。"}),e.jsx("p",{className:"text-xs text-text-muted font-mono",children:'--font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif'}),e.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Default typeface for UI and body text."})]}),e.jsxs("div",{className:"py-4 border-b border-border",children:[e.jsx("p",{className:"font-serif text-xl text-text mb-1",children:"The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"text-xs text-text-muted font-mono",children:'--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif'}),e.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Serif fallback for editorial content."})]}),e.jsxs("div",{className:"py-4",children:[e.jsx("p",{className:"font-mono text-xl text-text mb-1",children:"The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"text-xs text-text-muted font-mono",children:'--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'}),e.jsx("p",{className:"text-xs text-text-muted mt-1",children:"Monospace for code and technical content."})]})]}),e.jsx(x,{children:"Type scale"}),e.jsx(i,{children:"Heading"}),e.jsx("p",{className:"text-sm text-text-muted mb-3",children:"Used for page titles, section headers, and card headings. Uses semibold/bold weight with snug/tight line height."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(a,{name:"heading-2xl",description:"Display titles",tokens:{size:"--text-heading-2xl-size",leading:"--text-heading-2xl-leading",weight:"--text-heading-2xl-weight"},sampleText:"Display Title",sampleTextJa:"表示タイトル"}),e.jsx(a,{name:"heading-xl",description:"Page titles",tokens:{size:"--text-heading-xl-size",leading:"--text-heading-xl-leading",weight:"--text-heading-xl-weight"},sampleText:"Page Title",sampleTextJa:"ページタイトル"}),e.jsx(a,{name:"heading-lg",description:"Section titles",tokens:{size:"--text-heading-lg-size",leading:"--text-heading-lg-leading",weight:"--text-heading-lg-weight"},sampleText:"Section Title",sampleTextJa:"セクションタイトル"}),e.jsx(a,{name:"heading-md",description:"Subsection titles",tokens:{size:"--text-heading-md-size",leading:"--text-heading-md-leading",weight:"--text-heading-md-weight"},sampleText:"Subsection Title",sampleTextJa:"サブセクションタイトル"}),e.jsx(a,{name:"heading-sm",description:"Card titles",tokens:{size:"--text-heading-sm-size",leading:"--text-heading-sm-leading",weight:"--text-heading-sm-weight"},sampleText:"Card Title",sampleTextJa:"カードタイトル"})]}),e.jsx(i,{children:"Body"}),e.jsx("p",{className:"text-sm text-text-muted mb-3",children:"For paragraphs, descriptions, and general content. Uses normal weight with relaxed line height for readability."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(a,{name:"body-lg",description:"Lead paragraphs and introductions",tokens:{size:"--text-body-lg-size",leading:"--text-body-lg-leading",weight:"--text-body-lg-weight"},sampleText:"Lead paragraphs and introductions for emphasis.",sampleTextJa:"リード文や導入部分に使用する強調テキストです。"}),e.jsx(a,{name:"body-md",description:"Default body text",tokens:{size:"--text-body-md-size",leading:"--text-body-md-leading",weight:"--text-body-md-weight"},sampleText:"The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application.",sampleTextJa:"素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。"}),e.jsx(a,{name:"body-sm",description:"Secondary text and descriptions",tokens:{size:"--text-body-sm-size",leading:"--text-body-sm-leading",weight:"--text-body-sm-weight"},sampleText:"Secondary text for descriptions, helper text, and supporting content.",sampleTextJa:"説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。"}),e.jsx(a,{name:"body-xs",description:"Captions and footnotes",tokens:{size:"--text-body-xs-size",leading:"--text-body-xs-leading",weight:"--text-body-xs-weight"},sampleText:"Captions, footnotes, and fine print.",sampleTextJa:"キャプション、脚注、注意書き。"})]}),e.jsx(i,{children:"Label"}),e.jsx("p",{className:"text-sm text-text-muted mb-3",children:"For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight with tight line height."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(a,{name:"label-lg",description:"Navigation items",tokens:{size:"--text-label-lg-size",leading:"--text-label-lg-leading",weight:"--text-label-lg-weight"},sampleText:"Navigation Item",sampleTextJa:"ナビゲーション項目"}),e.jsx(a,{name:"label-md",description:"Form labels and buttons",tokens:{size:"--text-label-md-size",leading:"--text-label-md-leading",weight:"--text-label-md-weight"},sampleText:"Form Label",sampleTextJa:"フォームラベル"}),e.jsx(a,{name:"label-sm",description:"Tags and badges",tokens:{size:"--text-label-sm-size",leading:"--text-label-sm-leading",weight:"--text-label-sm-weight"},sampleText:"Badge Text",sampleTextJa:"バッジテキスト"}),e.jsx(a,{name:"label-xs",description:"Overlines and micro labels",tokens:{size:"--text-label-xs-size",leading:"--text-label-xs-leading",weight:"--text-label-xs-weight"},sampleText:"OVERLINE TEXT",sampleTextJa:"オーバーライン"})]}),e.jsx(x,{children:"Primitives"}),e.jsx(i,{children:"Font sizes"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Extra Small",token:"--text-xs",value:"0.75rem (12px)",style:{fontSize:"0.75rem"}}),e.jsx(t,{label:"Small",token:"--text-sm",value:"0.875rem (14px)",style:{fontSize:"0.875rem"}}),e.jsx(t,{label:"Base",token:"--text-base",value:"1rem (16px)",style:{fontSize:"1rem"}}),e.jsx(t,{label:"Large",token:"--text-lg",value:"1.125rem (18px)",style:{fontSize:"1.125rem"}}),e.jsx(t,{label:"XL",token:"--text-xl",value:"1.25rem (20px)",style:{fontSize:"1.25rem"}}),e.jsx(t,{label:"2XL",token:"--text-2xl",value:"1.5rem (24px)",style:{fontSize:"1.5rem"}}),e.jsx(t,{label:"3XL",token:"--text-3xl",value:"1.875rem (30px)",style:{fontSize:"1.875rem"}}),e.jsx(t,{label:"4XL",token:"--text-4xl",value:"2.25rem (36px)",style:{fontSize:"2.25rem"}})]}),e.jsx(i,{children:"Font weights"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Normal",token:"--font-normal",value:"400",style:{fontWeight:400}}),e.jsx(t,{label:"Medium",token:"--font-medium",value:"500",style:{fontWeight:500}}),e.jsx(t,{label:"Semibold",token:"--font-semibold",value:"600",style:{fontWeight:600}}),e.jsx(t,{label:"Bold",token:"--font-bold",value:"700",style:{fontWeight:700}})]}),e.jsx(i,{children:"Line heights"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"None",token:"--leading-none",value:"1"}),e.jsx(t,{label:"Tight",token:"--leading-tight",value:"1.25"}),e.jsx(t,{label:"Snug",token:"--leading-snug",value:"1.375"}),e.jsx(t,{label:"Normal",token:"--leading-normal",value:"1.5"}),e.jsx(t,{label:"Relaxed",token:"--leading-relaxed",value:"1.625"}),e.jsx(t,{label:"Loose",token:"--leading-loose",value:"2"})]}),e.jsx(i,{children:"Letter spacing"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Tighter",token:"--tracking-tighter",value:"-0.05em"}),e.jsx(t,{label:"Tight",token:"--tracking-tight",value:"-0.025em"}),e.jsx(t,{label:"Normal",token:"--tracking-normal",value:"0"}),e.jsx(t,{label:"Wide",token:"--tracking-wide",value:"0.025em"}),e.jsx(t,{label:"Wider",token:"--tracking-wider",value:"0.05em"})]})]})};var r,m,g;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Typography',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-text mb-4">Typography</h1>
      <p className="text-base text-text-muted leading-relaxed mb-8">
        Schatten's typography system provides consistent text styling across the design system.
        Semantic tokens bundle font size, line height, and weight into named roles — Heading, Body,
        and Label — so text styles are applied consistently without manual configuration.
      </p>

      <SectionTitle>Font families</SectionTitle>
      <div className="border border-border rounded-xl px-5">
        <div className="py-4 border-b border-border">
          <p className="font-sans text-xl text-text mb-1">
            Hanken Grotesk — The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-sans text-xl text-text-muted mb-1">
            LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。
          </p>
          <p className="text-xs text-text-muted font-mono">
            --font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif
          </p>
          <p className="text-xs text-text-muted mt-1">Default typeface for UI and body text.</p>
        </div>
        <div className="py-4 border-b border-border">
          <p className="font-serif text-xl text-text mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-text-muted font-mono">
            --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", serif
          </p>
          <p className="text-xs text-text-muted mt-1">Serif fallback for editorial content.</p>
        </div>
        <div className="py-4">
          <p className="font-mono text-xl text-text mb-1">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-xs text-text-muted font-mono">
            --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
          </p>
          <p className="text-xs text-text-muted mt-1">Monospace for code and technical content.</p>
        </div>
      </div>

      <SectionTitle>Type scale</SectionTitle>

      <SubsectionTitle>Heading</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        Used for page titles, section headers, and card headings. Uses semibold/bold weight with
        snug/tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="heading-2xl" description="Display titles" tokens={{
        size: '--text-heading-2xl-size',
        leading: '--text-heading-2xl-leading',
        weight: '--text-heading-2xl-weight'
      }} sampleText="Display Title" sampleTextJa="表示タイトル" />
        <TypographyRow name="heading-xl" description="Page titles" tokens={{
        size: '--text-heading-xl-size',
        leading: '--text-heading-xl-leading',
        weight: '--text-heading-xl-weight'
      }} sampleText="Page Title" sampleTextJa="ページタイトル" />
        <TypographyRow name="heading-lg" description="Section titles" tokens={{
        size: '--text-heading-lg-size',
        leading: '--text-heading-lg-leading',
        weight: '--text-heading-lg-weight'
      }} sampleText="Section Title" sampleTextJa="セクションタイトル" />
        <TypographyRow name="heading-md" description="Subsection titles" tokens={{
        size: '--text-heading-md-size',
        leading: '--text-heading-md-leading',
        weight: '--text-heading-md-weight'
      }} sampleText="Subsection Title" sampleTextJa="サブセクションタイトル" />
        <TypographyRow name="heading-sm" description="Card titles" tokens={{
        size: '--text-heading-sm-size',
        leading: '--text-heading-sm-leading',
        weight: '--text-heading-sm-weight'
      }} sampleText="Card Title" sampleTextJa="カードタイトル" />
      </div>

      <SubsectionTitle>Body</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        For paragraphs, descriptions, and general content. Uses normal weight with relaxed line
        height for readability.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="body-lg" description="Lead paragraphs and introductions" tokens={{
        size: '--text-body-lg-size',
        leading: '--text-body-lg-leading',
        weight: '--text-body-lg-weight'
      }} sampleText="Lead paragraphs and introductions for emphasis." sampleTextJa="リード文や導入部分に使用する強調テキストです。" />
        <TypographyRow name="body-md" description="Default body text" tokens={{
        size: '--text-body-md-size',
        leading: '--text-body-md-leading',
        weight: '--text-body-md-weight'
      }} sampleText="The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application." sampleTextJa="素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。" />
        <TypographyRow name="body-sm" description="Secondary text and descriptions" tokens={{
        size: '--text-body-sm-size',
        leading: '--text-body-sm-leading',
        weight: '--text-body-sm-weight'
      }} sampleText="Secondary text for descriptions, helper text, and supporting content." sampleTextJa="説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。" />
        <TypographyRow name="body-xs" description="Captions and footnotes" tokens={{
        size: '--text-body-xs-size',
        leading: '--text-body-xs-leading',
        weight: '--text-body-xs-weight'
      }} sampleText="Captions, footnotes, and fine print." sampleTextJa="キャプション、脚注、注意書き。" />
      </div>

      <SubsectionTitle>Label</SubsectionTitle>
      <p className="text-sm text-text-muted mb-3">
        For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight
        with tight line height.
      </p>
      <div className="border border-border rounded-xl px-5">
        <TypographyRow name="label-lg" description="Navigation items" tokens={{
        size: '--text-label-lg-size',
        leading: '--text-label-lg-leading',
        weight: '--text-label-lg-weight'
      }} sampleText="Navigation Item" sampleTextJa="ナビゲーション項目" />
        <TypographyRow name="label-md" description="Form labels and buttons" tokens={{
        size: '--text-label-md-size',
        leading: '--text-label-md-leading',
        weight: '--text-label-md-weight'
      }} sampleText="Form Label" sampleTextJa="フォームラベル" />
        <TypographyRow name="label-sm" description="Tags and badges" tokens={{
        size: '--text-label-sm-size',
        leading: '--text-label-sm-leading',
        weight: '--text-label-sm-weight'
      }} sampleText="Badge Text" sampleTextJa="バッジテキスト" />
        <TypographyRow name="label-xs" description="Overlines and micro labels" tokens={{
        size: '--text-label-xs-size',
        leading: '--text-label-xs-leading',
        weight: '--text-label-xs-weight'
      }} sampleText="OVERLINE TEXT" sampleTextJa="オーバーライン" />
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const u=["Typography"];export{n as Typography,u as __namedExportsOrder,c as default};
