/**
 * CSS API fixture — single source of truth for vanilla HTML markup shared
 * between the parity story (`src/docs/CSSApiParity.stories.tsx`) and the
 * dist artifact VRT spec (`src/docs/CSSApiDist.vrt.spec.ts`).
 *
 * Why a shared fixture:
 *
 * - **Parity story** renders the same markup against Storybook's
 *   `globals.css` (source-mode Tailwind v4 compile of the same
 *   `Component.css` files). Side-by-side with a `<ReactSamples />`
 *   column that uses the actual React components.
 * - **Dist VRT** loads `dist/schatten.css` via `page.setContent()` (no
 *   Storybook involved) and renders the *same* vanilla markup. If
 *   dist diverges from source-mode, the snapshot differs.
 *
 * Keeping the markup in one place means a drift between the two
 * verification paths can only come from a CSS difference — never from a
 * markup typo on one side. This closes the gap PR review used to catch
 * by `grep` (#275 review, parent #154).
 *
 * Coverage policy:
 *
 * - **All 18 lv1 components** appear in `vanillaHtml` — one
 *   representative variant per component, enough to detect any CSS
 *   drift without redundantly duplicating what
 *   `src/docs/CSSApi.stories.tsx` Reference already documents
 *   exhaustively.
 * - **14 区 A/B components** appear in `<ReactSamples />` for visible
 *   parity comparison. Tooltip / Select / Dialog / Toast (区 C/D per
 *   .claude/rules/vrt-spec-guideline.md) are intentionally omitted
 *   from the React column — they require JS or portal mounting that
 *   can't be shown side-by-side. Their vanilla markup still appears
 *   on the vanilla side as static frames, which is what `dist/css/*`
 *   subpath verification needs anyway.
 */

import { AlertCircle, Bell, Info, Mail, Plus, Search, Star } from 'lucide-react'
import {
  Badge,
  Button,
  Callout,
  Checkbox,
  Field,
  FieldSet,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Separator,
  Spinner,
  Switch,
  Text,
  Textarea,
} from '../../components/lv1'

/**
 * Stringified `<style>` block providing the layout chrome for the
 * parity grid. Lives inside the fixture so both the React story and
 * the dist HTML page render with identical structure — the dist spec
 * concatenates this with `dist/schatten.css` and the markup body.
 *
 * Prefix `.cssapi-fixture__*` is deliberately NOT `st-*` — these
 * classes are NOT part of the public CSS API
 * (.claude/rules/api-stability.md). They are purely test scaffolding.
 */
export const fixtureChromeCss = `
  .cssapi-fixture { padding: 1.5rem; max-width: 72rem; margin: 0 auto; }
  .cssapi-fixture__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .cssapi-fixture__column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .cssapi-fixture__column-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-foreground-muted);
    margin-bottom: 0.25rem;
  }
  .cssapi-fixture__sample {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    background-color: var(--color-surface);
  }
  .cssapi-fixture__sample-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.7rem;
    color: var(--color-foreground-muted);
  }
  .cssapi-fixture__sample-row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .cssapi-fixture__sample-stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .cssapi-fixture__dialog-host {
    position: relative;
    min-height: 12rem;
    border-radius: 0.375rem;
    overflow: hidden;
    isolation: isolate;
  }
  .cssapi-fixture__sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }
  /* Dialog/Toast portal-mounted markup uses fixed positioning in
   * production. Scope them to the dialog host so the static fixture
   * doesn't take over the viewport. */
  .cssapi-fixture__dialog-host .st-dialog__overlay,
  .cssapi-fixture__dialog-host .st-dialog__content {
    position: absolute;
  }
  .cssapi-fixture__dialog-host .st-dialog__overlay {
    inset: 0;
  }
  .cssapi-fixture__dialog-host .st-dialog__content {
    top: 50%; left: 50%;
    translate: -50% -50%;
    max-width: 22rem;
    width: 90%;
  }
`

/**
 * Vanilla HTML for all 18 lv1 components. Imported as a string and
 * either set via `dangerouslySetInnerHTML` (parity story) or written
 * to `page.setContent` (dist VRT spec).
 *
 * Each component is wrapped in a `.cssapi-fixture__sample` with a
 * `data-component` attribute so the React side can be paired visually
 * and CSS rules can pin individual components without relying on
 * positional selectors.
 *
 * Markup conventions:
 *
 * - Static-only — no `[data-state]` driven open dialogs / select
 *   dropdowns; the unwrapped vanilla shape is what consumers writing
 *   pure HTML get. Open shapes for region D components stay covered
 *   by per-component VRT specs.
 * - Inline SVG paths match the Lucide icons used on the React side
 *   so the visual is comparable. Kept short — circle + path is enough
 *   for parity detection.
 * - `aria-*` and `role` attributes are written explicitly because the
 *   CSS API does not auto-wire ARIA; vanilla consumers must set them.
 */
export const vanillaHtml = `
<section class="cssapi-fixture__sample" data-component="text">
  <span class="cssapi-fixture__sample-label">Text — .st-text</span>
  <p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
  <p class="st-text st-text--body st-text--sm st-text--muted">Muted small text.</p>
</section>

<section class="cssapi-fixture__sample" data-component="icon">
  <span class="cssapi-fixture__sample-label">Icon — .st-icon</span>
  <div class="cssapi-fixture__sample-row">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round"
         class="st-icon st-icon--md st-icon--default" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round"
         class="st-icon st-icon--md st-icon--error" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="separator">
  <span class="cssapi-fixture__sample-label">Separator — .st-separator</span>
  <p class="st-text st-text--body st-text--sm st-text--muted">Above</p>
  <div class="st-separator st-separator--horizontal" role="none"></div>
  <p class="st-text st-text--body st-text--sm st-text--muted">Below</p>
</section>

<section class="cssapi-fixture__sample" data-component="spinner">
  <span class="cssapi-fixture__sample-label">Spinner — .st-spinner</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-spinner st-spinner--default st-spinner--md" role="status">
      <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
        <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
      <span class="cssapi-fixture__sr-only">Loading</span>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="button">
  <span class="cssapi-fixture__sample-label">Button — .st-btn</span>
  <div class="cssapi-fixture__sample-row">
    <button type="button" class="st-btn st-btn--primary st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Primary</span>
    </button>
    <button type="button" class="st-btn st-btn--secondary st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Secondary</span>
    </button>
    <button type="button" class="st-btn st-btn--destructive st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Destructive</span>
    </button>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="badge">
  <span class="cssapi-fixture__sample-label">Badge — .st-badge</span>
  <div class="cssapi-fixture__sample-row">
    <span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
    <span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
    <span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="callout">
  <span class="cssapi-fixture__sample-label">Callout — .st-callout</span>
  <div class="st-callout st-callout--info st-callout--subtle" role="status">
    <svg class="st-callout__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
    <div class="st-callout__content">
      <div class="st-callout__title">Heads up</div>
      <div class="st-callout__body">Subtle appearance.</div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="input">
  <span class="cssapi-fixture__sample-label">Input — .st-input</span>
  <div class="cssapi-fixture__sample-stack">
    <div class="st-input-wrapper st-input-wrapper--md">
      <input type="text" placeholder="Default" class="st-input" aria-label="fixture-input-default" />
    </div>
    <div class="st-input-wrapper st-input-wrapper--md">
      <input type="text" placeholder="Error" class="st-input" aria-invalid="true" aria-label="fixture-input-error" />
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="textarea">
  <span class="cssapi-fixture__sample-label">Textarea — .st-textarea</span>
  <textarea rows="2" placeholder="Default" class="st-textarea st-textarea--md" aria-label="fixture-textarea-default"></textarea>
</section>

<section class="cssapi-fixture__sample" data-component="checkbox">
  <span class="cssapi-fixture__sample-label">Checkbox — .st-checkbox</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-checkbox-wrapper">
      <button type="button" id="fixture-cb-1" role="checkbox" aria-checked="false"
              data-state="unchecked" class="st-checkbox st-checkbox--md">
        <span class="st-checkbox__indicator">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
      </button>
      <label for="fixture-cb-1" class="st-checkbox-wrapper__label">Unchecked</label>
    </div>
    <div class="st-checkbox-wrapper">
      <button type="button" id="fixture-cb-2" role="checkbox" aria-checked="true"
              data-state="checked" class="st-checkbox st-checkbox--md">
        <span class="st-checkbox__indicator">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
      </button>
      <label for="fixture-cb-2" class="st-checkbox-wrapper__label">Checked</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="switch">
  <span class="cssapi-fixture__sample-label">Switch — .st-switch</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-switch-wrapper">
      <button type="button" id="fixture-sw-1" role="switch" aria-checked="false"
              data-state="unchecked" class="st-switch st-switch--md">
        <span class="st-switch__check">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
        <span class="st-switch__thumb" data-state="unchecked"></span>
      </button>
      <label for="fixture-sw-1" class="st-switch-wrapper__label">Off</label>
    </div>
    <div class="st-switch-wrapper">
      <button type="button" id="fixture-sw-2" role="switch" aria-checked="true"
              data-state="checked" class="st-switch st-switch--md">
        <span class="st-switch__check">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
        <span class="st-switch__thumb" data-state="checked"></span>
      </button>
      <label for="fixture-sw-2" class="st-switch-wrapper__label">On</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="radio">
  <span class="cssapi-fixture__sample-label">Radio — .st-radio</span>
  <div role="radiogroup" class="st-radio-group">
    <div class="st-radio-wrapper">
      <button type="button" id="fixture-r-a" role="radio" aria-checked="false"
              data-state="unchecked" class="st-radio st-radio--md"></button>
      <label for="fixture-r-a" class="st-radio-wrapper__label">Option A</label>
    </div>
    <div class="st-radio-wrapper">
      <button type="button" id="fixture-r-b" role="radio" aria-checked="true"
              data-state="checked" class="st-radio st-radio--md">
        <span class="st-radio__indicator"><span class="st-radio__dot"></span></span>
      </button>
      <label for="fixture-r-b" class="st-radio-wrapper__label">Option B</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="field">
  <span class="cssapi-fixture__sample-label">Field — .st-field</span>
  <div class="st-field" data-error="true">
    <div class="st-field__label-row">
      <label for="fixture-field-name" class="st-field__label">
        Name<span class="st-field__required-marker">*</span>
      </label>
    </div>
    <div class="st-input-wrapper st-input-wrapper--md">
      <input id="fixture-field-name" class="st-input" required
             aria-invalid="true" aria-describedby="fixture-field-name-error" />
    </div>
    <p id="fixture-field-name-error" class="st-field__error">Name is required</p>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="fieldset">
  <span class="cssapi-fixture__sample-label">FieldSet — .st-fieldset</span>
  <fieldset class="st-fieldset">
    <legend class="st-fieldset__legend">Personal Info</legend>
    <div class="st-fieldset__children">
      <div class="st-field">
        <div class="st-field__label-row">
          <label for="fixture-fs-first" class="st-field__label">First name</label>
        </div>
        <div class="st-input-wrapper st-input-wrapper--md">
          <input id="fixture-fs-first" class="st-input" />
        </div>
      </div>
    </div>
  </fieldset>
</section>

<section class="cssapi-fixture__sample" data-component="tooltip">
  <span class="cssapi-fixture__sample-label">Tooltip — .st-tooltip__content (static)</span>
  <div class="st-tooltip__content" data-state="instant-open" data-side="bottom" role="tooltip">
    Tooltip body
    <svg class="st-tooltip__arrow" width="10" height="5" viewBox="0 0 30 10" aria-hidden="true">
      <polygon points="0,0 30,0 15,10" />
    </svg>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="select">
  <span class="cssapi-fixture__sample-label">Select — .st-select__trigger (closed)</span>
  <button type="button" class="st-select__trigger st-select__trigger--md"
          aria-haspopup="listbox" aria-expanded="false" data-state="closed">
    <span class="st-select__value">Pick a fruit</span>
    <svg class="st-select__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</section>

<section class="cssapi-fixture__sample" data-component="toast">
  <span class="cssapi-fixture__sample-label">Toast — .st-toast (static, no portal)</span>
  <div class="st-toast st-toast--success st-toast--subtle" role="status" aria-live="polite">
    <svg class="st-toast__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <div class="st-toast__content">
      <div class="st-toast__title">Saved</div>
      <div class="st-toast__description">Your changes are saved.</div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="dialog">
  <span class="cssapi-fixture__sample-label">Dialog — .st-dialog__* (static, scoped)</span>
  <div class="cssapi-fixture__dialog-host">
    <div class="st-dialog__overlay"></div>
    <div class="st-dialog__content" role="dialog" aria-modal="true"
         aria-labelledby="fixture-dialog-title" aria-describedby="fixture-dialog-desc">
      <div class="st-dialog__header">
        <h2 id="fixture-dialog-title" class="st-dialog__title">Confirm</h2>
        <p id="fixture-dialog-desc" class="st-dialog__description">Are you sure?</p>
      </div>
      <div class="st-dialog__footer">
        <button type="button" class="st-btn st-btn--secondary st-btn--md">
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Cancel</span>
        </button>
        <button type="button" class="st-btn st-btn--primary st-btn--md">
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Confirm</span>
        </button>
      </div>
    </div>
  </div>
</section>
`

/**
 * React equivalents for the 14 区 A/B components — paired by
 * `data-component` with the matching `vanillaHtml` section so the
 * parity story can render them side-by-side and the snapshot tells
 * you immediately which component drifted.
 *
 * 区 C/D components (Tooltip / Select / Dialog / Toast) are
 * intentionally omitted — their React shape requires portal mounting
 * (Tooltip/Select positioning relies on Floating UI; Dialog mounts
 * to body; Toast is imperative). The static vanilla markup on the
 * other side still verifies the CSS contract for them. See
 * .claude/rules/vrt-spec-guideline.md §"Parity stories — when to
 * write one, when to skip".
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

      <section className="cssapi-fixture__sample" data-component="tooltip">
        <span className="cssapi-fixture__sample-label">Tooltip — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          Portal-mounted in React — covered by Tooltip.vrt.spec.ts.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="select">
        <span className="cssapi-fixture__sample-label">Select — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          Portal-mounted in React — covered by Select.vrt.spec.ts.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="toast">
        <span className="cssapi-fixture__sample-label">Toast — imperative API (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          Imperative `toast()` API in React — covered by Toast.vrt.spec.ts.
        </Text>
      </section>

      <section className="cssapi-fixture__sample" data-component="dialog">
        <span className="cssapi-fixture__sample-label">Dialog — portal-mounted (omitted)</span>
        <Text variant="body" size="sm" color="muted">
          Portal-mounted in React — covered by Dialog.vrt.spec.ts.
        </Text>
      </section>
    </>
  )
}

// Silence unused-import warnings for icons we ship for future expansion.
// (Bell, Mail, Plus, Search, Star are exported in lucide-react and listed
// here so adding a new variant to ReactSamples does not have to remember
// the import path.)
void Bell
void Mail
void Plus
void Search
void Star
