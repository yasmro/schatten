import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Fmxp1QJZ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as ee,u as f}from"./star-BIkGnIGV.js";import{n as p,t as m}from"./arrow-right-ClN3W21G.js";import{n as h,t as g}from"./check-BRrjr5o3.js";import{n as _,t as v}from"./chevron-right-CZfUp1Jv.js";import{n as y,t as b}from"./circle-alert-DJvsZWHO.js";import{a as x,c as S,i as te,l as ne,n as re,o as C,r as w,s as T,t as E,u as D}from"./tag-BT0iCetv.js";import{n as O,t as k}from"./lock-CEG2Qf28.js";import{n as A,t as j}from"./mail-DahpOvkX.js";import{n as M,t as N}from"./plus-DPVQRgZ9.js";import{n as P,t as F}from"./search-kbZTX0pB.js";import{n as I,t as L}from"./trash-2-WbAgRFNT.js";import{n as ie,t as R}from"./x-Oggg4Zxh.js";import{n as z,t as B}from"./Button-DyykQQnj.js";var V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),p(),h(),f(),_(),y(),D(),r(),l(),o(),S(),O(),A(),M(),P(),C(),te(),c(),re(),I(),ie(),z(),V=t(),H={title:`Components/lv1/Button`,component:B,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{description:`Visual style of the button.`,control:`select`,options:[`primary`,`secondary`,`tertiary`,`inverted`,`destructive`,`link`],table:{type:{summary:`"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"`},defaultValue:{summary:`primary`}}},size:{description:`Size of the button.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Search}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:i,ArrowRight:m,Check:g,ChevronLeft:s,ChevronRight:v,CircleAlert:b,Clock:ne,Download:d,ExternalLink:n,Eye:u,Globe:T,Lock:k,Mail:j,Plus:N,Search:F,Send:x,Sparkles:w,Star:ee,Tag:E,Trash2:L,X:R},table:{type:{summary:`LucideIcon`},defaultValue:{summary:`-`}}},iconPosition:{description:`Position of the icon relative to the label text.`,control:`select`,options:[`start`,`end`],table:{type:{summary:`"start" | "end"`},defaultValue:{summary:`start`}}},asChild:{description:`Delegates props to the child element via Radix Slot.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isLoading:{description:`Shows a loading spinner and disables the button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the button and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},children:{description:`Label text or content inside the button.`,control:`text`,table:{type:{summary:`ReactNode`}}}}},U={name:`Playground`,args:{variant:`primary`,size:`md`,children:`Button`}},W={name:`All Variants`,render:()=>(0,V.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,V.jsx)(B,{variant:`primary`,children:`Primary`}),(0,V.jsx)(B,{variant:`secondary`,children:`Secondary`}),(0,V.jsx)(B,{variant:`tertiary`,children:`Tertiary`}),(0,V.jsx)(B,{variant:`destructive`,children:`Destructive`})]}),(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-4 rounded-lg bg-solid p-4`,children:[(0,V.jsx)(B,{variant:`inverted`,children:`Inverted`}),(0,V.jsx)(B,{variant:`inverted`,icon:R,"aria-label":`Close`})]})]})},G={name:`Sizes`,render:()=>(0,V.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,V.jsx)(B,{size:`sm`,children:`Small`}),(0,V.jsx)(B,{size:`md`,children:`Medium`}),(0,V.jsx)(B,{size:`lg`,children:`Large`}),(0,V.jsx)(B,{icon:N,"aria-label":`Add`})]})},K={name:`Icons`,render:()=>(0,V.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,V.jsx)(B,{icon:F,children:`Search`}),(0,V.jsx)(B,{icon:m,iconPosition:`end`,children:`Next`}),(0,V.jsx)(B,{icon:N,"aria-label":`Add`}),(0,V.jsx)(B,{variant:`destructive`,icon:L,children:`Delete`})]})},q={name:`Icon Positions`,render:()=>(0,V.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,V.jsx)(B,{icon:s,children:`Back`}),(0,V.jsx)(B,{icon:v,iconPosition:`end`,children:`Next`}),(0,V.jsx)(B,{icon:d,size:`sm`,children:`Download`}),(0,V.jsx)(B,{icon:x,size:`lg`,iconPosition:`end`,children:`Send`})]})},J={name:`Loading`,render:()=>(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,V.jsx)(B,{isLoading:!0,children:`Primary`}),(0,V.jsx)(B,{variant:`secondary`,isLoading:!0,children:`Secondary`}),(0,V.jsx)(B,{variant:`tertiary`,isLoading:!0,children:`Tertiary`}),(0,V.jsx)(B,{variant:`destructive`,isLoading:!0,children:`Destructive`})]})},Y={name:`Link`,render:()=>(0,V.jsxs)(`div`,{className:`flex flex-col gap-4 text-base text-foreground leading-relaxed`,children:[(0,V.jsxs)(`p`,{children:[`This is a paragraph with a `,(0,V.jsx)(B,{variant:`link`,children:`link button`}),` embedded inline. It behaves like a text link but retains button semantics for accessibility.`]}),(0,V.jsxs)(`p`,{children:[`You can also add an icon:`,` `,(0,V.jsx)(B,{variant:`link`,icon:n,iconPosition:`end`,children:`external link`}),` `,`to indicate navigation.`]})]})},X={name:`Disabled`,render:()=>(0,V.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,V.jsx)(B,{disabled:!0,children:`Primary`}),(0,V.jsx)(B,{variant:`secondary`,disabled:!0,children:`Secondary`}),(0,V.jsx)(B,{variant:`tertiary`,disabled:!0,children:`Tertiary`}),(0,V.jsx)(B,{variant:`destructive`,disabled:!0,icon:L,children:`Delete`}),(0,V.jsxs)(`p`,{className:`text-base text-foreground`,children:[`Disabled`,` `,(0,V.jsx)(B,{variant:`link`,disabled:!0,children:`link button`}),` `,`in text.`]})]})},Z={name:`Inverted on saturated surfaces`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,V.jsx)(`div`,{className:`flex flex-col gap-3`,children:[{label:`error`,cls:`bg-error text-error-foreground`},{label:`success`,cls:`bg-success text-success-foreground`},{label:`warning`,cls:`bg-warning text-warning-foreground`},{label:`info`,cls:`bg-info text-info-foreground`},{label:`destructive`,cls:`bg-destructive text-destructive-foreground`},{label:`solid (brand)`,cls:`bg-solid text-solid-foreground`}].map(e=>(0,V.jsxs)(`div`,{className:`flex items-center justify-between gap-4 px-4 py-3 rounded ${e.cls}`,children:[(0,V.jsxs)(`span`,{className:`text-sm font-medium`,children:[`On `,e.label,` surface`]}),(0,V.jsxs)(`div`,{className:`flex gap-2`,children:[(0,V.jsx)(B,{variant:`inverted`,size:`sm`,children:`Enabled`}),(0,V.jsx)(B,{variant:`inverted`,size:`sm`,disabled:!0,children:`Disabled`})]})]},e.label))})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* \`inverted\` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon={X} aria-label="Close" />
      </div>
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon={Plus} aria-label="Add" />
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon={Search}>Search</Button>
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Plus} aria-label="Add" />
      <Button variant="destructive" icon={Trash2}>
        Delete
      </Button>
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon={ChevronLeft}>Back</Button>
      <Button icon={ChevronRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Download} size="sm">
        Download
      </Button>
      <Button icon={Send} size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon={ExternalLink} iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon={Trash2}>
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Inverted on saturated surfaces',
  parameters: {
    // inverted ghost foreground on saturated surfaces — incidental/large-only by design. Mirrors Button.vrt.spec.ts. #344 / #346.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {[{
      label: 'error',
      cls: 'bg-error text-error-foreground'
    }, {
      label: 'success',
      cls: 'bg-success text-success-foreground'
    }, {
      label: 'warning',
      cls: 'bg-warning text-warning-foreground'
    }, {
      label: 'info',
      cls: 'bg-info text-info-foreground'
    }, {
      label: 'destructive',
      cls: 'bg-destructive text-destructive-foreground'
    }, {
      label: 'solid (brand)',
      cls: 'bg-solid text-solid-foreground'
    }].map(s => <div key={s.label} className={\`flex items-center justify-between gap-4 px-4 py-3 rounded \${s.cls}\`}>
          <span className="text-sm font-medium">On {s.label} surface</span>
          <div className="flex gap-2">
            <Button variant="inverted" size="sm">
              Enabled
            </Button>
            <Button variant="inverted" size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>)}
    </div>
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`AllVariants`,`Sizes`,`Icons`,`IconPositions`,`Loading`,`LinkVariant`,`Disabled`,`InvertedOnSaturatedSurfaces`]})))()}$();export{W as AllVariants,X as Disabled,q as IconPositions,K as Icons,Z as InvertedOnSaturatedSurfaces,Y as LinkVariant,J as Loading,U as Playground,G as Sizes,Q as __namedExportsOrder,H as default};