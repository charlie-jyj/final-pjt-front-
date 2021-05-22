import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accounts'
import movies from './modules/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    accounts, movies,
  }
})
