import{j as e}from"./iframe-dIcK6U3O.js";import{a,S as r,b as t,c as s,d as l,e as x,f as j,g as v}from"./Select-C32O94ps.js";import"./preload-helper-DdCrNAmi.js";import"./index-DAfXDEQY.js";import"./index-By_IOi18.js";import"./index-DjJFVsVw.js";import"./index-BBz9hnmv.js";import"./index-CVV0ZG2e.js";import"./index-wL557m23.js";import"./index-BUpsN6nb.js";import"./index-CO5oFGwq.js";import"./index-DlLvqJ6W.js";import"./floating-ui.react-dom-D2u-NC5D.js";import"./index-D6qldoN3.js";import"./Combination-7Umnch-s.js";import"./index-D3myNZkJ.js";import"./index-PdyDXB4y.js";import"./index-Cf2OBQXR.js";import"./index-B17N6rt7.js";import"./field-ChMtC4Cg.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./chevron-up-Dn0AXitc.js";import"./createLucideIcon-m1XQqPRs.js";import"./check-ClArdeSo.js";const U={title:"Components/lv1/Select",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the select trigger.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the select trigger in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the select and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},decorators:[c=>e.jsx("div",{className:"w-56",children:e.jsx(c,{})})]},o={name:"Playground",args:{size:"md",isError:!1,disabled:!1},render:c=>e.jsxs(r,{children:[e.jsx(a,{...c,children:e.jsx(t,{placeholder:"Select a fruit"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",children:"Grape"}),e.jsx(l,{value:"orange",children:"Orange"})]})]})},d={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(a,{size:"sm","aria-label":"Small select",children:e.jsx(t,{placeholder:"Small"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(a,{size:"md","aria-label":"Medium select",children:e.jsx(t,{placeholder:"Medium"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(a,{size:"lg","aria-label":"Large select",children:e.jsx(t,{placeholder:"Large"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},p={name:"With Groups",render:()=>e.jsxs(r,{children:[e.jsx(a,{"aria-label":"Food",children:e.jsx(t,{placeholder:"Select a food"})}),e.jsxs(s,{children:[e.jsxs(x,{children:[e.jsx(j,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"})]}),e.jsx(v,{}),e.jsxs(x,{children:[e.jsx(j,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",children:"Broccoli"}),e.jsx(l,{value:"spinach",children:"Spinach"})]})]})]})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(a,{isError:!0,"aria-label":"Error state",children:e.jsx(t,{placeholder:"Error state"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{defaultValue:"apple",children:[e.jsx(a,{isError:!0,"aria-label":"Error state with value",children:e.jsx(t,{})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},u={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(a,{"aria-label":"Disabled",children:e.jsx(t,{placeholder:"Disabled"})}),e.jsx(s,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(a,{"aria-label":"Disabled with value",children:e.jsx(t,{})}),e.jsx(s,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},S={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(a,{isError:!0,"aria-label":"Disabled with error",children:e.jsx(t,{placeholder:"Disabled + error"})}),e.jsx(s,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(a,{isError:!0,"aria-label":"Disabled error with value",children:e.jsx(t,{})}),e.jsx(s,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},h={name:"Many Items",render:()=>{const c=Array.from({length:50},(n,I)=>`Item ${I+1}`);return e.jsxs(r,{children:[e.jsx(a,{"aria-label":"Items",children:e.jsx(t,{placeholder:"50 items"})}),e.jsx(s,{children:c.map(n=>e.jsx(l,{value:n,children:n},n))})]})}},g={name:"Long Text",render:()=>e.jsxs(r,{children:[e.jsx(a,{"aria-label":"Option",children:e.jsx(t,{placeholder:"Select an option"})}),e.jsxs(s,{children:[e.jsx(l,{value:"short",children:"Short"}),e.jsx(l,{value:"medium",children:"A medium length option label"}),e.jsx(l,{value:"long",children:"This is a very long option label that might cause layout issues in the dropdown"}),e.jsx(l,{value:"longer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})]})]})},b={name:"Disabled Items",render:()=>e.jsxs(r,{children:[e.jsx(a,{"aria-label":"Availability",children:e.jsx(t,{placeholder:"Some items disabled"})}),e.jsxs(s,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:!0,children:"Banana (sold out)"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",disabled:!0,children:"Grape (sold out)"})]})]})},i={name:"Open Content (VRT)",parameters:{layout:"padded",docs:{disable:!0},a11y:{config:{rules:[{id:"aria-hidden-focus",enabled:!1}]}}},render:()=>e.jsxs(r,{defaultOpen:!0,children:[e.jsx(a,{"aria-label":"Choose",children:e.jsx(t,{placeholder:"Choose"})}),e.jsxs(s,{children:[e.jsxs(x,{children:[e.jsx(j,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]}),e.jsx(v,{}),e.jsxs(x,{children:[e.jsx(j,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",disabled:!0,children:"Broccoli (sold out)"})]})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4">
      {/* role="combobox" gets no accessible name from its content, so every
       * standalone trigger carries aria-label (the real-usage alternative is
       * a wrapping <Field label> — see SelectTriggerProps TSDoc) (#345). */}
      <Select>
        <SelectTrigger size="sm" aria-label="Small select">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md" aria-label="Medium select">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" aria-label="Large select">
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
      <SelectTrigger aria-label="Food">
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
        <SelectTrigger isError aria-label="Error state">
          <SelectValue placeholder="Error state" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="apple">
        <SelectTrigger isError aria-label="Error state with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger aria-label="Disabled">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger aria-label="Disabled with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger isError aria-label="Disabled with error">
          <SelectValue placeholder="Disabled + error" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger isError aria-label="Disabled error with value">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Many Items',
  render: () => {
    const items = Array.from({
      length: 50
    }, (_, i) => \`Item \${i + 1}\`);
    return <Select>
        <SelectTrigger aria-label="Items">
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
      <SelectTrigger aria-label="Option">
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Items',
  render: () => <Select>
      <SelectTrigger aria-label="Availability">
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
}`,...b.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Open Content (VRT)',
  parameters: {
    layout: 'padded',
    docs: {
      disable: true
    },
    // Known Radix behavior, not fixable from Schatten: while open, Radix
    // hides the rest of the page via aria-hidden but leaves the trigger
    // focusable (focus is trapped in the listbox, so there is no real
    // keyboard escape). Mirrors the same disable in Select.vrt.spec.ts.
    a11y: {
      config: {
        rules: [{
          id: 'aria-hidden-focus',
          enabled: false
        }]
      }
    }
  },
  render: () => <Select defaultOpen>
      <SelectTrigger aria-label="Choose">
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
}`,...i.parameters?.docs?.source},description:{story:`Content sub-element coverage in one frame — pins \`defaultOpen\` so VRT
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
VRT targets — so this only suppresses the docs-tab rendering.`,...i.parameters?.docs?.description}}};const J=["Playground","Sizes","WithGroups","ErrorState","Disabled","DisabledWithError","ManyItems","LongText","DisabledItems","OpenContent"];export{u as Disabled,b as DisabledItems,S as DisabledWithError,m as ErrorState,g as LongText,h as ManyItems,i as OpenContent,o as Playground,d as Sizes,p as WithGroups,J as __namedExportsOrder,U as default};
