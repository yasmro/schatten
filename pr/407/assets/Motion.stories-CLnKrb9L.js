import{j as e,r as m}from"./iframe-CSXdk4Ai.js";import{P as u,L as h,S as n,N as s}from"./docs-ui-fabrHNQ_.js";import"./preload-helper-BhJV1oZY.js";const N={title:"Tokens/Motion",parameters:{layout:"fullscreen"}},f=[{token:"fast",value:"100ms",motion:"quick",use:"Hover, exit transitions"},{token:"base",value:"150ms",motion:"base",use:"Default, enter transitions"},{token:"slow",value:"200ms",motion:"expressive",use:"Dialog / drawer enter"}],b=[{name:"quick",alias:"fast",status:"defined-only",usedBy:"— (future: hover feedback — hardcoded today)"},{name:"base",alias:"base",status:"defined-only",usedBy:"— (future: default interactions — hardcoded today)"},{name:"expressive",alias:"slow",status:"defined-only",usedBy:"— (future: dialog / drawer — enter uses --st-duration-slow today)"}],j=({status:o})=>o==="applied"?e.jsx("span",{className:"rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success",children:"applied"}):e.jsx("span",{className:"rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning",children:"defined only"}),v=()=>{const[o,l]=m.useState(!1),[r,x]=m.useState(!1);return m.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)");x(t.matches);const p=g=>x(g.matches);return t.addEventListener("change",p),()=>t.removeEventListener("change",p)},[]),e.jsxs("div",{className:"rounded-xl border border-border p-6",children:[e.jsx("button",{type:"button",onClick:()=>l(t=>!t),className:"rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",children:o?"Reset knobs":"Run transition"}),r&&e.jsxs(s,{children:[e.jsx("code",{children:"prefers-reduced-motion: reduce"})," is active — the demo runs without a transition, so motion is never forced on you."]}),e.jsx("div",{className:"mt-5 flex flex-col gap-4",children:f.map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"w-40 shrink-0 text-xs font-mono text-foreground",children:["--st-duration-",t.token]}),e.jsx("div",{className:"relative h-8 flex-1 overflow-hidden rounded-lg border border-border bg-surface",children:e.jsx("div",{"aria-hidden":"true",className:"absolute top-1 h-6 w-6 rounded bg-theme-500",style:{left:o?"calc(100% - 1.75rem)":"0.25rem",transition:r?"none":`left var(--st-duration-${t.token}) ease`}})}),e.jsx("span",{className:"w-16 shrink-0 text-right text-xs font-mono text-foreground-muted tabular-nums",children:t.value})]},t.token))})]})},a={name:"Duration Scale",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(u,{children:"Motion"}),e.jsxs(h,{children:["Schatten centralizes enter/exit timing in a three-step duration scale, defined in"," ",e.jsx("code",{children:"src/core/tokens/animation.css"})," and registered as part of the public token surface via the ",e.jsx("code",{children:"@theme"})," block in ",e.jsx("code",{children:"base.css"}),". Components reference the scale — or its semantic ",e.jsx("code",{children:"--motion-*"})," aliases (see"," ",e.jsx("strong",{children:"Semantic Tokens"}),") — never a hardcoded millisecond value."]}),e.jsx(n,{children:"Duration scale"}),e.jsxs(s,{children:["The raw ",e.jsx("code",{children:"--st-duration-*"})," steps. ",e.jsx("code",{children:"fast"})," / ",e.jsx("code",{children:"base"})," /"," ",e.jsx("code",{children:"slow"})," are perceptually distinct; reach for a semantic ",e.jsx("code",{children:"--motion-*"})," ","alias in usage. Press ",e.jsx("strong",{children:"Run transition"})," to feel the difference — the faster knob settles before the slower one."]}),e.jsx(v,{}),e.jsx("div",{className:"mt-6 border border-border rounded-xl px-5",children:f.map(o=>e.jsxs("div",{className:"flex items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsxs("p",{className:"w-44 shrink-0 text-sm font-medium text-foreground font-mono",children:["--st-duration-",o.token]}),e.jsx("code",{className:"w-16 shrink-0 text-xs text-foreground-muted tabular-nums",children:o.value}),e.jsxs("code",{className:"w-32 shrink-0 text-xs text-foreground-muted",children:["→ --motion-",o.motion]}),e.jsx("p",{className:"flex-1 text-sm text-foreground-muted",children:o.use})]},o.token))})]})},i={name:"Semantic Tokens",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(u,{children:"Semantic tokens"}),e.jsxs(h,{children:["Components reference these intent-named tokens, not the raw scale. Each is a value-preserving alias over a ",e.jsx("code",{children:"--st-duration-*"})," step — the table reads as"," ",e.jsx("strong",{children:"purpose → which duration step → which component uses it"}),". All three are"," ",e.jsx("em",{children:"defined only"})," today: nothing references ",e.jsx("code",{children:"--motion-*"})," yet."]}),e.jsx("div",{className:"border border-border rounded-xl px-5",children:b.map(o=>e.jsxs("div",{className:"flex items-center gap-4 py-4 border-b border-border last:border-b-0",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-sm font-medium text-foreground font-mono",children:["--motion-",o.name]}),e.jsxs("p",{className:"text-xs text-foreground-muted font-mono",children:["= --st-duration-",o.alias]}),e.jsx("p",{className:"text-xs text-foreground-muted mt-1",children:o.usedBy})]}),e.jsx("div",{className:"w-28 shrink-0",children:e.jsx(j,{status:o.status})})]},o.name))}),e.jsx(n,{children:"Define-only is intentional"}),e.jsxs(s,{children:["The ",e.jsx("code",{children:"--motion-*"})," aliases are ",e.jsx("strong",{children:"defined but not yet applied"}),": component hover transitions are still hardcoded, and unifying them onto the motion scale is a separate spike. The tokens wait for that consumer rather than being wired in piecemeal. This mirrors ",e.jsx("code",{children:"--radius-control"})," in ",e.jsx("strong",{children:"Tokens/Radius"})," and"," ",e.jsx("code",{children:"--shadow-card"})," in ",e.jsx("strong",{children:"Tokens/Elevation"})," — a single-value semantic token may sit define-only until its natural consumer lands (see css-api.md)."]})]})},d=({surface:o,token:l,note:r})=>e.jsxs("div",{className:"flex items-start gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsx("p",{className:"w-28 shrink-0 text-sm font-medium text-foreground",children:o}),e.jsx("code",{className:"w-44 shrink-0 text-xs text-foreground-muted",children:l}),e.jsx("p",{className:"flex-1 text-sm text-foreground-muted",children:r})]}),c={name:"Usage Guide",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(u,{children:"Usage guide"}),e.jsxs(h,{children:["Pick a duration by what the motion is ",e.jsx("em",{children:"for"}),", not by an absolute millisecond count. The named step already encodes the right pace."]}),e.jsx(n,{children:"By intent"}),e.jsxs("div",{className:"border border-border rounded-xl px-5 mb-8",children:[e.jsx(d,{surface:"Hover / exit",token:"--motion-quick",note:"Lightweight feedback that should feel near-instant. (Alias of --st-duration-fast.)"}),e.jsx(d,{surface:"Default / enter",token:"--motion-base",note:"The default for most enter transitions and focus rings. (Alias of --st-duration-base.)"}),e.jsx(d,{surface:"Dialog / drawer",token:"--motion-expressive",note:"Larger surfaces sliding in; slightly slower reads as deliberate. (Alias of --st-duration-slow.)"}),e.jsx(d,{surface:"Looping",token:"--st-spinner-*",note:"Continuous loops (spinner ripple) use component-scoped timing, distinct from the enter/exit scale."})]}),e.jsx(n,{children:"Design principles"}),e.jsxs(s,{children:[e.jsx("strong",{children:"Respect prefers-reduced-motion."})," Every animated component disables motion under ",e.jsx("code",{children:"@media (prefers-reduced-motion: reduce)"})," — see ",e.jsx("code",{children:"Toast.css"}),","," ",e.jsx("code",{children:"Dialog.css"}),", ",e.jsx("code",{children:"Tooltip.css"}),". New motion must do the same; the demo on the ",e.jsx("strong",{children:"Duration Scale"})," page does it too."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Loop animations live in component CSS."})," Continuous loops (spinner) are authored as ",e.jsx("code",{children:"@keyframes"})," in the component's own ",e.jsx("code",{children:".css"}),", not as a transition token — see component-architecture §7."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Interactive feedback uses transition; enter/exit uses the scale."})," Reach for a ",e.jsx("code",{children:"transition"})," on hover/focus state; reach for ",e.jsx("code",{children:"--st-duration-*"})," on the mount/unmount keyframes."]}),e.jsxs(s,{children:[e.jsx("strong",{children:"Don't animate without a reason."})," Motion should communicate a state change. If a transition doesn't help the user understand what changed, leave it out."]}),e.jsx(n,{children:"Not yet tokenized"}),e.jsxs(s,{children:["Component ",e.jsx("em",{children:"hover"})," transitions are still ",e.jsx("strong",{children:"hardcoded"})," today (e.g. Badge at 150ms, others at 200ms) and do not yet reference ",e.jsx("code",{children:"--motion-*"}),". Folding them onto the motion scale is a separate spike. ",e.jsx("em",{children:"Enter/exit"})," animations (Tooltip / Dialog / Toast) already consume ",e.jsx("code",{children:"--st-duration-*"}),"."]}),e.jsx(n,{children:"Removed: --transition-*"}),e.jsxs(s,{children:["The older ",e.jsx("code",{children:"--transition-fast"})," / ",e.jsx("code",{children:"-normal"})," / ",e.jsx("code",{children:"-slow"})," and"," ",e.jsx("code",{children:"tokens.transition.*"})," / ",e.jsx("code",{children:"TransitionToken"})," were deprecated in v0.10.0 and ",e.jsx("strong",{children:"removed"})," in v0.11.0. Use ",e.jsx("code",{children:"--motion-*"})," (or"," ",e.jsx("code",{children:"tokens.motion.*"}),") instead. Note the old values bundled an easing (e.g."," ",e.jsx("code",{children:"150ms ease"}),") while the motion tokens are duration-only — specify your own easing: ",e.jsx("code",{children:"fast"})," → ",e.jsx("code",{children:"--motion-base"}),", ",e.jsx("code",{children:"normal"})," →"," ",e.jsx("code",{children:"--motion-expressive"}),", ",e.jsx("code",{children:"slow"})," (300ms) has no direct step."]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Duration Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Motion</PageTitle>
      <Lead>
        Schatten centralizes enter/exit timing in a three-step duration scale, defined in{' '}
        <code>src/core/tokens/animation.css</code> and registered as part of the public token
        surface via the <code>@theme</code> block in <code>base.css</code>. Components reference the
        scale — or its semantic <code>--motion-*</code> aliases (see{' '}
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const T=["DurationScale","SemanticTokens","UsageGuide"];export{a as DurationScale,i as SemanticTokens,c as UsageGuide,T as __namedExportsOrder,N as default};
