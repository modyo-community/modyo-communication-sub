import Vue from 'vue';
import Mitt from 'mitt';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './vee-validate-config';
import './vue-fontawesome-config';
import 'bootstrap';
import './scss/custom.scss';

window.mitt = window.mitt || new Mitt();

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#my-widget');
