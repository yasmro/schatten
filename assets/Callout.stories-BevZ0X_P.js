import{j as e,r as X}from"./iframe-Bisxr28E.js";import{B as o}from"./Button-B9xabpd8.js";import{C as a}from"./Callout-CFxLFkAr.js";import"./preload-helper-hmmh1zBP.js";import"./index-Cp7JAoNk.js";import"./index-D04ch7FT.js";import"./index-lOb_iBA3.js";import"./chevron-up-UT_IIRZ2.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-CDndWcNm.js";const se={title:"Components/lv1/Callout",component:a,parameters:{layout:"padded",docs:{description:{component:`Callout displays inline contextual information — beta notices, form
warnings, page-level announcements. It mirrors \`Toast\`'s five
variants and two treatments so the visual language is shared, but lives
in normal layout flow rather than overlaying the viewport.

## Body content
Pass body content either as \`children\` (rich JSX) or as the
\`description\` prop (plain text — matches Toast's API). If both are
provided, \`description\` wins.

## Action
The \`action\` prop accepts any ReactNode, so you can drop in a Button,
a link, or a more complex affordance. Unlike Toast (where action is a
\`{label, onClick}\` shape), Callouts often persist on screen and may
need richer UI.

**On \`treatment="solid"\`, prefer \`<Button variant="inverted">\`** for
action buttons so they remain legible on the saturated fill — see the
"Solid With Action" story below.

## Dismissibility
Pass \`onClose\` to render a close (X) button. Omit it for a static,
non-dismissible callout. State management for the closed-or-not flag
lives with the consumer.

## a11y
No \`role\` is set by default. For dynamic callouts that should be
announced when they appear, pass \`role="status"\` (polite) or
\`role="alert"\` (assertive). Static informational callouts do not
require a role.`}}},tags:["autodocs"],argTypes:{variant:{description:"State variant. Drives the icon, color treatment, and accent.",control:"select",options:["default","success","error","warning","info"],table:{type:{summary:'"default" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"default"}}},treatment:{description:"Visual treatment — `subtle` for soft tinted background, `solid` for filled.",control:"select",options:["subtle","solid"],table:{type:{summary:'"subtle" | "solid"'},defaultValue:{summary:"subtle"}}},title:{description:"Optional bold heading rendered above the body content.",control:"text"},children:{description:"Body content. Any ReactNode (text, links, lists).",control:"text"},action:{description:"Free-form action node rendered to the right of the body (e.g. a Button or link).",table:{type:{summary:"ReactNode"}},control:!1},onClose:{description:"When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.",table:{type:{summary:"() => void"}},control:!1}}},x=["default","success","error","warning","info"],_=["subtle","solid"],r={name:"Playground",args:{variant:"info",treatment:"subtle",title:"Heads up",children:"This is a beta feature. Behavior may change."}},s={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(t=>e.jsx(a,{variant:t,treatment:"subtle",title:t.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},t))})},i={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(t=>e.jsx(a,{variant:t,treatment:"solid",title:t.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},t))})},l={name:"Title Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"success",title:"Saved"}),e.jsx(a,{variant:"error",title:"Could not connect"})]})},c={name:"Body Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsxs(a,{variant:"info",children:["This feature is in ",e.jsx("strong",{children:"beta"}),". Please share feedback."]}),e.jsxs(a,{variant:"warning",children:["Three records were skipped."," ",e.jsx("a",{href:"#x",className:"underline",children:"View details"})]})]})},d={name:"With Action",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"warning",title:"Unsaved changes",action:e.jsx(o,{size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(a,{variant:"info",title:"Update available",action:e.jsx(o,{size:"sm",variant:"secondary",children:"Reload"}),children:"A newer version of this app is ready."})]})},m={name:"Solid With Action",parameters:{docs:{description:{story:'On `treatment="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"warning",treatment:"solid",title:"Unsaved changes",action:e.jsx(o,{variant:"inverted",size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(a,{variant:"info",treatment:"solid",title:"Update available",action:e.jsx(o,{variant:"inverted",size:"sm",children:"Reload"}),children:"A newer version of this app is ready."})]})},u={name:"Dismissible",render:()=>{const[t,n]=X.useState({a:!0,b:!0});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[t.a&&e.jsx(a,{variant:"info",title:"Heads up",onClose:()=>n(v=>({...v,a:!1})),children:"Click the close button to dismiss this callout."}),t.b&&e.jsx(a,{variant:"warning",title:"With action and close",action:e.jsx(o,{size:"sm",children:"Acknowledge"}),onClose:()=>n(v=>({...v,b:!1})),children:"Both action and close can coexist."}),!t.a&&!t.b&&e.jsx(o,{onClick:()=>n({a:!0,b:!0}),children:"Reset"})]})}},p={name:"Full Matrix",render:()=>e.jsx("div",{className:"grid grid-cols-1 gap-3 max-w-2xl",children:_.flatMap(t=>x.map(n=>e.jsx(a,{variant:n,treatment:t,title:`${n} / ${t}`,children:"The quick brown fox jumps over the lazy dog."},`${n}-${t}`)))})},h={name:"Long Content",render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(a,{variant:"warning",title:"Heads up: long-running operation completed with warnings",action:e.jsx(o,{size:"sm",children:"View details"}),onClose:()=>{},children:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved."})})};var f,g,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    treatment: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var b,y,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,T,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var B,k,N;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var A,z,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Body Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="info">
        This feature is in <strong>beta</strong>. Please share feedback.
      </Callout>
      <Callout variant="warning">
        Three records were skipped.{' '}
        <a href="#x" className="underline">
          View details
        </a>
      </Callout>
    </div>
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var O,U,W;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'With Action',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" title="Unsaved changes" action={<Button size="sm">Save now</Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" title="Update available" action={<Button size="sm" variant="secondary">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var P,V,I;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Solid With Action',
  parameters: {
    docs: {
      description: {
        story: 'On \`treatment="solid"\` the saturated background can clash with default Button variants. Pass \`<Button variant="inverted">\` so the action stays legible.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" treatment="solid" title="Unsaved changes" action={<Button variant="inverted" size="sm">
            Save now
          </Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" treatment="solid" title="Update available" action={<Button variant="inverted" size="sm">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...(I=(V=m.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var M,$,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Dismissible',
  render: () => {
    const [shown, setShown] = useState({
      a: true,
      b: true
    });
    return <div className="flex flex-col gap-3 max-w-xl">
        {shown.a && <Callout variant="info" title="Heads up" onClose={() => setShown(s => ({
        ...s,
        a: false
      }))}>
            Click the close button to dismiss this callout.
          </Callout>}
        {shown.b && <Callout variant="warning" title="With action and close" action={<Button size="sm">Acknowledge</Button>} onClose={() => setShown(s => ({
        ...s,
        b: false
      }))}>
            Both action and close can coexist.
          </Callout>}
        {!shown.a && !shown.b && <Button onClick={() => setShown({
        a: true,
        b: true
      })}>Reset</Button>}
      </div>;
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var E,D,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Full Matrix',
  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {TREATMENTS.flatMap(treatment => VARIANTS.map(variant => <Callout key={\`\${variant}-\${treatment}\`} variant={variant} treatment={treatment} title={\`\${variant} / \${treatment}\`}>
            The quick brown fox jumps over the lazy dog.
          </Callout>))}
    </div>
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var H,Y,L;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...(L=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};const ie=["Playground","SubtleTreatments","SolidTreatments","TitleOnly","BodyOnly","WithAction","SolidWithAction","Dismissible","FullMatrix","LongContent"];export{c as BodyOnly,u as Dismissible,p as FullMatrix,h as LongContent,r as Playground,i as SolidTreatments,m as SolidWithAction,s as SubtleTreatments,l as TitleOnly,d as WithAction,ie as __namedExportsOrder,se as default};
