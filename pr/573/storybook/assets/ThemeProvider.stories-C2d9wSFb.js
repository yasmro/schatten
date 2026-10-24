import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,n}from"./iframe-CgQNQK1w.js";import{n as r,t as i}from"./Badge-ybGMXmji.js";import{n as a,t as o}from"./Button-g-seCqso.js";import{n as s,t as c}from"./Text-dl5OmI1l.js";import{n as l,r as u,t as d}from"./seasonal-DA1g7nQc.js";var f,p;function m(){return(m=e((()=>{f=t(),p=(0,f.createContext)(null)})))()}function h(){if(typeof window>`u`)return!1;try{return window.localStorage!==void 0}catch{return!1}}function g(e){if(!h())return null;try{let t=window.localStorage.getItem(e);if(t===null)return null;let n=JSON.parse(t);if(typeof n!=`object`||!n)return null;let r={},i=n;return typeof i.mode==`string`&&v.has(i.mode)&&(r.mode=i.mode),i.special===null?r.special=null:typeof i.special==`string`&&(r.special=i.special),r}catch{return null}}function _(e,t){if(h())try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}}var v;function y(){return(y=e((()=>{v=new Set([`light`,`dark`,`system`])})))()}function b(e){return typeof e==`string`&&M.has(e)}function x(e){return e==null?null:e===`auto-seasonal`?`season--${l()}`:b(e)?e:null}function S(){if(typeof window>`u`||typeof window.matchMedia!=`function`)return`light`;try{return window.matchMedia(A).matches?`dark`:`light`}catch{return`light`}}function C(e){return e===`system`?S():e}function w(){if(typeof document>`u`||document.getElementById(j))return;let e=document.createElement(`style`);e.id=j,e.appendChild(document.createTextNode(`*,*::before,*::after { transition: none !important; animation: none !important; }`)),document.head.appendChild(e),window.getComputedStyle(document.body).opacity,window.requestAnimationFrame(()=>{document.getElementById(j)?.remove()})}function T(e,t){if(typeof document>`u`)return;let n=document.documentElement;e===`dark`?n.classList.add(`dark`):n.classList.remove(`dark`),t===null?n.removeAttribute(`data-theme`):n.setAttribute(`data-theme`,t)}function E({defaultMode:e=`system`,defaultSpecial:t=null,storageKey:n=k,disableTransitionOnChange:r=!1,children:i}){let[a,o]=(0,D.useState)(e),[s,c]=(0,D.useState)(()=>e===`system`?`light`:e),[l,u]=(0,D.useState)(()=>x(t)),[d,f]=(0,D.useState)(!1),m=n,h=(0,D.useRef)(r);h.current=r,(0,D.useEffect)(()=>{let n=e,r=x(t);if(m!==null){let e=g(m);e?.mode!==void 0&&(n=e.mode),e?.special!==void 0&&(e.special===null?r=null:b(e.special)&&(r=e.special))}let i=C(n);o(n),c(i),u(r),T(i,r),f(!0)},[]),(0,D.useEffect)(()=>{if(a!==`system`||typeof window>`u`||typeof window.matchMedia!=`function`)return;let e=window.matchMedia(A);if(!e||typeof e.addEventListener!=`function`)return;let t=e=>{let t=e.matches?`dark`:`light`;h.current&&w(),c(t),T(t,l)};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[a,l]),(0,D.useEffect)(()=>{if(m===null||typeof window>`u`)return;let e=e=>{if(e.key!==m)return;let t=g(m);if(t!==null){if(t.mode!==void 0){let e=C(t.mode);h.current&&w(),o(t.mode),c(e),T(e,t.special===void 0?l:t.special)}t.special!==void 0&&(u(t.special),T(t.mode===void 0?s:C(t.mode),t.special))}};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[m,s,l]),(0,D.useEffect)(()=>{if(typeof document>`u`||typeof MutationObserver>`u`)return;let e=document.documentElement,t=new MutationObserver(()=>{let t=e.classList.contains(`dark`)?`dark`:`light`,n=e.getAttribute(`data-theme`),r=n!==null&&b(n)?n:null;c(e=>e===t?e:t),u(e=>e===r?e:r)});return t.observe(e,{attributes:!0,attributeFilter:[`class`,`data-theme`]}),()=>t.disconnect()},[]);let v=(0,D.useCallback)(e=>{let t=C(e);h.current&&w(),o(e),c(t),T(t,l),m!==null&&_(m,{mode:e,special:l})},[m,l]),y=(0,D.useCallback)(e=>{let t=e===null||b(e)?e:null;h.current&&w(),u(t),T(s,t),m!==null&&_(m,{mode:a,special:t})},[m,s,a]),S=(0,D.useMemo)(()=>({mode:s,modeSetting:a,setMode:v,special:l,setSpecial:y,isHydrated:d}),[s,a,v,l,y,d]);return(0,O.jsx)(p.Provider,{value:S,children:i})}var D,O,k,A,j,M;function N(){return(N=e((()=>{D=t(),u(),m(),y(),O=n(),k=`schatten-theme`,A=`(prefers-color-scheme: dark)`,j=`schatten-theme-transition-suppressor`,M=new Set(Object.keys(d)),E.displayName=`ThemeProvider`;try{E.displayName=`ThemeProvider`,E.__docgenInfo={description:"Declarative manager for the Mode (light/dark) and Special\n(`data-theme`) axes. Wrap your app root once and consume state with\n`useTheme()`.\n\nThe provider is client-only — Server Component imports work because\nthe package banner injects `'use client'` at build time.",displayName:`ThemeProvider`,filePath:`/home/runner/work/schatten/schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,methods:[],props:{defaultMode:{defaultValue:{value:`system`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"Initial color-mode setting.\n- `'light'` / `'dark'` — explicit.\n- `'system'` — follow `prefers-color-scheme` (subscribed at runtime).",name:`defaultMode`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`'system'`},type:{name:`enum`,raw:`ThemeModeSetting`,value:[{value:`"light"`},{value:`"dark"`},{value:`"system"`}]}},defaultSpecial:{defaultValue:{value:`null`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"Initial Special theme.\n- `null` / `undefined` — no Special applied (default).\n- `'auto-seasonal'` — resolve via `getCurrentSeason()` at mount.\n- A `SpecialThemeId` — pin to that Special.",name:`defaultSpecial`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`null`},type:{name:`ThemeProviderInitialSpecial`}},storageKey:{defaultValue:{value:`schatten-theme`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:"`localStorage` key used to persist mode + special. Pass `null` to\ndisable persistence (useful in tests and embedded multi-app\nscenarios).",name:`storageKey`,parent:{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`},required:!1,tags:{default:`'schatten-theme'`},type:{name:`string | null`}},disableTransitionOnChange:{defaultValue:{value:`false`},declarations:[{fileName:`schatten/src/providers/ThemeProvider/ThemeProvider.tsx`,name:`ThemeProviderProps`}],description:`Temporarily strip CSS transitions while applying a mode/special
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
\`\`\``}}}catch{}})))()}function P(){let e=(0,F.useContext)(p);if(e===null)throw Error(`useTheme must be used within a <ThemeProvider>. Wrap your app root with <ThemeProvider> from "@yasmro/schatten/providers".`);return e}var F;function I(){return(I=e((()=>{F=t(),m()})))()}function L(){let{mode:e,modeSetting:t,special:n,setMode:r,setSpecial:a,isHydrated:s}=P();return(0,z.jsxs)(`div`,{className:`flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface min-w-[420px]`,children:[(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(c,{variant:`label`,children:`State`}),(0,z.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,z.jsxs)(i,{children:[`mode: `,e]}),(0,z.jsxs)(i,{children:[`setting: `,t]}),(0,z.jsxs)(i,{children:[`special: `,n??`none`]}),(0,z.jsxs)(i,{variant:s?`success`:`warning`,children:[`hydrated: `,s?`yes`:`no`]})]})]}),(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(c,{variant:`label`,children:`Mode`}),(0,z.jsx)(`div`,{className:`flex gap-2`,children:[`light`,`dark`,`system`].map(e=>(0,z.jsx)(o,{variant:t===e?`primary`:`secondary`,size:`sm`,onClick:()=>r(e),children:e},e))})]}),(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(c,{variant:`label`,children:`Special`}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[null,`season--spring-early`,`season--spring-late`,`season--summer-early`,`season--summer-peak`,`season--autumn-early`,`season--autumn-late`,`season--winter-early`,`season--winter-deep`].map(e=>(0,z.jsx)(o,{variant:n===e?`primary`:`secondary`,size:`sm`,onClick:()=>a(e),children:e??`none`},e??`none`))})]}),(0,z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,z.jsx)(c,{variant:`label`,children:`Theme scale preview`}),(0,z.jsx)(`div`,{className:`flex gap-1`,children:[50,100,200,300,400,500,600,700,800,900,950].map(e=>(0,z.jsx)(`div`,{className:`size-8 rounded border border-border`,style:{backgroundColor:`var(--color-theme-${e})`},title:`theme-${e}`},e))})]})]})}var R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{R=t(),r(),a(),s(),N(),I(),z=n(),B={title:`Theming/ThemeProvider`,component:E,parameters:{layout:`centered`,disableGlobalThemeDecorator:!0},tags:[`!dev`,`!autodocs`],argTypes:{defaultMode:{description:`Initial color-mode setting.`,control:`select`,options:[`light`,`dark`,`system`],table:{type:{summary:`"light" | "dark" | "system"`},defaultValue:{summary:`system`}}},defaultSpecial:{description:`Initial Special theme. "auto-seasonal" resolves the current date's season.`,control:`select`,options:[null,`auto-seasonal`,`season--spring-early`,`season--spring-late`,`season--summer-early`,`season--summer-peak`,`season--autumn-early`,`season--autumn-late`,`season--winter-early`,`season--winter-deep`],table:{type:{summary:`SpecialThemeId | "auto-seasonal" | null`},defaultValue:{summary:`null`}}},storageKey:{description:`localStorage key. Pass null to disable persistence.`,control:`text`,table:{type:{summary:`string | null`},defaultValue:{summary:`schatten-theme`}}},disableTransitionOnChange:{description:`Suppress CSS transitions during a mode/special change.`,control:`boolean`,table:{defaultValue:{summary:`false`}}}}},V={args:{defaultMode:`system`,defaultSpecial:null,storageKey:`schatten-theme-storybook`,disableTransitionOnChange:!1},render:e=>(0,z.jsx)(E,{...e,children:(0,z.jsx)(L,{})})},H={name:`With Controls`,render:()=>(0,z.jsx)(E,{defaultMode:`light`,storageKey:`schatten-theme-storybook-controls`,children:(0,z.jsx)(L,{})})},U={name:`System Mode Follows`,parameters:{docs:{description:{story:'When `defaultMode="system"`, the Provider subscribes to `matchMedia("(prefers-color-scheme: dark)")`. Toggle your OS dark mode setting while this story is open — the Mode chip should follow.'}}},render:()=>(0,z.jsx)(E,{defaultMode:`system`,storageKey:null,children:(0,z.jsx)(L,{})})},W={name:`Auto Seasonal`,parameters:{docs:{description:{story:'When `defaultSpecial="auto-seasonal"`, the current date is mapped to a seasonal palette via `getCurrentSeason()`.'}}},render:()=>(0,z.jsx)(E,{defaultSpecial:`auto-seasonal`,storageKey:null,children:(0,z.jsx)(L,{})})},G={name:`Paint Without Re-Render`,render:()=>{function e(){let[e]=(0,R.useState)(()=>Math.floor(Math.random()*1e4));return(0,z.jsxs)(`div`,{className:`flex flex-col gap-4 p-6 rounded-lg border border-border bg-surface`,children:[(0,z.jsxs)(c,{children:[`Inner component mounted with random id `,(0,z.jsx)(`strong`,{children:e}),`. Switch theme above — this number does NOT change, proving the JSX subtree did not re-render.`]}),(0,z.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,z.jsx)(o,{variant:`primary`,children:`Primary`}),(0,z.jsx)(o,{variant:`secondary`,children:`Secondary`}),(0,z.jsx)(i,{variant:`success`,children:`Success`}),(0,z.jsx)(i,{variant:`warning`,children:`Warning`})]})]})}return(0,z.jsx)(E,{defaultMode:`light`,storageKey:null,children:(0,z.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,z.jsx)(L,{}),(0,z.jsx)(e,{})]})})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'system',
    defaultSpecial: null,
    storageKey: 'schatten-theme-storybook',
    disableTransitionOnChange: false
  },
  render: args => <ThemeProvider {...args}>
      <ThemePanel />
    </ThemeProvider>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'With Controls',
  render: () => <ThemeProvider defaultMode="light" storageKey="schatten-theme-storybook-controls">
      <ThemePanel />
    </ThemeProvider>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:"Demonstrates that `useTheme()` updates do NOT trigger Schatten lv1\ncomponents to re-render in JSX — they re-paint via CSS cascade only.\nUse the `setMode` buttons; the static Button / Badge below redraws\nwith the new tokens with no React reconciliation.",...G.parameters?.docs?.description}}},K=[`Playground`,`WithControls`,`SystemModeFollows`,`AutoSeasonal`,`PaintWithoutReactReRender`]})))()}q();export{W as AutoSeasonal,G as PaintWithoutReactReRender,V as Playground,U as SystemModeFollows,H as WithControls,K as __namedExportsOrder,B as default};