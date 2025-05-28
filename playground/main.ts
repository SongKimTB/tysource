import { createApp } from 'vue';
import App from './App.vue';

// Minimal global styles for the playground itself, if any.
// Components imported from '@tbostest/ps-core' (which maps to 'src/')
// should bring their own styles or be bundled with the library's main CSS.
// This setup relies on Vite's HMR to pick up styles from 'src/'.

createApp(App).mount('#app');
