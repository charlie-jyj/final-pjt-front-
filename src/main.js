import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import VueSplide from '@splidejs/vue-splide';


Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use( VueSplide );

new Vue({
  router,
  store,
  VueCookies,
  VueSplide,
  render: h => h(App)
}).$mount('#app')
