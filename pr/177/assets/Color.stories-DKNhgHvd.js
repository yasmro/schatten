import{j as e}from"./iframe-BMlkTAPG.js";import"./preload-helper-CV9Dllxu.js";const v={title:"Foundation/Color",parameters:{layout:"fullscreen"}},r=({name:s,description:o,className:i,style:c})=>e.jsxs("div",{className:"flex items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg shrink-0 ${i??""}`,style:c}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-foreground font-mono",children:s}),e.jsx("p",{className:"text-xs text-foreground-muted",children:o})]})]}),l=({shades:s})=>e.jsx("div",{className:"flex gap-1",children:s.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg ${o.className??""}`,style:o.style}),e.jsx("span",{className:"text-[10px] text-foreground-muted font-mono",children:o.level})]},o.level))}),t=({children:s})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:s}),a=({children:s})=>e.jsx("h3",{className:"text-base font-semibold text-foreground mt-6 mb-3",children:s}),n={name:"Colors",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:"Colors"}),e.jsx("p",{className:"text-base text-foreground-muted leading-relaxed mb-8",children:"Schatten's color system is inspired by Japanese calligraphy — ink on paper. The consistent use of color in our design system keeps cognitive loads low and makes for a unified and accessible user experience. Colors adapt automatically between light and dark mode."}),e.jsx(t,{children:"Semantic Colors"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"These tokens are used in components. They automatically adapt to light/dark mode."}),e.jsx(a,{children:"Surfaces & Foreground"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"background",description:"Page background",className:"bg-background border border-border"}),e.jsx(r,{name:"surface",description:"Card and container surfaces",className:"bg-surface border border-border"}),e.jsx(r,{name:"surface-hover",description:"Hover state for surfaces",className:"bg-surface-hover border border-border"}),e.jsx(r,{name:"foreground",description:"Primary text color",className:"bg-foreground"}),e.jsx(r,{name:"foreground-muted",description:"Secondary / helper text — less prominent than default",className:"bg-foreground-muted"}),e.jsx(r,{name:"foreground-subtle",description:"Tertiary text — faintest of the three",className:"bg-foreground-subtle"})]}),e.jsx(a,{children:"Inverted Foreground"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"For text placed on saturated / dark-background containers (solid Toast or Callout, primary fills, …). Mirrors the foreground hierarchy."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"inverted-foreground",description:"Primary text on saturated surface",className:"bg-inverted-foreground border border-border"}),e.jsx(r,{name:"inverted-foreground-muted",description:"Secondary / helper text on saturated surface",className:"bg-inverted-foreground-muted border border-border"}),e.jsx(r,{name:"inverted-foreground-subtle",description:"Tertiary text on saturated surface",className:"bg-inverted-foreground-subtle border border-border"})]}),e.jsx(a,{children:"Solid (Filled Components)"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"solid",description:"Filled component background (e.g. primary button)",className:"bg-solid"}),e.jsx(r,{name:"solid-hover",description:"Hover state for filled components",className:"bg-solid-hover"}),e.jsx(r,{name:"solid-foreground",description:"Text on filled components",className:"bg-solid-foreground border border-border"})]}),e.jsx(a,{children:"Destructive & Accent"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"destructive",description:"Destructive actions",className:"bg-destructive"}),e.jsx(r,{name:"destructive-foreground",description:"Text on destructive",className:"bg-destructive-foreground border border-border"}),e.jsx(r,{name:"accent",description:"Vermillion accent for emphasis",className:"bg-accent"})]}),e.jsx(a,{children:"Border & Ring"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"border",description:"Default border for dividers",className:"bg-border"}),e.jsx(r,{name:"border-strong",description:"Strong border (e.g. secondary button)",className:"bg-border-strong"}),e.jsx(r,{name:"ring",description:"Focus ring color",className:"bg-ring"})]}),e.jsx(a,{children:"State Tokens"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each state provides four tokens — ",e.jsx("code",{children:"base"})," (main color), ",e.jsx("code",{children:"hover"})," ","(interactive sibling), ",e.jsx("code",{children:"foreground"})," (text on base) and ",e.jsx("code",{children:"subtle"})," (faint tinted background)."]}),e.jsx(a,{children:"Error"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Form validation and error notifications. Visually shares vermillion with"," ",e.jsx("code",{children:"destructive"}),", but is semantically distinct."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"error",description:"Error base color",className:"bg-error"}),e.jsx(r,{name:"error-hover",description:"Hover state for error",className:"bg-error-hover"}),e.jsx(r,{name:"error-foreground",description:"Text on error base",className:"bg-error-foreground border border-border"}),e.jsx(r,{name:"error-subtle",description:"Subtle background for error states",className:"bg-error-subtle border border-border"})]}),e.jsx(a,{children:"Success"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"success",description:"Success base color",className:"bg-success"}),e.jsx(r,{name:"success-hover",description:"Hover state for success",className:"bg-success-hover"}),e.jsx(r,{name:"success-foreground",description:"Text on success base",className:"bg-success-foreground border border-border"}),e.jsx(r,{name:"success-subtle",description:"Subtle background for success states",className:"bg-success-subtle border border-border"})]}),e.jsx(a,{children:"Warning"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"warning",description:"Warning base color",className:"bg-warning"}),e.jsx(r,{name:"warning-hover",description:"Hover state for warning",className:"bg-warning-hover"}),e.jsx(r,{name:"warning-foreground",description:"Text on warning base",className:"bg-warning-foreground border border-border"}),e.jsx(r,{name:"warning-subtle",description:"Subtle background for warning states",className:"bg-warning-subtle border border-border"})]}),e.jsx(a,{children:"Info"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Informational notifications. References blue directly so themes that retune"," ",e.jsx("code",{children:"primary"})," do not affect info."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"info",description:"Info base color",className:"bg-info"}),e.jsx(r,{name:"info-hover",description:"Hover state for info",className:"bg-info-hover"}),e.jsx(r,{name:"info-foreground",description:"Text on info base",className:"bg-info-foreground border border-border"}),e.jsx(r,{name:"info-subtle",description:"Subtle background for info states",className:"bg-info-subtle border border-border"})]}),e.jsx(a,{children:"Filled Treatments (a11y audit)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each row shows a state's ",e.jsx("code",{children:"bg-X"})," with ",e.jsx("code",{children:"text-X-foreground"}),' applied — the canonical "filled" treatment used by Toast / Alert / Button. Toggle Storybook between light and dark themes to verify text remains readable in both modes.']}),e.jsx("div",{className:"flex flex-col gap-2",children:[{name:"destructive",bg:"bg-destructive",fg:"text-destructive-foreground"},{name:"error",bg:"bg-error",fg:"text-error-foreground"},{name:"success",bg:"bg-success",fg:"text-success-foreground"},{name:"warning",bg:"bg-warning",fg:"text-warning-foreground"},{name:"info",bg:"bg-info",fg:"text-info-foreground"}].map(s=>e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 ${s.bg} ${s.fg}`,children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:s.name}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]},s.name))}),e.jsx(a,{children:"Subtle Treatments (a11y audit)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each row shows a state's ",e.jsx("code",{children:"bg-X-subtle"})," with ",e.jsx("code",{children:"text-X"}),' applied — the "soft" treatment used by Input error background. Verify text remains readable in both themes.']}),e.jsx("div",{className:"flex flex-col gap-2",children:[{name:"destructive",bg:"bg-destructive-subtle",fg:"text-destructive"},{name:"error",bg:"bg-error-subtle",fg:"text-error"},{name:"success",bg:"bg-success-subtle",fg:"text-success"},{name:"warning",bg:"bg-warning-subtle",fg:"text-warning"},{name:"info",bg:"bg-info-subtle",fg:"text-info"}].map(s=>e.jsxs("div",{className:`flex items-center gap-3 rounded-lg border border-border px-4 py-3 ${s.bg} ${s.fg}`,children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:s.name}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]},s.name))}),e.jsx(t,{children:"Primitive Palette"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Core brand colors inspired by Japanese calligraphy. These are fixed values that do not change between light and dark mode. Components should use semantic tokens above instead."}),e.jsx(a,{children:"Ink & Paper"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(r,{name:"--ink-black",description:"#1a1a1a — Darkest ink tone",style:{backgroundColor:"var(--ink-black)"}}),e.jsx(r,{name:"--ink-dark",description:"#2d2d2d — Secondary ink tone",style:{backgroundColor:"var(--ink-dark)"}}),e.jsx(r,{name:"--ink-medium",description:"#4a4a4a — Medium ink tone",style:{backgroundColor:"var(--ink-medium)"}}),e.jsx(r,{name:"--ink-light",description:"#6b6b6b — Light ink",style:{backgroundColor:"var(--ink-light)"}}),e.jsx(r,{name:"--ink-subtle",description:"Faintest ink — used by foreground-subtle (tertiary text)",style:{backgroundColor:"var(--ink-subtle)"}}),e.jsx(r,{name:"--paper-white",description:"#fafafa — Lightest paper",style:{backgroundColor:"var(--paper-white)",border:"1px solid var(--color-border)"}}),e.jsx(r,{name:"--paper-warm",description:"#f5f3f0 — Warm paper",style:{backgroundColor:"var(--paper-warm)",border:"1px solid var(--color-border)"}}),e.jsx(r,{name:"--paper-cream",description:"#f0ede8 — Cream paper",style:{backgroundColor:"var(--paper-cream)",border:"1px solid var(--color-border)"}})]}),e.jsx(t,{children:"Color Scales"}),e.jsx(a,{children:"Primary"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Primary color scale mapped from theme tokens. The default theme uses blue; seasonal themes override this entire scale."}),e.jsx(l,{shades:[{level:"50",className:"bg-primary-50"},{level:"100",className:"bg-primary-100"},{level:"200",className:"bg-primary-200"},{level:"300",className:"bg-primary-300"},{level:"400",className:"bg-primary-400"},{level:"500",className:"bg-primary-500"},{level:"600",className:"bg-primary-600"},{level:"700",className:"bg-primary-700"},{level:"800",className:"bg-primary-800"},{level:"900",className:"bg-primary-900"},{level:"950",className:"bg-primary-950"}]}),e.jsx(a,{children:"Gray"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Neutral gray scale defined in OKLCH for perceptually uniform steps."}),e.jsx(l,{shades:[{level:"50",className:"bg-gray-50"},{level:"100",className:"bg-gray-100"},{level:"200",className:"bg-gray-200"},{level:"300",className:"bg-gray-300"},{level:"400",className:"bg-gray-400"},{level:"500",className:"bg-gray-500"},{level:"600",className:"bg-gray-600"},{level:"700",className:"bg-gray-700"},{level:"800",className:"bg-gray-800"},{level:"900",className:"bg-gray-900"},{level:"950",className:"bg-gray-950"}]}),e.jsx(a,{children:"Sumi (墨)"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Ink-tinted neutral scale with a subtle blue undertone, inspired by traditional sumi ink."}),e.jsx(l,{shades:[{level:"50",className:"bg-sumi-50"},{level:"100",className:"bg-sumi-100"},{level:"200",className:"bg-sumi-200"},{level:"300",className:"bg-sumi-300"},{level:"400",className:"bg-sumi-400"},{level:"500",className:"bg-sumi-500"},{level:"600",className:"bg-sumi-600"},{level:"700",className:"bg-sumi-700"},{level:"800",className:"bg-sumi-800"},{level:"900",className:"bg-sumi-900"},{level:"950",className:"bg-sumi-950"}]}),e.jsx(a,{children:"Blue"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Default primary color. Used as the base for the Primary scale when no seasonal theme is active."}),e.jsx(l,{shades:[{level:"50",className:"bg-blue-50"},{level:"100",className:"bg-blue-100"},{level:"200",className:"bg-blue-200"},{level:"300",className:"bg-blue-300"},{level:"400",className:"bg-blue-400"},{level:"500",className:"bg-blue-500"},{level:"600",className:"bg-blue-600"},{level:"700",className:"bg-blue-700"},{level:"800",className:"bg-blue-800"},{level:"900",className:"bg-blue-900"},{level:"950",className:"bg-blue-950"}]}),e.jsx(a,{children:"Vermillion (朱)"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Traditional Japanese vermillion red, used as the accent color."}),e.jsx(l,{shades:[{level:"50",className:"bg-vermillion-50"},{level:"100",className:"bg-vermillion-100"},{level:"200",className:"bg-vermillion-200"},{level:"300",className:"bg-vermillion-300"},{level:"400",className:"bg-vermillion-400"},{level:"500",className:"bg-vermillion-500"},{level:"600",className:"bg-vermillion-600"},{level:"700",className:"bg-vermillion-700"},{level:"800",className:"bg-vermillion-800"},{level:"900",className:"bg-vermillion-900"},{level:"950",className:"bg-vermillion-950"}]}),e.jsx(a,{children:"Green"}),e.jsx(l,{shades:[{level:"50",className:"bg-green-50"},{level:"100",className:"bg-green-100"},{level:"200",className:"bg-green-200"},{level:"300",className:"bg-green-300"},{level:"400",className:"bg-green-400"},{level:"500",className:"bg-green-500"},{level:"600",className:"bg-green-600"},{level:"700",className:"bg-green-700"},{level:"800",className:"bg-green-800"},{level:"900",className:"bg-green-900"},{level:"950",className:"bg-green-950"}]}),e.jsx(a,{children:"Yellow"}),e.jsx(l,{shades:[{level:"50",className:"bg-yellow-50"},{level:"100",className:"bg-yellow-100"},{level:"200",className:"bg-yellow-200"},{level:"300",className:"bg-yellow-300"},{level:"400",className:"bg-yellow-400"},{level:"500",className:"bg-yellow-500"},{level:"600",className:"bg-yellow-600"},{level:"700",className:"bg-yellow-700"},{level:"800",className:"bg-yellow-800"},{level:"900",className:"bg-yellow-900"},{level:"950",className:"bg-yellow-950"}]}),e.jsx(a,{children:"Amber"}),e.jsx(l,{shades:[{level:"50",className:"bg-amber-50"},{level:"100",className:"bg-amber-100"},{level:"200",className:"bg-amber-200"},{level:"300",className:"bg-amber-300"},{level:"400",className:"bg-amber-400"},{level:"500",className:"bg-amber-500"},{level:"600",className:"bg-amber-600"},{level:"700",className:"bg-amber-700"},{level:"800",className:"bg-amber-800"},{level:"900",className:"bg-amber-900"},{level:"950",className:"bg-amber-950"}]}),e.jsx(a,{children:"Purple"}),e.jsx(l,{shades:[{level:"50",className:"bg-purple-50"},{level:"100",className:"bg-purple-100"},{level:"200",className:"bg-purple-200"},{level:"300",className:"bg-purple-300"},{level:"400",className:"bg-purple-400"},{level:"500",className:"bg-purple-500"},{level:"600",className:"bg-purple-600"},{level:"700",className:"bg-purple-700"},{level:"800",className:"bg-purple-800"},{level:"900",className:"bg-purple-900"},{level:"950",className:"bg-purple-950"}]}),e.jsx(t,{children:"Seasonal themes"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:["Eight seasonal color themes based on the Japanese 二十四節気 (24 solar terms). Each theme overrides the primary color scale via the"," ",e.jsx("code",{className:"text-xs bg-gray-100 px-1.5 py-0.5 rounded",children:"data-season"})," attribute on the root element."]}),e.jsx("div",{className:"flex flex-col gap-5",children:[{label:"Spring Early",jp:"立春",hue:12},{label:"Spring Late",jp:"春分",hue:138},{label:"Summer Early",jp:"立夏",hue:162},{label:"Summer Peak",jp:"夏至",hue:45},{label:"Autumn Early",jp:"立秋",hue:230},{label:"Autumn Late",jp:"秋分",hue:70},{label:"Winter Early",jp:"立冬",hue:250},{label:"Winter Deep",jp:"冬至",hue:255}].map(s=>{const o=[50,100,200,300,400,500,600,700,800,900,950],i={50:.98,100:.96,200:.91,300:.83,400:.74,500:.64,600:.56,700:.46,800:.36,900:.27,950:.15},c={50:.02,100:.04,200:.04,300:.09,400:.09,500:.09,600:.08,700:.08,800:.05,900:.05,950:.03};return e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium text-foreground mb-1",children:[s.label," ",e.jsxs("span",{className:"text-foreground-muted",children:["(",s.jp,")"]})]}),e.jsx(l,{shades:o.map(d=>({level:String(d),style:{backgroundColor:`oklch(${i[d]} ${c[d]} ${s.hue})`}}))})]},s.label)})})]})};var m,b,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <ColorRow name="foreground-muted" description="Secondary / helper text — less prominent than default" className="bg-foreground-muted" />
        <ColorRow name="foreground-subtle" description="Tertiary text — faintest of the three" className="bg-foreground-subtle" />
      </div>

      <SubsectionTitle>Inverted Foreground</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        For text placed on saturated / dark-background containers (solid Toast or Callout, primary
        fills, …). Mirrors the foreground hierarchy.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="inverted-foreground" description="Primary text on saturated surface" className="bg-inverted-foreground border border-border" />
        <ColorRow name="inverted-foreground-muted" description="Secondary / helper text on saturated surface" className="bg-inverted-foreground-muted border border-border" />
        <ColorRow name="inverted-foreground-subtle" description="Tertiary text on saturated surface" className="bg-inverted-foreground-subtle border border-border" />
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

      <SubsectionTitle>State Tokens</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Each state provides four tokens — <code>base</code> (main color), <code>hover</code>{' '}
        (interactive sibling), <code>foreground</code> (text on base) and <code>subtle</code> (faint
        tinted background).
      </p>

      <SubsectionTitle>Error</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Form validation and error notifications. Visually shares vermillion with{' '}
        <code>destructive</code>, but is semantically distinct.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="error" description="Error base color" className="bg-error" />
        <ColorRow name="error-hover" description="Hover state for error" className="bg-error-hover" />
        <ColorRow name="error-foreground" description="Text on error base" className="bg-error-foreground border border-border" />
        <ColorRow name="error-subtle" description="Subtle background for error states" className="bg-error-subtle border border-border" />
      </div>

      <SubsectionTitle>Success</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="success" description="Success base color" className="bg-success" />
        <ColorRow name="success-hover" description="Hover state for success" className="bg-success-hover" />
        <ColorRow name="success-foreground" description="Text on success base" className="bg-success-foreground border border-border" />
        <ColorRow name="success-subtle" description="Subtle background for success states" className="bg-success-subtle border border-border" />
      </div>

      <SubsectionTitle>Warning</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="warning" description="Warning base color" className="bg-warning" />
        <ColorRow name="warning-hover" description="Hover state for warning" className="bg-warning-hover" />
        <ColorRow name="warning-foreground" description="Text on warning base" className="bg-warning-foreground border border-border" />
        <ColorRow name="warning-subtle" description="Subtle background for warning states" className="bg-warning-subtle border border-border" />
      </div>

      <SubsectionTitle>Info</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Informational notifications. References blue directly so themes that retune{' '}
        <code>primary</code> do not affect info.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="info" description="Info base color" className="bg-info" />
        <ColorRow name="info-hover" description="Hover state for info" className="bg-info-hover" />
        <ColorRow name="info-foreground" description="Text on info base" className="bg-info-foreground border border-border" />
        <ColorRow name="info-subtle" description="Subtle background for info states" className="bg-info-subtle border border-border" />
      </div>

      <SubsectionTitle>Filled Treatments (a11y audit)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Each row shows a state's <code>bg-X</code> with <code>text-X-foreground</code> applied — the
        canonical "filled" treatment used by Toast / Alert / Button. Toggle Storybook between light
        and dark themes to verify text remains readable in both modes.
      </p>
      <div className="flex flex-col gap-2">
        {([{
        name: 'destructive',
        bg: 'bg-destructive',
        fg: 'text-destructive-foreground'
      }, {
        name: 'error',
        bg: 'bg-error',
        fg: 'text-error-foreground'
      }, {
        name: 'success',
        bg: 'bg-success',
        fg: 'text-success-foreground'
      }, {
        name: 'warning',
        bg: 'bg-warning',
        fg: 'text-warning-foreground'
      }, {
        name: 'info',
        bg: 'bg-info',
        fg: 'text-info-foreground'
      }] as const).map(s => <div key={s.name} className={\`flex items-center gap-3 rounded-lg px-4 py-3 \${s.bg} \${s.fg}\`}>
            <span className="font-mono text-xs opacity-70">{s.name}</span>
            <span className="text-sm font-medium">The quick brown fox jumps over the lazy dog</span>
          </div>)}
      </div>

      <SubsectionTitle>Subtle Treatments (a11y audit)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Each row shows a state's <code>bg-X-subtle</code> with <code>text-X</code> applied — the
        "soft" treatment used by Input error background. Verify text remains readable in both
        themes.
      </p>
      <div className="flex flex-col gap-2">
        {([{
        name: 'destructive',
        bg: 'bg-destructive-subtle',
        fg: 'text-destructive'
      }, {
        name: 'error',
        bg: 'bg-error-subtle',
        fg: 'text-error'
      }, {
        name: 'success',
        bg: 'bg-success-subtle',
        fg: 'text-success'
      }, {
        name: 'warning',
        bg: 'bg-warning-subtle',
        fg: 'text-warning'
      }, {
        name: 'info',
        bg: 'bg-info-subtle',
        fg: 'text-info'
      }] as const).map(s => <div key={s.name} className={\`flex items-center gap-3 rounded-lg border border-border px-4 py-3 \${s.bg} \${s.fg}\`}>
            <span className="font-mono text-xs opacity-70">{s.name}</span>
            <span className="text-sm font-medium">The quick brown fox jumps over the lazy dog</span>
          </div>)}
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
        <ColorRow name="--ink-subtle" description="Faintest ink — used by foreground-subtle (tertiary text)" style={{
        backgroundColor: 'var(--ink-subtle)'
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const x=["Colors"];export{n as Colors,x as __namedExportsOrder,v as default};
