import{j as e,r as T}from"./iframe-DJgLKrWo.js";import{C as a}from"./Checkbox-DG8Lvn2n.js";import"./preload-helper-By2mdhBQ.js";import"./index-CRWI6qKb.js";import"./index-C4l0Q4ID.js";import"./index-8LCdxz3q.js";import"./index-BDMRRztM.js";import"./index-D2UbunoE.js";import"./index-DH3Ld_1-.js";import"./field-DqoyC0H8.js";import"./utils-DCADjnpI.js";import"./index-CkIaN0ex.js";/* empty css                 */const le={title:"Components/lv1/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the checkbox.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the checkbox. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:'Controlled checked state. Supports boolean or "indeterminate".',control:"select",options:[!0,!1,"indeterminate"],table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the checkbox in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the checkbox and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the checkbox as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{size:"md",label:"Accept terms and conditions",defaultChecked:!1}},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},t={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{}),e.jsx(a,{defaultChecked:!0}),e.jsx(a,{checked:"indeterminate"})]})},d={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Accept terms and conditions",defaultChecked:!0}),e.jsx(a,{label:"Subscribe to newsletter"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},c={name:"Indeterminate",render:function(){const m=["Apple","Banana","Cherry"],[b,u]=T.useState(["Apple"]),h=b.length===m.length,B=b.length>0&&!h;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{label:"Select all",checked:h?!0:B?"indeterminate":!1,onCheckedChange:r=>{u(r?[...m]:[])}}),e.jsx("div",{className:"flex flex-col gap-2 ml-6",children:m.map(r=>e.jsx(a,{label:r,checked:b.includes(r),onCheckedChange:_=>{u(p=>_?[...p,r]:p.filter(O=>O!==r))}},r))})]})}},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},i={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,checked:"indeterminate"})]})},n={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled + error",disabled:!0,isError:!0}),e.jsx(a,{label:"Disabled + error, checked",disabled:!0,isError:!0,defaultChecked:!0})]})};var x,k,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Accept terms and conditions',
    defaultChecked: false
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,g,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" label="Small" defaultChecked />
      <Checkbox size="md" label="Medium" defaultChecked />
      <Checkbox size="lg" label="Large" defaultChecked />
    </div>
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,v,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked="indeterminate" />
    </div>
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var D,E,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" defaultChecked />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Unavailable option" disabled />
    </div>
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var z,A,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var V,W,w;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked error" isError />
      <Checkbox label="Checked error" isError defaultChecked />
    </div>
}`,...(w=(W=o.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var I,P,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Disabled indeterminate" disabled checked="indeterminate" />
    </div>
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,M,q;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Disabled + error" disabled isError />
      <Checkbox label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...(q=(M=n.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const te=["Playground","Sizes","States","WithLabels","Indeterminate","ErrorState","Disabled","DisabledWithError"];export{i as Disabled,n as DisabledWithError,o as ErrorState,c as Indeterminate,s as Playground,l as Sizes,t as States,d as WithLabels,te as __namedExportsOrder,le as default};
