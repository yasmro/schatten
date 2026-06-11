import{j as e}from"./iframe-DcZIkNsT.js";import{I as s}from"./Icon-BLevg7Sj.js";import{P as c,L as t,a as r,N as n,C as i,S as a}from"./docs-ui-D5WdR4D7.js";import{S as u}from"./search-HMyjzCI0.js";import{A as y}from"./arrow-right-BZoGHXV7.js";import{A as b,C as N,a as w,E as S,D as I,b as T,S as p}from"./star-D6dwmmam.js";import{A as k,a as C,M as L,P as z,C as A,E as D,U as B,B as P,b as E,c as U}from"./user-CnDOxWYS.js";import{C as O,a as R}from"./chevron-up-Drioo6pO.js";import{C as G}from"./check-Pv7ETh3H.js";import{X as W}from"./x-CCyg24J0.js";import{P as _}from"./plus-B9I8CuSX.js";import{S as M}from"./settings-Ci0gKm_q.js";import{T as f}from"./trash-2-DLvMVrMO.js";import{I as F}from"./info-wHy1pCsQ.js";import{C as v}from"./circle-alert-Bqdwvg9z.js";import{C as q,T as V}from"./triangle-alert-CpZi2QpO.js";import"./preload-helper-CrztxVc4.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./createLucideIcon-De4lYWcg.js";const ue={title:"Tokens/Iconography",parameters:{layout:"fullscreen"}},X=({items:o})=>e.jsx("ul",{className:"mb-3 ml-5 list-disc space-y-1 text-sm text-foreground-muted",children:o.map((g,j)=>e.jsx("li",{children:g},j))}),l={name:"Why lucide-react",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(c,{children:"Iconography"}),e.jsxs(t,{children:["Schatten standardizes on ",e.jsx("code",{children:"lucide-react"})," for all iconography. Icons are rendered through the ",e.jsx("code",{children:"Icon"})," component, which normalizes size and color and wires the right accessibility attributes. This page explains why Lucide, how to use ",e.jsx("code",{children:"Icon"}),", and the patterns to follow and avoid."]}),e.jsx(a,{children:"Why lucide-react"}),e.jsx(X,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Lightweight & tree-shakeable"})," — each icon is its own ES module, so only the icons you import ship in the bundle."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Modern & actively maintained"})," — a consistent 24×24 grid and stroke language across 1000+ icons, with regular releases."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"shadcn/ui alignment"})," — Lucide is shadcn/ui's default icon set, and Schatten follows shadcn conventions as its baseline."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"One vendor, one contract"})," — a single icon source keeps sizing, stroke weight, and visual rhythm uniform across the whole design system."]})]})]})},d={name:"Usage",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(c,{children:"Usage"}),e.jsxs(t,{children:["Import the icon you need from ",e.jsx("code",{children:"lucide-react"})," and pass the component to"," ",e.jsx("code",{children:"Icon"})," via the ",e.jsx("code",{children:"icon"})," prop — not a name string."]}),e.jsx(i,{children:`import { Search } from 'lucide-react'
import { Icon } from '@yasmro/schatten'

<Icon icon={Search} />`}),e.jsx(a,{children:"Size"}),e.jsxs(n,{children:["Three sizes: ",e.jsx("code",{children:"sm"})," (16px) / ",e.jsx("code",{children:"md"})," (20px, default) / ",e.jsx("code",{children:"lg"})," ","(24px). For a one-off size outside the scale, pass a Tailwind sizing class via"," ",e.jsx("code",{children:"className"})," (e.g. ",e.jsx("code",{children:'className="size-8"'}),") instead."]}),e.jsx("div",{className:"flex items-end gap-6",children:["sm","md","lg"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:u,size:o,color:"default"}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:o})]},o))}),e.jsx(a,{children:"Color"}),e.jsxs(n,{children:["The ",e.jsx("code",{children:"color"})," vocabulary mirrors ",e.jsx("code",{children:"Text"})," so an icon and its adjacent label share one token. It defaults to ",e.jsx("code",{children:"inherit"})," (takes the surrounding"," ",e.jsx("code",{children:"currentColor"}),"), which keeps ",e.jsx("code",{children:"Icon"})," composition-safe inside an already-colored surface such as a solid Button. ",e.jsx("code",{children:"inverted-*"})," colors are previewed on a dark surface."]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["default","muted","subtle","vermillion","indigo"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:p,size:"lg",color:o}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:o})]},o))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["error","success","warning","info"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:v,size:"lg",color:o}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:o})]},o))}),e.jsx("div",{className:"flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4",children:["inverted","inverted-muted","inverted-subtle"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:p,size:"lg",color:o}),e.jsx("span",{className:"font-mono text-xs text-inverted-foreground-muted",children:o})]},o))})]}),e.jsx(a,{children:"Accessibility"}),e.jsxs(n,{children:["Accessibility is driven by the standard ",e.jsx("code",{children:"aria-label"})," attribute — there is no dedicated prop. Omit it for decorative icons (",e.jsx("code",{children:'aria-hidden="true"'})," is applied automatically); provide it for meaningful icons (",e.jsx("code",{children:'role="img"'})," is applied, so the icon is queryable via ",e.jsxs("code",{children:["getByRole('img', ","{ name }",")"]}),")."]}),e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:p,size:"lg",color:"default"}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:"decorative"}),e.jsx("span",{className:"text-xs text-foreground-subtle",children:'aria-hidden="true"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{icon:f,size:"lg",color:"default","aria-label":"Delete"}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:'aria-label="Delete"'}),e.jsx("span",{className:"text-xs text-foreground-subtle",children:'role="img"'})]})]}),e.jsx(i,{children:`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"`})]})},m={name:"Pass the component, not a name",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(c,{children:"Pass the component, not a name"}),e.jsxs(t,{children:[e.jsx("code",{children:"Icon"})," takes a Lucide ",e.jsx("em",{children:"component"})," (",e.jsxs("code",{children:["icon=","{Search}"]}),"), not a name string (",e.jsx("code",{children:'name="Search"'}),"). This is a deliberate design choice with three benefits."]}),e.jsx(a,{children:"1. Tree-shaking"}),e.jsx(n,{children:"Only the icons you actually import end up in the bundle. A name-string API would have to reference a map of every possible icon, defeating tree-shaking."}),e.jsx(a,{children:"2. Typos become build errors"}),e.jsxs(n,{children:["A misspelled component name is a compile-time error. A misspelled ",e.jsx("em",{children:"string"})," would fail silently at runtime (an undefined icon)."]}),e.jsx(i,{children:`// component — a typo is a build error
import { Search } from 'lucide-react'
<Icon icon={Search} />

// there is no \`name\` prop in Schatten — this does not type-check
<Icon name="Search" />
<Icon name="Serach" />  // …and a typo could never be caught at build time`}),e.jsx(a,{children:"3. No allowlist to maintain"}),e.jsxs(n,{children:[e.jsx("code",{children:"Icon"})," accepts ",e.jsx("strong",{children:"any"})," Lucide icon — there is no"," ",e.jsx("code",{children:"ICON_MAP"})," or allowlist file to keep in sync. The vendor is fixed to Lucide (the"," ",e.jsx("code",{children:"icon"})," prop is typed ",e.jsx("code",{children:"LucideIcon"}),"); widening to a vendor-agnostic type later is an additive, non-breaking change."]})]})},Y=[{name:"ArrowRight",icon:y},{name:"ArrowLeft",icon:b},{name:"ArrowUp",icon:k},{name:"ArrowDown",icon:C},{name:"ChevronRight",icon:N},{name:"ChevronLeft",icon:w},{name:"ChevronDown",icon:O},{name:"ChevronUp",icon:R},{name:"Check",icon:G},{name:"X",icon:W},{name:"Plus",icon:_},{name:"Minus",icon:L},{name:"Search",icon:u},{name:"Settings",icon:M},{name:"Trash2",icon:f},{name:"Pencil",icon:z},{name:"Copy",icon:A},{name:"Eye",icon:S},{name:"EyeOff",icon:D},{name:"Info",icon:F},{name:"CircleAlert",icon:v},{name:"CircleCheck",icon:q},{name:"TriangleAlert",icon:V},{name:"Download",icon:I},{name:"Upload",icon:B},{name:"ExternalLink",icon:T},{name:"Bell",icon:P},{name:"Calendar",icon:E},{name:"User",icon:U},{name:"Star",icon:p}],h={name:"Gallery",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(c,{children:"Gallery"}),e.jsxs(t,{children:["A representative selection of ",e.jsx("code",{children:"lucide-react"})," icons commonly used across Schatten components. ",e.jsx("strong",{children:"This is documentation, not an allowlist"})," — ",e.jsx("code",{children:"Icon"})," ","accepts any of Lucide's 1000+ icons. Browse the full set at"," ",e.jsx("a",{href:"https://lucide.dev/icons",target:"_blank",rel:"noreferrer",className:"text-info underline",children:"lucide.dev/icons"}),"."]}),e.jsx("div",{className:"grid grid-cols-6 gap-6",children:Y.map(({name:o,icon:g})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:g,size:"lg",color:"default"}),e.jsx("span",{className:"font-mono text-xs text-foreground-muted",children:o})]},o))})]})},x={name:"Do's and Don'ts",render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl px-8 py-12",children:[e.jsx(c,{children:"Do's & Don'ts"}),e.jsxs(t,{children:["All of these render — the difference is consistency and accessibility. Always go through"," ",e.jsx("code",{children:"Icon"})," so size, color tokens, and a11y defaults stay uniform."]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{children:"✅ Wrap in Icon"}),e.jsx(n,{children:"Size, color tokens, and a11y defaults are applied."}),e.jsx("div",{className:"rounded-lg border border-success bg-success-subtle p-4",children:e.jsx(s,{icon:u,size:"lg",color:"default"})}),e.jsx(i,{children:"<Icon icon={Search} />"})]}),e.jsxs("div",{children:[e.jsx(r,{children:"❌ Raw Lucide element"}),e.jsx(n,{children:"Bypasses the size scale, color tokens, and a11y defaults."}),e.jsx("div",{className:"rounded-lg border border-warning bg-warning-subtle p-4 text-foreground",children:e.jsx(u,{})}),e.jsx(i,{children:"<Search />  // not normalized"})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(r,{children:"✅ Label a meaningful icon"}),e.jsx(n,{children:'Exposed as role="img" with an accessible name.'}),e.jsx(i,{children:'<Icon icon={Trash2} aria-label="Delete" />'})]}),e.jsxs("div",{children:[e.jsx(r,{children:"❌ aria-hidden on a labelled icon"}),e.jsx(n,{children:"Contradicts the label and drops it from the a11y tree — Icon warns in dev."}),e.jsx(i,{children:'<Icon icon={Trash2} aria-label="Delete" aria-hidden />'})]})]}),e.jsx(a,{children:"Don't hand-write SVG for icons Lucide already ships"}),e.jsxs(n,{children:["If the icon exists in Lucide, use it through ",e.jsx("code",{children:"Icon"})," so sizing, color tokens, and accessibility stay consistent. Reserve a raw ",e.jsx("code",{children:"<svg>"})," for genuinely custom marks that are not part of the icon set."]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Why lucide-react',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Iconography</PageTitle>
      <Lead>
        Schatten standardizes on <code>lucide-react</code> for all iconography. Icons are rendered
        through the <code>Icon</code> component, which normalizes size and color and wires the right
        accessibility attributes. This page explains why Lucide, how to use <code>Icon</code>, and
        the patterns to follow and avoid.
      </Lead>

      <SectionTitle>Why lucide-react</SectionTitle>
      <Bullets items={[<>
            <strong>Lightweight &amp; tree-shakeable</strong> — each icon is its own ES module, so
            only the icons you import ship in the bundle.
          </>, <>
            <strong>Modern &amp; actively maintained</strong> — a consistent 24×24 grid and stroke
            language across 1000+ icons, with regular releases.
          </>, <>
            <strong>shadcn/ui alignment</strong> — Lucide is shadcn/ui's default icon set, and
            Schatten follows shadcn conventions as its baseline.
          </>, <>
            <strong>One vendor, one contract</strong> — a single icon source keeps sizing, stroke
            weight, and visual rhythm uniform across the whole design system.
          </>]} />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Usage',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Usage</PageTitle>
      <Lead>
        Import the icon you need from <code>lucide-react</code> and pass the component to{' '}
        <code>Icon</code> via the <code>icon</code> prop — not a name string.
      </Lead>
      <CodeBlock>{\`import { Search } from 'lucide-react'
import { Icon } from '@yasmro/schatten'

<Icon icon={Search} />\`}</CodeBlock>

      <SectionTitle>Size</SectionTitle>
      <Note>
        Three sizes: <code>sm</code> (16px) / <code>md</code> (20px, default) / <code>lg</code>{' '}
        (24px). For a one-off size outside the scale, pass a Tailwind sizing class via{' '}
        <code>className</code> (e.g. <code>className="size-8"</code>) instead.
      </Note>
      <div className="flex items-end gap-6">
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="flex flex-col items-center gap-1">
            <Icon icon={Search} size={size} color="default" />
            <span className="font-mono text-xs text-foreground-muted">{size}</span>
          </div>)}
      </div>

      <SectionTitle>Color</SectionTitle>
      <Note>
        The <code>color</code> vocabulary mirrors <code>Text</code> so an icon and its adjacent
        label share one token. It defaults to <code>inherit</code> (takes the surrounding{' '}
        <code>currentColor</code>), which keeps <code>Icon</code> composition-safe inside an
        already-colored surface such as a solid Button. <code>inverted-*</code> colors are previewed
        on a dark surface.
      </Note>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          {(['default', 'muted', 'subtle', 'vermillion', 'indigo'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={Star} size="lg" color={color} />
              <span className="font-mono text-xs text-foreground-muted">{color}</span>
            </div>)}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {(['error', 'success', 'warning', 'info'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={CircleAlert} size="lg" color={color} />
              <span className="font-mono text-xs text-foreground-muted">{color}</span>
            </div>)}
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4">
          {(['inverted', 'inverted-muted', 'inverted-subtle'] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
              <Icon icon={Star} size="lg" color={color} />
              <span className="font-mono text-xs text-inverted-foreground-muted">{color}</span>
            </div>)}
        </div>
      </div>

      <SectionTitle>Accessibility</SectionTitle>
      <Note>
        Accessibility is driven by the standard <code>aria-label</code> attribute — there is no
        dedicated prop. Omit it for decorative icons (<code>aria-hidden="true"</code> is applied
        automatically); provide it for meaningful icons (<code>role="img"</code> is applied, so the
        icon is queryable via <code>getByRole('img', {'{ name }'})</code>).
      </Note>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center gap-1">
          <Icon icon={Star} size="lg" color="default" />
          <span className="font-mono text-xs text-foreground-muted">decorative</span>
          <span className="text-xs text-foreground-subtle">aria-hidden="true"</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Icon icon={Trash2} size="lg" color="default" aria-label="Delete" />
          <span className="font-mono text-xs text-foreground-muted">aria-label="Delete"</span>
          <span className="text-xs text-foreground-subtle">role="img"</span>
        </div>
      </div>
      <CodeBlock>{\`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"\`}</CodeBlock>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Pass the component, not a name',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Pass the component, not a name</PageTitle>
      <Lead>
        <code>Icon</code> takes a Lucide <em>component</em> (<code>icon={'{Search}'}</code>), not a
        name string (<code>name="Search"</code>). This is a deliberate design choice with three
        benefits.
      </Lead>

      <SectionTitle>1. Tree-shaking</SectionTitle>
      <Note>
        Only the icons you actually import end up in the bundle. A name-string API would have to
        reference a map of every possible icon, defeating tree-shaking.
      </Note>

      <SectionTitle>2. Typos become build errors</SectionTitle>
      <Note>
        A misspelled component name is a compile-time error. A misspelled <em>string</em> would fail
        silently at runtime (an undefined icon).
      </Note>
      <CodeBlock>{\`// component — a typo is a build error
import { Search } from 'lucide-react'
<Icon icon={Search} />

// there is no \\\`name\\\` prop in Schatten — this does not type-check
<Icon name="Search" />
<Icon name="Serach" />  // …and a typo could never be caught at build time\`}</CodeBlock>

      <SectionTitle>3. No allowlist to maintain</SectionTitle>
      <Note>
        <code>Icon</code> accepts <strong>any</strong> Lucide icon — there is no{' '}
        <code>ICON_MAP</code> or allowlist file to keep in sync. The vendor is fixed to Lucide (the{' '}
        <code>icon</code> prop is typed <code>LucideIcon</code>); widening to a vendor-agnostic type
        later is an additive, non-breaking change.
      </Note>
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Gallery',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Gallery</PageTitle>
      <Lead>
        A representative selection of <code>lucide-react</code> icons commonly used across Schatten
        components. <strong>This is documentation, not an allowlist</strong> — <code>Icon</code>{' '}
        accepts any of Lucide's 1000+ icons. Browse the full set at{' '}
        <a href="https://lucide.dev/icons" target="_blank" rel="noreferrer" className="text-info underline">
          lucide.dev/icons
        </a>
        .
      </Lead>
      <div className="grid grid-cols-6 gap-6">
        {GALLERY_ICONS.map(({
        name,
        icon
      }) => <div key={name} className="flex flex-col items-center gap-2">
            <Icon icon={icon} size="lg" color="default" />
            <span className="font-mono text-xs text-foreground-muted">{name}</span>
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Do's and Don'ts",
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Do's &amp; Don'ts</PageTitle>
      <Lead>
        All of these render — the difference is consistency and accessibility. Always go through{' '}
        <code>Icon</code> so size, color tokens, and a11y defaults stay uniform.
      </Lead>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Wrap in Icon</SubsectionTitle>
          <Note>Size, color tokens, and a11y defaults are applied.</Note>
          <div className="rounded-lg border border-success bg-success-subtle p-4">
            <Icon icon={Search} size="lg" color="default" />
          </div>
          <CodeBlock>{\`<Icon icon={Search} />\`}</CodeBlock>
        </div>
        <div>
          <SubsectionTitle>❌ Raw Lucide element</SubsectionTitle>
          <Note>Bypasses the size scale, color tokens, and a11y defaults.</Note>
          <div className="rounded-lg border border-warning bg-warning-subtle p-4 text-foreground">
            <Search />
          </div>
          <CodeBlock>{\`<Search />  // not normalized\`}</CodeBlock>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <SubsectionTitle>✅ Label a meaningful icon</SubsectionTitle>
          <Note>Exposed as role="img" with an accessible name.</Note>
          <CodeBlock>{\`<Icon icon={Trash2} aria-label="Delete" />\`}</CodeBlock>
        </div>
        <div>
          <SubsectionTitle>❌ aria-hidden on a labelled icon</SubsectionTitle>
          <Note>Contradicts the label and drops it from the a11y tree — Icon warns in dev.</Note>
          <CodeBlock>{\`<Icon icon={Trash2} aria-label="Delete" aria-hidden />\`}</CodeBlock>
        </div>
      </div>

      <SectionTitle>Don't hand-write SVG for icons Lucide already ships</SectionTitle>
      <Note>
        If the icon exists in Lucide, use it through <code>Icon</code> so sizing, color tokens, and
        accessibility stay consistent. Reserve a raw <code>&lt;svg&gt;</code> for genuinely custom
        marks that are not part of the icon set.
      </Note>
    </div>
}`,...x.parameters?.docs?.source}}};const ge=["WhyLucide","Usage","PassTheComponent","Gallery","DosAndDonts"];export{x as DosAndDonts,h as Gallery,m as PassTheComponent,d as Usage,l as WhyLucide,ge as __namedExportsOrder,ue as default};
