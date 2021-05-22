// import axios from 'axios'
// import DRF from '@/api/drf.js'
// import router from '@/router/index.js'
// import cookies from 'vue-cookies'
import movies from '@/assets/movieList.js'

const state = {
  series:[],
  all: [],
}

const getters = {
 MovieSeries(state) {
   return state.series
 },
 AllMovies(state) {
   return state.all
 }
}

const mutations = {
 SET_MOVIE_SERIES(state, series){
   state.series = series
 },
 SET_ALL_MOVIES(state, all){
   state.all = all
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
  },
  getAllMovies(context){
    console.log(context)
    // movie page 에 접속하면 실행될 것
    // axios 통해서 movies/
    const all = movies
    context.commit('SET_ALL_MOVIES', all)
  }
}

export default {
  state, getters, mutations, actions
}