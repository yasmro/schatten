import{r as g,j as e}from"./iframe-CUpvz3mB.js";import{a as O,F as l}from"./Field-DaqLbdkW.js";import{I as a}from"./Input-8TlvqCE_.js";import{S as K,a as W,b as $,c as z,d as j}from"./Select-D9G102ab.js";import{a as G}from"./index-DiZijfAW.js";import"./preload-helper-cpQwiaGc.js";import"./field-BIHHOmTp.js";import"./index-DWbkCFLf.js";import"./chevron-up-BMIX13lq.js";import"./index-CYTYmysK.js";import"./index-BAl_VtmL.js";import"./index-B-vF4DdN.js";import"./index-B1kFKN8Q.js";function r({legend:s,description:t,error:d,isError:k,disabled:y=!1,children:J,className:L}){const b=g.useId(),x=`${b}-description`,f=`${b}-error`,h=k??!!d,Y=g.useMemo(()=>{const i=[];return t&&i.push(x),d&&i.push(f),i.length>0?i.join(" "):void 0},[t,d,x,f]),B=g.useMemo(()=>({isError:h}),[h]);return e.jsx(O.Provider,{value:B,children:e.jsxs("fieldset",{className:G("flex flex-col gap-4",L),disabled:y,"aria-describedby":Y,"data-disabled":y||void 0,"data-error":h||void 0,children:[e.jsxs("div",{className:"flex flex-col gap-0",children:[e.jsx("legend",{className:"text-base font-medium text-foreground",children:s}),t&&e.jsx("p",{id:x,className:"text-sm text-foreground-muted",children:t})]}),J,d&&e.jsx("p",{id:f,className:"text-sm text-destructive",children:d})]})})}r.displayName="FieldSet";try{r.displayName="FieldSet",r.__docgenInfo={description:"",displayName:"FieldSet",props:{legend:{defaultValue:null,description:"Legend text for the fieldset",name:"legend",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description text displayed below the legend",name:"description",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Error message to display (group-level)",name:"error",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"Explicitly set error state. If not provided, derived from error prop",name:"isError",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disable all child fields",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"FieldSet content (Field elements)",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Components/lv1/FieldSet",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{legend:{description:"Legend text for the fieldset.",control:"text",table:{type:{summary:"ReactNode"}}},description:{description:"Description text displayed below the legend.",control:"text",table:{type:{summary:"ReactNode"}}},error:{description:"Error message to display (group-level).",control:"text",table:{type:{summary:"string"}}},isError:{description:"Explicitly set error state. If not provided, derived from error prop presence.",control:"boolean",table:{type:{summary:"boolean"}}},disabled:{description:"Disable all child fields. Uses native fieldset disabled behavior.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},o={name:"Playground",args:{legend:"Personal Information",description:"Please enter your personal details."},render:s=>e.jsx(r,{...s,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"First Name",children:e.jsx(a,{placeholder:"John"})}),e.jsx(l,{label:"Last Name",children:e.jsx(a,{placeholder:"Doe"})})]})})},n={name:"Date Range",render:()=>e.jsx(r,{legend:"Event Period",description:"Select the start and end dates for your event.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(a,{type:"date",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(a,{type:"date",className:"w-40"})})]})})},c={name:"Address",render:()=>e.jsx(r,{legend:"Shipping Address",description:"Enter your delivery address.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(l,{label:"Street Address",required:!0,children:e.jsx(a,{placeholder:"123 Main St"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"City",required:!0,children:e.jsx(a,{placeholder:"Tokyo"})}),e.jsx(l,{label:"Postal Code",required:!0,children:e.jsx(a,{placeholder:"100-0001",className:"w-32"})})]}),e.jsx(l,{label:"Country",children:e.jsxs(K,{defaultValue:"jp",children:[e.jsx(W,{children:e.jsx($,{placeholder:"Select a country"})}),e.jsxs(z,{children:[e.jsx(j,{value:"jp",children:"Japan"}),e.jsx(j,{value:"us",children:"United States"}),e.jsx(j,{value:"uk",children:"United Kingdom"})]})]})})]})})},p={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(r,{legend:"Date Range",error:"End date must be after start date.",description:"Select the start and end dates.",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Start Date",children:e.jsx(a,{type:"date",defaultValue:"2024-12-31",className:"w-40"})}),e.jsx(l,{label:"End Date",children:e.jsx(a,{type:"date",defaultValue:"2024-01-01",className:"w-40"})})]})}),e.jsx(r,{legend:"Password Confirmation",error:"Passwords do not match.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Password",children:e.jsx(a,{type:"password",defaultValue:"password123"})}),e.jsx(l,{label:"Confirm Password",children:e.jsx(a,{type:"password",defaultValue:"password456"})})]})})]})},m={name:"Disabled",render:()=>e.jsx(r,{legend:"Account Settings",description:"These settings are currently locked.",disabled:!0,children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Username",children:e.jsx(a,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",children:e.jsx(a,{type:"email",defaultValue:"john@example.com"})})]})})},u={name:"Nested Fields",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(r,{legend:"Contact Information",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Email",required:!0,description:"We'll use this for account recovery.",children:e.jsx(a,{type:"email",placeholder:"you@example.com"})}),e.jsx(l,{label:"Phone",description:"Optional contact number.",children:e.jsx(a,{type:"tel",placeholder:"+81 90-1234-5678"})})]})}),e.jsx(r,{legend:"Billing Details",description:"Enter your payment information.",children:e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(l,{label:"Cardholder Name",required:!0,children:e.jsx(a,{placeholder:"John Doe"})}),e.jsx(l,{label:"Card Number",required:!0,children:e.jsx(a,{placeholder:"1234 5678 9012 3456"})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(l,{label:"Expiry",required:!0,children:e.jsx(a,{placeholder:"MM/YY",className:"w-24"})}),e.jsx(l,{label:"CVV",required:!0,children:e.jsx(a,{placeholder:"123",className:"w-20"})})]})]})})]})};var F,S,v;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,w,I;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var E,V,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var C,q,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(q=p.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var R,A,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var M,T,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(T=u.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const ce=["Playground","DateRange","Address","ErrorState","Disabled","NestedFields"];export{c as Address,n as DateRange,m as Disabled,p as ErrorState,u as NestedFields,o as Playground,ce as __namedExportsOrder,ne as default};
