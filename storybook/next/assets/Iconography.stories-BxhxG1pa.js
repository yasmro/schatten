import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-yMYJytO5.js";import{i as ee,n,r,t as te}from"./arrow-up-BIzAFchx.js";import{a as ne,c as re,d as ie,f as ae,i as oe,l as se,n as ce,o as le,r as ue,s as de,t as i,u as fe}from"./star-Bgq6SKN4.js";import{n as pe,t as me}from"./arrow-right-D0yx09rs.js";import{a as he,c as ge,d as _e,f as ve,i as ye,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./upload-jls8iG3g.js";import{n as f,t as p}from"./check-D9Gu8XGU.js";import{i as m,n as h,r as g,t as _}from"./chevron-up-BxmTQOzS.js";import{n as v,t as y}from"./chevron-right-DRFD24r4.js";import{n as b,t as x}from"./circle-alert-CkVkbZNz.js";import{i as S,n as C,r as w,t as T}from"./triangle-alert-hR9Lm_og.js";import{n as E,t as D}from"./copy-Dhs2WWJI.js";import{n as O,t as k}from"./info-MyjI3oUm.js";import{n as A,t as j}from"./plus-DNxT2-fV.js";import{n as M,t as N}from"./search-DYCJ-VGI.js";import{n as P,t as be}from"./settings-37hm98rW.js";import{n as xe,t as F}from"./trash-2-CDErCF3N.js";import{n as Se,t as Ce}from"./user-BAOt6L1D.js";import{n as we,t as Te}from"./x-BeI5q2zx.js";import{n as Ee,t as I}from"./Icon-BCqnRL0P.js";import{a as L,c as De,i as R,o as z,r as B,s as V,t as H}from"./docs-ui-V9P7FTRQ.js";var U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ee(),ae(),pe(),n(),ve(),d(),f(),m(),fe(),v(),h(),b(),S(),E(),re(),le(),oe(),ge(),O(),s(),ye(),A(),M(),P(),ce(),xe(),C(),o(),Se(),we(),Ee(),De(),U=t(),W={title:`Tokens/Iconography`,parameters:{layout:`fullscreen`}},G=({items:e})=>(0,U.jsx)(`ul`,{className:`mb-3 ml-5 list-disc space-y-1 text-sm text-foreground-muted`,children:e.map((e,t)=>(0,U.jsx)(`li`,{children:e},t))}),K={name:`Why lucide-react`,render:()=>(0,U.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,U.jsx)(L,{children:`Iconography`}),(0,U.jsxs)(B,{children:[`Schatten standardizes on `,(0,U.jsx)(`code`,{children:`lucide-react`}),` for all iconography. Icons are rendered through the `,(0,U.jsx)(`code`,{children:`Icon`}),` component, which normalizes size and color and wires the right accessibility attributes. This page explains why Lucide, how to use `,(0,U.jsx)(`code`,{children:`Icon`}),`, and the patterns to follow and avoid.`]}),(0,U.jsx)(z,{children:`Why lucide-react`}),(0,U.jsx)(G,{items:[(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`strong`,{children:`Lightweight & tree-shakeable`}),` — each icon is its own ES module, so only the icons you import ship in the bundle.`]}),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`strong`,{children:`Modern & actively maintained`}),` — a consistent 24×24 grid and stroke language across 1000+ icons, with regular releases.`]}),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`strong`,{children:`shadcn/ui alignment`}),` — Lucide is shadcn/ui's default icon set, and Schatten follows shadcn conventions as its baseline.`]}),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`strong`,{children:`One vendor, one contract`}),` — a single icon source keeps sizing, stroke weight, and visual rhythm uniform across the whole design system.`]})]})]})},q={name:`Usage`,render:()=>(0,U.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,U.jsx)(L,{children:`Usage`}),(0,U.jsxs)(B,{children:[`Import the icon you need from `,(0,U.jsx)(`code`,{children:`lucide-react`}),` and pass the component to`,` `,(0,U.jsx)(`code`,{children:`Icon`}),` via the `,(0,U.jsx)(`code`,{children:`icon`}),` prop — not a name string.`]}),(0,U.jsx)(H,{children:`import { Search } from 'lucide-react'
import { Icon } from '@yasmro/schatten'

<Icon icon={Search} />`}),(0,U.jsx)(z,{children:`Size`}),(0,U.jsxs)(R,{children:[`Three sizes: `,(0,U.jsx)(`code`,{children:`sm`}),` (16px) / `,(0,U.jsx)(`code`,{children:`md`}),` (20px, default) / `,(0,U.jsx)(`code`,{children:`lg`}),` `,`(24px). For a one-off size outside the scale, pass a Tailwind sizing class via`,` `,(0,U.jsx)(`code`,{children:`className`}),` (e.g. `,(0,U.jsx)(`code`,{children:`className="size-8"`}),`) instead.`]}),(0,U.jsx)(`div`,{className:`flex items-end gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:N,size:e,color:`default`}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,U.jsx)(z,{children:`Color`}),(0,U.jsxs)(R,{children:[`The `,(0,U.jsx)(`code`,{children:`color`}),` vocabulary mirrors `,(0,U.jsx)(`code`,{children:`Text`}),` so an icon and its adjacent label share one token. It defaults to `,(0,U.jsx)(`code`,{children:`inherit`}),` (takes the surrounding`,` `,(0,U.jsx)(`code`,{children:`currentColor`}),`), which keeps `,(0,U.jsx)(`code`,{children:`Icon`}),` composition-safe inside an already-colored surface such as a solid Button. `,(0,U.jsx)(`code`,{children:`inverted-*`}),` colors are previewed on a dark surface.`]}),(0,U.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,U.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`default`,`muted`,`subtle`,`vermillion`,`indigo`].map(e=>(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:i,size:`lg`,color:e}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,U.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[`error`,`success`,`warning`,`info`].map(e=>(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:x,size:`lg`,color:e}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))}),(0,U.jsx)(`div`,{className:`flex flex-wrap items-center gap-4 rounded-md bg-foreground p-4`,children:[`inverted`,`inverted-muted`,`inverted-subtle`].map(e=>(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:i,size:`lg`,color:e}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-inverted-foreground-muted`,children:e})]},e))})]}),(0,U.jsx)(z,{children:`Accessibility`}),(0,U.jsxs)(R,{children:[`Accessibility is driven by the standard `,(0,U.jsx)(`code`,{children:`aria-label`}),` attribute — there is no dedicated prop. Omit it for decorative icons (`,(0,U.jsx)(`code`,{children:`aria-hidden="true"`}),` is applied automatically); provide it for meaningful icons (`,(0,U.jsx)(`code`,{children:`role="img"`}),` is applied, so the icon is queryable via `,(0,U.jsxs)(`code`,{children:[`getByRole('img', `,`{ name }`,`)`]}),`).`]}),(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-8`,children:[(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:i,size:`lg`,color:`default`}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:`decorative`}),(0,U.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:`aria-hidden="true"`})]}),(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,U.jsx)(I,{icon:F,size:`lg`,color:`default`,"aria-label":`Delete`}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:`aria-label="Delete"`}),(0,U.jsx)(`span`,{className:`text-xs text-foreground-muted`,children:`role="img"`})]})]}),(0,U.jsx)(H,{children:`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"`})]})},J={name:`Pass the component, not a name`,render:()=>(0,U.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,U.jsx)(L,{children:`Pass the component, not a name`}),(0,U.jsxs)(B,{children:[(0,U.jsx)(`code`,{children:`Icon`}),` takes a Lucide `,(0,U.jsx)(`em`,{children:`component`}),` (`,(0,U.jsxs)(`code`,{children:[`icon=`,`{Search}`]}),`), not a name string (`,(0,U.jsx)(`code`,{children:`name="Search"`}),`). This is a deliberate design choice with three benefits.`]}),(0,U.jsx)(z,{children:`1. Tree-shaking`}),(0,U.jsx)(R,{children:`Only the icons you actually import end up in the bundle. A name-string API would have to reference a map of every possible icon, defeating tree-shaking.`}),(0,U.jsx)(z,{children:`2. Typos become build errors`}),(0,U.jsxs)(R,{children:[`A misspelled component name is a compile-time error. A misspelled `,(0,U.jsx)(`em`,{children:`string`}),` would fail silently at runtime (an undefined icon).`]}),(0,U.jsx)(H,{children:`// component — a typo is a build error
import { Search } from 'lucide-react'
<Icon icon={Search} />

// there is no \`name\` prop in Schatten — this does not type-check
<Icon name="Search" />
<Icon name="Serach" />  // …and a typo could never be caught at build time`}),(0,U.jsx)(z,{children:`3. No allowlist to maintain`}),(0,U.jsxs)(R,{children:[(0,U.jsx)(`code`,{children:`Icon`}),` accepts `,(0,U.jsx)(`strong`,{children:`any`}),` Lucide icon — there is no`,` `,(0,U.jsx)(`code`,{children:`ICON_MAP`}),` or allowlist file to keep in sync. The vendor is fixed to Lucide (the`,` `,(0,U.jsx)(`code`,{children:`icon`}),` prop is typed `,(0,U.jsx)(`code`,{children:`LucideIcon`}),`); widening to a vendor-agnostic type later is an additive, non-breaking change.`]})]})},Y=[{name:`ArrowRight`,icon:me},{name:`ArrowLeft`,icon:ie},{name:`ArrowUp`,icon:te},{name:`ArrowDown`,icon:r},{name:`ChevronRight`,icon:y},{name:`ChevronLeft`,icon:se},{name:`ChevronDown`,icon:g},{name:`ChevronUp`,icon:_},{name:`Check`,icon:p},{name:`X`,icon:Te},{name:`Plus`,icon:j},{name:`Minus`,icon:he},{name:`Search`,icon:N},{name:`Settings`,icon:be},{name:`Trash2`,icon:F},{name:`Pencil`,icon:c},{name:`Copy`,icon:D},{name:`Eye`,icon:ue},{name:`EyeOff`,icon:l},{name:`Info`,icon:k},{name:`CircleAlert`,icon:x},{name:`CircleCheck`,icon:w},{name:`TriangleAlert`,icon:T},{name:`Download`,icon:de},{name:`Upload`,icon:u},{name:`ExternalLink`,icon:ne},{name:`Bell`,icon:_e},{name:`Calendar`,icon:a},{name:`User`,icon:Ce},{name:`Star`,icon:i}],X={name:`Gallery`,render:()=>(0,U.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,U.jsx)(L,{children:`Gallery`}),(0,U.jsxs)(B,{children:[`A representative selection of `,(0,U.jsx)(`code`,{children:`lucide-react`}),` icons commonly used across Schatten components. `,(0,U.jsx)(`strong`,{children:`This is documentation, not an allowlist`}),` — `,(0,U.jsx)(`code`,{children:`Icon`}),` `,`accepts any of Lucide's 1000+ icons. Browse the full set at`,` `,(0,U.jsx)(`a`,{href:`https://lucide.dev/icons`,target:`_blank`,rel:`noreferrer`,className:`text-info underline`,children:`lucide.dev/icons`}),`.`]}),(0,U.jsx)(`div`,{className:`grid grid-cols-6 gap-6`,children:Y.map(({name:e,icon:t})=>(0,U.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,U.jsx)(I,{icon:t,size:`lg`,color:`default`}),(0,U.jsx)(`span`,{className:`font-mono text-xs text-foreground-muted`,children:e})]},e))})]})},Z={name:`Do's and Don'ts`,render:()=>(0,U.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,U.jsx)(L,{children:`Do's & Don'ts`}),(0,U.jsxs)(B,{children:[`All of these render — the difference is consistency and accessibility. Always go through`,` `,(0,U.jsx)(`code`,{children:`Icon`}),` so size, color tokens, and a11y defaults stay uniform.`]}),(0,U.jsxs)(`div`,{className:`grid grid-cols-2 gap-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(V,{children:`✅ Wrap in Icon`}),(0,U.jsx)(R,{children:`Size, color tokens, and a11y defaults are applied.`}),(0,U.jsx)(`div`,{className:`rounded-lg border border-success bg-success-subtle p-4`,children:(0,U.jsx)(I,{icon:N,size:`lg`,color:`default`})}),(0,U.jsx)(H,{children:`<Icon icon={Search} />`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(V,{children:`❌ Raw Lucide element`}),(0,U.jsx)(R,{children:`Bypasses the size scale, color tokens, and a11y defaults.`}),(0,U.jsx)(`div`,{className:`rounded-lg border border-warning bg-warning-subtle p-4 text-foreground`,children:(0,U.jsx)(N,{})}),(0,U.jsx)(H,{children:`<Search />  // not normalized`})]})]}),(0,U.jsxs)(`div`,{className:`mt-6 grid grid-cols-2 gap-6`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(V,{children:`✅ Label a meaningful icon`}),(0,U.jsx)(R,{children:`Exposed as role="img" with an accessible name.`}),(0,U.jsx)(H,{children:`<Icon icon={Trash2} aria-label="Delete" />`})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(V,{children:`❌ aria-hidden on a labelled icon`}),(0,U.jsx)(R,{children:`Contradicts the label and drops it from the a11y tree — Icon warns in dev.`}),(0,U.jsx)(H,{children:`<Icon icon={Trash2} aria-label="Delete" aria-hidden />`})]})]}),(0,U.jsx)(z,{children:`Don't hand-write SVG for icons Lucide already ships`}),(0,U.jsxs)(R,{children:[`If the icon exists in Lucide, use it through `,(0,U.jsx)(`code`,{children:`Icon`}),` so sizing, color tokens, and accessibility stay consistent. Reserve a raw `,(0,U.jsx)(`code`,{children:`<svg>`}),` for genuinely custom marks that are not part of the icon set.`]})]})},Q=[`WhyLucide`,`Usage`,`PassTheComponent`,`Gallery`,`DosAndDonts`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
          <span className="text-xs text-foreground-muted">aria-hidden="true"</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Icon icon={Trash2} size="lg" color="default" aria-label="Delete" />
          <span className="font-mono text-xs text-foreground-muted">aria-label="Delete"</span>
          <span className="text-xs text-foreground-muted">role="img"</span>
        </div>
      </div>
      <CodeBlock>{\`<Icon icon={Star} />                      // decorative -> aria-hidden="true"
<Icon icon={Trash2} aria-label="Delete" /> // meaningful  -> role="img"\`}</CodeBlock>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as DosAndDonts,X as Gallery,J as PassTheComponent,q as Usage,K as WhyLucide,Q as __namedExportsOrder,W as default};