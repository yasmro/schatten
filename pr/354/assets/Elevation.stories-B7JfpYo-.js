import{j as e}from"./iframe-Bl2RXa6L.js";import"./preload-helper-DjAD0G0h.js";const x={title:"Tokens/Elevation",parameters:{layout:"fullscreen"}},n=({children:t})=>e.jsx("h1",{className:"text-4xl font-bold text-foreground mb-4",children:t}),s=({children:t})=>e.jsx("h2",{className:"text-2xl font-bold text-foreground mt-8 mb-2",children:t}),d=({children:t})=>e.jsx("p",{className:"text-base text-foreground-muted leading-relaxed mb-8",children:t}),r=({children:t})=>e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:t}),l=[{token:"--shadow-card",alias:"--shadow-sm",use:"Card / raised surface"},{token:"--shadow-popover",alias:"--shadow-md",use:"Tooltip / Select content"},{token:"--shadow-modal",alias:"--shadow-lg",use:"Dialog content"},{token:"--shadow-toast",alias:"--shadow-md",use:"Toast"}],o={name:"Semantic Shadows",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Elevation — Depth"}),e.jsxs(d,{children:["The four semantic shadow tokens map a usage role to a primitive shadow level. Components reference the semantic name (",e.jsx("code",{children:"shadow-modal"}),") rather than the primitive (",e.jsx("code",{children:"shadow-lg"}),"), so the depth of every Dialog can be retuned at one place."]}),e.jsx(s,{children:"Semantic shadow tokens"}),e.jsxs(r,{children:["Each token is a Tailwind utility (",e.jsx("code",{children:"shadow-card"}),", …) registered in the"," ",e.jsx("code",{children:"@theme"})," block of ",e.jsx("code",{children:"base.css"}),", and resolves to the primitive level shown."]}),e.jsx("div",{className:"grid grid-cols-2 gap-8 mt-6",children:l.map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"h-24 w-full rounded-xl bg-surface",style:{boxShadow:`var(${t.token})`}}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-sm font-mono text-foreground",children:t.token}),e.jsxs("div",{className:"text-xs font-mono text-foreground-muted",children:["→ ",t.alias]}),e.jsx("div",{className:"text-xs text-foreground-muted mt-1",children:t.use})]})]},t.token))})]})},i=[{token:"--z-base",value:0,layer:"Default flow",reserved:!0},{token:"--z-dropdown",value:10,layer:"Consumer-reserved",reserved:!0},{token:"--z-sticky",value:20,layer:"Consumer-reserved (sticky chrome)",reserved:!0},{token:"--z-fixed",value:30,layer:"Consumer-reserved (fixed chrome)",reserved:!0},{token:"--z-modal-backdrop",value:40,layer:"Dialog overlay",reserved:!1},{token:"--z-modal",value:50,layer:"Dialog content",reserved:!1},{token:"--z-popover",value:60,layer:"Select / popover content",reserved:!1},{token:"--z-tooltip",value:70,layer:"Tooltip",reserved:!1},{token:"--z-toast",value:80,layer:"Toast (front-most)",reserved:!1}],c=[{label:"modal-backdrop (40)",z:"var(--z-modal-backdrop)",bg:"bg-surface",offset:0},{label:"modal (50)",z:"var(--z-modal)",bg:"bg-theme-100",offset:36},{label:"popover (60)",z:"var(--z-popover)",bg:"bg-theme-300",offset:72},{label:"tooltip (70)",z:"var(--z-tooltip)",bg:"bg-theme-500",offset:108},{label:"toast (80)",z:"var(--z-toast)",bg:"bg-theme-700",offset:144}],a={name:"Stacking Order",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Elevation — Stacking (z-index)"}),e.jsxs(d,{children:["Schatten reserves the ",e.jsx("code",{children:"0–100"})," z-index band for its portal / overlay layers. Components reference the ",e.jsx("code",{children:"--z-*"})," semantic tokens (also exposed as Tailwind"," ",e.jsx("code",{children:"z-*"})," utilities and ",e.jsx("code",{children:"tokens.zIndex.*"}),") so a Tooltip opened inside a Dialog always paints in front of the modal, never behind it."]}),e.jsx(s,{children:"The scale"}),e.jsxs(r,{children:["Values increase strictly with stacking order. The four lowest slots carry no internal consumer and are reserved for your own page chrome — keep application stacking values"," ",e.jsx("strong",{children:"outside the 0–100 band"})," to avoid colliding with Schatten overlays."]}),e.jsx("div",{className:"border border-border rounded-xl overflow-hidden",children:i.map(t=>e.jsxs("div",{className:"flex items-center gap-4 px-5 py-2.5 border-b border-border last:border-b-0",children:[e.jsx("span",{className:"w-10 text-right text-sm font-mono text-foreground tabular-nums",children:t.value}),e.jsx("span",{className:"w-44 text-sm font-mono text-foreground",children:t.token}),e.jsx("span",{className:"text-sm text-foreground-muted",children:t.layer}),t.reserved&&e.jsx("span",{className:"ml-auto text-[10px] uppercase tracking-wide text-foreground-subtle",children:"reserved"})]},t.token))}),e.jsx(s,{children:"Paint order"}),e.jsx(r,{children:"Overlapping cards, each one tier higher than the last. The later token in the scale paints on top, regardless of DOM order."}),e.jsx("div",{className:"relative h-64",children:c.map(t=>e.jsx("div",{className:`absolute h-28 w-56 rounded-xl border border-border-strong ${t.bg} flex items-start p-3 text-xs font-mono text-foreground`,style:{zIndex:t.z,left:t.offset,top:t.offset/3},children:t.label},t.label))})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Semantic Shadows',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Elevation — Depth</PageTitle>
      <Lead>
        The four semantic shadow tokens map a usage role to a primitive shadow level. Components
        reference the semantic name (<code>shadow-modal</code>) rather than the primitive (
        <code>shadow-lg</code>), so the depth of every Dialog can be retuned at one place.
      </Lead>

      <SectionTitle>Semantic shadow tokens</SectionTitle>
      <Note>
        Each token is a Tailwind utility (<code>shadow-card</code>, …) registered in the{' '}
        <code>@theme</code> block of <code>base.css</code>, and resolves to the primitive level
        shown.
      </Note>
      <div className="grid grid-cols-2 gap-8 mt-6">
        {SHADOW_TOKENS.map(s => <div key={s.token} className="flex flex-col items-center gap-3">
            <div className="h-24 w-full rounded-xl bg-surface" style={{
          boxShadow: \`var(\${s.token})\`
        }} />
            <div className="text-center">
              <div className="text-sm font-mono text-foreground">{s.token}</div>
              <div className="text-xs font-mono text-foreground-muted">→ {s.alias}</div>
              <div className="text-xs text-foreground-muted mt-1">{s.use}</div>
            </div>
          </div>)}
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Semantic elevation has two orthogonal axes:\n\n- **Depth** — `--shadow-*` semantic tokens, aliased over the primitive\n  `--shadow-{sm,md,lg,xl}` scale (see `src/core/tokens/spacing.css`).\n- **Stacking** — `--z-*` tokens, the order in which overlapping layers\n  paint (see `src/core/tokens/z-index.css`).\n\nThe `SemanticShadows` story documents the first axis; `StackingOrder`\ndocuments the second.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Stacking Order',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Elevation — Stacking (z-index)</PageTitle>
      <Lead>
        Schatten reserves the <code>0–100</code> z-index band for its portal / overlay layers.
        Components reference the <code>--z-*</code> semantic tokens (also exposed as Tailwind{' '}
        <code>z-*</code> utilities and <code>tokens.zIndex.*</code>) so a Tooltip opened inside a
        Dialog always paints in front of the modal, never behind it.
      </Lead>

      <SectionTitle>The scale</SectionTitle>
      <Note>
        Values increase strictly with stacking order. The four lowest slots carry no internal
        consumer and are reserved for your own page chrome — keep application stacking values{' '}
        <strong>outside the 0–100 band</strong> to avoid colliding with Schatten overlays.
      </Note>
      <div className="border border-border rounded-xl overflow-hidden">
        {Z_LAYERS.map(l => <div key={l.token} className="flex items-center gap-4 px-5 py-2.5 border-b border-border last:border-b-0">
            <span className="w-10 text-right text-sm font-mono text-foreground tabular-nums">
              {l.value}
            </span>
            <span className="w-44 text-sm font-mono text-foreground">{l.token}</span>
            <span className="text-sm text-foreground-muted">{l.layer}</span>
            {l.reserved && <span className="ml-auto text-[10px] uppercase tracking-wide text-foreground-subtle">
                reserved
              </span>}
          </div>)}
      </div>

      <SectionTitle>Paint order</SectionTitle>
      <Note>
        Overlapping cards, each one tier higher than the last. The later token in the scale paints
        on top, regardless of DOM order.
      </Note>
      <div className="relative h-64">
        {STACK_DEMO.map(c => <div key={c.label} className={\`absolute h-28 w-56 rounded-xl border border-border-strong \${c.bg} flex items-start p-3 text-xs font-mono text-foreground\`} style={{
        zIndex: c.z,
        left: c.offset,
        top: c.offset / 3
      }}>
            {c.label}
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const p=["SemanticShadows","StackingOrder"];export{o as SemanticShadows,a as StackingOrder,p as __namedExportsOrder,x as default};
