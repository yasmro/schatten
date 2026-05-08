import{j as e}from"./iframe-Clv83n-P.js";import{S as a}from"./Switch-Da97oPT0.js";import"./preload-helper-CuurTPMa.js";import"./index-DfbH8EEB.js";import"./index-C7NrN99j.js";import"./index-DYghQUh0.js";import"./index-Csv8SA-5.js";import"./index-Dpm7u3nP.js";import"./field-BtpwbciH.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";const R={title:"Components/lv1/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the switch.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the switch. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:"Controlled checked state.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the switch in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the switch and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the switch as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={name:"Playground",args:{size:"md",label:"Enable notifications",defaultChecked:!1}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},l={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0})]})},t={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Enable notifications",defaultChecked:!0}),e.jsx(a,{label:"Dark mode"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})};var i,c,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,h,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      <Switch />
      <Switch defaultChecked />
    </div>
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,S,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var k,y,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,w,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const _=["Playground","Sizes","States","WithLabels","ErrorState","Disabled"];export{d as Disabled,o as ErrorState,r as Playground,s as Sizes,l as States,t as WithLabels,_ as __namedExportsOrder,R as default};
