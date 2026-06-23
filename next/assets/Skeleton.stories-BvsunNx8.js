import{j as e}from"./iframe-C94XdqcJ.js";import{S as a}from"./Skeleton-BPUysROi.js";import"./preload-helper-CrztxVc4.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const p={title:"Components/lv1/Skeleton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{description:"Utility classes that set the placeholder size and shape (width / height / border-radius).",control:"text",table:{type:{summary:"string"}}}}},s={name:"Playground",args:{className:"h-4 w-[200px]"}},r={name:"Text",render:()=>e.jsxs("div",{className:"w-[300px] space-y-2",children:[e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-3/4"})]})},n={name:"Shapes",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(a,{className:"h-16 w-16"}),e.jsx(a,{className:"h-16 w-40"}),e.jsx(a,{className:"h-24 w-32"})]})},l={name:"Card",render:()=>e.jsxs("div",{role:"status","aria-busy":"true",className:"flex w-[320px] items-center gap-4",children:[e.jsx(a,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-2/3"})]}),e.jsx("span",{className:"sr-only",children:"Loading…"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    className: 'h-4 w-[200px]'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Text',
  render: () => <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Shapes',
  render: () =>
  // Square block placeholders (default corners) at a few sizes — e.g. a
  // thumbnail, a banner, a media tile. Rounding is opt-in via \`rounded-*\`.
  <div className="flex items-center gap-6">
      <Skeleton className="h-16 w-16" />
      <Skeleton className="h-16 w-40" />
      <Skeleton className="h-24 w-32" />
    </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const u=["Playground","Text","Shapes","Card"];export{l as Card,s as Playground,n as Shapes,r as Text,u as __namedExportsOrder,p as default};
