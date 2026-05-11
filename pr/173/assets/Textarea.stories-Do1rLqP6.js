import{j as e}from"./iframe-QJvpsFVB.js";import{T as r}from"./Textarea-sN5iGYz3.js";import"./preload-helper-0LWNiECT.js";import"./field-D1Y86iKa.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const S={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})};var t,d,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,n,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,g,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const j=["Playground","Sizes","ErrorState","Disabled"];export{l as Disabled,o as ErrorState,a as Playground,s as Sizes,j as __namedExportsOrder,S as default};
