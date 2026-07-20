import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,c as r,i,o as a,r as o}from"./docs-ui--6_UeLZ5.js";var s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),s=t(),c={title:`Tokens/Elevation`,parameters:{layout:`fullscreen`}},l=[{token:`sm`,value:`0 1px 2px 0 rgb(0 0 0 / 0.05)`},{token:`md`,value:`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`},{token:`lg`,value:`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`},{token:`xl`,value:`0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`}],u=[{name:`popover`,alias:`md`,status:`applied`,usedBy:`Tooltip / Select content`},{name:`modal`,alias:`lg`,status:`applied`,usedBy:`Dialog`},{name:`toast`,alias:`md`,status:`applied`,usedBy:`Toast`},{name:`card`,alias:`sm`,status:`applied`,usedBy:`Card`}],d=({status:e})=>e===`applied`?(0,s.jsx)(`span`,{className:`rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis`,children:`applied`}):(0,s.jsx)(`span`,{className:`rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis`,children:`defined only`}),f=({shadow:e,label:t})=>(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,s.jsx)(`div`,{className:`h-24 w-40 rounded-xl bg-surface`,style:{boxShadow:e},"aria-hidden":`true`}),(0,s.jsx)(`span`,{className:`text-xs font-mono text-foreground`,children:t})]}),p={name:`Shadow Scale`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Elevation`}),(0,s.jsxs)(o,{children:[`Schatten expresses elevation with a four-step shadow scale, defined in`,` `,(0,s.jsx)(`code`,{children:`src/core/tokens/spacing.css`}),` and registered in the public-token registrar (`,(0,s.jsx)(`code`,{children:`src/styles/public-tokens.css`}),`). Every shadow is a translucent black (`,(0,s.jsx)(`code`,{children:`rgb(0 0 0 / α)`}),`); it is mode-agnostic, so the same value reads as a softer shadow against a dark surface (see `,(0,s.jsx)(`strong`,{children:`Usage guide`}),`).`]}),(0,s.jsx)(a,{children:`Primitive scale`}),(0,s.jsxs)(i,{children:[`The raw `,(0,s.jsx)(`code`,{children:`--shadow-*`}),` steps. Reach for a `,(0,s.jsx)(`em`,{children:`semantic`}),` token (see`,` `,(0,s.jsx)(`strong`,{children:`Semantic tokens`}),`) in components; the primitives are the underlying values those aliases point at. `,(0,s.jsx)(`code`,{children:`--shadow-xl`}),` ships in the scale but is currently mapped to no semantic alias and used by no component — reserved, not retired.`]}),(0,s.jsx)(`div`,{className:`flex flex-wrap gap-8 p-8 bg-background`,children:l.map(e=>(0,s.jsx)(f,{shadow:e.value,label:`--shadow-${e.token}`},e.token))}),(0,s.jsx)(`div`,{className:`mt-6 border border-border rounded-xl px-5`,children:l.map(e=>(0,s.jsxs)(`div`,{className:`flex items-baseline gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,s.jsxs)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground font-mono`,children:[`--shadow-`,e.token]}),(0,s.jsx)(`code`,{className:`flex-1 text-xs text-foreground-muted break-all`,children:e.value})]},e.token))})]})},m={name:`Semantic Tokens`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Semantic tokens`}),(0,s.jsxs)(o,{children:[`Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a primitive step — the table reads as`,` `,(0,s.jsx)(`strong`,{children:`purpose → which primitive → which component uses it`}),`. Tokens marked`,` `,(0,s.jsx)(`em`,{children:`defined only`}),` exist for forward use but are not wired to any surface yet.`]}),(0,s.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:u.map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-4 py-4 border-b border-border last:border-b-0`,children:[(0,s.jsx)(`div`,{className:`w-40 shrink-0 flex items-center justify-center py-2 bg-background`,children:(0,s.jsx)(`div`,{className:`h-12 w-28 rounded-lg bg-surface`,style:{boxShadow:`var(--shadow-${e.name})`},"aria-hidden":`true`})}),(0,s.jsxs)(`div`,{className:`flex-1`,children:[(0,s.jsxs)(`p`,{className:`text-sm font-medium text-foreground font-mono`,children:[`--shadow-`,e.name]}),(0,s.jsxs)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:[`= --shadow-`,e.alias]}),(0,s.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:e.usedBy})]}),(0,s.jsx)(`div`,{className:`w-28 shrink-0`,children:(0,s.jsx)(d,{status:e.status})})]},e.name))})]})},h=({surface:e,token:t,note:n})=>(0,s.jsxs)(`div`,{className:`flex items-start gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,s.jsx)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,s.jsx)(`code`,{className:`w-40 shrink-0 text-xs text-foreground-muted`,children:t}),(0,s.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:n})]}),g={name:`Usage Guide`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Usage guide`}),(0,s.jsxs)(o,{children:[`Pick a shadow by what the surface `,(0,s.jsx)(`em`,{children:`is`}),`, not by how deep you want it to look. The semantic token for each surface type already encodes the right depth.`]}),(0,s.jsx)(a,{children:`By surface type`}),(0,s.jsxs)(`div`,{className:`border border-border rounded-xl px-5 mb-8`,children:[(0,s.jsx)(h,{surface:`Card`,token:`--shadow-card`,note:`Resting content cards. Lowest elevation. (Alias of --shadow-sm; applied by Card.)`}),(0,s.jsx)(h,{surface:`Tooltip / Popover`,token:`--shadow-popover`,note:`Transient floating content layered just above the page.`}),(0,s.jsx)(h,{surface:`Toast`,token:`--shadow-toast`,note:`Notifications that overlay content but are not modal.`}),(0,s.jsx)(h,{surface:`Dialog / Modal`,token:`--shadow-modal`,note:`Focus-trapping surfaces. Highest elevation in the system today.`})]}),(0,s.jsx)(a,{children:`Don't over-elevate`}),(0,s.jsx)(i,{children:`Shadow is a signal, not decoration. A flat surface (no shadow) is the right answer for most in-flow content — reserve elevation for things that genuinely float above the page. Stacking many shadowed surfaces flattens the hierarchy the shadow was meant to create.`}),(0,s.jsx)(a,{children:`Dark mode`}),(0,s.jsxs)(i,{children:[`Shadows are `,(0,s.jsx)(`strong`,{children:`mode-agnostic`}),`: there is no dark-specific shadow token, and the`,` `,(0,s.jsx)(`code`,{children:`.dark`}),` cascade does not override `,(0,s.jsx)(`code`,{children:`--shadow-*`}),`. The same translucent black is applied in both modes, so a shadow reads as softer against a dark surface than against a light one. Toggle the Storybook theme to compare — the muted dark appearance is intended, not a missing token. (Re-tuning depth per mode is a possible future refinement.)`]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Shadow Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Elevation</PageTitle>
      <Lead>
        Schatten expresses elevation with a four-step shadow scale, defined in{' '}
        <code>src/core/tokens/spacing.css</code> and registered in the public-token registrar (
        <code>src/styles/public-tokens.css</code>). Every shadow is a translucent black (
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Usage Guide',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a shadow by what the surface <em>is</em>, not by how deep you want it to look. The
        semantic token for each surface type already encodes the right depth.
      </Lead>

      <SectionTitle>By surface type</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow surface="Card" token="--shadow-card" note="Resting content cards. Lowest elevation. (Alias of --shadow-sm; applied by Card.)" />
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
}`,...g.parameters?.docs?.source}}},_=[`ShadowScale`,`SemanticTokens`,`UsageGuide`]}))();export{m as SemanticTokens,p as ShadowScale,g as UsageGuide,_ as __namedExportsOrder,c as default};