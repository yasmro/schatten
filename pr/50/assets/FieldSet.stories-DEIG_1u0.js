import{j as e}from"./iframe-DAEESNto.js";import{F as l}from"./Field-DHZn1crH.js";import{I as r}from"./Input-CFw8dq6u.js";import{S as O,a as U,b as J,c as B,d as m}from"./Select-oCnhY2iU.js";import{F as a}from"./FieldSet-D1LYpRIJ.js";import"./preload-helper-cpQwiaGc.js";import"./field-CeRQptW0.js";import"./index-DHk-Frat.js";import"./index-Cr4eO676.js";import"./chevron-up-LtOu5G86.js";import"./index-B2u8wji4.js";import"./index-De0ZElF5.js";import"./index-DzQPHCdo.js";import"./index-CK1raohQ.js";const re={title:"Components/lv1/FieldSet",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{legend:{description:"Legend text for the fieldset.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the legend.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display (group-level).",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},disabled:{description:"Disable all child fields. Uses native fieldset disabled behavior.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},d={name:"Playground",args:{legend:"Personal Information",description:"Please enter your personal details."},render:T=>e.jsx(a,{...T,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"First Name",children:e.jsx(r,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",children:e.jsx(r,{placeholder:"Doe"})})]})})},s={name:"Date Range",render:()=>e.jsx(a,{legend:"Event Period",description:"Select the start and end dates for your event.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",className:"w-40"})})]})})},t={name:"Address",render:()=>e.jsx(a,{legend:"Shipping Address",description:"Enter your delivery address.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(l,{label:"Street Address",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})}),e.jsx(l,{label:"Postal Code",required:!0,children:e.jsx(r,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(l,{label:"Country",children:e.jsxs(O,{defaultValue:"jp",children:[e.jsx(U,{children:e.jsx(J,{placeholder:"Select a country"})}),e.jsxs(B,{children:[e.jsx(m,{value:"jp",children:"Japan"}),e.jsx(m,{value:"us",children:"United States"}),e.jsx(m,{value:"uk",children:"United Kingdom"})]})]})})]})})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{legend:"Date Range",error:"End date must be after start date.",description:"Select the start and end dates.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})}),e.jsx(a,{legend:"Password Confirmation",error:"Passwords do not match.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Password",children:e.jsx(r,{type:"password",defaultValue:"password123"})}),e.jsx(l,{label:"Confirm Password",children:e.jsx(r,{type:"password",defaultValue:"password456"})})]})})]})},o={name:"Disabled",render:()=>e.jsx(a,{legend:"Account Settings",description:"These settings are currently locked.",disabled:!0,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Username",children:e.jsx(r,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",children:e.jsx(r,{type:"email",defaultValue:"john@example.com"})})]})})},n={name:"Nested Fields",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{legend:"Contact Information",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Email",required:!0,description:"We'll use this for account recovery.",children:e.jsx(r,{type:"email",placeholder:"you@example.com"})}),e.jsx(l,{label:"Phone",description:"Optional contact number.",children:e.jsx(r,{type:"tel",placeholder:"+81 90-1234-5678"})})]})}),e.jsx(a,{legend:"Billing Details",description:"Enter your payment information.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Cardholder Name",required:!0,children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(l,{label:"Card Number",required:!0,children:e.jsx(r,{placeholder:"1234 5678 9012 3456"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Expiry",required:!0,children:e.jsx(r,{placeholder:"MM/YY",className:"w-24"})}),e.jsx(l,{label:"CVV",required:!0,children:e.jsx(r,{placeholder:"123",className:"w-20"})})]})]})})]})},c={name:"Error Propagation",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"When FieldSet has isError, all child Inputs show error styles automatically."}),e.jsx(a,{legend:"Date Range",isError:!0,error:"End date must be after start date.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Individual Field can override FieldSet's isError."}),e.jsx(a,{legend:"Mixed States",isError:!0,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Has Error (inherited)",children:e.jsx(r,{placeholder:"Error style from FieldSet"})}),e.jsx(l,{label:"No Error (overridden)",isError:!1,children:e.jsx(r,{placeholder:"Explicitly set isError=false"})})]})})]})]})},p={name:"Nested FieldSets",render:()=>e.jsxs(a,{legend:"Checkout Form",description:"Complete your order.",children:[e.jsx(a,{legend:"Shipping Address",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})})]})}),e.jsx(a,{legend:"Billing Address",isError:!0,error:"Please complete billing address.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"456 Oak Ave"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Osaka"})})]})})]})};var u,x,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    legend: 'Personal Information',
    description: 'Please enter your personal details.'
  },
  render: args => <FieldSet {...args}>
      <div className="flex flex-col gap-4 w-80">
        <Field label="First Name">
          <Input placeholder="John" />
        </Field>
        <Field label="Last Name">
          <Input placeholder="Doe" />
        </Field>
      </div>
    </FieldSet>
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Date Range',
  render: () => <FieldSet legend="Event Period" description="Select the start and end dates for your event.">
      <div className="flex gap-4">
        <Field label="Start Date">
          <Input type="date" className="w-40" />
        </Field>
        <Field label="End Date">
          <Input type="date" className="w-40" />
        </Field>
      </div>
    </FieldSet>
}`,...(F=(f=s.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var j,S,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Address',
  render: () => <FieldSet legend="Shipping Address" description="Enter your delivery address.">
      <div className="flex flex-col gap-4 w-96">
        <Field label="Street Address" required>
          <Input placeholder="123 Main St" />
        </Field>
        <div className="flex gap-4">
          <Field label="City" required>
            <Input placeholder="Tokyo" />
          </Field>
          <Field label="Postal Code" required>
            <Input placeholder="100-0001" className="w-32" />
          </Field>
        </div>
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
      </div>
    </FieldSet>
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,v,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-8">
      <FieldSet legend="Date Range" error="End date must be after start date." description="Select the start and end dates.">
        <div className="flex gap-4">
          <Field label="Start Date">
            <Input type="date" defaultValue="2024-12-31" className="w-40" />
          </Field>
          <Field label="End Date">
            <Input type="date" defaultValue="2024-01-01" className="w-40" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet legend="Password Confirmation" error="Passwords do not match.">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Password">
            <Input type="password" defaultValue="password123" />
          </Field>
          <Field label="Confirm Password">
            <Input type="password" defaultValue="password456" />
          </Field>
        </div>
      </FieldSet>
    </div>
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var E,w,I;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <FieldSet legend="Account Settings" description="These settings are currently locked." disabled>
      <div className="flex flex-col gap-4 w-80">
        <Field label="Username">
          <Input defaultValue="johndoe" />
        </Field>
        <Field label="Email">
          <Input type="email" defaultValue="john@example.com" />
        </Field>
      </div>
    </FieldSet>
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var D,C,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Nested Fields',
  render: () => <div className="flex flex-col gap-8">
      <FieldSet legend="Contact Information">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Email" required description="We'll use this for account recovery.">
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Phone" description="Optional contact number.">
            <Input type="tel" placeholder="+81 90-1234-5678" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet legend="Billing Details" description="Enter your payment information.">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Cardholder Name" required>
            <Input placeholder="John Doe" />
          </Field>
          <Field label="Card Number" required>
            <Input placeholder="1234 5678 9012 3456" />
          </Field>
          <div className="flex gap-4">
            <Field label="Expiry" required>
              <Input placeholder="MM/YY" className="w-24" />
            </Field>
            <Field label="CVV" required>
              <Input placeholder="123" className="w-20" />
            </Field>
          </div>
        </div>
      </FieldSet>
    </div>
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,q,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Error Propagation',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-4">
          When FieldSet has isError, all child Inputs show error styles automatically.
        </p>
        <FieldSet legend="Date Range" isError error="End date must be after start date.">
          <div className="flex gap-4">
            <Field label="Start Date">
              <Input type="date" defaultValue="2024-12-31" className="w-40" />
            </Field>
            <Field label="End Date">
              <Input type="date" defaultValue="2024-01-01" className="w-40" />
            </Field>
          </div>
        </FieldSet>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-4">
          Individual Field can override FieldSet&apos;s isError.
        </p>
        <FieldSet legend="Mixed States" isError>
          <div className="flex flex-col gap-4 w-80">
            <Field label="Has Error (inherited)">
              <Input placeholder="Error style from FieldSet" />
            </Field>
            <Field label="No Error (overridden)" isError={false}>
              <Input placeholder="Explicitly set isError=false" />
            </Field>
          </div>
        </FieldSet>
      </div>
    </div>
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var k,R,M;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Nested FieldSets',
  render: () => <FieldSet legend="Checkout Form" description="Complete your order.">
      <FieldSet legend="Shipping Address">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Street" required>
            <Input placeholder="123 Main St" />
          </Field>
          <Field label="City" required>
            <Input placeholder="Tokyo" />
          </Field>
        </div>
      </FieldSet>

      <FieldSet legend="Billing Address" isError error="Please complete billing address.">
        <div className="flex flex-col gap-4 w-80">
          <Field label="Street" required>
            <Input placeholder="456 Oak Ave" />
          </Field>
          <Field label="City" required>
            <Input placeholder="Osaka" />
          </Field>
        </div>
      </FieldSet>
    </FieldSet>
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const ae=["Playground","DateRange","Address","ErrorState","Disabled","NestedFields","ErrorPropagation","NestedFieldSets"];export{t as Address,s as DateRange,o as Disabled,c as ErrorPropagation,i as ErrorState,p as NestedFieldSets,n as NestedFields,d as Playground,ae as __namedExportsOrder,re as default};
