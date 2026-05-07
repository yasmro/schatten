import{j as e,r as f}from"./iframe-BR71pDDo.js";import{C as a}from"./Checkbox-BRKP0Ll3.js";import"./preload-helper-BdHZps5x.js";import"./index-CNJc8Daf.js";import"./index-BPEMftxV.js";import"./index-C1HX8I77.js";import"./index-CscT5rD2.js";import"./index-DCHdaJdY.js";import"./index-o-5XQNmV.js";import"./index-JEu8y2tt.js";import"./field-DjjwJueo.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";const P={title:"Components/lv1/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the checkbox.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the checkbox. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:'Controlled checked state. Supports boolean or "indeterminate".',control:"select",options:[!0,!1,"indeterminate"],table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the checkbox in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the checkbox and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the checkbox as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{size:"md",label:"Accept terms and conditions",defaultChecked:!1}},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},t={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0}),e.jsx(a,{checked:"indeterminate"})]})},c={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Accept terms and conditions",defaultChecked:!0}),e.jsx(a,{label:"Subscribe to newsletter"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},d={name:"Indeterminate",render:function(){const i=["Apple","Banana","Cherry"],[m,u]=f.useState(["Apple"]),h=m.length===i.length,b=m.length>0&&!h;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{label:"Select all",checked:h?!0:b?"indeterminate":!1,onCheckedChange:r=>{u(r?[...i]:[])}}),e.jsx("div",{className:"flex flex-col gap-2 ml-6",children:i.map(r=>e.jsx(a,{label:r,checked:m.includes(r),onCheckedChange:x=>{u(p=>x?[...p,r]:p.filter(k=>k!==r))}},r))})]})}},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,checked:"indeterminate"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked="indeterminate" />
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...n.parameters?.docs?.source}}};const R=["Playground","Sizes","States","WithLabels","Indeterminate","ErrorState","Disabled"];export{n as Disabled,o as ErrorState,d as Indeterminate,s as Playground,l as Sizes,t as States,c as WithLabels,R as __namedExportsOrder,P as default};
