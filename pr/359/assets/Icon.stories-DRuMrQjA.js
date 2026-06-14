import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-Dc0mLLnz.js";import{A as n,At as r,E as i,Et as a,I as o,J as s,M as c,Mt as l,Ot as u,P as d,Q as f,St as p,W as m,X as h,bt as g,c as _,ct as v,et as y,ft as b,gt as x,i as S,m as C,mt as w,n as T,nt as E,t as D,u as O,ut as k,v as A,vt as j,wt as M}from"./lucide-react-VAXaEEz3.js";import{n as N,t as P}from"./Icon-DxeFmhb-.js";var F,I,L,R,z,B,V,H,U;e((()=>{D(),N(),F=t(),I=[`inherit`,`default`,`muted`,`subtle`,`vermillion`,`indigo`,`error`,`success`,`warning`,`info`,`inverted`,`inverted-muted`,`inverted-subtle`],L={title:`Components/lv1/Icon`,component:P,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{description:"Lucide icon component to render. Import it from `lucide-react` and pass it directly.",control:!1,table:{type:{summary:`LucideIcon`}}},size:{description:`Size of the icon.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},color:{description:"Color of the icon. Vocabulary mirrors `Text`’s `color`.",control:`select`,options:I,table:{type:{summary:I.map(e=>`"${e}"`).join(` | `)},defaultValue:{summary:`inherit`}}},"aria-label":{description:'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. Its presence is what toggles the icon between decorative and meaningful: omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`none — icon is decorative (aria-hidden="true")`}}}},args:{icon:n,size:`md`,color:`inherit`}},R={},z={name:`Sizes`,render:()=>(0,F.jsxs)(`div`,{className:`flex items-end gap-4`,children:[(0,F.jsx)(P,{icon:n,size:`sm`}),(0,F.jsx)(P,{icon:n,size:`md`}),(0,F.jsx)(P,{icon:n,size:`lg`})]})},B={name:`Colors`,parameters:{docs:{description:{story:"The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface."}}},render:()=>(0,F.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`default`,`muted`,`subtle`,`vermillion`,`indigo`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:A,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`error`,`success`,`warning`,`info`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:k,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))}),(0,F.jsx)(`div`,{className:`flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4`,children:[`inverted`,`inverted-muted`,`inverted-subtle`].map(e=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,F.jsx)(P,{icon:A,size:`lg`,color:e}),(0,F.jsx)(`span`,{className:`text-xs text-inverted-foreground-muted`,children:e})]},e))})]})},V=[{name:`ArrowRight`,icon:u},{name:`ArrowLeft`,icon:r},{name:`ArrowUp`,icon:a},{name:`ArrowDown`,icon:l},{name:`ChevronRight`,icon:w},{name:`ChevronLeft`,icon:x},{name:`ChevronDown`,icon:j},{name:`ChevronUp`,icon:b},{name:`Check`,icon:g},{name:`X`,icon:T},{name:`Plus`,icon:c},{name:`Minus`,icon:o},{name:`Search`,icon:n},{name:`Settings`,icon:i},{name:`Trash2`,icon:C},{name:`Pencil`,icon:d},{name:`Copy`,icon:E},{name:`Eye`,icon:s},{name:`EyeOff`,icon:h},{name:`Info`,icon:m},{name:`CircleAlert`,icon:k},{name:`CircleCheck`,icon:v},{name:`TriangleAlert`,icon:O},{name:`Download`,icon:y},{name:`Upload`,icon:_},{name:`ExternalLink`,icon:f},{name:`Bell`,icon:M},{name:`Calendar`,icon:p},{name:`User`,icon:S},{name:`Star`,icon:A}],H={name:`Gallery`,parameters:{docs:{description:{story:"A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist."}}},render:()=>(0,F.jsx)(`div`,{className:`grid grid-cols-6 gap-6`,children:V.map(({name:e,icon:t})=>(0,F.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,F.jsx)(P,{icon:t,size:`lg`,color:`default`}),(0,F.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:e})]},e))})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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