import{j as e}from"./iframe-B5QrScIQ.js";import{S as r}from"./Spinner-DvhSv0qq.js";import"./preload-helper-DLx2GQLC.js";import"./index-DiZijfAW.js";const b={title:"Components/lv1/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Color variant of the spinner.",control:"select",options:["default","inverse"],table:{type:{summary:'"default" | "inverse"'},defaultValue:{summary:"default"}}},type:{description:"Spinner animation type.",control:"select",options:["default","ripple"],table:{type:{summary:'"default" | "ripple"'},defaultValue:{summary:"default"}}},size:{description:"Size of the spinner.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Accessible label for screen readers.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Loading"}}}}},a={name:"Playground",args:{type:"default",size:"md",label:"Loading"}},s={name:"All Types",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{type:"default"}),e.jsx(r,{type:"ripple"})]})},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},t={name:"On Dark Background",render:()=>e.jsxs("div",{className:"flex items-center gap-8 rounded-lg bg-solid p-8",children:[e.jsx(r,{variant:"inverse",type:"default"}),e.jsx(r,{variant:"inverse",type:"ripple"})]})};var i,l,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,u,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'On Dark Background',
  render: () => <div className="flex items-center gap-8 rounded-lg bg-solid p-8">
      <Spinner variant="inverse" type="default" />
      <Spinner variant="inverse" type="ripple" />
    </div>
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const k=["Playground","AllTypes","Sizes","OnDarkBackground"];export{s as AllTypes,t as OnDarkBackground,a as Playground,n as Sizes,k as __namedExportsOrder,b as default};
