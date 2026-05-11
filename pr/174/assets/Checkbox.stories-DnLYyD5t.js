import{j as e,r as q}from"./iframe-CU1rtwY0.js";import{C as a}from"./Checkbox-D4DNxHmf.js";import"./preload-helper-CDs4oQVQ.js";import"./index-vK4KFgkK.js";import"./index-D_oAKC-t.js";import"./index-L-CgXkwO.js";import"./index-CfwOW_Gf.js";import"./index-MBy8_fJ6.js";import"./index-DKWRxvuG.js";import"./field-EpRFglro.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const $={title:"Components/lv1/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the checkbox.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the checkbox. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:'Controlled checked state. Supports boolean or "indeterminate".',control:"select",options:[!0,!1,"indeterminate"],table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the checkbox in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the checkbox and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the checkbox as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{size:"md",label:"Accept terms and conditions",defaultChecked:!1}},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},t={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0}),e.jsx(a,{checked:"indeterminate"})]})},c={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Accept terms and conditions",defaultChecked:!0}),e.jsx(a,{label:"Subscribe to newsletter"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},d={name:"Indeterminate",render:function(){const i=["Apple","Banana","Cherry"],[m,u]=q.useState(["Apple"]),h=m.length===i.length,W=m.length>0&&!h;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{label:"Select all",checked:h?!0:W?"indeterminate":!1,onCheckedChange:r=>{u(r?[...i]:[])}}),e.jsx("div",{className:"flex flex-col gap-2 ml-6",children:i.map(r=>e.jsx(a,{label:r,checked:m.includes(r),onCheckedChange:w=>{u(b=>w?[...b,r]:b.filter(M=>M!==r))}},r))})]})}},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,checked:"indeterminate"})]})};var p,x,k;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,C,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var y,S,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked="indeterminate" />
    </div>
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,N,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,E,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(E=d.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,V,I;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var P,R,U;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...(U=(R=n.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ee=["Playground","Sizes","States","WithLabels","Indeterminate","ErrorState","Disabled"];export{n as Disabled,o as ErrorState,d as Indeterminate,s as Playground,l as Sizes,t as States,c as WithLabels,ee as __namedExportsOrder,$ as default};
