import{j as e}from"./iframe-fZlVZMrS.js";import{S as s}from"./Skeleton-DDghHPde.js";import"./preload-helper-D6NySE5b.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";const p={title:"Components/lv1/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{description:"Utility classes that set the placeholder size and shape (width / height / border-radius).",control:"text",table:{type:{summary:"string"}}}}},a={name:"Playground",args:{className:"h-4 w-[200px]"}},r={name:"Text",render:()=>e.jsxs("div",{className:"w-[300px] space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-3/4"})]})},l={name:"Shapes",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsx(s,{className:"h-16 w-24"}),e.jsx(s,{className:"h-6 w-20 rounded-full"})]})},t={name:"Card",render:()=>e.jsxs("div",{role:"status","aria-busy":"true",className:"flex w-[320px] items-center gap-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-2/3"})]}),e.jsx("span",{className:"sr-only",children:"Loading…"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    className: 'h-4 w-[200px]'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Text',
  render: () => <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Shapes',
  render: () => <div className="flex items-center gap-6">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-16 w-24" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Card',
  render: () =>
  // The container owns the loading announcement; the skeletons are decorative.
  <div role="status" aria-busy="true" className="flex w-[320px] items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
}`,...t.parameters?.docs?.source}}};const i=["Playground","Text","Shapes","Card"];export{t as Card,a as Playground,l as Shapes,r as Text,i as __namedExportsOrder,p as default};
