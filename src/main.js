import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import VueSplide from '@splidejs/vue-splide'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Autocomplete from '@trevoreyre/autocomplete-vue'


Vue.use(Autocomplete)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

const apiKey = '1e3e37a933ea0198d7ea7ae1da0fa756'
window.Kakao.init(apiKey)

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
