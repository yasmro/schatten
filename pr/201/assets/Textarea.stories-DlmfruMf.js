import{j as e}from"./iframe-DY2jKDyi.js";import{T as r}from"./Textarea-DNSXXup1.js";import"./preload-helper-_tVC99vM.js";import"./field-Bf9r46ED.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const N={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},o={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})},t={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error",rows:3}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error",rows:3})]})};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,n,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,x,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,f,h;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,y,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled isError placeholder="Disabled + error" rows={3} />
      <Textarea disabled isError defaultValue="Disabled + error" rows={3} />
    </div>
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const V=["Playground","Sizes","ErrorState","Disabled","DisabledWithError"];export{l as Disabled,t as DisabledWithError,o as ErrorState,a as Playground,s as Sizes,V as __namedExportsOrder,N as default};
