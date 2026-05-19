import{j as e}from"./iframe-cH3Goxxo.js";import{s as B}from"./themes-GIud1ko9.js";import{B as c}from"./Button-8jBacqkX.js";import{B as l}from"./Badge-uYXFAK49.js";import{C as S}from"./Callout-BXNRupf8.js";import"./preload-helper-BfaLnbZ_.js";import"./index-e6tzoGKZ.js";import"./index-Ds15pGpv.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-Bx2XNhP6.js";import"./circle-alert-HCulbnHI.js";import"./createLucideIcon-GExp851Y.js";import"./triangle-alert-C7RDC7To.js";import"./info-Dn3vi5c0.js";import"./x-DIbcVX24.js";const w=B.replace(/:root\[/g,".brand-expression-cell[");function y(){return e.jsx("style",{children:w})}function m({mode:a,special:t,children:i}){return e.jsxs("div",{className:`brand-expression-cell ${a==="dark"?"dark":""} flex-1 rounded-lg border border-border bg-background p-4`,"data-theme":t,children:[e.jsxs("div",{className:"mb-3 flex items-center gap-2 text-xs",children:[e.jsx("span",{className:"rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase",children:a}),t&&e.jsx("span",{className:"font-mono text-foreground-subtle",children:t})]}),i]})}function r({children:a}){return e.jsxs("div",{className:"flex flex-col gap-3 lg:flex-row",children:[e.jsx(m,{mode:"light",children:a}),e.jsx(m,{mode:"dark",children:a})]})}function n({index:a,title:t,children:i}){return e.jsxs("section",{className:"mt-8 first:mt-0",children:[e.jsxs("h2",{className:"mb-1 flex items-baseline gap-2 font-semibold text-foreground text-xl",children:[e.jsx("span",{className:"font-mono text-foreground-subtle text-sm",children:String(a).padStart(2,"0")}),t]}),i]})}function P(){return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-0.5 rounded-md bg-vermillion p-3",children:[e.jsx("span",{className:"font-semibold text-sm text-vermillion-foreground",children:"朱 Vermillion"}),e.jsx("span",{className:"font-mono text-vermillion-foreground text-xs opacity-90",children:"bg-vermillion"})]}),e.jsxs("div",{className:"flex flex-col gap-0.5 rounded-md bg-indigo p-3",children:[e.jsx("span",{className:"font-semibold text-indigo-foreground text-sm",children:"藍 Indigo"}),e.jsx("span",{className:"font-mono text-indigo-foreground text-xs opacity-90",children:"bg-indigo"})]})]})}const A=["primary","secondary","tertiary","destructive","link"];function k(){return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:A.map(a=>e.jsx(c,{variant:a,size:"sm",children:a},a))}),e.jsxs("div",{className:"flex items-center gap-2 rounded-md bg-solid p-2",children:[e.jsx("span",{className:"text-solid-foreground text-xs",children:"on bg-solid →"}),e.jsx(c,{variant:"inverted",size:"sm",children:"inverted"})]})]})}const d=["neutral","success","error","warning","info"];function M(){return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.map(a=>e.jsx(l,{variant:a,appearance:"solid",children:a},a))}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.map(a=>e.jsx(l,{variant:a,appearance:"subtle",children:a},a))}),e.jsx(S,{variant:"info",appearance:"subtle",title:"No accent tone",children:"Pattern B tones are state-only — brand emphasis flows through the Special layer below."})]})}const C=[{name:void 0,label:"(no Special)"},{name:"season--spring-early",label:"spring-early · 桜色"},{name:"season--summer-peak",label:"summer-peak · 朱色"},{name:"season--winter-early",label:"winter-early · 薄藍"}],T=["bg-theme-100","bg-theme-300","bg-theme-500","bg-theme-700","bg-theme-900"];function D(){return e.jsx("div",{className:"flex flex-col gap-2",children:C.map(a=>e.jsx(m,{mode:"light",special:a.name,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-40 shrink-0 font-mono text-foreground-muted text-xs",children:a.label}),e.jsx("div",{className:"flex gap-1",children:T.map(t=>e.jsx("span",{className:`size-7 rounded ${t}`,"aria-hidden":"true"},t))}),e.jsxs(l,{variant:"neutral",appearance:"outline",className:"ml-auto",children:[e.jsx("span",{className:"size-2.5 rounded-full bg-theme-500","aria-hidden":"true"}),"bg-theme-500"]})]})},a.label))})}const K={title:"Foundation/BrandExpression",parameters:{layout:"fullscreen"}},s={name:"Overview",parameters:{docs:{description:{story:"Brand-named tokens, Pattern A, Pattern B and the Special theme layer on one screen, each rendered in light and dark. See theme-architecture.md for the Mode × Special model."}}},render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(y,{}),e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsxs("header",{className:"mb-6",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Brand Expression"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"朱 (vermillion) and 藍 (indigo) are the Schatten brand colors. This page shows the two channels they reach the UI through, alongside Pattern A / Pattern B components under both Modes."})]}),e.jsxs(n,{index:1,title:"Brand-named tokens — 朱 / 藍",children:[e.jsxs("p",{className:"mb-3 text-foreground-muted text-sm",children:["Direct, opt-in emphasis. Same hue in light and dark; only the shade shifts (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"-600"})," →"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"-400"}),") to keep the ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"-foreground"})," ","pairing above WCAG AA."]}),e.jsx(r,{children:e.jsx(P,{})})]}),e.jsxs(n,{index:2,title:"Pattern A — Button (role-based)",children:[e.jsxs("p",{className:"mb-3 text-foreground-muted text-sm",children:["Single-axis"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"variant"})," roles."," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"primary"})," carries the main interactive fill (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"--color-solid"}),")."]}),e.jsx(r,{children:e.jsx(k,{})})]}),e.jsxs(n,{index:3,title:"Pattern B — Badge / Callout (tone × appearance)",children:[e.jsxs("p",{className:"mb-3 text-foreground-muted text-sm",children:["Two-axis state surfaces. Tones are state-only (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"neutral"})," / success / error / warning / info) — there is no brand"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"accent"})," tone (removed in #108 / #205). Toast shares this vocabulary."]}),e.jsx(r,{children:e.jsx(M,{})})]}),e.jsxs(n,{index:4,title:"Special theme layer — brand-via-palette",children:[e.jsxs("p",{className:"mb-3 text-foreground-muted text-sm",children:["A Special overrides only"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"--color-theme-*"}),". Components consuming"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono text-xs",children:"bg-theme-*"})," pick up the palette automatically — this is Pattern B's brand-expression path. See Foundation/ThemeAudit for the full 8 × 2 matrix."]}),e.jsx(D,{})]})]})]})},o={name:"Component Matrix",parameters:{docs:{description:{story:"Full Pattern A (Button) and Pattern B (Badge) vocabulary under both Modes — the reference matrix complementing the Overview narrative."}}},render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(y,{}),e.jsxs("div",{className:"mx-auto max-w-5xl",children:[e.jsxs("header",{className:"mb-6",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Component Matrix"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"Pattern A and Pattern B at full vocabulary, light and dark."})]}),e.jsx(n,{index:1,title:"Button — all roles",children:e.jsx(r,{children:e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:["primary","secondary","tertiary","destructive","link"].map(a=>e.jsx(c,{variant:a,children:a},a))})})}),e.jsx(n,{index:2,title:"Badge — tone × appearance",children:e.jsx(r,{children:e.jsx("div",{className:"flex flex-col gap-2",children:["solid","outline","subtle"].map(a=>e.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[e.jsx("span",{className:"w-16 font-mono text-foreground-subtle text-xs",children:a}),d.map(t=>e.jsx(l,{variant:t,appearance:a,children:t},t))]},a))})})}),e.jsx(n,{index:3,title:"Callout — tone × appearance",children:e.jsx(r,{children:e.jsx("div",{className:"flex flex-col gap-2",children:d.map(a=>e.jsxs(S,{variant:a,appearance:"subtle",title:a,children:[a," callout — subtle appearance."]},a))})})})]})]})};var x,p,h,u,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Overview',
  parameters: {
    docs: {
      description: {
        story: 'Brand-named tokens, Pattern A, Pattern B and the Special theme layer on one screen, each rendered in light and dark. See theme-architecture.md for the Mode × Special model.'
      }
    }
  },
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="mb-2 font-bold text-3xl text-foreground">Brand Expression</h1>
          <p className="text-foreground-muted text-sm leading-relaxed">
            朱 (vermillion) and 藍 (indigo) are the Schatten brand colors. This page shows the two
            channels they reach the UI through, alongside Pattern A / Pattern B components under
            both Modes.
          </p>
        </header>

        <Section index={1} title="Brand-named tokens — 朱 / 藍">
          <p className="mb-3 text-foreground-muted text-sm">
            Direct, opt-in emphasis. Same hue in light and dark; only the shade shifts (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">-600</code> →{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">-400</code>) to keep
            the <code className="rounded bg-surface-hover px-1 font-mono text-xs">-foreground</code>{' '}
            pairing above WCAG AA.
          </p>
          <DualMode>
            <BrandSwatches />
          </DualMode>
        </Section>

        <Section index={2} title="Pattern A — Button (role-based)">
          <p className="mb-3 text-foreground-muted text-sm">
            Single-axis{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">variant</code> roles.{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">primary</code> carries
            the main interactive fill (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">--color-solid</code>).
          </p>
          <DualMode>
            <PatternAButtons />
          </DualMode>
        </Section>

        <Section index={3} title="Pattern B — Badge / Callout (tone × appearance)">
          <p className="mb-3 text-foreground-muted text-sm">
            Two-axis state surfaces. Tones are state-only (
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">neutral</code> /
            success / error / warning / info) — there is no brand{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">accent</code> tone
            (removed in #108 / #205). Toast shares this vocabulary.
          </p>
          <DualMode>
            <PatternBSurfaces />
          </DualMode>
        </Section>

        <Section index={4} title="Special theme layer — brand-via-palette">
          <p className="mb-3 text-foreground-muted text-sm">
            A Special overrides only{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">--color-theme-*</code>
            . Components consuming{' '}
            <code className="rounded bg-surface-hover px-1 font-mono text-xs">bg-theme-*</code> pick
            up the palette automatically — this is Pattern B&apos;s brand-expression path. See
            Foundation/ThemeAudit for the full 8 × 2 matrix.
          </p>
          <ThemeScaleStrip />
        </Section>
      </div>
    </div>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:'One-screen synthesis of how Schatten surfaces brand color — the deliverable\nof the v0.8.0 brand-expression release (#206, orchestrating #181 / #185).\n\nBrand color reaches the UI through two deliberate channels, never by\naccident:\n\n1. **Brand-named tokens** (`--color-vermillion` / `--color-indigo`) — opt-in,\n   consumed directly (`bg-vermillion`, `bg-indigo`) for explicit emphasis.\n   They are not wired into any component default.\n2. **The Special theme layer** — `data-theme="…"` retunes `--color-theme-*`,\n   so every component that consumes `bg-theme-*` shifts palette with no\n   code change. Pattern B (Badge / Callout / Toast) has no `accent` tone, so\n   its brand expression flows entirely through this layer.\n\nPattern A (Button) and Pattern B render here under both Modes so the base\nlayer (Mode) and the expressive layer (Special) can be inspected together.',...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var g,b,v,N,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Component Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Full Pattern A (Button) and Pattern B (Badge) vocabulary under both Modes — the reference matrix complementing the Overview narrative.'
      }
    }
  },
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="mb-2 font-bold text-3xl text-foreground">Component Matrix</h1>
          <p className="text-foreground-muted text-sm leading-relaxed">
            Pattern A and Pattern B at full vocabulary, light and dark.
          </p>
        </header>

        <Section index={1} title="Button — all roles">
          <DualMode>
            <div className="flex flex-wrap items-center gap-2">
              {(['primary', 'secondary', 'tertiary', 'destructive', 'link'] as const).map(v => <Button key={v} variant={v}>
                  {v}
                </Button>)}
            </div>
          </DualMode>
        </Section>

        <Section index={2} title="Badge — tone × appearance">
          <DualMode>
            <div className="flex flex-col gap-2">
              {(['solid', 'outline', 'subtle'] as const).map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-1.5">
                  <span className="w-16 font-mono text-foreground-subtle text-xs">
                    {appearance}
                  </span>
                  {TONES.map(tone => <Badge key={tone} variant={tone} appearance={appearance}>
                      {tone}
                    </Badge>)}
                </div>)}
            </div>
          </DualMode>
        </Section>

        <Section index={3} title="Callout — tone × appearance">
          <DualMode>
            <div className="flex flex-col gap-2">
              {TONES.map(tone => <Callout key={tone} variant={tone} appearance="subtle" title={tone}>
                  {tone} callout — subtle appearance.
                </Callout>)}
            </div>
          </DualMode>
        </Section>
      </div>
    </div>
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:`Pattern A and Pattern B components at full vocabulary, in light and dark.
Where Overview is the narrative, this story is the reference matrix — every
Button role and every Badge tone × appearance, so a brand / Mode regression
in any single combination is visible in one screen.`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};const Q=["Overview","ComponentMatrix"];export{o as ComponentMatrix,s as Overview,Q as __namedExportsOrder,K as default};
