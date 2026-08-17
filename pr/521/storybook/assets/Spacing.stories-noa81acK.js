import{j as e}from"./iframe-C8x-F0C4.js";import{B as a}from"./Button-CtRZO_g-.js";import{F as g}from"./Field-pwcHuhjl.js";import{I as v}from"./Input-DranJoZa.js";import{P as n,L as o,a as m,N as i,S as r}from"./docs-ui-sEUvDtvh.js";import"./preload-helper-BgQDgXUo.js";import"./index-CfBFZPLH.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */import"./Spinner-dkndls58.js";/* empty css                */import"./field-CGjteitd.js";import"./Tooltip-DaJPD5UE.js";import"./index-C6sK3QUF.js";import"./index-ClYBnGfX.js";import"./index-BDf17LsY.js";import"./index-B5zf04Y5.js";import"./index-CFyxQfBb.js";import"./index-D21YP6WW.js";import"./index-CqZrKkHT.js";import"./index-CzvnhGig.js";import"./index-sT7dNzrd.js";import"./index-v02KEDWY.js";import"./index-CqBy5jEd.js";/* empty css                *//* empty css              */import"./info-C9CeAZjK.js";import"./createLucideIcon-D6Vw1y_D.js";/* empty css              */const ee={title:"Tokens/Spacing",parameters:{layout:"fullscreen"}},j=[{token:"px",utility:"px",value:"1px",px:"1px",tier:"curated"},{token:"0",utility:"0",value:"0",px:"0px",tier:"curated"},{token:"0-5",utility:"0.5",value:"0.125rem",px:"2px",tier:"raw"},{token:"1",utility:"1",value:"0.25rem",px:"4px",tier:"curated"},{token:"1-5",utility:"1.5",value:"0.375rem",px:"6px",tier:"raw"},{token:"2",utility:"2",value:"0.5rem",px:"8px",tier:"curated"},{token:"2-5",utility:"2.5",value:"0.625rem",px:"10px",tier:"raw"},{token:"3",utility:"3",value:"0.75rem",px:"12px",tier:"curated"},{token:"3-5",utility:"3.5",value:"0.875rem",px:"14px",tier:"raw"},{token:"4",utility:"4",value:"1rem",px:"16px",tier:"curated"},{token:"5",utility:"5",value:"1.25rem",px:"20px",tier:"curated"},{token:"6",utility:"6",value:"1.5rem",px:"24px",tier:"curated"},{token:"7",utility:"7",value:"1.75rem",px:"28px",tier:"raw"},{token:"8",utility:"8",value:"2rem",px:"32px",tier:"curated"},{token:"9",utility:"9",value:"2.25rem",px:"36px",tier:"raw"},{token:"10",utility:"10",value:"2.5rem",px:"40px",tier:"curated"},{token:"12",utility:"12",value:"3rem",px:"48px",tier:"curated"},{token:"14",utility:"14",value:"3.5rem",px:"56px",tier:"raw"},{token:"16",utility:"16",value:"4rem",px:"64px",tier:"curated"},{token:"20",utility:"20",value:"5rem",px:"80px",tier:"curated"},{token:"24",utility:"24",value:"6rem",px:"96px",tier:"curated"}],w=({tier:t})=>t==="curated"?e.jsx("span",{className:"rounded-full bg-success-subtle px-2 py-0.5 text-xs font-medium text-success-emphasis",children:"curated"}):e.jsx("span",{className:"rounded-full bg-warning-subtle px-2 py-0.5 text-xs font-medium text-warning-emphasis",children:"raw only"}),f=({token:t,utility:d,value:h,px:s,tier:b})=>e.jsxs("div",{className:"flex items-center gap-4 py-3 border-b border-border last:border-b-0",children:[e.jsxs("div",{className:"w-32 shrink-0",children:[e.jsxs("p",{className:"text-sm font-medium text-foreground font-mono",children:["--spacing-",t]}),e.jsxs("p",{className:"text-xs text-foreground-muted font-mono",children:["p-",d," · gap-",d]})]}),e.jsxs("div",{className:"w-24 shrink-0 text-xs text-foreground-muted font-mono",children:[s," / ",h]}),e.jsx("div",{className:"w-20 shrink-0",children:e.jsx(w,{tier:b})}),e.jsx("div",{className:"flex-1",children:e.jsx("div",{className:"h-4 bg-theme-500",style:{width:s}})})]}),l={name:"Spacing Scale",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Spacing"}),e.jsxs(o,{children:["Schatten's spacing scale is built on a 4px base. The full token set lives in"," ",e.jsx("code",{children:"src/core/tokens/spacing.css"}),"; the recommended subset is the one registered in the public-token registrar (",e.jsx("code",{children:"src/styles/public-tokens.css"}),") and listed in the published manifest. Use the scale instead of arbitrary pixel values so every layout lands on the same rhythm."]}),e.jsx(r,{children:"Full scale"}),e.jsxs(i,{children:["Every ",e.jsx("code",{children:"--spacing-*"})," token, with its px / rem value and the Tailwind utility it maps to. ",e.jsx("strong",{children:"curated"})," tokens are registered in the public-token registrar and are the recommended values; ",e.jsx("strong",{children:"raw only"})," tokens (half steps and odd intermediates) exist as CSS variables for internal CVA use. For Tailwind-using consumers, an arbitrary utility such as ",e.jsx("code",{children:"p-7"})," still renders via Tailwind's dynamic"," ",e.jsx("code",{children:"--spacing"}),' multiplier — "raw only" means "outside the recommended set", not "broken".']}),e.jsx("div",{className:"border border-border rounded-xl px-5",children:j.map(t=>e.jsx(f,{...t},t.token))})]})},y=({heading:t,note:d,values:h})=>e.jsxs("div",{className:"mb-6",children:[e.jsx(m,{children:t}),e.jsx(i,{children:d}),e.jsx("div",{className:"flex flex-wrap items-end gap-4",children:h.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:"h-6 bg-theme-500",style:{width:s.px}}),e.jsx("span",{className:"text-xs font-mono text-foreground",children:s.utility}),e.jsx("span",{className:"text-[10px] font-mono text-foreground-muted",children:s.px})]},s.utility))})]}),c={name:"Recommended Scale",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Recommended scale"}),e.jsxs(o,{children:["Reach for these curated values first. Inner spacing (",e.jsx("code",{children:"gap"}),", ",e.jsx("code",{children:"p-*"}),") and outer spacing (",e.jsx("code",{children:"m-*"}),", section gaps) use overlapping but distinct subsets. Sticking to the curated set keeps spacing consistent across the whole app."]}),e.jsx(y,{heading:"Inner spacing — gap, padding",note:"Spacing between elements inside a component or a tight group.",values:[{utility:"1 (4px)",px:"4px"},{utility:"2 (8px)",px:"8px"},{utility:"3 (12px)",px:"12px"},{utility:"4 (16px)",px:"16px"},{utility:"6 (24px)",px:"24px"},{utility:"8 (32px)",px:"32px"}]}),e.jsx(y,{heading:"Outer spacing — margin, section gaps",note:"Spacing between components and between page sections.",values:[{utility:"4 (16px)",px:"16px"},{utility:"6 (24px)",px:"24px"},{utility:"8 (32px)",px:"32px"},{utility:"12 (48px)",px:"48px"},{utility:"16 (64px)",px:"64px"}]}),e.jsx(m,{children:"Avoid — off-scale"}),e.jsxs(i,{children:[e.jsx("code",{children:"gap-7"})," / ",e.jsx("code",{children:"gap-9"})," / ",e.jsx("code",{children:"gap-11"})," / ",e.jsx("code",{children:"gap-13"})," render fine (Tailwind generates them via the dynamic multiplier) but sit outside the curated set. Prefer the nearest curated value so spacing stays uniform."]}),e.jsx(r,{children:"Live example"}),e.jsx(i,{children:"The same Button row at three curated inner-spacing values."}),e.jsx("div",{className:"flex flex-col gap-6",children:["gap-2","gap-4","gap-6"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-mono text-foreground-muted mb-2",children:t}),e.jsxs("div",{className:`flex ${t}`,children:[e.jsx(a,{children:"Save"}),e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{variant:"tertiary",children:"Reset"})]})]},t))})]})},p={name:"Examples",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Do & Don't"}),e.jsx(o,{children:"Both rows render — the difference is consistency. The left column uses curated values; the right column uses off-scale values that drift off the shared rhythm."}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(m,{children:"✅ Curated"}),e.jsx(i,{children:e.jsx("code",{children:"gap-2 p-4"})}),e.jsxs("div",{className:"flex gap-2 p-4 rounded-lg border border-success bg-success-subtle",children:[e.jsx(a,{children:"OK"}),e.jsx(a,{variant:"secondary",children:"Cancel"})]})]}),e.jsxs("div",{children:[e.jsx(m,{children:"❌ Off-scale"}),e.jsx(i,{children:e.jsx("code",{children:"gap-7 p-9"})}),e.jsxs("div",{className:"flex gap-7 p-9 rounded-lg border border-warning bg-warning-subtle",children:[e.jsx(a,{children:"OK"}),e.jsx(a,{variant:"secondary",children:"Cancel"})]})]})]}),e.jsx(r,{children:"Form layout"}),e.jsxs(i,{children:["A field group laid out with curated ",e.jsx("code",{children:"gap-4"})," between fields and ",e.jsx("code",{children:"gap-2"})," ","inside the action row."]}),e.jsxs("div",{className:"flex flex-col gap-4 rounded-lg border border-border p-6",children:[e.jsx(g,{label:"Email",description:"We'll never share it.",children:e.jsx(v,{type:"email",placeholder:"you@example.com"})}),e.jsx(g,{label:"Password",children:e.jsx(v,{type:"password",placeholder:"••••••••"})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{children:"Sign in"}),e.jsx(a,{variant:"tertiary",children:"Cancel"})]})]})]})},u={name:"Why No Layout Primitives",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Why no layout primitives"}),e.jsxs(o,{children:["Schatten deliberately does ",e.jsx("strong",{children:"not"})," ship ",e.jsx("code",{children:"Stack"})," /"," ",e.jsx("code",{children:"HStack"})," / ",e.jsx("code",{children:"VStack"})," layout components. Spacing is composed with Tailwind utilities directly. This page is the canonical reference for that decision (issue #102 closed the proposal to add a ",e.jsx("code",{children:"spacing-conventions.md"})," rule as wontfix — this doc stands in for it)."]}),e.jsx(r,{children:"AI affinity"}),e.jsxs(i,{children:[e.jsx("code",{children:'<div className="flex gap-4">'})," is overwhelmingly represented in training data, so AI assistants emit correct layout without learning a bespoke component API. A custom ",e.jsxs("code",{children:["<Stack gap=",4,">"]})," would be a vocabulary every tool has to relearn."]}),e.jsx(r,{children:"Developer experience"}),e.jsx(i,{children:"There is one fewer component to import and remember. Layout reads inline at the call site rather than hiding behind a prop API."}),e.jsx(r,{children:"The discipline this depends on"}),e.jsxs(i,{children:["The trade-off is that nothing structurally stops a developer from writing off-scale values (",e.jsx("code",{children:"gap-7"}),", ",e.jsx("code",{children:"gap-9"}),"). The discipline is to stay within the curated scale shown in ",e.jsx("em",{children:"Recommended Scale"}),", and ",e.jsx("strong",{children:"this doc is the source of truth"})," ","for that rule."]}),e.jsx(r,{children:"Future revisit"}),e.jsx(i,{children:"Re-evaluated in Phase 5. If drift toward off-scale values is observed in real AI-generated code, layout primitives can be reconsidered then."})]})},S=[{token:"0-5",utility:"0.5",value:"0.125rem",px:"2px"},{token:"1-5",utility:"1.5",value:"0.375rem",px:"6px"},{token:"2-5",utility:"2.5",value:"0.625rem",px:"10px"},{token:"3-5",utility:"3.5",value:"0.875rem",px:"14px"}],x={name:"Half Steps",render:()=>e.jsxs("div",{className:"max-w-3xl mx-auto px-8 py-12",children:[e.jsx(n,{children:"Half steps"}),e.jsxs(o,{children:["The half-step tokens (",e.jsx("code",{children:"--spacing-0-5"})," through ",e.jsx("code",{children:"--spacing-3-5"}),") are"," ",e.jsx("strong",{children:"raw only"})," — they are not registered in the public-token registrar and are intended for internal CVA use, where a component needs sub-4px optical adjustment (e.g. the gap between an icon and its label). Application code normally does not reach for them."]}),e.jsx("div",{className:"border border-border rounded-xl px-5",children:S.map(t=>e.jsx(f,{token:t.token,utility:t.utility,value:t.value,px:t.px,tier:"raw"},t.token))})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Spacing Scale',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Spacing</PageTitle>
      <Lead>
        Schatten's spacing scale is built on a 4px base. The full token set lives in{' '}
        <code>src/core/tokens/spacing.css</code>; the recommended subset is the one registered in
        the public-token registrar (<code>src/styles/public-tokens.css</code>) and listed in the
        published manifest. Use the scale instead of arbitrary pixel values so every layout lands on
        the same rhythm.
      </Lead>

      <SectionTitle>Full scale</SectionTitle>
      <Note>
        Every <code>--spacing-*</code> token, with its px / rem value and the Tailwind utility it
        maps to. <strong>curated</strong> tokens are registered in the public-token registrar and
        are the recommended values; <strong>raw only</strong> tokens (half steps and odd
        intermediates) exist as CSS variables for internal CVA use. For Tailwind-using consumers, an
        arbitrary utility such as <code>p-7</code> still renders via Tailwind's dynamic{' '}
        <code>--spacing</code> multiplier — "raw only" means "outside the recommended set", not
        "broken".
      </Note>
      <div className="border border-border rounded-xl px-5">
        {SPACING_TOKENS.map(t => <SpacingRow key={t.token} {...t} />)}
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Half Steps',
  render: () => <div className="max-w-3xl mx-auto px-8 py-12">
      <PageTitle>Half steps</PageTitle>
      <Lead>
        The half-step tokens (<code>--spacing-0-5</code> through <code>--spacing-3-5</code>) are{' '}
        <strong>raw only</strong> — they are not registered in the public-token registrar and are
        intended for internal CVA use, where a component needs sub-4px optical adjustment (e.g. the
        gap between an icon and its label). Application code normally does not reach for them.
      </Lead>

      <div className="border border-border rounded-xl px-5">
        {HALF_STEPS.map(h => <SpacingRow key={h.token} token={h.token} utility={h.utility} value={h.value} px={h.px} tier="raw" />)}
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};const te=["SpacingScale","RecommendedScale","Examples","WhyNoLayoutPrimitives","HalfSteps"];export{p as Examples,x as HalfSteps,c as RecommendedScale,l as SpacingScale,u as WhyNoLayoutPrimitives,te as __namedExportsOrder,ee as default};
