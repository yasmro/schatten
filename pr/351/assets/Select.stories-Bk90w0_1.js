import{j as e}from"./iframe-DNa5UZFp.js";import{a as t,S as r,b as a,c,d as l,e as j,f as b,g as v}from"./Select-koLpzCpi.js";import"./preload-helper-D-ggOvPk.js";import"./index-fLEBwVEp.js";import"./index-DWCgONTX.js";import"./index-zKFmDJsC.js";import"./index-Bk3jf5Pd.js";import"./index-YmTRMUfU.js";import"./index-SrpDFKqk.js";import"./index-COCrO2i9.js";import"./index-DTw9G3uC.js";import"./Combination-UGLIT2HS.js";import"./index-Dhf5iEr8.js";import"./index-CwaCxTxX.js";import"./index-C89z6amL.js";import"./index-LwCwEwm7.js";import"./index-BZmw76E6.js";import"./field-57YF6V-0.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./chevron-up-DhaPjQ5s.js";import"./createLucideIcon-CKfr9WdW.js";import"./check-Cw1J7rkP.js";const H={title:"Components/lv1/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the select trigger.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the select trigger in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the select and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},decorators:[s=>e.jsx("div",{className:"w-56",children:e.jsx(s,{})})]},i={name:"Playground",args:{size:"md",isError:!1,disabled:!1},render:s=>e.jsxs(r,{children:[e.jsx(t,{...s,children:e.jsx(a,{placeholder:"Select a fruit"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",children:"Grape"}),e.jsx(l,{value:"orange",children:"Orange"})]})]})},d={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{size:"sm",children:e.jsx(a,{placeholder:"Small"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(t,{size:"md",children:e.jsx(a,{placeholder:"Medium"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(t,{size:"lg",children:e.jsx(a,{placeholder:"Large"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},p={name:"With Groups",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Select a food"})}),e.jsxs(c,{children:[e.jsxs(j,{children:[e.jsx(b,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"})]}),e.jsx(v,{}),e.jsxs(j,{children:[e.jsx(b,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",children:"Broccoli"}),e.jsx(l,{value:"spinach",children:"Spinach"})]})]})]})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{isError:!0,children:e.jsx(a,{placeholder:"Error state"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{defaultValue:"apple",children:[e.jsx(t,{isError:!0,children:e.jsx(a,{})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},S={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Disabled"})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(t,{children:e.jsx(a,{})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},u={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(t,{isError:!0,children:e.jsx(a,{placeholder:"Disabled + error"})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(t,{isError:!0,children:e.jsx(a,{})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},h={name:"Many Items",render:()=>{const s=Array.from({length:50},(o,I)=>`Item ${I+1}`);return e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"50 items"})}),e.jsx(c,{children:s.map(o=>e.jsx(l,{value:o,children:o},o))})]})}},g={name:"Long Text",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Select an option"})}),e.jsxs(c,{children:[e.jsx(l,{value:"short",children:"Short"}),e.jsx(l,{value:"medium",children:"A medium length option label"}),e.jsx(l,{value:"long",children:"This is a very long option label that might cause layout issues in the dropdown"}),e.jsx(l,{value:"longer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})]})]})},x={name:"Disabled Items",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Some items disabled"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:!0,children:"Banana (sold out)"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",disabled:!0,children:"Grape (sold out)"})]})]})},n={name:"Open Content (VRT)",parameters:{layout:"padded",docs:{disable:!0}},render:()=>e.jsxs(r,{defaultOpen:!0,children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Choose"})}),e.jsxs(c,{children:[e.jsxs(j,{children:[e.jsx(b,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]}),e.jsx(v,{}),e.jsxs(j,{children:[e.jsx(b,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",disabled:!0,children:"Broccoli (sold out)"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    isError: false,
    disabled: false
  },
  render: args => <Select>
      <SelectTrigger {...args}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Groups',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger isError>
          <SelectValue placeholder="Error state" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="apple">
        <SelectTrigger isError>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger isError>
          <SelectValue placeholder="Disabled + error" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger isError>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Many Items',
  render: () => {
    const items = Array.from({
      length: 50
    }, (_, i) => \`Item \${i + 1}\`);
    return <Select>
        <SelectTrigger>
          <SelectValue placeholder="50 items" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => <SelectItem key={item} value={item}>
              {item}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Long Text',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="short">Short</SelectItem>
        <SelectItem value="medium">A medium length option label</SelectItem>
        <SelectItem value="long">
          This is a very long option label that might cause layout issues in the dropdown
        </SelectItem>
        <SelectItem value="longer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </SelectItem>
      </SelectContent>
    </Select>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Items',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Some items disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (sold out)
        </SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape" disabled>
          Grape (sold out)
        </SelectItem>
      </SelectContent>
    </Select>
}`,...x.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Open Content (VRT)',
  parameters: {
    layout: 'padded',
    docs: {
      disable: true
    }
  },
  render: () => <Select defaultOpen>
      <SelectTrigger>
        <SelectValue placeholder="Choose" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli" disabled>
            Broccoli (sold out)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...n.parameters?.docs?.source},description:{story:`Content sub-element coverage in one frame — pins \`defaultOpen\` so VRT
can capture the portaled content (label / item / separator / group /
disabled item / item-indicator) in a single screenshot.

The other stories above (Sizes / ErrorState / Disabled / …) keep
their trigger-only focus on purpose — each one verifies a specific
axis (size, error, disabled), and overloading them with content
would blur the visual diff.

Hidden from Docs (\`docs.disable: true\`) because Radix portals the
open content into \`document.body\`, which on the docs page floats
over the surrounding story descriptions and confuses readers. The
story is still mounted for the dedicated story URL — which is what
VRT targets — so this only suppresses the docs-tab rendering.`,...n.parameters?.docs?.description}}};const U=["Playground","Sizes","WithGroups","ErrorState","Disabled","DisabledWithError","ManyItems","LongText","DisabledItems","OpenContent"];export{S as Disabled,x as DisabledItems,u as DisabledWithError,m as ErrorState,g as LongText,h as ManyItems,n as OpenContent,i as Playground,d as Sizes,p as WithGroups,U as __namedExportsOrder,H as default};
