// import axios from 'axios'
// import DRF from '@/api/drf.js'
// import router from '@/router/index.js'
// import cookies from 'vue-cookies'
import movies from '@/assets/movieList.js'

const state = {
  series:[],
}

const getters = {
 MovieSeries(state) {
   return state.series
 }
}

const mutations = {
 SET_MOVIE_SERIES(state, series){
   state.series = series
 }
}

const actions = {
  setMovieSeries(context, series){
    context.commit('SET_MOVIE_SERIES', series)
  },
  getMovieSeries(context){
    // movie page 에 접속하면 실행될 것
    // axios 통해서 accounts/profile/series/ (get)
    const series = movies
    context.commit('SET_MOVIE_SERIES', series)
  }
}

export default {
  state, getters, mutations, actions
}