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

/**
 * Canonical recipes for composing forms out of Field / FieldSet plus the lv1
 * form controls. Third page under the `Patterns/` group (after `Form States`
 * and `Composition with asChild`); follows the #141 shape — multiple named
 * exports in one CSF file, narrative in `meta.parameters.docs.description`.
 *
 * No VRT spec by design: this page is a composition of components whose visual
 * contract is already pinned by their own VRT, and the closest sibling
 * (`Patterns/Form States`) ships without VRT too. See vrt-spec-guideline.md
 * "docs / token stories — VRT only when there's a genuine visual contract".
 */
const meta: Meta = {
  title: 'Patterns/Form Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'Recipes for composing forms with Field and FieldSet.',
          'Every section is written so the code can be copy-pasted as-is.',
          '',
          '- **Field** — flat API wrapping a single input with label / description / error',
          '- **FieldSet** — groups multiple Fields with a group-level legend / error',
          '- **Checkbox / Radio / Switch** — carry their own label, so they are not wrapped in Field',
          '',
          'The lv2 `FormField` short form is planned for v1+ (#123).',
        ].join('\n'),
      },
    },
  },
}

export default meta
type Story = StoryObj

export const BasicField: Story = {
  name: '1. Field basics',
  parameters: {
    docs: {
      description: {
        story:
          "The `<label htmlFor>` is wired to the input through Field's `useId()`, so `getByRole('textbox', { name: 'Email' })` resolves it. Note: `required` only renders a visual `*` — it does **not** propagate `aria-required` to the input (a known gap documented in component-architecture §8). For now, set `required` on the input element yourself.",
      },
    },
  },
  render: () => (
    <div className="w-96 mx-auto mt-12">
      <Field label="Email" description="Used when you sign in" required>
        <Input type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
}

export const FieldWithError: Story = {
  name: '2. Error state',
  parameters: {
    docs: {
      description: {
        story:
          'Setting `error` automatically derives `isError: true`, which wires `aria-invalid="true"` + `aria-describedby` on the input pointing at the message. Meaning is carried by the error text, not colour alone (see css-api.md "Color alone is not enough").',
      },
    },
  },
  render: () => (
    <div className="w-96 mx-auto mt-12">
      <Field label="Email" error="Enter a valid email address" required>
        <Input type="email" defaultValue="invalid-email" />
      </Field>
    </div>
  ),
}

export const FieldSetGrouping: Story = {
  name: '3. Grouping with FieldSet',
  parameters: {
    docs: {
      description: {
        story:
          'FieldSet renders a native `<fieldset>` + `<legend>` for built-in a11y, and `disabled` propagates to every descendant control through the native fieldset. A nested `direction="row"` FieldSet lays two Fields side by side; `flexGrow` / `flexShrink` tune how each one stretches.',
      },
    },
  },
  render: () => (
    <FieldSet
      legend="Shipping address"
      description="Where we deliver"
      className="w-96 mx-auto mt-12"
    >
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
  ),
}

export const CheckboxRadioSwitch: Story = {
  name: '4. Checkbox / Radio / Switch',
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox / Switch / Radio carry their own `<label>`, so they are **not** wrapped in Field (no id wiring needed — see field-context-guideline.md). To group them, drop them directly under a FieldSet. Radio is wrapped in a RadioGroup, and that group is wrapped by a single Field to give it a group label.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8 w-96 mx-auto mt-12">
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
  ),
}

export const CompleteSignUpForm: Story = {
  name: '5. Complete sign-up form',
  parameters: {
    docs: {
      description: {
        story:
          'Manages every Field `error` in one state object and disables the controls with `disabled={submitting}` while in flight. Button\'s `isLoading` raises `aria-busy="true"` and keeps the form\'s disabled state consistent.',
      },
    },
  },
  render: () => {
    const [submitting, setSubmitting] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const next: Record<string, string> = {}
      if (!data.get('email')) next.email = 'Email is required'
      if (!data.get('password')) next.password = 'Password is required'
      setErrors(next)
      if (Object.keys(next).length === 0) {
        setSubmitting(true)
        // In a real form this would call an API; reset immediately for the demo.
        setSubmitting(false)
      }
    }

    return (
      <form onSubmit={handleSubmit} className="w-96 mx-auto mt-12 flex flex-col gap-4">
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
        <Button type="submit" isLoading={submitting}>
          Sign up
        </Button>
      </form>
    )
  },
}

export const WithReactHookForm: Story = {
  name: '6. react-hook-form integration',
  parameters: {
    docs: {
      description: {
        story: [
          'Recommended pattern for pairing with `react-hook-form`:',
          '',
          '```tsx',
          "import { useForm } from 'react-hook-form'",
          '',
          'function SignUpForm() {',
          '  const { register, handleSubmit, formState: { errors } } = useForm()',
          '  return (',
          '    <form onSubmit={handleSubmit(onSubmit)}>',
          '      <Field label="Email" required error={errors.email?.message}>',
          "        <Input {...register('email', { required: 'Required' })} />",
          '      </Field>',
          '      <Button type="submit">Sign up</Button>',
          '    </form>',
          '  )',
          '}',
          '```',
        ].join('\n'),
      },
    },
  },
  render: () => (
    <div className="max-w-2xl mx-auto px-8 py-12">
      <SectionTitle>react-hook-form integration</SectionTitle>
      <Note>
        The code in the Docs panel above works as-is. The three Schatten-side guarantees that make
        it work:
      </Note>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
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
      <Note>
        TanStack Form / Conform work the same way — wrap controlled components in their{' '}
        <code className="text-xs">Controller</code> equivalent.
      </Note>
    </div>
  ),
}

export const FormFieldComingSoon: Story = {
  name: '7. FormField (lv2) — coming in v1+',
  parameters: {
    docs: {
      description: {
        story:
          'The lv2 `FormField` (a one-component short form of Field + label + description + error) is planned for v1+ as #123. Once it lands, it will be added here as a dedicated section.',
      },
    },
  },
  render: () => (
    <div className="max-w-lg mx-auto mt-12">
      <Callout variant="info" title="Coming soon">
        The lv2 <code>FormField</code> (a one-component short form of Field + label + description +
        error) is planned for the v1+ milestone as{' '}
        <a href="https://github.com/yasmro/schatten/issues/123">#123</a>. Once it lands, it will be
        added to this page as a dedicated section.
      </Callout>
    </div>
  ),
}
