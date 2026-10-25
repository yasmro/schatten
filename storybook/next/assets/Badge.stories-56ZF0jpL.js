import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-D-lVM398.js";import{a as ee,c as n,d as r,f as i,i as te,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./star-C5qbeZEe.js";import{n as ne,t as f}from"./arrow-right-DGWsGDg8.js";import{n as re,t as p}from"./check-D3k12TJn.js";import{n as ie,t as m}from"./chevron-right-DVd01iMe.js";import{n as h,t as g}from"./circle-alert-CEJEMzR3.js";import{a as ae,c as _,i as v,l as y,n as b,o as oe,r as x,s as se,t as S,u as C}from"./tag-BIhbTdXY.js";import{n as w,t as T}from"./lock-Dx5yHny7.js";import{n as E,t as D}from"./mail-C2YjrTuQ.js";import{n as O,t as k}from"./plus-mTQGqPCr.js";import{n as A,t as j}from"./search-DrS22wb9.js";import{n as M,t as N}from"./trash-2-bQWOG5IL.js";import{n as P,t as F}from"./x-Bis2pbvI.js";import{n as I,t as L}from"./Badge-_7YQzFaG.js";var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),ne(),re(),d(),ie(),h(),C(),n(),s(),te(),_(),w(),E(),O(),A(),oe(),v(),o(),b(),M(),P(),I(),R=t(),z={title:`Components/lv1/Badge`,component:L,parameters:{layout:`centered`,docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `success` / `error` /\n  `warning` / `info`). State variants reuse the same state semantic\n  tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`. There is intentionally **no\nbrand-accent variant** — Pattern B keeps a single non-state surface\n(`neutral`) plus the four state variants.'}}},tags:[`autodocs`],argTypes:{variant:{description:`Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.`,control:`select`,options:[`neutral`,`success`,`error`,`warning`,`info`],table:{type:{summary:`"neutral" | "success" | "error" | "warning" | "info"`},defaultValue:{summary:`neutral`}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:`select`,options:[`solid`,`subtle`,`outline`],table:{type:{summary:`"solid" | "subtle" | "outline"`},defaultValue:{summary:`subtle`}}},size:{description:`Size of the badge.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Check}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:r,ArrowRight:f,Check:p,ChevronLeft:a,ChevronRight:m,CircleAlert:g,Clock:y,Download:l,ExternalLink:ee,Eye:c,Globe:se,Lock:T,Mail:D,Plus:k,Search:j,Send:ae,Sparkles:x,Star:u,Tag:S,Trash2:N,X:F},table:{type:{summary:`LucideIcon`},defaultValue:{summary:`-`}}},iconPosition:{description:`Position of the icon relative to the label text.`,control:`select`,options:[`start`,`end`],table:{type:{summary:`"start" | "end"`},defaultValue:{summary:`start`}}},children:{description:`Content displayed inside the badge.`,control:`text`,table:{type:{summary:`ReactNode`}}}}},B=[`neutral`,`success`,`error`,`warning`,`info`],V=[`solid`,`subtle`,`outline`],H={name:`Playground`,args:{variant:`neutral`,appearance:`subtle`,size:`md`,children:`Badge`}},U={name:`Solid Treatments`,render:()=>(0,R.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:B.map(e=>(0,R.jsx)(L,{variant:e,appearance:`solid`,children:e},e))})},W={name:`Subtle Treatments`,render:()=>(0,R.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:B.map(e=>(0,R.jsx)(L,{variant:e,appearance:`subtle`,children:e},e))})},G={name:`Outline Treatments`,render:()=>(0,R.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:B.map(e=>(0,R.jsx)(L,{variant:e,appearance:`outline`,children:e},e))})},K={name:`Full Matrix`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}},docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support all three appearances."}}},render:()=>(0,R.jsx)(`div`,{className:`flex flex-col gap-3`,children:V.map(e=>(0,R.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,R.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:e}),B.map(t=>(0,R.jsx)(L,{variant:t,appearance:e,children:t},`${e}-${t}`))]},e))})},q={name:`States`,parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,R.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,R.jsx)(L,{variant:`success`,icon:p,children:`Active`}),(0,R.jsx)(L,{variant:`warning`,icon:y,children:`Pending`}),(0,R.jsx)(L,{variant:`error`,icon:F,children:`Failed`}),(0,R.jsx)(L,{variant:`info`,icon:x,children:`Beta`})]}),(0,R.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,R.jsx)(L,{variant:`success`,appearance:`solid`,icon:p,children:`Active`}),(0,R.jsx)(L,{variant:`warning`,appearance:`solid`,icon:y,children:`Pending`}),(0,R.jsx)(L,{variant:`error`,appearance:`solid`,icon:F,children:`Failed`}),(0,R.jsx)(L,{variant:`info`,appearance:`solid`,icon:x,children:`Beta`})]})]})},J={name:`Sizes`,render:()=>(0,R.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,R.jsx)(L,{size:`sm`,children:`Small`}),(0,R.jsx)(L,{size:`md`,children:`Medium`}),(0,R.jsx)(L,{size:`lg`,children:`Large`})]})},Y={name:`Icons`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,R.jsx)(L,{variant:`success`,icon:p,children:`Success`}),(0,R.jsx)(L,{variant:`error`,icon:g,children:`Error`}),(0,R.jsx)(L,{variant:`neutral`,appearance:`subtle`,icon:y,children:`Pending`}),(0,R.jsx)(L,{variant:`neutral`,appearance:`outline`,icon:S,children:`Label`})]})},X={name:`Icon Positions`,render:()=>(0,R.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,R.jsx)(L,{icon:r,children:`Start`}),(0,R.jsx)(L,{icon:f,iconPosition:`end`,children:`End`})]})},Z={name:`Icon Only`,render:()=>(0,R.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,R.jsx)(L,{icon:p,size:`sm`,"aria-label":`Success`}),(0,R.jsx)(L,{icon:p,"aria-label":`Success`}),(0,R.jsx)(L,{icon:p,size:`lg`,"aria-label":`Success`}),(0,R.jsx)(L,{variant:`error`,icon:F,"aria-label":`Error`}),(0,R.jsx)(L,{variant:`neutral`,appearance:`outline`,icon:u,"aria-label":`Starred`})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={ArrowLeft}>Start</Badge>
      <Badge icon={ArrowRight} iconPosition="end">
        End
      </Badge>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={Check} size="sm" aria-label="Success" />
      <Badge icon={Check} aria-label="Success" />
      <Badge icon={Check} size="lg" aria-label="Success" />
      <Badge variant="error" icon={X} aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon={Star} aria-label="Starred" />
    </div>
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`SolidTreatments`,`SubtleTreatments`,`OutlineTreatments`,`FullMatrix`,`States`,`Sizes`,`Icons`,`IconPositions`,`IconOnly`]})))()}$();export{K as FullMatrix,Z as IconOnly,X as IconPositions,Y as Icons,G as OutlineTreatments,H as Playground,J as Sizes,U as SolidTreatments,q as States,W as SubtleTreatments,Q as __namedExportsOrder,z as default};