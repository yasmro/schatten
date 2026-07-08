<script setup lang="ts">
import { ref } from 'vue'

// Mode (.dark) × Special (data-theme) — both mutate <html>, exactly as the
// React <ThemeProvider> would. No Schatten JS involved; the CSS re-resolves.
const dark = ref(false)
const season = ref('')

function toggleDark() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
}
function onSeason(e: Event) {
  const value = (e.target as HTMLSelectElement).value
  season.value = value
  if (value) document.documentElement.setAttribute('data-theme', value)
  else document.documentElement.removeAttribute('data-theme')
}
</script>

<template>
  <main style="max-width: 48rem; margin: 0 auto; padding: 2rem 1.5rem">
    <div
      style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 2rem"
    >
      <button type="button" class="st-btn st-btn--secondary st-btn--sm" @click="toggleDark">
        <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
        <span class="st-btn__content">Toggle dark</span>
      </button>
      <select class="st-input" aria-label="Seasonal theme" style="min-width: 12rem" @change="onSeason">
        <option value="">— none —</option>
        <option value="season--spring-early">season--spring-early</option>
        <option value="season--summer-peak">season--summer-peak</option>
        <option value="season--autumn-late">season--autumn-late</option>
        <option value="season--winter-deep">season--winter-deep</option>
      </select>
    </div>

    <h1 class="st-text st-text--heading st-text--lg st-text--default">Schatten in Vue</h1>
    <p class="st-text st-text--body st-text--md st-text--muted" style="margin-bottom: 1.5rem">
      Class API only — no Schatten JS import needed for these.
    </p>

    <div style="display: flex; flex-direction: column; gap: 1.25rem">
      <div class="demo-row" style="display: flex; gap: 0.75rem; flex-wrap: wrap">
        <button type="button" class="st-btn st-btn--primary st-btn--md">
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Primary</span>
        </button>
        <button type="button" class="st-btn st-btn--destructive st-btn--md" disabled>
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Disabled</span>
        </button>
        <span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
        <span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
      </div>

      <div class="st-callout st-callout--info st-callout--subtle" role="status">
        <svg class="st-callout__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
        <div class="st-callout__content">
          <div class="st-callout__title">Heads up</div>
          <div class="st-callout__body">Same tokens as the React layer.</div>
        </div>
      </div>

      <div class="st-input-wrapper st-input-wrapper--md">
        <input type="text" placeholder="Error state via aria-invalid" class="st-input" aria-invalid="true" aria-label="input-error" />
      </div>
    </div>
  </main>
</template>
