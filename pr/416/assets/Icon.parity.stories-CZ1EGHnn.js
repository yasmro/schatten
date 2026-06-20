import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{M as n,t as r}from"./lucide-react-DaSy76xh.js";import{n as i,t as a}from"./Icon-raROc4rY.js";var o,s,c,l,u,d;e((()=>{r(),i(),o=t(),s={title:`Components/lv1/Icon`,component:a,parameters:{layout:`centered`,docs:{description:{component:'Parity stories — React `<Icon>` and a hand-written vanilla `<svg>` with\nthe matching `.st-icon` class chain must render pixel-identical. Backs\nthe VRT in `Icon.parity.vrt.spec.ts`.\n\nThe vanilla side inlines a Lucide-shaped `<svg>` so the comparison is\napples-to-apples (size + color + stroke), not "Schatten-managed Lucide\nvs raw symbol".'}}}},c=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,o.jsx)(`path`,{d:`m21 21-4.3-4.3`})]}),l=({className:e})=>(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,"aria-hidden":`true`,children:c}),u={name:`React vs Vanilla HTML`,render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,o.jsxs)(`div`,{className:`w-64 space-y-6`,children:[(0,o.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(a,{icon:n,size:`sm`}),(0,o.jsx)(a,{icon:n,size:`md`}),(0,o.jsx)(a,{icon:n,size:`lg`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(a,{icon:n,color:`default`}),(0,o.jsx)(a,{icon:n,color:`muted`}),(0,o.jsx)(a,{icon:n,color:`subtle`}),(0,o.jsx)(a,{icon:n,color:`error`}),(0,o.jsx)(a,{icon:n,color:`success`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(a,{icon:n,color:`warning`}),(0,o.jsx)(a,{icon:n,color:`info`}),(0,o.jsx)(a,{icon:n,color:`vermillion`}),(0,o.jsx)(a,{icon:n,color:`indigo`})]}),(0,o.jsxs)(`div`,{className:`text-error`,children:[(0,o.jsx)(a,{icon:n}),(0,o.jsx)(`span`,{className:`ml-2 align-middle text-sm`,children:`inherit on red parent`})]})]}),(0,o.jsxs)(`div`,{className:`w-64 space-y-6`,children:[(0,o.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(l,{className:`st-icon st-icon--sm st-icon--inherit`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--inherit`}),(0,o.jsx)(l,{className:`st-icon st-icon--lg st-icon--inherit`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--default`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--muted`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--subtle`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--error`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--success`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--warning`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--info`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--vermillion`}),(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--indigo`})]}),(0,o.jsxs)(`div`,{className:`text-error`,children:[(0,o.jsx)(l,{className:`st-icon st-icon--md st-icon--inherit`}),(0,o.jsx)(`span`,{className:`ml-2 align-middle text-sm`,children:`inherit on red parent`})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Parity`]}))();export{u as Parity,d as __namedExportsOrder,s as default};