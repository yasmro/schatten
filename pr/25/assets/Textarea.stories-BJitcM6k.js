import{r as j,j as e}from"./iframe-B4sYvzm4.js";import{c as S,a as T}from"./index-DiZijfAW.js";import"./preload-helper-IPI4JkWX.js";const N=S("w-full border bg-transparent text-foreground transition-colors duration-200 placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed disabled:opacity-50",{variants:{size:{sm:"px-3 py-2 text-xs",md:"px-4 py-2.5 text-sm",lg:"px-5 py-3 text-base"}},defaultVariants:{size:"md"}}),r=j.forwardRef(({className:l,size:w,isError:i=!1,disabled:h,...z},E)=>e.jsx("textarea",{className:T(N({size:w}),i?"border-destructive bg-destructive-subtle focus-visible:ring-destructive":"border-border-strong",l),ref:E,disabled:h,"aria-invalid":i||void 0,...z}));r.displayName="Textarea";try{r.displayName="Textarea",r.__docgenInfo={description:"",displayName:"Textarea",props:{isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}}}}}catch{}const P={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with destructive border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},t={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},o={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})};var d,n,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const I=["Playground","Sizes","ErrorState","Disabled"];export{o as Disabled,t as ErrorState,a as Playground,s as Sizes,I as __namedExportsOrder,P as default};
