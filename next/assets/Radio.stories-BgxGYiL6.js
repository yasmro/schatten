import{j as e}from"./iframe-Dllt5NyN.js";import{a,R as r}from"./Radio-B9c05CnB.js";import"./preload-helper-By2mdhBQ.js";import"./index-CZ-ZmyOc.js";import"./index-Dz8woXnb.js";import"./index-CjcYrqbI.js";import"./index-D47ZgGsI.js";import"./index-BnGtCzXK.js";import"./index-O5T108oG.js";import"./index-BlNyj16B.js";import"./index-CA0AfZMg.js";import"./index-CO3QitYG.js";import"./index-Bn_sOnIn.js";import"./field-DQJ9PBCM.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css              */const Q={title:"Components/lv1/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the radio button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the radio. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},value:{description:"The value of the radio item.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Displays the radio in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the radio and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l={name:"Playground",args:{size:"md",label:"Option A",value:"a"},decorators:[W=>e.jsx(r,{defaultValue:"a",children:e.jsx(W,{})})]},o={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{defaultValue:"sm",children:e.jsx(a,{size:"sm",value:"sm",label:"Small"})}),e.jsx(r,{defaultValue:"md",children:e.jsx(a,{size:"md",value:"md",label:"Medium"})}),e.jsx(r,{defaultValue:"lg",children:e.jsx(a,{size:"lg",value:"lg",label:"Large"})})]})},s={name:"With Labels",render:()=>e.jsxs(r,{defaultValue:"comfortable",children:[e.jsx(a,{value:"default",label:"Default"}),e.jsx(a,{value:"comfortable",label:"Comfortable"}),e.jsx(a,{value:"compact",label:"Compact"})]})},d={name:"Horizontal",render:()=>e.jsxs(r,{defaultValue:"option-1",className:"flex flex-row gap-4",children:[e.jsx(a,{value:"option-1",label:"Option 1"}),e.jsx(a,{value:"option-2",label:"Option 2"}),e.jsx(a,{value:"option-3",label:"Option 3"})]})},t={name:"Error",render:()=>e.jsxs(r,{defaultValue:"error-selected",isError:!0,children:[e.jsx(a,{value:"error-unselected",label:"Unselected error"}),e.jsx(a,{value:"error-selected",label:"Selected error"})]})},i={name:"Disabled",render:()=>e.jsxs(r,{defaultValue:"disabled-selected",children:[e.jsx(a,{value:"disabled-unselected",label:"Disabled unselected",disabled:!0}),e.jsx(a,{value:"disabled-selected",label:"Disabled selected",disabled:!0})]})},u={name:"Disabled with error",render:()=>e.jsxs(r,{defaultValue:"disabled-error-selected",isError:!0,disabled:!0,children:[e.jsx(a,{value:"disabled-error-unselected",label:"Disabled + error, unselected"}),e.jsx(a,{value:"disabled-error-selected",label:"Disabled + error, selected"})]})};var c,m,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Option A',
    value: 'a'
  },
  decorators: [Story => <RadioGroup defaultValue="a">
        <Story />
      </RadioGroup>]
}`,...(n=(m=l.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,b,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,v,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <RadioGroup defaultValue="comfortable">
      <Radio value="default" label="Default" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="compact" label="Compact" />
    </RadioGroup>
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var g,j,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
}`,...(h=(j=d.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var y,V,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <RadioGroup defaultValue="error-selected" isError>
      <Radio value="error-unselected" label="Unselected error" />
      <Radio value="error-selected" label="Selected error" />
    </RadioGroup>
}`,...(D=(V=t.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var S,G,z;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <RadioGroup defaultValue="disabled-selected">
      <Radio value="disabled-unselected" label="Disabled unselected" disabled />
      <Radio value="disabled-selected" label="Disabled selected" disabled />
    </RadioGroup>
}`,...(z=(G=i.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var E,O,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <RadioGroup defaultValue="disabled-error-selected" isError disabled>
      <Radio value="disabled-error-unselected" label="Disabled + error, unselected" />
      <Radio value="disabled-error-selected" label="Disabled + error, selected" />
    </RadioGroup>
}`,...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const X=["Playground","Sizes","WithLabels","Horizontal","ErrorState","Disabled","DisabledWithError"];export{i as Disabled,u as DisabledWithError,t as ErrorState,d as Horizontal,l as Playground,o as Sizes,s as WithLabels,X as __namedExportsOrder,Q as default};
