import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./Input-BXykjnqo.js";import{n as i,t as a}from"./Field-uszMkmQ8.js";import{c as o,i as s,l as c,n as l,s as u,t as d}from"./Select-DLL-5IOD.js";import{n as f,t as p}from"./FieldSet-BvDYjxYS.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{i(),n(),c(),f(),m=t(),h={title:`Components/lv1/FieldSet`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{legend:{description:`Legend text for the fieldset. Omit for layout-only grouping.`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Description text displayed below the legend.`,control:`text`,table:{type:{summary:`ReactNode`}}},error:{description:`Error message to display (group-level).`,control:`text`,table:{type:{summary:`string`}}},isError:{description:`Explicitly set error state. If not provided, derived from error prop presence.`,control:`boolean`,table:{type:{summary:`boolean`}}},disabled:{description:`Disable all child fields. Uses native fieldset disabled behavior.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},direction:{description:`Flex direction for children layout.`,control:`select`,options:[`row`,`column`],table:{type:{summary:`"row" | "column"`},defaultValue:{summary:`"column"`}}},wrap:{description:`Enable flex wrap for children.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},g={name:`Playground`,args:{legend:`Personal Information`,description:`Please enter your personal details.`,direction:`column`},render:e=>(0,m.jsxs)(p,{...e,className:`w-80`,children:[(0,m.jsx)(a,{label:`First Name`,children:(0,m.jsx)(r,{placeholder:`John`})}),(0,m.jsx)(a,{label:`Last Name`,children:(0,m.jsx)(r,{placeholder:`Doe`})})]})},_={name:`Date Range`,render:()=>(0,m.jsxs)(p,{legend:`Event Period`,description:`Select the start and end dates for your event.`,direction:`row`,children:[(0,m.jsx)(a,{label:`Start Date`,children:(0,m.jsx)(r,{type:`date`,className:`w-40`})}),(0,m.jsx)(a,{label:`End Date`,children:(0,m.jsx)(r,{type:`date`,className:`w-40`})})]})},v={name:`Address`,render:()=>(0,m.jsxs)(p,{legend:`Shipping Address`,description:`Enter your delivery address.`,className:`w-96`,children:[(0,m.jsx)(a,{label:`Street Address`,required:!0,children:(0,m.jsx)(r,{placeholder:`123 Main St`})}),(0,m.jsxs)(p,{direction:`row`,children:[(0,m.jsx)(a,{label:`City`,required:!0,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`Tokyo`})}),(0,m.jsx)(a,{label:`Postal Code`,required:!0,flexShrink:0,children:(0,m.jsx)(r,{placeholder:`100-0001`,className:`w-32`})})]}),(0,m.jsx)(a,{label:`Country`,children:(0,m.jsxs)(d,{defaultValue:`jp`,children:[(0,m.jsx)(u,{children:(0,m.jsx)(o,{placeholder:`Select a country`})}),(0,m.jsxs)(l,{children:[(0,m.jsx)(s,{value:`jp`,children:`Japan`}),(0,m.jsx)(s,{value:`us`,children:`United States`}),(0,m.jsx)(s,{value:`uk`,children:`United Kingdom`})]})]})})]})},y={name:`Error`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(p,{legend:`Date Range`,error:`End date must be after start date.`,description:`Select the start and end dates.`,direction:`row`,children:[(0,m.jsx)(a,{label:`Start Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-12-31`,className:`w-40`})}),(0,m.jsx)(a,{label:`End Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-01-01`,className:`w-40`})})]}),(0,m.jsxs)(p,{legend:`Password Confirmation`,error:`Passwords do not match.`,className:`w-80`,children:[(0,m.jsx)(a,{label:`Password`,children:(0,m.jsx)(r,{type:`password`,defaultValue:`password123`})}),(0,m.jsx)(a,{label:`Confirm Password`,children:(0,m.jsx)(r,{type:`password`,defaultValue:`password456`})})]})]})},b={name:`Disabled`,render:()=>(0,m.jsxs)(p,{legend:`Account Settings`,description:`These settings are currently locked.`,disabled:!0,className:`w-80`,children:[(0,m.jsx)(a,{label:`Username`,children:(0,m.jsx)(r,{defaultValue:`johndoe`})}),(0,m.jsx)(a,{label:`Email`,children:(0,m.jsx)(r,{type:`email`,defaultValue:`john@example.com`})})]})},x={name:`Nested Fields`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(p,{legend:`Contact Information`,className:`w-80`,children:[(0,m.jsx)(a,{label:`Email`,required:!0,description:`We'll use this for account recovery.`,children:(0,m.jsx)(r,{type:`email`,placeholder:`you@example.com`})}),(0,m.jsx)(a,{label:`Phone`,description:`Optional contact number.`,children:(0,m.jsx)(r,{type:`tel`,placeholder:`+81 90-1234-5678`})})]}),(0,m.jsxs)(p,{legend:`Billing Details`,description:`Enter your payment information.`,className:`w-80`,children:[(0,m.jsx)(a,{label:`Cardholder Name`,required:!0,children:(0,m.jsx)(r,{placeholder:`John Doe`})}),(0,m.jsx)(a,{label:`Card Number`,required:!0,children:(0,m.jsx)(r,{placeholder:`1234 5678 9012 3456`})}),(0,m.jsxs)(p,{direction:`row`,children:[(0,m.jsx)(a,{label:`Expiry`,required:!0,children:(0,m.jsx)(r,{placeholder:`MM/YY`,className:`w-24`})}),(0,m.jsx)(a,{label:`CVV`,required:!0,children:(0,m.jsx)(r,{placeholder:`123`,className:`w-20`})})]})]})]})},S={name:`Error Propagation`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`When FieldSet has isError, all child Inputs show error styles automatically.`}),(0,m.jsxs)(p,{legend:`Date Range`,isError:!0,error:`End date must be after start date.`,direction:`row`,children:[(0,m.jsx)(a,{label:`Start Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-12-31`,className:`w-40`})}),(0,m.jsx)(a,{label:`End Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-01-01`,className:`w-40`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Individual Field can override FieldSet's isError.`}),(0,m.jsxs)(p,{legend:`Mixed States`,isError:!0,className:`w-80`,children:[(0,m.jsx)(a,{label:`Has Error (inherited)`,children:(0,m.jsx)(r,{placeholder:`Error style from FieldSet`})}),(0,m.jsx)(a,{label:`No Error (overridden)`,isError:!1,children:(0,m.jsx)(r,{placeholder:`Explicitly set isError=false`})})]})]})]})},C={name:`Nested FieldSets`,render:()=>(0,m.jsxs)(p,{legend:`Checkout Form`,description:`Complete your order.`,children:[(0,m.jsxs)(p,{legend:`Shipping Address`,className:`w-80`,children:[(0,m.jsx)(a,{label:`Street`,required:!0,children:(0,m.jsx)(r,{placeholder:`123 Main St`})}),(0,m.jsx)(a,{label:`City`,required:!0,children:(0,m.jsx)(r,{placeholder:`Tokyo`})})]}),(0,m.jsxs)(p,{legend:`Billing Address`,isError:!0,error:`Please complete billing address.`,className:`w-80`,children:[(0,m.jsx)(a,{label:`Street`,required:!0,children:(0,m.jsx)(r,{placeholder:`456 Oak Ave`})}),(0,m.jsx)(a,{label:`City`,required:!0,children:(0,m.jsx)(r,{placeholder:`Osaka`})})]})]})},w={name:`Layout Variants`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Use direction="row" with Field flex props for horizontal layouts.`}),(0,m.jsxs)(p,{legend:`Row Direction`,direction:`row`,children:[(0,m.jsx)(a,{label:`First`,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`Grows to fill`})}),(0,m.jsx)(a,{label:`Second`,flexShrink:0,children:(0,m.jsx)(r,{placeholder:`Fixed`,className:`w-24`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Use wrap for responsive layouts that wrap on smaller screens.`}),(0,m.jsxs)(p,{legend:`Row with Wrap`,direction:`row`,wrap:!0,className:`w-80`,children:[(0,m.jsx)(a,{label:`Field 1`,children:(0,m.jsx)(r,{placeholder:`Input`,className:`w-32`})}),(0,m.jsx)(a,{label:`Field 2`,children:(0,m.jsx)(r,{placeholder:`Input`,className:`w-32`})}),(0,m.jsx)(a,{label:`Field 3`,children:(0,m.jsx)(r,{placeholder:`Input`,className:`w-32`})})]})]})]})},T={name:`Layout Only (No Legend)`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Omit legend for layout-only grouping. Useful for arranging fields in a row without creating a semantic group.`}),(0,m.jsxs)(p,{direction:`row`,children:[(0,m.jsx)(a,{label:`First Name`,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`John`})}),(0,m.jsx)(a,{label:`Last Name`,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`Doe`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Nested layout-only FieldSet within a labeled FieldSet.`}),(0,m.jsxs)(p,{legend:`Contact Information`,className:`w-96`,children:[(0,m.jsx)(a,{label:`Email`,children:(0,m.jsx)(r,{placeholder:`you@example.com`})}),(0,m.jsxs)(p,{direction:`row`,children:[(0,m.jsx)(a,{label:`Country Code`,flexShrink:0,children:(0,m.jsx)(r,{placeholder:`+81`,className:`w-16`})}),(0,m.jsx)(a,{label:`Phone`,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`90-1234-5678`})})]})]})]})]})},E={name:`Description with Error`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Both Field and FieldSet show description AND error together. Description appears above the input, error appears below.`}),(0,m.jsxs)(p,{legend:`Date Range`,description:`Select the start and end dates for your event.`,error:`End date must be after start date.`,direction:`row`,children:[(0,m.jsx)(a,{label:`Start Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-12-31`,className:`w-40`})}),(0,m.jsx)(a,{label:`End Date`,children:(0,m.jsx)(r,{type:`date`,defaultValue:`2024-01-01`,className:`w-40`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:`Field with both description and error.`}),(0,m.jsx)(a,{label:`Email`,description:`We'll send a verification link.`,error:`Invalid email address.`,className:`w-60`,children:(0,m.jsx)(r,{defaultValue:`invalid`})})]})]})},D={name:`Flex Props Patterns`,render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:[(0,m.jsx)(`strong`,{children:`flexGrow:`}),` Field expands to fill available space.`]}),(0,m.jsxs)(p,{legend:`flexGrow Example`,direction:`row`,className:`w-96`,children:[(0,m.jsx)(a,{label:`Flexible`,flexGrow:1,children:(0,m.jsx)(r,{placeholder:`flexGrow={1}`})}),(0,m.jsx)(a,{label:`Fixed`,children:(0,m.jsx)(r,{placeholder:`No flex props`,className:`w-24`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:[(0,m.jsx)(`strong`,{children:`flexShrink:`}),` Prevent field from shrinking below its content.`]}),(0,m.jsxs)(p,{legend:`flexShrink Example`,direction:`row`,className:`w-64`,children:[(0,m.jsx)(a,{label:`Shrinks`,children:(0,m.jsx)(r,{placeholder:`Shrinks`})}),(0,m.jsx)(a,{label:`No Shrink`,flexShrink:0,children:(0,m.jsx)(r,{placeholder:`flexShrink={0}`,className:`w-32`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:[(0,m.jsx)(`strong`,{children:`flexBasis:`}),` Set initial size before flex grow/shrink.`]}),(0,m.jsxs)(p,{legend:`flexBasis Example`,direction:`row`,className:`w-96`,children:[(0,m.jsx)(a,{label:`60%`,flexBasis:`60%`,children:(0,m.jsx)(r,{placeholder:`flexBasis='60%'`})}),(0,m.jsx)(a,{label:`40%`,flexBasis:`40%`,children:(0,m.jsx)(r,{placeholder:`flexBasis='40%'`})})]})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`p`,{className:`text-sm text-foreground-muted mb-4`,children:[(0,m.jsx)(`strong`,{children:`Combined:`}),` Use multiple props for precise control.`]}),(0,m.jsxs)(p,{legend:`Combined Example`,direction:`row`,className:`w-96`,children:[(0,m.jsx)(a,{label:`Main`,flexGrow:1,flexShrink:1,children:(0,m.jsx)(r,{placeholder:`Flexible`})}),(0,m.jsx)(a,{label:`Side`,flexGrow:0,flexShrink:0,flexBasis:`100px`,children:(0,m.jsx)(r,{placeholder:`Fixed 100px`})})]})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    legend: 'Personal Information',
    description: 'Please enter your personal details.',
    direction: 'column'
  },
  render: args => <FieldSet {...args} className="w-80">
      <Field label="First Name">
        <Input placeholder="John" />
      </Field>
      <Field label="Last Name">
        <Input placeholder="Doe" />
      </Field>
    </FieldSet>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Date Range',
  render: () => <FieldSet legend="Event Period" description="Select the start and end dates for your event." direction="row">
      <Field label="Start Date">
        <Input type="date" className="w-40" />
      </Field>
      <Field label="End Date">
        <Input type="date" className="w-40" />
      </Field>
    </FieldSet>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Address',
  render: () => <FieldSet legend="Shipping Address" description="Enter your delivery address." className="w-96">
      <Field label="Street Address" required>
        <Input placeholder="123 Main St" />
      </Field>
      <FieldSet direction="row">
        <Field label="City" required flexGrow={1}>
          <Input placeholder="Tokyo" />
        </Field>
        <Field label="Postal Code" required flexShrink={0}>
          <Input placeholder="100-0001" className="w-32" />
        </Field>
      </FieldSet>
      <Field label="Country">
        <Select defaultValue="jp">
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </FieldSet>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-8">
      <FieldSet legend="Date Range" error="End date must be after start date." description="Select the start and end dates." direction="row">
        <Field label="Start Date">
          <Input type="date" defaultValue="2024-12-31" className="w-40" />
        </Field>
        <Field label="End Date">
          <Input type="date" defaultValue="2024-01-01" className="w-40" />
        </Field>
      </FieldSet>

      <FieldSet legend="Password Confirmation" error="Passwords do not match." className="w-80">
        <Field label="Password">
          <Input type="password" defaultValue="password123" />
        </Field>
        <Field label="Confirm Password">
          <Input type="password" defaultValue="password456" />
        </Field>
      </FieldSet>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <FieldSet legend="Account Settings" description="These settings are currently locked." disabled className="w-80">
      <Field label="Username">
        <Input defaultValue="johndoe" />
      </Field>
      <Field label="Email">
        <Input type="email" defaultValue="john@example.com" />
      </Field>
    </FieldSet>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Nested Fields',
  render: () => <div className="flex flex-col gap-8">
      <FieldSet legend="Contact Information" className="w-80">
        <Field label="Email" required description="We'll use this for account recovery.">
          <Input type="email" placeholder="you@example.com" />
        </Field>
        <Field label="Phone" description="Optional contact number.">
          <Input type="tel" placeholder="+81 90-1234-5678" />
        </Field>
      </FieldSet>

      <FieldSet legend="Billing Details" description="Enter your payment information." className="w-80">
        <Field label="Cardholder Name" required>
          <Input placeholder="John Doe" />
        </Field>
        <Field label="Card Number" required>
          <Input placeholder="1234 5678 9012 3456" />
        </Field>
        <FieldSet direction="row">
          <Field label="Expiry" required>
            <Input placeholder="MM/YY" className="w-24" />
          </Field>
          <Field label="CVV" required>
            <Input placeholder="123" className="w-20" />
          </Field>
        </FieldSet>
      </FieldSet>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Error Propagation',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          When FieldSet has isError, all child Inputs show error styles automatically.
        </p>
        <FieldSet legend="Date Range" isError error="End date must be after start date." direction="row">
          <Field label="Start Date">
            <Input type="date" defaultValue="2024-12-31" className="w-40" />
          </Field>
          <Field label="End Date">
            <Input type="date" defaultValue="2024-01-01" className="w-40" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Individual Field can override FieldSet&apos;s isError.
        </p>
        <FieldSet legend="Mixed States" isError className="w-80">
          <Field label="Has Error (inherited)">
            <Input placeholder="Error style from FieldSet" />
          </Field>
          <Field label="No Error (overridden)" isError={false}>
            <Input placeholder="Explicitly set isError=false" />
          </Field>
        </FieldSet>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Nested FieldSets',
  render: () => <FieldSet legend="Checkout Form" description="Complete your order.">
      <FieldSet legend="Shipping Address" className="w-80">
        <Field label="Street" required>
          <Input placeholder="123 Main St" />
        </Field>
        <Field label="City" required>
          <Input placeholder="Tokyo" />
        </Field>
      </FieldSet>

      <FieldSet legend="Billing Address" isError error="Please complete billing address." className="w-80">
        <Field label="Street" required>
          <Input placeholder="456 Oak Ave" />
        </Field>
        <Field label="City" required>
          <Input placeholder="Osaka" />
        </Field>
      </FieldSet>
    </FieldSet>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Layout Variants',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Use direction=&quot;row&quot; with Field flex props for horizontal layouts.
        </p>
        <FieldSet legend="Row Direction" direction="row">
          <Field label="First" flexGrow={1}>
            <Input placeholder="Grows to fill" />
          </Field>
          <Field label="Second" flexShrink={0}>
            <Input placeholder="Fixed" className="w-24" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Use wrap for responsive layouts that wrap on smaller screens.
        </p>
        <FieldSet legend="Row with Wrap" direction="row" wrap className="w-80">
          <Field label="Field 1">
            <Input placeholder="Input" className="w-32" />
          </Field>
          <Field label="Field 2">
            <Input placeholder="Input" className="w-32" />
          </Field>
          <Field label="Field 3">
            <Input placeholder="Input" className="w-32" />
          </Field>
        </FieldSet>
      </div>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Layout Only (No Legend)',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Omit legend for layout-only grouping. Useful for arranging fields in a row without
          creating a semantic group.
        </p>
        <FieldSet direction="row">
          <Field label="First Name" flexGrow={1}>
            <Input placeholder="John" />
          </Field>
          <Field label="Last Name" flexGrow={1}>
            <Input placeholder="Doe" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Nested layout-only FieldSet within a labeled FieldSet.
        </p>
        <FieldSet legend="Contact Information" className="w-96">
          <Field label="Email">
            <Input placeholder="you@example.com" />
          </Field>
          <FieldSet direction="row">
            <Field label="Country Code" flexShrink={0}>
              <Input placeholder="+81" className="w-16" />
            </Field>
            <Field label="Phone" flexGrow={1}>
              <Input placeholder="90-1234-5678" />
            </Field>
          </FieldSet>
        </FieldSet>
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Description with Error',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Both Field and FieldSet show description AND error together. Description appears above the
          input, error appears below.
        </p>
        <FieldSet legend="Date Range" description="Select the start and end dates for your event." error="End date must be after start date." direction="row">
          <Field label="Start Date">
            <Input type="date" defaultValue="2024-12-31" className="w-40" />
          </Field>
          <Field label="End Date">
            <Input type="date" defaultValue="2024-01-01" className="w-40" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">Field with both description and error.</p>
        <Field label="Email" description="We'll send a verification link." error="Invalid email address." className="w-60">
          <Input defaultValue="invalid" />
        </Field>
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Flex Props Patterns',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          <strong>flexGrow:</strong> Field expands to fill available space.
        </p>
        <FieldSet legend="flexGrow Example" direction="row" className="w-96">
          <Field label="Flexible" flexGrow={1}>
            <Input placeholder="flexGrow={1}" />
          </Field>
          <Field label="Fixed">
            <Input placeholder="No flex props" className="w-24" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          <strong>flexShrink:</strong> Prevent field from shrinking below its content.
        </p>
        <FieldSet legend="flexShrink Example" direction="row" className="w-64">
          <Field label="Shrinks">
            <Input placeholder="Shrinks" />
          </Field>
          <Field label="No Shrink" flexShrink={0}>
            <Input placeholder="flexShrink={0}" className="w-32" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          <strong>flexBasis:</strong> Set initial size before flex grow/shrink.
        </p>
        <FieldSet legend="flexBasis Example" direction="row" className="w-96">
          <Field label="60%" flexBasis="60%">
            <Input placeholder="flexBasis='60%'" />
          </Field>
          <Field label="40%" flexBasis="40%">
            <Input placeholder="flexBasis='40%'" />
          </Field>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          <strong>Combined:</strong> Use multiple props for precise control.
        </p>
        <FieldSet legend="Combined Example" direction="row" className="w-96">
          <Field label="Main" flexGrow={1} flexShrink={1}>
            <Input placeholder="Flexible" />
          </Field>
          <Field label="Side" flexGrow={0} flexShrink={0} flexBasis="100px">
            <Input placeholder="Fixed 100px" />
          </Field>
        </FieldSet>
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`DateRange`,`Address`,`ErrorState`,`Disabled`,`NestedFields`,`ErrorPropagation`,`NestedFieldSets`,`LayoutVariants`,`LayoutOnlyFieldSet`,`DescriptionWithError`,`FlexPropsPatterns`]}))();export{v as Address,_ as DateRange,E as DescriptionWithError,b as Disabled,S as ErrorPropagation,y as ErrorState,D as FlexPropsPatterns,T as LayoutOnlyFieldSet,w as LayoutVariants,C as NestedFieldSets,x as NestedFields,g as Playground,O as __namedExportsOrder,h as default};