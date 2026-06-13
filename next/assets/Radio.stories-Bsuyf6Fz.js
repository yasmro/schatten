import{j as e}from"./iframe-BJiU3g4I.js";import{a,R as r}from"./Radio-6zjPaGvb.js";import"./preload-helper-CrztxVc4.js";import"./index-kZL7Xe41.js";import"./index-BfxN6RJc.js";import"./index-DGZejLtC.js";import"./index-Bbg_FXih.js";import"./index-C4G9RzeU.js";import"./index-Br_gC1iQ.js";import"./index-Dgvl4dnV.js";import"./index-CAQIIZy3.js";import"./index-CUV0_SlA.js";import"./index-BAHJxRVn.js";import"./index-D3i71z5p.js";import"./field-B2XHq2OZ.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */const O={title:"Components/lv1/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the radio button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the radio. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},value:{description:"The value of the radio item.",control:"text",table:{type:{summary:"string"}}},isError:{description:"Displays the radio in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the radio and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l={name:"Playground",args:{size:"md",label:"Option A",value:"a"},decorators:[c=>e.jsx(r,{defaultValue:"a",children:e.jsx(c,{})})]},o={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{defaultValue:"sm",children:e.jsx(a,{size:"sm",value:"sm",label:"Small"})}),e.jsx(r,{defaultValue:"md",children:e.jsx(a,{size:"md",value:"md",label:"Medium"})}),e.jsx(r,{defaultValue:"lg",children:e.jsx(a,{size:"lg",value:"lg",label:"Large"})})]})},s={name:"With Labels",render:()=>e.jsxs(r,{defaultValue:"comfortable",children:[e.jsx(a,{value:"default",label:"Default"}),e.jsx(a,{value:"comfortable",label:"Comfortable"}),e.jsx(a,{value:"compact",label:"Compact"})]})},d={name:"Horizontal",render:()=>e.jsxs(r,{defaultValue:"option-1",className:"flex flex-row gap-4",children:[e.jsx(a,{value:"option-1",label:"Option 1"}),e.jsx(a,{value:"option-2",label:"Option 2"}),e.jsx(a,{value:"option-3",label:"Option 3"})]})},t={name:"Error",render:()=>e.jsxs(r,{defaultValue:"error-selected",isError:!0,children:[e.jsx(a,{value:"error-unselected",label:"Unselected error"}),e.jsx(a,{value:"error-selected",label:"Selected error"})]})},i={name:"Disabled",render:()=>e.jsxs(r,{defaultValue:"disabled-selected",children:[e.jsx(a,{value:"disabled-unselected",label:"Disabled unselected",disabled:!0}),e.jsx(a,{value:"disabled-selected",label:"Disabled selected",disabled:!0})]})},u={name:"Disabled with error",render:()=>e.jsxs(r,{defaultValue:"disabled-error-selected",isError:!0,disabled:!0,children:[e.jsx(a,{value:"disabled-error-unselected",label:"Disabled + error, unselected"}),e.jsx(a,{value:"disabled-error-selected",label:"Disabled + error, selected"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Option A',
    value: 'a'
  },
  decorators: [Story => <RadioGroup defaultValue="a">
        <Story />
      </RadioGroup>]
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <RadioGroup defaultValue="comfortable">
      <Radio value="default" label="Default" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="compact" label="Compact" />
    </RadioGroup>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <RadioGroup defaultValue="error-selected" isError>
      <Radio value="error-unselected" label="Unselected error" />
      <Radio value="error-selected" label="Selected error" />
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <RadioGroup defaultValue="disabled-selected">
      <Radio value="disabled-unselected" label="Disabled unselected" disabled />
      <Radio value="disabled-selected" label="Disabled selected" disabled />
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <RadioGroup defaultValue="disabled-error-selected" isError disabled>
      <Radio value="disabled-error-unselected" label="Disabled + error, unselected" />
      <Radio value="disabled-error-selected" label="Disabled + error, selected" />
    </RadioGroup>
}`,...u.parameters?.docs?.source}}};const L=["Playground","Sizes","WithLabels","Horizontal","ErrorState","Disabled","DisabledWithError"];export{i as Disabled,u as DisabledWithError,t as ErrorState,d as Horizontal,l as Playground,o as Sizes,s as WithLabels,L as __namedExportsOrder,O as default};
