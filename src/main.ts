import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './main.scss';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

createApp(App).use(router).mount('#app');
