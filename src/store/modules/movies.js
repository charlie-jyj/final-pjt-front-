import axios from 'axios'
import DRF from '@/api/drf.js'
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
 }
}
const actions = {
  setMovieSeries(context, series){
    context.commit('SET_MOVIE_SERIES', series)
  },
  getMovieSeries(context){
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.series,
      headers: context.getters.config,
    })
      .then(res => {
        console.log('get 시리즈,', res.data)     
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
    console.log('가져올 페이지', page , typeof(page))
    axios({
      method: 'get',
      url: DRF.URL + DRF.ROUTES.allMovies,
      headers: context.getters.config,
      params:{page:page}
    })
      .then(res => {
        console.log('모든 영화', res.data)
        const all = res.data
        context.commit('SET_ALL_MOVIES', all)
      })
      .then(data => {
        console.log(data)
        context.dispatch('setStep2', true)
      })
      .catch(err => console.log(err))    
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

        // like를 판별하여 여기서 set 하자 
        context.dispatch('getProfile')
        const movie_to_see = context.getters.MovieToSee
        console.log('찜',movie_to_see)
        const like = movie_to_see.some(item=>{
          return item.id === movieDetail.movie.id
        })
        console.log(like)
        context.commit('SET_MOVIE_LIKE', like)
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
      
        // 평가 작성 후 showMovieDetail
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
        // 평가 삭제 후 showMovieDetail
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
        console.log('자동완성', res.data)
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
        console.log('영화검색', res.data)
        const searchResult = res.data
        // state 를 신규 리스트로 갱신한다.
        context.commit('SET_ALL_MOVIES', searchResult)
      }) 
      .catch(err => console.log(err))
  },
  addPage(context, page){
    console.log('페이지 추가', page)
    context.commit('ADD_PAGE', page)
  }
}

export default {
  state, getters, mutations, actions
}