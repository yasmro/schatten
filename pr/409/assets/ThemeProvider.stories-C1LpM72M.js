import{r as l,j as e}from"./iframe-26a-m5RM.js";import{g as G,S as X}from"./index-BjhfJjZn.js";import{T as b}from"./Text-DtSvrmtY.js";import{B as v}from"./Badge-4a9wk8bG.js";import{B as A}from"./Button-CtVmhjHX.js";import"./preload-helper-o4VUtNp3.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             *//* empty css              */import"./index-B2cnb4L6.js";import"./index-vmw3tZk_.js";/* empty css               */import"./Spinner-CACO8iwr.js";/* empty css                */const q=l.createContext(null),$=new Set(["light","dark","system"]);function J(){if(typeof window>"u")return!1;try{return typeof window.localStorage<"u"}catch{return!1}}function L(t){if(!J())return null;try{const o=window.localStorage.getItem(t);if(o===null)return null;const d=JSON.parse(o);if(typeof d!="object"||d===null)return null;const u={},m=d;return typeof m.mode=="string"&&$.has(m.mode)&&(u.mode=m.mode),m.special===null?u.special=null:typeof m.special=="string"&&(u.special=m.special),u}catch{return null}}function V(t,o){if(J())try{window.localStorage.setItem(t,JSON.stringify(o))}catch{}}const Y="schatten-theme",U="(prefers-color-scheme: dark)",R="schatten-theme-transition-suppressor",Q=new Set(Object.keys(X));function O(t){return typeof t=="string"&&Q.has(t)}function F(t){return t==null?null:t==="auto-seasonal"?`season--${G()}`:O(t)?t:null}function Z(){if(typeof window>"u"||typeof window.matchMedia!="function")return"light";try{return window.matchMedia(U).matches?"dark":"light"}catch{return"light"}}function j(t){return t==="system"?Z():t}function k(){if(typeof document>"u"||document.getElementById(R))return;const t=document.createElement("style");t.id=R,t.appendChild(document.createTextNode("*,*::before,*::after { transition: none !important; animation: none !important; }")),document.head.appendChild(t),window.getComputedStyle(document.body).opacity,window.requestAnimationFrame(()=>{document.getElementById(R)?.remove()})}function y(t,o){if(typeof document>"u")return;const d=document.documentElement;t==="dark"?d.classList.add("dark"):d.classList.remove("dark"),o===null?d.removeAttribute("data-theme"):d.setAttribute("data-theme",o)}function f({defaultMode:t="system",defaultSpecial:o=null,storageKey:d=Y,disableTransitionOnChange:u=!1,children:m}){const[p,x]=l.useState(t),[g,n]=l.useState(()=>t==="system"?"light":t),[h,M]=l.useState(()=>F(o)),[B,z]=l.useState(!1),c=d,S=l.useRef(u);S.current=u,l.useEffect(()=>{let r=t,s=F(o);if(c!==null){const i=L(c);i?.mode!==void 0&&(r=i.mode),i?.special!==void 0&&(i.special===null?s=null:O(i.special)&&(s=i.special))}const a=j(r);x(r),n(a),M(s),y(a,s),z(!0)},[]),l.useEffect(()=>{if(p!=="system"||typeof window>"u"||typeof window.matchMedia!="function")return;const r=window.matchMedia(U);if(!r||typeof r.addEventListener!="function")return;const s=a=>{const i=a.matches?"dark":"light";S.current&&k(),n(i),y(i,h)};return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[p,h]),l.useEffect(()=>{if(c===null||typeof window>"u")return;const r=s=>{if(s.key!==c)return;const a=L(c);if(a!==null){if(a.mode!==void 0){const i=j(a.mode);S.current&&k(),x(a.mode),n(i),y(i,a.special!==void 0?a.special:h)}a.special!==void 0&&(M(a.special),y(a.mode!==void 0?j(a.mode):g,a.special))}};return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)},[c,g,h]),l.useEffect(()=>{if(typeof document>"u"||typeof MutationObserver>"u")return;const r=document.documentElement,s=new MutationObserver(()=>{const i=r.classList.contains("dark")?"dark":"light",_=r.getAttribute("data-theme"),W=_!==null&&O(_)?_:null;n(T=>T===i?T:i),M(T=>T===W?T:W)});return s.observe(r,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>s.disconnect()},[]);const D=l.useCallback(r=>{const s=j(r);S.current&&k(),x(r),n(s),y(s,h),c!==null&&V(c,{mode:r,special:h})},[c,h]),K=l.useCallback(r=>{const s=r===null||O(r)?r:null;S.current&&k(),M(s),y(g,s),c!==null&&V(c,{mode:p,special:s})},[c,g,p]),H=l.useMemo(()=>({mode:g,modeSetting:p,setMode:D,special:h,setSpecial:K,isHydrated:B}),[g,p,D,h,K,B]);return e.jsx(q.Provider,{value:H,children:m})}f.displayName="ThemeProvider";try{f.displayName="ThemeProvider",f.__docgenInfo={description:"Declarative manager for the Mode (light/dark) and Special\n(`data-theme`) axes. Wrap your app root once and consume state with\n`useTheme()`.\n\nThe provider is client-only — Server Component imports work because\nthe package banner injects `'use client'` at build time.",displayName:"ThemeProvider",filePath:"/home/runner/work/schatten/schatten/src/providers/ThemeProvider/ThemeProvider.tsx",methods:[],props:{defaultMode:{defaultValue:{value:"system"},declarations:[{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"}],description:"Initial color-mode setting.\n- `'light'` / `'dark'` — explicit.\n- `'system'` — follow `prefers-color-scheme` (subscribed at runtime).",name:"defaultMode",parent:{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"},required:!1,tags:{default:"'system'"},type:{name:"enum",raw:"ThemeModeSetting",value:[{value:'"light"'},{value:'"dark"'},{value:'"system"'}]}},defaultSpecial:{defaultValue:{value:"null"},declarations:[{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"}],description:"Initial Special theme.\n- `null` / `undefined` — no Special applied (default).\n- `'auto-seasonal'` — resolve via `getCurrentSeason()` at mount.\n- A `SpecialThemeId` — pin to that Special.",name:"defaultSpecial",parent:{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"},required:!1,tags:{default:"null"},type:{name:"ThemeProviderInitialSpecial"}},storageKey:{defaultValue:{value:"schatten-theme"},declarations:[{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"}],description:"`localStorage` key used to persist mode + special. Pass `null` to\ndisable persistence (useful in tests and embedded multi-app\nscenarios).",name:"storageKey",parent:{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"},required:!1,tags:{default:"'schatten-theme'"},type:{name:"string | null"}},disableTransitionOnChange:{defaultValue:{value:"false"},declarations:[{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"}],description:`Temporarily strip CSS transitions while applying a mode/special
change, so the swap is instantaneous instead of fading through
intermediate colors.`,name:"disableTransitionOnChange",parent:{fileName:"schatten/src/providers/ThemeProvider/ThemeProvider.tsx",name:"ThemeProviderProps"},required:!1,tags:{default:"false"},type:{name:"boolean"}}},tags:{example:`\`\`\`tsx
// app/layout.tsx
import { ThemeProvider } from '@yasmro/schatten/providers'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider defaultMode="system" defaultSpecial="auto-seasonal">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
\`\`\``}}}catch{}function ee(){const t=l.useContext(q);if(t===null)throw new Error('useTheme must be used within a <ThemeProvider>. Wrap your app root with <ThemeProvider> from "@yasmro/schatten/providers".');return t}const ge={title:"Theming/ThemeProvider",component:f,parameters:{layout:"centered",disableGlobalThemeDecorator:!0},tags:["autodocs"],argTypes:{defaultMode:{description:"Initial color-mode setting.",control:"select",options:["light","dark","system"],table:{type:{summary:'"light" | "dark" | "system"'},defaultValue:{summary:"system"}}},defaultSpecial:{description:`Initial Special theme. "auto-seasonal" resolves the current date's season.`,control:"select",options:[null,"auto-seasonal","season--spring-early","season--spring-late","season--summer-early","season--summer-peak","season--autumn-early","season--autumn-late","season--winter-early","season--winter-deep"],table:{type:{summary:'SpecialThemeId | "auto-seasonal" | null'},defaultValue:{summary:"null"}}},storageKey:{description:"localStorage key. Pass null to disable persistence.",control:"text",table:{type:{summary:"string | null"},defaultValue:{summary:"schatten-theme"}}},disableTransitionOnChange:{description:"Suppress CSS transitions during a mode/special change.",control:"boolean",table:{defaultValue:{summary:"false"}}}}};function w(){const{mode:t,modeSetting:o,special:d,setMode:u,setSpecial:m,isHydrated:p}=ee(),x=["light","dark","system"],g=[null,"season--spring-early","season--spring-late","season--summer-early","season--summer-peak","season--autumn-early","season--autumn-late","season--winter-early","season--winter-deep"];return e.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface min-w-[420px]",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(b,{variant:"label",children:"State"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(v,{children:["mode: ",t]}),e.jsxs(v,{children:["setting: ",o]}),e.jsxs(v,{children:["special: ",d??"none"]}),e.jsxs(v,{variant:p?"success":"warning",children:["hydrated: ",p?"yes":"no"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(b,{variant:"label",children:"Mode"}),e.jsx("div",{className:"flex gap-2",children:x.map(n=>e.jsx(A,{variant:o===n?"primary":"secondary",size:"sm",onClick:()=>u(n),children:n},n))})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(b,{variant:"label",children:"Special"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:g.map(n=>e.jsx(A,{variant:d===n?"primary":"secondary",size:"sm",onClick:()=>m(n),children:n??"none"},n??"none"))})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(b,{variant:"label",children:"Theme scale preview"}),e.jsx("div",{className:"flex gap-1",children:[50,100,200,300,400,500,600,700,800,900,950].map(n=>e.jsx("div",{className:"size-8 rounded border border-border",style:{backgroundColor:`var(--color-theme-${n})`},title:`theme-${n}`},n))})]})]})}const N={args:{defaultMode:"system",defaultSpecial:null,storageKey:"schatten-theme-storybook",disableTransitionOnChange:!1},render:t=>e.jsx(f,{...t,children:e.jsx(w,{})})},E={name:"With Controls",render:()=>e.jsx(f,{defaultMode:"light",storageKey:"schatten-theme-storybook-controls",children:e.jsx(w,{})})},C={name:"System Mode Follows",parameters:{docs:{description:{story:'When `defaultMode="system"`, the Provider subscribes to `matchMedia("(prefers-color-scheme: dark)")`. Toggle your OS dark mode setting while this story is open — the Mode chip should follow.'}}},render:()=>e.jsx(f,{defaultMode:"system",storageKey:null,children:e.jsx(w,{})})},I={name:"Auto Seasonal",parameters:{docs:{description:{story:'When `defaultSpecial="auto-seasonal"`, the current date is mapped to a seasonal palette via `getCurrentSeason()`.'}}},render:()=>e.jsx(f,{defaultSpecial:"auto-seasonal",storageKey:null,children:e.jsx(w,{})})},P={name:"Paint Without Re-Render",render:()=>{function t(){const[o]=l.useState(()=>Math.floor(Math.random()*1e4));return e.jsxs("div",{className:"flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface",children:[e.jsxs(b,{children:["Inner component mounted with random id ",e.jsx("strong",{children:o}),". Switch theme above — this number does NOT change, proving the JSX subtree did not re-render."]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{variant:"primary",children:"Primary"}),e.jsx(A,{variant:"secondary",children:"Secondary"}),e.jsx(v,{variant:"success",children:"Success"}),e.jsx(v,{variant:"warning",children:"Warning"})]})]})}return e.jsx(f,{defaultMode:"light",storageKey:null,children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(w,{}),e.jsx(t,{})]})})}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'system',
    defaultSpecial: null,
    storageKey: 'schatten-theme-storybook',
    disableTransitionOnChange: false
  },
  render: args => <ThemeProvider {...args}>
      <ThemePanel />
    </ThemeProvider>
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Controls',
  render: () => <ThemeProvider defaultMode="light" storageKey="schatten-theme-storybook-controls">
      <ThemePanel />
    </ThemeProvider>
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'System Mode Follows',
  parameters: {
    docs: {
      description: {
        story: 'When \`defaultMode="system"\`, the Provider subscribes to \`matchMedia("(prefers-color-scheme: dark)")\`. Toggle your OS dark mode setting while this story is open — the Mode chip should follow.'
      }
    }
  },
  render: () => <ThemeProvider defaultMode="system" storageKey={null}>
      <ThemePanel />
    </ThemeProvider>
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Auto Seasonal',
  parameters: {
    docs: {
      description: {
        story: 'When \`defaultSpecial="auto-seasonal"\`, the current date is mapped to a seasonal palette via \`getCurrentSeason()\`.'
      }
    }
  },
  render: () => <ThemeProvider defaultSpecial="auto-seasonal" storageKey={null}>
      <ThemePanel />
    </ThemeProvider>
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Paint Without Re-Render',
  render: () => {
    function Inner() {
      const [counter] = useState(() => Math.floor(Math.random() * 10000));
      return <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface">
          <Text>
            Inner component mounted with random id <strong>{counter}</strong>. Switch theme above —
            this number does NOT change, proving the JSX subtree did not re-render.
          </Text>
          <div className="flex items-center gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </div>;
    }
    return <ThemeProvider defaultMode="light" storageKey={null}>
        <div className="flex flex-col gap-4">
          <ThemePanel />
          <Inner />
        </div>
      </ThemeProvider>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Demonstrates that `useTheme()` updates do NOT trigger Schatten lv1\ncomponents to re-render in JSX — they re-paint via CSS cascade only.\nUse the `setMode` buttons; the static Button / Badge below redraws\nwith the new tokens with no React reconciliation.",...P.parameters?.docs?.description}}};const ye=["Playground","WithControls","SystemModeFollows","AutoSeasonal","PaintWithoutReactReRender"];export{I as AutoSeasonal,P as PaintWithoutReactReRender,N as Playground,C as SystemModeFollows,E as WithControls,ye as __namedExportsOrder,ge as default};
