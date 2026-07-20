import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./Badge-CcUSgikm.js";import{t as a}from"./Button-Dr82GheM.js";import{t as o}from"./Button-BhCxneLV.js";import{t as s}from"./Text-Brd3pl5g.js";import{t as c}from"./Badge-BRvuk8Ub.js";import{t as l}from"./Text-AALrfR6w.js";import{n as u,r as d,t as f}from"./seasonal-D3DrcYmt.js";var p,m,h=t((()=>{p=e(n(),1),m=(0,p.createContext)(null)}));function g(){if(typeof window>`u`)return!1;try{return window.localStorage!==void 0}catch{return!1}}function _(e){if(!g())return null;try{let t=window.localStorage.getItem(e);if(t===null)return null;let n=JSON.parse(t);if(typeof n!=`object`||!n)return null;let r={},i=n;return typeof i.mode==`string`&&y.has(i.mode)&&(r.mode=i.mode),i.special===null?r.special=null:typeof i.special==`string`&&(r.special=i.special),r}catch{return null}}function v(e,t){if(g())try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}}var y,b=t((()=>{y=new Set([`light`,`dark`,`system`])}));function x(e){return typeof e==`string`&&N.has(e)}function S(e){return e==null?null:e===`auto-seasonal`?`season--${u()}`:x(e)?e:null}function C(){if(typeof window>`u`||typeof window.matchMedia!=`function`)return`light`;try{return window.matchMedia(j).matches?`dark`:`light`}catch{return`light`}}function w(e){return e===`system`?C():e}function T(){if(typeof document>`u`||document.getElementById(M))return;let e=document.createElement(`style`);e.id=M,e.appendChild(document.createTextNode(`*,*::before,*::after { transition: none !important; animation: none !important; }`)),document.head.appendChild(e),window.getComputedStyle(document.body).opacity,window.requestAnimationFrame(()=>{document.getElementById(M)?.remove()})}function E(e,t){if(typeof document>`u`)return;let n=document.documentElement;e===`dark`?n.classList.add(`dark`):n.classList.remove(`dark`),t===null?n.removeAttribute(`data-theme`):n.setAttribute(`data-theme`,t)}function D({defaultMode:e=`system`,defaultSpecial:t=null,storageKey:n=A,disableTransitionOnChange:r=!1,children:i}){let[a,o]=(0,O.useState)(e),[s,c]=(0,O.useState)(()=>e===`system`?`light`:e),[l,u]=(0,O.useState)(()=>S(t)),[d,f]=(0,O.useState)(!1),p=n,h=(0,O.useRef)(r);h.current=r,(0,O.useEffect)(()=>{let n=e,r=S(t);if(p!==null){let e=_(p);e?.mode!==void 0&&(n=e.mode),e?.special!==void 0&&(e.special===null?r=null:x(e.special)&&(r=e.special))}let i=w(n);o(n),c(i),u(r),E(i,r),f(!0)},[]),(0,O.useEffect)(()=>{if(a!==`system`||typeof window>`u`||typeof window.matchMedia!=`function`)return;let e=window.matchMedia(j);if(!e||typeof e.addEventListener!=`function`)return;let t=e=>{let t=e.matches?`dark`:`light`;h.current&&T(),c(t),E(t,l)};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[a,l]),(0,O.useEffect)(()=>{if(p===null||typeof window>`u`)return;let e=e=>{if(e.key!==p)return;let t=_(p);if(t!==null){if(t.mode!==void 0){let e=w(t.mode);h.current&&T(),o(t.mode),c(e),E(e,t.special===void 0?l:t.special)}t.special!==void 0&&(u(t.special),E(t.mode===void 0?s:w(t.mode),t.special))}};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[p,s,l]),(0,O.useEffect)(()=>{if(typeof document>`u`||typeof MutationObserver>`u`)return;let e=document.documentElement,t=new MutationObserver(()=>{let t=e.classList.contains(`dark`)?`dark`:`light`,n=e.getAttribute(`data-theme`),r=n!==null&&x(n)?n:null;c(e=>e===t?e:t),u(e=>e===r?e:r)});return t.observe(e,{attributes:!0,attributeFilter:[`class`,`data-theme`]}),()=>t.disconnect()},[]);let g=(0,O.useCallback)(e=>{let t=w(e);h.current&&T(),o(e),c(t),E(t,l),p!==null&&v(p,{mode:e,special:l})},[p,l]),y=(0,O.useCallback)(e=>{let t=e===null||x(e)?e:null;h.current&&T(),u(t),E(s,t),p!==null&&v(p,{mode:a,special:t})},[p,s,a]),b=(0,O.useMemo)(()=>({mode:s,modeSetting:a,setMode:g,special:l,setSpecial:y,isHydrated:d}),[s,a,g,l,y,d]);return(0,k.jsx)(m.Provider,{value:b,children:i})}var O,k,A,j,M,N,P=t((()=>{O=e(n(),1),d(),h(),b(),k=r(),A=`schatten-theme`,j=`(prefers-color-scheme: dark)`,M=`schatten-theme-transition-suppressor`,N=new Set(Object.keys(f)),D.displayName=`ThemeProvider`;try{D.displayName=`ThemeProvider`,D.__docgenInfo={description:"Declarative manager for the Mode (light/dark) and Special\n(`data-theme`) axes. Wrap your app root once and consume state with\n`useTheme()`.\n\nThe provider is client-only — Server Component imports work because\nthe package banner injects `'use client'` at build time.",displayName:`ThemeProvider`,filePath:`/home/runner/work/schatten/schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,methods:[],props:{defaultMode:{defaultValue:{value:`system`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"Initial color-mode setting.\n- `'light'` / `'dark'` — explicit.\n- `'system'` — follow `prefers-color-scheme` (subscribed at runtime).",name:`defaultMode`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`'system'`},type:{name:`enum`,raw:`ThemeModeSetting`,value:[{value:`"light"`},{value:`"dark"`},{value:`"system"`}]}},defaultSpecial:{defaultValue:{value:`null`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"Initial Special theme.\n- `null` / `undefined` — no Special applied (default).\n- `'auto-seasonal'` — resolve via `getCurrentSeason()` at mount.\n- A `SpecialThemeId` — pin to that Special.",name:`defaultSpecial`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`null`},type:{name:`ThemeProviderInitialSpecial`}},storageKey:{defaultValue:{value:`schatten-theme`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"`localStorage` key used to persist mode + special. Pass `null` to\ndisable persistence (useful in tests and embedded multi-app\nscenarios).",name:`storageKey`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`'schatten-theme'`},type:{name:`string | null`}},disableTransitionOnChange:{defaultValue:{value:`false`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:`Temporarily strip CSS transitions while applying a mode/special
change, so the swap is instantaneous instead of fading through
intermediate colors.`,name:`disableTransitionOnChange`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{example:`\`\`\`tsx
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
\`\`\``}}}catch{}}));function F(){let e=(0,I.useContext)(m);if(e===null)throw Error(`useTheme must be used within a <ThemeProvider>. Wrap your app root with <ThemeProvider> from "@yasmro/schatten/providers".`);return e}var I,L=t((()=>{I=e(n(),1),h()}));function R(){let{mode:e,modeSetting:t,special:n,setMode:r,setSpecial:o,isHydrated:c}=F();return(0,B.jsxs)(`div`,{className:`flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface min-w-[420px]`,children:[(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(s,{variant:`label`,children:`State`}),(0,B.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,B.jsxs)(i,{children:[`mode: `,e]}),(0,B.jsxs)(i,{children:[`setting: `,t]}),(0,B.jsxs)(i,{children:[`special: `,n??`none`]}),(0,B.jsxs)(i,{variant:c?`success`:`warning`,children:[`hydrated: `,c?`yes`:`no`]})]})]}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(s,{variant:`label`,children:`Mode`}),(0,B.jsx)(`div`,{className:`flex gap-2`,children:[`light`,`dark`,`system`].map(e=>(0,B.jsx)(a,{variant:t===e?`primary`:`secondary`,size:`sm`,onClick:()=>r(e),children:e},e))})]}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(s,{variant:`label`,children:`Special`}),(0,B.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[null,`season--spring-early`,`season--spring-late`,`season--summer-early`,`season--summer-peak`,`season--autumn-early`,`season--autumn-late`,`season--winter-early`,`season--winter-deep`].map(e=>(0,B.jsx)(a,{variant:n===e?`primary`:`secondary`,size:`sm`,onClick:()=>o(e),children:e??`none`},e??`none`))})]}),(0,B.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,B.jsx)(s,{variant:`label`,children:`Theme scale preview`}),(0,B.jsx)(`div`,{className:`flex gap-1`,children:[50,100,200,300,400,500,600,700,800,900,950].map(e=>(0,B.jsx)(`div`,{className:`size-8 rounded border border-border`,style:{backgroundColor:`var(--color-theme-${e})`},title:`theme-${e}`},e))})]})]})}var z,B,V,H,U,W,G,K,q;t((()=>{z=e(n(),1),c(),o(),l(),P(),L(),B=r(),V={title:`Theming/ThemeProvider`,component:D,parameters:{layout:`centered`,disableGlobalThemeDecorator:!0},tags:[`!dev`,`!autodocs`],argTypes:{defaultMode:{description:`Initial color-mode setting.`,control:`select`,options:[`light`,`dark`,`system`],table:{type:{summary:`"light" | "dark" | "system"`},defaultValue:{summary:`system`}}},defaultSpecial:{description:`Initial Special theme. "auto-seasonal" resolves the current date's season.`,control:`select`,options:[null,`auto-seasonal`,`season--spring-early`,`season--spring-late`,`season--summer-early`,`season--summer-peak`,`season--autumn-early`,`season--autumn-late`,`season--winter-early`,`season--winter-deep`],table:{type:{summary:`SpecialThemeId | "auto-seasonal" | null`},defaultValue:{summary:`null`}}},storageKey:{description:`localStorage key. Pass null to disable persistence.`,control:`text`,table:{type:{summary:`string | null`},defaultValue:{summary:`schatten-theme`}}},disableTransitionOnChange:{description:`Suppress CSS transitions during a mode/special change.`,control:`boolean`,table:{defaultValue:{summary:`false`}}}}},H={args:{defaultMode:`system`,defaultSpecial:null,storageKey:`schatten-theme-storybook`,disableTransitionOnChange:!1},render:e=>(0,B.jsx)(D,{...e,children:(0,B.jsx)(R,{})})},U={name:`With Controls`,render:()=>(0,B.jsx)(D,{defaultMode:`light`,storageKey:`schatten-theme-storybook-controls`,children:(0,B.jsx)(R,{})})},W={name:`System Mode Follows`,parameters:{docs:{description:{story:'When `defaultMode="system"`, the Provider subscribes to `matchMedia("(prefers-color-scheme: dark)")`. Toggle your OS dark mode setting while this story is open — the Mode chip should follow.'}}},render:()=>(0,B.jsx)(D,{defaultMode:`system`,storageKey:null,children:(0,B.jsx)(R,{})})},G={name:`Auto Seasonal`,parameters:{docs:{description:{story:'When `defaultSpecial="auto-seasonal"`, the current date is mapped to a seasonal palette via `getCurrentSeason()`.'}}},render:()=>(0,B.jsx)(D,{defaultSpecial:`auto-seasonal`,storageKey:null,children:(0,B.jsx)(R,{})})},K={name:`Paint Without Re-Render`,render:()=>{function e(){let[e]=(0,z.useState)(()=>Math.floor(Math.random()*1e4));return(0,B.jsxs)(`div`,{className:`flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface`,children:[(0,B.jsxs)(s,{children:[`Inner component mounted with random id `,(0,B.jsx)(`strong`,{children:e}),`. Switch theme above — this number does NOT change, proving the JSX subtree did not re-render.`]}),(0,B.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,B.jsx)(a,{variant:`primary`,children:`Primary`}),(0,B.jsx)(a,{variant:`secondary`,children:`Secondary`}),(0,B.jsx)(i,{variant:`success`,children:`Success`}),(0,B.jsx)(i,{variant:`warning`,children:`Warning`})]})]})}return(0,B.jsx)(D,{defaultMode:`light`,storageKey:null,children:(0,B.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,B.jsx)(R,{}),(0,B.jsx)(e,{})]})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'system',
    defaultSpecial: null,
    storageKey: 'schatten-theme-storybook',
    disableTransitionOnChange: false
  },
  render: args => <ThemeProvider {...args}>
      <ThemePanel />
    </ThemeProvider>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With Controls',
  render: () => <ThemeProvider defaultMode="light" storageKey="schatten-theme-storybook-controls">
      <ThemePanel />
    </ThemeProvider>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"Demonstrates that `useTheme()` updates do NOT trigger Schatten lv1\ncomponents to re-render in JSX — they re-paint via CSS cascade only.\nUse the `setMode` buttons; the static Button / Badge below redraws\nwith the new tokens with no React reconciliation.",...K.parameters?.docs?.description}}},q=[`Playground`,`WithControls`,`SystemModeFollows`,`AutoSeasonal`,`PaintWithoutReactReRender`]}))();export{G as AutoSeasonal,K as PaintWithoutReactReRender,H as Playground,W as SystemModeFollows,U as WithControls,q as __namedExportsOrder,V as default};