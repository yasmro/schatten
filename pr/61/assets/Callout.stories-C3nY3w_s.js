import{j as e,r as H}from"./iframe-Cb7Oyx5u.js";import{B as o}from"./Button-UNJUERl9.js";import{C as t}from"./Callout-CEh7YySm.js";import"./preload-helper-Fw9w-__v.js";import"./index-Ci46saDI.js";import"./index-2__vvqsY.js";import"./index-DJ2gbv3M.js";import"./chevron-up-B-upn2aw.js";import"./index-DHk-Frat.js";import"./Spinner-Bpi6hxSx.js";const ae={title:"Components/lv1/Callout",component:t,parameters:{layout:"padded",docs:{description:{component:`Callout displays inline contextual information — beta notices, form
warnings, page-level announcements. It mirrors {@link Toast}'s five
variants and two treatments so the visual language is shared, but lives
in normal layout flow rather than overlaying the viewport.

## Action
The \`action\` prop accepts any ReactNode, so you can drop in a Button,
a link, or a more complex affordance. Unlike Toast (where action is a
\`{label, onClick}\` shape), Callouts often persist on screen and may
need richer UI.

## Dismissibility
Pass \`onClose\` to render a close (X) button. Omit it for a static,
non-dismissible callout. State management for the closed-or-not flag
lives with the consumer.

## a11y
No \`role\` is set by default. For dynamic callouts that should be
announced when they appear, pass \`role="status"\` (polite) or
\`role="alert"\` (assertive). Static informational callouts do not
require a role.`}}},tags:["autodocs"],argTypes:{variant:{description:"State variant. Drives the icon, color treatment, and accent.",control:"select",options:["default","success","error","warning","info"],table:{type:{summary:'"default" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"default"}}},treatment:{description:"Visual treatment — `subtle` for soft tinted background, `solid` for filled.",control:"select",options:["subtle","solid"],table:{type:{summary:'"subtle" | "solid"'},defaultValue:{summary:"subtle"}}},title:{description:"Optional bold heading rendered above the body content.",control:"text"},children:{description:"Body content. Any ReactNode (text, links, lists).",control:"text"},action:{description:"Free-form action node rendered to the right of the body (e.g. a Button or link).",table:{type:{summary:"ReactNode"}},control:!1},onClose:{description:"When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.",table:{type:{summary:"() => void"}},control:!1}}},x=["default","success","error","warning","info"],I=["subtle","solid"],n={name:"Playground",args:{variant:"info",treatment:"subtle",title:"Heads up",children:"This is a beta feature. Behavior may change."}},s={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(a=>e.jsx(t,{variant:a,treatment:"subtle",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},i={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(a=>e.jsx(t,{variant:a,treatment:"solid",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},l={name:"Title Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"success",title:"Saved"}),e.jsx(t,{variant:"error",title:"Could not connect"})]})},c={name:"Body Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsxs(t,{variant:"info",children:["This feature is in ",e.jsx("strong",{children:"beta"}),". Please share feedback."]}),e.jsxs(t,{variant:"warning",children:["Three records were skipped."," ",e.jsx("a",{href:"#x",className:"underline",children:"View details"})]})]})},d={name:"With Action",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"warning",title:"Unsaved changes",action:e.jsx(o,{size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(t,{variant:"info",title:"Update available",action:e.jsx(o,{size:"sm",variant:"secondary",children:"Reload"}),children:"A newer version of this app is ready."})]})},m={name:"Dismissible",render:()=>{const[a,r]=H.useState({a:!0,b:!0});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[a.a&&e.jsx(t,{variant:"info",title:"Heads up",onClose:()=>r(h=>({...h,a:!1})),children:"Click the close button to dismiss this callout."}),a.b&&e.jsx(t,{variant:"warning",title:"With action and close",action:e.jsx(o,{size:"sm",children:"Acknowledge"}),onClose:()=>r(h=>({...h,b:!1})),children:"Both action and close can coexist."}),!a.a&&!a.b&&e.jsx(o,{onClick:()=>r({a:!0,b:!0}),children:"Reset"})]})}},u={name:"Full Matrix",render:()=>e.jsx("div",{className:"grid grid-cols-1 gap-3 max-w-2xl",children:I.flatMap(a=>x.map(r=>e.jsx(t,{variant:r,treatment:a,title:`${r} / ${a}`,children:"The quick brown fox jumps over the lazy dog."},`${r}-${a}`)))})},p={name:"Long Content",render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(t,{variant:"warning",title:"Heads up: long-running operation completed with warnings",action:e.jsx(o,{size:"sm",children:"View details"}),onClose:()=>{},children:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved."})})};var v,f,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    treatment: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,b,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,T,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,k,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var B,A,z;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var R,O,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var U,M,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var q,E,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Full Matrix',
  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {TREATMENTS.flatMap(treatment => VARIANTS.map(variant => <Callout key={\`\${variant}-\${treatment}\`} variant={variant} treatment={treatment} title={\`\${variant} / \${treatment}\`}>
            The quick brown fox jumps over the lazy dog.
          </Callout>))}
    </div>
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var W,D,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const te=["Playground","SubtleTreatments","SolidTreatments","TitleOnly","BodyOnly","WithAction","Dismissible","FullMatrix","LongContent"];export{c as BodyOnly,m as Dismissible,u as FullMatrix,p as LongContent,n as Playground,i as SolidTreatments,s as SubtleTreatments,l as TitleOnly,d as WithAction,te as __namedExportsOrder,ae as default};
