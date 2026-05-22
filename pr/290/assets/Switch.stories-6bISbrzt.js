import{j as e}from"./iframe-BqGsKFt3.js";import{S as a}from"./Switch--NkDn7K9.js";import"./preload-helper-D5GysE_L.js";import"./index-DfetInHR.js";import"./index-DuuKJC7O.js";import"./index-BHEgN1jt.js";import"./index-DZBwaI1b.js";import"./index-DMAs5BUu.js";import"./field-Dx-fPZI7.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css               */const I={title:"Components/lv1/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the switch.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the switch. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:"Controlled checked state.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the switch in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the switch and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the switch as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={name:"Playground",args:{size:"md",label:"Enable notifications",defaultChecked:!1}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},l={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0})]})},t={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Enable notifications",defaultChecked:!0}),e.jsx(a,{label:"Dark mode"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},d={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},i={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled + error",disabled:!0,isError:!0}),e.jsx(a,{label:"Disabled + error, checked",disabled:!0,isError:!0,defaultChecked:!0})]})},c={name:"All states (cognitive review)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-3 items-start",children:[e.jsx("div",{className:"font-medium text-foreground",children:"Enabled"}),e.jsx("div",{className:"font-medium text-foreground",children:"Disabled"}),e.jsx(a,{label:"Off"}),e.jsx(a,{label:"Off (disabled)",disabled:!0}),e.jsx(a,{label:"On",defaultChecked:!0}),e.jsx(a,{label:"On (disabled)",defaultChecked:!0,disabled:!0})]})};var n,m,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,p,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      <Switch />
      <Switch defaultChecked />
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,k,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
}`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,w,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var C,D,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,z,O;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled + error" disabled isError />
      <Switch label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...(O=(z=o.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var L,V,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'All states (cognitive review)',
  render: () => <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-start">
      <div className="font-medium text-foreground">Enabled</div>
      <div className="font-medium text-foreground">Disabled</div>
      <Switch label="Off" />
      <Switch label="Off (disabled)" disabled />
      <Switch label="On" defaultChecked />
      <Switch label="On (disabled)" defaultChecked disabled />
    </div>
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const J=["Playground","Sizes","States","WithLabels","ErrorState","Disabled","DisabledWithError","AllStates"];export{c as AllStates,i as Disabled,o as DisabledWithError,d as ErrorState,r as Playground,s as Sizes,l as States,t as WithLabels,J as __namedExportsOrder,I as default};
