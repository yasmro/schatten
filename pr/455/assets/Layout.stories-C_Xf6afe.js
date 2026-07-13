import{j as e}from"./iframe-D3b9ml6N.js";import{P as m,L as h,S as n,N as x,a as o,C as w}from"./docs-ui-BXtvuN1n.js";import"./preload-helper-CraBvC-j.js";const j={title:"Patterns/Layout",parameters:{layout:"fullscreen"}},p=({children:i})=>e.jsx("div",{className:"max-w-3xl mx-auto px-8 py-12",children:i}),s=({children:i})=>e.jsx("div",{className:"flex h-12 min-w-12 items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground-muted",children:i}),a=({code:i,children:g})=>e.jsxs("div",{className:"mb-6",children:[e.jsx(w,{children:i}),e.jsx("div",{className:"rounded-lg border border-dashed border-border p-4",children:g})]}),c={name:"Flex (Row & Column)",render:()=>e.jsxs(p,{children:[e.jsx(m,{children:"Layout"}),e.jsxs(h,{children:["Schatten deliberately ships no ",e.jsx("code",{children:"Stack"})," / ",e.jsx("code",{children:"HStack"})," /"," ",e.jsx("code",{children:"VStack"})," components — layout is composed directly with Tailwind utilities. For the reasoning behind that decision, see"," ",e.jsx("code",{children:"Tokens/Spacing › Why No Layout Primitives"}),". This page is the recipe catalog for the patterns you reach for most."]}),e.jsx(n,{children:"Horizontal — flex-row"}),e.jsx(o,{children:"Centered, with gap"}),e.jsx(a,{code:'<div className="flex items-center gap-2">…</div>',children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{children:"A"}),e.jsx(s,{children:"B"}),e.jsx(s,{children:"C"})]})}),e.jsx(o,{children:"Space between"}),e.jsx(a,{code:'<div className="flex items-center justify-between gap-2">…</div>',children:e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx(s,{children:"Logo"}),e.jsx(s,{children:"Nav"}),e.jsx(s,{children:"Profile"})]})}),e.jsx(o,{children:"Wrap"}),e.jsx(a,{code:'<div className="flex flex-wrap gap-2">…</div>',children:e.jsx("div",{className:"flex flex-wrap gap-2",children:["1","2","3","4","5","6","7","8"].map(i=>e.jsx(s,{children:i},i))})}),e.jsx(n,{children:"Vertical — flex-col"}),e.jsx(o,{children:"Stacked, with gap"}),e.jsx(a,{code:'<div className="flex flex-col gap-4">…</div>',children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{children:"First"}),e.jsx(s,{children:"Second"}),e.jsx(s,{children:"Third"})]})}),e.jsx(o,{children:"Centered column"}),e.jsx(a,{code:'<div className="flex flex-col items-center gap-4">…</div>',children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(s,{children:"First"}),e.jsx(s,{children:"Second"})]})}),e.jsxs(x,{children:["Keep ",e.jsx("code",{children:"gap"})," on the curated scale (",e.jsx("code",{children:"gap-2"})," / ",e.jsx("code",{children:"gap-4"})," /"," ",e.jsx("code",{children:"gap-6"})," / ",e.jsx("code",{children:"gap-8"}),"). The full scale and the off-scale values to avoid live in ",e.jsx("code",{children:"Tokens/Spacing"}),"."]})]})},t={name:"Grid",render:()=>e.jsxs(p,{children:[e.jsx(m,{children:"Grid"}),e.jsxs(h,{children:["CSS grid via Tailwind utilities. Use the same curated ",e.jsx("code",{children:"gap"})," scale as flex."]}),e.jsx(o,{children:"Two columns"}),e.jsx(a,{code:'<div className="grid grid-cols-2 gap-4">…</div>',children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["1","2","3","4"].map(i=>e.jsx(s,{children:i},i))})}),e.jsx(o,{children:"Auto-fit — responsive without breakpoints"}),e.jsxs(x,{children:[e.jsx("code",{children:"auto-fit"})," + ",e.jsx("code",{children:"minmax()"})," fits as many columns as the width allows, then wraps — no breakpoint prefixes needed. Resize the preview to watch the column count change."]}),e.jsx(a,{code:'<div className="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4">…</div>',children:e.jsx("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-4",children:["A","B","C","D","E"].map(i=>e.jsx(s,{children:i},i))})})]})},d=({width:i,label:g})=>e.jsx("div",{className:`${i} mx-auto`,children:e.jsx("div",{className:"rounded-md border border-border bg-surface px-3 py-2 text-center text-xs font-mono text-foreground-muted",children:g})}),r={name:"Container / max-width",render:()=>e.jsxs(p,{children:[e.jsx(m,{children:"Container & max-width"}),e.jsxs(h,{children:["Tailwind v4 removed the old ",e.jsx("code",{children:"max-w-screen-*"})," utilities. There are two replacements, for two different intents."]}),e.jsx(n,{children:"Content width — the common case"}),e.jsxs(x,{children:["Fixed rem widths centered with ",e.jsx("code",{children:"mx-auto"}),". This is what every docs page here uses (",e.jsx("code",{children:"max-w-3xl mx-auto"}),"). The scale continues up to ",e.jsx("code",{children:"max-w-4xl"})," /"," ",e.jsx("code",{children:"max-w-6xl"})," /",e.jsx("code",{children:"max-w-7xl"})," for wider layouts."]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{width:"max-w-sm",label:"max-w-sm · 24rem"}),e.jsx(d,{width:"max-w-md",label:"max-w-md · 28rem"}),e.jsx(d,{width:"max-w-lg",label:"max-w-lg · 32rem"}),e.jsx(d,{width:"max-w-xl",label:"max-w-xl · 36rem"}),e.jsx(d,{width:"max-w-2xl",label:"max-w-2xl · 42rem"})]}),e.jsx(n,{children:"Breakpoint reference — the special case"}),e.jsxs(x,{children:[e.jsx("code",{children:"max-w-(--breakpoint-sm)"})," resolves to the breakpoint value itself (a Tailwind v4 theme variable). Reach for this only when the container width must line up with a breakpoint; otherwise prefer the content-width scale above."]}),e.jsx(a,{code:'<div className="max-w-(--breakpoint-sm) mx-auto">…</div>',children:e.jsx(d,{width:"max-w-(--breakpoint-sm)",label:"max-w-(--breakpoint-sm) · 40rem"})})]})},l={name:"Responsive",render:()=>e.jsxs(p,{children:[e.jsx(m,{children:"Responsive"}),e.jsxs(h,{children:["Tailwind's ",e.jsx("code",{children:"sm:"})," / ",e.jsx("code",{children:"md:"})," / ",e.jsx("code",{children:"lg:"})," breakpoint prefixes switch layout by viewport. Breakpoints follow the Tailwind v4 defaults (",e.jsx("code",{children:"sm"})," 40rem,"," ",e.jsx("code",{children:"md"})," 48rem, ",e.jsx("code",{children:"lg"})," 64rem). Resize the preview to see the switch."]}),e.jsx(o,{children:"Stack on mobile, row on desktop"}),e.jsx(a,{code:'<div className="flex flex-col md:flex-row gap-4">…</div>',children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[e.jsx(s,{children:"Sidebar"}),e.jsx(s,{children:"Main"})]})}),e.jsx(o,{children:"Responsive grid columns"}),e.jsx(a,{code:'<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">…</div>',children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:["1","2","3","4","5","6"].map(i=>e.jsx(s,{children:i},i))})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const b=["FlexRecipes","GridRecipes","ContainerMaxWidth","Responsive"];export{r as ContainerMaxWidth,c as FlexRecipes,t as GridRecipes,l as Responsive,b as __namedExportsOrder,j as default};
