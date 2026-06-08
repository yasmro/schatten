import{j as s}from"./iframe-DzR8t0ar.js";import{I as i}from"./Icon-DO64w0Wy.js";import{S as e}from"./search-DX43pYvs.js";import"./preload-helper-BcWRTw5c.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./createLucideIcon-CGC79gB9.js";const g={title:"Components/lv1/Icon",component:i,parameters:{layout:"centered",docs:{description:{component:'Parity stories — React `<Icon>` and a hand-written vanilla `<svg>` with\nthe matching `.st-icon` class chain must render pixel-identical. Backs\nthe VRT in `Icon.parity.vrt.spec.ts`.\n\nThe vanilla side inlines a Lucide-shaped `<svg>` so the comparison is\napples-to-apples (size + color + stroke), not "Schatten-managed Lucide\nvs raw symbol".'}}}},o=s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"m21 21-4.3-4.3"})]}),c=({className:a})=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,"aria-hidden":"true",children:o}),n={name:"React vs Vanilla HTML",render:()=>s.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[s.jsxs("div",{className:"w-64 space-y-6",children:[s.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(i,{icon:e,size:"sm"}),s.jsx(i,{icon:e,size:"md"}),s.jsx(i,{icon:e,size:"lg"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(i,{icon:e,color:"default"}),s.jsx(i,{icon:e,color:"muted"}),s.jsx(i,{icon:e,color:"subtle"}),s.jsx(i,{icon:e,color:"error"}),s.jsx(i,{icon:e,color:"success"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(i,{icon:e,color:"warning"}),s.jsx(i,{icon:e,color:"info"}),s.jsx(i,{icon:e,color:"vermillion"}),s.jsx(i,{icon:e,color:"indigo"})]}),s.jsxs("div",{className:"text-error",children:[s.jsx(i,{icon:e}),s.jsx("span",{className:"ml-2 align-middle text-sm",children:"inherit on red parent"})]})]}),s.jsxs("div",{className:"w-64 space-y-6",children:[s.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(c,{className:"st-icon st-icon--sm st-icon--inherit"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--inherit"}),s.jsx(c,{className:"st-icon st-icon--lg st-icon--inherit"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(c,{className:"st-icon st-icon--md st-icon--default"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--muted"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--subtle"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--error"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--success"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(c,{className:"st-icon st-icon--md st-icon--warning"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--info"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--vermillion"}),s.jsx(c,{className:"st-icon st-icon--md st-icon--indigo"})]}),s.jsxs("div",{className:"text-error",children:[s.jsx(c,{className:"st-icon st-icon--md st-icon--inherit"}),s.jsx("span",{className:"ml-2 align-middle text-sm",children:"inherit on red parent"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="w-64 space-y-6">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        <div className="flex items-center gap-3">
          <Icon icon={Search} size="sm" />
          <Icon icon={Search} size="md" />
          <Icon icon={Search} size="lg" />
        </div>
        <div className="flex items-center gap-3">
          <Icon icon={Search} color="default" />
          <Icon icon={Search} color="muted" />
          <Icon icon={Search} color="subtle" />
          <Icon icon={Search} color="error" />
          <Icon icon={Search} color="success" />
        </div>
        <div className="flex items-center gap-3">
          <Icon icon={Search} color="warning" />
          <Icon icon={Search} color="info" />
          <Icon icon={Search} color="vermillion" />
          <Icon icon={Search} color="indigo" />
        </div>
        <div className="text-error">
          <Icon icon={Search} />
          <span className="ml-2 align-middle text-sm">inherit on red parent</span>
        </div>
      </div>
      <div className="w-64 space-y-6">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--sm st-icon--inherit" />
          <VanillaSvg className="st-icon st-icon--md st-icon--inherit" />
          <VanillaSvg className="st-icon st-icon--lg st-icon--inherit" />
        </div>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--md st-icon--default" />
          <VanillaSvg className="st-icon st-icon--md st-icon--muted" />
          <VanillaSvg className="st-icon st-icon--md st-icon--subtle" />
          <VanillaSvg className="st-icon st-icon--md st-icon--error" />
          <VanillaSvg className="st-icon st-icon--md st-icon--success" />
        </div>
        <div className="flex items-center gap-3">
          <VanillaSvg className="st-icon st-icon--md st-icon--warning" />
          <VanillaSvg className="st-icon st-icon--md st-icon--info" />
          <VanillaSvg className="st-icon st-icon--md st-icon--vermillion" />
          <VanillaSvg className="st-icon st-icon--md st-icon--indigo" />
        </div>
        <div className="text-error">
          <VanillaSvg className="st-icon st-icon--md st-icon--inherit" />
          <span className="ml-2 align-middle text-sm">inherit on red parent</span>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const h=["Parity"];export{n as Parity,h as __namedExportsOrder,g as default};
