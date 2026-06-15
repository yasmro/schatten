import{r as d,j as e}from"./iframe-Cv3iMvIB.js";import{u as X,a as Y,P as j,b as J,R as Q,I as Z,c as P,d as ee,e as A,f as ae}from"./index-DI5_3dOA.js";import{a as N}from"./utils-DclmTqRz.js";import{U as te}from"./user-CJJqPgGC.js";import{L as se}from"./lock-BLFZDIs-.js";import{c as re}from"./createLucideIcon-291MX1IX.js";import"./preload-helper-DEYMk7Xz.js";import"./index-DFCwgH8H.js";import"./index-gWHidC8C.js";const ne=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],oe=re("users",ne);var I="Tabs",[ie]=ae(I,[A]),R=A(),[ce,L]=ie(I),k=d.forwardRef((a,n)=>{const{__scopeTabs:c,value:t,onValueChange:l,defaultValue:u,orientation:r="horizontal",dir:p,activationMode:g="automatic",...v}=a,m=X(p),[s,b]=Y({prop:t,onChange:l,defaultProp:u??"",caller:I});return e.jsx(ce,{scope:c,baseId:J(),value:s,onValueChange:b,orientation:r,dir:m,activationMode:g,children:e.jsx(j.div,{dir:m,"data-orientation":r,...v,ref:n})})});k.displayName=I;var S="TabsList",D=d.forwardRef((a,n)=>{const{__scopeTabs:c,loop:t=!0,...l}=a,u=L(S,c),r=R(c);return e.jsx(Q,{asChild:!0,...r,orientation:u.orientation,dir:u.dir,loop:t,children:e.jsx(j.div,{role:"tablist","aria-orientation":u.orientation,...l,ref:n})})});D.displayName=S;var E="TabsTrigger",z=d.forwardRef((a,n)=>{const{__scopeTabs:c,value:t,disabled:l=!1,...u}=a,r=L(E,c),p=R(c),g=q(r.baseId,t),v=U(r.baseId,t),m=t===r.value;return e.jsx(Z,{asChild:!0,...p,focusable:!l,active:m,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":v,"data-state":m?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:g,...u,ref:n,onMouseDown:P(a.onMouseDown,s=>{!l&&s.button===0&&s.ctrlKey===!1?r.onValueChange(t):s.preventDefault()}),onKeyDown:P(a.onKeyDown,s=>{[" ","Enter"].includes(s.key)&&r.onValueChange(t)}),onFocus:P(a.onFocus,()=>{const s=r.activationMode!=="manual";!m&&!l&&s&&r.onValueChange(t)})})})});z.displayName=E;var F="TabsContent",$=d.forwardRef((a,n)=>{const{__scopeTabs:c,value:t,forceMount:l,children:u,...r}=a,p=L(F,c),g=q(p.baseId,t),v=U(p.baseId,t),m=t===p.value,s=d.useRef(m);return d.useEffect(()=>{const b=requestAnimationFrame(()=>s.current=!1);return()=>cancelAnimationFrame(b)},[]),e.jsx(ee,{present:l||m,children:({present:b})=>e.jsx(j.div,{"data-state":m?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":g,hidden:!b,id:v,tabIndex:0,...r,ref:n,style:{...a.style,animationDuration:s.current?"0s":void 0},children:b&&u})})});$.displayName=F;function q(a,n){return`${a}-trigger-${n}`}function U(a,n){return`${a}-content-${n}`}var O=k,W=D,G=z,H=$;const le=typeof window<"u"?d.useLayoutEffect:d.useEffect,T=d.forwardRef(({className:a,...n},c)=>e.jsx(O,{ref:c,className:N("st-tabs",a),...n}));T.displayName=O.displayName;const h=d.forwardRef(({className:a,children:n,...c},t)=>{const l=d.useRef(null),u=d.useCallback(s=>{l.current=s,typeof t=="function"?t(s):t&&(t.current=s)},[t]),[r,p]=d.useState(null),[g,v]=d.useState(!1);le(()=>{const s=l.current;if(!s)return;const b=()=>{const f=s.querySelector('[role="tab"][data-state="active"]');if(!(f instanceof HTMLElement)){p(null);return}const B=s.getAttribute("data-orientation")==="vertical";p(B?{vertical:!0,offset:f.offsetTop,size:f.offsetHeight}:{vertical:!1,offset:f.offsetLeft,size:f.offsetWidth})};b();const K=requestAnimationFrame(()=>v(!0)),M=new MutationObserver(b);M.observe(s,{attributes:!0,attributeFilter:["data-state","data-orientation"],subtree:!0});const V=new ResizeObserver(b);return V.observe(s),()=>{cancelAnimationFrame(K),M.disconnect(),V.disconnect()}},[]);const m=r?{opacity:1,transition:g?void 0:"none",...r.vertical?{transform:`translateY(${r.offset}px)`,height:`${r.size}px`}:{transform:`translateX(${r.offset}px)`,width:`${r.size}px`}}:{opacity:0};return e.jsxs(W,{ref:u,className:N("st-tabs__list",a),...c,children:[n,e.jsx("span",{className:"st-tabs__indicator","aria-hidden":"true",style:m})]})});h.displayName=W.displayName;const o=d.forwardRef(({className:a,icon:n,children:c,...t},l)=>{const u=n??null;return e.jsxs(G,{ref:l,className:N("st-tabs__trigger",a),...t,children:[u&&e.jsx(u,{className:"st-tabs__trigger-icon","aria-hidden":"true"}),c]})});o.displayName=G.displayName;const i=d.forwardRef(({className:a,...n},c)=>e.jsx(H,{ref:c,className:N("st-tabs__content",a),...n}));i.displayName=H.displayName;try{T.displayName="Tabs",T.__docgenInfo={description:"",displayName:"Tabs",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{orientation:{defaultValue:{value:"'horizontal'"},declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"}],description:"Orientation of the tabs. Controls arrow-key direction (Left/Right for\nhorizontal, Up/Down for vertical) and the list layout. Radix mirrors the\nvalue onto a `data-orientation` attribute that the `.st-tabs__*` rules\nread.",name:"orientation",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"},required:!1,tags:{default:"'horizontal'"},type:{name:"enum",raw:'"horizontal" | "vertical"',value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activationMode:{defaultValue:{value:"'automatic'"},declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"}],description:"Whether a tab activates automatically on focus, or only after the user\nconfirms.\n- `automatic` — moving focus with the arrow keys also selects the tab\n- `manual` — focus moves without selecting; the user confirms with Enter/Space",name:"activationMode",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"},required:!1,tags:{default:"'automatic'"},type:{name:"enum",raw:'"manual" | "automatic"',value:[{value:'"manual"'},{value:'"automatic"'}]}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{i.displayName="TabsContent",i.__docgenInfo={description:"",displayName:"TabsContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:'The tablist. Renders a single sliding `.st-tabs__indicator` that animates to\nthe active tab — measured from the live DOM (the active trigger carries\n`data-state="active"`), so it tracks whichever tab Radix selects regardless\nof controlled / uncontrolled / keyboard-driven changes. The per-trigger\nborder is only a hover preview; the active marker is this indicator.',displayName:"TabsList",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{o.displayName="TabsTrigger",o.__docgenInfo={description:"",displayName:"TabsTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsTriggerProps"}],description:"Leading Lucide icon component, rendered `aria-hidden` before the label.\nImport from `lucide-react` and pass the component directly — e.g.\n`import { User } from 'lucide-react'` then `<TabsTrigger icon={User} />`.",name:"icon",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsTriggerProps"},required:!1,tags:{},type:{name:"LucideIcon"}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const fe={title:"Components/lv1/Tabs",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the tabs. Affects arrow-key direction and layout.",control:"inline-radio",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},activationMode:{description:"Whether a tab activates on focus (automatic) or on Enter/Space (manual).",control:"inline-radio",options:["automatic","manual"],table:{type:{summary:'"automatic" | "manual"'},defaultValue:{summary:"automatic"}}}}},C={name:"Playground",args:{orientation:"horizontal",activationMode:"automatic"},render:a=>e.jsxs(T,{defaultValue:"account",...a,style:{width:360},children:[e.jsxs(h,{children:[e.jsx(o,{value:"account",children:"Account"}),e.jsx(o,{value:"password",children:"Password"}),e.jsx(o,{value:"team",children:"Team"})]}),e.jsx(i,{value:"account",children:"Manage your account details and email."}),e.jsx(i,{value:"password",children:"Change your password here."}),e.jsx(i,{value:"team",children:"Invite and manage team members."})]})},y={name:"Default",render:()=>e.jsxs(T,{defaultValue:"account",style:{width:360},children:[e.jsxs(h,{children:[e.jsx(o,{value:"account",children:"Account"}),e.jsx(o,{value:"password",children:"Password"}),e.jsx(o,{value:"team",children:"Team"})]}),e.jsx(i,{value:"account",children:"Manage your account details and email."}),e.jsx(i,{value:"password",children:"Change your password here."}),e.jsx(i,{value:"team",children:"Invite and manage team members."})]})},x={name:"With Icons",render:()=>e.jsxs(T,{defaultValue:"account",style:{width:400},children:[e.jsxs(h,{children:[e.jsx(o,{value:"account",icon:te,children:"Account"}),e.jsx(o,{value:"password",icon:se,children:"Password"}),e.jsx(o,{value:"team",icon:oe,children:"Team"})]}),e.jsx(i,{value:"account",children:"Manage your account details and email."}),e.jsx(i,{value:"password",children:"Change your password here."}),e.jsx(i,{value:"team",children:"Invite and manage team members."})]})},_={name:"Vertical",render:()=>e.jsxs(T,{defaultValue:"account",orientation:"vertical",style:{width:420},children:[e.jsxs(h,{children:[e.jsx(o,{value:"account",children:"Account"}),e.jsx(o,{value:"password",children:"Password"}),e.jsx(o,{value:"team",children:"Team"})]}),e.jsx(i,{value:"account",children:"Manage your account details and email."}),e.jsx(i,{value:"password",children:"Change your password here."}),e.jsx(i,{value:"team",children:"Invite and manage team members."})]})},w={name:"Disabled Tab",render:()=>e.jsxs(T,{defaultValue:"account",style:{width:360},children:[e.jsxs(h,{children:[e.jsx(o,{value:"account",children:"Account"}),e.jsx(o,{value:"password",disabled:!0,children:"Password"}),e.jsx(o,{value:"team",children:"Team"})]}),e.jsx(i,{value:"account",children:"Manage your account details and email."}),e.jsx(i,{value:"password",children:"Change your password here."}),e.jsx(i,{value:"team",children:"Invite and manage team members."})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    activationMode: 'automatic'
  },
  render: args => <Tabs defaultValue="account" {...args} style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <Tabs defaultValue="account" style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...y.parameters?.docs?.source},description:{story:`The default horizontal "line" treatment — the active tab is underlined with
the foreground color, inactive tabs sit muted.`,...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <Tabs defaultValue="account" style={{
    width: 400
  }}>
      <TabsList>
        <TabsTrigger value="account" icon={User}>
          Account
        </TabsTrigger>
        <TabsTrigger value="password" icon={Lock}>
          Password
        </TabsTrigger>
        <TabsTrigger value="team" icon={Users}>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...x.parameters?.docs?.source},description:{story:"A leading icon can be injected into each tab via the `icon` prop (a Lucide\ncomponent). The icon is `aria-hidden`, so the tab's accessible name stays the\nlabel text.",...x.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <Tabs defaultValue="account" orientation="vertical" style={{
    width: 420
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,..._.parameters?.docs?.source},description:{story:`Vertical orientation places the tablist beside the panels; arrow keys move
Up/Down. The active indicator shifts to the trailing edge of the list.`,..._.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Tab',
  render: () => <Tabs defaultValue="account" style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...w.parameters?.docs?.source},description:{story:"A disabled tab is skipped by keyboard navigation and cannot be activated.",...w.parameters?.docs?.description}}};const ye=["Playground","Default","WithIcons","Vertical","DisabledTab"];export{y as Default,w as DisabledTab,C as Playground,_ as Vertical,x as WithIcons,ye as __namedExportsOrder,fe as default};
