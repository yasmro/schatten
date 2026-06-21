/**
 * CSS API fixture — React-side companion to `cssApiSamples.html.ts`.
 *
 * Splits the fixture in two so the Playwright `CSSApiDist.vrt.spec.ts`
 * can import the string payloads (`vanillaHtml` / `fixtureChromeCss`)
 * without dragging the React component import graph (and its
 * transitive `import './Component.css'` side-effects) through Babel,
 * which mis-parses `@layer { … }` as TypeScript decorators.
 *
 * - String payloads (`vanillaHtml`, `fixtureChromeCss`) live in
 *   [`cssApiSamples.html.ts`](./cssApiSamples.html.ts) — the SSOT.
 * - `ReactSamples` (this file) imports the lv1 React components and
 *   pairs each `data-component` section with a real React render.
 *
 * Coverage policy: the 14 区 A/B components — plus Tabs (区 D but
 * inline-renderable, so it pairs against its vanilla markup) — appear
 * in `<ReactSamples />` for visible parity comparison. Tooltip /
 * Select / Dialog / Toast (区 C/D per
 * .claude/rules/vrt-spec-guideline.md) are intentionally omitted from
 * the React column — they require portal mounting or an imperative API
 * that can't be shown side-by-side. Their vanilla markup still appears
 * on the vanilla side as static frames, which is what `dist/css/*`
 * subpath verification needs anyway.
 */

import { AlertCircle, Info, User } from 'lucide-react'
import {
  Avatar,
  Badge,
  Button,
  Callout,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Field,
  FieldSet,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
} from '../../components/lv1'

// Side-effect imports for the 区 C/D components (Tooltip / Select /
// Dialog / Toast). The React `<ReactSamples />` column intentionally
// omits these (they portal-mount, so there's no comparable React
// render to put alongside the vanilla static markup) — which means
// the bundler's named-import tree-shake doesn't walk their `.tsx`
// files either, so their `import './Component.css'` side-effects
// never fire. The vanilla column DOES render their `.st-*` static
// shape, and without the CSS the SVGs (notably `.st-toast__icon`)
// fall back to the 300×150 default and fill their container.
//
// Locally with `pnpm dev` (Vite dev) every story gets aggregated
// into one entry so the four CSS files load incidentally; in the
// Storybook **build** output (deployed preview, `pnpm build:storybook`)
// per-story code-splitting drops them. The explicit imports below
// pin the contract on both paths. Mirrors the precedent in
// `src/docs/CSSApi.stories.tsx`. See PR #313 preview regression.
import '../../components/lv1/Dialog/Dialog.css'
import '../../components/lv1/Select/Select.css'
import '../../components/lv1/Toast/Toast.css'
import '../../components/lv1/Tooltip/Tooltip.css'

// Re-export the string payloads so the story has one import site.
export { fixtureChromeCss, vanillaHtml } from './cssApiSamples.html'

/**
 * React equivalents for the 14 区 A/B components (plus inline-renderable
 * Tabs) — paired by `data-component` with the matching `vanillaHtml`
 * section so the parity story can render them side-by-side and the
 * snapshot tells you immediately which component drifted.
 */
export function ReactSamples() {
  return (
    <>
      <section className="cssapi-fixture__sample" data-component="text">
        <span className="cssapi-fixture__sample-label">Text — &lt;Text&gt;</span>
        <Text variant="body" size="md">
          Body text.
        </Text>
        <Text variant="body" size="sm" color="muted">
          Muted small text.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="icon">
        <span className="cssapi-fixture__sample-label">Icon — &lt;Icon&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Icon icon={Info} size="md" />
          <Icon icon={AlertCircle} size="md" color="error" />
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="separator">
        <span className="cssapi-fixture__sample-label">Separator — &lt;Separator&gt;</span>
        <Text variant="body" size="sm" color="muted">
          Above
        </Text>
        <Separator orientation="horizontal" decorative />
        <Text variant="body" size="sm" color="muted">
          Below
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="spinner">
        <span className="cssapi-fixture__sample-label">Spinner — &lt;Spinner&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Spinner size="md" />
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="button">
        <span className="cssapi-fixture__sample-label">Button — &lt;Button&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="badge">
        <span className="cssapi-fixture__sample-label">Badge — &lt;Badge&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Badge variant="success" appearance="subtle">
            Saved
          </Badge>
          <Badge variant="error" appearance="solid">
            Failed
          </Badge>
          <Badge variant="info" appearance="outline">
            Beta
          </Badge>
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="callout">
        <span className="cssapi-fixture__sample-label">Callout — &lt;Callout&gt;</span>
        <Callout variant="info" appearance="subtle" title="Heads up">
          Subtle appearance.
        </Callout>
      </section>

      <section className="cssapi-fixture__sample" data-component="input">
        <span className="cssapi-fixture__sample-label">Input — &lt;Input&gt;</span>
        <div className="cssapi-fixture__sample-stack">
          <Input placeholder="Default" aria-label="fixture-react-input-default" />
          <Input placeholder="Error" isError aria-label="fixture-react-input-error" />
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="textarea">
        <span className="cssapi-fixture__sample-label">Textarea — &lt;Textarea&gt;</span>
        <Textarea rows={2} placeholder="Default" aria-label="fixture-react-textarea-default" />
      </section>

      <section className="cssapi-fixture__sample" data-component="checkbox">
        <span className="cssapi-fixture__sample-label">Checkbox — &lt;Checkbox&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Checkbox label="Unchecked" defaultChecked={false} />
          <Checkbox label="Checked" defaultChecked />
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="switch">
        <span className="cssapi-fixture__sample-label">Switch — &lt;Switch&gt;</span>
        <div className="cssapi-fixture__sample-row">
          <Switch label="Off" defaultChecked={false} />
          <Switch label="On" defaultChecked />
        </div>
      </section>

      <section className="cssapi-fixture__sample" data-component="radio">
        <span className="cssapi-fixture__sample-label">Radio — &lt;Radio&gt;</span>
        <RadioGroup defaultValue="b" name="fixture-react-radio">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </section>

      <section className="cssapi-fixture__sample" data-component="field">
        <span className="cssapi-fixture__sample-label">Field — &lt;Field&gt;</span>
        <Field label="Name" required isError error="Name is required">
          <Input />
        </Field>
      </section>

      <section className="cssapi-fixture__sample" data-component="fieldset">
        <span className="cssapi-fixture__sample-label">FieldSet — &lt;FieldSet&gt;</span>
        <FieldSet legend="Personal Info">
          <Field label="First name">
            <Input />
          </Field>
        </FieldSet>
      </section>

      {/* 区 C/D — vanilla side renders a static `.st-*` shape; React
       * side intentionally shows a "no comparable React render"
       * placeholder, because Tooltip / Select / Dialog (portal) and
       * Toast (imperative) can't render in-place alongside vanilla
       * markup. The CSS contract for these is verified by the
       * vanilla column + per-component VRT specs. */}
      <section className="cssapi-fixture__sample" data-component="tooltip">
        <span className="cssapi-fixture__sample-label">Tooltip — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          No comparable React render — Tooltip portals to body. The vanilla column shows the static
          .st-tooltip__content shape.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="select">
        <span className="cssapi-fixture__sample-label">Select — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          No comparable React render — Select dropdown portals to body. The vanilla column shows the
          closed trigger only.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="toast">
        <span className="cssapi-fixture__sample-label">Toast — imperative API (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          No comparable React render — Toast is fired imperatively via `toast()`. The vanilla column
          shows the static .st-toast frame.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="dialog">
        <span className="cssapi-fixture__sample-label">Dialog — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          No comparable React render — Dialog portals to body. The vanilla column shows a scoped
          static overlay + content.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="dropdownmenu">
        <span className="cssapi-fixture__sample-label">
          DropdownMenu — portal-mounted (omitted)
        </span>
        <Text variant="body" size="sm" color="muted">
          No comparable React render — DropdownMenu portals to body and is JS-driven. The vanilla
          column shows the static .st-dropdown-menu__content shape.
        </Text>
      </section>

      {/* Tabs is 区 D (JS-driven) but renders inline — unlike the portal /
          imperative 区 C/D components above, it has a real React render to pair
          against the vanilla static markup. */}
      <section className="cssapi-fixture__sample" data-component="tabs">
        <span className="cssapi-fixture__sample-label">Tabs — .st-tabs__* (inline, JS-driven)</span>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account" icon={User}>
              Account
            </TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="team" disabled>
              Team
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Manage your account details and email.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="team">Invite and manage team members.</TabsContent>
        </Tabs>
      </section>

      {/* Skeleton — decorative, className-driven. The vanilla column pairs via
          inline style since the dist CSS path ships no Tailwind size utilities. */}
      <section className="cssapi-fixture__sample" data-component="skeleton">
        <span className="cssapi-fixture__sample-label">Skeleton — .st-skeleton</span>
        <div className="cssapi-fixture__sample-row">
          <Skeleton style={{ height: '1rem', width: '12rem' }} />
          <Skeleton style={{ height: '3rem', width: '3rem', borderRadius: '9999px' }} />
        </div>
      </section>

      {/* Card — static surface, fully vanilla-able (区分 A). Inline width keeps
          the sample compact and matches the vanilla column (no Tailwind in the
          dist CSS path). */}
      <section className="cssapi-fixture__sample" data-component="card">
        <span className="cssapi-fixture__sample-label">Card — .st-card</span>
        <Card style={{ width: '16rem' }}>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A short supporting description.</CardDescription>
          </CardHeader>
          <CardContent>Main content goes here.</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </section>

      <section className="cssapi-fixture__sample" data-component="avatar">
        <span className="cssapi-fixture__sample-label">Avatar — .st-avatar</span>
        <div className="cssapi-fixture__sample-row">
          <Avatar fallback="JD" size="sm" />
          <Avatar fallback="AB" size="md" />
          <Avatar fallback="CD" size="lg" />
        </div>
      </section>
    </>
  )
}
