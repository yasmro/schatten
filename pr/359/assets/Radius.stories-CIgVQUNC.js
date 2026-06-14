import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{a as n,c as r,i,o as a,r as o}from"./docs-ui-5pNv9biD.js";var s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),s=t(),c={title:`Tokens/Radius`,parameters:{layout:`fullscreen`}},l=[{token:`none`,value:`0`},{token:`sm`,value:`0.125rem`},{token:`md`,value:`0.375rem`},{token:`lg`,value:`0.5rem`},{token:`xl`,value:`0.75rem`},{token:`2xl`,value:`1rem`},{token:`full`,value:`9999px`}],u=[{name:`pill`,alias:`full`,status:`applied`,usedBy:`Badge / Radio / Switch`},{name:`control`,alias:`md`,status:`defined-only`,usedBy:`— (future: Button / Input — square today, #145)`},{name:`surface`,alias:`lg`,status:`defined-only`,usedBy:`— (future: Dialog / Select content — square today, #145)`}],d=({status:e})=>e===`applied`?(0,s.jsx)(`span`,{className:`rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success`,children:`applied`}):(0,s.jsx)(`span`,{className:`rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning`,children:`defined only`}),f=({radius:e,label:t})=>(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,s.jsx)(`div`,{className:`h-24 w-24 bg-surface border border-border-strong`,style:{borderRadius:e},"aria-hidden":`true`}),(0,s.jsx)(`span`,{className:`text-xs font-mono text-foreground`,children:t})]}),p={name:`Radius Scale`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Radius`}),(0,s.jsxs)(o,{children:[`Schatten expresses corner rounding with a discrete radius scale, defined in`,` `,(0,s.jsx)(`code`,{children:`src/core/tokens/spacing.css`}),` and registered as Tailwind utilities via the`,` `,(0,s.jsx)(`code`,{children:`@theme`}),` block in `,(0,s.jsx)(`code`,{children:`base.css`}),`. Reach for a `,(0,s.jsx)(`em`,{children:`semantic`}),` token (see`,` `,(0,s.jsx)(`strong`,{children:`Semantic tokens`}),`) in components, not the raw step.`]}),(0,s.jsx)(a,{children:`Primitive scale`}),(0,s.jsxs)(i,{children:[`The raw `,(0,s.jsx)(`code`,{children:`--radius-*`}),` steps. `,(0,s.jsx)(`code`,{children:`--radius-full`}),` is a sentinel (9999px) that rounds any element into a pill / circle; the others are fixed lengths.`]}),(0,s.jsx)(`div`,{className:`flex flex-wrap gap-8 p-8 bg-background`,children:l.map(e=>(0,s.jsx)(f,{radius:e.value,label:`--radius-${e.token}`},e.token))}),(0,s.jsx)(`div`,{className:`mt-6 border border-border rounded-xl px-5`,children:l.map(e=>(0,s.jsxs)(`div`,{className:`flex items-baseline gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,s.jsxs)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground font-mono`,children:[`--radius-`,e.token]}),(0,s.jsx)(`code`,{className:`flex-1 text-xs text-foreground-muted break-all`,children:e.value})]},e.token))})]})},m={name:`Semantic Tokens`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Semantic tokens`}),(0,s.jsxs)(o,{children:[`Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a primitive step — the table reads as`,` `,(0,s.jsx)(`strong`,{children:`purpose → which primitive → which component uses it`}),`. Tokens marked`,` `,(0,s.jsx)(`em`,{children:`defined only`}),` exist for forward use but are not wired to any surface yet.`]}),(0,s.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:u.map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-4 py-4 border-b border-border last:border-b-0`,children:[(0,s.jsx)(`div`,{className:`w-40 shrink-0 flex items-center justify-center py-2 bg-background`,children:(0,s.jsx)(`div`,{className:`h-16 w-16 bg-surface border border-border-strong`,style:{borderRadius:`var(--radius-${e.name})`},"aria-hidden":`true`})}),(0,s.jsxs)(`div`,{className:`flex-1`,children:[(0,s.jsxs)(`p`,{className:`text-sm font-medium text-foreground font-mono`,children:[`--radius-`,e.name]}),(0,s.jsxs)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:[`= --radius-`,e.alias]}),(0,s.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:e.usedBy})]}),(0,s.jsx)(`div`,{className:`w-28 shrink-0`,children:(0,s.jsx)(d,{status:e.status})})]},e.name))})]})},h=({surface:e,token:t,note:n})=>(0,s.jsxs)(`div`,{className:`flex items-start gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,s.jsx)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,s.jsx)(`code`,{className:`w-40 shrink-0 text-xs text-foreground-muted`,children:t}),(0,s.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:n})]}),g={name:`Usage Guide`,render:()=>(0,s.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,s.jsx)(n,{children:`Usage guide`}),(0,s.jsxs)(o,{children:[`Pick a radius by what the surface `,(0,s.jsx)(`em`,{children:`is`}),`, not by an absolute corner size. The semantic token for each surface type already encodes the right step.`]}),(0,s.jsx)(a,{children:`By surface type`}),(0,s.jsxs)(`div`,{className:`border border-border rounded-xl px-5 mb-8`,children:[(0,s.jsx)(h,{surface:`Pill`,token:`--radius-pill`,note:`Fully-rounded chips and toggles. (Alias of --radius-full; applied to Badge / Radio / Switch.)`}),(0,s.jsx)(h,{surface:`Control`,token:`--radius-control`,note:`Buttons and text inputs. (Alias of --radius-md; not yet applied — Button / Input render square today.)`}),(0,s.jsx)(h,{surface:`Surface`,token:`--radius-surface`,note:`Larger floating surfaces. (Alias of --radius-lg; not yet applied — Dialog / Select content render square today.)`})]}),(0,s.jsx)(a,{children:`Define-only is intentional`}),(0,s.jsxs)(i,{children:[(0,s.jsx)(`code`,{children:`--radius-control`}),` and `,(0,s.jsx)(`code`,{children:`--radius-surface`}),` are`,` `,(0,s.jsx)(`strong`,{children:`defined but not yet applied`}),`: today's components render square corners. Rounding them is a visual change deferred to a designer spike (#145), so the tokens wait for that consumer rather than being applied piecemeal. This mirrors `,(0,s.jsx)(`code`,{children:`--shadow-card`}),` `,`in `,(0,s.jsx)(`strong`,{children:`Tokens/Elevation`}),` — a single-value semantic token may sit define-only until its natural consumer lands.`]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Radius Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Radius</PageTitle>
      <Lead>
        Schatten expresses corner rounding with a discrete radius scale, defined in{' '}
        <code>src/core/tokens/spacing.css</code> and registered as Tailwind utilities via the{' '}
        <code>@theme</code> block in <code>base.css</code>. Reach for a <em>semantic</em> token (see{' '}
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`RadiusScale`,`RadiusSemantic`,`RadiusUsage`]}))();export{p as RadiusScale,m as RadiusSemantic,g as RadiusUsage,_ as __namedExportsOrder,c as default};