import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './router/router.config.js';
import store from './store/index.js';
// import './assets/css/base.css';
// import './assets/css/mui.min.css';
// import './assets/css/loaders.min.css';
// import './assets/css/loading.css';
// import './assets/css/swiper.min.css';
// import './assets/js/rem.js';
// import './assets/js/jquery.min.js';
// import './assets/js/swiper.jquery.min.js';
// import 'font-awesome-webpack';
const router = new VueRouter({
	routes
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
