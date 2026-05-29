import{j as e}from"./iframe-BPJG4Vbj.js";import{a as t,S as r,b as a,c,d as l,e as j,f as b,g as Y}from"./Select-iTXfHG5_.js";import"./preload-helper-DWrUfoT4.js";import"./index-BAwK_8jn.js";import"./index-BXToNJ5Q.js";import"./index-hChbGpk8.js";import"./index-DPQjMVdE.js";import"./index-BaEt503H.js";import"./index-yv--I3br.js";import"./index-DwJxGOd7.js";import"./Combination-B38vS-yA.js";import"./index-Dko69f4s.js";import"./index-CutRJNYy.js";import"./index-C0YhiWsk.js";import"./index-BJIXoeXH.js";import"./index-DanfsK0Y.js";import"./field-sSK95iSL.js";import"./utils-DclmTqRz.js";import"./index-DQHfBcw3.js";/* empty css               */import"./chevron-up-B-UlEMMl.js";import"./createLucideIcon-BB5HAukE.js";import"./check-Dv9HF8D_.js";const ye={title:"Components/lv1/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the select trigger.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the select trigger in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the select and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},decorators:[s=>e.jsx("div",{className:"w-56",children:e.jsx(s,{})})]},i={name:"Playground",args:{size:"md",isError:!1,disabled:!1},render:s=>e.jsxs(r,{children:[e.jsx(t,{...s,children:e.jsx(a,{placeholder:"Select a fruit"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",children:"Grape"}),e.jsx(l,{value:"orange",children:"Orange"})]})]})},d={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{size:"sm",children:e.jsx(a,{placeholder:"Small"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(t,{size:"md",children:e.jsx(a,{placeholder:"Medium"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{children:[e.jsx(t,{size:"lg",children:e.jsx(a,{placeholder:"Large"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},p={name:"With Groups",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Select a food"})}),e.jsxs(c,{children:[e.jsxs(j,{children:[e.jsx(b,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"}),e.jsx(l,{value:"cherry",children:"Cherry"})]}),e.jsx(Y,{}),e.jsxs(j,{children:[e.jsx(b,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",children:"Broccoli"}),e.jsx(l,{value:"spinach",children:"Spinach"})]})]})]})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{isError:!0,children:e.jsx(a,{placeholder:"Error state"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]}),e.jsxs(r,{defaultValue:"apple",children:[e.jsx(t,{isError:!0,children:e.jsx(a,{})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]})]})]})},S={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Disabled"})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(t,{children:e.jsx(a,{})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},u={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{disabled:!0,children:[e.jsx(t,{isError:!0,children:e.jsx(a,{placeholder:"Disabled + error"})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]}),e.jsxs(r,{disabled:!0,defaultValue:"apple",children:[e.jsx(t,{isError:!0,children:e.jsx(a,{})}),e.jsx(c,{children:e.jsx(l,{value:"apple",children:"Apple"})})]})]})},h={name:"Many Items",render:()=>{const s=Array.from({length:50},(o,Z)=>`Item ${Z+1}`);return e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"50 items"})}),e.jsx(c,{children:s.map(o=>e.jsx(l,{value:o,children:o},o))})]})}},g={name:"Long Text",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Select an option"})}),e.jsxs(c,{children:[e.jsx(l,{value:"short",children:"Short"}),e.jsx(l,{value:"medium",children:"A medium length option label"}),e.jsx(l,{value:"long",children:"This is a very long option label that might cause layout issues in the dropdown"}),e.jsx(l,{value:"longer",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})]})]})},x={name:"Disabled Items",render:()=>e.jsxs(r,{children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Some items disabled"})}),e.jsxs(c,{children:[e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",disabled:!0,children:"Banana (sold out)"}),e.jsx(l,{value:"cherry",children:"Cherry"}),e.jsx(l,{value:"grape",disabled:!0,children:"Grape (sold out)"})]})]})},n={name:"Open Content (VRT)",parameters:{layout:"padded",docs:{disable:!0}},render:()=>e.jsxs(r,{defaultOpen:!0,children:[e.jsx(t,{children:e.jsx(a,{placeholder:"Choose"})}),e.jsxs(c,{children:[e.jsxs(j,{children:[e.jsx(b,{children:"Fruits"}),e.jsx(l,{value:"apple",children:"Apple"}),e.jsx(l,{value:"banana",children:"Banana"})]}),e.jsx(Y,{}),e.jsxs(j,{children:[e.jsx(b,{children:"Vegetables"}),e.jsx(l,{value:"carrot",children:"Carrot"}),e.jsx(l,{value:"broccoli",disabled:!0,children:"Broccoli (sold out)"})]})]})]})};var v,I,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var y,C,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var V,A,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,D,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var G,z,w;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(w=(z=S.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var O,N,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var M,W,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(W=h.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,_,k;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(_=g.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var q,$,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var U,J,K,Q,X;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:`Content sub-element coverage in one frame — pins \`defaultOpen\` so VRT
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
VRT targets — so this only suppresses the docs-tab rendering.`,...(X=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const Ce=["Playground","Sizes","WithGroups","ErrorState","Disabled","DisabledWithError","ManyItems","LongText","DisabledItems","OpenContent"];export{S as Disabled,x as DisabledItems,u as DisabledWithError,m as ErrorState,g as LongText,h as ManyItems,n as OpenContent,i as Playground,d as Sizes,p as WithGroups,Ce as __namedExportsOrder,ye as default};
