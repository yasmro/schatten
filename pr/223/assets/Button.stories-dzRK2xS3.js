import{j as e}from"./iframe-3_6_EP7f.js";import{B as t}from"./Button-Dk5-vimh.js";import{X as q}from"./x-BdIWmqBL.js";import{T as p}from"./trash-2--NWUhMvD.js";import{c as a}from"./createLucideIcon-D9TkcMpj.js";import{S as X}from"./search-B6EqSf6I.js";import{A as H}from"./arrow-right-DR5tu2Vy.js";import"./preload-helper-ByYzC9is.js";import"./index-GSk60e_Y.js";import"./index-D7QheAyj.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-DYtSITCn.js";/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Y=a("chevron-left",Q);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],F=a("chevron-right",U);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],G=a("download",W);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],J=a("external-link",Z);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],x=a("plus",ee);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],K=a("send",te),ve={title:"Components/lv1/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["primary","secondary","tertiary","inverted","destructive","link"],table:{type:{summary:'"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Search}`).",control:"select",options:["ArrowRight","ChevronLeft","ChevronRight","Download","ExternalLink","Plus","Search","Send","Trash2","X"],mapping:{ArrowRight:H,ChevronLeft:Y,ChevronRight:F,Download:G,ExternalLink:J,Plus:x,Search:X,Send:K,Trash2:p,X:q},table:{type:{summary:"LucideIcon"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Shows a loading spinner and disables the button.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the button and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Label text or content inside the button.",control:"text",table:{type:{summary:"ReactNode"}}}}},n={name:"Playground",args:{variant:"primary",size:"md",children:"Button"}},r={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 rounded-lg bg-solid p-4",children:[e.jsx(t,{variant:"inverted",children:"Inverted"}),e.jsx(t,{variant:"inverted",icon:q,"aria-label":"Close"})]})]})},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{icon:x,"aria-label":"Add"})]})},i={name:"Icons",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:X,children:"Search"}),e.jsx(t,{icon:H,iconPosition:"end",children:"Next"}),e.jsx(t,{icon:x,"aria-label":"Add"}),e.jsx(t,{variant:"destructive",icon:p,children:"Delete"})]})},o={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:Y,children:"Back"}),e.jsx(t,{icon:F,iconPosition:"end",children:"Next"}),e.jsx(t,{icon:G,size:"sm",children:"Download"}),e.jsx(t,{icon:K,size:"lg",iconPosition:"end",children:"Send"})]})},d={name:"Loading",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{isLoading:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",isLoading:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",isLoading:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",isLoading:!0,children:"Destructive"})]})},l={name:"Link",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 text-base text-foreground leading-relaxed",children:[e.jsxs("p",{children:["This is a paragraph with a ",e.jsx(t,{variant:"link",children:"link button"})," embedded inline. It behaves like a text link but retains button semantics for accessibility."]}),e.jsxs("p",{children:["You can also add an icon:"," ",e.jsx(t,{variant:"link",icon:J,iconPosition:"end",children:"external link"})," ","to indicate navigation."]})]})},c={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{disabled:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",disabled:!0,icon:p,children:"Delete"}),e.jsxs("p",{className:"text-base text-foreground",children:["Disabled"," ",e.jsx(t,{variant:"link",disabled:!0,children:"link button"})," ","in text."]})]})},u={name:"Inverted on saturated surfaces",render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:[{label:"error",cls:"bg-error text-error-foreground"},{label:"success",cls:"bg-success text-success-foreground"},{label:"warning",cls:"bg-warning text-warning-foreground"},{label:"info",cls:"bg-info text-info-foreground"},{label:"destructive",cls:"bg-destructive text-destructive-foreground"},{label:"solid (brand)",cls:"bg-solid text-solid-foreground"}].map(m=>e.jsxs("div",{className:`flex items-center justify-between gap-4 px-4 py-3 rounded ${m.cls}`,children:[e.jsxs("span",{className:"text-sm font-medium",children:["On ",m.label," surface"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:"inverted",size:"sm",children:"Enabled"}),e.jsx(t,{variant:"inverted",size:"sm",disabled:!0,children:"Disabled"})]})]},m.label))})};var v,g,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* \`inverted\` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon={X} aria-label="Close" />
      </div>
    </div>
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,j,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon={Plus} aria-label="Add" />
    </div>
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var S,N,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon={Search}>Search</Button>
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Plus} aria-label="Add" />
      <Button variant="destructive" icon={Trash2}>
        Delete
      </Button>
    </div>
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,P,z;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon={ChevronLeft}>Back</Button>
      <Button icon={ChevronRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Download} size="sm">
        Download
      </Button>
      <Button icon={Send} size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var D,I,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var T,_,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon={ExternalLink} iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,M,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon={Trash2}>
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var E,$,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Inverted on saturated surfaces',
  render: () => <div className="flex flex-col gap-3">
      {[{
      label: 'error',
      cls: 'bg-error text-error-foreground'
    }, {
      label: 'success',
      cls: 'bg-success text-success-foreground'
    }, {
      label: 'warning',
      cls: 'bg-warning text-warning-foreground'
    }, {
      label: 'info',
      cls: 'bg-info text-info-foreground'
    }, {
      label: 'destructive',
      cls: 'bg-destructive text-destructive-foreground'
    }, {
      label: 'solid (brand)',
      cls: 'bg-solid text-solid-foreground'
    }].map(s => <div key={s.label} className={\`flex items-center justify-between gap-4 px-4 py-3 rounded \${s.cls}\`}>
          <span className="text-sm font-medium">On {s.label} surface</span>
          <div className="flex gap-2">
            <Button variant="inverted" size="sm">
              Enabled
            </Button>
            <Button variant="inverted" size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>)}
    </div>
}`,...(O=($=u.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const ge=["Playground","AllVariants","Sizes","Icons","IconPositions","Loading","LinkVariant","Disabled","InvertedOnSaturatedSurfaces"];export{r as AllVariants,c as Disabled,o as IconPositions,i as Icons,u as InvertedOnSaturatedSurfaces,l as LinkVariant,d as Loading,n as Playground,s as Sizes,ge as __namedExportsOrder,ve as default};
