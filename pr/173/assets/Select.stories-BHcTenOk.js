import{j as e}from"./iframe-QJvpsFVB.js";import{a as t,S as a,b as r,c,d as l,e as g,f as x,g as $}from"./Select-CzrsTrFJ.js";import"./preload-helper-0LWNiECT.js";import"./index-C95DIhrS.js";import"./index-BRzzsRHw.js";import"./index-DcaQmiuS.js";import"./index-CBBt-hNa.js";import"./index-x1dL7ec3.js";import"./index-FXWMpeMI.js";import"./index-D1IZCLjO.js";import"./Combination-jWP-GGth.js";import"./index-DijImkbU.js";import"./index-nbkHr80P.js";import"./index-Bwlr85tm.js";import"./index-Coetvt7j.js";import"./index-K3kWSzJ4.js";import"./field-D1Y86iKa.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./chevron-up-aSwpleJn.js";const de={title:"Components/lv1/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the select trigger.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the select trigger in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the select and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},decorators:[s=>e.jsx("div",{className:"w-56",children:e.jsx(s,{})})]},o={name:"Playground",args:{size:"md",isError:!1,disabled:!1},render:s=>e.jsxs(a,{children:[e.jsx(t,{...s,children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",children:"Grape"}),e.jsx(l,{value:"orange",children:"Orange"})]})]})},i={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(a,{children:[e.jsx(t,{size:"sm",children:e.jsx(r,{placeholder:"Small"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(a,{children:[e.jsx(t,{size:"md",children:e.jsx(r,{placeholder:"Medium"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(a,{children:[e.jsx(t,{size:"lg",children:e.jsx(r,{placeholder:"Large"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},d={name:"With Groups",render:()=>e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(r,{placeholder:"Select a food"})}),e.jsxs(c,{children:[e.jsxs(g,{children:[e.jsx(x,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"})]}),e.jsx($,{}),e.jsxs(g,{children:[e.jsx(x,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",children:"Broccoli"}),e.jsx(l,{value:"spinach",children:"Spinach"})]})]})]})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(a,{children:[e.jsx(t,{isError:!0,children:e.jsx(r,{placeholder:"Error state"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(a,{defaultValue:"apple",children:[e.jsx(t,{isError:!0,children:e.jsx(r,{})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},p={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(a,{disabled:!0,children:[e.jsx(t,{children:e.jsx(r,{placeholder:"Disabled"})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(a,{disabled:!0,defaultValue:"apple",children:[e.jsx(t,{children:e.jsx(r,{})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},S={name:"Many Items",render:()=>{const s=Array.from({length:50},(n,F)=>`Item ${F+1}`);return e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(r,{placeholder:"50 items"})}),e.jsx(c,{children:s.map(n=>e.jsx(l,{value:n,children:n},n))})]})}},u={name:"Long Text",render:()=>e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(r,{placeholder:"Select an option"})}),e.jsxs(c,{children:[e.jsx(l,{value:"short",children:"Short"}),e.jsx(l,{value:"medium",children:"A medium length option label"}),e.jsx(l,{value:"long",children:"This is a very long option label that might cause layout issues in the dropdown"}),e.jsx(l,{value:"longer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})]})]})},h={name:"Disabled Items",render:()=>e.jsxs(a,{children:[e.jsx(t,{children:e.jsx(r,{placeholder:"Some items disabled"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:!0,children:"Banana (sold out)"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",disabled:!0,children:"Grape (sold out)"})]})]})};var j,v,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,y,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,T,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var V,B,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var z,G,L;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(G=p.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var D,N,M;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(N=S.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var w,P,W;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,O,q;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(O=h.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const me=["Playground","Sizes","WithGroups","ErrorState","Disabled","ManyItems","LongText","DisabledItems"];export{p as Disabled,h as DisabledItems,m as ErrorState,u as LongText,S as ManyItems,o as Playground,i as Sizes,d as WithGroups,me as __namedExportsOrder,de as default};
