import{j as e}from"./iframe-Csny-8HZ.js";import"./preload-helper-UDsO79x_.js";const v={title:"Foundation/Color",parameters:{layout:"fullscreen"}},s=({name:a,description:l,className:d,style:i})=>e.jsxs("div",{className:"flex items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg shrink-0 ${d??""}`,style:i}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-foreground font-mono",children:a}),e.jsx("p",{className:"text-xs text-foreground-muted",children:l})]})]}),o=({shades:a})=>e.jsx("div",{className:"flex gap-1",children:a.map(l=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:`w-12 h-12 rounded-lg ${l.className??""}`,style:l.style}),e.jsx("span",{className:"text-[10px] text-foreground-muted font-mono",children:l.level})]},l.level))}),t=({children:a})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:a}),r=({children:a})=>e.jsx("h3",{className:"text-base font-semibold text-foreground mt-6 mb-3",children:a}),n={name:"Colors",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:"Colors"}),e.jsx("p",{className:"text-base text-foreground-muted leading-relaxed mb-8",children:"Schatten's color system is inspired by Japanese calligraphy — ink on paper. The consistent use of color in our design system keeps cognitive loads low and makes for a unified and accessible user experience. Colors adapt automatically between light and dark mode."}),e.jsx(t,{children:"Semantic Colors"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"These tokens are used in components. They automatically adapt to light/dark mode."}),e.jsx(r,{children:"Surfaces & Foreground"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"background",description:"Page background",className:"bg-background border border-border"}),e.jsx(s,{name:"surface",description:"Card and container surfaces",className:"bg-surface border border-border"}),e.jsx(s,{name:"surface-hover",description:"Hover state for surfaces",className:"bg-surface-hover border border-border"}),e.jsx(s,{name:"foreground",description:"Primary text color",className:"bg-foreground"}),e.jsx(s,{name:"foreground-muted",description:"Secondary / helper text — less prominent than default",className:"bg-foreground-muted"}),e.jsx(s,{name:"foreground-subtle",description:"Tertiary text — faintest of the three",className:"bg-foreground-subtle"})]}),e.jsx(r,{children:"Inverted Foreground"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"For text placed on saturated / dark-background containers (solid Toast or Callout, primary fills, …). Mirrors the foreground hierarchy."}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"inverted-foreground",description:"Primary text on saturated surface",className:"bg-inverted-foreground border border-border"}),e.jsx(s,{name:"inverted-foreground-muted",description:"Secondary / helper text on saturated surface",className:"bg-inverted-foreground-muted border border-border"}),e.jsx(s,{name:"inverted-foreground-subtle",description:"Tertiary text on saturated surface",className:"bg-inverted-foreground-subtle border border-border"})]}),e.jsx(r,{children:"Solid (Filled Components)"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"solid",description:"Filled component background (e.g. primary button)",className:"bg-solid"}),e.jsx(s,{name:"solid-hover",description:"Hover state for filled components",className:"bg-solid-hover"}),e.jsx(s,{name:"solid-foreground",description:"Text on filled components",className:"bg-solid-foreground border border-border"})]}),e.jsx(r,{children:"Destructive"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"destructive",description:"Destructive actions",className:"bg-destructive"}),e.jsx(s,{name:"destructive-foreground",description:"Text on destructive",className:"bg-destructive-foreground border border-border"})]}),e.jsx(r,{children:"Brand"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["The two Schatten brand colors exposed as semantic tokens. Unlike state tokens, these name the ",e.jsx("em",{children:"color itself"})," (朱 vermillion / 藍 indigo) rather than a meaning — reach for them for deliberate brand emphasis. The ",e.jsx("code",{children:"-foreground"})," pair is the readable on-color text."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"vermillion",description:"Brand color — 朱 (vermillion)",className:"bg-vermillion"}),e.jsx(s,{name:"vermillion-foreground",description:"Text on vermillion",className:"bg-vermillion-foreground border border-border"}),e.jsx(s,{name:"indigo",description:"Brand color — 藍 (indigo)",className:"bg-indigo"}),e.jsx(s,{name:"indigo-foreground",description:"Text on indigo",className:"bg-indigo-foreground border border-border"})]}),e.jsx(r,{children:"Border & Ring"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"border",description:"Default border for dividers",className:"bg-border"}),e.jsx(s,{name:"border-strong",description:"Strong border (e.g. secondary button)",className:"bg-border-strong"}),e.jsx(s,{name:"ring",description:"Focus ring color",className:"bg-ring"})]}),e.jsx(r,{children:"State Tokens"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each state provides four tokens — ",e.jsx("code",{children:"base"})," (main color), ",e.jsx("code",{children:"hover"})," ","(interactive sibling), ",e.jsx("code",{children:"foreground"})," (text on base) and ",e.jsx("code",{children:"subtle"})," (faint tinted background)."]}),e.jsx(r,{children:"Error"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Form validation and error notifications. Shares the ",e.jsx("code",{children:"red"})," primitive with"," ",e.jsx("code",{children:"destructive"}),", but is semantically distinct."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"error",description:"Error base color",className:"bg-error"}),e.jsx(s,{name:"error-hover",description:"Hover state for error",className:"bg-error-hover"}),e.jsx(s,{name:"error-foreground",description:"Text on error base",className:"bg-error-foreground border border-border"}),e.jsx(s,{name:"error-subtle",description:"Subtle background for error states",className:"bg-error-subtle border border-border"})]}),e.jsx(r,{children:"Success"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"success",description:"Success base color",className:"bg-success"}),e.jsx(s,{name:"success-hover",description:"Hover state for success",className:"bg-success-hover"}),e.jsx(s,{name:"success-foreground",description:"Text on success base",className:"bg-success-foreground border border-border"}),e.jsx(s,{name:"success-subtle",description:"Subtle background for success states",className:"bg-success-subtle border border-border"})]}),e.jsx(r,{children:"Warning"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"warning",description:"Warning base color",className:"bg-warning"}),e.jsx(s,{name:"warning-hover",description:"Hover state for warning",className:"bg-warning-hover"}),e.jsx(s,{name:"warning-foreground",description:"Text on warning base",className:"bg-warning-foreground border border-border"}),e.jsx(s,{name:"warning-subtle",description:"Subtle background for warning states",className:"bg-warning-subtle border border-border"})]}),e.jsx(r,{children:"Info"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Informational notifications. References blue directly so themes that retune"," ",e.jsx("code",{children:"primary"})," do not affect info."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"info",description:"Info base color",className:"bg-info"}),e.jsx(s,{name:"info-hover",description:"Hover state for info",className:"bg-info-hover"}),e.jsx(s,{name:"info-foreground",description:"Text on info base",className:"bg-info-foreground border border-border"}),e.jsx(s,{name:"info-subtle",description:"Subtle background for info states",className:"bg-info-subtle border border-border"})]}),e.jsx(r,{children:"Non-Interactive States"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Form controls that cannot be acted on (",e.jsx("code",{children:"disabled"}),") or are display-only (",e.jsx("code",{children:"readOnly"}),") consume these tokens. They are not state tokens in the"," ",e.jsx("code",{children:"error"}),"/",e.jsx("code",{children:"success"}),"/… sense — there is no ",e.jsx("code",{children:"hover"})," slot."]}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"surface-disabled",description:"Background for disabled controls — cool, muted",className:"bg-surface-disabled border border-border"}),e.jsx(s,{name:"foreground-disabled",description:"Text/icon color for disabled controls",className:"bg-foreground-disabled"}),e.jsx(s,{name:"border-disabled",description:"Border for disabled controls",className:"bg-border-disabled"}),e.jsx(s,{name:"surface-readonly",description:"Background for readOnly controls — warm, static",className:"bg-surface-readonly border border-border"}),e.jsx(s,{name:"border-readonly",description:"Border for readOnly controls",className:"bg-border-readonly"})]}),e.jsx(r,{children:"Disabled vs ReadOnly (a11y audit)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Side-by-side preview of how the two non-interactive treatments look. ",e.jsx("code",{children:"disabled"})," ",'uses a cool muted palette to convey "not usable"; ',e.jsx("code",{children:"readOnly"}),' uses a warm subtle palette to convey "value is informational, but the control is static". Verify both modes.']}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-3 rounded-lg border border-border-disabled bg-surface-disabled px-4 py-3 text-foreground-disabled",children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:"disabled"}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]}),e.jsxs("div",{className:"flex items-center gap-3 rounded-lg border border-border-readonly bg-surface-readonly px-4 py-3 text-foreground",children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:"readOnly"}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]})]}),e.jsx(r,{children:"Filled Treatments (a11y audit)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each row shows a state's ",e.jsx("code",{children:"bg-X"})," with ",e.jsx("code",{children:"text-X-foreground"}),' applied — the canonical "filled" treatment used by Toast / Alert / Button. Toggle Storybook between light and dark themes to verify text remains readable in both modes.']}),e.jsx("div",{className:"flex flex-col gap-2",children:[{name:"destructive",bg:"bg-destructive",fg:"text-destructive-foreground"},{name:"error",bg:"bg-error",fg:"text-error-foreground"},{name:"success",bg:"bg-success",fg:"text-success-foreground"},{name:"warning",bg:"bg-warning",fg:"text-warning-foreground"},{name:"info",bg:"bg-info",fg:"text-info-foreground"}].map(a=>e.jsxs("div",{className:`flex items-center gap-3 rounded-lg px-4 py-3 ${a.bg} ${a.fg}`,children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:a.name}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]},a.name))}),e.jsx(r,{children:"Subtle Treatments (a11y audit)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Each row shows a state's ",e.jsx("code",{children:"bg-X-subtle"})," with ",e.jsx("code",{children:"text-X"}),' applied — the "soft" treatment used by Input error background. Verify text remains readable in both themes.']}),e.jsx("div",{className:"flex flex-col gap-2",children:[{name:"destructive",bg:"bg-destructive-subtle",fg:"text-destructive"},{name:"error",bg:"bg-error-subtle",fg:"text-error"},{name:"success",bg:"bg-success-subtle",fg:"text-success"},{name:"warning",bg:"bg-warning-subtle",fg:"text-warning"},{name:"info",bg:"bg-info-subtle",fg:"text-info"}].map(a=>e.jsxs("div",{className:`flex items-center gap-3 rounded-lg border border-border px-4 py-3 ${a.bg} ${a.fg}`,children:[e.jsx("span",{className:"font-mono text-xs opacity-70",children:a.name}),e.jsx("span",{className:"text-sm font-medium",children:"The quick brown fox jumps over the lazy dog"})]},a.name))}),e.jsx(t,{children:"Primitive Palette"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Core brand colors inspired by Japanese calligraphy. These are fixed values that do not change between light and dark mode. Components should use semantic tokens above instead."}),e.jsx(r,{children:"Ink & Paper"}),e.jsxs("div",{className:"border border-border rounded-xl px-5",children:[e.jsx(s,{name:"--ink-black",description:"#1a1a1a — Darkest ink tone",style:{backgroundColor:"var(--ink-black)"}}),e.jsx(s,{name:"--ink-dark",description:"#2d2d2d — Secondary ink tone",style:{backgroundColor:"var(--ink-dark)"}}),e.jsx(s,{name:"--ink-medium",description:"#4a4a4a — Medium ink tone",style:{backgroundColor:"var(--ink-medium)"}}),e.jsx(s,{name:"--ink-light",description:"#6b6b6b — Light ink",style:{backgroundColor:"var(--ink-light)"}}),e.jsx(s,{name:"--ink-subtle",description:"Faintest ink — used by foreground-subtle (tertiary text)",style:{backgroundColor:"var(--ink-subtle)"}}),e.jsx(s,{name:"--paper-white",description:"#fafafa — Lightest paper",style:{backgroundColor:"var(--paper-white)",border:"1px solid var(--color-border)"}}),e.jsx(s,{name:"--paper-warm",description:"#f5f3f0 — Warm paper",style:{backgroundColor:"var(--paper-warm)",border:"1px solid var(--color-border)"}}),e.jsx(s,{name:"--paper-cream",description:"#f0ede8 — Cream paper",style:{backgroundColor:"var(--paper-cream)",border:"1px solid var(--color-border)"}})]}),e.jsx(t,{children:"Color Scales"}),e.jsx(r,{children:"Theme"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Theme color scale mapped from semantic tokens. The default theme uses blue; seasonal themes override this entire scale via the ",e.jsx("code",{children:"data-theme"})," attribute."]}),e.jsx(o,{shades:[{level:"50",className:"bg-theme-50"},{level:"100",className:"bg-theme-100"},{level:"200",className:"bg-theme-200"},{level:"300",className:"bg-theme-300"},{level:"400",className:"bg-theme-400"},{level:"500",className:"bg-theme-500"},{level:"600",className:"bg-theme-600"},{level:"700",className:"bg-theme-700"},{level:"800",className:"bg-theme-800"},{level:"900",className:"bg-theme-900"},{level:"950",className:"bg-theme-950"}]}),e.jsx(r,{children:"Gray"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Neutral gray scale defined in OKLCH for perceptually uniform steps."}),e.jsx(o,{shades:[{level:"50",className:"bg-gray-50"},{level:"100",className:"bg-gray-100"},{level:"200",className:"bg-gray-200"},{level:"300",className:"bg-gray-300"},{level:"400",className:"bg-gray-400"},{level:"500",className:"bg-gray-500"},{level:"600",className:"bg-gray-600"},{level:"700",className:"bg-gray-700"},{level:"800",className:"bg-gray-800"},{level:"900",className:"bg-gray-900"},{level:"950",className:"bg-gray-950"}]}),e.jsx(r,{children:"Sumi (墨)"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Ink-tinted neutral scale with a subtle blue undertone, inspired by traditional sumi ink."}),e.jsx(o,{shades:[{level:"50",className:"bg-sumi-50"},{level:"100",className:"bg-sumi-100"},{level:"200",className:"bg-sumi-200"},{level:"300",className:"bg-sumi-300"},{level:"400",className:"bg-sumi-400"},{level:"500",className:"bg-sumi-500"},{level:"600",className:"bg-sumi-600"},{level:"700",className:"bg-sumi-700"},{level:"800",className:"bg-sumi-800"},{level:"900",className:"bg-sumi-900"},{level:"950",className:"bg-sumi-950"}]}),e.jsx(r,{children:"Blue"}),e.jsx("p",{className:"text-sm text-foreground-muted mb-3",children:"Default theme color. Used as the base for the Theme scale when no seasonal theme is active."}),e.jsx(o,{shades:[{level:"50",className:"bg-blue-50"},{level:"100",className:"bg-blue-100"},{level:"200",className:"bg-blue-200"},{level:"300",className:"bg-blue-300"},{level:"400",className:"bg-blue-400"},{level:"500",className:"bg-blue-500"},{level:"600",className:"bg-blue-600"},{level:"700",className:"bg-blue-700"},{level:"800",className:"bg-blue-800"},{level:"900",className:"bg-blue-900"},{level:"950",className:"bg-blue-950"}]}),e.jsx(r,{children:"Vermillion (朱)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Traditional Japanese vermillion red — the primary Schatten brand color, surfaced at the semantic layer as ",e.jsx("code",{children:"--color-vermillion"}),"."]}),e.jsx(o,{shades:[{level:"50",className:"bg-vermillion-50"},{level:"100",className:"bg-vermillion-100"},{level:"200",className:"bg-vermillion-200"},{level:"300",className:"bg-vermillion-300"},{level:"400",className:"bg-vermillion-400"},{level:"500",className:"bg-vermillion-500"},{level:"600",className:"bg-vermillion-600"},{level:"700",className:"bg-vermillion-700"},{level:"800",className:"bg-vermillion-800"},{level:"900",className:"bg-vermillion-900"},{level:"950",className:"bg-vermillion-950"}]}),e.jsx(r,{children:"Indigo (藍)"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Traditional Japanese indigo, the second brand color alongside vermillion. Deeper and more saturated than the ",e.jsx("code",{children:"blue"})," scale, which stays pinned to the lighter"," ",e.jsx("code",{children:"info"})," semantic."]}),e.jsx(o,{shades:[{level:"50",className:"bg-indigo-50"},{level:"100",className:"bg-indigo-100"},{level:"200",className:"bg-indigo-200"},{level:"300",className:"bg-indigo-300"},{level:"400",className:"bg-indigo-400"},{level:"500",className:"bg-indigo-500"},{level:"600",className:"bg-indigo-600"},{level:"700",className:"bg-indigo-700"},{level:"800",className:"bg-indigo-800"},{level:"900",className:"bg-indigo-900"},{level:"950",className:"bg-indigo-950"}]}),e.jsx(r,{children:"Red"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-3",children:["Danger scale — backs the ",e.jsx("code",{children:"error"})," and ",e.jsx("code",{children:"destructive"})," semantics. A value-identical copy of ",e.jsx("code",{children:"vermillion"})," today; kept as a separate primitive so brand 朱 and danger red can be retuned independently (see issue #239)."]}),e.jsx(o,{shades:[{level:"50",className:"bg-red-50"},{level:"100",className:"bg-red-100"},{level:"200",className:"bg-red-200"},{level:"300",className:"bg-red-300"},{level:"400",className:"bg-red-400"},{level:"500",className:"bg-red-500"},{level:"600",className:"bg-red-600"},{level:"700",className:"bg-red-700"},{level:"800",className:"bg-red-800"},{level:"900",className:"bg-red-900"},{level:"950",className:"bg-red-950"}]}),e.jsx(r,{children:"Green"}),e.jsx(o,{shades:[{level:"50",className:"bg-green-50"},{level:"100",className:"bg-green-100"},{level:"200",className:"bg-green-200"},{level:"300",className:"bg-green-300"},{level:"400",className:"bg-green-400"},{level:"500",className:"bg-green-500"},{level:"600",className:"bg-green-600"},{level:"700",className:"bg-green-700"},{level:"800",className:"bg-green-800"},{level:"900",className:"bg-green-900"},{level:"950",className:"bg-green-950"}]}),e.jsx(r,{children:"Yellow"}),e.jsx(o,{shades:[{level:"50",className:"bg-yellow-50"},{level:"100",className:"bg-yellow-100"},{level:"200",className:"bg-yellow-200"},{level:"300",className:"bg-yellow-300"},{level:"400",className:"bg-yellow-400"},{level:"500",className:"bg-yellow-500"},{level:"600",className:"bg-yellow-600"},{level:"700",className:"bg-yellow-700"},{level:"800",className:"bg-yellow-800"},{level:"900",className:"bg-yellow-900"},{level:"950",className:"bg-yellow-950"}]}),e.jsx(r,{children:"Amber"}),e.jsx(o,{shades:[{level:"50",className:"bg-amber-50"},{level:"100",className:"bg-amber-100"},{level:"200",className:"bg-amber-200"},{level:"300",className:"bg-amber-300"},{level:"400",className:"bg-amber-400"},{level:"500",className:"bg-amber-500"},{level:"600",className:"bg-amber-600"},{level:"700",className:"bg-amber-700"},{level:"800",className:"bg-amber-800"},{level:"900",className:"bg-amber-900"},{level:"950",className:"bg-amber-950"}]}),e.jsx(r,{children:"Purple"}),e.jsx(o,{shades:[{level:"50",className:"bg-purple-50"},{level:"100",className:"bg-purple-100"},{level:"200",className:"bg-purple-200"},{level:"300",className:"bg-purple-300"},{level:"400",className:"bg-purple-400"},{level:"500",className:"bg-purple-500"},{level:"600",className:"bg-purple-600"},{level:"700",className:"bg-purple-700"},{level:"800",className:"bg-purple-800"},{level:"900",className:"bg-purple-900"},{level:"950",className:"bg-purple-950"}]}),e.jsx(t,{children:"Seasonal themes"}),e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:["Eight seasonal color themes based on the Japanese 二十四節気 (24 solar terms). Each theme overrides the primary color scale via the"," ",e.jsx("code",{className:"text-xs bg-gray-100 px-1.5 py-0.5 rounded",children:"data-theme"})," attribute on the root element (values like"," ",e.jsx("code",{className:"text-xs bg-gray-100 px-1.5 py-0.5 rounded",children:"season--spring-early"}),")."]}),e.jsx("div",{className:"flex flex-col gap-5",children:[{label:"Spring Early",jp:"立春",hue:12},{label:"Spring Late",jp:"春分",hue:138},{label:"Summer Early",jp:"立夏",hue:162},{label:"Summer Peak",jp:"夏至",hue:45},{label:"Autumn Early",jp:"立秋",hue:230},{label:"Autumn Late",jp:"秋分",hue:70},{label:"Winter Early",jp:"立冬",hue:250},{label:"Winter Deep",jp:"冬至",hue:255}].map(a=>{const l=[50,100,200,300,400,500,600,700,800,900,950],d={50:.98,100:.96,200:.91,300:.83,400:.74,500:.64,600:.56,700:.46,800:.36,900:.27,950:.15},i={50:.02,100:.04,200:.04,300:.09,400:.09,500:.09,600:.08,700:.08,800:.05,900:.05,950:.03};return e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm font-medium text-foreground mb-1",children:[a.label," ",e.jsxs("span",{className:"text-foreground-muted",children:["(",a.jp,")"]})]}),e.jsx(o,{shades:l.map(c=>({level:String(c),style:{backgroundColor:`oklch(${d[c]} ${i[c]} ${a.hue})`}}))})]},a.label)})})]})};var m,b,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

      <SubsectionTitle>Destructive</SubsectionTitle>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="destructive" description="Destructive actions" className="bg-destructive" />
        <ColorRow name="destructive-foreground" description="Text on destructive" className="bg-destructive-foreground border border-border" />
      </div>

      <SubsectionTitle>Brand</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        The two Schatten brand colors exposed as semantic tokens. Unlike state tokens, these name
        the <em>color itself</em> (朱 vermillion / 藍 indigo) rather than a meaning — reach for them
        for deliberate brand emphasis. The <code>-foreground</code> pair is the readable on-color
        text.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="vermillion" description="Brand color — 朱 (vermillion)" className="bg-vermillion" />
        <ColorRow name="vermillion-foreground" description="Text on vermillion" className="bg-vermillion-foreground border border-border" />
        <ColorRow name="indigo" description="Brand color — 藍 (indigo)" className="bg-indigo" />
        <ColorRow name="indigo-foreground" description="Text on indigo" className="bg-indigo-foreground border border-border" />
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
        Form validation and error notifications. Shares the <code>red</code> primitive with{' '}
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

      <SubsectionTitle>Non-Interactive States</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Form controls that cannot be acted on (<code>disabled</code>) or are display-only (
        <code>readOnly</code>) consume these tokens. They are not state tokens in the{' '}
        <code>error</code>/<code>success</code>/… sense — there is no <code>hover</code> slot.
      </p>
      <div className="border border-border rounded-xl px-5">
        <ColorRow name="surface-disabled" description="Background for disabled controls — cool, muted" className="bg-surface-disabled border border-border" />
        <ColorRow name="foreground-disabled" description="Text/icon color for disabled controls" className="bg-foreground-disabled" />
        <ColorRow name="border-disabled" description="Border for disabled controls" className="bg-border-disabled" />
        <ColorRow name="surface-readonly" description="Background for readOnly controls — warm, static" className="bg-surface-readonly border border-border" />
        <ColorRow name="border-readonly" description="Border for readOnly controls" className="bg-border-readonly" />
      </div>

      <SubsectionTitle>Disabled vs ReadOnly (a11y audit)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Side-by-side preview of how the two non-interactive treatments look. <code>disabled</code>{' '}
        uses a cool muted palette to convey "not usable"; <code>readOnly</code> uses a warm subtle
        palette to convey "value is informational, but the control is static". Verify both modes.
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 rounded-lg border border-border-disabled bg-surface-disabled px-4 py-3 text-foreground-disabled">
          <span className="font-mono text-xs opacity-70">disabled</span>
          <span className="text-sm font-medium">The quick brown fox jumps over the lazy dog</span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border-readonly bg-surface-readonly px-4 py-3 text-foreground">
          <span className="font-mono text-xs opacity-70">readOnly</span>
          <span className="text-sm font-medium">The quick brown fox jumps over the lazy dog</span>
        </div>
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

      <SubsectionTitle>Theme</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Theme color scale mapped from semantic tokens. The default theme uses blue; seasonal themes
        override this entire scale via the <code>data-theme</code> attribute.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-theme-50'
    }, {
      level: '100',
      className: 'bg-theme-100'
    }, {
      level: '200',
      className: 'bg-theme-200'
    }, {
      level: '300',
      className: 'bg-theme-300'
    }, {
      level: '400',
      className: 'bg-theme-400'
    }, {
      level: '500',
      className: 'bg-theme-500'
    }, {
      level: '600',
      className: 'bg-theme-600'
    }, {
      level: '700',
      className: 'bg-theme-700'
    }, {
      level: '800',
      className: 'bg-theme-800'
    }, {
      level: '900',
      className: 'bg-theme-900'
    }, {
      level: '950',
      className: 'bg-theme-950'
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
        Default theme color. Used as the base for the Theme scale when no seasonal theme is active.
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
        Traditional Japanese vermillion red — the primary Schatten brand color, surfaced at the
        semantic layer as <code>--color-vermillion</code>.
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

      <SubsectionTitle>Indigo (藍)</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Traditional Japanese indigo, the second brand color alongside vermillion. Deeper and more
        saturated than the <code>blue</code> scale, which stays pinned to the lighter{' '}
        <code>info</code> semantic.
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-indigo-50'
    }, {
      level: '100',
      className: 'bg-indigo-100'
    }, {
      level: '200',
      className: 'bg-indigo-200'
    }, {
      level: '300',
      className: 'bg-indigo-300'
    }, {
      level: '400',
      className: 'bg-indigo-400'
    }, {
      level: '500',
      className: 'bg-indigo-500'
    }, {
      level: '600',
      className: 'bg-indigo-600'
    }, {
      level: '700',
      className: 'bg-indigo-700'
    }, {
      level: '800',
      className: 'bg-indigo-800'
    }, {
      level: '900',
      className: 'bg-indigo-900'
    }, {
      level: '950',
      className: 'bg-indigo-950'
    }]} />

      <SubsectionTitle>Red</SubsectionTitle>
      <p className="text-sm text-foreground-muted mb-3">
        Danger scale — backs the <code>error</code> and <code>destructive</code> semantics. A
        value-identical copy of <code>vermillion</code> today; kept as a separate primitive so brand
        朱 and danger red can be retuned independently (see issue #239).
      </p>
      <ScaleRow shades={[{
      level: '50',
      className: 'bg-red-50'
    }, {
      level: '100',
      className: 'bg-red-100'
    }, {
      level: '200',
      className: 'bg-red-200'
    }, {
      level: '300',
      className: 'bg-red-300'
    }, {
      level: '400',
      className: 'bg-red-400'
    }, {
      level: '500',
      className: 'bg-red-500'
    }, {
      level: '600',
      className: 'bg-red-600'
    }, {
      level: '700',
      className: 'bg-red-700'
    }, {
      level: '800',
      className: 'bg-red-800'
    }, {
      level: '900',
      className: 'bg-red-900'
    }, {
      level: '950',
      className: 'bg-red-950'
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
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">data-theme</code> attribute on
        the root element (values like{' '}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">season--spring-early</code>).
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
