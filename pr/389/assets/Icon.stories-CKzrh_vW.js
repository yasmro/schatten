import{j as e}from"./iframe-DogiECDe.js";import{I as o}from"./Icon-D-dLGcAU.js";import{S as a}from"./search-mW-VN31Q.js";import{S as c,A as p,C as u,a as f,E as x,D as g,b as v}from"./star-BT3DU3ud.js";import{C as m}from"./circle-alert-D0ViDw6o.js";import{A as h}from"./arrow-right-DwVlDkKX.js";import{A as y,a as C,M as w,P as N,C as S,E as b,U as j,B as z,b as A,c as I}from"./user-DB9W7AIL.js";import{C as T,a as L}from"./chevron-up-ou58_voX.js";import{C as k}from"./check-B9so4Oat.js";import{X as E}from"./x-BUlDZf0R.js";import{P as O}from"./plus-z7IfRuXc.js";import{S as P}from"./settings-BSrNF3Yo.js";import{T as U}from"./trash-2-ByMsyAup.js";import{I as R}from"./info-lrmqRJZe.js";import{C as D,T as G}from"./triangle-alert-PWdPjUNC.js";import"./preload-helper-vkdtEDgo.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./createLucideIcon-C4szBrwm.js";const l=["inherit","default","muted","subtle","vermillion","indigo","error","success","warning","info","inverted","inverted-muted","inverted-subtle"],ie={title:"Components/lv1/Icon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{description:"Lucide icon component to render. Import it from `lucide-react` and pass it directly.",control:!1,table:{type:{summary:"LucideIcon"}}},size:{description:"Size of the icon.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},color:{description:"Color of the icon. Vocabulary mirrors `Text`’s `color`.",control:"select",options:l,table:{type:{summary:l.map(r=>`"${r}"`).join(" | ")},defaultValue:{summary:"inherit"}}},"aria-label":{description:'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. Its presence is what toggles the icon between decorative and meaningful: omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',control:"text",table:{type:{summary:"string"},defaultValue:{summary:'none — icon is decorative (aria-hidden="true")'}}}},args:{icon:a,size:"md",color:"inherit"}},s={},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(o,{icon:a,size:"sm"}),e.jsx(o,{icon:a,size:"md"}),e.jsx(o,{icon:a,size:"lg"})]})},i={name:"Colors",parameters:{docs:{description:{story:"The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["default","muted","subtle","vermillion","indigo"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["error","success","warning","info"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:m,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4",children:["inverted","inverted-muted","inverted-subtle"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-inverted-foreground-muted",children:r})]},r))})]})},_=[{name:"ArrowRight",icon:h},{name:"ArrowLeft",icon:p},{name:"ArrowUp",icon:y},{name:"ArrowDown",icon:C},{name:"ChevronRight",icon:u},{name:"ChevronLeft",icon:f},{name:"ChevronDown",icon:T},{name:"ChevronUp",icon:L},{name:"Check",icon:k},{name:"X",icon:E},{name:"Plus",icon:O},{name:"Minus",icon:w},{name:"Search",icon:a},{name:"Settings",icon:P},{name:"Trash2",icon:U},{name:"Pencil",icon:N},{name:"Copy",icon:S},{name:"Eye",icon:x},{name:"EyeOff",icon:b},{name:"Info",icon:R},{name:"CircleAlert",icon:m},{name:"CircleCheck",icon:D},{name:"TriangleAlert",icon:G},{name:"Download",icon:g},{name:"Upload",icon:j},{name:"ExternalLink",icon:v},{name:"Bell",icon:z},{name:"Calendar",icon:A},{name:"User",icon:I},{name:"Star",icon:c}],t={name:"Gallery",parameters:{docs:{description:{story:"A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist."}}},render:()=>e.jsx("div",{className:"grid grid-cols-6 gap-6",children:_.map(({name:r,icon:d})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(o,{icon:d,size:"lg",color:"default"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["Playground","Sizes","Colors","Gallery"];export{i as Colors,t as Gallery,s as Playground,n as Sizes,te as __namedExportsOrder,ie as default};
