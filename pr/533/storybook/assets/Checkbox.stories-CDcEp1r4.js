import{j as e,r as C}from"./iframe-B1sDooHy.js";import{C as a}from"./Checkbox-B8wv0MsO.js";import"./preload-helper-CyxsqPNV.js";import"./index-C8sgqlWl.js";import"./index-BR1mXw4X.js";import"./index-CTjCfJkA.js";import"./index-B4hCDk--.js";import"./index-guymdM8Y.js";import"./index-D5WepZmI.js";import"./index-DU1TAFZD.js";import"./index-DQJLQabX.js";import"./field-XWcU6pwv.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css                 */const P={title:"Components/lv1/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the checkbox.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the checkbox. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:'Controlled checked state. Supports boolean or "indeterminate".',control:"select",options:[!0,!1,"indeterminate"],table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the checkbox in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the checkbox and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the checkbox as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l={name:"Playground",args:{size:"md",label:"Accept terms and conditions",defaultChecked:!1}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},t={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{"aria-label":"Unchecked"}),e.jsx(a,{defaultChecked:!0,"aria-label":"Checked"}),e.jsx(a,{checked:"indeterminate","aria-label":"Indeterminate"})]})},c={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Accept terms and conditions",defaultChecked:!0}),e.jsx(a,{label:"Subscribe to newsletter"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},d={name:"Indeterminate",render:function(){const m=["Apple","Banana","Cherry"],[b,h]=C.useState(["Apple"]),u=b.length===m.length,x=b.length>0&&!u;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{label:"Select all",checked:u?!0:x?"indeterminate":!1,onCheckedChange:r=>{h(r?[...m]:[])}}),e.jsx("div",{className:"flex flex-col gap-2 ml-6",children:m.map(r=>e.jsx(a,{label:r,checked:b.includes(r),onCheckedChange:k=>{h(p=>k?[...p,r]:p.filter(f=>f!==r))}},r))})]})}},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},i={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,checked:"indeterminate"})]})},n={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled + error",disabled:!0,isError:!0}),e.jsx(a,{label:"Disabled + error, checked",disabled:!0,isError:!0,defaultChecked:!0})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix checkboxes have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Checkbox aria-label="Unchecked" />
      <Checkbox defaultChecked aria-label="Checked" />
      <Checkbox checked="indeterminate" aria-label="Indeterminate" />
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Indeterminate',
  render: function Render() {
    const items = ['Apple', 'Banana', 'Cherry'];
    const [selected, setSelected] = useState<string[]>(['Apple']);
    const allChecked = selected.length === items.length;
    const someChecked = selected.length > 0 && !allChecked;
    return <div className="flex flex-col gap-2">
        <Checkbox label="Select all" checked={allChecked ? true : someChecked ? 'indeterminate' : false} onCheckedChange={checked => {
        setSelected(checked ? [...items] : []);
      }} />
        <div className="flex flex-col gap-2 ml-6">
          {items.map(item => <Checkbox key={item} label={item} checked={selected.includes(item)} onCheckedChange={checked => {
          setSelected(prev => checked ? [...prev, item] : prev.filter(i => i !== item));
        }} />)}
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled + error" disabled isError />
      <Checkbox label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...n.parameters?.docs?.source}}};const R=["Playground","Sizes","States","WithLabels","Indeterminate","ErrorState","Disabled","DisabledWithError"];export{i as Disabled,n as DisabledWithError,o as ErrorState,d as Indeterminate,l as Playground,s as Sizes,t as States,c as WithLabels,R as __namedExportsOrder,P as default};
