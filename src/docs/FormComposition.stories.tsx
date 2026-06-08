import type { Meta, StoryObj } from '@storybook/react-vite'
import { type FormEvent, useState } from 'react'
import { Button } from '../components/lv1/Button/Button'
import { Callout } from '../components/lv1/Callout/Callout'
import { Checkbox } from '../components/lv1/Checkbox/Checkbox'
import { Field } from '../components/lv1/Field/Field'
import { FieldSet } from '../components/lv1/FieldSet/FieldSet'
import { Input } from '../components/lv1/Input/Input'
import { Radio, RadioGroup } from '../components/lv1/Radio/Radio'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/lv1/Select/Select'
import { Switch } from '../components/lv1/Switch/Switch'
import { Note, SectionTitle } from './docs-ui'

/*
 * Canonical recipes for composing forms out of Field / FieldSet plus the lv1
 * form controls. Third page under the `Patterns/` group (after `Form States`
 * and `Composition with asChild`).
 *
 * Prose is rendered INLINE in each story (the `Patterns/Form States` pattern),
 * NOT via `parameters.docs.description.*`. These hand-built docs pages are
 * consumed in Canvas with `layout: 'fullscreen'` and carry no `autodocs` tag,
 * so there is no Docs page for `description.*` to render on — inline JSX is the
 * only reliably-visible surface. See storybook-guideline.md "Hand-built docs
 * pages (Patterns / Tokens) — render prose inline".
 *
 * No VRT spec by design: this page composes components whose visual contract is
 * already pinned by their own VRT, and the closest sibling (`Form States`)
 * ships without VRT too. See vrt-spec-guideline.md.
 */
const meta: Meta = {
  title: 'Patterns/Form Composition',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

export const BasicField: Story = {
  name: '1. Field basics',
  render: () => (
    <div className="mx-auto mt-12 flex w-96 flex-col gap-4">
      <Note>
        A single Field wires the label, description, and required marker to the input. Note:{' '}
        <code className="text-xs">required</code> renders the visual{' '}
        <code className="text-xs">*</code> but does <strong>not</strong> set{' '}
        <code className="text-xs">aria-required</code> on the input — add{' '}
        <code className="text-xs">required</code> to the input element yourself (known gap,
        component-architecture §8).
      </Note>
      <Field label="Email" description="Used when you sign in" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
}

export const FieldWithError: Story = {
  name: '2. Error state',
  render: () => (
    <div className="mx-auto mt-12 flex w-96 flex-col gap-4">
      <Note>
        Passing <code className="text-xs">error</code> auto-derives{' '}
        <code className="text-xs">isError</code>, which wires{' '}
        <code className="text-xs">aria-invalid="true"</code> +{' '}
        <code className="text-xs">aria-describedby</code> on the input. Meaning comes from the error
        text, not colour alone.
      </Note>
      <Field label="Email" error="Enter a valid email address" required>
        <Input type="email" defaultValue="invalid-email" />
      </Field>
    </div>
  ),
}

export const FieldSetGrouping: Story = {
  name: '3. Grouping with FieldSet',
  render: () => (
    <div className="mx-auto mt-12 w-96">
      <Note>
        FieldSet renders a native <code className="text-xs">&lt;fieldset&gt;</code> +{' '}
        <code className="text-xs">&lt;legend&gt;</code>, and{' '}
        <code className="text-xs">disabled</code> propagates to every descendant control. A nested{' '}
        <code className="text-xs">direction="row"</code> FieldSet lays two fields side by side,
        tuned with <code className="text-xs">flexGrow</code> /{' '}
        <code className="text-xs">flexShrink</code>.
      </Note>
      <FieldSet legend="Shipping address" description="Where we deliver">
        <Field label="Street" required>
          <Input placeholder="1-2-3 Minato" />
        </Field>
        <FieldSet direction="row">
          <Field label="City" required flexGrow={1}>
            <Input placeholder="Minato" />
          </Field>
          <Field label="Postal code" required flexShrink={0}>
            <Input placeholder="100-0001" className="w-32" />
          </Field>
        </FieldSet>
        <Field label="Country">
          <Select defaultValue="jp">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jp">Japan</SelectItem>
              <SelectItem value="us">United States</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldSet>
    </div>
  ),
}

export const CheckboxRadioSwitch: Story = {
  name: '4. Checkbox / Radio / Switch',
  render: () => (
    <div className="mx-auto mt-12 w-96">
      <Note>
        Checkbox / Switch / Radio carry their own <code className="text-xs">&lt;label&gt;</code>, so
        they are <strong>not</strong> wrapped in Field — group them directly under a FieldSet. Radio
        is wrapped in a RadioGroup, and that group is wrapped by a single Field for its group label.
      </Note>
      <div className="flex flex-col gap-8">
        {/* Checkbox owns its label — place under FieldSet, not Field */}
        <FieldSet legend="Notifications" description="Choose any">
          <Checkbox label="Email" defaultChecked />
          <Checkbox label="SMS" />
          <Checkbox label="Push" defaultChecked />
        </FieldSet>

        {/* Radio is wrapped in RadioGroup, then Field gives the group a label */}
        <Field label="Plan" required>
          <RadioGroup defaultValue="pro">
            <Radio value="free" label="Free" />
            <Radio value="pro" label="Pro" />
            <Radio value="enterprise" label="Enterprise" />
          </RadioGroup>
        </Field>

        {/* Switch owns its label too */}
        <FieldSet legend="Display">
          <Switch label="Dark mode" />
          <Switch label="High contrast" />
        </FieldSet>
      </div>
    </div>
  ),
}

export const CompleteSignUpForm: Story = {
  name: '5. Complete sign-up form',
  render: () => {
    const [submitting, setSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const password = data.get('password')
      const next: Record<string, string> = {}
      if (!data.get('email')) next.email = 'Email is required'
      if (!password) next.password = 'Password is required'
      else if (password !== data.get('passwordConfirm'))
        next.passwordConfirm = 'Passwords do not match'
      setErrors(next)
      if (Object.keys(next).length === 0) {
        setSubmitting(true)
        // Simulate an async request so the loading / disabled state is visible.
        setTimeout(() => setSubmitting(false), 1200)
      }
    }

    return (
      <div className="mx-auto mt-12 w-96">
        <Note>
          Errors live in one state object;{' '}
          <code className="text-xs">disabled={'{submitting}'}</code> plus Button{' '}
          <code className="text-xs">isLoading</code> (which sets{' '}
          <code className="text-xs">aria-busy="true"</code>) keep the form consistent while the
          simulated request runs.
        </Note>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field label="Email" required error={errors.email}>
            <Input type="email" name="email" disabled={submitting} />
          </Field>
          <Field label="Password" required error={errors.password}>
            <Input type="password" name="password" disabled={submitting} />
          </Field>
          <Field label="Password (confirm)" required error={errors.passwordConfirm}>
            <Input type="password" name="passwordConfirm" disabled={submitting} />
          </Field>
          <Checkbox label="I agree to the terms" name="agree" disabled={submitting} />
          <Button type="submit" isLoading={submitting} className="self-start">
            Sign up
          </Button>
        </form>
      </div>
    )
  },
}

export const WithReactHookForm: Story = {
  name: '6. react-hook-form integration',
  render: () => (
    <div className="mx-auto max-w-2xl px-8 py-12">
      <SectionTitle>react-hook-form integration</SectionTitle>
      <Note>
        Recommended pattern for pairing with <code className="text-xs">react-hook-form</code>. The
        snippet below works as-is — the three Schatten-side guarantees that make it work:
      </Note>
      <ul className="flex list-disc flex-col gap-2 pl-6 text-sm text-foreground-muted">
        <li>
          <code className="text-xs">Input</code> is <code className="text-xs">forwardRef</code>-ed,
          so spreading <code className="text-xs">{'{...register(...)}'}</code> alone delivers the
          ref / onChange.
        </li>
        <li>
          <code className="text-xs">Select</code> / <code className="text-xs">RadioGroup</code> /{' '}
          <code className="text-xs">Switch</code> are controlled, so wrap them in{' '}
          <code className="text-xs">Controller</code>.
        </li>
        <li>
          Pass <code className="text-xs">errors.&lt;name&gt;?.message</code> straight into the Field{' '}
          <code className="text-xs">error</code> prop.
        </li>
      </ul>
      <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-surface-hover p-4 text-xs text-foreground">
        <code>{`import { useForm } from 'react-hook-form'

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Email" required error={errors.email?.message}>
        <Input {...register('email', { required: 'Required' })} />
      </Field>
      <Button type="submit">Sign up</Button>
    </form>
  )
}`}</code>
      </pre>
      <Note>
        TanStack Form / Conform work the same way — wrap controlled components in their{' '}
        <code className="text-xs">Controller</code> equivalent.
      </Note>
    </div>
  ),
}

export const FormFieldComingSoon: Story = {
  name: '7. FormField (lv2) — coming in v1+',
  render: () => (
    <div className="mx-auto mt-12 max-w-lg">
      <Callout variant="info" title="Coming soon">
        The lv2 <code>FormField</code> (a one-component short form of Field + label + description +
        error) is planned for the v1+ milestone as{' '}
        <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. Once it lands, it will be
        added to this page as a dedicated section.
      </Callout>
    </div>
  ),
}
