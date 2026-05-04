import{j as e}from"./iframe-Btup_LFG.js";import"./preload-helper-cpQwiaGc.js";const v={title:"Foundation/Color",parameters:{layout:"fullscreen"}},l=({name:a,description:o,className:m,style:i})=>e.jsxs("div",{className:"flex items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg shrink-0 ${m??""}`,style:i}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-foreground font-mono",children:a}),e.jsx("p",{className:"text-xs text-foreground-muted",children:o})]})]}),r=({shades:a})=>e.jsx("div",{className:"flex gap-1",children:a.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg ${o.className??""}`,style:o.style}),e.jsx("span",{className:"text-[10px] text-foreground-muted font-mono",children:o.level})]},o.level))}),t=({children:a})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:a}),s=({children:a})=>e.jsx("h3",{className:"text-base font-semibold text-foreground mt-6 mb-3",children:a}),c={name:"Colors",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:"Colors"}),e.jsx("p",{className:"text-base text-foreground-muted leading-relaxed mb-8",children:"Schatten's color system is inspired by Japanese calligraphy — ink on paper. The consistent use of color in our design system keeps cognitive loads low and makes for a unified and accessible user experience. Colors adapt automatically between light and dark mode."}),e.jsx(t,{children:"Semantic Colors"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"These tokens are used in components. They automatically adapt to light/dark mode."}),e.jsx(s,{children:"Surfaces & Foreground"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"background",description:"Page background",className:"bg-background border border-border"}),e.jsx(l,{name:"surface",description:"Card and container surfaces",className:"bg-surface border border-border"}),e.jsx(l,{name:"surface-hover",description:"Hover state for surfaces",className:"bg-surface-hover border border-border"}),e.jsx(l,{name:"foreground",description:"Primary text color",className:"bg-foreground"}),e.jsx(l,{name:"foreground-muted",description:"Secondary/helper text",className:"bg-foreground-muted"}),e.jsx(l,{name:"foreground-subtle",description:"Tertiary text",className:"bg-foreground-subtle"})]}),e.jsx(s,{children:"Solid (Filled Components)"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"solid",description:"Filled component background (e.g. primary button)",className:"bg-solid"}),e.jsx(l,{name:"solid-hover",description:"Hover state for filled components",className:"bg-solid-hover"}),e.jsx(l,{name:"solid-foreground",description:"Text on filled components",className:"bg-solid-foreground border border-border"})]}),e.jsx(s,{children:"Destructive & Accent"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"destructive",description:"Destructive actions",className:"bg-destructive"}),e.jsx(l,{name:"destructive-foreground",description:"Text on destructive",className:"bg-destructive-foreground border border-border"}),e.jsx(l,{name:"accent",description:"Vermillion accent for emphasis",className:"bg-accent"})]}),e.jsx(s,{children:"Border & Ring"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"border",description:"Default border for dividers",className:"bg-border"}),e.jsx(l,{name:"border-strong",description:"Strong border (e.g. secondary button)",className:"bg-border-strong"}),e.jsx(l,{name:"ring",description:"Focus ring color",className:"bg-ring"})]}),e.jsx(s,{children:"Status"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"success",description:"Positive actions and states",className:"bg-success"}),e.jsx(l,{name:"warning",description:"Caution states that need attention",className:"bg-warning"}),e.jsx(l,{name:"destructive",description:"Destructive actions and error states",className:"bg-destructive"}),e.jsx(l,{name:"destructive-subtle",description:"Subtle background for error states",className:"bg-destructive-subtle border border-border"})]}),e.jsx(t,{children:"Primitive Palette"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Core brand colors inspired by Japanese calligraphy. These are fixed values that do not change between light and dark mode. Components should use semantic tokens above instead."}),e.jsx(s,{children:"Ink & Paper"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(l,{name:"--ink-black",description:"#1a1a1a — Darkest ink tone",style:{backgroundColor:"var(--ink-black)"}}),e.jsx(l,{name:"--ink-dark",description:"#2d2d2d — Secondary ink tone",style:{backgroundColor:"var(--ink-dark)"}}),e.jsx(l,{name:"--ink-medium",description:"#4a4a4a — Medium ink tone",style:{backgroundColor:"var(--ink-medium)"}}),e.jsx(l,{name:"--ink-light",description:"#6b6b6b — Light ink",style:{backgroundColor:"var(--ink-light)"}}),e.jsx(l,{name:"--paper-white",description:"#fafafa — Lightest paper",style:{backgroundColor:"var(--paper-white)",border:"1px solid var(--color-border)"}}),e.jsx(l,{name:"--paper-warm",description:"#f5f3f0 — Warm paper",style:{backgroundColor:"var(--paper-warm)",border:"1px solid var(--color-border)"}}),e.jsx(l,{name:"--paper-cream",description:"#f0ede8 — Cream paper",style:{backgroundColor:"var(--paper-cream)",border:"1px solid var(--color-border)"}})]}),e.jsx(t,{children:"Color Scales"}),e.jsx(s,{children:"Primary"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Primary color scale mapped from theme tokens. The default theme uses blue; seasonal themes override this entire scale."}),e.jsx(r,{shades:[{level:"50",className:"bg-primary-50"},{level:"100",className:"bg-primary-100"},{level:"200",className:"bg-primary-200"},{level:"300",className:"bg-primary-300"},{level:"400",className:"bg-primary-400"},{level:"500",className:"bg-primary-500"},{level:"600",className:"bg-primary-600"},{level:"700",className:"bg-primary-700"},{level:"800",className:"bg-primary-800"},{level:"900",className:"bg-primary-900"},{level:"950",className:"bg-primary-950"}]}),e.jsx(s,{children:"Gray"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Neutral gray scale defined in OKLCH for perceptually uniform steps."}),e.jsx(r,{shades:[{level:"50",className:"bg-gray-50"},{level:"100",className:"bg-gray-100"},{level:"200",className:"bg-gray-200"},{level:"300",className:"bg-gray-300"},{level:"400",className:"bg-gray-400"},{level:"500",className:"bg-gray-500"},{level:"600",className:"bg-gray-600"},{level:"700",className:"bg-gray-700"},{level:"800",className:"bg-gray-800"},{level:"900",className:"bg-gray-900"},{level:"950",className:"bg-gray-950"}]}),e.jsx(s,{children:"Sumi (墨)"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Ink-tinted neutral scale with a subtle blue undertone, inspired by traditional sumi ink."}),e.jsx(r,{shades:[{level:"50",className:"bg-sumi-50"},{level:"100",className:"bg-sumi-100"},{level:"200",className:"bg-sumi-200"},{level:"300",className:"bg-sumi-300"},{level:"400",className:"bg-sumi-400"},{level:"500",className:"bg-sumi-500"},{level:"600",className:"bg-sumi-600"},{level:"700",className:"bg-sumi-700"},{level:"800",className:"bg-sumi-800"},{level:"900",className:"bg-sumi-900"},{level:"950",className:"bg-sumi-950"}]}),e.jsx(s,{children:"Blue"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Default primary color. Used as the base for the Primary scale when no seasonal theme is active."}),e.jsx(r,{shades:[{level:"50",className:"bg-blue-50"},{level:"100",className:"bg-blue-100"},{level:"200",className:"bg-blue-200"},{level:"300",className:"bg-blue-300"},{level:"400",className:"bg-blue-400"},{level:"500",className:"bg-blue-500"},{level:"600",className:"bg-blue-600"},{level:"700",className:"bg-blue-700"},{level:"800",className:"bg-blue-800"},{level:"900",className:"bg-blue-900"},{level:"950",className:"bg-blue-950"}]}),e.jsx(s,{children:"Vermillion (朱)"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Traditional Japanese vermillion red, used as the accent color."}),e.jsx(r,{shades:[{level:"50",className:"bg-vermillion-50"},{level:"100",className:"bg-vermillion-100"},{level:"200",className:"bg-vermillion-200"},{level:"300",className:"bg-vermillion-300"},{level:"400",className:"bg-vermillion-400"},{level:"500",className:"bg-vermillion-500"},{level:"600",className:"bg-vermillion-600"},{level:"700",className:"bg-vermillion-700"},{level:"800",className:"bg-vermillion-800"},{level:"900",className:"bg-vermillion-900"},{level:"950",className:"bg-vermillion-950"}]}),e.jsx(s,{children:"Green"}),e.jsx(r,{shades:[{level:"50",className:"bg-green-50"},{level:"100",className:"bg-green-100"},{level:"200",className:"bg-green-200"},{level:"300",className:"bg-green-300"},{level:"400",className:"bg-green-400"},{level:"500",className:"bg-green-500"},{level:"600",className:"bg-green-600"},{level:"700",className:"bg-green-700"},{level:"800",className:"bg-green-800"},{level:"900",className:"bg-green-900"},{level:"950",className:"bg-green-950"}]}),e.jsx(s,{children:"Yellow"}),e.jsx(r,{shades:[{level:"50",className:"bg-yellow-50"},{level:"100",className:"bg-yellow-100"},{level:"200",className:"bg-yellow-200"},{level:"300",className:"bg-yellow-300"},{level:"400",className:"bg-yellow-400"},{level:"500",className:"bg-yellow-500"},{level:"600",className:"bg-yellow-600"},{level:"700",className:"bg-yellow-700"},{level:"800",className:"bg-yellow-800"},{level:"900",className:"bg-yellow-900"},{level:"950",className:"bg-yellow-950"}]}),e.jsx(s,{children:"Amber"}),e.jsx(r,{shades:[{level:"50",className:"bg-amber-50"},{level:"100",className:"bg-amber-100"},{level:"200",className:"bg-amber-200"},{level:"300",className:"bg-amber-300"},{level:"400",className:"bg-amber-400"},{level:"500",className:"bg-amber-500"},{level:"600",className:"bg-amber-600"},{level:"700",className:"bg-amber-700"},{level:"800",className:"bg-amber-800"},{level:"900",className:"bg-amber-900"},{level:"950",className:"bg-amber-950"}]}),e.jsx(s,{children:"Purple"}),e.jsx(r,{shades:[{level:"50",className:"bg-purple-50"},{level:"100",className:"bg-purple-100"},{level:"200",className:"bg-purple-200"},{level:"300",className:"bg-purple-300"},{level:"400",className:"bg-purple-400"},{level:"500",className:"bg-purple-500"},{level:"600",className:"bg-purple-600"},{level:"700",className:"bg-purple-700"},{level:"800",className:"bg-purple-800"},{level:"900",className:"bg-purple-900"},{level:"950",className:"bg-purple-950"}]}),e.jsx(t,{children:"Seasonal themes"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:["Eight seasonal color themes based on the Japanese 二十四節気 (24 solar terms). Each theme overrides the primary color scale via the"," ",e.jsx("code",{className:"text-xs bg-gray-100 px-1.5 py-0.5 rounded",children:"data-season"})," attribute on the root element."]}),e.jsx("div",{className:"flex flex-col gap-5",children:[{label:"Spring Early",jp:"立春",hue:12},{label:"Spring Late",jp:"春分",hue:138},{label:"Summer Early",jp:"立夏",hue:162},{label:"Summer Peak",jp:"夏至",hue:45},{label:"Autumn Early",jp:"立秋",hue:230},{label:"Autumn Late",jp:"秋分",hue:70},{label:"Winter Early",jp:"立冬",hue:250},{label:"Winter Deep",jp:"冬至",hue:255}].map(a=>{const o=[50,100,200,300,400,500,600,700,800,900,950],m={50:.98,100:.96,200:.91,300:.83,400:.74,500:.64,600:.56,700:.46,800:.36,900:.27,950:.15},i={50:.02,100:.04,200:.04,300:.09,400:.09,500:.09,600:.08,700:.08,800:.05,900:.05,950:.03};return e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium text-foreground mb-1",children:[a.label," ",e.jsxs("span",{className:"text-foreground-muted",children:["(",a.jp,")"]})]}),e.jsx(r,{shades:o.map(n=>({level:String(n),style:{backgroundColor:`oklch(${m[n]} ${i[n]} ${a.hue})`}}))})]},a.label)})})]})};var d,b,g;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-4">Colors</h1>
      <p className="text-base text-foreground-muted leading-relaxed mb-8">
        Schatten's color system is inspired by Japanese calligraphy — ink on paper. The consistent
        use of color in our design system keeps cognitive loads low and makes for a unified and
        accessible user experience. Colors adapt automatically between light and dark mode.
      </p>

      <SectionTitle>Semantic Colors</SectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        These tokens are used in components. They automatically adapt to light/dark mode.
      </p>

      <SubsectionTitle>Surfaces &amp; Foreground</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="background" description="Page background" className="bg-background border border-border" />
        <ColorRow name="surface" description="Card and container surfaces" className="bg-surface border border-border" />
        <ColorRow name="surface-hover" description="Hover state for surfaces" className="bg-surface-hover border border-border" />
        <ColorRow name="foreground" description="Primary text color" className="bg-foreground" />
        <ColorRow name="foreground-muted" description="Secondary/helper text" className="bg-foreground-muted" />
        <ColorRow name="foreground-subtle" description="Tertiary text" className="bg-foreground-subtle" />
      </div>

      <SubsectionTitle>Solid (Filled Components)</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="solid" description="Filled component background (e.g. primary button)" className="bg-solid" />
        <ColorRow name="solid-hover" description="Hover state for filled components" className="bg-solid-hover" />
        <ColorRow name="solid-foreground" description="Text on filled components" className="bg-solid-foreground border border-border" />
      </div>

      <SubsectionTitle>Destructive &amp; Accent</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="destructive" description="Destructive actions" className="bg-destructive" />
        <ColorRow name="destructive-foreground" description="Text on destructive" className="bg-destructive-foreground border border-border" />
        <ColorRow name="accent" description="Vermillion accent for emphasis" className="bg-accent" />
      </div>

      <SubsectionTitle>Border &amp; Ring</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="border" description="Default border for dividers" className="bg-border" />
        <ColorRow name="border-strong" description="Strong border (e.g. secondary button)" className="bg-border-strong" />
        <ColorRow name="ring" description="Focus ring color" className="bg-ring" />
      </div>

      <SubsectionTitle>Status</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="success" description="Positive actions and states" className="bg-success" />
        <ColorRow name="warning" description="Caution states that need attention" className="bg-warning" />
        <ColorRow name="destructive" description="Destructive actions and error states" className="bg-destructive" />
        <ColorRow name="destructive-subtle" description="Subtle background for error states" className="bg-destructive-subtle border border-border" />
      </div>

      <SectionTitle>Primitive Palette</SectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Core brand colors inspired by Japanese calligraphy. These are fixed values that do not
        change between light and dark mode. Components should use semantic tokens above instead.
      </p>

      <SubsectionTitle>Ink &amp; Paper</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="--ink-black" description="#1a1a1a — Darkest ink tone" style={{
        backgroundColor: 'var(--ink-black)'
      }} />
        <ColorRow name="--ink-dark" description="#2d2d2d — Secondary ink tone" style={{
        backgroundColor: 'var(--ink-dark)'
      }} />
        <ColorRow name="--ink-medium" description="#4a4a4a — Medium ink tone" style={{
        backgroundColor: 'var(--ink-medium)'
      }} />
        <ColorRow name="--ink-light" description="#6b6b6b — Light ink" style={{
        backgroundColor: 'var(--ink-light)'
      }} />
        <ColorRow name="--paper-white" description="#fafafa — Lightest paper" style={{
        backgroundColor: 'var(--paper-white)',
        border: '1px solid var(--color-border)'
      }} />
        <ColorRow name="--paper-warm" description="#f5f3f0 — Warm paper" style={{
        backgroundColor: 'var(--paper-warm)',
        border: '1px solid var(--color-border)'
      }} />
        <ColorRow name="--paper-cream" description="#f0ede8 — Cream paper" style={{
        backgroundColor: 'var(--paper-cream)',
        border: '1px solid var(--color-border)'
      }} />
      </div>

      <SectionTitle>Color Scales</SectionTitle>

      <SubsectionTitle>Primary</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Primary color scale mapped from theme tokens. The default theme uses blue; seasonal themes
        override this entire scale.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-primary-50'
    }, {
      level: '100',
      className: 'bg-primary-100'
    }, {
      level: '200',
      className: 'bg-primary-200'
    }, {
      level: '300',
      className: 'bg-primary-300'
    }, {
      level: '400',
      className: 'bg-primary-400'
    }, {
      level: '500',
      className: 'bg-primary-500'
    }, {
      level: '600',
      className: 'bg-primary-600'
    }, {
      level: '700',
      className: 'bg-primary-700'
    }, {
      level: '800',
      className: 'bg-primary-800'
    }, {
      level: '900',
      className: 'bg-primary-900'
    }, {
      level: '950',
      className: 'bg-primary-950'
    }]} />

      <SubsectionTitle>Gray</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Neutral gray scale defined in OKLCH for perceptually uniform steps.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-gray-50'
    }, {
      level: '100',
      className: 'bg-gray-100'
    }, {
      level: '200',
      className: 'bg-gray-200'
    }, {
      level: '300',
      className: 'bg-gray-300'
    }, {
      level: '400',
      className: 'bg-gray-400'
    }, {
      level: '500',
      className: 'bg-gray-500'
    }, {
      level: '600',
      className: 'bg-gray-600'
    }, {
      level: '700',
      className: 'bg-gray-700'
    }, {
      level: '800',
      className: 'bg-gray-800'
    }, {
      level: '900',
      className: 'bg-gray-900'
    }, {
      level: '950',
      className: 'bg-gray-950'
    }]} />

      <SubsectionTitle>Sumi (墨)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Ink-tinted neutral scale with a subtle blue undertone, inspired by traditional sumi ink.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-sumi-50'
    }, {
      level: '100',
      className: 'bg-sumi-100'
    }, {
      level: '200',
      className: 'bg-sumi-200'
    }, {
      level: '300',
      className: 'bg-sumi-300'
    }, {
      level: '400',
      className: 'bg-sumi-400'
    }, {
      level: '500',
      className: 'bg-sumi-500'
    }, {
      level: '600',
      className: 'bg-sumi-600'
    }, {
      level: '700',
      className: 'bg-sumi-700'
    }, {
      level: '800',
      className: 'bg-sumi-800'
    }, {
      level: '900',
      className: 'bg-sumi-900'
    }, {
      level: '950',
      className: 'bg-sumi-950'
    }]} />

      <SubsectionTitle>Blue</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Default primary color. Used as the base for the Primary scale when no seasonal theme is
        active.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-blue-50'
    }, {
      level: '100',
      className: 'bg-blue-100'
    }, {
      level: '200',
      className: 'bg-blue-200'
    }, {
      level: '300',
      className: 'bg-blue-300'
    }, {
      level: '400',
      className: 'bg-blue-400'
    }, {
      level: '500',
      className: 'bg-blue-500'
    }, {
      level: '600',
      className: 'bg-blue-600'
    }, {
      level: '700',
      className: 'bg-blue-700'
    }, {
      level: '800',
      className: 'bg-blue-800'
    }, {
      level: '900',
      className: 'bg-blue-900'
    }, {
      level: '950',
      className: 'bg-blue-950'
    }]} />

      <SubsectionTitle>Vermillion (朱)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Traditional Japanese vermillion red, used as the accent color.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-vermillion-50'
    }, {
      level: '100',
      className: 'bg-vermillion-100'
    }, {
      level: '200',
      className: 'bg-vermillion-200'
    }, {
      level: '300',
      className: 'bg-vermillion-300'
    }, {
      level: '400',
      className: 'bg-vermillion-400'
    }, {
      level: '500',
      className: 'bg-vermillion-500'
    }, {
      level: '600',
      className: 'bg-vermillion-600'
    }, {
      level: '700',
      className: 'bg-vermillion-700'
    }, {
      level: '800',
      className: 'bg-vermillion-800'
    }, {
      level: '900',
      className: 'bg-vermillion-900'
    }, {
      level: '950',
      className: 'bg-vermillion-950'
    }]} />

      <SubsectionTitle>Green</SubsectionTitle>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-green-50'
    }, {
      level: '100',
      className: 'bg-green-100'
    }, {
      level: '200',
      className: 'bg-green-200'
    }, {
      level: '300',
      className: 'bg-green-300'
    }, {
      level: '400',
      className: 'bg-green-400'
    }, {
      level: '500',
      className: 'bg-green-500'
    }, {
      level: '600',
      className: 'bg-green-600'
    }, {
      level: '700',
      className: 'bg-green-700'
    }, {
      level: '800',
      className: 'bg-green-800'
    }, {
      level: '900',
      className: 'bg-green-900'
    }, {
      level: '950',
      className: 'bg-green-950'
    }]} />

      <SubsectionTitle>Yellow</SubsectionTitle>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-yellow-50'
    }, {
      level: '100',
      className: 'bg-yellow-100'
    }, {
      level: '200',
      className: 'bg-yellow-200'
    }, {
      level: '300',
      className: 'bg-yellow-300'
    }, {
      level: '400',
      className: 'bg-yellow-400'
    }, {
      level: '500',
      className: 'bg-yellow-500'
    }, {
      level: '600',
      className: 'bg-yellow-600'
    }, {
      level: '700',
      className: 'bg-yellow-700'
    }, {
      level: '800',
      className: 'bg-yellow-800'
    }, {
      level: '900',
      className: 'bg-yellow-900'
    }, {
      level: '950',
      className: 'bg-yellow-950'
    }]} />

      <SubsectionTitle>Amber</SubsectionTitle>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-amber-50'
    }, {
      level: '100',
      className: 'bg-amber-100'
    }, {
      level: '200',
      className: 'bg-amber-200'
    }, {
      level: '300',
      className: 'bg-amber-300'
    }, {
      level: '400',
      className: 'bg-amber-400'
    }, {
      level: '500',
      className: 'bg-amber-500'
    }, {
      level: '600',
      className: 'bg-amber-600'
    }, {
      level: '700',
      className: 'bg-amber-700'
    }, {
      level: '800',
      className: 'bg-amber-800'
    }, {
      level: '900',
      className: 'bg-amber-900'
    }, {
      level: '950',
      className: 'bg-amber-950'
    }]} />

      <SubsectionTitle>Purple</SubsectionTitle>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-purple-50'
    }, {
      level: '100',
      className: 'bg-purple-100'
    }, {
      level: '200',
      className: 'bg-purple-200'
    }, {
      level: '300',
      className: 'bg-purple-300'
    }, {
      level: '400',
      className: 'bg-purple-400'
    }, {
      level: '500',
      className: 'bg-purple-500'
    }, {
      level: '600',
      className: 'bg-purple-600'
    }, {
      level: '700',
      className: 'bg-purple-700'
    }, {
      level: '800',
      className: 'bg-purple-800'
    }, {
      level: '900',
      className: 'bg-purple-900'
    }, {
      level: '950',
      className: 'bg-purple-950'
    }]} />

      <SectionTitle>Seasonal themes</SectionTitle>
      <p className="text-sm text-foreground-muted mb-4">
        Eight seasonal color themes based on the Japanese 二十四節気 (24 solar terms). Each theme
        overrides the primary color scale via the{' '}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">data-season</code> attribute on
        the root element.
      </p>
      <div className="flex flex-col gap-5">
        {([{
        label: 'Spring Early',
        jp: '立春',
        hue: 12
      }, {
        label: 'Spring Late',
        jp: '春分',
        hue: 138
      }, {
        label: 'Summer Early',
        jp: '立夏',
        hue: 162
      }, {
        label: 'Summer Peak',
        jp: '夏至',
        hue: 45
      }, {
        label: 'Autumn Early',
        jp: '立秋',
        hue: 230
      }, {
        label: 'Autumn Late',
        jp: '秋分',
        hue: 70
      }, {
        label: 'Winter Early',
        jp: '立冬',
        hue: 250
      }, {
        label: 'Winter Deep',
        jp: '冬至',
        hue: 255
      }] as const).map(season => {
        const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
        const lightnessMap: Record<number, number> = {
          50: 0.98,
          100: 0.96,
          200: 0.91,
          300: 0.83,
          400: 0.74,
          500: 0.64,
          600: 0.56,
          700: 0.46,
          800: 0.36,
          900: 0.27,
          950: 0.15
        };
        const chromaMap: Record<number, number> = {
          50: 0.02,
          100: 0.04,
          200: 0.04,
          300: 0.09,
          400: 0.09,
          500: 0.09,
          600: 0.08,
          700: 0.08,
          800: 0.05,
          900: 0.05,
          950: 0.03
        };
        return <div key={season.label}>
              <p className="text-sm font-medium text-foreground mb-1">
                {season.label} <span className="text-foreground-muted">({season.jp})</span>
              </p>
              <ScaleRow shades={shades.map(s => ({
            level: String(s),
            style: {
              backgroundColor: \`oklch(\${lightnessMap[s]} \${chromaMap[s]} \${season.hue})\`
            }
          }))} />
            </div>;
      })}
      </div>
    </div>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const N=["Colors"];export{c as Colors,N as __namedExportsOrder,v as default};
