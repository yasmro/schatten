import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DJpnVprb.js";import{n,t as r}from"./Avatar-x693PRtp.js";import{n as i,t as ee}from"./circle-alert-BNIg3qVU.js";import{n as te,t as a}from"./info-Di_EfnJn.js";import{n as o,t as s}from"./user-Cv1jofwv.js";import{n as c,t as l}from"./Badge-7uyomz6G.js";import{n as u,t as d}from"./Button-B0pZD2A3.js";import{n as ne,t as f}from"./Spinner-C0ip7P5G.js";import{n as re,t as ie}from"./Callout-Ci8iTWvR.js";import{a as ae,i as oe,n as se,o as ce,r as le,s as ue,t as de}from"./Card-DgbkxiLH.js";import{n as fe,t as p}from"./Checkbox-B4UJivXY.js";import{n as pe,t as m}from"./Field-BVWTOVPj.js";import"./Tooltip-2VJUduEu.js";import{r as me,t as h}from"./DateCalendar-CNjDCX_h.js";import{n as g,t as _}from"./Separator-Buk178c-.js";import"./Dialog-BOeMT-hU.js";import{n as v,t as y}from"./Input-BkbydPiB.js";import{n as b,r as x,t as S}from"./Radio-CielzrRI.js";import"./Select-Cz6EOsap.js";import{n as C,t as w}from"./Switch-Dny55k1I.js";import{n as T,t as E}from"./Textarea-DcQC8bcU.js";import{n as D,t as O}from"./FieldSet-q2acW0sO.js";import{n as k,t as A}from"./Icon-Dg70TPqv.js";import{n as j,t as M}from"./Text-DXj9dViL.js";import{n as N,t as P}from"./Skeleton-vHTnaK6Q.js";import{a as F,c as I,i as L,n as R,o as z,r as he,s as B,t as ge}from"./Table-7P4WW4EJ.js";import{a as _e,i as V,n as H,r as ve,t as ye}from"./Tabs-BZaqTP8U.js";import"./Toast-JaVXJSzK.js";var U,W;function G(){return(G=e((()=>{U=`
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
  /* Wrapper around the section list. Used on BOTH columns so the
   * React side (Fragment expanding to many <section>s) and the
   * vanilla side (dangerouslySetInnerHTML producing a single wrapper
   * div whose children are the <section>s) get the same 1.5rem gap
   * between samples. Without this, the vanilla side wrapper eats the
   * column flex gap and the sections inside stack with margin: 0. */
  .cssapi-fixture__samples {
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
`,W=`
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
      <span class="st-spinner__label">Loading</span>
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
  <div class="st-callout st-callout--info st-callout--subtle">
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

<section class="cssapi-fixture__sample" data-component="dropdownmenu">
  <span class="cssapi-fixture__sample-label">DropdownMenu — .st-dropdown-menu__* (static, no portal)</span>
  <div class="st-dropdown-menu__content" role="menu" data-state="open" style="position: static;">
    <div class="st-dropdown-menu__label">Actions</div>
    <div class="st-dropdown-menu__separator"></div>
    <div class="st-dropdown-menu__item" role="menuitem" data-highlighted>
      <svg class="st-dropdown-menu__item-icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
      Edit
      <span class="st-dropdown-menu__shortcut">⌘E</span>
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__checkbox-item" role="menuitemcheckbox" aria-checked="true">
      <span class="st-dropdown-menu__item-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      Status Bar
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__radio-item" role="menuitemradio" aria-checked="true">
      <span class="st-dropdown-menu__item-indicator">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="12" />
        </svg>
      </span>
      Bottom
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__sub-trigger" role="menuitem" data-state="closed">
      Share
      <svg class="st-dropdown-menu__sub-trigger-chevron" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
    <div class="st-dropdown-menu__separator"></div>
    <div class="st-dropdown-menu__item st-dropdown-menu__item--destructive" role="menuitem">
      Delete
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="tabs">
  <span class="cssapi-fixture__sample-label">Tabs — .st-tabs__* (static, no JS)</span>
  <div class="st-tabs" data-orientation="horizontal">
    <div class="st-tabs__list" role="tablist" data-orientation="horizontal">
      <button class="st-tabs__trigger" role="tab" type="button" data-state="active" aria-selected="true">
        <svg class="st-tabs__trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
        Account
      </button>
      <button class="st-tabs__trigger" role="tab" type="button" data-state="inactive" aria-selected="false">
        Password
      </button>
      <button class="st-tabs__trigger" role="tab" type="button" data-state="inactive" aria-selected="false" disabled>
        Team
      </button>
      <!-- The indicator is JS-positioned in the React layer; this static sample
           pins it under the active tab by hand (transform/width inline). The
           translateX matches the list's 4px focus-ring padding so it aligns
           under the first tab. -->
      <span class="st-tabs__indicator" aria-hidden="true"
            style="transform: translateX(4px); width: 102px; opacity: 1;"></span>
    </div>
    <div class="st-tabs__content" role="tabpanel">Manage your account details and email.</div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="popover">
  <span class="cssapi-fixture__sample-label">Popover — .st-popover__content (static, no portal)</span>
  <!-- data-state is deliberately omitted: the enter animation on
       [data-state="open"] uses a slide transform, which the static dist smoke
       test (animations paused) could freeze mid-motion. The base rule already
       carries the full panel surface (border / padding / shadow), so the
       resolved "open" visual is identical without triggering the keyframe. -->
  <div class="st-popover__content" role="dialog" data-side="bottom" style="position: static;">
    <p>Place any content inside the popover panel.</p>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="skeleton">
  <span class="cssapi-fixture__sample-label">Skeleton — .st-skeleton</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-skeleton" style="height: 1rem; width: 12rem;" aria-hidden="true"></div>
    <div class="st-skeleton" style="height: 3rem; width: 3rem; border-radius: 9999px;" aria-hidden="true"></div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="card">
  <span class="cssapi-fixture__sample-label">Card — .st-card</span>
  <div class="st-card st-card--filled" style="width: 16rem;">
    <div class="st-card__header">
      <div class="st-card__title">Card title</div>
      <div class="st-card__description">A short supporting description.</div>
    </div>
    <div class="st-card__content">Main content goes here.</div>
    <div class="st-card__footer">Footer</div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="datecalendar">
  <span class="cssapi-fixture__sample-label">DateCalendar — .st-date-calendar (static markup; navigation and selection need JS)</span>
  <div class="st-date-calendar" role="group" aria-label="Date">
    <div class="st-date-calendar__months">
      <div class="st-date-calendar__month">
        <div class="st-date-calendar__header">
          <button type="button" class="st-date-calendar__nav st-date-calendar__nav--previous" aria-label="Previous month">‹</button>
          <div class="st-date-calendar__caption" id="fixture-date-caption" aria-live="polite">October 2026</div>
          <button type="button" class="st-date-calendar__nav st-date-calendar__nav--next" aria-label="Next month">›</button>
        </div>
        <table class="st-date-calendar__grid" role="grid" aria-labelledby="fixture-date-caption">
          <thead>
            <tr>
            <th scope="col" class="st-date-calendar__weekday">Sun</th>
            <th scope="col" class="st-date-calendar__weekday">Mon</th>
            <th scope="col" class="st-date-calendar__weekday">Tue</th>
            <th scope="col" class="st-date-calendar__weekday">Wed</th>
            <th scope="col" class="st-date-calendar__weekday">Thu</th>
            <th scope="col" class="st-date-calendar__weekday">Fri</th>
            <th scope="col" class="st-date-calendar__weekday">Sat</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">27</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">28</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">29</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">30</span></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 1, 2026">1</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 2, 2026">2</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 3, 2026">3</button></td>
          </tr>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 4, 2026">4</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 5, 2026">5</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 6, 2026">6</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 7, 2026">7</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 8, 2026">8</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 9, 2026">9</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 10, 2026">10</button></td>
          </tr>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 11, 2026">11</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 12, 2026">12</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 13, 2026">13</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 14, 2026">14</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 15, 2026">15</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 16, 2026">16</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 17, 2026">17</button></td>
          </tr>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 18, 2026">18</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 19, 2026">19</button></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-selected="true"><button type="button" class="st-date-calendar__day" tabindex="0" aria-label="October 20, 2026">20</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 21, 2026">21</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 22, 2026">22</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 23, 2026">23</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-current="date" aria-label="October 24, 2026">24</button></td>
          </tr>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 25, 2026">25</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 26, 2026">26</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 27, 2026">27</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 28, 2026">28</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 29, 2026">29</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 30, 2026">30</button></td>
            <td role="gridcell" class="st-date-calendar__cell"><button type="button" class="st-date-calendar__day" tabindex="-1" aria-label="October 31, 2026">31</button></td>
          </tr>
          <tr>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">1</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">2</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">3</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">4</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">5</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">6</span></td>
            <td role="gridcell" class="st-date-calendar__cell" aria-disabled="true" data-outside="true"><span class="st-date-calendar__day">7</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="avatar">
  <span class="cssapi-fixture__sample-label">Avatar — .st-avatar</span>
  <div class="cssapi-fixture__sample-row">
    <span class="st-avatar st-avatar--sm"><span class="st-avatar__fallback">JD</span></span>
    <span class="st-avatar st-avatar--md"><span class="st-avatar__fallback">AB</span></span>
    <span class="st-avatar st-avatar--lg"><span class="st-avatar__fallback">CD</span></span>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="table">
  <span class="cssapi-fixture__sample-label">Table — .st-table</span>
  <div class="st-table-scroll" style="width: 18rem;">
    <table class="st-table st-table--md st-table--striped st-table--bordered">
      <caption class="st-table__caption">Team members</caption>
      <thead class="st-table__header">
        <tr class="st-table__row">
          <th class="st-table__head st-table__head--start">Name</th>
          <th class="st-table__head st-table__head--end">Role</th>
        </tr>
      </thead>
      <tbody class="st-table__body">
        <tr class="st-table__row">
          <td class="st-table__cell st-table__cell--start">Taro Tanaka</td>
          <td class="st-table__cell st-table__cell--end">Admin</td>
        </tr>
        <tr class="st-table__row" data-state="selected">
          <td class="st-table__cell st-table__cell--start">Hanako Sato</td>
          <td class="st-table__cell st-table__cell--end">Editor</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`})))()}function K(){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`text`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Text — <Text>`}),(0,q.jsx)(M,{variant:`body`,size:`md`,children:`Body text.`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`Muted small text.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`icon`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Icon — <Icon>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(A,{icon:a,size:`md`}),(0,q.jsx)(A,{icon:ee,size:`md`,color:`error`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`separator`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Separator — <Separator>`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`Above`}),(0,q.jsx)(_,{orientation:`horizontal`,decorative:!0}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`Below`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`spinner`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Spinner — <Spinner>`}),(0,q.jsx)(`div`,{className:`cssapi-fixture__sample-row`,children:(0,q.jsx)(f,{size:`md`})})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`button`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Button — <Button>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(d,{variant:`primary`,children:`Primary`}),(0,q.jsx)(d,{variant:`secondary`,children:`Secondary`}),(0,q.jsx)(d,{variant:`destructive`,children:`Destructive`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`badge`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Badge — <Badge>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(l,{variant:`success`,appearance:`subtle`,children:`Saved`}),(0,q.jsx)(l,{variant:`error`,appearance:`solid`,children:`Failed`}),(0,q.jsx)(l,{variant:`info`,appearance:`outline`,children:`Beta`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`callout`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Callout — <Callout>`}),(0,q.jsx)(ie,{variant:`info`,appearance:`subtle`,title:`Heads up`,children:`Subtle appearance.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`input`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Input — <Input>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-stack`,children:[(0,q.jsx)(y,{placeholder:`Default`,"aria-label":`fixture-react-input-default`}),(0,q.jsx)(y,{placeholder:`Error`,isError:!0,"aria-label":`fixture-react-input-error`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`textarea`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Textarea — <Textarea>`}),(0,q.jsx)(E,{rows:2,placeholder:`Default`,"aria-label":`fixture-react-textarea-default`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`checkbox`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Checkbox — <Checkbox>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(p,{label:`Unchecked`,defaultChecked:!1}),(0,q.jsx)(p,{label:`Checked`,defaultChecked:!0})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`switch`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Switch — <Switch>`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(w,{label:`Off`,defaultChecked:!1}),(0,q.jsx)(w,{label:`On`,defaultChecked:!0})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`radio`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Radio — <Radio>`}),(0,q.jsxs)(b,{defaultValue:`b`,name:`fixture-react-radio`,children:[(0,q.jsx)(S,{value:`a`,label:`Option A`}),(0,q.jsx)(S,{value:`b`,label:`Option B`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`field`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Field — <Field>`}),(0,q.jsx)(m,{label:`Name`,required:!0,isError:!0,error:`Name is required`,children:(0,q.jsx)(y,{})})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`fieldset`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`FieldSet — <FieldSet>`}),(0,q.jsx)(O,{legend:`Personal Info`,children:(0,q.jsx)(m,{label:`First name`,children:(0,q.jsx)(y,{})})})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`tooltip`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Tooltip — portal-mounted (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Tooltip portals to body. The vanilla column shows the static .st-tooltip__content shape.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`select`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Select — portal-mounted (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Select dropdown portals to body. The vanilla column shows the closed trigger only.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`toast`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Toast — imperative API (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:"No comparable React render — Toast is fired imperatively via `toast()`. The vanilla column shows the static .st-toast frame."})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`dialog`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Dialog — portal-mounted (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Dialog portals to body. The vanilla column shows a scoped static overlay + content.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`dropdownmenu`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`DropdownMenu — portal-mounted (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — DropdownMenu portals to body and is JS-driven. The vanilla column shows the static .st-dropdown-menu__content shape.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`popover`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Popover — portal-mounted (omitted)`}),(0,q.jsx)(M,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Popover portals to body and is JS-driven. The vanilla column shows the static .st-popover__content shape.`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`tabs`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Tabs — .st-tabs__* (inline, JS-driven)`}),(0,q.jsxs)(ye,{defaultValue:`account`,children:[(0,q.jsxs)(ve,{children:[(0,q.jsx)(V,{value:`account`,icon:s,children:`Account`}),(0,q.jsx)(V,{value:`password`,children:`Password`}),(0,q.jsx)(V,{value:`team`,disabled:!0,children:`Team`})]}),(0,q.jsx)(H,{value:`account`,children:`Manage your account details and email.`}),(0,q.jsx)(H,{value:`password`,children:`Change your password here.`}),(0,q.jsx)(H,{value:`team`,children:`Invite and manage team members.`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`skeleton`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Skeleton — .st-skeleton`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(P,{style:{height:`1rem`,width:`12rem`}}),(0,q.jsx)(P,{style:{height:`3rem`,width:`3rem`,borderRadius:`9999px`}})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`card`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Card — .st-card`}),(0,q.jsxs)(de,{style:{width:`16rem`},children:[(0,q.jsxs)(ae,{children:[(0,q.jsx)(ce,{children:`Card title`}),(0,q.jsx)(le,{children:`A short supporting description.`})]}),(0,q.jsx)(se,{children:`Main content goes here.`}),(0,q.jsx)(oe,{children:`Footer`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`datecalendar`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`DateCalendar — .st-date-calendar (static markup; navigation and selection need JS)`}),(0,q.jsx)(h,{"aria-label":`Date`,today:`2026-10-24`,defaultValue:`2026-10-20`})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`avatar`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Avatar — .st-avatar`}),(0,q.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,q.jsx)(r,{fallback:`JD`,size:`sm`}),(0,q.jsx)(r,{fallback:`AB`,size:`md`}),(0,q.jsx)(r,{fallback:`CD`,size:`lg`})]})]}),(0,q.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`table`,children:[(0,q.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Table — .st-table`}),(0,q.jsx)(`div`,{style:{width:`18rem`},children:(0,q.jsxs)(ge,{striped:!0,bordered:!0,children:[(0,q.jsx)(he,{children:`Team members`}),(0,q.jsx)(z,{children:(0,q.jsxs)(B,{children:[(0,q.jsx)(F,{children:`Name`}),(0,q.jsx)(F,{align:`end`,children:`Role`})]})}),(0,q.jsxs)(R,{children:[(0,q.jsxs)(B,{children:[(0,q.jsx)(L,{children:`Taro Tanaka`}),(0,q.jsx)(L,{align:`end`,children:`Admin`})]}),(0,q.jsxs)(B,{selected:!0,children:[(0,q.jsx)(L,{children:`Hanako Sato`}),(0,q.jsx)(L,{align:`end`,children:`Editor`})]})]})]})})]})]})}var q;function J(){return(J=e((()=>{i(),te(),o(),n(),c(),u(),re(),ue(),fe(),me(),pe(),D(),k(),v(),x(),g(),N(),ne(),C(),I(),_e(),j(),T(),q=t();try{K.displayName=`ReactSamples`,K.__docgenInfo={description:"React equivalents for the 14 区 A/B components (plus inline-renderable\nTabs) — paired by `data-component` with the matching `vanillaHtml`\nsection so the parity story can render them side-by-side and the\nsnapshot tells you immediately which component drifted.",displayName:`ReactSamples`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}try{fixtureChromeCss.displayName=`fixtureChromeCss`,fixtureChromeCss.__docgenInfo={description:"Stringified `<style>` block providing the layout chrome for the\nparity grid. Lives inside the fixture so both the React story and\nthe dist HTML page render with identical structure — the dist spec\nconcatenates this with `dist/schatten.css` and the markup body.\n\nPrefix `.cssapi-fixture__*` is deliberately NOT `st-*` — these\nclasses are NOT part of the public CSS API\n(.claude/rules/api-stability.md). They are purely test scaffolding.",displayName:`fixtureChromeCss`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}try{vanillaHtml.displayName=`vanillaHtml`,vanillaHtml.__docgenInfo={description:`Vanilla HTML for all 18 lv1 components. Imported as a string and
either set via \`dangerouslySetInnerHTML\` (parity story) or written
to \`page.setContent\` (dist VRT spec).

Each component is wrapped in a \`.cssapi-fixture__sample\` with a
\`data-component\` attribute so the React side can be paired visually
and CSS rules can pin individual components without relying on
positional selectors.

Markup conventions:

- Static-only — no \`[data-state]\` driven open dialogs / select
  dropdowns; the unwrapped vanilla shape is what consumers writing
  pure HTML get. Open shapes for region D components stay covered
  by per-component VRT specs.
- Inline SVG paths match the Lucide icons used on the React side
  so the visual is comparable. Kept short — circle + path is enough
  for parity detection.
- \`aria-*\` and \`role\` attributes are written explicitly because the
  CSS API does not auto-wire ARIA; vanilla consumers must set them.`,displayName:`vanillaHtml`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X,Z,Q;function $(){return($=e((()=>{G(),J(),Y=t(),X={title:`CSS API/Overview`,parameters:{layout:`fullscreen`}},Z={name:`React vs Vanilla HTML (parity)`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`style`,{children:U}),(0,Y.jsxs)(`div`,{className:`cssapi-fixture`,children:[(0,Y.jsx)(`h1`,{className:`st-text st-text--heading st-text--xl st-text--default`,children:`React ↔ Vanilla HTML parity`}),(0,Y.jsxs)(`p`,{className:`st-text st-text--body st-text--sm st-text--muted`,children:["Left column: the React component layer. Right column: hand-written vanilla HTML with the matching `.st-*` class chain. Same fixture is fed into ",(0,Y.jsx)(`code`,{children:`CSSApiDist.vrt.spec.ts`}),` `,`to verify the built `,(0,Y.jsx)(`code`,{children:`dist/schatten.css`}),` renders identically.`]}),(0,Y.jsxs)(`div`,{className:`cssapi-fixture__grid`,style:{marginTop:`1.5rem`},children:[(0,Y.jsxs)(`div`,{className:`cssapi-fixture__column`,children:[(0,Y.jsx)(`span`,{className:`cssapi-fixture__column-label`,children:`React`}),(0,Y.jsx)(`div`,{className:`cssapi-fixture__samples`,children:(0,Y.jsx)(K,{})})]}),(0,Y.jsxs)(`div`,{className:`cssapi-fixture__column`,children:[(0,Y.jsx)(`span`,{className:`cssapi-fixture__column-label`,children:`Vanilla HTML`}),(0,Y.jsx)(`div`,{className:`cssapi-fixture__samples`,dangerouslySetInnerHTML:{__html:W}})]})]})]})]})},Q=[`ParityComparison`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML (parity)',
  parameters: {
    // Renders every treatment on both columns, including the solid fills whose
    // white-foreground small text is the documented intentional exception
    // (solid trilemma — #344 / #346). Component-level a11y (blocking) guards
    // real regressions.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <>
      {/* Fixture chrome — scaffolding only, NOT public API. The same
       * CSS string is injected into the dist HTML page so layout
       * matches across verification paths. */}
      <style>{fixtureChromeCss}</style>

      <div className="cssapi-fixture">
        <h1 className="st-text st-text--heading st-text--xl st-text--default">
          React ↔ Vanilla HTML parity
        </h1>
        <p className="st-text st-text--body st-text--sm st-text--muted">
          Left column: the React component layer. Right column: hand-written vanilla HTML with the
          matching \`.st-*\` class chain. Same fixture is fed into <code>CSSApiDist.vrt.spec.ts</code>{' '}
          to verify the built <code>dist/schatten.css</code> renders identically.
        </p>

        <div className="cssapi-fixture__grid" style={{
        marginTop: '1.5rem'
      }}>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">React</span>
            {/* Wrap in \`.cssapi-fixture__samples\` so the gap between
             * sections matches the vanilla side, which renders one
             * wrapper div from \`dangerouslySetInnerHTML\`. Without the
             * wrapper here, React's Fragment would flatten all
             * sections directly into the column, getting \`gap: 1.5rem\`
             * from the column itself — but then the vanilla side's
             * sections lose that gap because their wrapper eats it.
             * Mirroring the structure on both sides keeps the gaps
             * symmetric. */}
            <div className="cssapi-fixture__samples">
              <ReactSamples />
            </div>
          </div>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">Vanilla HTML</span>
            <div className="cssapi-fixture__samples"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: The fixture string is authored in this repo and is the single source of truth shared with the dist VRT — see src/docs/__fixtures__/cssApiSamples.tsx file header.
          dangerouslySetInnerHTML={{
            __html: vanillaHtml
          }} />
          </div>
        </div>
      </div>
    </>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as ParityComparison,Q as __namedExportsOrder,X as default};