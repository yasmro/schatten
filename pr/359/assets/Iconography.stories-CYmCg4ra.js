import{i as e}from"./preload-helper-BwGARNBo.js";import{t}from"./iframe-DRAyPivV.js";import{B as n,E as r,H as i,K as a,O as o,P as s,Q as c,R as l,S as u,W as d,X as f,bt as p,c as m,ct as h,et as g,ft as _,gt as v,i as y,it as b,m as x,mt as S,n as C,nt as w,o as T,ot as E,t as D,u as O,ut as k,v as A,vt as j,w as M}from"./lucide-react-BOjx0YLZ.js";import{n as N,t as P}from"./Icon-DIPNh8dz.js";import{a as F,c as I,i as L,o as R,r as z,s as B,t as V}from"./docs-ui-5pNv9biD.js";var H,U,W,G,K,q,J,Y,X,Z;e((()=>{D(),N(),I(),H=t(),U={title:`Tokens/Iconography`,parameters:{layout:`fullscreen`}},W=({items:e})=>(0,H.jsx)(`ul`,{className:`mb-3 ml-5 list-disc space-y-1 text-sm text-foreground-muted`,children:e.map((e,t)=>(0,H.jsx)(`li`,{children:e},t))}),G={name:`Why lucide-react`,render:()=>(0,H.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,H.jsx)(F,{children:`Iconography`}),(0,H.jsxs)(z,{children:[`Schatten standardizes on `,(0,H.jsx)(`code`,{children:`lucide-react`}),` for all iconography. Icons are rendered through the `,(0,H.jsx)(`code`,{children:`Icon`}),` component, which normalizes size and color and wires the right accessibility attributes. This page explains why Lucide, how to use `,(0,H.jsx)(`code`,{children:`Icon`}),`, and the patterns to follow and avoid.`]}),(0,H.jsx)(R,{children:`Why lucide-react`}),(0,H.jsx)(W,{items:[(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`strong`,{children:`Lightweight & tree-shakeable`}),` — each icon is its own ES module, so only the icons you import ship in the bundle.`]}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`strong`,{children:`Modern & actively maintained`}),` — a consistent 24×24 grid and stroke language across 1000+ icons, with regular releases.`]}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`strong`,{children:`shadcn/ui alignment`}),` — Lucide is shadcn/ui's default icon set, and Schatten follows shadcn conventions as its baseline.`]}),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`strong`,{children:`One vendor, one contract`}),` — a single icon source keeps sizing, stroke weight, and visual rhythm uniform across the whole design system.`]})]})]})},K={name:`Usage`,render:()=>(0,H.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,H.jsx)(F,{children:`Usage`}),(0,H.jsxs)(z,{children:[`Import the icon you need from `,(0,H.jsx)(`code`,{children:`lucide-react`}),` and pass the component to`,` `,(0,H.jsx)(`code`,{children:`Icon`}),` via the `,(0,H.jsx)(`code`,{children:`icon`}),` prop — not a name string.`]}),(0,H.jsx)(V,{children:`import { Search } from 'lucide-react'
import { Icon } from '@yasmro/schatten'

<Icon icon={Search} />`}),(0,H.jsx)(R,{children:`Size`}),(0,H.jsxs)(L,{children:[`Three sizes: `,(0,H.jsx)(`code`,{children:`sm`}),` (16px) / `,(0,H.jsx)(`code`,{children:`md`}),` (20px, default) / `,(0,H.jsx)(`code`,{children:`lg`}),` `,`(24px). For a one-off size outside the scale, pass a Tailwind sizing class via`,` `,(0,H.jsx)(`code`,{children:`className`}),` (e.g. `,(0,H.jsx)(`code`,{children:`className="size-8"`}),`) instead.`]}),(0,H.jsx)(`div`,{className:`flex items-end gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:u,size:e,color:`default`}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,H.jsx)(R,{children:`Color`}),(0,H.jsxs)(L,{children:[`The `,(0,H.jsx)(`code`,{children:`color`}),` vocabulary mirrors `,(0,H.jsx)(`code`,{children:`Text`}),` so an icon and its adjacent label share one token. It defaults to `,(0,H.jsx)(`code`,{children:`inherit`}),` (takes the surrounding`,` `,(0,H.jsx)(`code`,{children:`currentColor`}),`), which keeps `,(0,H.jsx)(`code`,{children:`Icon`}),` composition-safe inside an already-colored surface such as a solid Button. `,(0,H.jsx)(`code`,{children:`inverted-*`}),` colors are previewed on a dark surface.`]}),(0,H.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,H.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`default`,`muted`,`subtle`,`vermillion`,`indigo`].map(e=>(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:x,size:`lg`,color:e}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,H.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`error`,`success`,`warning`,`info`].map(e=>(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:c,size:`lg`,color:e}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,H.jsx)(`div`,{className:`flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4`,children:[`inverted`,`inverted-muted`,`inverted-subtle`].map(e=>(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:x,size:`lg`,color:e}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-inverted-foreground-muted`,children:e})]},e))})]}),(0,H.jsx)(R,{children:`Accessibility`}),(0,H.jsxs)(L,{children:[`Accessibility is driven by the standard `,(0,H.jsx)(`code`,{children:`aria-label`}),` attribute — there is no dedicated prop. Omit it for decorative icons (`,(0,H.jsx)(`code`,{children:`aria-hidden="true"`}),` is applied automatically); provide it for meaningful icons (`,(0,H.jsx)(`code`,{children:`role="img"`}),` is applied, so the icon is queryable via `,(0,H.jsxs)(`code`,{children:[`getByRole('img', `,`{ name }`,`)`]}),`).`]}),(0,H.jsxs)(`div`,{className:`flex flex-wrap gap-8`,children:[(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:x,size:`lg`,color:`default`}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:`decorative`}),(0,H.jsx)(`span`,{className:`text-xs text-foreground-subtle`,children:`aria-hidden="true"`})]}),(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,H.jsx)(P,{icon:O,size:`lg`,color:`default`,"aria-label":`Delete`}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:`aria-label="Delete"`}),(0,H.jsx)(`span`,{className:`text-xs text-foreground-subtle`,children:`role="img"`})]})]}),(0,H.jsx)(V,{children:`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"`})]})},q={name:`Pass the component, not a name`,render:()=>(0,H.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,H.jsx)(F,{children:`Pass the component, not a name`}),(0,H.jsxs)(z,{children:[(0,H.jsx)(`code`,{children:`Icon`}),` takes a Lucide `,(0,H.jsx)(`em`,{children:`component`}),` (`,(0,H.jsxs)(`code`,{children:[`icon=`,`{Search}`]}),`), not a name string (`,(0,H.jsx)(`code`,{children:`name="Search"`}),`). This is a deliberate design choice with three benefits.`]}),(0,H.jsx)(R,{children:`1. Tree-shaking`}),(0,H.jsx)(L,{children:`Only the icons you actually import end up in the bundle. A name-string API would have to reference a map of every possible icon, defeating tree-shaking.`}),(0,H.jsx)(R,{children:`2. Typos become build errors`}),(0,H.jsxs)(L,{children:[`A misspelled component name is a compile-time error. A misspelled `,(0,H.jsx)(`em`,{children:`string`}),` would fail silently at runtime (an undefined icon).`]}),(0,H.jsx)(V,{children:`// component — a typo is a build error
import { Search } from 'lucide-react'
<Icon icon={Search} />

// there is no \`name\` prop in Schatten — this does not type-check
<Icon name="Search" />
<Icon name="Serach" />  // …and a typo could never be caught at build time`}),(0,H.jsx)(R,{children:`3. No allowlist to maintain`}),(0,H.jsxs)(L,{children:[(0,H.jsx)(`code`,{children:`Icon`}),` accepts `,(0,H.jsx)(`strong`,{children:`any`}),` Lucide icon — there is no`,` `,(0,H.jsx)(`code`,{children:`ICON_MAP`}),` or allowlist file to keep in sync. The vendor is fixed to Lucide (the`,` `,(0,H.jsx)(`code`,{children:`icon`}),` prop is typed `,(0,H.jsx)(`code`,{children:`LucideIcon`}),`); widening to a vendor-agnostic type later is an additive, non-breaking change.`]})]})},J=[{name:`ArrowRight`,icon:v},{name:`ArrowLeft`,icon:j},{name:`ArrowUp`,icon:S},{name:`ArrowDown`,icon:p},{name:`ChevronRight`,icon:w},{name:`ChevronLeft`,icon:b},{name:`ChevronDown`,icon:E},{name:`ChevronUp`,icon:g},{name:`Check`,icon:h},{name:`X`,icon:C},{name:`Plus`,icon:M},{name:`Minus`,icon:o},{name:`Search`,icon:u},{name:`Settings`,icon:A},{name:`Trash2`,icon:O},{name:`Pencil`,icon:r},{name:`Copy`,icon:a},{name:`Eye`,icon:l},{name:`EyeOff`,icon:n},{name:`Info`,icon:s},{name:`CircleAlert`,icon:c},{name:`CircleCheck`,icon:f},{name:`TriangleAlert`,icon:m},{name:`Download`,icon:d},{name:`Upload`,icon:T},{name:`ExternalLink`,icon:i},{name:`Bell`,icon:_},{name:`Calendar`,icon:k},{name:`User`,icon:y},{name:`Star`,icon:x}],Y={name:`Gallery`,render:()=>(0,H.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,H.jsx)(F,{children:`Gallery`}),(0,H.jsxs)(z,{children:[`A representative selection of `,(0,H.jsx)(`code`,{children:`lucide-react`}),` icons commonly used across Schatten components. `,(0,H.jsx)(`strong`,{children:`This is documentation, not an allowlist`}),` — `,(0,H.jsx)(`code`,{children:`Icon`}),` `,`accepts any of Lucide's 1000+ icons. Browse the full set at`,` `,(0,H.jsx)(`a`,{href:`https://lucide.dev/icons`,target:`_blank`,rel:`noreferrer`,className:`text-info underline`,children:`lucide.dev/icons`}),`.`]}),(0,H.jsx)(`div`,{className:`grid grid-cols-6 gap-6`,children:J.map(({name:e,icon:t})=>(0,H.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,H.jsx)(P,{icon:t,size:`lg`,color:`default`}),(0,H.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))})]})},X={name:`Do's and Don'ts`,render:()=>(0,H.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,H.jsx)(F,{children:`Do's & Don'ts`}),(0,H.jsxs)(z,{children:[`All of these render — the difference is consistency and accessibility. Always go through`,` `,(0,H.jsx)(`code`,{children:`Icon`}),` so size, color tokens, and a11y defaults stay uniform.`]}),(0,H.jsxs)(`div`,{className:`grid grid-cols-2 gap-6`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(B,{children:`✅ Wrap in Icon`}),(0,H.jsx)(L,{children:`Size, color tokens, and a11y defaults are applied.`}),(0,H.jsx)(`div`,{className:`rounded-lg border border-success bg-success-subtle p-4`,children:(0,H.jsx)(P,{icon:u,size:`lg`,color:`default`})}),(0,H.jsx)(V,{children:`<Icon icon={Search} />`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(B,{children:`❌ Raw Lucide element`}),(0,H.jsx)(L,{children:`Bypasses the size scale, color tokens, and a11y defaults.`}),(0,H.jsx)(`div`,{className:`rounded-lg border border-warning bg-warning-subtle p-4 text-foreground`,children:(0,H.jsx)(u,{})}),(0,H.jsx)(V,{children:`<Search />  // not normalized`})]})]}),(0,H.jsxs)(`div`,{className:`mt-6 grid grid-cols-2 gap-6`,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(B,{children:`✅ Label a meaningful icon`}),(0,H.jsx)(L,{children:`Exposed as role="img" with an accessible name.`}),(0,H.jsx)(V,{children:`<Icon icon={Trash2} aria-label="Delete" />`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(B,{children:`❌ aria-hidden on a labelled icon`}),(0,H.jsx)(L,{children:`Contradicts the label and drops it from the a11y tree — Icon warns in dev.`}),(0,H.jsx)(V,{children:`<Icon icon={Trash2} aria-label="Delete" aria-hidden />`})]})]}),(0,H.jsx)(R,{children:`Don't hand-write SVG for icons Lucide already ships`}),(0,H.jsxs)(L,{children:[`If the icon exists in Lucide, use it through `,(0,H.jsx)(`code`,{children:`Icon`}),` so sizing, color tokens, and accessibility stay consistent. Reserve a raw `,(0,H.jsx)(`code`,{children:`<svg>`}),` for genuinely custom marks that are not part of the icon set.`]})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`WhyLucide`,`Usage`,`PassTheComponent`,`Gallery`,`DosAndDonts`]}))();export{X as DosAndDonts,Y as Gallery,q as PassTheComponent,K as Usage,G as WhyLucide,Z as __namedExportsOrder,U as default};