import{j as e}from"./iframe-BR71pDDo.js";import{T as r}from"./Textarea-D5wUByLk.js";import"./preload-helper-BdHZps5x.js";import"./field-DjjwJueo.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";const p={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...l.parameters?.docs?.source}}};const u=["Playground","Sizes","ErrorState","Disabled"];export{l as Disabled,o as ErrorState,a as Playground,s as Sizes,u as __namedExportsOrder,p as default};
