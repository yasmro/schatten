import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{A as n,At as r,B as i,J as a,M as o,Mt as s,P as c,St as l,W as u,X as d,b as f,et as p,ft as m,g as h,gt as g,n as _,nt as v,ot as y,t as b,v as x,vt as S,w as C}from"./lucide-react-DaSy76xh.js";import{n as w,t as T}from"./Badge-DrvOxNnh.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{b(),w(),E=t(),D={title:`Components/lv1/Badge`,component:T,parameters:{layout:`centered`,docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `success` / `error` /\n  `warning` / `info`). State variants reuse the same state semantic\n  tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`. There is intentionally **no\nbrand-accent variant** — Pattern B keeps a single non-state surface\n(`neutral`) plus the four state variants.'}}},tags:[`autodocs`],argTypes:{variant:{description:`Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.`,control:`select`,options:[`neutral`,`success`,`error`,`warning`,`info`],table:{type:{summary:`"neutral" | "success" | "error" | "warning" | "info"`},defaultValue:{summary:`neutral`}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:`select`,options:[`solid`,`subtle`,`outline`],table:{type:{summary:`"solid" | "subtle" | "outline"`},defaultValue:{summary:`subtle`}}},size:{description:`Size of the badge.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Check}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:s,ArrowRight:r,Check:l,ChevronLeft:S,ChevronRight:g,CircleAlert:m,Clock:y,Download:v,ExternalLink:p,Eye:d,Globe:a,Lock:u,Mail:i,Plus:c,Search:o,Send:n,Sparkles:C,Star:f,Tag:x,Trash2:h,X:_},table:{type:{summary:`LucideIcon`},defaultValue:{summary:`-`}}},iconPosition:{description:`Position of the icon relative to the label text.`,control:`select`,options:[`start`,`end`],table:{type:{summary:`"start" | "end"`},defaultValue:{summary:`start`}}},children:{description:`Content displayed inside the badge.`,control:`text`,table:{type:{summary:`ReactNode`}}}}},O=[`neutral`,`success`,`error`,`warning`,`info`],k=[`solid`,`subtle`,`outline`],A={name:`Playground`,args:{variant:`neutral`,appearance:`subtle`,size:`md`,children:`Badge`}},j={name:`Solid Treatments`,render:()=>(0,E.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:O.map(e=>(0,E.jsx)(T,{variant:e,appearance:`solid`,children:e},e))})},M={name:`Subtle Treatments`,render:()=>(0,E.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:O.map(e=>(0,E.jsx)(T,{variant:e,appearance:`subtle`,children:e},e))})},N={name:`Outline Treatments`,render:()=>(0,E.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:O.map(e=>(0,E.jsx)(T,{variant:e,appearance:`outline`,children:e},e))})},P={name:`Full Matrix`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support all three appearances."}}},render:()=>(0,E.jsx)(`div`,{className:`flex flex-col gap-3`,children:k.map(e=>(0,E.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,E.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:e}),O.map(t=>(0,E.jsx)(T,{variant:t,appearance:e,children:t},`${e}-${t}`))]},e))})},F={name:`States`,parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{variant:`success`,icon:l,children:`Active`}),(0,E.jsx)(T,{variant:`warning`,icon:y,children:`Pending`}),(0,E.jsx)(T,{variant:`error`,icon:_,children:`Failed`}),(0,E.jsx)(T,{variant:`info`,icon:C,children:`Beta`})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{variant:`success`,appearance:`solid`,icon:l,children:`Active`}),(0,E.jsx)(T,{variant:`warning`,appearance:`solid`,icon:y,children:`Pending`}),(0,E.jsx)(T,{variant:`error`,appearance:`solid`,icon:_,children:`Failed`}),(0,E.jsx)(T,{variant:`info`,appearance:`solid`,icon:C,children:`Beta`})]})]})},I={name:`Sizes`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{size:`sm`,children:`Small`}),(0,E.jsx)(T,{size:`md`,children:`Medium`}),(0,E.jsx)(T,{size:`lg`,children:`Large`})]})},L={name:`Icons`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{variant:`success`,icon:l,children:`Success`}),(0,E.jsx)(T,{variant:`error`,icon:m,children:`Error`}),(0,E.jsx)(T,{variant:`neutral`,appearance:`subtle`,icon:y,children:`Pending`}),(0,E.jsx)(T,{variant:`neutral`,appearance:`outline`,icon:x,children:`Label`})]})},R={name:`Icon Positions`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{icon:s,children:`Start`}),(0,E.jsx)(T,{icon:r,iconPosition:`end`,children:`End`})]})},z={name:`Icon Only`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{icon:l,size:`sm`,"aria-label":`Success`}),(0,E.jsx)(T,{icon:l,"aria-label":`Success`}),(0,E.jsx)(T,{icon:l,size:`lg`,"aria-label":`Success`}),(0,E.jsx)(T,{variant:`error`,icon:_,"aria-label":`Error`}),(0,E.jsx)(T,{variant:`neutral`,appearance:`outline`,icon:f,"aria-label":`Starred`})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    // Solid Badges are light-on-saturated fill — the intentional AA solid exception (icon + label carry the meaning). Mirrors Badge.vrt.spec.ts. #344 / #346.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    },
    docs: {
      description: {
        story: 'Every defined \`variant\` × \`appearance\` combination. All five variants support all three appearances.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {APPEARANCES.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
          {VARIANTS.map(variant => <Badge key={\`\${appearance}-\${variant}\`} variant={variant} appearance={appearance}>
              {variant}
            </Badge>)}
        </div>)}
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'Typical status-tag use cases. The default \`subtle\` appearance (top row) sits comfortably in list rows and tables; \`solid\` (bottom row) draws more attention when a status needs emphasis.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" icon={Sparkles}>
          Beta
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" appearance="solid" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" appearance="solid" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" appearance="solid" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" appearance="solid" icon={Sparkles}>
          Beta
        </Badge>
      </div>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon={Check}>
        Success
      </Badge>
      <Badge variant="error" icon={CircleAlert}>
        Error
      </Badge>
      <Badge variant="neutral" appearance="subtle" icon={Clock}>
        Pending
      </Badge>
      <Badge variant="neutral" appearance="outline" icon={Tag}>
        Label
      </Badge>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={ArrowLeft}>Start</Badge>
      <Badge icon={ArrowRight} iconPosition="end">
        End
      </Badge>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={Check} size="sm" aria-label="Success" />
      <Badge icon={Check} aria-label="Success" />
      <Badge icon={Check} size="lg" aria-label="Success" />
      <Badge variant="error" icon={X} aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon={Star} aria-label="Starred" />
    </div>
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`SolidTreatments`,`SubtleTreatments`,`OutlineTreatments`,`FullMatrix`,`States`,`Sizes`,`Icons`,`IconPositions`,`IconOnly`]}))();export{P as FullMatrix,z as IconOnly,R as IconPositions,L as Icons,N as OutlineTreatments,A as Playground,I as Sizes,j as SolidTreatments,F as States,M as SubtleTreatments,B as __namedExportsOrder,D as default};