import{j as e}from"./iframe-CUAKIWaI.js";import{I as o}from"./Icon-CvfuxY1z.js";import{S as a}from"./search-DEzRn0L7.js";import{S as c,A as p,C as u,E as f,D as x,a as g}from"./star-CkjY6uDZ.js";import{C as m}from"./circle-alert-CW6KSvO0.js";import{A as v}from"./arrow-right-9wMYvTDX.js";import{A as h,a as y}from"./arrow-up-C8fW2_nY.js";import{C}from"./chevron-right-B8sFL6zv.js";import{C as w,a as N}from"./chevron-up-ByE4TF7Y.js";import{C as S}from"./check-CPg2X4-r.js";import{X as j}from"./x-Bv8nnMPA.js";import{P as b}from"./plus-DRh3sWxX.js";import{M as z,P as A,E as I,U as T,B as L,C as k}from"./upload-Bmn2wDS-.js";import{S as E}from"./settings-CGgJ3SEO.js";import{T as U}from"./trash-2-ufRK0nG9.js";import{C as O}from"./copy-BAxySoO6.js";import{I as P}from"./info-DBgSjJDa.js";import{C as R,T as D}from"./triangle-alert-B1ZXrNmZ.js";import{U as G}from"./user-BSZw900b.js";import"./preload-helper-Cf8mzwP3.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css             */import"./createLucideIcon-CxWrNTQp.js";const l=["inherit","default","muted","subtle","vermillion","indigo","error","success","warning","info","inverted","inverted-muted","inverted-subtle"],me={title:"Components/lv1/Icon",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{description:"Lucide icon component to render. Import it from `lucide-react` and pass it directly.",control:!1,table:{type:{summary:"LucideIcon"}}},size:{description:"Size of the icon.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},color:{description:"Color of the icon. Vocabulary mirrors `Text`’s `color`.",control:"select",options:l,table:{type:{summary:l.map(r=>`"${r}"`).join(" | ")},defaultValue:{summary:"inherit"}}},"aria-label":{description:'Accessible label. Forwarded to the `<svg>` as-is — the component never overrides it. Its presence is what toggles the icon between decorative and meaningful: omitted → `aria-hidden="true"` is auto-applied; provided → `role="img"` is auto-applied. Those two auto-applied attributes can still be overridden by passing `aria-hidden` / `role` explicitly.',control:"text",table:{type:{summary:"string"},defaultValue:{summary:'none — icon is decorative (aria-hidden="true")'}}}},args:{icon:a,size:"md",color:"inherit"}},s={},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(o,{icon:a,size:"sm"}),e.jsx(o,{icon:a,size:"md"}),e.jsx(o,{icon:a,size:"lg"})]})},i={name:"Colors",parameters:{docs:{description:{story:"The `color` vocabulary mirrors `Text`. `inverted-*` colors are previewed on a dark surface."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["default","muted","subtle","vermillion","indigo"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["error","success","warning","info"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:m,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4",children:["inverted","inverted-muted","inverted-subtle"].map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(o,{icon:c,size:"lg",color:r}),e.jsx("span",{className:"text-xs text-inverted-foreground-muted",children:r})]},r))})]})},_=[{name:"ArrowRight",icon:v},{name:"ArrowLeft",icon:p},{name:"ArrowUp",icon:h},{name:"ArrowDown",icon:y},{name:"ChevronRight",icon:C},{name:"ChevronLeft",icon:u},{name:"ChevronDown",icon:w},{name:"ChevronUp",icon:N},{name:"Check",icon:S},{name:"X",icon:j},{name:"Plus",icon:b},{name:"Minus",icon:z},{name:"Search",icon:a},{name:"Settings",icon:E},{name:"Trash2",icon:U},{name:"Pencil",icon:A},{name:"Copy",icon:O},{name:"Eye",icon:f},{name:"EyeOff",icon:I},{name:"Info",icon:P},{name:"CircleAlert",icon:m},{name:"CircleCheck",icon:R},{name:"TriangleAlert",icon:D},{name:"Download",icon:x},{name:"Upload",icon:T},{name:"ExternalLink",icon:g},{name:"Bell",icon:L},{name:"Calendar",icon:k},{name:"User",icon:G},{name:"Star",icon:c}],t={name:"Gallery",parameters:{docs:{description:{story:"A representative selection of `lucide-react` icons. `Icon` accepts any lucide icon — this gallery is documentation, not an allowlist."}}},render:()=>e.jsx("div",{className:"grid grid-cols-6 gap-6",children:_.map(({name:r,icon:d})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(o,{icon:d,size:"lg",color:"default"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const de=["Playground","Sizes","Colors","Gallery"];export{i as Colors,t as Gallery,s as Playground,n as Sizes,de as __namedExportsOrder,me as default};
