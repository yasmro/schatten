import{j as e}from"./iframe-Q-7Zj3Ct.js";import{S as r}from"./Spinner-QdpqgASa.js";import"./preload-helper-DUSBS5vW.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css                */const c={title:"Components/lv1/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Color variant of the spinner.",control:"select",options:["default","inverted"],table:{type:{summary:'"default" | "inverted"'},defaultValue:{summary:"default"}}},type:{description:"Spinner animation type.",control:"select",options:["default","ripple"],table:{type:{summary:'"default" | "ripple"'},defaultValue:{summary:"default"}}},size:{description:"Size of the spinner.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Accessible label for screen readers.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Loading"}}}}},a={name:"Playground",args:{type:"default",size:"md",label:"Loading"}},n={name:"All Types",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{type:"default"}),e.jsx(r,{type:"ripple"})]})},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},t={name:"On Dark Background",render:()=>e.jsxs("div",{className:"flex items-center gap-8 rounded-lg bg-solid p-8",children:[e.jsx(r,{variant:"inverted",type:"default"}),e.jsx(r,{variant:"inverted",type:"ripple"})]})},u=["Playground","AllTypes","Sizes","OnDarkBackground"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'default',
    size: 'md',
    label: 'Loading'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div className="flex items-center gap-8">
      <Spinner type="default" />
      <Spinner type="ripple" />
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'On Dark Background',
  render: () => <div className="flex items-center gap-8 rounded-lg bg-solid p-8">
      <Spinner variant="inverted" type="default" />
      <Spinner variant="inverted" type="ripple" />
    </div>
}`,...t.parameters?.docs?.source}}};export{n as AllTypes,t as OnDarkBackground,a as Playground,s as Sizes,u as __namedExportsOrder,c as default};
