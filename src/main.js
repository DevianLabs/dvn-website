import Vue from 'vue';
import './plugins/vuex';
import { i18n } from './plugins/vue-i18n';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';
import './plugins/register-service-worker';
import './assets/styles/main.scss';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
});
