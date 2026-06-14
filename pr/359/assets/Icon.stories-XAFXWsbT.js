import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{B as n,E as r,H as i,K as a,O as o,P as s,Q as c,R as l,S as u,W as d,X as f,bt as p,c as m,ct as h,et as g,ft as _,gt as v,i as y,it as b,m as x,mt as S,n as C,nt as w,o as T,ot as E,t as D,u as O,ut as k,v as A,vt as j,w as M}from"./lucide-react-BOjx0YLZ.js";import{n as N,t as P}from"./Icon-DIPNh8dz.js";var F,I,L,R,z,B,V,H,U;e((()=>{D(),N(),F=t(),I=[`inherit`,`default`,`muted`,`subtle`,`vermillion`,`indigo`,`error`,`success`,`warning`,`info`,`inverted`,`inverted-muted`,`inverted-subtle`],L={title:`Components/lv1/Icon`,component:P,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{description:"Lucide icon component to render. Import it from `lucide-react` and pass it directly.",control:!1,table:{type:{summary:`LucideIcon`}}},size:{description:`Size of the icon.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},color:{description:"Color of the icon. Vocabulary mirrors `Text`’s `color`.",control:`select`,options:I,table:{type:{summary:I.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`inherit`}}},"aria-label":{description:'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. Its presence is what toggles the icon between decorative and meaningful: omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`none — icon is decorative (aria-hidden="true")`}}}},args:{icon:u,size:`md`,color:`inherit`}},R={},z={name:`Sizes`,render:()=>(0,F.jsxs)(`div`,{className:`flex items-end gap-4`,children:[(0,F.jsx)(P,{icon:u,size:`sm`}),(0,F.jsx)(P,{icon:u,size:`md`}),(0,F.jsx)(P,{icon:u,size:`lg`})]})},B={name:`Colors`,parameters:{docs:{description:{story:"The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface."}}},render:()=>(0,F.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`default`,`muted`,`subtle`,`vermillion`,`indigo`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:x,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`error`,`success`,`warning`,`info`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:c,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4`,children:[`inverted`,`inverted-muted`,`inverted-subtle`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:x,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-inverted-foreground-muted`,children:e})]},e))})]})},V=[{name:`ArrowRight`,icon:v},{name:`ArrowLeft`,icon:j},{name:`ArrowUp`,icon:S},{name:`ArrowDown`,icon:p},{name:`ChevronRight`,icon:w},{name:`ChevronLeft`,icon:b},{name:`ChevronDown`,icon:E},{name:`ChevronUp`,icon:g},{name:`Check`,icon:h},{name:`X`,icon:C},{name:`Plus`,icon:M},{name:`Minus`,icon:o},{name:`Search`,icon:u},{name:`Settings`,icon:A},{name:`Trash2`,icon:O},{name:`Pencil`,icon:r},{name:`Copy`,icon:a},{name:`Eye`,icon:l},{name:`EyeOff`,icon:n},{name:`Info`,icon:s},{name:`CircleAlert`,icon:c},{name:`CircleCheck`,icon:f},{name:`TriangleAlert`,icon:m},{name:`Download`,icon:d},{name:`Upload`,icon:T},{name:`ExternalLink`,icon:i},{name:`Bell`,icon:_},{name:`Calendar`,icon:k},{name:`User`,icon:y},{name:`Star`,icon:x}],H={name:`Gallery`,parameters:{docs:{description:{story:"A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist."}}},render:()=>(0,F.jsx)(`div`,{className:`grid grid-cols-6 gap-6`,children:V.map(({name:e,icon:t})=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,F.jsx)(P,{icon:t,size:`lg`,color:`default`}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-end gap-4">
      <Icon icon={Search} size="sm" />
      <Icon icon={Search} size="md" />
      <Icon icon={Search} size="lg" />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story: 'The \`color\` vocabulary mirrors \`Text\`. \`inverted-*\` colors are previewed on a dark surface.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {(['default', 'muted', 'subtle', 'vermillion', 'indigo'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={Star} size="lg" color={color} />
            <span className="text-xs text-foreground-muted">{color}</span>
          </div>)}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {(['error', 'success', 'warning', 'info'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={CircleAlert} size="lg" color={color} />
            <span className="text-xs text-foreground-muted">{color}</span>
          </div>)}
      </div>
      <div className="flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4">
        {(['inverted', 'inverted-muted', 'inverted-subtle'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
            <Icon icon={Star} size="lg" color={color} />
            <span className="text-xs text-inverted-foreground-muted">{color}</span>
          </div>)}
      </div>
    </div>
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  parameters: {
    docs: {
      description: {
        story: 'A representative selection of \`lucide-react\` icons. \`Icon\` accepts any lucide icon — this gallery is documentation, not an allowlist.'
      }
    }
  },
  render: () => <div className="grid grid-cols-6 gap-6">
      {GALLERY_ICONS.map(({
      name,
      icon
    }) => <div key={name} className="flex flex-col items-center gap-2">
          <Icon icon={icon} size="lg" color="default" />
          <span className="text-xs text-foreground-muted">{name}</span>
        </div>)}
    </div>
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`Sizes`,`Colors`,`Gallery`]}))();export{B as Colors,H as Gallery,R as Playground,z as Sizes,U as __namedExportsOrder,L as default};