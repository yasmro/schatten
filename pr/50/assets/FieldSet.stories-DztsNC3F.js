import{r as F,j as e}from"./iframe-BTeqkbXJ.js";import{a as X,F as l}from"./Field-DK5eHhpO.js";import{I as r}from"./Input-BxJ3yPG-.js";import{S as Z,a as ee,b as le,c as re,d as S}from"./Select-CTfoxAVf.js";import{a as ae}from"./index-DiZijfAW.js";import"./preload-helper-cpQwiaGc.js";import"./field-C2Andhx0.js";import"./index-DpiPrQD2.js";import"./chevron-up-BKu2PMzQ.js";import"./index-CZhHDlZI.js";import"./index-D0bK88p5.js";import"./index-DJtON-Hs.js";import"./index-iV_aaRoc.js";function a({legend:s,description:t,error:d,isError:K,disabled:y=!1,children:$,className:z}){const b=F.useId(),g=`${b}-description`,j=`${b}-error`,i=K??!!d,G=F.useMemo(()=>{const o=[];return t&&o.push(g),d&&o.push(j),o.length>0?o.join(" "):void 0},[t,d,g,j]),Q=F.useMemo(()=>({isError:i}),[i]);return e.jsx(X.Provider,{value:Q,children:e.jsxs("fieldset",{className:ae("flex flex-col",z),disabled:y,"aria-describedby":G,"aria-invalid":i||void 0,"data-disabled":y||void 0,"data-error":i||void 0,children:[e.jsx("legend",{className:"text-base font-medium text-foreground",children:s}),t&&e.jsx("p",{id:g,className:"text-sm text-foreground-muted",children:t}),e.jsx("div",{className:"mt-4 flex flex-col gap-4",children:$}),d&&e.jsx("p",{id:j,className:"mt-4 text-sm text-destructive",children:d})]})})}a.displayName="FieldSet";try{a.displayName="FieldSet",a.__docgenInfo={description:"",displayName:"FieldSet",props:{legend:{defaultValue:null,description:"Legend text for the fieldset",name:"legend",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description text displayed below the legend",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message to display (group-level)",name:"error",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"Explicitly set error state. If not provided, derived from error prop",name:"isError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disable all child fields",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"FieldSet content (Field elements)",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"Components/lv1/FieldSet",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{legend:{description:"Legend text for the fieldset.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the legend.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display (group-level).",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},disabled:{description:"Disable all child fields. Uses native fieldset disabled behavior.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},n={name:"Playground",args:{legend:"Personal Information",description:"Please enter your personal details."},render:s=>e.jsx(a,{...s,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"First Name",children:e.jsx(r,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",children:e.jsx(r,{placeholder:"Doe"})})]})})},c={name:"Date Range",render:()=>e.jsx(a,{legend:"Event Period",description:"Select the start and end dates for your event.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",className:"w-40"})})]})})},p={name:"Address",render:()=>e.jsx(a,{legend:"Shipping Address",description:"Enter your delivery address.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(l,{label:"Street Address",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})}),e.jsx(l,{label:"Postal Code",required:!0,children:e.jsx(r,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(l,{label:"Country",children:e.jsxs(Z,{defaultValue:"jp",children:[e.jsx(ee,{children:e.jsx(le,{placeholder:"Select a country"})}),e.jsxs(re,{children:[e.jsx(S,{value:"jp",children:"Japan"}),e.jsx(S,{value:"us",children:"United States"}),e.jsx(S,{value:"uk",children:"United Kingdom"})]})]})})]})})},m={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{legend:"Date Range",error:"End date must be after start date.",description:"Select the start and end dates.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})}),e.jsx(a,{legend:"Password Confirmation",error:"Passwords do not match.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Password",children:e.jsx(r,{type:"password",defaultValue:"password123"})}),e.jsx(l,{label:"Confirm Password",children:e.jsx(r,{type:"password",defaultValue:"password456"})})]})})]})},u={name:"Disabled",render:()=>e.jsx(a,{legend:"Account Settings",description:"These settings are currently locked.",disabled:!0,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Username",children:e.jsx(r,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",children:e.jsx(r,{type:"email",defaultValue:"john@example.com"})})]})})},x={name:"Nested Fields",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{legend:"Contact Information",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Email",required:!0,description:"We'll use this for account recovery.",children:e.jsx(r,{type:"email",placeholder:"you@example.com"})}),e.jsx(l,{label:"Phone",description:"Optional contact number.",children:e.jsx(r,{type:"tel",placeholder:"+81 90-1234-5678"})})]})}),e.jsx(a,{legend:"Billing Details",description:"Enter your payment information.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Cardholder Name",required:!0,children:e.jsx(r,{placeholder:"John Doe"})}),e.jsx(l,{label:"Card Number",required:!0,children:e.jsx(r,{placeholder:"1234 5678 9012 3456"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Expiry",required:!0,children:e.jsx(r,{placeholder:"MM/YY",className:"w-24"})}),e.jsx(l,{label:"CVV",required:!0,children:e.jsx(r,{placeholder:"123",className:"w-20"})})]})]})})]})},h={name:"Error Propagation",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"When FieldSet has isError, all child Inputs show error styles automatically."}),e.jsx(a,{legend:"Date Range",isError:!0,error:"End date must be after start date.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(r,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(r,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-4",children:"Individual Field can override FieldSet's isError."}),e.jsx(a,{legend:"Mixed States",isError:!0,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Has Error (inherited)",children:e.jsx(r,{placeholder:"Error style from FieldSet"})}),e.jsx(l,{label:"No Error (overridden)",isError:!1,children:e.jsx(r,{placeholder:"Explicitly set isError=false"})})]})})]})]})},f={name:"Nested FieldSets",render:()=>e.jsxs(a,{legend:"Checkout Form",description:"Complete your order.",children:[e.jsx(a,{legend:"Shipping Address",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"123 Main St"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Tokyo"})})]})}),e.jsx(a,{legend:"Billing Address",isError:!0,error:"Please complete billing address.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Street",required:!0,children:e.jsx(r,{placeholder:"456 Oak Ave"})}),e.jsx(l,{label:"City",required:!0,children:e.jsx(r,{placeholder:"Osaka"})})]})})]})};var v,N,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var w,I,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var V,C,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(C=p.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var P,A,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var R,M,T;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var _,O,U;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var J,B,L;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,Y,H;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const je=["Playground","DateRange","Address","ErrorState","Disabled","NestedFields","ErrorPropagation","NestedFieldSets"];export{p as Address,c as DateRange,u as Disabled,h as ErrorPropagation,m as ErrorState,f as NestedFieldSets,x as NestedFields,n as Playground,je as __namedExportsOrder,ge as default};
