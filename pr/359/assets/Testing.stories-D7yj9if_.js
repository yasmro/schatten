import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-Dc0mLLnz.js";import{n as i,t as a}from"./Button-BGdGuDrw.js";import{n as o,t as s}from"./Callout-DdZx91JX.js";import{n as c,t as l}from"./Dialog-BjJVwQBT.js";import{n as u,t as d}from"./Input-QjhTX4Ha.js";import{n as f,t as p}from"./Field-C627VQCD.js";import{a as ee,i as m,n as h,r as g,t as _}from"./Tooltip-_Aw-P22x.js";import{c as v,i as y,l as b,n as x,s as S,t as C}from"./Select-HfpzpoTY.js";import{a as w,i as T,n as E,t as D}from"./Toaster-BCnBinGr.js";import{a as O,c as k,i as A,n as j,o as M,r as N,s as P,t as F}from"./docs-ui-Da22FkRD.js";function I(){let[e,t]=(0,R.useState)(!1);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(a,{"data-testid":`delete-open`,onClick:()=>t(!0),children:`Delete account`}),(0,z.jsx)(l,{isOpen:e,onOpenChange:t,title:`Delete account`,description:`This action cannot be undone.`,actionButton:{label:`Delete`,variant:`destructive`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`},children:(0,z.jsx)(`p`,{"data-testid":`delete-message`,children:`Are you sure you want to delete your account?`})})]})}function L(){return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(a,{onClick:()=>w({title:`Saved successfully`,variant:`success`}),children:`Save`}),(0,z.jsx)(D,{})]})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{R=t(r(),1),i(),o(),c(),f(),u(),b(),T(),E(),ee(),k(),z=n(),B={title:`Patterns/Testing`,parameters:{layout:`fullscreen`}},V=({children:e})=>(0,z.jsx)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:e}),H=({children:e})=>(0,z.jsx)(`code`,{className:`rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground`,children:e}),U=({label:e,children:t})=>(0,z.jsxs)(`div`,{className:`border border-border rounded-lg p-4 mb-4`,children:[(0,z.jsx)(`h3`,{className:`text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-3`,children:e}),(0,z.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:t})]}),W={name:`Overview`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`Testing`}),(0,z.jsxs)(N,{children:[`How to make Schatten components addressable from a consumer E2E suite (Playwright / Cypress / React Testing Library). The plumbing is deliberately thin: components forward`,` `,(0,z.jsx)(H,{children:`data-testid`}),` (and every other unknown DOM attribute) onto their root element — there is no bespoke `,(0,z.jsx)(H,{children:`testId`}),` prop to learn.`]}),(0,z.jsxs)(s,{variant:`info`,title:`Role first, testid second`,children:[`Prefer `,(0,z.jsx)(H,{children:`getByRole(role, { name })`}),` with an accessible name. It is stable across refactors and doubles as an accessibility check. Reach for `,(0,z.jsx)(H,{children:`data-testid`}),` `,`only when a role-based query is ambiguous, unstable, or impossible (anonymous wrappers, repeated rows).`]}),(0,z.jsx)(M,{children:`What this page covers`}),(0,z.jsxs)(`ul`,{className:`list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2`,children:[(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`Root pass-through`}),` — testid lands on the rendered root via `,(0,z.jsx)(H,{children:`{...props}`}),`.`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`Compound components`}),` — each sub-part takes its own testid (Select).`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`asChild caveat`}),` — with an element child the testid merges onto the child (Tooltip).`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`Portal content`}),` — testid goes on the Content, and queries scope from the page (Select / Tooltip).`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`Curated-props exceptions`}),` — Dialog and Toast do not forward arbitrary attributes; address their children or their role.`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`strong`,{className:`text-foreground`,children:`Naming & no auto-testid`}),` — the value is yours to choose; Schatten never injects one.`]})]}),(0,z.jsx)(M,{children:`Contributor contract`}),(0,z.jsxs)(A,{children:[`The implementer-facing source of truth is`,` `,(0,z.jsx)(H,{children:`.claude/rules/component-testid-guideline.md`}),`. This page is its live, runnable companion — when the rule and this page disagree, the rule wins.`]})]})},G={name:`1. data-testid on the root`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`1. data-testid on the root`}),(0,z.jsxs)(N,{children:[`Pass `,(0,z.jsx)(H,{children:`data-testid`}),` like any other DOM attribute. There is no `,(0,z.jsx)(H,{children:`testId`}),` `,`prop — the component spreads `,(0,z.jsx)(H,{children:`{...props}`}),` onto its rendered root, so the attribute appears on the real element. The same mechanism works for `,(0,z.jsx)(H,{children:`data-cy`}),`,`,` `,(0,z.jsx)(H,{children:`data-test`}),`, or any custom hook.`]}),(0,z.jsx)(U,{label:`A button with a testid`,children:(0,z.jsx)(a,{"data-testid":`submit-btn`,children:`Save`})}),(0,z.jsx)(M,{children:`Rendered DOM`}),(0,z.jsxs)(A,{children:[`Inspect the button above — the attribute is on the native `,(0,z.jsx)(H,{children:`<button>`}),`, alongside the public `,(0,z.jsx)(H,{children:`st-*`}),` classes.`]}),(0,z.jsx)(F,{children:`<button data-testid="submit-btn" class="st-btn st-btn--primary st-btn--md">
  Save
</button>`}),(0,z.jsx)(M,{children:`Selecting it`}),(0,z.jsx)(F,{children:`// Playwright
await page.getByTestId('submit-btn').click()

// …but prefer role + name when it is unambiguous:
await page.getByRole('button', { name: 'Save' }).click()`})]})},K={name:`2. Compound components`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`2. Compound components`}),(0,z.jsxs)(N,{children:[`Compound components (Select, Tooltip, RadioGroup) are built from named parts, and each part forwards its own props. Put a `,(0,z.jsx)(H,{children:`data-testid`}),` on whichever parts your test needs — they are independent. Select is the canonical example.`]}),(0,z.jsx)(U,{label:`Select with a testid on every part (open it)`,children:(0,z.jsxs)(C,{children:[(0,z.jsx)(S,{"data-testid":`country-trigger`,className:`w-56`,children:(0,z.jsx)(v,{placeholder:`Country`})}),(0,z.jsxs)(x,{"data-testid":`country-content`,children:[(0,z.jsx)(y,{value:`jp`,"data-testid":`country-item-jp`,children:`Japan`}),(0,z.jsx)(y,{value:`us`,"data-testid":`country-item-us`,children:`United States`})]})]})}),(0,z.jsx)(F,{children:`<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>`}),(0,z.jsxs)(A,{children:[`Note: Schatten Dialog is `,(0,z.jsx)(`strong`,{children:`not`}),` a compound component — it takes structured props (`,(0,z.jsx)(H,{children:`title`}),`, `,(0,z.jsx)(H,{children:`actionButton`}),`, …) rather than`,` `,(0,z.jsx)(H,{children:`Dialog.Trigger`}),` / `,(0,z.jsx)(H,{children:`Dialog.Content`}),` sub-parts. See section 5 for how to address it.`]})]})},q={name:`3. asChild trigger caveat`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`3. asChild trigger caveat`}),(0,z.jsxs)(N,{children:[(0,z.jsx)(H,{children:`TooltipTrigger`}),` switches to Radix `,(0,z.jsx)(H,{children:`asChild`}),` mode when its child is a non-string element (for example a `,(0,z.jsx)(H,{children:`Button`}),`). In that mode Radix merges props onto the child, so a `,(0,z.jsx)(H,{children:`data-testid`}),` on the trigger ends up on `,(0,z.jsx)(`em`,{children:`your`}),` element, not on a Schatten-rendered wrapper. Both cases below resolve with`,` `,(0,z.jsx)(H,{children:`getByTestId('help')`}),` — the difference is only where the attribute lands.`]}),(0,z.jsx)(U,{label:`Text child → Schatten renders the button → testid on it (hover)`,children:(0,z.jsx)(g,{delayDuration:100,children:(0,z.jsxs)(_,{children:[(0,z.jsx)(m,{"data-testid":`help-text`,children:`Hover for help`}),(0,z.jsx)(h,{children:`Saved drafts stay for 30 days.`})]})})}),(0,z.jsx)(U,{label:`Element child → asChild merges testid onto your Button (hover)`,children:(0,z.jsx)(g,{delayDuration:100,children:(0,z.jsxs)(_,{children:[(0,z.jsx)(m,{"data-testid":`help-element`,children:(0,z.jsx)(a,{variant:`secondary`,children:`Help`})}),(0,z.jsx)(h,{children:`Saved drafts stay for 30 days.`})]})})}),(0,z.jsx)(F,{children:`// text child → testid on the Schatten-generated <button>
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>

// element child → testid merged onto YOUR <Button>
<TooltipTrigger data-testid="help">
  <Button>Help</Button>
</TooltipTrigger>`})]})},J={name:`4. Portal-rendered content`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`4. Portal-rendered content`}),(0,z.jsxs)(N,{children:[(0,z.jsx)(H,{children:`SelectContent`}),`, `,(0,z.jsx)(H,{children:`TooltipContent`}),`, and similar popups render through a Portal into `,(0,z.jsx)(H,{children:`document.body`}),` — outside `,(0,z.jsx)(H,{children:`#storybook-root`}),` and outside the trigger's DOM subtree. A selector rooted at the trigger will never reach them by DOM traversal.`]}),(0,z.jsx)(M,{children:`Two rules`}),(0,z.jsxs)(`ul`,{className:`list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2 mb-4`,children:[(0,z.jsx)(`li`,{children:`Put the testid on the Content element itself, not on the trigger.`}),(0,z.jsxs)(`li`,{children:[`Scope the query from `,(0,z.jsx)(H,{children:`page`}),` (Playwright) / `,(0,z.jsx)(H,{children:`screen`}),` (RTL), not from a trigger-rooted locator.`]})]}),(0,z.jsx)(U,{label:`Open the select — the listbox is portaled to body`,children:(0,z.jsxs)(C,{children:[(0,z.jsx)(S,{"data-testid":`fruit-trigger`,className:`w-56`,children:(0,z.jsx)(v,{placeholder:`Pick a fruit`})}),(0,z.jsxs)(x,{"data-testid":`fruit-content`,children:[(0,z.jsx)(y,{value:`apple`,children:`Apple`}),(0,z.jsx)(y,{value:`banana`,children:`Banana`}),(0,z.jsx)(y,{value:`cherry`,children:`Cherry`})]})]})}),(0,z.jsx)(F,{children:`// Playwright — open via the trigger, then scope into the portaled content
await page.getByTestId('fruit-trigger').click()
await page
  .getByTestId('fruit-content')
  .getByRole('option', { name: 'Banana' })
  .click()`})]})},Y={name:`5. Curated-props components`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`5. Curated-props components`}),(0,z.jsxs)(N,{children:[`A few high-level components take a curated prop surface and do `,(0,z.jsx)(`strong`,{children:`not`}),` spread unknown attributes onto their content. For these, address the children you pass in, or query by role + accessible name.`]}),(0,z.jsx)(P,{children:`Dialog — put the testid on your children`}),(0,z.jsxs)(A,{children:[`Dialog renders structured props (`,(0,z.jsx)(H,{children:`title`}),`, `,(0,z.jsx)(H,{children:`actionButton`}),`,`,` `,(0,z.jsx)(H,{children:`cancelButton`}),`) and its `,(0,z.jsx)(H,{children:`children`}),` in the body — it does not forward a`,` `,(0,z.jsx)(H,{children:`data-testid`}),` onto its Content. Put testids on the elements you author, and use`,` `,(0,z.jsx)(H,{children:`getByRole('dialog', { name })`}),` for the frame (Radix sets`,` `,(0,z.jsx)(H,{children:`role="dialog"`}),` and links the title as its name).`]}),(0,z.jsx)(U,{label:`Open the dialog (rendered into a Portal)`,children:(0,z.jsx)(I,{})}),(0,z.jsx)(F,{children:`<Dialog title="Delete account" isOpen={open} onOpenChange={setOpen}
  actionButton={{ label: 'Delete', variant: 'destructive', onClick }}>
  <p data-testid="delete-message">Are you sure?</p>
</Dialog>

// Playwright
await page.getByRole('dialog', { name: 'Delete account' })   // the frame
await page.getByTestId('delete-message')                     // your children`}),(0,z.jsx)(P,{children:`Toast — imperative, so query by role`}),(0,z.jsxs)(A,{children:[`Toasts are created by the imperative `,(0,z.jsx)(H,{children:`toast({ … })`}),` call, which takes no JSX — there is no element to hang a `,(0,z.jsx)(H,{children:`data-testid`}),` on. Every toast renders with`,` `,(0,z.jsx)(H,{children:`role="status"`}),`, so query by role + accessible name (the title).`]}),(0,z.jsx)(U,{label:`Fire a toast`,children:(0,z.jsx)(L,{})}),(0,z.jsx)(F,{children:`toast({ title: 'Saved successfully', variant: 'success' })

// Playwright
await page.getByRole('status', { name: 'Saved successfully' })`})]})},X={name:`6. Form fields`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`6. Form fields`}),(0,z.jsxs)(N,{children:[`Compose a labelled field with the flat `,(0,z.jsx)(H,{children:`Field`}),` API and put the`,` `,(0,z.jsx)(H,{children:`data-testid`}),` on the input you pass as children. Field wires the label, description, and error state around it; the input is still a plain DOM element that forwards`,` `,`the attribute.`]}),(0,z.jsx)(U,{label:`Field + Input with a testid`,children:(0,z.jsx)(p,{label:`Email`,error:`Enter a valid email address.`,className:`w-72`,children:(0,z.jsx)(d,{type:`email`,"data-testid":`email-input`,defaultValue:`not-an-email`})})}),(0,z.jsx)(F,{children:`<Field label="Email" error={emailError}>
  <Input type="email" data-testid="email-input" />
</Field>

// Playwright
await page.getByTestId('email-input').fill('foo@example.com')`}),(0,z.jsxs)(s,{variant:`info`,title:`FormField (lv2) is coming in v1+`,children:[`The one-component short form `,(0,z.jsx)(H,{children:`FormField`}),` (Field + label + description + error) is planned for v1+ as `,(0,z.jsx)(`a`,{href:`https://github.com/yasmro/schatten/issues/123`,children:`#123`}),`. It will forward testids onto its children the same way. Until then, compose with `,(0,z.jsx)(H,{children:`Field`}),` `,`as above.`]})]})},Z={name:`7. Naming & no auto-testid`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`7. Naming & no auto-testid`}),(0,z.jsx)(N,{children:`Choosing testid values is the consuming product's responsibility, not Schatten's. This page only describes the plumbing — where the attribute lands and how it survives a Portal boundary. The naming scheme is yours.`}),(0,z.jsx)(M,{children:`A recommendation, not a rule`}),(0,z.jsxs)(A,{children:[`A feature-scoped, purpose-suffixed shape reads well and avoids collisions —`,` `,(0,z.jsx)(H,{children:`{feature}-{purpose}`}),`, e.g. `,(0,z.jsx)(H,{children:`signup-email-input`}),` or`,` `,(0,z.jsx)(H,{children:`dashboard-user-menu`}),`. `,(0,z.jsx)(H,{children:`camelCase`}),` and `,(0,z.jsx)(H,{children:`kebab-case`}),` both work; pick one and keep it consistent across your codebase. Reserve testids for elements that role + accessible name cannot already address.`]}),(0,z.jsx)(M,{children:`Schatten never injects a testid`}),(0,z.jsxs)(s,{variant:`warning`,title:`No library-supplied testids`,children:[`Schatten does not emit `,(0,z.jsx)(H,{children:`data-testid`}),` from inside the library — no fixed testids on internal Slots or Portals, no values derived from `,(0,z.jsx)(H,{children:`displayName`}),`, no`,` `,(0,z.jsx)(H,{children:`testing`}),`-flag toggles. A library-supplied testid would pollute your namespace and force you to dodge reserved names. The single source of truth is you.`]}),(0,z.jsxs)(A,{children:[`Runtime `,(0,z.jsx)(H,{children:`data-*`}),` attributes that Radix emits for behaviour / styling (`,(0,z.jsx)(H,{children:`data-state`}),`, `,(0,z.jsx)(H,{children:`data-disabled`}),`, `,(0,z.jsx)(H,{children:`data-side`}),`) are a separate concern — they are not testids and are safe to rely on for state-scoped assertions.`]})]})},Q={name:`8. Selector cheatsheet`,render:()=>(0,z.jsxs)(V,{children:[(0,z.jsx)(O,{children:`8. Selector cheatsheet`}),(0,z.jsx)(N,{children:`The same intent expressed across the three common test runners. Reach for the role-based row first; fall back to the testid row when role + name cannot disambiguate.`}),(0,z.jsx)(j,{headers:[`Intent`,`Playwright`,`Cypress`,`React Testing Library`],rows:[{key:`role`,cells:[`By role + name (first choice)`,(0,z.jsx)(H,{children:`page.getByRole('button', { name })`},`c`),(0,z.jsx)(H,{children:`cy.findByRole('button', { name })`},`c`),(0,z.jsx)(H,{children:`screen.getByRole('button', { name })`},`c`)]},{key:`testid`,cells:[`By testid (fallback)`,(0,z.jsx)(H,{children:`page.getByTestId('x')`},`c`),(0,z.jsx)(H,{children:`cy.get('[data-testid="x"]')`},`c`),(0,z.jsx)(H,{children:`screen.getByTestId('x')`},`c`)]},{key:`portal`,cells:[`Portal content`,`Scope from page`,`Document-wide by default`,(0,z.jsxs)(`span`,{children:[(0,z.jsx)(H,{children:`screen`}),` (not `,(0,z.jsx)(H,{children:`within`}),`)`]},`c`)]}]}),(0,z.jsxs)(A,{children:[`Cypress is shown for reference only — Schatten does not depend on it. The role-based queries come from Testing Library's queries (built into Playwright and`,` `,(0,z.jsx)(H,{children:`@testing-library/cypress`}),`).`]})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <Page>
      <PageTitle>Testing</PageTitle>
      <Lead>
        How to make Schatten components addressable from a consumer E2E suite (Playwright / Cypress
        / React Testing Library). The plumbing is deliberately thin: components forward{' '}
        <Code>data-testid</Code> (and every other unknown DOM attribute) onto their root element —
        there is no bespoke <Code>testId</Code> prop to learn.
      </Lead>

      <Callout variant="info" title="Role first, testid second">
        Prefer <Code>{'getByRole(role, { name })'}</Code> with an accessible name. It is stable
        across refactors and doubles as an accessibility check. Reach for <Code>data-testid</Code>{' '}
        only when a role-based query is ambiguous, unstable, or impossible (anonymous wrappers,
        repeated rows).
      </Callout>

      <SectionTitle>What this page covers</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Root pass-through</strong> — testid lands on the
          rendered root via <Code>{'{...props}'}</Code>.
        </li>
        <li>
          <strong className="text-foreground">Compound components</strong> — each sub-part takes its
          own testid (Select).
        </li>
        <li>
          <strong className="text-foreground">asChild caveat</strong> — with an element child the
          testid merges onto the child (Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Portal content</strong> — testid goes on the Content,
          and queries scope from the page (Select / Tooltip).
        </li>
        <li>
          <strong className="text-foreground">Curated-props exceptions</strong> — Dialog and Toast
          do not forward arbitrary attributes; address their children or their role.
        </li>
        <li>
          <strong className="text-foreground">Naming &amp; no auto-testid</strong> — the value is
          yours to choose; Schatten never injects one.
        </li>
      </ul>

      <SectionTitle>Contributor contract</SectionTitle>
      <Note>
        The implementer-facing source of truth is{' '}
        <Code>.claude/rules/component-testid-guideline.md</Code>. This page is its live, runnable
        companion — when the rule and this page disagree, the rule wins.
      </Note>
    </Page>
}`,...W.parameters?.docs?.source},description:{story:`§0 — Overview. The framing for the whole page: role + accessible name is the
first-choice selector; \`data-testid\` is the fallback hook for elements that
role-based queries cannot reach.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '1. data-testid on the root',
  render: () => <Page>
      <PageTitle>1. data-testid on the root</PageTitle>
      <Lead>
        Pass <Code>data-testid</Code> like any other DOM attribute. There is no <Code>testId</Code>{' '}
        prop — the component spreads <Code>{'{...props}'}</Code> onto its rendered root, so the
        attribute appears on the real element. The same mechanism works for <Code>data-cy</Code>,{' '}
        <Code>data-test</Code>, or any custom hook.
      </Lead>

      <Demo label="A button with a testid">
        <Button data-testid="submit-btn">Save</Button>
      </Demo>

      <SectionTitle>Rendered DOM</SectionTitle>
      <Note>
        Inspect the button above — the attribute is on the native <Code>&lt;button&gt;</Code>,
        alongside the public <Code>st-*</Code> classes.
      </Note>
      <CodeBlock>{\`<button data-testid="submit-btn" class="st-btn st-btn--primary st-btn--md">
  Save
</button>\`}</CodeBlock>

      <SectionTitle>Selecting it</SectionTitle>
      <CodeBlock>{\`// Playwright
await page.getByTestId('submit-btn').click()

// …but prefer role + name when it is unambiguous:
await page.getByRole('button', { name: 'Save' }).click()\`}</CodeBlock>
    </Page>
}`,...G.parameters?.docs?.source},description:{story:"§1 — Root pass-through. Every component spreads `...props` onto its root, so\n`data-testid` (and `data-cy`, `data-test`, …) ride straight through.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '2. Compound components',
  render: () => <Page>
      <PageTitle>2. Compound components</PageTitle>
      <Lead>
        Compound components (Select, Tooltip, RadioGroup) are built from named parts, and each part
        forwards its own props. Put a <Code>data-testid</Code> on whichever parts your test needs —
        they are independent. Select is the canonical example.
      </Lead>

      <Demo label="Select with a testid on every part (open it)">
        <Select>
          <SelectTrigger data-testid="country-trigger" className="w-56">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent data-testid="country-content">
            <SelectItem value="jp" data-testid="country-item-jp">
              Japan
            </SelectItem>
            <SelectItem value="us" data-testid="country-item-us">
              United States
            </SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{\`<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>\`}</CodeBlock>

      <Note>
        Note: Schatten Dialog is <strong>not</strong> a compound component — it takes structured
        props (<Code>title</Code>, <Code>actionButton</Code>, …) rather than{' '}
        <Code>Dialog.Trigger</Code> / <Code>Dialog.Content</Code> sub-parts. See section 5 for how
        to address it.
      </Note>
    </Page>
}`,...K.parameters?.docs?.source},description:{story:`§2 — Compound components. Each named sub-component forwards its own props, so
every part can carry an independent testid. Select is the canonical example.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '3. asChild trigger caveat',
  render: () => <Page>
      <PageTitle>3. asChild trigger caveat</PageTitle>
      <Lead>
        <Code>TooltipTrigger</Code> switches to Radix <Code>asChild</Code> mode when its child is a
        non-string element (for example a <Code>Button</Code>). In that mode Radix merges props onto
        the child, so a <Code>data-testid</Code> on the trigger ends up on <em>your</em> element,
        not on a Schatten-rendered wrapper. Both cases below resolve with{' '}
        <Code>{"getByTestId('help')"}</Code> — the difference is only where the attribute lands.
      </Lead>

      <Demo label="Text child → Schatten renders the button → testid on it (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-text">Hover for help</TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <Demo label="Element child → asChild merges testid onto your Button (hover)">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger data-testid="help-element">
              <Button variant="secondary">Help</Button>
            </TooltipTrigger>
            <TooltipContent>Saved drafts stay for 30 days.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Demo>

      <CodeBlock>{\`// text child → testid on the Schatten-generated <button>
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>

// element child → testid merged onto YOUR <Button>
<TooltipTrigger data-testid="help">
  <Button>Help</Button>
</TooltipTrigger>\`}</CodeBlock>
    </Page>
}`,...q.parameters?.docs?.source},description:{story:`§3 — asChild caveat. A Trigger whose child is an element merges its props onto
that child (Radix Slot), so the testid lands on the child, not on a wrapper.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '4. Portal-rendered content',
  render: () => <Page>
      <PageTitle>4. Portal-rendered content</PageTitle>
      <Lead>
        <Code>SelectContent</Code>, <Code>TooltipContent</Code>, and similar popups render through a
        Portal into <Code>document.body</Code> — outside <Code>#storybook-root</Code> and outside
        the trigger&apos;s DOM subtree. A selector rooted at the trigger will never reach them by
        DOM traversal.
      </Lead>

      <SectionTitle>Two rules</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2 mb-4">
        <li>Put the testid on the Content element itself, not on the trigger.</li>
        <li>
          Scope the query from <Code>page</Code> (Playwright) / <Code>screen</Code> (RTL), not from
          a trigger-rooted locator.
        </li>
      </ul>

      <Demo label="Open the select — the listbox is portaled to body">
        <Select>
          <SelectTrigger data-testid="fruit-trigger" className="w-56">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent data-testid="fruit-content">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <CodeBlock>{\`// Playwright — open via the trigger, then scope into the portaled content
await page.getByTestId('fruit-trigger').click()
await page
  .getByTestId('fruit-content')
  .getByRole('option', { name: 'Banana' })
  .click()\`}</CodeBlock>
    </Page>
}`,...J.parameters?.docs?.source},description:{story:`§4 — Portal content. SelectContent / TooltipContent render into document.body,
outside the component subtree. Put the testid on the Content, scope from page.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '5. Curated-props components',
  render: () => <Page>
      <PageTitle>5. Curated-props components</PageTitle>
      <Lead>
        A few high-level components take a curated prop surface and do <strong>not</strong> spread
        unknown attributes onto their content. For these, address the children you pass in, or query
        by role + accessible name.
      </Lead>

      <SubsectionTitle>Dialog — put the testid on your children</SubsectionTitle>
      <Note>
        Dialog renders structured props (<Code>title</Code>, <Code>actionButton</Code>,{' '}
        <Code>cancelButton</Code>) and its <Code>children</Code> in the body — it does not forward a{' '}
        <Code>data-testid</Code> onto its Content. Put testids on the elements you author, and use{' '}
        <Code>{"getByRole('dialog', { name })"}</Code> for the frame (Radix sets{' '}
        <Code>role=&quot;dialog&quot;</Code> and links the title as its name).
      </Note>
      <Demo label="Open the dialog (rendered into a Portal)">
        <DialogTestidDemo />
      </Demo>
      <CodeBlock>{\`<Dialog title="Delete account" isOpen={open} onOpenChange={setOpen}
  actionButton={{ label: 'Delete', variant: 'destructive', onClick }}>
  <p data-testid="delete-message">Are you sure?</p>
</Dialog>

// Playwright
await page.getByRole('dialog', { name: 'Delete account' })   // the frame
await page.getByTestId('delete-message')                     // your children\`}</CodeBlock>

      <SubsectionTitle>Toast — imperative, so query by role</SubsectionTitle>
      <Note>
        Toasts are created by the imperative <Code>{'toast({ … })'}</Code> call, which takes no JSX
        — there is no element to hang a <Code>data-testid</Code> on. Every toast renders with{' '}
        <Code>role=&quot;status&quot;</Code>, so query by role + accessible name (the title).
      </Note>
      <Demo label="Fire a toast">
        <ToastTestidDemo />
      </Demo>
      <CodeBlock>{\`toast({ title: 'Saved successfully', variant: 'success' })

// Playwright
await page.getByRole('status', { name: 'Saved successfully' })\`}</CodeBlock>
    </Page>
}`,...Y.parameters?.docs?.source},description:{story:"§5 — Curated-props exceptions. Dialog and Toast expose a curated prop surface\n(no `...rest` pass-through). Address their children / their role instead.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '6. Form fields',
  render: () => <Page>
      <PageTitle>6. Form fields</PageTitle>
      <Lead>
        Compose a labelled field with the flat <Code>Field</Code> API and put the{' '}
        <Code>data-testid</Code> on the input you pass as children. Field wires the label,
        description, and error state around it; the input is still a plain DOM element that forwards{' '}
        the attribute.
      </Lead>

      <Demo label="Field + Input with a testid">
        <Field label="Email" error="Enter a valid email address." className="w-72">
          <Input type="email" data-testid="email-input" defaultValue="not-an-email" />
        </Field>
      </Demo>

      <CodeBlock>{\`<Field label="Email" error={emailError}>
  <Input type="email" data-testid="email-input" />
</Field>

// Playwright
await page.getByTestId('email-input').fill('foo@example.com')\`}</CodeBlock>

      <Callout variant="info" title="FormField (lv2) is coming in v1+">
        The one-component short form <Code>FormField</Code> (Field + label + description + error) is
        planned for v1+ as <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. It will
        forward testids onto its children the same way. Until then, compose with <Code>Field</Code>{' '}
        as above.
      </Callout>
    </Page>
}`,...X.parameters?.docs?.source},description:{story:`§6 — Form fields. The flat Field API wraps a labelled input; put the testid on
the input element you pass as children.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '7. Naming & no auto-testid',
  render: () => <Page>
      <PageTitle>7. Naming &amp; no auto-testid</PageTitle>
      <Lead>
        Choosing testid values is the consuming product&apos;s responsibility, not Schatten&apos;s.
        This page only describes the plumbing — where the attribute lands and how it survives a
        Portal boundary. The naming scheme is yours.
      </Lead>

      <SectionTitle>A recommendation, not a rule</SectionTitle>
      <Note>
        A feature-scoped, purpose-suffixed shape reads well and avoids collisions —{' '}
        <Code>{'{feature}-{purpose}'}</Code>, e.g. <Code>signup-email-input</Code> or{' '}
        <Code>dashboard-user-menu</Code>. <Code>camelCase</Code> and <Code>kebab-case</Code> both
        work; pick one and keep it consistent across your codebase. Reserve testids for elements
        that role + accessible name cannot already address.
      </Note>

      <SectionTitle>Schatten never injects a testid</SectionTitle>
      <Callout variant="warning" title="No library-supplied testids">
        Schatten does not emit <Code>data-testid</Code> from inside the library — no fixed testids
        on internal Slots or Portals, no values derived from <Code>displayName</Code>, no{' '}
        <Code>testing</Code>-flag toggles. A library-supplied testid would pollute your namespace
        and force you to dodge reserved names. The single source of truth is you.
      </Callout>
      <Note>
        Runtime <Code>data-*</Code> attributes that Radix emits for behaviour / styling (
        <Code>data-state</Code>, <Code>data-disabled</Code>, <Code>data-side</Code>) are a separate
        concern — they are not testids and are safe to rely on for state-scoped assertions.
      </Note>
    </Page>
}`,...Z.parameters?.docs?.source},description:{story:`§7 — Naming & no auto-testid. The value is the consumer's call; Schatten never
injects a testid of its own.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '8. Selector cheatsheet',
  render: () => <Page>
      <PageTitle>8. Selector cheatsheet</PageTitle>
      <Lead>
        The same intent expressed across the three common test runners. Reach for the role-based row
        first; fall back to the testid row when role + name cannot disambiguate.
      </Lead>

      <DocsTable headers={['Intent', 'Playwright', 'Cypress', 'React Testing Library']} rows={[{
      key: 'role',
      cells: ['By role + name (first choice)', <Code key="c">{"page.getByRole('button', { name })"}</Code>, <Code key="c">{"cy.findByRole('button', { name })"}</Code>, <Code key="c">{"screen.getByRole('button', { name })"}</Code>]
    }, {
      key: 'testid',
      cells: ['By testid (fallback)', <Code key="c">{"page.getByTestId('x')"}</Code>, <Code key="c">{'cy.get(\\'[data-testid="x"]\\')'}</Code>, <Code key="c">{"screen.getByTestId('x')"}</Code>]
    }, {
      key: 'portal',
      cells: ['Portal content', 'Scope from page', 'Document-wide by default', <span key="c">
                <Code>screen</Code> (not <Code>within</Code>)
              </span>]
    }]} />

      <Note>
        Cypress is shown for reference only — Schatten does not depend on it. The role-based queries
        come from Testing Library&apos;s queries (built into Playwright and{' '}
        <Code>@testing-library/cypress</Code>).
      </Note>
    </Page>
}`,...Q.parameters?.docs?.source},description:{story:`§8 — Selector cheatsheet. The same intent across Playwright, Cypress, and
React Testing Library, with role-first as the default.`,...Q.parameters?.docs?.description}}},$=[`Overview`,`RootPassThrough`,`CompoundComponents`,`AsChildCaveat`,`PortalContent`,`CuratedPropsExceptions`,`FormFields`,`NamingAndNoAutoTestid`,`FrameworkSelectors`]}))();export{q as AsChildCaveat,K as CompoundComponents,Y as CuratedPropsExceptions,X as FormFields,Q as FrameworkSelectors,Z as NamingAndNoAutoTestid,W as Overview,J as PortalContent,G as RootPassThrough,$ as __namedExportsOrder,B as default};