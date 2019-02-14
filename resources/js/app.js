
// require('./bootstrap');
import VueRouter from 'vue-router';

window.Vue = require('vue');
Vue.use(VueRouter);

import router from './routes';

// Vue.component('home', require('./views/HomeComponent.vue').default);

const app = new Vue({
    el: '#app',
    router
});
