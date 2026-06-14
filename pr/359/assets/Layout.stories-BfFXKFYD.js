import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{a as n,c as r,i,o as a,r as o,s,t as c}from"./docs-ui-5pNv9biD.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{r(),l=t(),u={title:`Patterns/Layout`,parameters:{layout:`fullscreen`}},d=({children:e})=>(0,l.jsx)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:e}),f=({children:e})=>(0,l.jsx)(`div`,{className:`flex h-12 min-w-12 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground-muted`,children:e}),p=({code:e,children:t})=>(0,l.jsxs)(`div`,{className:`mb-6`,children:[(0,l.jsx)(c,{children:e}),(0,l.jsx)(`div`,{className:`rounded-lg border border-dashed border-border p-4`,children:t})]}),m={name:`Flex (Row & Column)`,render:()=>(0,l.jsxs)(d,{children:[(0,l.jsx)(n,{children:`Layout`}),(0,l.jsxs)(o,{children:[`Schatten deliberately ships no `,(0,l.jsx)(`code`,{children:`Stack`}),` / `,(0,l.jsx)(`code`,{children:`HStack`}),` /`,` `,(0,l.jsx)(`code`,{children:`VStack`}),` components — layout is composed directly with Tailwind utilities. For the reasoning behind that decision, see`,` `,(0,l.jsx)(`code`,{children:`Tokens/Spacing › Why No Layout Primitives`}),`. This page is the recipe catalog for the patterns you reach for most.`]}),(0,l.jsx)(a,{children:`Horizontal — flex-row`}),(0,l.jsx)(s,{children:`Centered, with gap`}),(0,l.jsx)(p,{code:`<div className="flex items-center gap-2">…</div>`,children:(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(f,{children:`A`}),(0,l.jsx)(f,{children:`B`}),(0,l.jsx)(f,{children:`C`})]})}),(0,l.jsx)(s,{children:`Space between`}),(0,l.jsx)(p,{code:`<div className="flex items-center justify-between gap-2">…</div>`,children:(0,l.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,l.jsx)(f,{children:`Logo`}),(0,l.jsx)(f,{children:`Nav`}),(0,l.jsx)(f,{children:`Profile`})]})}),(0,l.jsx)(s,{children:`Wrap`}),(0,l.jsx)(p,{code:`<div className="flex flex-wrap gap-2">…</div>`,children:(0,l.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`].map(e=>(0,l.jsx)(f,{children:e},e))})}),(0,l.jsx)(a,{children:`Vertical — flex-col`}),(0,l.jsx)(s,{children:`Stacked, with gap`}),(0,l.jsx)(p,{code:`<div className="flex flex-col gap-4">…</div>`,children:(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(f,{children:`First`}),(0,l.jsx)(f,{children:`Second`}),(0,l.jsx)(f,{children:`Third`})]})}),(0,l.jsx)(s,{children:`Centered column`}),(0,l.jsx)(p,{code:`<div className="flex flex-col items-center gap-4">…</div>`,children:(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsx)(f,{children:`First`}),(0,l.jsx)(f,{children:`Second`})]})}),(0,l.jsxs)(i,{children:[`Keep `,(0,l.jsx)(`code`,{children:`gap`}),` on the curated scale (`,(0,l.jsx)(`code`,{children:`gap-2`}),` / `,(0,l.jsx)(`code`,{children:`gap-4`}),` /`,` `,(0,l.jsx)(`code`,{children:`gap-6`}),` / `,(0,l.jsx)(`code`,{children:`gap-8`}),`). The full scale and the off-scale values to avoid live in `,(0,l.jsx)(`code`,{children:`Tokens/Spacing`}),`.`]})]})},h={name:`Grid`,render:()=>(0,l.jsxs)(d,{children:[(0,l.jsx)(n,{children:`Grid`}),(0,l.jsxs)(o,{children:[`CSS grid via Tailwind utilities. Use the same curated `,(0,l.jsx)(`code`,{children:`gap`}),` scale as flex.`]}),(0,l.jsx)(s,{children:`Two columns`}),(0,l.jsx)(p,{code:`<div className="grid grid-cols-2 gap-4">…</div>`,children:(0,l.jsx)(`div`,{className:`grid grid-cols-2 gap-4`,children:[`1`,`2`,`3`,`4`].map(e=>(0,l.jsx)(f,{children:e},e))})}),(0,l.jsx)(s,{children:`Auto-fit — responsive without breakpoints`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`code`,{children:`auto-fit`}),` + `,(0,l.jsx)(`code`,{children:`minmax()`}),` fits as many columns as the width allows, then wraps — no breakpoint prefixes needed. Resize the preview to watch the column count change.`]}),(0,l.jsx)(p,{code:`<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">…</div>`,children:(0,l.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4`,children:[`A`,`B`,`C`,`D`,`E`].map(e=>(0,l.jsx)(f,{children:e},e))})})]})},g=({width:e,label:t})=>(0,l.jsx)(`div`,{className:`${e} mx-auto`,children:(0,l.jsx)(`div`,{className:`rounded-md border border-border bg-surface px-3 py-2 text-center text-xs font-mono text-foreground-muted`,children:t})}),_={name:`Container / max-width`,render:()=>(0,l.jsxs)(d,{children:[(0,l.jsx)(n,{children:`Container & max-width`}),(0,l.jsxs)(o,{children:[`Tailwind v4 removed the old `,(0,l.jsx)(`code`,{children:`max-w-screen-*`}),` utilities. There are two replacements, for two different intents.`]}),(0,l.jsx)(a,{children:`Content width — the common case`}),(0,l.jsxs)(i,{children:[`Fixed rem widths centered with `,(0,l.jsx)(`code`,{children:`mx-auto`}),`. This is what every docs page here uses (`,(0,l.jsx)(`code`,{children:`max-w-3xl mx-auto`}),`). The scale continues up to `,(0,l.jsx)(`code`,{children:`max-w-4xl`}),` /`,` `,(0,l.jsx)(`code`,{children:`max-w-6xl`}),` /`,(0,l.jsx)(`code`,{children:`max-w-7xl`}),` for wider layouts.`]}),(0,l.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,l.jsx)(g,{width:`max-w-sm`,label:`max-w-sm · 24rem`}),(0,l.jsx)(g,{width:`max-w-md`,label:`max-w-md · 28rem`}),(0,l.jsx)(g,{width:`max-w-lg`,label:`max-w-lg · 32rem`}),(0,l.jsx)(g,{width:`max-w-xl`,label:`max-w-xl · 36rem`}),(0,l.jsx)(g,{width:`max-w-2xl`,label:`max-w-2xl · 42rem`})]}),(0,l.jsx)(a,{children:`Breakpoint reference — the special case`}),(0,l.jsxs)(i,{children:[(0,l.jsx)(`code`,{children:`max-w-(--breakpoint-sm)`}),` resolves to the breakpoint value itself (a Tailwind v4 theme variable). Reach for this only when the container width must line up with a breakpoint; otherwise prefer the content-width scale above.`]}),(0,l.jsx)(p,{code:`<div className="max-w-(--breakpoint-sm) mx-auto">…</div>`,children:(0,l.jsx)(g,{width:`max-w-(--breakpoint-sm)`,label:`max-w-(--breakpoint-sm) · 40rem`})})]})},v={name:`Responsive`,render:()=>(0,l.jsxs)(d,{children:[(0,l.jsx)(n,{children:`Responsive`}),(0,l.jsxs)(o,{children:[`Tailwind's `,(0,l.jsx)(`code`,{children:`sm:`}),` / `,(0,l.jsx)(`code`,{children:`md:`}),` / `,(0,l.jsx)(`code`,{children:`lg:`}),` breakpoint prefixes switch layout by viewport. Breakpoints follow the Tailwind v4 defaults (`,(0,l.jsx)(`code`,{children:`sm`}),` 40rem,`,` `,(0,l.jsx)(`code`,{children:`md`}),` 48rem, `,(0,l.jsx)(`code`,{children:`lg`}),` 64rem). Resize the preview to see the switch.`]}),(0,l.jsx)(s,{children:`Stack on mobile, row on desktop`}),(0,l.jsx)(p,{code:`<div className="flex flex-col md:flex-row gap-4">…</div>`,children:(0,l.jsxs)(`div`,{className:`flex flex-col md:flex-row gap-4`,children:[(0,l.jsx)(f,{children:`Sidebar`}),(0,l.jsx)(f,{children:`Main`})]})}),(0,l.jsx)(s,{children:`Responsive grid columns`}),(0,l.jsx)(p,{code:`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">…</div>`,children:(0,l.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,children:[`1`,`2`,`3`,`4`,`5`,`6`].map(e=>(0,l.jsx)(f,{children:e},e))})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Flex (Row & Column)',
  render: () => <Page>
      <PageTitle>Layout</PageTitle>
      <Lead>
        Schatten deliberately ships no <code>Stack</code> / <code>HStack</code> /{' '}
        <code>VStack</code> components — layout is composed directly with Tailwind utilities. For
        the reasoning behind that decision, see{' '}
        <code>Tokens/Spacing › Why No Layout Primitives</code>. This page is the recipe catalog for
        the patterns you reach for most.
      </Lead>

      <SectionTitle>Horizontal — flex-row</SectionTitle>

      <SubsectionTitle>Centered, with gap</SubsectionTitle>
      <Recipe code={\`<div className="flex items-center gap-2">…</div>\`}>
        <div className="flex items-center gap-2">
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Space between</SubsectionTitle>
      <Recipe code={\`<div className="flex items-center justify-between gap-2">…</div>\`}>
        <div className="flex items-center justify-between gap-2">
          <Box>Logo</Box>
          <Box>Nav</Box>
          <Box>Profile</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Wrap</SubsectionTitle>
      <Recipe code={\`<div className="flex flex-wrap gap-2">…</div>\`}>
        <div className="flex flex-wrap gap-2">
          {['1', '2', '3', '4', '5', '6', '7', '8'].map(n => <Box key={n}>{n}</Box>)}
        </div>
      </Recipe>

      <SectionTitle>Vertical — flex-col</SectionTitle>

      <SubsectionTitle>Stacked, with gap</SubsectionTitle>
      <Recipe code={\`<div className="flex flex-col gap-4">…</div>\`}>
        <div className="flex flex-col gap-4">
          <Box>First</Box>
          <Box>Second</Box>
          <Box>Third</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Centered column</SubsectionTitle>
      <Recipe code={\`<div className="flex flex-col items-center gap-4">…</div>\`}>
        <div className="flex flex-col items-center gap-4">
          <Box>First</Box>
          <Box>Second</Box>
        </div>
      </Recipe>

      <Note>
        Keep <code>gap</code> on the curated scale (<code>gap-2</code> / <code>gap-4</code> /{' '}
        <code>gap-6</code> / <code>gap-8</code>). The full scale and the off-scale values to avoid
        live in <code>Tokens/Spacing</code>.
      </Note>
    </Page>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Grid',
  render: () => <Page>
      <PageTitle>Grid</PageTitle>
      <Lead>
        CSS grid via Tailwind utilities. Use the same curated <code>gap</code> scale as flex.
      </Lead>

      <SubsectionTitle>Two columns</SubsectionTitle>
      <Recipe code={\`<div className="grid grid-cols-2 gap-4">…</div>\`}>
        <div className="grid grid-cols-2 gap-4">
          {['1', '2', '3', '4'].map(n => <Box key={n}>{n}</Box>)}
        </div>
      </Recipe>

      <SubsectionTitle>Auto-fit — responsive without breakpoints</SubsectionTitle>
      <Note>
        <code>auto-fit</code> + <code>minmax()</code> fits as many columns as the width allows, then
        wraps — no breakpoint prefixes needed. Resize the preview to watch the column count change.
      </Note>
      <Recipe code={\`<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">…</div>\`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">
          {['A', 'B', 'C', 'D', 'E'].map(n => <Box key={n}>{n}</Box>)}
        </div>
      </Recipe>
    </Page>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Container / max-width',
  render: () => <Page>
      <PageTitle>Container &amp; max-width</PageTitle>
      <Lead>
        Tailwind v4 removed the old <code>max-w-screen-*</code> utilities. There are two
        replacements, for two different intents.
      </Lead>

      <SectionTitle>Content width — the common case</SectionTitle>
      <Note>
        Fixed rem widths centered with <code>mx-auto</code>. This is what every docs page here uses
        (<code>max-w-3xl mx-auto</code>). The scale continues up to <code>max-w-4xl</code> /{' '}
        <code>max-w-6xl</code> /<code>max-w-7xl</code> for wider layouts.
      </Note>
      <div className="flex flex-col gap-2">
        <WidthBar width="max-w-sm" label="max-w-sm · 24rem" />
        <WidthBar width="max-w-md" label="max-w-md · 28rem" />
        <WidthBar width="max-w-lg" label="max-w-lg · 32rem" />
        <WidthBar width="max-w-xl" label="max-w-xl · 36rem" />
        <WidthBar width="max-w-2xl" label="max-w-2xl · 42rem" />
      </div>

      <SectionTitle>Breakpoint reference — the special case</SectionTitle>
      <Note>
        <code>max-w-(--breakpoint-sm)</code> resolves to the breakpoint value itself (a Tailwind v4
        theme variable). Reach for this only when the container width must line up with a
        breakpoint; otherwise prefer the content-width scale above.
      </Note>
      <Recipe code={\`<div className="max-w-(--breakpoint-sm) mx-auto">…</div>\`}>
        <WidthBar width="max-w-(--breakpoint-sm)" label="max-w-(--breakpoint-sm) · 40rem" />
      </Recipe>
    </Page>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Responsive',
  render: () => <Page>
      <PageTitle>Responsive</PageTitle>
      <Lead>
        Tailwind's <code>sm:</code> / <code>md:</code> / <code>lg:</code> breakpoint prefixes switch
        layout by viewport. Breakpoints follow the Tailwind v4 defaults (<code>sm</code> 40rem,{' '}
        <code>md</code> 48rem, <code>lg</code> 64rem). Resize the preview to see the switch.
      </Lead>

      <SubsectionTitle>Stack on mobile, row on desktop</SubsectionTitle>
      <Recipe code={\`<div className="flex flex-col md:flex-row gap-4">…</div>\`}>
        <div className="flex flex-col md:flex-row gap-4">
          <Box>Sidebar</Box>
          <Box>Main</Box>
        </div>
      </Recipe>

      <SubsectionTitle>Responsive grid columns</SubsectionTitle>
      <Recipe code={\`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">…</div>\`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['1', '2', '3', '4', '5', '6'].map(n => <Box key={n}>{n}</Box>)}
        </div>
      </Recipe>
    </Page>
}`,...v.parameters?.docs?.source}}},y=[`FlexRecipes`,`GridRecipes`,`ContainerMaxWidth`,`Responsive`]}))();export{_ as ContainerMaxWidth,m as FlexRecipes,h as GridRecipes,v as Responsive,y as __namedExportsOrder,u as default};