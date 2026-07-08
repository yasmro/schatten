import { createApp } from 'vue'
// The whole framework-agnostic promise in one line: import the CSS bundle
// once at the app entry, then write `.st-*` class chains in any template.
// Per-component alternative (loads only Button's rules, ~1 KB) — see App.vue:
//   import '@yasmro/schatten/css/button'
import '@yasmro/schatten/schatten.css'
import App from './App.vue'

createApp(App).mount('#app')
