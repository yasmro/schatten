import{j as e}from"./iframe-BhWx_KUU.js";import{S as r}from"./Spinner-CLChkyfk.js";import"./preload-helper-DUEUtxdG.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const k={title:"Components/lv1/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Color variant of the spinner.",control:"select",options:["default","inverted"],table:{type:{summary:'"default" | "inverted"'},defaultValue:{summary:"default"}}},type:{description:"Spinner animation type.",control:"select",options:["default","ripple"],table:{type:{summary:'"default" | "ripple"'},defaultValue:{summary:"default"}}},size:{description:"Size of the spinner.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Accessible label for screen readers.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Loading"}}}}},a={name:"Playground",args:{type:"default",size:"md",label:"Loading"}},s={name:"All Types",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{type:"default"}),e.jsx(r,{type:"ripple"})]})},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},n={name:"On Dark Background",render:()=>e.jsxs("div",{className:"flex items-center gap-8 rounded-lg bg-solid p-8",children:[e.jsx(r,{variant:"inverted",type:"default"}),e.jsx(r,{variant:"inverted",type:"ripple"})]})};var i,l,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'default',
    size: 'md',
    label: 'Loading'
  }
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div className="flex items-center gap-8">
      <Spinner type="default" />
      <Spinner type="ripple" />
    </div>
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'On Dark Background',
  render: () => <div className="flex items-center gap-8 rounded-lg bg-solid p-8">
      <Spinner variant="inverted" type="default" />
      <Spinner variant="inverted" type="ripple" />
    </div>
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const N=["Playground","AllTypes","Sizes","OnDarkBackground"];export{s as AllTypes,n as OnDarkBackground,a as Playground,t as Sizes,N as __namedExportsOrder,k as default};
