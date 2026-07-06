import{j as e}from"./iframe-DRNzrZgD.js";import{T as m}from"./Text-Dg6Mt0bj.js";import"./preload-helper-CHQKfnDm.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */const T={title:"Tokens/Typography",parameters:{layout:"fullscreen"}},d=({children:s})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:s}),a=({children:s})=>e.jsx("h3",{className:"text-base font-semibold text-foreground mt-6 mb-3",children:s}),t=({label:s,token:n,value:r,demo:i})=>e.jsxs("div",{className:"flex items-baseline gap-4 py-2 border-b border-border last:border-b-0",children:[e.jsx("span",{className:"shrink-0 w-32 text-sm text-foreground",style:i==="size"?{fontSize:`var(${n})`}:i==="weight"?{fontWeight:`var(${n})`}:void 0,children:s}),e.jsx("span",{className:"shrink-0 text-xs text-foreground-muted font-mono",children:n}),e.jsx("span",{className:"text-xs text-foreground-muted ml-auto",children:r})]}),o=({name:s,description:n,variant:r,size:i,sampleText:x,sampleTextJa:c})=>e.jsxs("div",{className:"py-4 border-b border-border last:border-b-0",children:[e.jsx(m,{variant:r,size:i,className:"mb-1",children:x}),e.jsx(m,{variant:r,size:i,className:"mb-2",children:c}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-medium text-foreground font-mono",children:s}),e.jsx("span",{className:"text-xs text-foreground-muted",children:n})]})]}),l={name:"Typography",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:"Typography"}),e.jsxs("p",{className:"text-base text-foreground-muted leading-relaxed mb-8",children:["Schatten's typography system provides consistent text styling across the design system. Each named role — Heading, Body, and Label — bundles font size, line height, and weight into a single ",e.jsx("code",{children:".st-text"})," class (used here via the ",e.jsx("code",{children:"<Text>"}),"component), so text styles are applied consistently without manual configuration."]}),e.jsx(d,{children:"Font families"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsxs("div",{className:"py-4 border-b border-border",children:[e.jsx("p",{className:"font-sans text-xl text-foreground mb-1",children:"Hanken Grotesk — The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"font-sans text-xl text-foreground-muted mb-1",children:"LINE Seed JP — 素早い茶色の狐が怠惰な犬を飛び越える。"}),e.jsx("p",{className:"text-xs text-foreground-muted font-mono",children:'--font-sans: "Hanken Grotesk", "LINE Seed JP", ui-sans-serif, system-ui, sans-serif'}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1",children:"Default typeface for UI and body text."})]}),e.jsxs("div",{className:"py-4 border-b border-border",children:[e.jsx("p",{className:"font-serif text-xl text-foreground mb-1",children:"The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"font-serif text-xl text-foreground-muted mb-1",children:"素早い茶色の狐が怠惰な犬を飛び越える。"}),e.jsx("p",{className:"text-xs text-foreground-muted font-mono",children:'--font-serif: "EB Garamond", "Noto Serif JP", ui-serif, Georgia, serif'}),e.jsxs("p",{className:"text-xs text-foreground-muted mt-1",children:["Editorial serif (use via ",e.jsx("code",{children:'<Text family="serif">'}),"). Consumers must load EB Garamond + Noto Serif JP themselves (e.g. Google Fonts); otherwise it falls back to the system serif stack. Load weights ",e.jsx("code",{children:"400 / 500 / 600 / 700"})," — the heading roles use semibold/bold, and a missing weight renders as synthetic (faux) bold."]})]}),e.jsxs("div",{className:"py-4",children:[e.jsx("p",{className:"font-mono text-xl text-foreground mb-1",children:"The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"text-xs text-foreground-muted font-mono",children:'--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1",children:"Monospace for code and technical content."})]})]}),e.jsx(a,{children:"JP/EN size compensation"}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed mb-3",children:["Latin faces (EB Garamond / Hanken Grotesk) sit at a lower cap-height than the CJK faces (Noto Serif JP / LINE Seed JP), which fill their em box, so at the same px the Latin reads smaller in mixed JP/EN runs. Schatten applies ",e.jsx("code",{children:"font-size-adjust: cap-height"})," on the ",e.jsx("code",{children:"body"})," reset ",e.jsx("strong",{children:"library-wide"})," (all components, not just"," ",e.jsx("code",{children:"<Text>"}),") to lift the Latin glyphs to the CJK height."," ",e.jsx("code",{children:"cap-height"})," is a font-agnostic target, so a single value covers every family — and any font a consumer swaps in via ",e.jsx("code",{children:"--font-sans"}),"."]}),e.jsxs("p",{className:"text-sm text-foreground-muted leading-relaxed mb-3",children:["Tune or disable it with the ",e.jsx("code",{children:"--st-font-size-adjust"})," custom property (browsers without two-value ",e.jsx("code",{children:"font-size-adjust"})," support, e.g. Chrome < 127, simply ignore it — no compensation, never broken):"]}),e.jsx("pre",{className:"text-xs text-foreground bg-surface border border-border rounded-lg p-4 overflow-x-auto mb-8 font-mono",children:`:root {
  /* default — Latin matched to CJK height */
  --st-font-size-adjust: cap-height 0.7;

  /* tune for a different font pairing */
  --st-font-size-adjust: cap-height 0.72;

  /* opt out entirely (use raw font metrics) */
  --st-font-size-adjust: none;
}`}),e.jsx(d,{children:"Type scale"}),e.jsx(a,{children:"Heading"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Used for page titles, section headers, and card headings. Uses semibold/bold weight with snug/tight line height."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(o,{name:"heading-2xl",description:"Display titles",variant:"heading",size:"2xl",sampleText:"Display Title",sampleTextJa:"表示タイトル"}),e.jsx(o,{name:"heading-xl",description:"Page titles",variant:"heading",size:"xl",sampleText:"Page Title",sampleTextJa:"ページタイトル"}),e.jsx(o,{name:"heading-lg",description:"Section titles",variant:"heading",size:"lg",sampleText:"Section Title",sampleTextJa:"セクションタイトル"}),e.jsx(o,{name:"heading-md",description:"Subsection titles",variant:"heading",size:"md",sampleText:"Subsection Title",sampleTextJa:"サブセクションタイトル"}),e.jsx(o,{name:"heading-sm",description:"Card titles",variant:"heading",size:"sm",sampleText:"Card Title",sampleTextJa:"カードタイトル"})]}),e.jsx(a,{children:"Body"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"For paragraphs, descriptions, and general content. Uses normal weight with relaxed line height for readability."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(o,{name:"body-lg",description:"Lead paragraphs and introductions",variant:"body",size:"lg",sampleText:"Lead paragraphs and introductions for emphasis.",sampleTextJa:"リード文や導入部分に使用する強調テキストです。"}),e.jsx(o,{name:"body-md",description:"Default body text",variant:"body",size:"md",sampleText:"The quick brown fox jumps over the lazy dog. This is the default body text used for most content throughout the application.",sampleTextJa:"素早い茶色の狐が怠惰な犬を飛び越える。これはアプリケーション全体で使用される標準の本文テキストです。"}),e.jsx(o,{name:"body-sm",description:"Secondary text and descriptions",variant:"body",size:"sm",sampleText:"Secondary text for descriptions, helper text, and supporting content.",sampleTextJa:"説明文、ヘルパーテキスト、補足コンテンツ用のセカンダリテキスト。"}),e.jsx(o,{name:"body-xs",description:"Captions and footnotes",variant:"body",size:"xs",sampleText:"Captions, footnotes, and fine print.",sampleTextJa:"キャプション、脚注、注意書き。"})]}),e.jsx(a,{children:"Label"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"For interactive elements — form labels, buttons, navigation, and badges. Uses medium weight with tight line height."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(o,{name:"label-lg",description:"Navigation items",variant:"label",size:"lg",sampleText:"Navigation Item",sampleTextJa:"ナビゲーション項目"}),e.jsx(o,{name:"label-md",description:"Form labels and buttons",variant:"label",size:"md",sampleText:"Form Label",sampleTextJa:"フォームラベル"}),e.jsx(o,{name:"label-sm",description:"Tags and badges",variant:"label",size:"sm",sampleText:"Badge Text",sampleTextJa:"バッジテキスト"}),e.jsx(o,{name:"label-xs",description:"Overlines and micro labels",variant:"label",size:"xs",sampleText:"OVERLINE TEXT",sampleTextJa:"オーバーライン"})]}),e.jsx(d,{children:"Primitives"}),e.jsx(a,{children:"Font sizes"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Extra Small",token:"--text-xs",value:"0.75rem (12px)",demo:"size"}),e.jsx(t,{label:"Small",token:"--text-sm",value:"0.875rem (14px)",demo:"size"}),e.jsx(t,{label:"Base",token:"--text-base",value:"1rem (16px)",demo:"size"}),e.jsx(t,{label:"Large",token:"--text-lg",value:"1.125rem (18px)",demo:"size"}),e.jsx(t,{label:"XL",token:"--text-xl",value:"1.25rem (20px)",demo:"size"}),e.jsx(t,{label:"2XL",token:"--text-2xl",value:"1.5rem (24px)",demo:"size"}),e.jsx(t,{label:"3XL",token:"--text-3xl",value:"1.875rem (30px)",demo:"size"}),e.jsx(t,{label:"4XL",token:"--text-4xl",value:"2.25rem (36px)",demo:"size"})]}),e.jsx(a,{children:"Font weights"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Normal",token:"--font-normal",value:"400",demo:"weight"}),e.jsx(t,{label:"Medium",token:"--font-medium",value:"500",demo:"weight"}),e.jsx(t,{label:"Semibold",token:"--font-semibold",value:"600",demo:"weight"}),e.jsx(t,{label:"Bold",token:"--font-bold",value:"700",demo:"weight"})]}),e.jsx(a,{children:"Line heights"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"None",token:"--leading-none",value:"1"}),e.jsx(t,{label:"Tight",token:"--leading-tight",value:"1.25"}),e.jsx(t,{label:"Snug",token:"--leading-snug",value:"1.375"}),e.jsx(t,{label:"Normal",token:"--leading-normal",value:"1.5"}),e.jsx(t,{label:"Relaxed",token:"--leading-relaxed",value:"1.625"}),e.jsx(t,{label:"Loose",token:"--leading-loose",value:"2"})]}),e.jsx(a,{children:"Letter spacing"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(t,{label:"Tighter",token:"--tracking-tighter",value:"-0.05em"}),e.jsx(t,{label:"Tight",token:"--tracking-tight",value:"-0.025em"}),e.jsx(t,{label:"Normal",token:"--tracking-normal",value:"0"}),e.jsx(t,{label:"Wide",token:"--tracking-wide",value:"0.025em"}),e.jsx(t,{label:"Wider",token:"--tracking-wider",value:"0.05em"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          <p className="font-serif text-xl text-foreground-muted mb-1">
            素早い茶色の狐が怠惰な犬を飛び越える。
          </p>
          <p className="text-xs text-foreground-muted font-mono">
            --font-serif: "EB Garamond", "Noto Serif JP", ui-serif, Georgia, serif
          </p>
          <p className="text-xs text-foreground-muted mt-1">
            Editorial serif (use via <code>&lt;Text family="serif"&gt;</code>). Consumers must load
            EB Garamond + Noto Serif JP themselves (e.g. Google Fonts); otherwise it falls back to
            the system serif stack. Load weights <code>400 / 500 / 600 / 700</code> — the heading
            roles use semibold/bold, and a missing weight renders as synthetic (faux) bold.
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

      <SubsectionTitle>JP/EN size compensation</SubsectionTitle>
      <p className="text-sm text-foreground-muted leading-relaxed mb-3">
        Latin faces (EB Garamond / Hanken Grotesk) sit at a lower cap-height than the CJK faces
        (Noto Serif JP / LINE Seed JP), which fill their em box, so at the same px the Latin reads
        smaller in mixed JP/EN runs. Schatten applies <code>font-size-adjust: cap-height</code> on
        the <code>body</code> reset <strong>library-wide</strong> (all components, not just{' '}
        <code>&lt;Text&gt;</code>) to lift the Latin glyphs to the CJK height.{' '}
        <code>cap-height</code> is a font-agnostic target, so a single value covers every family —
        and any font a consumer swaps in via <code>--font-sans</code>.
      </p>
      <p className="text-sm text-foreground-muted leading-relaxed mb-3">
        Tune or disable it with the <code>--st-font-size-adjust</code> custom property (browsers
        without two-value <code>font-size-adjust</code> support, e.g. Chrome &lt; 127, simply ignore
        it — no compensation, never broken):
      </p>
      <pre className="text-xs text-foreground bg-surface border border-border rounded-lg p-4 overflow-x-auto mb-8 font-mono">
        {\`:root {
  /* default — Latin matched to CJK height */
  --st-font-size-adjust: cap-height 0.7;

  /* tune for a different font pairing */
  --st-font-size-adjust: cap-height 0.72;

  /* opt out entirely (use raw font metrics) */
  --st-font-size-adjust: none;
}\`}
      </pre>

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
        <TokenRow label="Extra Small" token="--text-xs" value="0.75rem (12px)" demo="size" />
        <TokenRow label="Small" token="--text-sm" value="0.875rem (14px)" demo="size" />
        <TokenRow label="Base" token="--text-base" value="1rem (16px)" demo="size" />
        <TokenRow label="Large" token="--text-lg" value="1.125rem (18px)" demo="size" />
        <TokenRow label="XL" token="--text-xl" value="1.25rem (20px)" demo="size" />
        <TokenRow label="2XL" token="--text-2xl" value="1.5rem (24px)" demo="size" />
        <TokenRow label="3XL" token="--text-3xl" value="1.875rem (30px)" demo="size" />
        <TokenRow label="4XL" token="--text-4xl" value="2.25rem (36px)" demo="size" />
      </div>

      <SubsectionTitle>Font weights</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <TokenRow label="Normal" token="--font-normal" value="400" demo="weight" />
        <TokenRow label="Medium" token="--font-medium" value="500" demo="weight" />
        <TokenRow label="Semibold" token="--font-semibold" value="600" demo="weight" />
        <TokenRow label="Bold" token="--font-bold" value="700" demo="weight" />
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
}`,...l.parameters?.docs?.source}}};const v=["Typography"];export{l as Typography,v as __namedExportsOrder,T as default};
