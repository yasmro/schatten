import{j as e}from"./iframe-BOHPXyYm.js";import{P as i,L as l,S as o,N as u}from"./docs-ui-Du2LU1P1.js";import"./preload-helper-BWqj6vDU.js";const y={title:"Tokens/Radius",parameters:{layout:"fullscreen"}},c=[{token:"none",value:"0"},{token:"sm",value:"0.125rem"},{token:"md",value:"0.375rem"},{token:"lg",value:"0.5rem"},{token:"xl",value:"0.75rem"},{token:"2xl",value:"1rem"},{token:"full",value:"9999px"}],x=[{name:"pill",alias:"full",status:"applied",usedBy:"Badge / Radio / Switch"},{name:"control",alias:"md",status:"defined-only",usedBy:"— (future: Button / Input — square today, #145)"},{name:"surface",alias:"lg",status:"defined-only",usedBy:"— (future: Dialog / Select content — square today, #145)"}],p=({status:s})=>s==="applied"?e.jsx("span",{className:"rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis",children:"applied"}):e.jsx("span",{className:"rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis",children:"defined only"}),h=({radius:s,label:n})=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"h-24 w-24 bg-surface border border-border-strong",style:{borderRadius:s},"aria-hidden":"true"}),e.jsx("span",{className:"text-xs font-mono text-foreground",children:n})]}),a={name:"Radius Scale",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(i,{children:"Radius"}),e.jsxs(l,{children:["Schatten expresses corner rounding with a discrete radius scale, defined in"," ",e.jsx("code",{children:"src/core/tokens/spacing.css"})," and registered in the public-token registrar (",e.jsx("code",{children:"src/styles/public-tokens.css"}),"). Reach for a ",e.jsx("em",{children:"semantic"})," token (see"," ",e.jsx("strong",{children:"Semantic tokens"}),") in components, not the raw step."]}),e.jsx(o,{children:"Primitive scale"}),e.jsxs(u,{children:["The raw ",e.jsx("code",{children:"--radius-*"})," steps. ",e.jsx("code",{children:"--radius-full"})," is a sentinel (9999px) that rounds any element into a pill / circle; the others are fixed lengths."]}),e.jsx("div",{className:"flex flex-wrap gap-8 p-8 bg-background",children:c.map(s=>e.jsx(h,{radius:s.value,label:`--radius-${s.token}`},s.token))}),e.jsx("div",{className:"mt-6 border border-border rounded-xl px-5",children:c.map(s=>e.jsxs("div",{className:"flex items-baseline gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsxs("p",{className:"w-28 shrink-0 text-sm font-medium text-foreground font-mono",children:["--radius-",s.token]}),e.jsx("code",{className:"flex-1 text-xs text-foreground-muted break-all",children:s.value})]},s.token))})]})},r={name:"Semantic Tokens",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(i,{children:"Semantic tokens"}),e.jsxs(l,{children:["Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a primitive step — the table reads as"," ",e.jsx("strong",{children:"purpose → which primitive → which component uses it"}),". Tokens marked"," ",e.jsx("em",{children:"defined only"})," exist for forward use but are not wired to any surface yet."]}),e.jsx("div",{className:"border border-border rounded-xl px-5",children:x.map(s=>e.jsxs("div",{className:"flex items-center gap-4 py-4 border-b border-border last:border-b-0",children:[e.jsx("div",{className:"w-40 shrink-0 flex items-center justify-center py-2 bg-background",children:e.jsx("div",{className:"h-16 w-16 bg-surface border border-border-strong",style:{borderRadius:`var(--radius-${s.name})`},"aria-hidden":"true"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-medium text-foreground font-mono",children:["--radius-",s.name]}),e.jsxs("p",{className:"text-xs text-foreground-muted font-mono",children:["= --radius-",s.alias]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1",children:s.usedBy})]}),e.jsx("div",{className:"w-28 shrink-0",children:e.jsx(p,{status:s.status})})]},s.name))})]})},d=({surface:s,token:n,note:m})=>e.jsxs("div",{className:"flex items-start gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("p",{className:"w-28 shrink-0 text-sm font-medium text-foreground",children:s}),e.jsx("code",{className:"w-40 shrink-0 text-xs text-foreground-muted",children:n}),e.jsx("p",{className:"flex-1 text-sm text-foreground-muted",children:m})]}),t={name:"Usage Guide",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(i,{children:"Usage guide"}),e.jsxs(l,{children:["Pick a radius by what the surface ",e.jsx("em",{children:"is"}),", not by an absolute corner size. The semantic token for each surface type already encodes the right step."]}),e.jsx(o,{children:"By surface type"}),e.jsxs("div",{className:"border border-border rounded-xl px-5 mb-8",children:[e.jsx(d,{surface:"Pill",token:"--radius-pill",note:"Fully-rounded chips and toggles. (Alias of --radius-full; applied to Badge / Radio / Switch.)"}),e.jsx(d,{surface:"Control",token:"--radius-control",note:"Buttons and text inputs. (Alias of --radius-md; not yet applied — Button / Input render square today.)"}),e.jsx(d,{surface:"Surface",token:"--radius-surface",note:"Larger floating surfaces. (Alias of --radius-lg; not yet applied — Dialog / Select content render square today.)"})]}),e.jsx(o,{children:"Define-only is intentional"}),e.jsxs(u,{children:[e.jsx("code",{children:"--radius-control"})," and ",e.jsx("code",{children:"--radius-surface"})," are"," ",e.jsx("strong",{children:"defined but not yet applied"}),": today's components render square corners. Rounding them is a visual change deferred to a designer spike (#145), so the tokens wait for that consumer rather than being applied piecemeal. This mirrors ",e.jsx("code",{children:"--shadow-card"})," ","in ",e.jsx("strong",{children:"Tokens/Elevation"})," — a single-value semantic token may sit define-only until its natural consumer lands."]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Radius</PageTitle>
      <Lead>
        Schatten expresses corner rounding with a discrete radius scale, defined in{' '}
        <code>src/core/tokens/spacing.css</code> and registered in the public-token registrar (
        <code>src/styles/public-tokens.css</code>). Reach for a <em>semantic</em> token (see{' '}
        <strong>Semantic tokens</strong>) in components, not the raw step.
      </Lead>

      <SectionTitle>Primitive scale</SectionTitle>
      <Note>
        The raw <code>--radius-*</code> steps. <code>--radius-full</code> is a sentinel (9999px)
        that rounds any element into a pill / circle; the others are fixed lengths.
      </Note>

      <div className="flex flex-wrap gap-8 p-8 bg-background">
        {PRIMITIVE_RADII.map(r => <RadiusTile key={r.token} radius={r.value} label={\`--radius-\${r.token}\`} />)}
      </div>

      <div className="mt-6 border border-border rounded-xl px-5">
        {PRIMITIVE_RADII.map(r => <div key={r.token} className="flex items-baseline gap-4 py-3 border-b border-border last:border-b-0">
            <p className="w-28 shrink-0 text-sm font-medium text-foreground font-mono">
              --radius-{r.token}
            </p>
            <code className="flex-1 text-xs text-foreground-muted break-all">{r.value}</code>
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        {SEMANTIC_RADII.map(r => <div key={r.name} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
            <div className="w-40 shrink-0 flex items-center justify-center py-2 bg-background">
              <div className="h-16 w-16 bg-surface border border-border-strong" style={{
            borderRadius: \`var(--radius-\${r.name})\`
          }} aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--radius-{r.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --radius-{r.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{r.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={r.status} />
            </div>
          </div>)}
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Usage Guide',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a radius by what the surface <em>is</em>, not by an absolute corner size. The semantic
        token for each surface type already encodes the right step.
      </Lead>

      <SectionTitle>By surface type</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow surface="Pill" token="--radius-pill" note="Fully-rounded chips and toggles. (Alias of --radius-full; applied to Badge / Radio / Switch.)" />
        <GuideRow surface="Control" token="--radius-control" note="Buttons and text inputs. (Alias of --radius-md; not yet applied — Button / Input render square today.)" />
        <GuideRow surface="Surface" token="--radius-surface" note="Larger floating surfaces. (Alias of --radius-lg; not yet applied — Dialog / Select content render square today.)" />
      </div>

      <SectionTitle>Define-only is intentional</SectionTitle>
      <Note>
        <code>--radius-control</code> and <code>--radius-surface</code> are{' '}
        <strong>defined but not yet applied</strong>: today's components render square corners.
        Rounding them is a visual change deferred to a designer spike (#145), so the tokens wait for
        that consumer rather than being applied piecemeal. This mirrors <code>--shadow-card</code>{' '}
        in <strong>Tokens/Elevation</strong> — a single-value semantic token may sit define-only
        until its natural consumer lands.
      </Note>
    </div>
}`,...t.parameters?.docs?.source}}};const v=["RadiusScale","RadiusSemantic","RadiusUsage"];export{a as RadiusScale,r as RadiusSemantic,t as RadiusUsage,v as __namedExportsOrder,y as default};
