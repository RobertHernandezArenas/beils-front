import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS JavaScript

AOS.init();

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.min';
