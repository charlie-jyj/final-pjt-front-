// import axios from 'axios'
// import DRF from '@/api/drf.js'
// import router from '@/router/index.js'
// import cookies from 'vue-cookies'
import movies from '@/assets/movieList.js'

const state = {
  series:[],
  all: [],
  detail: {},
  rates: [],
  like: true,
}

const getters = {
 MovieSeries(state) {
   return state.series
 },
 AllMovies(state) {
   return state.all
 },
 MovieDetail(state){
   return state.detail
 },
 isMovieDetailReady(state){
   return Object.keys(state.detail).length >0 ? true : false
 },
 MovieDetailRates(state){
   return state.rates
 },
 MovieDetailLike(state){
   return state.like
 }
}

const mutations = {
 SET_MOVIE_SERIES(state, series){
   state.series = series
 },
 SET_ALL_MOVIES(state, all){
   state.all = all
 },
 SET_MOVIE_DETAIL(state, movie){
   state.detail = movie
 },
 SET_DETAIL_RATES(state, rates){
  state.rates = rates
 },
 SET_MOVIE_LIKE(state, like){
   state.like = like
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
  },
  showMovieDetail(context, movie){
    //axios movies/<int:movie_pk>/ (get) 
    // output: {id,title, poster_path, director, runtime, age_rate, main_actor, genre, country, release_year, overview, series:{id,name}}
       
    console.log(context, movie)
    context.commit('SET_MOVIE_DETAIL', movie)

    // 다른 사람들의 rates를 get 해오는 url 은 아직 모르겠다.
    const rates = [
      {user:{pk:1,username:'유진', nickname:'유진'}, rate:4, comment:'재미있어요'},
      {user:{pk:2,username:'재명', nickname:'재명'}, rate:1, comment:'별론데요'},
      {user:{pk:3,username:'선혜', nickname:'선혜'}, rate:5, comment:'좋아요'},
    ]

    context.commit('SET_DETAIL_RATES', rates)
    
  },
  createMovieRate(context, data){
    //axios accounts/<int:movie_pk>/rated_movie/ (post) (login)
    console.log(context, data)
  },
  likeMovie(context){
    // accounts/<int:movie_pk>/movie_to_see/ (post) (login)
    console.log('이 영화 좋아요',context)
    const like = true
    context.commit('SET_MOVIE_LIKE', like)
  }
}

export default {
  state, getters, mutations, actions
}