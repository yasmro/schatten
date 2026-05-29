import{j as e}from"./iframe-VS9RJUnr.js";import{T as r}from"./Textarea-CX3caK_0.js";import"./preload-helper-DskOT1nn.js";import"./field-Bi2O6j4n.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css                 */const A={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the textarea read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},l={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},t={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error",rows:3}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error",rows:3})]})},d={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{readOnly:!0,defaultValue:"Read-only value.",rows:3}),e.jsx(r,{readOnly:!0,defaultValue:`Multi-line read-only content.
Selectable, but not editable.`,rows:4})]})},i={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(r,{defaultValue:"Editable content.",rows:2}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(r,{readOnly:!0,defaultValue:"Read-only content.",rows:2}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled content.",rows:2})]})},n={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-80",children:e.jsx(r,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error",rows:3})})};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,p,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,y,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,g,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var D,j,E;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled isError placeholder="Disabled + error" rows={3} />
      <Textarea disabled isError defaultValue="Disabled + error" rows={3} />
    </div>
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var O,V,R;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly defaultValue="Read-only value." rows={3} />
      <Textarea readOnly defaultValue={'Multi-line read-only content.\\nSelectable, but not editable.'} rows={4} />
    </div>
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var N,T,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-80">
      <div className="text-xs text-foreground-muted">Default</div>
      <Textarea defaultValue="Editable content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Textarea readOnly defaultValue="Read-only content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Textarea disabled defaultValue="Disabled content." rows={2} />
    </div>
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var z,M,P;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} />
    </div>
}`,...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const B=["Playground","Sizes","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{t as Disabled,i as DisabledVsReadOnly,o as DisabledWithError,l as ErrorState,a as Playground,d as ReadOnly,n as ReadOnlyWithError,s as Sizes,B as __namedExportsOrder,A as default};
