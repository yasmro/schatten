import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-DRAyPivV.js";import{t as i}from"./Button-CCjwr7K_.js";import{n as a,t as o}from"./Callout-BjGK7GIr.js";import{t as s}from"./Button-DrvykG42.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{c=t(r(),1),s(),a(),l=n(),u={title:`Components/lv1/Callout`,component:o,parameters:{layout:`padded`,docs:{description:{component:`Callout displays inline contextual information — beta notices, form
warnings, page-level announcements. It mirrors \`Toast\`'s variants and
two appearances so the visual language is shared, but lives in normal
layout flow rather than overlaying the viewport.

## Body content
Pass body content either as \`children\` (rich JSX) or as the
\`description\` prop (plain text — matches Toast's API). If both are
provided, \`description\` wins.

## Action
The \`action\` prop accepts any ReactNode, so you can drop in a Button,
a link, or a more complex affordance. Unlike Toast (where action is a
\`{label, onClick}\` shape), Callouts often persist on screen and may
need richer UI.

**On \`appearance="solid"\`, prefer \`<Button variant="inverted">\`** for
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
require a role.`}}},tags:[`autodocs`],argTypes:{variant:{description:`Tone / state variant. Drives the icon, color treatment, and accent.`,control:`select`,options:[`neutral`,`success`,`error`,`warning`,`info`],table:{type:{summary:`"neutral" | "success" | "error" | "warning" | "info"`},defaultValue:{summary:`neutral`}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background, `solid` for filled.",control:`select`,options:[`subtle`,`solid`],table:{type:{summary:`"subtle" | "solid"`},defaultValue:{summary:`subtle`}}},title:{description:`Optional bold heading rendered above the body content.`,control:`text`},children:{description:`Body content. Any ReactNode (text, links, lists).`,control:`text`},action:{description:`Free-form action node rendered to the right of the body (e.g. a Button or link).`,table:{type:{summary:`ReactNode`}},control:!1},onClose:{description:`When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.`,table:{type:{summary:`() => void`}},control:!1}}},d=[`neutral`,`success`,`error`,`warning`,`info`],f={name:`Playground`,args:{variant:`info`,appearance:`subtle`,title:`Heads up`,children:`This is a beta feature. Behavior may change.`}},p={name:`Subtle Treatments`,render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:d.map(e=>(0,l.jsx)(o,{variant:e,appearance:`subtle`,title:e.toUpperCase(),children:`The quick brown fox jumps over the lazy dog.`},e))})},m={name:`Solid Treatments`,render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:d.map(e=>(0,l.jsx)(o,{variant:e,appearance:`solid`,title:e.toUpperCase(),children:`The quick brown fox jumps over the lazy dog.`},e))})},h={name:`Title Only`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:[(0,l.jsx)(o,{variant:`success`,title:`Saved`}),(0,l.jsx)(o,{variant:`error`,title:`Could not connect`})]})},g={name:`Body Only`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:[(0,l.jsxs)(o,{variant:`info`,children:[`This feature is in `,(0,l.jsx)(`strong`,{children:`beta`}),`. Please share feedback.`]}),(0,l.jsxs)(o,{variant:`warning`,children:[`Three records were skipped.`,` `,(0,l.jsx)(`a`,{href:`#x`,className:`underline`,children:`View details`})]})]})},_={name:`With Action`,render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:[(0,l.jsx)(o,{variant:`warning`,title:`Unsaved changes`,action:(0,l.jsx)(i,{size:`sm`,children:`Save now`}),children:`Your changes will be lost if you leave this page.`}),(0,l.jsx)(o,{variant:`info`,title:`Update available`,action:(0,l.jsx)(i,{size:`sm`,variant:`secondary`,children:`Reload`}),children:`A newer version of this app is ready.`})]})},v={name:`Solid With Action`,parameters:{docs:{description:{story:'On `appearance="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.'}}},render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:[(0,l.jsx)(o,{variant:`warning`,appearance:`solid`,title:`Unsaved changes`,action:(0,l.jsx)(i,{variant:`inverted`,size:`sm`,children:`Save now`}),children:`Your changes will be lost if you leave this page.`}),(0,l.jsx)(o,{variant:`info`,appearance:`solid`,title:`Update available`,action:(0,l.jsx)(i,{variant:`inverted`,size:`sm`,children:`Reload`}),children:`A newer version of this app is ready.`})]})},y={name:`Dismissible`,render:()=>{let[e,t]=(0,c.useState)({a:!0,b:!0});return(0,l.jsxs)(`div`,{className:`flex flex-col gap-3 max-w-xl`,children:[e.a&&(0,l.jsx)(o,{variant:`info`,title:`Heads up`,onClose:()=>t(e=>({...e,a:!1})),children:`Click the close button to dismiss this callout.`}),e.b&&(0,l.jsx)(o,{variant:`warning`,title:`With action and close`,action:(0,l.jsx)(i,{size:`sm`,children:`Acknowledge`}),onClose:()=>t(e=>({...e,b:!1})),children:`Both action and close can coexist.`}),!e.a&&!e.b&&(0,l.jsx)(i,{onClick:()=>t({a:!0,b:!0}),children:`Reset`})]})}},b={name:`Full Matrix`,parameters:{docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support both appearances."}}},render:()=>(0,l.jsx)(`div`,{className:`grid grid-cols-1 gap-3 max-w-2xl`,children:[`subtle`,`solid`].map(e=>d.map(t=>(0,l.jsx)(o,{variant:t,appearance:e,title:`${t} / ${e}`,children:`The quick brown fox jumps over the lazy dog.`},`${t}-${e}`)))})},x={name:`Long Content`,render:()=>(0,l.jsx)(`div`,{className:`max-w-xl`,children:(0,l.jsx)(o,{variant:`warning`,title:`Heads up: long-running operation completed with warnings`,action:(0,l.jsx)(i,{size:`sm`,children:`View details`}),onClose:()=>{},children:`Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.`})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    appearance: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Solid With Action',
  parameters: {
    docs: {
      description: {
        story: 'On \`appearance="solid"\` the saturated background can clash with default Button variants. Pass \`<Button variant="inverted">\` so the action stays legible.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" appearance="solid" title="Unsaved changes" action={<Button variant="inverted" size="sm">
            Save now
          </Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" appearance="solid" title="Update available" action={<Button variant="inverted" size="sm">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Every defined \`variant\` × \`appearance\` combination. All five variants support both appearances.'
      }
    }
  },
  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {(['subtle', 'solid'] as const).map(appearance => VARIANTS.map(variant => <Callout key={\`\${variant}-\${appearance}\`} variant={variant} appearance={appearance} title={\`\${variant} / \${appearance}\`}>
            The quick brown fox jumps over the lazy dog.
          </Callout>))}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`SubtleTreatments`,`SolidTreatments`,`TitleOnly`,`BodyOnly`,`WithAction`,`SolidWithAction`,`Dismissible`,`FullMatrix`,`LongContent`]}))();export{g as BodyOnly,y as Dismissible,b as FullMatrix,x as LongContent,f as Playground,m as SolidTreatments,v as SolidWithAction,p as SubtleTreatments,h as TitleOnly,_ as WithAction,S as __namedExportsOrder,u as default};