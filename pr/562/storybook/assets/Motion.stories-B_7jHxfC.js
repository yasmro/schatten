import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{X as t,n}from"./iframe-BV2bGrgt.js";import{a as r,c as i,i as a,o,r as s}from"./docs-ui-DOtXqQRr.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{c=t(),i(),l=n(),u={title:`Tokens/Motion`,parameters:{layout:`fullscreen`}},d=[{token:`fast`,value:`100ms`,motion:`quick`,use:`Hover, exit transitions`},{token:`base`,value:`150ms`,motion:`base`,use:`Default, enter transitions`},{token:`slow`,value:`200ms`,motion:`expressive`,use:`Dialog / drawer enter`}],f=[{name:`quick`,alias:`fast`,status:`defined-only`,usedBy:`— (future: hover feedback — hardcoded today)`},{name:`base`,alias:`base`,status:`defined-only`,usedBy:`— (future: default interactions — hardcoded today)`},{name:`expressive`,alias:`slow`,status:`defined-only`,usedBy:`— (future: dialog / drawer — enter uses --st-duration-slow today)`}],p=({status:e})=>e===`applied`?(0,l.jsx)(`span`,{className:`rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis`,children:`applied`}):(0,l.jsx)(`span`,{className:`rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis`,children:`defined only`}),m=()=>{let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);r(e.matches);let t=e=>r(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,l.jsxs)(`div`,{className:`rounded-xl border border-border p-6`,children:[(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,children:e?`Reset knobs`:`Run transition`}),n&&(0,l.jsxs)(a,{children:[(0,l.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` is active — the demo runs without a transition, so motion is never forced on you.`]}),(0,l.jsx)(`div`,{className:`mt-5 flex flex-col gap-4`,children:d.map(t=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsxs)(`span`,{className:`w-40 shrink-0 text-xs font-mono text-foreground`,children:[`--st-duration-`,t.token]}),(0,l.jsx)(`div`,{className:`relative h-8 flex-1 overflow-hidden rounded-lg border border-border bg-surface`,children:(0,l.jsx)(`div`,{"aria-hidden":`true`,className:`absolute top-1 h-6 w-6 rounded bg-theme-500`,style:{left:e?`calc(100% - 1.75rem)`:`0.25rem`,transition:n?`none`:`left var(--st-duration-${t.token}) ease`}})}),(0,l.jsx)(`span`,{className:`w-16 shrink-0 text-right text-xs font-mono text-foreground-muted tabular-nums`,children:t.value})]},t.token))})]})},h={name:`Duration Scale`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Motion`}),(0,l.jsxs)(s,{children:[`Schatten centralizes enter/exit timing in a three-step duration scale, defined in`,` `,(0,l.jsx)(`code`,{children:`src/core/tokens/animation.css`}),` and registered as part of the public token surface via the public-token registrar (`,(0,l.jsx)(`code`,{children:`src/styles/public-tokens.css`}),`). Components reference the scale — or its semantic `,(0,l.jsx)(`code`,{children:`--motion-*`}),` aliases (see`,` `,(0,l.jsx)(`strong`,{children:`Semantic Tokens`}),`) — never a hardcoded millisecond value.`]}),(0,l.jsx)(o,{children:`Duration scale`}),(0,l.jsxs)(a,{children:[`The raw `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` steps. `,(0,l.jsx)(`code`,{children:`fast`}),` / `,(0,l.jsx)(`code`,{children:`base`}),` /`,` `,(0,l.jsx)(`code`,{children:`slow`}),` are perceptually distinct; reach for a semantic `,(0,l.jsx)(`code`,{children:`--motion-*`}),` `,`alias in usage. Press `,(0,l.jsx)(`strong`,{children:`Run transition`}),` to feel the difference — the faster knob settles before the slower one.`]}),(0,l.jsx)(m,{}),(0,l.jsx)(`div`,{className:`mt-6 border border-border rounded-xl px-5`,children:d.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,l.jsxs)(`p`,{className:`w-44 shrink-0 text-sm font-medium text-foreground font-mono`,children:[`--st-duration-`,e.token]}),(0,l.jsx)(`code`,{className:`w-16 shrink-0 text-xs text-foreground-muted tabular-nums`,children:e.value}),(0,l.jsxs)(`code`,{className:`w-32 shrink-0 text-xs text-foreground-muted`,children:[`→ --motion-`,e.motion]}),(0,l.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:e.use})]},e.token))})]})},g={name:`Semantic Tokens`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Semantic tokens`}),(0,l.jsxs)(s,{children:[`Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` step — the table reads as`,` `,(0,l.jsx)(`strong`,{children:`purpose → which duration step → which component uses it`}),`. All three are`,` `,(0,l.jsx)(`em`,{children:`defined only`}),` today: nothing references `,(0,l.jsx)(`code`,{children:`--motion-*`}),` yet.`]}),(0,l.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:f.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4 py-4 border-b border-border last:border-b-0`,children:[(0,l.jsxs)(`div`,{className:`flex-1`,children:[(0,l.jsxs)(`p`,{className:`text-sm font-medium text-foreground font-mono`,children:[`--motion-`,e.name]}),(0,l.jsxs)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:[`= --st-duration-`,e.alias]}),(0,l.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:e.usedBy})]}),(0,l.jsx)(`div`,{className:`w-28 shrink-0`,children:(0,l.jsx)(p,{status:e.status})})]},e.name))}),(0,l.jsx)(o,{children:`Define-only is intentional`}),(0,l.jsxs)(a,{children:[`The `,(0,l.jsx)(`code`,{children:`--motion-*`}),` aliases are `,(0,l.jsx)(`strong`,{children:`defined but not yet applied`}),`: component hover transitions are still hardcoded, and unifying them onto the motion scale is a separate spike. The tokens wait for that consumer rather than being wired in piecemeal. This mirrors `,(0,l.jsx)(`code`,{children:`--radius-control`}),` in `,(0,l.jsx)(`strong`,{children:`Tokens/Radius`}),` and`,` `,(0,l.jsx)(`code`,{children:`--shadow-card`}),` in `,(0,l.jsx)(`strong`,{children:`Tokens/Elevation`}),` — a single-value semantic token may sit define-only until its natural consumer lands (see css-api.md).`]})]})},_=({surface:e,token:t,note:n})=>(0,l.jsxs)(`div`,{className:`flex items-start gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,l.jsx)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,l.jsx)(`code`,{className:`w-44 shrink-0 text-xs text-foreground-muted`,children:t}),(0,l.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:n})]}),v={name:`Usage Guide`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Usage guide`}),(0,l.jsxs)(s,{children:[`Pick a duration by what the motion is `,(0,l.jsx)(`em`,{children:`for`}),`, not by an absolute millisecond count. The named step already encodes the right pace.`]}),(0,l.jsx)(o,{children:`By intent`}),(0,l.jsxs)(`div`,{className:`border border-border rounded-xl px-5 mb-8`,children:[(0,l.jsx)(_,{surface:`Hover / exit`,token:`--motion-quick`,note:`Lightweight feedback that should feel near-instant. (Alias of --st-duration-fast.)`}),(0,l.jsx)(_,{surface:`Default / enter`,token:`--motion-base`,note:`The default for most enter transitions and focus rings. (Alias of --st-duration-base.)`}),(0,l.jsx)(_,{surface:`Dialog / drawer`,token:`--motion-expressive`,note:`Larger surfaces sliding in; slightly slower reads as deliberate. (Alias of --st-duration-slow.)`}),(0,l.jsx)(_,{surface:`Looping`,token:`--st-spinner-*`,note:`Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit scale.`})]}),(0,l.jsx)(o,{children:`Design principles`}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Respect prefers-reduced-motion.`}),` Every animated component disables motion under `,(0,l.jsx)(`code`,{children:`@media (prefers-reduced-motion: reduce)`}),` — see `,(0,l.jsx)(`code`,{children:`Toast.css`}),`,`,` `,(0,l.jsx)(`code`,{children:`Dialog.css`}),`, `,(0,l.jsx)(`code`,{children:`Tooltip.css`}),`. New motion must do the same; the demo on the `,(0,l.jsx)(`strong`,{children:`Duration Scale`}),` page does it too.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Loop animations live in component CSS.`}),` Continuous loops (spinner) are authored as `,(0,l.jsx)(`code`,{children:`@keyframes`}),` in the component's own `,(0,l.jsx)(`code`,{children:`.css`}),`, not as a transition token — see component-architecture §7.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Interactive feedback uses transition; enter/exit uses the scale.`}),` Reach for a `,(0,l.jsx)(`code`,{children:`transition`}),` on hover/focus state; reach for `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` on the mount/unmount keyframes.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Don't animate without a reason.`}),` Motion should communicate a state change. If a transition doesn't help the user understand what changed, leave it out.`]}),(0,l.jsx)(o,{children:`Not yet tokenized`}),(0,l.jsxs)(a,{children:[`Component `,(0,l.jsx)(`em`,{children:`hover`}),` transitions are still `,(0,l.jsx)(`strong`,{children:`hardcoded`}),` today (e.g. Badge at 150ms, others at 200ms) and do not yet reference `,(0,l.jsx)(`code`,{children:`--motion-*`}),`. Folding them onto the motion scale is a separate spike. `,(0,l.jsx)(`em`,{children:`Enter/exit`}),` animations (Tooltip / Dialog / Toast) already consume `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),`.`]}),(0,l.jsx)(o,{children:`Removed: --transition-*`}),(0,l.jsxs)(a,{children:[`The older `,(0,l.jsx)(`code`,{children:`--transition-fast`}),` / `,(0,l.jsx)(`code`,{children:`-normal`}),` / `,(0,l.jsx)(`code`,{children:`-slow`}),` and`,` `,(0,l.jsx)(`code`,{children:`tokens.transition.*`}),` / `,(0,l.jsx)(`code`,{children:`TransitionToken`}),` were deprecated in v0.10.0 and `,(0,l.jsx)(`strong`,{children:`removed`}),` in v0.11.0. Use `,(0,l.jsx)(`code`,{children:`--motion-*`}),` (or`,` `,(0,l.jsx)(`code`,{children:`tokens.motion.*`}),`) instead. Note the old values bundled an easing (e.g.`,` `,(0,l.jsx)(`code`,{children:`150ms ease`}),`) while the motion tokens are duration-only — specify your own easing: `,(0,l.jsx)(`code`,{children:`fast`}),` → `,(0,l.jsx)(`code`,{children:`--motion-base`}),`, `,(0,l.jsx)(`code`,{children:`normal`}),` →`,` `,(0,l.jsx)(`code`,{children:`--motion-expressive`}),`, `,(0,l.jsx)(`code`,{children:`slow`}),` (300ms) has no direct step.`]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Duration Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Motion</PageTitle>
      <Lead>
        Schatten centralizes enter/exit timing in a three-step duration scale, defined in{' '}
        <code>src/core/tokens/animation.css</code> and registered as part of the public token
        surface via the public-token registrar (<code>src/styles/public-tokens.css</code>).
        Components reference the scale — or its semantic <code>--motion-*</code> aliases (see{' '}
        <strong>Semantic Tokens</strong>) — never a hardcoded millisecond value.
      </Lead>

      <SectionTitle>Duration scale</SectionTitle>
      <Note>
        The raw <code>--st-duration-*</code> steps. <code>fast</code> / <code>base</code> /{' '}
        <code>slow</code> are perceptually distinct; reach for a semantic <code>--motion-*</code>{' '}
        alias in usage. Press <strong>Run transition</strong> to feel the difference — the faster
        knob settles before the slower one.
      </Note>

      <DurationDemo />

      <div className="mt-6 border border-border rounded-xl px-5">
        {DURATION_SCALE.map(d => <div key={d.token} className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
            <p className="w-44 shrink-0 text-sm font-medium text-foreground font-mono">
              --st-duration-{d.token}
            </p>
            <code className="w-16 shrink-0 text-xs text-foreground-muted tabular-nums">
              {d.value}
            </code>
            <code className="w-32 shrink-0 text-xs text-foreground-muted">
              → --motion-{d.motion}
            </code>
            <p className="flex-1 text-sm text-foreground-muted">{d.use}</p>
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Semantic Tokens',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, not the raw scale. Each is a
        value-preserving alias over a <code>--st-duration-*</code> step — the table reads as{' '}
        <strong>purpose → which duration step → which component uses it</strong>. All three are{' '}
        <em>defined only</em> today: nothing references <code>--motion-*</code> yet.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_MOTION.map(m => <div key={m.name} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--motion-{m.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --st-duration-{m.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{m.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={m.status} />
            </div>
          </div>)}
      </div>

      <SectionTitle>Define-only is intentional</SectionTitle>
      <Note>
        The <code>--motion-*</code> aliases are <strong>defined but not yet applied</strong>:
        component hover transitions are still hardcoded, and unifying them onto the motion scale is
        a separate spike. The tokens wait for that consumer rather than being wired in piecemeal.
        This mirrors <code>--radius-control</code> in <strong>Tokens/Radius</strong> and{' '}
        <code>--shadow-card</code> in <strong>Tokens/Elevation</strong> — a single-value semantic
        token may sit define-only until its natural consumer lands (see css-api.md).
      </Note>
    </div>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Usage Guide',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a duration by what the motion is <em>for</em>, not by an absolute millisecond count.
        The named step already encodes the right pace.
      </Lead>

      <SectionTitle>By intent</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow surface="Hover / exit" token="--motion-quick" note="Lightweight feedback that should feel near-instant. (Alias of --st-duration-fast.)" />
        <GuideRow surface="Default / enter" token="--motion-base" note="The default for most enter transitions and focus rings. (Alias of --st-duration-base.)" />
        <GuideRow surface="Dialog / drawer" token="--motion-expressive" note="Larger surfaces sliding in; slightly slower reads as deliberate. (Alias of --st-duration-slow.)" />
        <GuideRow surface="Looping" token="--st-spinner-*" note="Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit scale." />
      </div>

      <SectionTitle>Design principles</SectionTitle>
      <Note>
        <strong>Respect prefers-reduced-motion.</strong> Every animated component disables motion
        under <code>@media (prefers-reduced-motion: reduce)</code> — see <code>Toast.css</code>,{' '}
        <code>Dialog.css</code>, <code>Tooltip.css</code>. New motion must do the same; the demo on
        the <strong>Duration Scale</strong> page does it too.
      </Note>
      <Note>
        <strong>Loop animations live in component CSS.</strong> Continuous loops (spinner) are
        authored as <code>@keyframes</code> in the component's own <code>.css</code>, not as a
        transition token — see component-architecture §7.
      </Note>
      <Note>
        <strong>Interactive feedback uses transition; enter/exit uses the scale.</strong> Reach for
        a <code>transition</code> on hover/focus state; reach for <code>--st-duration-*</code> on
        the mount/unmount keyframes.
      </Note>
      <Note>
        <strong>Don't animate without a reason.</strong> Motion should communicate a state change.
        If a transition doesn't help the user understand what changed, leave it out.
      </Note>

      <SectionTitle>Not yet tokenized</SectionTitle>
      <Note>
        Component <em>hover</em> transitions are still <strong>hardcoded</strong> today (e.g. Badge
        at 150ms, others at 200ms) and do not yet reference <code>--motion-*</code>. Folding them
        onto the motion scale is a separate spike. <em>Enter/exit</em> animations (Tooltip / Dialog
        / Toast) already consume <code>--st-duration-*</code>.
      </Note>

      <SectionTitle>Removed: --transition-*</SectionTitle>
      <Note>
        The older <code>--transition-fast</code> / <code>-normal</code> / <code>-slow</code> and{' '}
        <code>tokens.transition.*</code> / <code>TransitionToken</code> were deprecated in v0.10.0
        and <strong>removed</strong> in v0.11.0. Use <code>--motion-*</code> (or{' '}
        <code>tokens.motion.*</code>) instead. Note the old values bundled an easing (e.g.{' '}
        <code>150ms ease</code>) while the motion tokens are duration-only — specify your own
        easing: <code>fast</code> → <code>--motion-base</code>, <code>normal</code> →{' '}
        <code>--motion-expressive</code>, <code>slow</code> (300ms) has no direct step.
      </Note>
    </div>
}`,...v.parameters?.docs?.source}}},y=[`DurationScale`,`SemanticTokens`,`UsageGuide`]})))()}b();export{h as DurationScale,g as SemanticTokens,v as UsageGuide,y as __namedExportsOrder,u as default};