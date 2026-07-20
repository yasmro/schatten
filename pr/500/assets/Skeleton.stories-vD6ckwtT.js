import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Skeleton-D6kTkr5V.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Components/lv1/Skeleton`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{className:{description:`Utility classes that set the placeholder size and shape (width / height / border-radius).`,control:`text`,table:{type:{summary:`string`}}}}},o={name:`Playground`,args:{className:`h-4 w-[200px]`}},s={name:`Text`,render:()=>(0,i.jsxs)(`div`,{className:`w-[300px] space-y-2`,children:[(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-3/4`})]})},c={name:`Shapes`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsx)(r,{className:`h-16 w-16`}),(0,i.jsx)(r,{className:`h-16 w-40`}),(0,i.jsx)(r,{className:`h-24 w-32`})]})},l={name:`Card`,render:()=>(0,i.jsxs)(`div`,{role:`status`,"aria-busy":`true`,className:`flex w-[320px] items-center gap-4`,children:[(0,i.jsx)(r,{className:`h-12 w-12 rounded-full`}),(0,i.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,i.jsx)(r,{className:`h-4 w-full`}),(0,i.jsx)(r,{className:`h-4 w-2/3`})]}),(0,i.jsx)(`span`,{className:`sr-only`,children:`Loading…`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    className: 'h-4 w-[200px]'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Text',
  render: () => <div className="w-[300px] space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Shapes',
  render: () =>
  // Square block placeholders (default corners) at a few sizes — e.g. a
  // thumbnail, a banner, a media tile. Rounding is opt-in via \`rounded-*\`.
  <div className="flex items-center gap-6">
      <Skeleton className="h-16 w-16" />
      <Skeleton className="h-16 w-40" />
      <Skeleton className="h-24 w-32" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`Text`,`Shapes`,`Card`]}))();export{l as Card,o as Playground,c as Shapes,s as Text,u as __namedExportsOrder,a as default};