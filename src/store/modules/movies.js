import axios from 'axios'
import DRF from '@/api/drf.js'
// import _ from 'lodash'
// import router from '@/router/index.js'
// import cookies from 'vue-cookies'
// import movies from '@/assets/movieList.js'

const state = {
  series:[],
  all: [],
  detail: {},
  rates: [],
  like: true,
  autoComplete:[],
  step2Ready: false,
  moviepage:1,
  moviesForSurvey:[],
}

const getters = {
 MovieSeries(state) {
   return state.series
 },
 AllMovies(state) {
   return state.all
 },
 Step2Ready(state){
  return state.step2Ready
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
 },
 AutoCompleteList(state){
   return state.autoComplete
 },
 MoviePage(state){
   return state.moviepage
 },
 MoviesForSurvey(state){
  return state.moviesForSurvey
}
}

const mutations = {
 SET_MOVIE_SERIES(state, series){
   state.series = series
 },
 SET_ALL_MOVIES(state, all){
   all.forEach(movie => {
     state.all.push(movie)
   })
 },
 SET_MOVIE_DETAIL(state, movie){
   state.detail = movie
 },
 SET_DETAIL_RATES(state, rates){
  state.rates = rates
 },
 SET_MOVIE_LIKE(state, like){
   console.log('set', like)
   state.like = like
 },
 AUTO_COMPLETE(state, autoComplete){
   state.autoComplete = autoComplete
 },
 SET_STEP2(state, bool){
   state.step2Ready=bool
 },
 ADD_PAGE(state, page){
   state.moviepage = page
 },
 SEARCH_MOVIES(state,searchResult){
  state.all = searchResult
 },
 SET_SURVEY_MOVIES(state, movies){
  movies.forEach(movie => {
    state.moviesForSurvey.push(movie)
  })
 }
}
const actions = {
  setMovieSeries(context, series){
    context.commit('SET_MOVIE_SERIES', series)
  },
  getSurveyMovies(context){
    [1,2,3,4,5].forEach(number => {
      axios({
        method: 'get',
        url: DRF.URL + DRF.ROUTES.allMovies,
        headers: context.getters.config,
        params:{page:number}
      })
        .then(res => {
          console.log('?????? ??????', res.data)
          const all = res.data
          context.commit('SET_SURVEY_MOVIES', all)
        })
        .then(data => {
          console.log(data)
          context.dispatch('setStep2', true)
        })
        .catch(err => console.log(err))  
    })
  },
  getMovieSeries(context){
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.series,
      headers: context.getters.config,
    })
      .then(res => {
        console.log('get ?????????,', res.data)     
        const series = res.data
        context.commit('SET_MOVIE_SERIES', series)
        return res.data
      })
      .catch(err => console.log(err))
  },
  setStep2(context, bool){
    context.commit('SET_STEP2', bool)
  },
  getAllMovies(context){
    const page = context.getters.MoviePage
    console.log('????????? ?????????', page , typeof(page))

    if(page>0){
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.allMovies,
      headers: context.getters.config,
      params:{page:page}
    })
      .then(res => {
        console.log('?????? ??????', res.data)
        const all = res.data
        context.commit('SET_ALL_MOVIES', all)
      })
      .then(data => {
        console.log(data)
        context.dispatch('setStep2', true)
      })
      .catch(err => console.log(err)) 
    }   
  },
  showMovieDetail(context, movie){
    const movie_pk = movie.id
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.movieDetail(movie_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('movie detail,', res.data)

        const movieDetail = res.data
        context.commit('SET_MOVIE_DETAIL', movieDetail)

        const rates = movieDetail.rates
        context.commit('SET_DETAIL_RATES', rates)

        // like??? ???????????? ????????? set ?????? 
        context.dispatch('getProfile')
      })
      .catch(err => console.log(err))
  },
  createMovieRate(context, pack){
    console.log(DRF.URL + DRF.ROUTES.rate(pack.movie_pk),)
    axios({
      method: 'post',
      url: DRF.URL + DRF.ROUTES.rate(pack.movie_pk),
      headers: context.getters.config,
      data: pack.data,
    })
      .then(res => {
        console.log('comment create', res.data)
      
        // ?????? ?????? ??? showMovieDetail
        context.dispatch('showMovieDetail', {id:pack.movie_pk})
      })
      .catch(err => console.log(err))
  },
  deleteMovieRate(context,movie_pk){
    console.log(context, movie_pk)
    axios({
      method: 'delete',
      url: DRF.URL + DRF.ROUTES.rate(movie_pk),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('comment delete', res.data)   
        // ?????? ?????? ??? showMovieDetail
        context.dispatch('showMovieDetail', {id:movie_pk})
      })
      .catch(err => console.log(err))
  },
  likeMovie(context, movie_pk){
    // accounts/<int:movie_pk>/movie_to_see/ (post) (login)
    axios({
      method: 'post',
      url: DRF.URL + DRF.ROUTES.movieLike(movie_pk),
      headers: context.getters.config,
    })
      .then(res => {
        const like = res.data.detail? true:false
        console.log('movie like:', like)
        context.commit('SET_MOVIE_LIKE', like)
      })   
      .catch(err => console.log(err)) 
  },
  autoComplete(context, input){
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.search(input),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('????????????', res.data)
        const response = res.data
        const autoComplete = []
        response.forEach(item => autoComplete.push(item.title))
        context.commit('AUTO_COMPLETE', autoComplete)
      })  
      .catch(err => console.log(err))
  },
  searchMovie(context, search){
    console.log(context, search,DRF.URL + DRF.ROUTES.search(search) )
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.search(search),
      headers: context.getters.config,
    })
      .then(res => {
        console.log('????????????', res.data)
        const searchResult = res.data
        // state ??? ?????? ???????????? ????????????.
        context.commit('SEARCH_MOVIES', searchResult)
        // page??? ?????? ?????????..?
        context.dispatch('addPage', -1)
      }) 
      .catch(err => console.log(err))
  },
  addPage(context, page){
    console.log('????????? ??????', page)
    context.commit('ADD_PAGE', page)
  }
}

export default {
  state, getters, mutations, actions
}