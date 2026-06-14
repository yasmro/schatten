import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-DRAyPivV.js";import{n as i,t as a}from"./Checkbox-VvgXkRw3.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{o=t(r(),1),i(),s=n(),c={title:`Components/lv1/Checkbox`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the checkbox.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},label:{description:`Label text displayed next to the checkbox. Automatically associates via id.`,control:`text`,table:{type:{summary:`ReactNode`}}},checked:{description:`Controlled checked state. Supports boolean or "indeterminate".`,control:`select`,options:[!0,!1,`indeterminate`],table:{type:{summary:`boolean | "indeterminate"`},defaultValue:{summary:`false`}}},defaultChecked:{description:`Default checked state for uncontrolled usage.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isError:{description:`Displays the checkbox in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the checkbox and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Marks the checkbox as required for form validation.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},l={name:`Playground`,args:{size:`md`,label:`Accept terms and conditions`,defaultChecked:!1}},u={name:`Sizes`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(a,{size:`sm`,label:`Small`,defaultChecked:!0}),(0,s.jsx)(a,{size:`md`,label:`Medium`,defaultChecked:!0}),(0,s.jsx)(a,{size:`lg`,label:`Large`,defaultChecked:!0})]})},d={name:`States`,render:()=>(0,s.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,s.jsx)(a,{"aria-label":`Unchecked`}),(0,s.jsx)(a,{defaultChecked:!0,"aria-label":`Checked`}),(0,s.jsx)(a,{checked:`indeterminate`,"aria-label":`Indeterminate`})]})},f={name:`With Labels`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(a,{label:`Accept terms and conditions`,defaultChecked:!0}),(0,s.jsx)(a,{label:`Subscribe to newsletter`}),(0,s.jsx)(a,{label:`Unavailable option`,disabled:!0})]})},p={name:`Indeterminate`,render:function(){let e=[`Apple`,`Banana`,`Cherry`],[t,n]=(0,o.useState)([`Apple`]),r=t.length===e.length,i=t.length>0&&!r;return(0,s.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,s.jsx)(a,{label:`Select all`,checked:r?!0:i?`indeterminate`:!1,onCheckedChange:t=>{n(t?[...e]:[])}}),(0,s.jsx)(`div`,{className:`flex flex-col gap-2 ml-6`,children:e.map(e=>(0,s.jsx)(a,{label:e,checked:t.includes(e),onCheckedChange:t=>{n(n=>t?[...n,e]:n.filter(t=>t!==e))}},e))})]})}},m={name:`Error`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(a,{label:`Unchecked error`,isError:!0}),(0,s.jsx)(a,{label:`Checked error`,isError:!0,defaultChecked:!0})]})},h={name:`Disabled`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(a,{label:`Disabled unchecked`,disabled:!0}),(0,s.jsx)(a,{label:`Disabled checked`,disabled:!0,defaultChecked:!0}),(0,s.jsx)(a,{label:`Disabled indeterminate`,disabled:!0,checked:`indeterminate`})]})},g={name:`Disabled with error`,render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(a,{label:`Disabled + error`,disabled:!0,isError:!0}),(0,s.jsx)(a,{label:`Disabled + error, checked`,disabled:!0,isError:!0,defaultChecked:!0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix checkboxes have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Checkbox aria-label="Unchecked" />
      <Checkbox defaultChecked aria-label="Checked" />
      <Checkbox checked="indeterminate" aria-label="Indeterminate" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled + error" disabled isError />
      <Checkbox label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Sizes`,`States`,`WithLabels`,`Indeterminate`,`ErrorState`,`Disabled`,`DisabledWithError`]}))();export{h as Disabled,g as DisabledWithError,m as ErrorState,p as Indeterminate,l as Playground,u as Sizes,d as States,f as WithLabels,_ as __namedExportsOrder,c as default};