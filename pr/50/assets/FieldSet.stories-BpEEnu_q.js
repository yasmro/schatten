import{j as e}from"./iframe-BwzPxK4b.js";import{F as l}from"./Field-B6Xkb3UX.js";import{I as r}from"./Input-C4XjCLj0.js";import{S as J,a as W,b as B,c as Y,d as u}from"./Select-BhAsIEDa.js";import{F as a}from"./FieldSet-C-kw4nyX.js";import"./preload-helper-cpQwiaGc.js";import"./field-B38AJ90X.js";import"./index-DHk-Frat.js";import"./index-CPSXut32.js";import"./chevron-up-BwS7XaVV.js";import"./index-DZ9VCCAU.js";import"./index-CpJTgVKd.js";import"./index-BqizWTMz.js";import"./index-CAnR3ORo.js";const se={title:"Components/lv1/FieldSet",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{legend:{description:"Legend text for the fieldset.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the legend.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display (group-level).",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},disabled:{description:"Disable all child fields. Uses native fieldset disabled behavior.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},direction:{description:"Flex direction for children layout.",control:"select",options:["row","column"],table:{type:{summary:'"row" | "column"'},defaultValue:{summary:'"column"'}}},wrap:{description:"Enable flex wrap for children.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},d={name:"Playground",args:{legend:"Personal Information",description:"Please enter your personal details.",direction:"column"},render:G=>e.jsxs(a,{...G,className:"w-80",children:[e.jsx(l,{label:"First Name",children:e.jsx(r,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",children:e.jsx(r,{placeholder:"Doe"})})]})},t={name:"Date Range",render:()=>e.jsxs(a,{legend:"Event Period",description:"Select the start and end dates for your event.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",className:"w-40"})})]})},s={name:"Address",render:()=>e.jsxs(a,{legend:"Shipping Address",description:"Enter your delivery address.",className:"w-96",children:[e.jsx(l,{label:"Street Address",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsxs(a,{direction:"row",legend:"",children:[e.jsx(l,{label:"City",required:!0,flexGrow:1,children:e.jsx(r,{placeholder:"Tokyo"})}),e.jsx(l,{label:"Postal Code",required:!0,flexShrink:0,children:e.jsx(r,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(l,{label:"Country",children:e.jsxs(J,{defaultValue:"jp",children:[e.jsx(W,{children:e.jsx(B,{placeholder:"Select a country"})}),e.jsxs(Y,{children:[e.jsx(u,{value:"jp",children:"Japan"}),e.jsx(u,{value:"us",children:"United States"}),e.jsx(u,{value:"uk",children:"United Kingdom"})]})]})})]})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{legend:"Date Range",error:"End date must be after start date.",description:"Select the start and end dates.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]}),e.jsxs(a,{legend:"Password Confirmation",error:"Passwords do not match.",className:"w-80",children:[e.jsx(l,{label:"Password",children:e.jsx(r,{type:"password",defaultValue:"password123"})}),e.jsx(l,{label:"Confirm Password",children:e.jsx(r,{type:"password",defaultValue:"password456"})})]})]})},o={name:"Disabled",render:()=>e.jsxs(a,{legend:"Account Settings",description:"These settings are currently locked.",disabled:!0,className:"w-80",children:[e.jsx(l,{label:"Username",children:e.jsx(r,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",children:e.jsx(r,{type:"email",defaultValue:"john@example.com"})})]})},n={name:"Nested Fields",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{legend:"Contact Information",className:"w-80",children:[e.jsx(l,{label:"Email",required:!0,description:"We'll use this for account recovery.",children:e.jsx(r,{type:"email",placeholder:"you@example.com"})}),e.jsx(l,{label:"Phone",description:"Optional contact number.",children:e.jsx(r,{type:"tel",placeholder:"+81 90-1234-5678"})})]}),e.jsxs(a,{legend:"Billing Details",description:"Enter your payment information.",className:"w-80",children:[e.jsx(l,{label:"Cardholder Name",required:!0,children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(l,{label:"Card Number",required:!0,children:e.jsx(r,{placeholder:"1234 5678 9012 3456"})}),e.jsxs(a,{direction:"row",legend:"",children:[e.jsx(l,{label:"Expiry",required:!0,children:e.jsx(r,{placeholder:"MM/YY",className:"w-24"})}),e.jsx(l,{label:"CVV",required:!0,children:e.jsx(r,{placeholder:"123",className:"w-20"})})]})]})]})},c={name:"Error Propagation",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"When FieldSet has isError, all child Inputs show error styles automatically."}),e.jsxs(a,{legend:"Date Range",isError:!0,error:"End date must be after start date.",direction:"row",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Individual Field can override FieldSet's isError."}),e.jsxs(a,{legend:"Mixed States",isError:!0,className:"w-80",children:[e.jsx(l,{label:"Has Error (inherited)",children:e.jsx(r,{placeholder:"Error style from FieldSet"})}),e.jsx(l,{label:"No Error (overridden)",isError:!1,children:e.jsx(r,{placeholder:"Explicitly set isError=false"})})]})]})]})},p={name:"Nested FieldSets",render:()=>e.jsxs(a,{legend:"Checkout Form",description:"Complete your order.",children:[e.jsxs(a,{legend:"Shipping Address",className:"w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})})]}),e.jsxs(a,{legend:"Billing Address",isError:!0,error:"Please complete billing address.",className:"w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"456 Oak Ave"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Osaka"})})]})]})},m={name:"Layout Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs(a,{legend:"Row Direction",direction:"row",children:[e.jsx(l,{label:"First",flexGrow:1,children:e.jsx(r,{placeholder:"Grows to fill"})}),e.jsx(l,{label:"Second",flexShrink:0,children:e.jsx(r,{placeholder:"Fixed",className:"w-24"})})]}),e.jsxs(a,{legend:"Row with Wrap",direction:"row",wrap:!0,className:"w-80",children:[e.jsx(l,{label:"Field 1",children:e.jsx(r,{placeholder:"Input",className:"w-32"})}),e.jsx(l,{label:"Field 2",children:e.jsx(r,{placeholder:"Input",className:"w-32"})}),e.jsx(l,{label:"Field 3",children:e.jsx(r,{placeholder:"Input",className:"w-32"})})]})]})};var h,x,F;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var S,j,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Date Range',
  render: () => <FieldSet legend="Event Period" description="Select the start and end dates for your event." direction="row">
      <Field label="Start Date">
        <Input type="date" className="w-40" />
      </Field>
      <Field label="End Date">
        <Input type="date" className="w-40" />
      </Field>
    </FieldSet>
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var g,w,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Address',
  render: () => <FieldSet legend="Shipping Address" description="Enter your delivery address." className="w-96">
      <Field label="Street Address" required>
        <Input placeholder="123 Main St" />
      </Field>
      <FieldSet direction="row" legend="">
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var f,N,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(N=i.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var I,v,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <FieldSet legend="Account Settings" description="These settings are currently locked." disabled className="w-80">
      <Field label="Username">
        <Input defaultValue="johndoe" />
      </Field>
      <Field label="Email">
        <Input type="email" defaultValue="john@example.com" />
      </Field>
    </FieldSet>
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var V,C,P;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        <FieldSet direction="row" legend="">
          <Field label="Expiry" required>
            <Input placeholder="MM/YY" className="w-24" />
          </Field>
          <Field label="CVV" required>
            <Input placeholder="123" className="w-20" />
          </Field>
        </FieldSet>
      </FieldSet>
    </div>
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var q,k,A;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var R,M,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(M=p.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var L,O,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Layout Variants',
  render: () => <div className="flex flex-col gap-8">
      <FieldSet legend="Row Direction" direction="row">
        <Field label="First" flexGrow={1}>
          <Input placeholder="Grows to fill" />
        </Field>
        <Field label="Second" flexShrink={0}>
          <Input placeholder="Fixed" className="w-24" />
        </Field>
      </FieldSet>

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
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ie=["Playground","DateRange","Address","ErrorState","Disabled","NestedFields","ErrorPropagation","NestedFieldSets","LayoutVariants"];export{s as Address,t as DateRange,o as Disabled,c as ErrorPropagation,i as ErrorState,m as LayoutVariants,p as NestedFieldSets,n as NestedFields,d as Playground,ie as __namedExportsOrder,se as default};
