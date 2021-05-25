import axios from 'axios'
import DRF from '@/api/drf.js'
import router from '@/router/index.js'
import cookies from 'vue-cookies'

const state = {
 token: cookies.get('user-token'),
 MovieSurvey: [],
 characterSurvey: [],
 nickname: cookies.get('nickname'),
 movieToSee : [],
 username:'',
 userImg: '',
 movieSchedule: [],
 ratedMovies: [],
}

const getters = {
 isAuthenticated(state){
   return state.token? true: false
 },
 MovieSurvey(state){
  return state.MovieSurvey
 },
 MovieRateCount(state){
  return state.MovieSurvey.length
 },
 CharacterSurvey(state){
   return state.characterSurvey
 },
 Nickname(state){
   return state.nickname
 },
 MovieToSee(state){
   return state.movieToSee
 },
 Username(state){
   return state.username
 },
 UserImg(state){
   return state.userImg
 },
 MovieSchedule(state){
   return state.movieSchedule
 },
 config: state => {
   return {Authorization: `JWT ${state.token}`}
  },
}

const mutations = {
 SET_TOKEN(state, token){
   state.token = token
 },
 SAVE_MOVIE_RATE(state,data){
   // 기존에 평가했던 항목이라면 update 처리한다
   const old = state.MovieSurvey
   let flag = true
   old.map(item => {
     if(item.movie_id === data.movie_id) {
      item.rate = data.rate
      flag = false
     }
   })
   if(flag) {
     state.MovieSurvey.push(data)
   }
 },
 SET_CHARACTER_SURVEY(state, questions){
  state.characterSurvey = questions
 },
 SET_NICKNAME(state, nickname){
   state.nickname = nickname
 },
 SET_USERNAME(state, username){
   state.username = username
 },
 SET_USER_IMG(state,img){
  state.userImg = img
 },
 SET_MOVIE_SCHEDULE(state, schedule){
   state.movieSchedule = schedule
 },
 SET_MOVIE_TO_SEE(state, movieToSee){
   state.movieToSee = movieToSee
 },
 SET_RATED_MOVIES(state, ratedMovies){
   state.ratedMovies = ratedMovies
 }
}

const actions = {
 createUser(context, signupInfo) {
  axios({
    method: 'post',
    url: DRF.URL + DRF.ROUTES.signup,
    data: signupInfo
  })
    .then(res => {
      console.log('회원가입', res.data)
      const token = res.data.token
      context.commit('SET_TOKEN', token)
      cookies.set('user-token', token, '1d')
      return res.data
    })
    .then(data => {
      console.log(data)
      context.dispatch('getAllMovies')
    })
    .catch(err => console.log(err))

 },
 rateWatchedMovie(context, data){
   console.log(context, data)
   // 영화를 평가한 데이터를 누적시킬 것
   context.commit('SAVE_MOVIE_RATE', data)
 },
 getMovieSurvey(context){
  axios({
    method: 'patch',
    url: DRF.URL + DRF.ROUTES.series,
    headers: context.getters.config,
    data: context.getters.MovieSurvey,
  })
    .then(res => {
      console.log('설문조사 결과,', res.data)
      const questions = res.data
      context.commit('SET_CHARACTER_SURVEY', questions) 

      context.dispatch('getMovieSeries')
    })
    .catch(err => console.log(err))
 },
 setNickname(context, data){
  axios({
    method: 'patch',
    url: DRF.URL + DRF.ROUTES.nickname,
    headers: context.getters.config,
    data,
  })
    .then(res => {
      console.log(res)
      context.commit('SET_NICKNAME', data.nickname)
      context.commit('SET_USER_IMG', data.user_img)
      cookies.set('nickname', data.nickname, '1d')
    })
    .catch(err => console.log(err))
 },
 login(context, loginInfo){
   axios({
     method: 'post',
     url: DRF.URL + DRF.ROUTES.login,
     data: loginInfo,
   })
    .then(res => {
      console.log('login', res.data)

      const token = res.data.token
      context.commit('SET_TOKEN', token)
      cookies.set('user-token', token, '1d')
    
      context.dispatch('getProfile') // 프로필 호출 
      
      router.push({name:'MoviePage'}) 
    })
    .catch(err => console.log(err))
 },
 getProfile(context){
  axios({
    method: 'get',
    url: DRF.URL + DRF.ROUTES.profile,
    headers: context.getters.config,
  })
    .then(res => {
      console.log('get profile:', res.data)
      console.log(res.data.movie_to_see)
      context.commit('SET_MOVIE_TO_SEE', res.data.movie_to_see)
      context.commit('SET_RATED_MOVIES', res.data.rated_movies)
      context.commit('SET_NICKNAME', res.data.nickname) // nickname
      context.commit('SET_USERNAME', res.data.username) // username
      context.commit('SET_USER_IMG', res.data.user_img) // user img
    })
    .catch(err => console.log(err))
 },
 getMovieSchedule(context, data){
   // accounts/profile/schedule/ (get)
   // data를 body에 담아서 request
   console.log('schedule', data)
   axios({
     method: 'post',
     url: DRF.URL + DRF.ROUTES.schedule,
     headers: context.getters.config,
     data,
   })
    .then(res => {
      console.log('schedule res', res.data)
      const response = res.data
      const schedule = []  // response 가공
      response.forEach(item=>{
        const date = item.date
        const movies = item.movies
        if(movies){
        movies.forEach(movie => {
          const title = movie.title
          const item = {}
          item.date = date
          item.title = title
          schedule.push(item)
        })} // 안쪽 foreach
      }) // 바깥 foreach

      context.commit('SET_MOVIE_SCHEDULE', schedule)
    })
    .catch(err => console.log(err))
 },
 logout(context){
   axios({
     method: 'post',
     url: DRF.URL + DRF.ROUTES.logout,
     headers: context.getters.config,
   })
    .then(res => {
      console.log('로그아웃',res.data)
      cookies.remove('user-token')
      cookies.remove('nickname')
      router.push({name:'EntryPage'})
    })
 }
}

export default {
  state, getters, mutations, actions
}