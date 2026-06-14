import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-Dc0mLLnz.js";import{n,t as r}from"./Button-BGdGuDrw.js";import{n as i,t as a}from"./Input-QjhTX4Ha.js";import{n as o,t as s}from"./Field-C627VQCD.js";import{a as c,c as l,i as u,o as d,r as f,s as p}from"./docs-ui-Da22FkRD.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),o(),i(),l(),m=t(),h={title:`Tokens/Spacing`,parameters:{layout:`fullscreen`}},g=[{token:`px`,utility:`px`,value:`1px`,px:`1px`,tier:`curated`},{token:`0`,utility:`0`,value:`0`,px:`0px`,tier:`curated`},{token:`0-5`,utility:`0.5`,value:`0.125rem`,px:`2px`,tier:`raw`},{token:`1`,utility:`1`,value:`0.25rem`,px:`4px`,tier:`curated`},{token:`1-5`,utility:`1.5`,value:`0.375rem`,px:`6px`,tier:`raw`},{token:`2`,utility:`2`,value:`0.5rem`,px:`8px`,tier:`curated`},{token:`2-5`,utility:`2.5`,value:`0.625rem`,px:`10px`,tier:`raw`},{token:`3`,utility:`3`,value:`0.75rem`,px:`12px`,tier:`curated`},{token:`3-5`,utility:`3.5`,value:`0.875rem`,px:`14px`,tier:`raw`},{token:`4`,utility:`4`,value:`1rem`,px:`16px`,tier:`curated`},{token:`5`,utility:`5`,value:`1.25rem`,px:`20px`,tier:`curated`},{token:`6`,utility:`6`,value:`1.5rem`,px:`24px`,tier:`curated`},{token:`7`,utility:`7`,value:`1.75rem`,px:`28px`,tier:`raw`},{token:`8`,utility:`8`,value:`2rem`,px:`32px`,tier:`curated`},{token:`9`,utility:`9`,value:`2.25rem`,px:`36px`,tier:`raw`},{token:`10`,utility:`10`,value:`2.5rem`,px:`40px`,tier:`curated`},{token:`12`,utility:`12`,value:`3rem`,px:`48px`,tier:`curated`},{token:`14`,utility:`14`,value:`3.5rem`,px:`56px`,tier:`raw`},{token:`16`,utility:`16`,value:`4rem`,px:`64px`,tier:`curated`},{token:`20`,utility:`20`,value:`5rem`,px:`80px`,tier:`curated`},{token:`24`,utility:`24`,value:`6rem`,px:`96px`,tier:`curated`}],_=({tier:e})=>e===`curated`?(0,m.jsx)(`span`,{className:`rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success`,children:`curated`}):(0,m.jsx)(`span`,{className:`rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning`,children:`raw only`}),v=({token:e,utility:t,value:n,px:r,tier:i})=>(0,m.jsxs)(`div`,{className:`flex items-center gap-4 py-3 border-b border-border last:border-b-0`,children:[(0,m.jsxs)(`div`,{className:`w-32 shrink-0`,children:[(0,m.jsxs)(`p`,{className:`text-sm font-medium text-foreground font-mono`,children:[`--spacing-`,e]}),(0,m.jsxs)(`p`,{className:`text-xs text-foreground-muted font-mono`,children:[`p-`,t,` · gap-`,t]})]}),(0,m.jsxs)(`div`,{className:`w-24 shrink-0 text-xs text-foreground-muted font-mono`,children:[r,` `,(0,m.jsxs)(`span`,{className:`opacity-60`,children:[`/ `,n]})]}),(0,m.jsx)(`div`,{className:`w-20 shrink-0`,children:(0,m.jsx)(_,{tier:i})}),(0,m.jsx)(`div`,{className:`flex-1`,children:(0,m.jsx)(`div`,{className:`h-4 bg-theme-500`,style:{width:r}})})]}),y={name:`Spacing Scale`,render:()=>(0,m.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,m.jsx)(c,{children:`Spacing`}),(0,m.jsxs)(f,{children:[`Schatten's spacing scale is built on a 4px base. The full token set lives in`,` `,(0,m.jsx)(`code`,{children:`src/core/tokens/spacing.css`}),`; the recommended subset is the one registered as Tailwind utilities via the `,(0,m.jsx)(`code`,{children:`@theme`}),` block in `,(0,m.jsx)(`code`,{children:`base.css`}),`. Use the scale instead of arbitrary pixel values so every layout lands on the same rhythm.`]}),(0,m.jsx)(d,{children:`Full scale`}),(0,m.jsxs)(u,{children:[`Every `,(0,m.jsx)(`code`,{children:`--spacing-*`}),` token, with its px / rem value and the Tailwind utility it maps to. `,(0,m.jsx)(`strong`,{children:`curated`}),` tokens are registered in `,(0,m.jsx)(`code`,{children:`@theme`}),` and are the recommended values; `,(0,m.jsx)(`strong`,{children:`raw only`}),` tokens (half steps and odd intermediates) exist as CSS variables for internal CVA use. An arbitrary utility such as `,(0,m.jsx)(`code`,{children:`p-7`}),` `,`still renders via Tailwind's dynamic `,(0,m.jsx)(`code`,{children:`--spacing`}),` multiplier — "raw only" means "outside the recommended set", not "broken".`]}),(0,m.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:g.map(e=>(0,m.jsx)(v,{...e},e.token))})]})},b=({heading:e,note:t,values:n})=>(0,m.jsxs)(`div`,{className:`mb-6`,children:[(0,m.jsx)(p,{children:e}),(0,m.jsx)(u,{children:t}),(0,m.jsx)(`div`,{className:`flex flex-wrap items-end gap-4`,children:n.map(e=>(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,m.jsx)(`div`,{className:`h-6 bg-theme-500`,style:{width:e.px}}),(0,m.jsx)(`span`,{className:`text-xs font-mono text-foreground`,children:e.utility}),(0,m.jsx)(`span`,{className:`text-[10px] font-mono text-foreground-muted`,children:e.px})]},e.utility))})]}),x={name:`Recommended Scale`,render:()=>(0,m.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,m.jsx)(c,{children:`Recommended scale`}),(0,m.jsxs)(f,{children:[`Reach for these curated values first. Inner spacing (`,(0,m.jsx)(`code`,{children:`gap`}),`, `,(0,m.jsx)(`code`,{children:`p-*`}),`) and outer spacing (`,(0,m.jsx)(`code`,{children:`m-*`}),`, section gaps) use overlapping but distinct subsets. Sticking to the curated set keeps spacing consistent across the whole app.`]}),(0,m.jsx)(b,{heading:`Inner spacing — gap, padding`,note:`Spacing between elements inside a component or a tight group.`,values:[{utility:`1 (4px)`,px:`4px`},{utility:`2 (8px)`,px:`8px`},{utility:`3 (12px)`,px:`12px`},{utility:`4 (16px)`,px:`16px`},{utility:`6 (24px)`,px:`24px`},{utility:`8 (32px)`,px:`32px`}]}),(0,m.jsx)(b,{heading:`Outer spacing — margin, section gaps`,note:`Spacing between components and between page sections.`,values:[{utility:`4 (16px)`,px:`16px`},{utility:`6 (24px)`,px:`24px`},{utility:`8 (32px)`,px:`32px`},{utility:`12 (48px)`,px:`48px`},{utility:`16 (64px)`,px:`64px`}]}),(0,m.jsx)(p,{children:`Avoid — off-scale`}),(0,m.jsxs)(u,{children:[(0,m.jsx)(`code`,{children:`gap-7`}),` / `,(0,m.jsx)(`code`,{children:`gap-9`}),` / `,(0,m.jsx)(`code`,{children:`gap-11`}),` / `,(0,m.jsx)(`code`,{children:`gap-13`}),` render fine (Tailwind generates them via the dynamic multiplier) but sit outside the curated set. Prefer the nearest curated value so spacing stays uniform.`]}),(0,m.jsx)(d,{children:`Live example`}),(0,m.jsx)(u,{children:`The same Button row at three curated inner-spacing values.`}),(0,m.jsx)(`div`,{className:`flex flex-col gap-6`,children:[`gap-2`,`gap-4`,`gap-6`].map(e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-xs font-mono text-foreground-muted mb-2`,children:e}),(0,m.jsxs)(`div`,{className:`flex ${e}`,children:[(0,m.jsx)(r,{children:`Save`}),(0,m.jsx)(r,{variant:`secondary`,children:`Cancel`}),(0,m.jsx)(r,{variant:`tertiary`,children:`Reset`})]})]},e))})]})},S={name:`Examples`,render:()=>(0,m.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,m.jsx)(c,{children:`Do & Don't`}),(0,m.jsx)(f,{children:`Both rows render — the difference is consistency. The left column uses curated values; the right column uses off-scale values that drift off the shared rhythm.`}),(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-6`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(p,{children:`✅ Curated`}),(0,m.jsx)(u,{children:(0,m.jsx)(`code`,{children:`gap-2 p-4`})}),(0,m.jsxs)(`div`,{className:`flex gap-2 p-4 rounded-lg border border-success bg-success-subtle`,children:[(0,m.jsx)(r,{children:`OK`}),(0,m.jsx)(r,{variant:`secondary`,children:`Cancel`})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(p,{children:`❌ Off-scale`}),(0,m.jsx)(u,{children:(0,m.jsx)(`code`,{children:`gap-7 p-9`})}),(0,m.jsxs)(`div`,{className:`flex gap-7 p-9 rounded-lg border border-warning bg-warning-subtle`,children:[(0,m.jsx)(r,{children:`OK`}),(0,m.jsx)(r,{variant:`secondary`,children:`Cancel`})]})]})]}),(0,m.jsx)(d,{children:`Form layout`}),(0,m.jsxs)(u,{children:[`A field group laid out with curated `,(0,m.jsx)(`code`,{children:`gap-4`}),` between fields and `,(0,m.jsx)(`code`,{children:`gap-2`}),` `,`inside the action row.`]}),(0,m.jsxs)(`div`,{className:`flex flex-col gap-4 rounded-lg border border-border p-6`,children:[(0,m.jsx)(s,{label:`Email`,description:`We'll never share it.`,children:(0,m.jsx)(a,{type:`email`,placeholder:`you@example.com`})}),(0,m.jsx)(s,{label:`Password`,children:(0,m.jsx)(a,{type:`password`,placeholder:`••••••••`})}),(0,m.jsxs)(`div`,{className:`flex gap-2`,children:[(0,m.jsx)(r,{children:`Sign in`}),(0,m.jsx)(r,{variant:`tertiary`,children:`Cancel`})]})]})]})},C={name:`Why No Layout Primitives`,render:()=>(0,m.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,m.jsx)(c,{children:`Why no layout primitives`}),(0,m.jsxs)(f,{children:[`Schatten deliberately does `,(0,m.jsx)(`strong`,{children:`not`}),` ship `,(0,m.jsx)(`code`,{children:`Stack`}),` /`,` `,(0,m.jsx)(`code`,{children:`HStack`}),` / `,(0,m.jsx)(`code`,{children:`VStack`}),` layout components. Spacing is composed with Tailwind utilities directly. This page is the canonical reference for that decision (issue #102 closed the proposal to add a `,(0,m.jsx)(`code`,{children:`spacing-conventions.md`}),` rule as wontfix — this doc stands in for it).`]}),(0,m.jsx)(d,{children:`AI affinity`}),(0,m.jsxs)(u,{children:[(0,m.jsx)(`code`,{children:`<div className="flex gap-4">`}),` is overwhelmingly represented in training data, so AI assistants emit correct layout without learning a bespoke component API. A custom `,(0,m.jsxs)(`code`,{children:[`<Stack gap=`,4,`>`]}),` would be a vocabulary every tool has to relearn.`]}),(0,m.jsx)(d,{children:`Developer experience`}),(0,m.jsx)(u,{children:`There is one fewer component to import and remember. Layout reads inline at the call site rather than hiding behind a prop API.`}),(0,m.jsx)(d,{children:`The discipline this depends on`}),(0,m.jsxs)(u,{children:[`The trade-off is that nothing structurally stops a developer from writing off-scale values (`,(0,m.jsx)(`code`,{children:`gap-7`}),`, `,(0,m.jsx)(`code`,{children:`gap-9`}),`). The discipline is to stay within the curated scale shown in `,(0,m.jsx)(`em`,{children:`Recommended Scale`}),`, and `,(0,m.jsx)(`strong`,{children:`this doc is the source of truth`}),` `,`for that rule.`]}),(0,m.jsx)(d,{children:`Future revisit`}),(0,m.jsx)(u,{children:`Re-evaluated in Phase 5. If drift toward off-scale values is observed in real AI-generated code, layout primitives can be reconsidered then.`})]})},w=[{token:`0-5`,utility:`0.5`,value:`0.125rem`,px:`2px`},{token:`1-5`,utility:`1.5`,value:`0.375rem`,px:`6px`},{token:`2-5`,utility:`2.5`,value:`0.625rem`,px:`10px`},{token:`3-5`,utility:`3.5`,value:`0.875rem`,px:`14px`}],T={name:`Half Steps`,render:()=>(0,m.jsxs)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:[(0,m.jsx)(c,{children:`Half steps`}),(0,m.jsxs)(f,{children:[`The half-step tokens (`,(0,m.jsx)(`code`,{children:`--spacing-0-5`}),` through `,(0,m.jsx)(`code`,{children:`--spacing-3-5`}),`) are`,` `,(0,m.jsx)(`strong`,{children:`raw only`}),` — they are not registered in `,(0,m.jsx)(`code`,{children:`@theme`}),` and are intended for internal CVA use, where a component needs sub-4px optical adjustment (e.g. the gap between an icon and its label). Application code normally does not reach for them.`]}),(0,m.jsx)(`div`,{className:`border border-border rounded-xl px-5`,children:w.map(e=>(0,m.jsx)(v,{token:e.token,utility:e.utility,value:e.value,px:e.px,tier:`raw`},e.token))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Spacing</PageTitle>
      <Lead>
        Schatten's spacing scale is built on a 4px base. The full token set lives in{' '}
        <code>src/core/tokens/spacing.css</code>; the recommended subset is the one registered as
        Tailwind utilities via the <code>@theme</code> block in <code>base.css</code>. Use the scale
        instead of arbitrary pixel values so every layout lands on the same rhythm.
      </Lead>

      <SectionTitle>Full scale</SectionTitle>
      <Note>
        Every <code>--spacing-*</code> token, with its px / rem value and the Tailwind utility it
        maps to. <strong>curated</strong> tokens are registered in <code>@theme</code> and are the
        recommended values; <strong>raw only</strong> tokens (half steps and odd intermediates)
        exist as CSS variables for internal CVA use. An arbitrary utility such as <code>p-7</code>{' '}
        still renders via Tailwind's dynamic <code>--spacing</code> multiplier — "raw only" means
        "outside the recommended set", not "broken".
      </Note>
      <div className="border border-border rounded-xl px-5">
        {SPACING_TOKENS.map(t => <SpacingRow key={t.token} {...t} />)}
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Recommended Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Recommended scale</PageTitle>
      <Lead>
        Reach for these curated values first. Inner spacing (<code>gap</code>, <code>p-*</code>) and
        outer spacing (<code>m-*</code>, section gaps) use overlapping but distinct subsets.
        Sticking to the curated set keeps spacing consistent across the whole app.
      </Lead>

      <RecommendBlock heading="Inner spacing — gap, padding" note="Spacing between elements inside a component or a tight group." values={[{
      utility: '1 (4px)',
      px: '4px'
    }, {
      utility: '2 (8px)',
      px: '8px'
    }, {
      utility: '3 (12px)',
      px: '12px'
    }, {
      utility: '4 (16px)',
      px: '16px'
    }, {
      utility: '6 (24px)',
      px: '24px'
    }, {
      utility: '8 (32px)',
      px: '32px'
    }]} />

      <RecommendBlock heading="Outer spacing — margin, section gaps" note="Spacing between components and between page sections." values={[{
      utility: '4 (16px)',
      px: '16px'
    }, {
      utility: '6 (24px)',
      px: '24px'
    }, {
      utility: '8 (32px)',
      px: '32px'
    }, {
      utility: '12 (48px)',
      px: '48px'
    }, {
      utility: '16 (64px)',
      px: '64px'
    }]} />

      <SubsectionTitle>Avoid — off-scale</SubsectionTitle>
      <Note>
        <code>gap-7</code> / <code>gap-9</code> / <code>gap-11</code> / <code>gap-13</code> render
        fine (Tailwind generates them via the dynamic multiplier) but sit outside the curated set.
        Prefer the nearest curated value so spacing stays uniform.
      </Note>

      <SectionTitle>Live example</SectionTitle>
      <Note>The same Button row at three curated inner-spacing values.</Note>
      <div className="flex flex-col gap-6">
        {(['gap-2', 'gap-4', 'gap-6'] as const).map(g => <div key={g}>
            <p className="text-xs font-mono text-foreground-muted mb-2">{g}</p>
            <div className={\`flex \${g}\`}>
              <Button>Save</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="tertiary">Reset</Button>
            </div>
          </div>)}
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Examples',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Do &amp; Don't</PageTitle>
      <Lead>
        Both rows render — the difference is consistency. The left column uses curated values; the
        right column uses off-scale values that drift off the shared rhythm.
      </Lead>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Curated</SubsectionTitle>
          <Note>
            <code>gap-2 p-4</code>
          </Note>
          <div className="flex gap-2 p-4 rounded-lg border border-success bg-success-subtle">
            <Button>OK</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>

        <div>
          <SubsectionTitle>❌ Off-scale</SubsectionTitle>
          <Note>
            <code>gap-7 p-9</code>
          </Note>
          <div className="flex gap-7 p-9 rounded-lg border border-warning bg-warning-subtle">
            <Button>OK</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>
      </div>

      <SectionTitle>Form layout</SectionTitle>
      <Note>
        A field group laid out with curated <code>gap-4</code> between fields and <code>gap-2</code>{' '}
        inside the action row.
      </Note>
      <div className="flex flex-col gap-4 rounded-lg border border-border p-6">
        <Field label="Email" description="We'll never share it.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Password">
          <Input type="password" placeholder="••••••••" />
        </Field>
        <div className="flex gap-2">
          <Button>Sign in</Button>
          <Button variant="tertiary">Cancel</Button>
        </div>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Why No Layout Primitives',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Why no layout primitives</PageTitle>
      <Lead>
        Schatten deliberately does <strong>not</strong> ship <code>Stack</code> /{' '}
        <code>HStack</code> / <code>VStack</code> layout components. Spacing is composed with
        Tailwind utilities directly. This page is the canonical reference for that decision (issue
        #102 closed the proposal to add a <code>spacing-conventions.md</code> rule as wontfix — this
        doc stands in for it).
      </Lead>

      <SectionTitle>AI affinity</SectionTitle>
      <Note>
        <code>&lt;div className="flex gap-4"&gt;</code> is overwhelmingly represented in training
        data, so AI assistants emit correct layout without learning a bespoke component API. A
        custom <code>&lt;Stack gap={4}&gt;</code> would be a vocabulary every tool has to relearn.
      </Note>

      <SectionTitle>Developer experience</SectionTitle>
      <Note>
        There is one fewer component to import and remember. Layout reads inline at the call site
        rather than hiding behind a prop API.
      </Note>

      <SectionTitle>The discipline this depends on</SectionTitle>
      <Note>
        The trade-off is that nothing structurally stops a developer from writing off-scale values (
        <code>gap-7</code>, <code>gap-9</code>). The discipline is to stay within the curated scale
        shown in <em>Recommended Scale</em>, and <strong>this doc is the source of truth</strong>{' '}
        for that rule.
      </Note>

      <SectionTitle>Future revisit</SectionTitle>
      <Note>
        Re-evaluated in Phase 5. If drift toward off-scale values is observed in real AI-generated
        code, layout primitives can be reconsidered then.
      </Note>
    </div>
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Half Steps',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Half steps</PageTitle>
      <Lead>
        The half-step tokens (<code>--spacing-0-5</code> through <code>--spacing-3-5</code>) are{' '}
        <strong>raw only</strong> — they are not registered in <code>@theme</code> and are intended
        for internal CVA use, where a component needs sub-4px optical adjustment (e.g. the gap
        between an icon and its label). Application code normally does not reach for them.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {HALF_STEPS.map(h => <SpacingRow key={h.token} token={h.token} utility={h.utility} value={h.value} px={h.px} tier="raw" />)}
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E=[`SpacingScale`,`RecommendedScale`,`Examples`,`WhyNoLayoutPrimitives`,`HalfSteps`]}))();export{S as Examples,T as HalfSteps,x as RecommendedScale,y as SpacingScale,C as WhyNoLayoutPrimitives,E as __namedExportsOrder,h as default};