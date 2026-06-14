import{j as e}from"./iframe-Dly3pSUe.js";import{P as c,L as l,S as n,N as i}from"./docs-ui-RLK5GzmD.js";import"./preload-helper-CrztxVc4.js";const w={title:"Tokens/Elevation",parameters:{layout:"fullscreen"}},m=[{token:"sm",value:"0 1px 2px 0 rgb(0 0 0 / 0.05)"},{token:"md",value:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"},{token:"lg",value:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"},{token:"xl",value:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"}],p=[{name:"popover",alias:"md",status:"applied",usedBy:"Tooltip / Select content"},{name:"modal",alias:"lg",status:"applied",usedBy:"Dialog"},{name:"toast",alias:"md",status:"applied",usedBy:"Toast"},{name:"card",alias:"sm",status:"defined-only",usedBy:"— (future: lv2 Card surface, #361)"}],x=({status:a})=>a==="applied"?e.jsx("span",{className:"rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success",children:"applied"}):e.jsx("span",{className:"rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning",children:"defined only"}),u=({shadow:a,label:d})=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"h-24 w-40 rounded-xl bg-surface",style:{boxShadow:a},"aria-hidden":"true"}),e.jsx("span",{className:"text-xs font-mono text-foreground",children:d})]}),s={name:"Shadow Scale",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(c,{children:"Elevation"}),e.jsxs(l,{children:["Schatten expresses elevation with a four-step shadow scale, defined in"," ",e.jsx("code",{children:"src/core/tokens/spacing.css"})," and registered as Tailwind utilities via the"," ",e.jsx("code",{children:"@theme"})," block in ",e.jsx("code",{children:"base.css"}),". Every shadow is a translucent black (",e.jsx("code",{children:"rgb(0 0 0 / α)"}),"); it is mode-agnostic, so the same value reads as a softer shadow against a dark surface (see ",e.jsx("strong",{children:"Usage guide"}),")."]}),e.jsx(n,{children:"Primitive scale"}),e.jsxs(i,{children:["The raw ",e.jsx("code",{children:"--shadow-*"})," steps. Reach for a ",e.jsx("em",{children:"semantic"})," token (see"," ",e.jsx("strong",{children:"Semantic tokens"}),") in components; the primitives are the underlying values those aliases point at. ",e.jsx("code",{children:"--shadow-xl"})," ships in the scale but is currently mapped to no semantic alias and used by no component — reserved, not retired."]}),e.jsx("div",{className:"flex flex-wrap gap-8 p-8 bg-background",children:m.map(a=>e.jsx(u,{shadow:a.value,label:`--shadow-${a.token}`},a.token))}),e.jsx("div",{className:"mt-6 border border-border rounded-xl px-5",children:m.map(a=>e.jsxs("div",{className:"flex items-baseline gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsxs("p",{className:"w-28 shrink-0 text-sm font-medium text-foreground font-mono",children:["--shadow-",a.token]}),e.jsx("code",{className:"flex-1 text-xs text-foreground-muted break-all",children:a.value})]},a.token))})]})},t={name:"Semantic Tokens",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(c,{children:"Semantic tokens"}),e.jsxs(l,{children:["Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a primitive step — the table reads as"," ",e.jsx("strong",{children:"purpose → which primitive → which component uses it"}),". Tokens marked"," ",e.jsx("em",{children:"defined only"})," exist for forward use but are not wired to any surface yet."]}),e.jsx("div",{className:"border border-border rounded-xl px-5",children:p.map(a=>e.jsxs("div",{className:"flex items-center gap-4 py-4 border-b border-border last:border-b-0",children:[e.jsx("div",{className:"w-40 shrink-0 flex items-center justify-center py-2 bg-background",children:e.jsx("div",{className:"h-12 w-28 rounded-lg bg-surface",style:{boxShadow:`var(--shadow-${a.name})`},"aria-hidden":"true"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-medium text-foreground font-mono",children:["--shadow-",a.name]}),e.jsxs("p",{className:"text-xs text-foreground-muted font-mono",children:["= --shadow-",a.alias]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1",children:a.usedBy})]}),e.jsx("div",{className:"w-28 shrink-0",children:e.jsx(x,{status:a.status})})]},a.name))})]})},o=({surface:a,token:d,note:h})=>e.jsxs("div",{className:"flex items-start gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("p",{className:"w-28 shrink-0 text-sm font-medium text-foreground",children:a}),e.jsx("code",{className:"w-40 shrink-0 text-xs text-foreground-muted",children:d}),e.jsx("p",{className:"flex-1 text-sm text-foreground-muted",children:h})]}),r={name:"Usage Guide",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(c,{children:"Usage guide"}),e.jsxs(l,{children:["Pick a shadow by what the surface ",e.jsx("em",{children:"is"}),", not by how deep you want it to look. The semantic token for each surface type already encodes the right depth."]}),e.jsx(n,{children:"By surface type"}),e.jsxs("div",{className:"border border-border rounded-xl px-5 mb-8",children:[e.jsx(o,{surface:"Card",token:"--shadow-card",note:"Resting content cards. Lowest elevation. (Alias of --shadow-sm; not yet applied.)"}),e.jsx(o,{surface:"Tooltip / Popover",token:"--shadow-popover",note:"Transient floating content layered just above the page."}),e.jsx(o,{surface:"Toast",token:"--shadow-toast",note:"Notifications that overlay content but are not modal."}),e.jsx(o,{surface:"Dialog / Modal",token:"--shadow-modal",note:"Focus-trapping surfaces. Highest elevation in the system today."})]}),e.jsx(n,{children:"Don't over-elevate"}),e.jsx(i,{children:"Shadow is a signal, not decoration. A flat surface (no shadow) is the right answer for most in-flow content — reserve elevation for things that genuinely float above the page. Stacking many shadowed surfaces flattens the hierarchy the shadow was meant to create."}),e.jsx(n,{children:"Dark mode"}),e.jsxs(i,{children:["Shadows are ",e.jsx("strong",{children:"mode-agnostic"}),": there is no dark-specific shadow token, and the"," ",e.jsx("code",{children:".dark"})," cascade does not override ",e.jsx("code",{children:"--shadow-*"}),". The same translucent black is applied in both modes, so a shadow reads as softer against a dark surface than against a light one. Toggle the Storybook theme to compare — the muted dark appearance is intended, not a missing token. (Re-tuning depth per mode is a possible future refinement.)"]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Shadow Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Elevation</PageTitle>
      <Lead>
        Schatten expresses elevation with a four-step shadow scale, defined in{' '}
        <code>src/core/tokens/spacing.css</code> and registered as Tailwind utilities via the{' '}
        <code>@theme</code> block in <code>base.css</code>. Every shadow is a translucent black (
        <code>rgb(0 0 0 / α)</code>); it is mode-agnostic, so the same value reads as a softer
        shadow against a dark surface (see <strong>Usage guide</strong>).
      </Lead>

      <SectionTitle>Primitive scale</SectionTitle>
      <Note>
        The raw <code>--shadow-*</code> steps. Reach for a <em>semantic</em> token (see{' '}
        <strong>Semantic tokens</strong>) in components; the primitives are the underlying values
        those aliases point at. <code>--shadow-xl</code> ships in the scale but is currently mapped
        to no semantic alias and used by no component — reserved, not retired.
      </Note>

      <div className="flex flex-wrap gap-8 p-8 bg-background">
        {PRIMITIVE_SHADOWS.map(s => <ShadowTile key={s.token} shadow={s.value} label={\`--shadow-\${s.token}\`} />)}
      </div>

      <div className="mt-6 border border-border rounded-xl px-5">
        {PRIMITIVE_SHADOWS.map(s => <div key={s.token} className="flex items-baseline gap-4 py-3 border-b border-border last:border-b-0">
            <p className="w-28 shrink-0 text-sm font-medium text-foreground font-mono">
              --shadow-{s.token}
            </p>
            <code className="flex-1 text-xs text-foreground-muted break-all">{s.value}</code>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Semantic Tokens',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, not the raw scale. Each is a
        value-preserving alias over a primitive step — the table reads as{' '}
        <strong>purpose → which primitive → which component uses it</strong>. Tokens marked{' '}
        <em>defined only</em> exist for forward use but are not wired to any surface yet.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_SHADOWS.map(s => <div key={s.name} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
            <div className="w-40 shrink-0 flex items-center justify-center py-2 bg-background">
              <div className="h-12 w-28 rounded-lg bg-surface" style={{
            boxShadow: \`var(--shadow-\${s.name})\`
          }} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--shadow-{s.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --shadow-{s.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{s.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={s.status} />
            </div>
          </div>)}
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Usage Guide',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a shadow by what the surface <em>is</em>, not by how deep you want it to look. The
        semantic token for each surface type already encodes the right depth.
      </Lead>

      <SectionTitle>By surface type</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow surface="Card" token="--shadow-card" note="Resting content cards. Lowest elevation. (Alias of --shadow-sm; not yet applied.)" />
        <GuideRow surface="Tooltip / Popover" token="--shadow-popover" note="Transient floating content layered just above the page." />
        <GuideRow surface="Toast" token="--shadow-toast" note="Notifications that overlay content but are not modal." />
        <GuideRow surface="Dialog / Modal" token="--shadow-modal" note="Focus-trapping surfaces. Highest elevation in the system today." />
      </div>

      <SectionTitle>Don't over-elevate</SectionTitle>
      <Note>
        Shadow is a signal, not decoration. A flat surface (no shadow) is the right answer for most
        in-flow content — reserve elevation for things that genuinely float above the page. Stacking
        many shadowed surfaces flattens the hierarchy the shadow was meant to create.
      </Note>

      <SectionTitle>Dark mode</SectionTitle>
      <Note>
        Shadows are <strong>mode-agnostic</strong>: there is no dark-specific shadow token, and the{' '}
        <code>.dark</code> cascade does not override <code>--shadow-*</code>. The same translucent
        black is applied in both modes, so a shadow reads as softer against a dark surface than
        against a light one. Toggle the Storybook theme to compare — the muted dark appearance is
        intended, not a missing token. (Re-tuning depth per mode is a possible future refinement.)
      </Note>
    </div>
}`,...r.parameters?.docs?.source}}};const v=["ShadowScale","SemanticTokens","UsageGuide"];export{t as SemanticTokens,s as ShadowScale,r as UsageGuide,v as __namedExportsOrder,w as default};
