import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-x1gacRrS.js";import{a as r,c as i,i as a,o,r as s}from"./docs-ui-Bz6NJ96O.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{c=n(),i(),l=t(),u={title:`Tokens/Motion`,parameters:{layout:`fullscreen`}},d=[{token:`fast`,value:`100ms`,motion:`quick`,use:`Popover-tier exit`},{token:`base`,value:`150ms`,motion:`base`,use:`Popover-tier enter, overlay-tier exit`},{token:`slow`,value:`200ms`,motion:`expressive`,use:`Overlay-tier enter, feedback`}],f=[{token:`smooth-out`,value:`cubic-bezier(0.22, 1, 0.36, 1)`,use:`Enter — reaches a readable state early`},{token:`in`,value:`ease-in`,use:`Exit — leaves without lingering`}],p=[{name:`overlay-enter`,alias:`st-duration-slow`,status:`applied`,usedBy:`Dialog (overlay + content) — the modal tier`},{name:`overlay-exit`,alias:`st-duration-base`,status:`applied`,usedBy:`Dialog`},{name:`popover-enter`,alias:`st-duration-base`,status:`applied`,usedBy:`Popover, Select, Tooltip, DropdownMenu — every non-modal surface`},{name:`popover-exit`,alias:`st-duration-fast`,status:`applied`,usedBy:`Popover, Select, Tooltip, DropdownMenu`},{name:`ease-enter`,alias:`st-ease-smooth-out`,status:`applied`,usedBy:`Dialog, Popover, Select enter`},{name:`ease-exit`,alias:`st-ease-in`,status:`applied`,usedBy:`Dialog, Popover, Select exit`},{name:`feedback`,alias:`st-duration-slow`,status:`applied`,usedBy:`Hover / color / state changes, Switch thumb, Tabs indicator, Button loading`},{name:`quick`,alias:`st-duration-fast`,status:`applied`,usedBy:`Table row hover`},{name:`base`,alias:`st-duration-base`,status:`defined-only`,usedBy:`—`},{name:`expressive`,alias:`st-duration-slow`,status:`defined-only`,usedBy:`—`}],m=({status:e})=>e===`applied`?(0,l.jsx)(`span`,{className:`rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis`,children:`applied`}):(0,l.jsx)(`span`,{className:`rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis`,children:`defined only`}),h=()=>{let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);r(e.matches);let t=e=>r(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,l.jsxs)(`div`,{className:`rounded-xl border border-border p-6`,children:[(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,children:e?`Reset knobs`:`Run transition`}),n&&(0,l.jsxs)(a,{children:[(0,l.jsx)(`code`,{children:`prefers-reduced-motion: reduce`}),` is active — the demo runs without a transition, so motion is never forced on you.`]}),(0,l.jsx)(`div`,{className:`mt-5 flex flex-col gap-4`,children:d.map(t=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsxs)(`span`,{className:`w-40 shrink-0 text-xs font-mono text-foreground`,children:[`--st-duration-`,t.token]}),(0,l.jsx)(`div`,{className:`relative h-8 flex-1 overflow-hidden rounded-lg border border-border bg-surface`,children:(0,l.jsx)(`div`,{"aria-hidden":`true`,className:`absolute top-1 h-6 w-6 rounded bg-theme-500`,style:{left:e?`calc(100% - 1.75rem)`:`0.25rem`,transition:n?`none`:`left var(--st-duration-${t.token}) ease`}})}),(0,l.jsx)(`span`,{className:`w-16 shrink-0 text-right text-xs font-mono text-foreground-muted tabular-nums`,children:t.value})]},t.token))})]})},g={name:`Duration Scale`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Motion`}),(0,l.jsxs)(s,{children:[`Schatten centralizes enter/exit timing in a three-step duration scale, defined in`,` `,(0,l.jsx)(`code`,{children:`src/core/tokens/animation.css`}),` and registered as part of the public token surface via the public-token registrar (`,(0,l.jsx)(`code`,{children:`src/styles/public-tokens.css`}),`). Components reference the scale — or its semantic `,(0,l.jsx)(`code`,{children:`--motion-*`}),` aliases (see`,` `,(0,l.jsx)(`strong`,{children:`Semantic Tokens`}),`) — never a hardcoded millisecond value.`]}),(0,l.jsx)(o,{children:`Duration scale`}),(0,l.jsxs)(a,{children:[`The raw `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` steps. `,(0,l.jsx)(`code`,{children:`fast`}),` / `,(0,l.jsx)(`code`,{children:`base`}),` /`,` `,(0,l.jsx)(`code`,{children:`slow`}),` are perceptually distinct; reach for a semantic `,(0,l.jsx)(`code`,{children:`--motion-*`}),` `,`alias in usage. Press `,(0,l.jsx)(`strong`,{children:`Run transition`}),` to feel the difference — the faster knob settles before the slower one.`]}),(0,l.jsx)(h,{}),(0,l.jsx)(`div`,{className:`mt-6 border border-border rounded-xl px-5`,children:d.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,l.jsxs)(`p`,{className:`w-44 shrink-0 text-sm font-medium text-foreground font-mono`,children:[`--st-duration-`,e.token]}),(0,l.jsx)(`code`,{className:`w-16 shrink-0 text-xs text-foreground-muted tabular-nums`,children:e.value}),(0,l.jsxs)(`code`,{className:`w-32 shrink-0 text-xs text-foreground-muted`,children:[`→ --motion-`,e.motion]}),(0,l.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:e.use})]},e.token))}),(0,l.jsx)(o,{children:`Easing`}),(0,l.jsxs)(a,{children:[`Enter/exit motion pairs a duration with one of two curves. They take the `,(0,l.jsx)(`code`,{children:`--st-`}),` `,`prefix because Tailwind v4 already owns the bare `,(0,l.jsx)(`code`,{children:`--ease-out`}),` /`,` `,(0,l.jsx)(`code`,{children:`--ease-in`}),` names with different curves.`]}),(0,l.jsx)(`div`,{className:`mt-6 border border-border rounded-xl px-5`,children:f.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,l.jsxs)(`p`,{className:`w-44 shrink-0 text-sm font-medium text-foreground font-mono`,children:[`--st-ease-`,e.token]}),(0,l.jsx)(`code`,{className:`w-56 shrink-0 text-xs text-foreground-muted`,children:e.value}),(0,l.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:e.use})]},e.token))})]})},_={name:`Semantic Tokens`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Semantic tokens`}),(0,l.jsxs)(s,{children:[`Components reference these intent-named tokens, never the raw scales. Each is an alias over a `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` or `,(0,l.jsx)(`code`,{children:`--st-ease-*`}),` step — the table reads as`,` `,(0,l.jsx)(`strong`,{children:`purpose → which step → which component uses it`}),`. Enter/exit timing comes in two tiers, chosen by whether the surface is modal: `,(0,l.jsx)(`code`,{children:`overlay`}),` for modal surfaces,`,` `,(0,l.jsx)(`code`,{children:`popover`}),` for every other surface that opens and closes.`]}),(0,l.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:p.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-4 py-4 border-b border-border last:border-b-0`,children:[(0,l.jsxs)(`div`,{className:`flex-1`,children:[(0,l.jsxs)(`p`,{className:`text-sm font-medium text-foreground font-mono`,children:[`--motion-`,e.name]}),(0,l.jsxs)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:[`= --`,e.alias]}),(0,l.jsx)(`p`,{className:`text-xs text-foreground-muted mt-1`,children:e.usedBy})]}),(0,l.jsx)(`div`,{className:`w-28 shrink-0`,children:(0,l.jsx)(m,{status:e.status})})]},e.name))}),(0,l.jsx)(o,{children:`Define-only is intentional`}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`code`,{children:`--motion-base`}),` and `,(0,l.jsx)(`code`,{children:`--motion-expressive`}),` are`,` `,(0,l.jsx)(`strong`,{children:`defined but not applied`}),`: they predate the enter/exit tiers, and their old consumers moved to the tier tokens. They keep their names (renaming a public variable is a major change) and wait for a natural consumer. This mirrors `,(0,l.jsx)(`code`,{children:`--radius-control`}),` in`,` `,(0,l.jsx)(`strong`,{children:`Tokens/Radius`}),` and `,(0,l.jsx)(`code`,{children:`--shadow-card`}),` in`,` `,(0,l.jsx)(`strong`,{children:`Tokens/Elevation`}),` — a single-value semantic token may sit define-only (see css-api.md).`]})]})},v=({surface:e,token:t,note:n})=>(0,l.jsxs)(`div`,{className:`flex items-start gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,l.jsx)(`p`,{className:`w-28 shrink-0 text-sm font-medium text-foreground`,children:e}),(0,l.jsx)(`code`,{className:`w-44 shrink-0 text-xs text-foreground-muted`,children:t}),(0,l.jsx)(`p`,{className:`flex-1 text-sm text-foreground-muted`,children:n})]}),y={name:`Usage Guide`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,l.jsx)(r,{children:`Usage guide`}),(0,l.jsxs)(s,{children:[`Pick a duration by what the motion is `,(0,l.jsx)(`em`,{children:`for`}),`, not by an absolute millisecond count. The named step already encodes the right pace.`]}),(0,l.jsx)(o,{children:`By intent`}),(0,l.jsxs)(`div`,{className:`border border-border rounded-xl px-5 mb-8`,children:[(0,l.jsx)(v,{surface:`Modal enter / exit`,token:`--motion-overlay-*`,note:`Dialog (and a future Sheet): surfaces that stop input. 200ms in, 150ms out.`}),(0,l.jsx)(v,{surface:`Other surfaces`,token:`--motion-popover-*`,note:`Popover, Select, Tooltip, DropdownMenu — every non-modal surface that opens and closes. 150ms in, 100ms out.`}),(0,l.jsx)(v,{surface:`Enter / exit curve`,token:`--motion-ease-enter / -exit`,note:`Pair with either tier. Enter reaches a readable state early; exit leaves without lingering.`}),(0,l.jsx)(v,{surface:`Feedback`,token:`--motion-feedback`,note:`Hover, color and state changes, the Switch thumb, the Tabs indicator. 200ms.`}),(0,l.jsx)(v,{surface:`Looping`,token:`--st-spinner-*`,note:`Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit tiers.`})]}),(0,l.jsx)(o,{children:`Design principles`}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Pick by intent, not by number.`}),` Choose the tier the surface belongs to — modal or not — and let the token carry the milliseconds. Component CSS references only`,` `,(0,l.jsx)(`code`,{children:`--motion-*`}),`, never `,(0,l.jsx)(`code`,{children:`--st-duration-*`}),` / `,(0,l.jsx)(`code`,{children:`--st-ease-*`}),`, and never a literal time (`,(0,l.jsx)(`code`,{children:`motion-token-usage.test.ts`}),` checks all three).`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Open surfaces fade; they do not slide, zoom or blur.`}),` Dialog, Popover and Select use opacity only. A zoom of 0.97 was too small to see, and blur read as a lens / depth effect rather than ink on paper (#630). Tooltip keeps its short slide.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Exit is shorter than enter.`}),` Closing should never hold the user up.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Respect prefers-reduced-motion.`}),` Every component with an enter/exit animation turns it off under `,(0,l.jsx)(`code`,{children:`@media (prefers-reduced-motion: reduce)`}),`; the Switch thumb jumps instead of sliding. New motion must do the same.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Always repeat the value as a fallback.`}),` Write`,` `,(0,l.jsx)(`code`,{children:`var(--motion-feedback, 200ms)`}),`, not `,(0,l.jsx)(`code`,{children:`var(--motion-feedback)`}),`: the per-component CSS subpaths ship no tokens.`]}),(0,l.jsxs)(a,{children:[(0,l.jsx)(`strong`,{children:`Loop animations live in component CSS.`}),` Continuous loops (spinner) are authored as `,(0,l.jsx)(`code`,{children:`@keyframes`}),` in the component's own `,(0,l.jsx)(`code`,{children:`.css`}),`, not as a motion token — see component-architecture §7.`]}),(0,l.jsx)(o,{children:`Removed: --transition-*`}),(0,l.jsxs)(a,{children:[`The older `,(0,l.jsx)(`code`,{children:`--transition-fast`}),` / `,(0,l.jsx)(`code`,{children:`-normal`}),` / `,(0,l.jsx)(`code`,{children:`-slow`}),` and`,` `,(0,l.jsx)(`code`,{children:`tokens.transition.*`}),` / `,(0,l.jsx)(`code`,{children:`TransitionToken`}),` were deprecated in v0.10.0 and `,(0,l.jsx)(`strong`,{children:`removed`}),` in v0.11.0. Use `,(0,l.jsx)(`code`,{children:`--motion-*`}),` (or`,` `,(0,l.jsx)(`code`,{children:`tokens.motion.*`}),`) instead. Note the old values bundled an easing (e.g.`,` `,(0,l.jsx)(`code`,{children:`150ms ease`}),`) while the motion tokens are duration-only — specify your own easing: `,(0,l.jsx)(`code`,{children:`fast`}),` → `,(0,l.jsx)(`code`,{children:`--motion-base`}),`, `,(0,l.jsx)(`code`,{children:`normal`}),` →`,` `,(0,l.jsx)(`code`,{children:`--motion-expressive`}),`, `,(0,l.jsx)(`code`,{children:`slow`}),` (300ms) has no direct step.`]})]})},b=[`DurationScale`,`SemanticTokens`,`UsageGuide`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

      <SectionTitle>Easing</SectionTitle>
      <Note>
        Enter/exit motion pairs a duration with one of two curves. They take the <code>--st-</code>{' '}
        prefix because Tailwind v4 already owns the bare <code>--ease-out</code> /{' '}
        <code>--ease-in</code> names with different curves.
      </Note>
      <div className="mt-6 border border-border rounded-xl px-5">
        {EASING_SCALE.map(e => <div key={e.token} className="flex items-center gap-4 py-3 border-b border-border last:border-b-0">
            <p className="w-44 shrink-0 text-sm font-medium text-foreground font-mono">
              --st-ease-{e.token}
            </p>
            <code className="w-56 shrink-0 text-xs text-foreground-muted">{e.value}</code>
            <p className="flex-1 text-sm text-foreground-muted">{e.use}</p>
          </div>)}
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Semantic Tokens',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Semantic tokens</PageTitle>
      <Lead>
        Components reference these intent-named tokens, never the raw scales. Each is an alias over
        a <code>--st-duration-*</code> or <code>--st-ease-*</code> step — the table reads as{' '}
        <strong>purpose → which step → which component uses it</strong>. Enter/exit timing comes in
        two tiers, chosen by whether the surface is modal: <code>overlay</code> for modal surfaces,{' '}
        <code>popover</code> for every other surface that opens and closes.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {SEMANTIC_MOTION.map(m => <div key={m.name} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground font-mono">--motion-{m.name}</p>
              <p className="text-xs text-foreground-muted font-mono">= --{m.alias}</p>
              <p className="text-xs text-foreground-muted mt-1">{m.usedBy}</p>
            </div>
            <div className="w-28 shrink-0">
              <StatusBadge status={m.status} />
            </div>
          </div>)}
      </div>

      <SectionTitle>Define-only is intentional</SectionTitle>
      <Note>
        <code>--motion-base</code> and <code>--motion-expressive</code> are{' '}
        <strong>defined but not applied</strong>: they predate the enter/exit tiers, and their old
        consumers moved to the tier tokens. They keep their names (renaming a public variable is a
        major change) and wait for a natural consumer. This mirrors <code>--radius-control</code> in{' '}
        <strong>Tokens/Radius</strong> and <code>--shadow-card</code> in{' '}
        <strong>Tokens/Elevation</strong> — a single-value semantic token may sit define-only (see
        css-api.md).
      </Note>
    </div>
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Usage Guide',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Usage guide</PageTitle>
      <Lead>
        Pick a duration by what the motion is <em>for</em>, not by an absolute millisecond count.
        The named step already encodes the right pace.
      </Lead>

      <SectionTitle>By intent</SectionTitle>
      <div className="border border-border rounded-xl px-5 mb-8">
        <GuideRow surface="Modal enter / exit" token="--motion-overlay-*" note="Dialog (and a future Sheet): surfaces that stop input. 200ms in, 150ms out." />
        <GuideRow surface="Other surfaces" token="--motion-popover-*" note="Popover, Select, Tooltip, DropdownMenu — every non-modal surface that opens and closes. 150ms in, 100ms out." />
        <GuideRow surface="Enter / exit curve" token="--motion-ease-enter / -exit" note="Pair with either tier. Enter reaches a readable state early; exit leaves without lingering." />
        <GuideRow surface="Feedback" token="--motion-feedback" note="Hover, color and state changes, the Switch thumb, the Tabs indicator. 200ms." />
        <GuideRow surface="Looping" token="--st-spinner-*" note="Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit tiers." />
      </div>

      <SectionTitle>Design principles</SectionTitle>
      <Note>
        <strong>Pick by intent, not by number.</strong> Choose the tier the surface belongs to —
        modal or not — and let the token carry the milliseconds. Component CSS references only{' '}
        <code>--motion-*</code>, never <code>--st-duration-*</code> / <code>--st-ease-*</code>, and
        never a literal time (<code>motion-token-usage.test.ts</code> checks all three).
      </Note>
      <Note>
        <strong>Open surfaces fade; they do not slide, zoom or blur.</strong> Dialog, Popover and
        Select use opacity only. A zoom of 0.97 was too small to see, and blur read as a lens /
        depth effect rather than ink on paper (#630). Tooltip keeps its short slide.
      </Note>
      <Note>
        <strong>Exit is shorter than enter.</strong> Closing should never hold the user up.
      </Note>
      <Note>
        <strong>Respect prefers-reduced-motion.</strong> Every component with an enter/exit
        animation turns it off under <code>@media (prefers-reduced-motion: reduce)</code>; the
        Switch thumb jumps instead of sliding. New motion must do the same.
      </Note>
      <Note>
        <strong>Always repeat the value as a fallback.</strong> Write{' '}
        <code>var(--motion-feedback, 200ms)</code>, not <code>var(--motion-feedback)</code>: the
        per-component CSS subpaths ship no tokens.
      </Note>
      <Note>
        <strong>Loop animations live in component CSS.</strong> Continuous loops (spinner) are
        authored as <code>@keyframes</code> in the component's own <code>.css</code>, not as a
        motion token — see component-architecture §7.
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as DurationScale,_ as SemanticTokens,y as UsageGuide,b as __namedExportsOrder,u as default};