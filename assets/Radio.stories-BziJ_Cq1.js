import{j as e}from"./iframe-nWhzAA-B.js";import{a,R as l}from"./Radio-DJcUEoSn.js";import"./preload-helper-hmmh1zBP.js";import"./index-jElAWTzZ.js";import"./index-7Jn88uzg.js";import"./index-COQdcn3W.js";import"./index-CDAoxh1y.js";import"./index-EC-TtgRv.js";import"./index-DiZijfAW.js";const A={title:"Components/lv1/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the radio button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the radio. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},value:{description:"The value of the radio item.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Displays the radio in an error state with destructive border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the radio and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={name:"Playground",args:{size:"md",label:"Option A",value:"a"},decorators:[D=>e.jsx(l,{defaultValue:"a",children:e.jsx(D,{})})]},o={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{defaultValue:"sm",children:e.jsx(a,{size:"sm",value:"sm",label:"Small"})}),e.jsx(l,{defaultValue:"md",children:e.jsx(a,{size:"md",value:"md",label:"Medium"})}),e.jsx(l,{defaultValue:"lg",children:e.jsx(a,{size:"lg",value:"lg",label:"Large"})})]})},s={name:"With Labels",render:()=>e.jsxs(l,{defaultValue:"comfortable",children:[e.jsx(a,{value:"default",label:"Default"}),e.jsx(a,{value:"comfortable",label:"Comfortable"}),e.jsx(a,{value:"compact",label:"Compact"})]})},t={name:"Horizontal",render:()=>e.jsxs(l,{defaultValue:"option-1",className:"flex flex-row gap-4",children:[e.jsx(a,{value:"option-1",label:"Option 1"}),e.jsx(a,{value:"option-2",label:"Option 2"}),e.jsx(a,{value:"option-3",label:"Option 3"})]})},d={name:"Error",render:()=>e.jsxs(l,{defaultValue:"error-selected",isError:!0,children:[e.jsx(a,{value:"error-unselected",label:"Unselected error"}),e.jsx(a,{value:"error-selected",label:"Selected error"})]})},i={name:"Disabled",render:()=>e.jsxs(l,{defaultValue:"disabled-selected",children:[e.jsx(a,{value:"disabled-unselected",label:"Disabled unselected",disabled:!0}),e.jsx(a,{value:"disabled-selected",label:"Disabled selected",disabled:!0})]})};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Option A',
    value: 'a'
  },
  decorators: [Story => <RadioGroup defaultValue="a">
        <Story />
      </RadioGroup>]
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,p,b;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="sm">
        <Radio size="sm" value="sm" label="Small" />
      </RadioGroup>
      <RadioGroup defaultValue="md">
        <Radio size="md" value="md" label="Medium" />
      </RadioGroup>
      <RadioGroup defaultValue="lg">
        <Radio size="lg" value="lg" label="Large" />
      </RadioGroup>
    </div>
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,x,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <RadioGroup defaultValue="comfortable">
      <Radio value="default" label="Default" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="compact" label="Compact" />
    </RadioGroup>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var R,g,j;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
}`,...(j=(g=t.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,h,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <RadioGroup defaultValue="error-selected" isError>
      <Radio value="error-unselected" label="Unselected error" />
      <Radio value="error-selected" label="Selected error" />
    </RadioGroup>
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var V,z,G;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <RadioGroup defaultValue="disabled-selected">
      <Radio value="disabled-unselected" label="Disabled unselected" disabled />
      <Radio value="disabled-selected" label="Disabled selected" disabled />
    </RadioGroup>
}`,...(G=(z=i.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const M=["Playground","Sizes","WithLabels","Horizontal","ErrorState","Disabled"];export{i as Disabled,d as ErrorState,t as Horizontal,r as Playground,o as Sizes,s as WithLabels,M as __namedExportsOrder,A as default};
