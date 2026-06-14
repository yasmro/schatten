import{j as e}from"./iframe-BCPhhQWA.js";import{I as o}from"./Icon-CN5sNRQP.js";import{S as a}from"./search-CX3G13qf.js";import{S as c,A as p,C as u,E as f,D as x,a as g}from"./star-9OUiA0fa.js";import{C as m}from"./circle-alert-MQlQ6PZj.js";import{A as v}from"./arrow-right-CXG2prrf.js";import{A as h,a as y,M as C,P as w,E as N,U as S,B as j,C as b}from"./upload-Qc1AQ-IA.js";import{C as z}from"./chevron-right-wsiDUEds.js";import{C as A,a as I}from"./chevron-up-D4vQIYtc.js";import{C as T}from"./check-CnpQ_H5X.js";import{X as L}from"./x-DGTONil1.js";import{P as k}from"./plus-CYOx58uu.js";import{S as E}from"./settings-C1rOMhZ0.js";import{T as U}from"./trash-2-o6rzQBT1.js";import{C as O,U as P}from"./user-DtoTybrQ.js";import{I as R}from"./info-Cl_qP9sR.js";import{C as D,T as G}from"./triangle-alert-C9v0m4Sx.js";import"./preload-helper-BMI3okD1.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./createLucideIcon-CQHeXleI.js";const l=["inherit","default","muted","subtle","vermillion","indigo","error","success","warning","info","inverted","inverted-muted","inverted-subtle"],ce={title:"Components/lv1/Icon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{description:"Lucide icon component to render. Import it from `lucide-react` and pass it directly.",control:!1,table:{type:{summary:"LucideIcon"}}},size:{description:"Size of the icon.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},color:{description:"Color of the icon. Vocabulary mirrors `Text`’s `color`.",control:"select",options:l,table:{type:{summary:l.map(r=>`"${r}"`).join(" | ")},defaultValue:{summary:"inherit"}}},"aria-label":{description:'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. Its presence is what toggles the icon between decorative and meaningful: omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',control:"text",table:{type:{summary:"string"},defaultValue:{summary:'none — icon is decorative (aria-hidden="true")'}}}},args:{icon:a,size:"md",color:"inherit"}},s={},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(o,{icon:a,size:"sm"}),e.jsx(o,{icon:a,size:"md"}),e.jsx(o,{icon:a,size:"lg"})]})},i={name:"Colors",parameters:{docs:{description:{story:"The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["default","muted","subtle","vermillion","indigo"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["error","success","warning","info"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:m,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4",children:["inverted","inverted-muted","inverted-subtle"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-inverted-foreground-muted",children:r})]},r))})]})},_=[{name:"ArrowRight",icon:v},{name:"ArrowLeft",icon:p},{name:"ArrowUp",icon:h},{name:"ArrowDown",icon:y},{name:"ChevronRight",icon:z},{name:"ChevronLeft",icon:u},{name:"ChevronDown",icon:A},{name:"ChevronUp",icon:I},{name:"Check",icon:T},{name:"X",icon:L},{name:"Plus",icon:k},{name:"Minus",icon:C},{name:"Search",icon:a},{name:"Settings",icon:E},{name:"Trash2",icon:U},{name:"Pencil",icon:w},{name:"Copy",icon:O},{name:"Eye",icon:f},{name:"EyeOff",icon:N},{name:"Info",icon:R},{name:"CircleAlert",icon:m},{name:"CircleCheck",icon:D},{name:"TriangleAlert",icon:G},{name:"Download",icon:x},{name:"Upload",icon:S},{name:"ExternalLink",icon:g},{name:"Bell",icon:j},{name:"Calendar",icon:b},{name:"User",icon:P},{name:"Star",icon:c}],t={name:"Gallery",parameters:{docs:{description:{story:"A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist."}}},render:()=>e.jsx("div",{className:"grid grid-cols-6 gap-6",children:_.map(({name:r,icon:d})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(o,{icon:d,size:"lg",color:"default"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-end gap-4">
      <Icon icon={Search} size="sm" />
      <Icon icon={Search} size="md" />
      <Icon icon={Search} size="lg" />
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const le=["Playground","Sizes","Colors","Gallery"];export{i as Colors,t as Gallery,s as Playground,n as Sizes,le as __namedExportsOrder,ce as default};
