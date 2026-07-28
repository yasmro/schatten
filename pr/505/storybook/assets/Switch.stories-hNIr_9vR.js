import{j as e}from"./iframe-BubXACkD.js";import{S as a}from"./Switch-DZErlZYb.js";import"./preload-helper-NZo2rR3f.js";import"./index-CGTlY-6d.js";import"./index-OQF_bWwa.js";import"./index-DhKccnbJ.js";import"./index-Cn0HVvy9.js";import"./index-DVEfRIYF.js";import"./index-CRPhZMf8.js";import"./index-PfzAVxvK.js";import"./index-DAlxzk9B.js";import"./field-HwEqSGiV.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */const C={title:"Components/lv1/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the switch.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the switch. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:"Controlled checked state.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the switch in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the switch and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the switch as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={name:"Playground",args:{size:"md",label:"Enable notifications",defaultChecked:!1}},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},s={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{"aria-label":"Off"}),e.jsx(a,{defaultChecked:!0,"aria-label":"On"})]})},t={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Enable notifications",defaultChecked:!0}),e.jsx(a,{label:"Dark mode"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},d={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},i={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled + error",disabled:!0,isError:!0}),e.jsx(a,{label:"Disabled + error, checked",disabled:!0,isError:!0,defaultChecked:!0})]})},c={name:"All states (cognitive review)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-3 items-start",children:[e.jsx("div",{className:"font-medium text-foreground",children:"Enabled"}),e.jsx("div",{className:"font-medium text-foreground",children:"Disabled"}),e.jsx(a,{label:"Off"}),e.jsx(a,{label:"Off (disabled)",disabled:!0}),e.jsx(a,{label:"On",defaultChecked:!0}),e.jsx(a,{label:"On (disabled)",defaultChecked:!0,disabled:!0})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix switches have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled + error" disabled isError />
      <Switch label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All states (cognitive review)',
  render: () => <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-start">
      <div className="font-medium text-foreground">Enabled</div>
      <div className="font-medium text-foreground">Disabled</div>
      <Switch label="Off" />
      <Switch label="Off (disabled)" disabled />
      <Switch label="On" defaultChecked />
      <Switch label="On (disabled)" defaultChecked disabled />
    </div>
}`,...c.parameters?.docs?.source}}};const D=["Playground","Sizes","States","WithLabels","ErrorState","Disabled","DisabledWithError","AllStates"];export{c as AllStates,i as Disabled,o as DisabledWithError,d as ErrorState,r as Playground,l as Sizes,s as States,t as WithLabels,D as __namedExportsOrder,C as default};
