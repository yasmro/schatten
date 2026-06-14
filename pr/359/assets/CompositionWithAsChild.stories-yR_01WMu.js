import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-Dc0mLLnz.js";import{Ot as i,t as a}from"./lucide-react-VAXaEEz3.js";import{a as o,i as s,n as c,t as l}from"./Button-BGdGuDrw.js";import{i as u,n as d,r as f,t as p}from"./Text-DsFE5Tgy.js";import{a as m,c as h,i as g,n as _,o as v,r as y,t as b}from"./docs-ui-Da22FkRD.js";var x,S,C,w,T,E,D,O,k;e((()=>{a(),x=t(r(),1),c(),d(),o(),f(),h(),S=n(),C={title:`Patterns/Composition with asChild`,parameters:{layout:`fullscreen`}},w=({title:e,children:t})=>(0,S.jsxs)(`div`,{className:`border border-border rounded-lg p-4`,children:[(0,S.jsx)(`h3`,{className:`text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3`,children:e}),(0,S.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:t})]}),T={name:`Overview`,render:()=>(0,S.jsxs)(`div`,{className:`mx-auto max-w-3xl px-8 py-12`,children:[(0,S.jsx)(m,{children:`Composition with asChild`}),(0,S.jsxs)(y,{children:[`Schatten offers three escape hatches for "render this styling on a different element". They are not interchangeable — reach for the narrowest one that fits. (The contributor-facing contract lives in `,(0,S.jsx)(`code`,{className:`text-xs`,children:`component-api-conventions.md`}),` and`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`component-architecture.md`}),`.)`]}),(0,S.jsx)(_,{caption:`Escape-hatch comparison: asChild / *Variants() / as`,headers:[`Escape hatch`,`What you get`,`Where it works`,`Available on`],rows:[{key:`aschild`,cells:[(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`asChild`}),` (Radix`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`Slot`}),`)`]},`hatch`),(0,S.jsxs)(x.Fragment,{children:[`The component's resolved `,(0,S.jsx)(`code`,{className:`text-xs`,children:`className`}),` `,(0,S.jsx)(`strong`,{children:`plus its forwarded props / ref`}),` merged onto a single child — the child `,(0,S.jsx)(`em`,{children:`becomes`}),` the component`]},`get`),`React only`,(0,S.jsxs)(`strong`,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`Button`}),` only`]},`on`)]},{key:`variants`,cells:[(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`*Variants()`}),` (`,(0,S.jsx)(`code`,{className:`text-xs`,children:`buttonVariants()`}),` /`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`textVariants()`}),`)`]},`hatch`),(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(`strong`,{children:`Only the class string`}),` — your element keeps its full native typing`]},`get`),(0,S.jsxs)(x.Fragment,{children:[`Any context: React, SSR HTML, email, framework`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`<Link>`})]},`where`),(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`Button`}),`, `,(0,S.jsx)(`code`,{className:`text-xs`,children:`Text`})]},`on`)]},{key:`as`,cells:[(0,S.jsxs)(x.Fragment,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`as`}),` (closed tag enum)`]},`hatch`),(0,S.jsxs)(x.Fragment,{children:[`Swaps the rendered semantic tag (`,(0,S.jsx)(`code`,{className:`text-xs`,children:`p`}),` /`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`span`}),` / `,(0,S.jsx)(`code`,{className:`text-xs`,children:`h1`}),`–`,(0,S.jsx)(`code`,{className:`text-xs`,children:`h6`}),`)`]},`get`),`React only`,(0,S.jsxs)(`strong`,{children:[(0,S.jsx)(`code`,{className:`text-xs`,children:`Text`}),` only`]},`on`)]}]}),(0,S.jsxs)(g,{children:[`This table is the consumer-facing companion to the contributor contract in`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`component-api-conventions.md §"asChild vs *Variants()"`}),` — keep that doc as the source of truth if the two ever drift.`]}),(0,S.jsx)(v,{children:`Decision tree`}),(0,S.jsxs)(`ol`,{className:`list-decimal flex flex-col gap-2 pl-6 text-sm text-foreground-muted`,children:[(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{children:`Just need a different semantic tag on Text?`}),` (e.g. render a paragraph as an `,(0,S.jsx)(`code`,{className:`text-xs`,children:`<h2>`}),`) → use `,(0,S.jsx)(`code`,{className:`text-xs`,children:`as`}),`.`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{children:`Only want the class string on your own element?`}),` (framework`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`<Link>`}),`, server-rendered HTML, email) → use`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`*Variants()`}),`. Your element keeps its own typing.`]}),(0,S.jsxs)(`li`,{children:[(0,S.jsx)(`strong`,{children:`Want your element to behave as the Button`}),` — forward Button's events / ref / class onto it (the shadcn idiom)? → use `,(0,S.jsx)(`code`,{className:`text-xs`,children:`asChild`}),`.`]})]}),(0,S.jsx)(v,{children:`asChild does not project inner content`}),(0,S.jsxs)(g,{children:[`In `,(0,S.jsx)(`code`,{className:`text-xs`,children:`asChild`}),` mode Button renders`,` `,(0,S.jsxs)(`strong`,{children:[`only `,(0,S.jsx)(`code`,{className:`text-xs`,children:`children`})]}),` `,`— its `,(0,S.jsx)(`code`,{className:`text-xs`,children:`icon`}),` and `,(0,S.jsx)(`code`,{className:`text-xs`,children:`isLoading`}),` `,`are `,(0,S.jsx)(`em`,{children:`not`}),` rendered. `,(0,S.jsx)(`code`,{className:`text-xs`,children:`asChild`}),` makes your element a button-styled, button-behaving element; it does not stamp Button's icon / spinner internals onto your child. Author any icon inside your own child.`]}),(0,S.jsx)(v,{children:`Anti-patterns`}),(0,S.jsx)(b,{children:`// ✗ Text no longer exposes asChild (removed in v0.11.0).
<Text asChild><a href="/x">Link</a></Text>
// ✓ Use textVariants() on your element instead:
<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>

// ✗ Form inputs and Select trigger never take asChild (hard exclusion).
<SelectTrigger asChild>…</SelectTrigger>

// ✗ asChild does not add an icon — icon is dropped here:
<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>
// ✓ Author the icon inside your child:
<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>`})]})},E={name:`asChild — Button as a link`,render:()=>(0,S.jsxs)(`div`,{className:`p-8`,children:[(0,S.jsx)(v,{children:`asChild — Button as a link`}),(0,S.jsxs)(g,{children:[`<Button asChild><a href="…">…</a></Button>`,` — the anchor receives Button styling and forwarded props / ref. The icon is authored inside the anchor;`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`asChild`}),` does not project Button's`,` `,(0,S.jsx)(`code`,{className:`text-xs`,children:`icon`}),` prop.`]}),(0,S.jsxs)(w,{title:`Rendered`,children:[(0,S.jsx)(l,{asChild:!0,children:(0,S.jsx)(`a`,{href:`#button-as-link`,children:`Primary link`})}),(0,S.jsx)(l,{asChild:!0,variant:`secondary`,children:(0,S.jsx)(`a`,{href:`#button-as-link`,children:`Secondary link`})}),(0,S.jsx)(l,{asChild:!0,children:(0,S.jsxs)(`a`,{href:`#button-as-link`,children:[`With icon `,(0,S.jsx)(i,{"aria-hidden":`true`})]})})]})]})},D={name:`buttonVariants() — class only`,render:()=>(0,S.jsxs)(`div`,{className:`p-8`,children:[(0,S.jsx)(v,{children:`buttonVariants() — class only`}),(0,S.jsxs)(g,{children:[`<a className={buttonVariants({ variant })}>…</a>`,` — identical DOM, no prop forwarding, fully typed. Works outside React too (server-rendered HTML, email).`]}),(0,S.jsxs)(w,{title:`Rendered`,children:[(0,S.jsx)(`a`,{href:`#link-variants`,className:s({variant:`primary`}),children:`Primary`}),(0,S.jsx)(`a`,{href:`#link-variants`,className:s({variant:`secondary`}),children:`Secondary`}),(0,S.jsx)(`a`,{href:`#link-variants`,className:s({variant:`destructive`,size:`sm`}),children:`Destructive sm`})]})]})},O={name:`Text — as vs textVariants()`,render:()=>(0,S.jsxs)(`div`,{className:`p-8`,children:[(0,S.jsx)(v,{children:`Text — as vs textVariants()`}),(0,S.jsx)(g,{children:"`as` for a semantic tag swap; `textVariants()` for an arbitrary element."}),(0,S.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,S.jsxs)(w,{title:`as — semantic tag swap`,children:[(0,S.jsx)(p,{as:`h2`,variant:`heading`,size:`lg`,children:`Heading rendered as <h2>`}),(0,S.jsx)(p,{as:`span`,color:`muted`,children:`Body rendered as <span>`})]}),(0,S.jsx)(w,{title:`textVariants() — styling on an arbitrary element`,children:(0,S.jsx)(`a`,{href:`#text-variants`,className:u({variant:`body`,color:`info`}),children:`An anchor styled with textVariants()`})})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div className="mx-auto max-w-3xl px-8 py-12">
      <PageTitle>Composition with asChild</PageTitle>
      <Lead>
        Schatten offers three escape hatches for "render this styling on a different element". They
        are not interchangeable — reach for the narrowest one that fits. (The contributor-facing
        contract lives in <code className="text-xs">component-api-conventions.md</code> and{' '}
        <code className="text-xs">component-architecture.md</code>.)
      </Lead>

      <DocsTable caption="Escape-hatch comparison: asChild / *Variants() / as" headers={['Escape hatch', 'What you get', 'Where it works', 'Available on']} rows={[{
      key: 'aschild',
      cells: [<Fragment key="hatch">
                <code className="text-xs">asChild</code> (Radix{' '}
                <code className="text-xs">Slot</code>)
              </Fragment>, <Fragment key="get">
                The component's resolved <code className="text-xs">className</code>{' '}
                <strong>plus its forwarded props / ref</strong> merged onto a single child — the
                child <em>becomes</em> the component
              </Fragment>, 'React only', <strong key="on">
                <code className="text-xs">Button</code> only
              </strong>]
    }, {
      key: 'variants',
      cells: [<Fragment key="hatch">
                <code className="text-xs">*Variants()</code> (
                <code className="text-xs">buttonVariants()</code> /{' '}
                <code className="text-xs">textVariants()</code>)
              </Fragment>, <Fragment key="get">
                <strong>Only the class string</strong> — your element keeps its full native typing
              </Fragment>, <Fragment key="where">
                Any context: React, SSR HTML, email, framework{' '}
                <code className="text-xs">&lt;Link&gt;</code>
              </Fragment>, <Fragment key="on">
                <code className="text-xs">Button</code>, <code className="text-xs">Text</code>
              </Fragment>]
    }, {
      key: 'as',
      cells: [<Fragment key="hatch">
                <code className="text-xs">as</code> (closed tag enum)
              </Fragment>, <Fragment key="get">
                Swaps the rendered semantic tag (<code className="text-xs">p</code> /{' '}
                <code className="text-xs">span</code> / <code className="text-xs">h1</code>–
                <code className="text-xs">h6</code>)
              </Fragment>, 'React only', <strong key="on">
                <code className="text-xs">Text</code> only
              </strong>]
    }]} />

      <Note>
        This table is the consumer-facing companion to the contributor contract in{' '}
        <code className="text-xs">component-api-conventions.md §"asChild vs *Variants()"</code> —
        keep that doc as the source of truth if the two ever drift.
      </Note>

      <SectionTitle>Decision tree</SectionTitle>
      <ol className="list-decimal flex flex-col gap-2 pl-6 text-sm text-foreground-muted">
        <li>
          <strong>Just need a different semantic tag on Text?</strong> (e.g. render a paragraph as
          an <code className="text-xs">&lt;h2&gt;</code>) → use <code className="text-xs">as</code>.
        </li>
        <li>
          <strong>Only want the class string on your own element?</strong> (framework{' '}
          <code className="text-xs">&lt;Link&gt;</code>, server-rendered HTML, email) → use{' '}
          <code className="text-xs">*Variants()</code>. Your element keeps its own typing.
        </li>
        <li>
          <strong>Want your element to behave as the Button</strong> — forward Button's events / ref
          / class onto it (the shadcn idiom)? → use <code className="text-xs">asChild</code>.
        </li>
      </ol>

      <SectionTitle>asChild does not project inner content</SectionTitle>
      <Note>
        In <code className="text-xs">asChild</code> mode Button renders{' '}
        <strong>
          only <code className="text-xs">children</code>
        </strong>{' '}
        — its <code className="text-xs">icon</code> and <code className="text-xs">isLoading</code>{' '}
        are <em>not</em> rendered. <code className="text-xs">asChild</code> makes your element a
        button-styled, button-behaving element; it does not stamp Button's icon / spinner internals
        onto your child. Author any icon inside your own child.
      </Note>

      <SectionTitle>Anti-patterns</SectionTitle>
      <CodeBlock>{\`// ✗ Text no longer exposes asChild (removed in v0.11.0).
<Text asChild><a href="/x">Link</a></Text>
// ✓ Use textVariants() on your element instead:
<a href="/x" className={textVariants({ variant: 'body' })}>Link</a>

// ✗ Form inputs and Select trigger never take asChild (hard exclusion).
<SelectTrigger asChild>…</SelectTrigger>

// ✗ asChild does not add an icon — icon is dropped here:
<Button asChild icon={ArrowRight}><a href="/x">Go</a></Button>
// ✓ Author the icon inside your child:
<Button asChild><a href="/x">Go <ArrowRight aria-hidden /></a></Button>\`}</CodeBlock>
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Landing page for the three escape hatches. The narrative (comparison table /
decision tree / anti-patterns) is rendered inline here so it is visible in
Canvas — see storybook-guideline.md "Hand-built docs pages — render prose
inline".`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'asChild — Button as a link',
  render: () => <div className="p-8">
      <SectionTitle>asChild — Button as a link</SectionTitle>
      <Note>
        {'<Button asChild><a href="…">…</a></Button>'} — the anchor receives Button styling and
        forwarded props / ref. The icon is authored inside the anchor;{' '}
        <code className="text-xs">asChild</code> does not project Button's{' '}
        <code className="text-xs">icon</code> prop.
      </Note>
      <Block title="Rendered">
        <Button asChild>
          <a href="#button-as-link">Primary link</a>
        </Button>
        <Button asChild variant="secondary">
          <a href="#button-as-link">Secondary link</a>
        </Button>
        <Button asChild>
          <a href="#button-as-link">
            With icon <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </Block>
    </div>
}`,...E.parameters?.docs?.source},description:{story:"`asChild` — make a non-`<button>` element behave as a Button. Radix\n`Slot` merges Button's `className` and forwards its props / ref onto the\nsingle child. The child authors its own inner content (including any\nicon), because Button renders only `children` in `asChild` mode.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'buttonVariants() — class only',
  render: () => <div className="p-8">
      <SectionTitle>buttonVariants() — class only</SectionTitle>
      <Note>
        {'<a className={buttonVariants({ variant })}>…</a>'} — identical DOM, no prop forwarding,
        fully typed. Works outside React too (server-rendered HTML, email).
      </Note>
      <Block title="Rendered">
        <a href="#link-variants" className={buttonVariants({
        variant: 'primary'
      })}>
          Primary
        </a>
        <a href="#link-variants" className={buttonVariants({
        variant: 'secondary'
      })}>
          Secondary
        </a>
        <a href="#link-variants" className={buttonVariants({
        variant: 'destructive',
        size: 'sm'
      })}>
          Destructive sm
        </a>
      </Block>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`\`buttonVariants()\` — only the class string. The consumer's element keeps
its full native typing, and it works in any context (SSR HTML, email,
framework Link) because nothing React-specific is involved.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Text — as vs textVariants()',
  render: () => <div className="p-8">
      <SectionTitle>Text — as vs textVariants()</SectionTitle>
      <Note>\`as\` for a semantic tag swap; \`textVariants()\` for an arbitrary element.</Note>
      <div className="flex flex-col gap-4">
        <Block title="as — semantic tag swap">
          <Text as="h2" variant="heading" size="lg">
            Heading rendered as &lt;h2&gt;
          </Text>
          <Text as="span" color="muted">
            Body rendered as &lt;span&gt;
          </Text>
        </Block>
        <Block title="textVariants() — styling on an arbitrary element">
          <a href="#text-variants" className={textVariants({
          variant: 'body',
          color: 'info'
        })}>
            An anchor styled with textVariants()
          </a>
        </Block>
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:"`Text` polymorphism — `as` swaps the semantic tag; `textVariants()` puts\nText styling on an arbitrary element. `Text` does **not** expose\n`asChild` (removed in v0.11.0).",...O.parameters?.docs?.description}}},k=[`Overview`,`ButtonAsLink`,`LinkWithButtonVariants`,`TextPolymorphism`]}))();export{E as ButtonAsLink,D as LinkWithButtonVariants,T as Overview,O as TextPolymorphism,k as __namedExportsOrder,C as default};