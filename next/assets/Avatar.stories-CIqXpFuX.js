import{j as e}from"./iframe-AepuN_wk.js";import{A as a}from"./Avatar-IDtePV7R.js";import"./preload-helper-CrztxVc4.js";import"./index-BSfmuY9Z.js";import"./index-D4qqWRvd.js";import"./index-BXu5z_Tj.js";import"./index-DDvgaDUM.js";import"./index-CSQd3kOa.js";import"./index-BJ52y3c1.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */const s="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='96'%20height='96'%3E%3Crect%20width='96'%20height='96'%20fill='%234f46e5'/%3E%3Ccircle%20cx='48'%20cy='38'%20r='17'%20fill='%23c7d2fe'/%3E%3Crect%20x='20'%20y='60'%20width='56'%20height='34'%20rx='17'%20fill='%23c7d2fe'/%3E%3C/svg%3E",A={title:"Components/lv1/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{description:"Image URL. Falls back to the `fallback` initials when absent or failed.",control:"text",table:{type:{summary:"string"}}},alt:{description:"Alt text / accessible name shown while the image is visible.",control:"text",table:{type:{summary:"string"}}},fallback:{description:"Initials shown when there is no image or it fails to load (string only).",control:"text",table:{type:{summary:"string"}}},size:{description:"Size of the avatar.",control:"inline-radio",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},delayMs:{description:"Delay (ms) before showing the fallback, to avoid an initials flash on fast loads.",control:"number",table:{type:{summary:"number"}}}}},r={name:"Playground",args:{src:s,alt:"John Doe",fallback:"JD",size:"md"}},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{src:s,alt:"John Doe",fallback:"JD",size:"sm"}),e.jsx(a,{src:s,alt:"John Doe",fallback:"JD",size:"md"}),e.jsx(a,{src:s,alt:"John Doe",fallback:"JD",size:"lg"})]})},l={name:"With Image",render:()=>e.jsx(a,{src:s,alt:"Alice Anderson",fallback:"AA",size:"lg"})},i={name:"Fallback (initials)",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{fallback:"JD",size:"sm"}),e.jsx(a,{fallback:"AB",size:"md"}),e.jsx(a,{fallback:"CD",size:"lg"})]})},o={name:"With Broken Image",render:()=>e.jsx(a,{src:"/this-avatar-image-does-not-exist.png",alt:"Broken",fallback:"JD",size:"lg"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    src: IMAGE_SRC,
    alt: 'John Doe',
    fallback: 'JD',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="sm" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="md" />
      <Avatar src={IMAGE_SRC} alt="John Doe" fallback="JD" size="lg" />
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Image',
  render: () => <Avatar src={IMAGE_SRC} alt="Alice Anderson" fallback="AA" size="lg" />
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Fallback (initials)',
  render: () => <div className="flex items-center gap-4">
      <Avatar fallback="JD" size="sm" />
      <Avatar fallback="AB" size="md" />
      <Avatar fallback="CD" size="lg" />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Broken Image',
  // A 404 src exercises the image→fallback swap; the VRT interaction test
  // (Avatar.vrt.spec.ts) asserts the initials surface and the <img> drops.
  render: () => <Avatar src="/this-avatar-image-does-not-exist.png" alt="Broken" fallback="JD" size="lg" />
}`,...o.parameters?.docs?.source}}};const v=["Playground","Sizes","WithImage","Fallback","WithBrokenImage"];export{i as Fallback,r as Playground,t as Sizes,o as WithBrokenImage,l as WithImage,v as __namedExportsOrder,A as default};
