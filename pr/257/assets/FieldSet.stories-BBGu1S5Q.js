import{j as e}from"./iframe-Bdno6tln.js";import{F as l}from"./Field-BQEe4GZL.js";import{I as r}from"./Input-5dVFj4SZ.js";import{S as ee,a as le,b as re,c as ae,d as F}from"./Select-CT0fFTK9.js";import{F as a}from"./FieldSet-BFFhb5OO.js";import"./preload-helper-DT2fBxpe.js";import"./field-DMgco0xU.js";import"./utils-DCADjnpI.js";import"./Tooltip-CIApS10N.js";import"./index-DBQkNLe8.js";import"./index-BpcDaH6W.js";import"./index-D8ryWztV.js";import"./index-DpfusUWr.js";import"./index-Cf4J98u7.js";import"./index-DPCrWjSQ.js";import"./index-BeoCXbGp.js";import"./index-rmokC-YX.js";import"./index-A0YtHxNT.js";import"./index-Dr2TOkfp.js";import"./info-CRoEK7JL.js";import"./createLucideIcon-BWrb6lZF.js";import"./index-CkIaN0ex.js";import"./index-C0Jbf6rp.js";import"./index-CYSI-6i5.js";import"./Combination-BobUdtbz.js";import"./index-CjIF3kDE.js";import"./check-AHLx4VTz.js";const Pe={title:"Components/lv1/FieldSet",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{legend:{description:"Legend text for the fieldset. Omit for layout-only grouping.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the legend.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display (group-level).",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},disabled:{description:"Disable all child fields. Uses native fieldset disabled behavior.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},direction:{description:"Flex direction for children layout.",control:"select",options:["row","column"],table:{type:{summary:'"row" | "column"'},defaultValue:{summary:'"column"'}}},wrap:{description:"Enable flex wrap for children.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{legend:"Personal Information",description:"Please enter your personal details.",direction:"column"},render:$=>e.jsxs(a,{...$,className:"w-80",children:[e.jsx(l,{label:"First Name",children:e.jsx(r,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",children:e.jsx(r,{placeholder:"Doe"})})]})},t={name:"Date Range",render:()=>e.jsxs(a,{legend:"Event Period",description:"Select the start and end dates for your event.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",className:"w-40"})})]})},d={name:"Address",render:()=>e.jsxs(a,{legend:"Shipping Address",description:"Enter your delivery address.",className:"w-96",children:[e.jsx(l,{label:"Street Address",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsxs(a,{direction:"row",children:[e.jsx(l,{label:"City",required:!0,flexGrow:1,children:e.jsx(r,{placeholder:"Tokyo"})}),e.jsx(l,{label:"Postal Code",required:!0,flexShrink:0,children:e.jsx(r,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(l,{label:"Country",children:e.jsxs(ee,{defaultValue:"jp",children:[e.jsx(le,{children:e.jsx(re,{placeholder:"Select a country"})}),e.jsxs(ae,{children:[e.jsx(F,{value:"jp",children:"Japan"}),e.jsx(F,{value:"us",children:"United States"}),e.jsx(F,{value:"uk",children:"United Kingdom"})]})]})})]})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{legend:"Date Range",error:"End date must be after start date.",description:"Select the start and end dates.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]}),e.jsxs(a,{legend:"Password Confirmation",error:"Passwords do not match.",className:"w-80",children:[e.jsx(l,{label:"Password",children:e.jsx(r,{type:"password",defaultValue:"password123"})}),e.jsx(l,{label:"Confirm Password",children:e.jsx(r,{type:"password",defaultValue:"password456"})})]})]})},o={name:"Disabled",render:()=>e.jsxs(a,{legend:"Account Settings",description:"These settings are currently locked.",disabled:!0,className:"w-80",children:[e.jsx(l,{label:"Username",children:e.jsx(r,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",children:e.jsx(r,{type:"email",defaultValue:"john@example.com"})})]})},n={name:"Nested Fields",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{legend:"Contact Information",className:"w-80",children:[e.jsx(l,{label:"Email",required:!0,description:"We'll use this for account recovery.",children:e.jsx(r,{type:"email",placeholder:"you@example.com"})}),e.jsx(l,{label:"Phone",description:"Optional contact number.",children:e.jsx(r,{type:"tel",placeholder:"+81 90-1234-5678"})})]}),e.jsxs(a,{legend:"Billing Details",description:"Enter your payment information.",className:"w-80",children:[e.jsx(l,{label:"Cardholder Name",required:!0,children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(l,{label:"Card Number",required:!0,children:e.jsx(r,{placeholder:"1234 5678 9012 3456"})}),e.jsxs(a,{direction:"row",children:[e.jsx(l,{label:"Expiry",required:!0,children:e.jsx(r,{placeholder:"MM/YY",className:"w-24"})}),e.jsx(l,{label:"CVV",required:!0,children:e.jsx(r,{placeholder:"123",className:"w-20"})})]})]})]})},c={name:"Error Propagation",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"When FieldSet has isError, all child Inputs show error styles automatically."}),e.jsxs(a,{legend:"Date Range",isError:!0,error:"End date must be after start date.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Individual Field can override FieldSet's isError."}),e.jsxs(a,{legend:"Mixed States",isError:!0,className:"w-80",children:[e.jsx(l,{label:"Has Error (inherited)",children:e.jsx(r,{placeholder:"Error style from FieldSet"})}),e.jsx(l,{label:"No Error (overridden)",isError:!1,children:e.jsx(r,{placeholder:"Explicitly set isError=false"})})]})]})]})},p={name:"Nested FieldSets",render:()=>e.jsxs(a,{legend:"Checkout Form",description:"Complete your order.",children:[e.jsxs(a,{legend:"Shipping Address",className:"w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})})]}),e.jsxs(a,{legend:"Billing Address",isError:!0,error:"Please complete billing address.",className:"w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"456 Oak Ave"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Osaka"})})]})]})},m={name:"Layout Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:'Use direction="row" with Field flex props for horizontal layouts.'}),e.jsxs(a,{legend:"Row Direction",direction:"row",children:[e.jsx(l,{label:"First",flexGrow:1,children:e.jsx(r,{placeholder:"Grows to fill"})}),e.jsx(l,{label:"Second",flexShrink:0,children:e.jsx(r,{placeholder:"Fixed",className:"w-24"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Use wrap for responsive layouts that wrap on smaller screens."}),e.jsxs(a,{legend:"Row with Wrap",direction:"row",wrap:!0,className:"w-80",children:[e.jsx(l,{label:"Field 1",children:e.jsx(r,{placeholder:"Input",className:"w-32"})}),e.jsx(l,{label:"Field 2",children:e.jsx(r,{placeholder:"Input",className:"w-32"})}),e.jsx(l,{label:"Field 3",children:e.jsx(r,{placeholder:"Input",className:"w-32"})})]})]})]})},x={name:"Layout Only (No Legend)",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Omit legend for layout-only grouping. Useful for arranging fields in a row without creating a semantic group."}),e.jsxs(a,{direction:"row",children:[e.jsx(l,{label:"First Name",flexGrow:1,children:e.jsx(r,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",flexGrow:1,children:e.jsx(r,{placeholder:"Doe"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Nested layout-only FieldSet within a labeled FieldSet."}),e.jsxs(a,{legend:"Contact Information",className:"w-96",children:[e.jsx(l,{label:"Email",children:e.jsx(r,{placeholder:"you@example.com"})}),e.jsxs(a,{direction:"row",children:[e.jsx(l,{label:"Country Code",flexShrink:0,children:e.jsx(r,{placeholder:"+81",className:"w-16"})}),e.jsx(l,{label:"Phone",flexGrow:1,children:e.jsx(r,{placeholder:"90-1234-5678"})})]})]})]})]})},u={name:"Description with Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Both Field and FieldSet show description AND error together. Description appears above the input, error appears below."}),e.jsxs(a,{legend:"Date Range",description:"Select the start and end dates for your event.",error:"End date must be after start date.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Field with both description and error."}),e.jsx(l,{label:"Email",description:"We'll send a verification link.",error:"Invalid email address.",className:"w-60",children:e.jsx(r,{defaultValue:"invalid"})})]})]})},h={name:"Flex Props Patterns",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:[e.jsx("strong",{children:"flexGrow:"})," Field expands to fill available space."]}),e.jsxs(a,{legend:"flexGrow Example",direction:"row",className:"w-96",children:[e.jsx(l,{label:"Flexible",flexGrow:1,children:e.jsx(r,{placeholder:"flexGrow={1}"})}),e.jsx(l,{label:"Fixed",children:e.jsx(r,{placeholder:"No flex props",className:"w-24"})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:[e.jsx("strong",{children:"flexShrink:"})," Prevent field from shrinking below its content."]}),e.jsxs(a,{legend:"flexShrink Example",direction:"row",className:"w-64",children:[e.jsx(l,{label:"Shrinks",children:e.jsx(r,{placeholder:"Shrinks"})}),e.jsx(l,{label:"No Shrink",flexShrink:0,children:e.jsx(r,{placeholder:"flexShrink={0}",className:"w-32"})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:[e.jsx("strong",{children:"flexBasis:"})," Set initial size before flex grow/shrink."]}),e.jsxs(a,{legend:"flexBasis Example",direction:"row",className:"w-96",children:[e.jsx(l,{label:"60%",flexBasis:"60%",children:e.jsx(r,{placeholder:"flexBasis='60%'"})}),e.jsx(l,{label:"40%",flexBasis:"40%",children:e.jsx(r,{placeholder:"flexBasis='40%'"})})]})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-foreground-muted mb-4",children:[e.jsx("strong",{children:"Combined:"})," Use multiple props for precise control."]}),e.jsxs(a,{legend:"Combined Example",direction:"row",className:"w-96",children:[e.jsx(l,{label:"Main",flexGrow:1,flexShrink:1,children:e.jsx(r,{placeholder:"Flexible"})}),e.jsx(l,{label:"Side",flexGrow:0,flexShrink:0,flexBasis:"100px",children:e.jsx(r,{placeholder:"Fixed 100px"})})]})]})]})};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,j,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Date Range',
  render: () => <FieldSet legend="Event Period" description="Select the start and end dates for your event." direction="row">
      <Field label="Start Date">
        <Input type="date" className="w-40" />
      </Field>
      <Field label="End Date">
        <Input type="date" className="w-40" />
      </Field>
    </FieldSet>
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,y,v;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var E,I,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,C,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <FieldSet legend="Account Settings" description="These settings are currently locked." disabled className="w-80">
      <Field label="Username">
        <Input defaultValue="johndoe" />
      </Field>
      <Field label="Email">
        <Input type="email" defaultValue="john@example.com" />
      </Field>
    </FieldSet>
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,q,G;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(q=n.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var B,A,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var L,U,O;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(U=p.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var M,T,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(T=m.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var J,z,Y;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var H,K,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Ve=["Playground","DateRange","Address","ErrorState","Disabled","NestedFields","ErrorPropagation","NestedFieldSets","LayoutVariants","LayoutOnlyFieldSet","DescriptionWithError","FlexPropsPatterns"];export{d as Address,t as DateRange,u as DescriptionWithError,o as Disabled,c as ErrorPropagation,i as ErrorState,h as FlexPropsPatterns,x as LayoutOnlyFieldSet,m as LayoutVariants,p as NestedFieldSets,n as NestedFields,s as Playground,Ve as __namedExportsOrder,Pe as default};
