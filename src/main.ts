<<<<<<< HEAD
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.min';
=======
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
import "bootstrap/dist/js/bootstrap.min";
>>>>>>> 40febaa488bc06af23898befa6e37997d951c57b
