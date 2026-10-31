import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-CZTnZ5a6.js";import{n as r,t as i}from"./Checkbox-BjPWHpwe.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=n(),r(),o=t(),s={title:`Components/lv1/Checkbox`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the checkbox.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},label:{description:`Label text displayed next to the checkbox. Automatically associates via id.`,control:`text`,table:{type:{summary:`ReactNode`}}},checked:{description:`Controlled checked state. Supports boolean or "indeterminate".`,control:`select`,options:[!0,!1,`indeterminate`],table:{type:{summary:`boolean | "indeterminate"`},defaultValue:{summary:`false`}}},defaultChecked:{description:`Default checked state for uncontrolled usage.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isError:{description:`Displays the checkbox in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the checkbox and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Marks the checkbox as required for form validation.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},c={name:`Playground`,args:{size:`md`,label:`Accept terms and conditions`,defaultChecked:!1}},l={name:`Sizes`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{size:`sm`,label:`Small`,defaultChecked:!0}),(0,o.jsx)(i,{size:`md`,label:`Medium`,defaultChecked:!0}),(0,o.jsx)(i,{size:`lg`,label:`Large`,defaultChecked:!0})]})},u={name:`States`,render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,o.jsx)(i,{"aria-label":`Unchecked`}),(0,o.jsx)(i,{defaultChecked:!0,"aria-label":`Checked`}),(0,o.jsx)(i,{checked:`indeterminate`,"aria-label":`Indeterminate`})]})},d={name:`With Labels`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{label:`Accept terms and conditions`,defaultChecked:!0}),(0,o.jsx)(i,{label:`Subscribe to newsletter`}),(0,o.jsx)(i,{label:`Unavailable option`,disabled:!0})]})},f={name:`Indeterminate`,render:function(){let e=[`Apple`,`Banana`,`Cherry`],[t,n]=(0,a.useState)([`Apple`]),r=t.length===e.length,s=t.length>0&&!r;return(0,o.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,o.jsx)(i,{label:`Select all`,checked:r?!0:s?`indeterminate`:!1,onCheckedChange:t=>{n(t?[...e]:[])}}),(0,o.jsx)(`div`,{className:`flex flex-col gap-2 ml-6`,children:e.map(e=>(0,o.jsx)(i,{label:e,checked:t.includes(e),onCheckedChange:t=>{n(n=>t?[...n,e]:n.filter(t=>t!==e))}},e))})]})}},p={name:`Error`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{label:`Unchecked error`,isError:!0}),(0,o.jsx)(i,{label:`Checked error`,isError:!0,defaultChecked:!0})]})},m={name:`Disabled`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{label:`Disabled unchecked`,disabled:!0}),(0,o.jsx)(i,{label:`Disabled checked`,disabled:!0,defaultChecked:!0}),(0,o.jsx)(i,{label:`Disabled indeterminate`,disabled:!0,checked:`indeterminate`})]})},h={name:`Disabled with error`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{label:`Disabled + error`,disabled:!0,isError:!0}),(0,o.jsx)(i,{label:`Disabled + error, checked`,disabled:!0,isError:!0,defaultChecked:!0})]})},g=[`Playground`,`Sizes`,`States`,`WithLabels`,`Indeterminate`,`ErrorState`,`Disabled`,`DisabledWithError`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix checkboxes have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Checkbox aria-label="Unchecked" />
      <Checkbox defaultChecked aria-label="Checked" />
      <Checkbox checked="indeterminate" aria-label="Indeterminate" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled + error" disabled isError />
      <Checkbox label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Disabled,h as DisabledWithError,p as ErrorState,f as Indeterminate,c as Playground,l as Sizes,u as States,d as WithLabels,g as __namedExportsOrder,s as default};