// import axios from 'axios'
// import DRF from '@/api/drf.js'
import router from '@/router/index.js'
import cookies from 'vue-cookies'

const state = {
 token: cookies.get('user-token'),
 MovieSurvey: [],
 favorite: 0,
 characterSurvey: [],
 nickname: '유진',
 movieToSee : [{id:1},{id:2}],
 username:'',
 userImg: '',
 movieSchedule: [],
}

const getters = {
 isAuthenticated(state){
   return state.token? true: false
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
 }
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
 }
}

const actions = {
 createUser(context, signupInfo) {
  console.log(context, signupInfo)
  // 1. axios 로 통신해서 auth/registration/ 로 username, password1, password2 보낼 것 
  // response로 key 발급받으면 일단 cookie에 저장해둔다
  const token = '12345'
  context.commit('SET_TOKEN', token)
  cookies.set('user-token', '12345', '1d')
 },
 rateWatchedMovie(context, data){
   console.log(context, data)
   // 영화를 평가한 데이터를 누적시킬 것
   context.commit('SAVE_MOVIE_RATE', data)
 },
 getMovieSurvey(context){
  console.log(context)
  // 2. axios 로 series: 'accounts/profile/series/', (patch) 로 누적된 영화 평가 데이터를 
  //body 에 담아서 보내면 질문 목록을 받을 것
  context.state.favorite = 1

  const questions = ['',
  '당신은 수트를 즐겨입나요?',
  '당신은 힘이 센가요?',
  '당신은 부자인가요?',
  '당신은 마법을 믿는 편인가요?',
  '당신은 사회적 지위가 높은 편인가요?',
  '당신은 애국심이 높은 편인가요?',
  '당신은 희소자원을 많이 가지고 있나요?',
  '블랙위도우',
  '닥터스트레인지',
  '헐크',
  '토르',
  '앤트맨',
  '캡틴아메리카',
  '아이언맨',
  '블랙팬서',]

  context.commit('SET_CHARACTER_SURVEY', questions)  // 질문 내용을 state에 담아 사용한다.

  // series: 'accounts/profile/series/', 로 get 요청을 보내면 영화 추천 목록을 받는다.\
  // movies의 getMovieSeries action을 호출하여 일을 위임하자
  context.dispatch('getMovieSeries')

 },
 setNickname(context, data){
  // axios 로 결정된 nickname을 전달한다.accounts/profile/character/
  // request nickname, image url 보내야 **** 중요중요
  context.commit('SET_NICKNAME', data.nickname)
 },


 login(context, loginInfo){
  console.log(context, loginInfo)
   // axios 로 login rest-auth/login/ username, password 전달
   // response 로 jwt token 이 날아올테니 저장하자
  const token = '12345'
  context.commit('SET_TOKEN', token)
  cookies.set('user-token', '12345', '1d')

  context.dispatch('getProfile')
  
  router.push({name:'MoviePage'})
 },
 getProfile(context){
  // 이 시점에 accounts/profile/ (get) 하면 
  // id, username, nickname, user_img, movie_to_see, rated_movies
  // context.commit('SET_MOVIE_TO_SEE', movie_to_see)
  // context.commit('SET_RATED_MOVIES', rated_movies)
  context.commit('SET_NICKNAME', '유진') // nickname도 저장해두자 두고두고 쓸 것
  context.commit('SET_USERNAME', 'jtree20@naver.com') // username
  context.commit('SET_USER_IMG', 'https://images.indianexpress.com/2019/04/cat_759getty.jpg') // user img
 },
 getMovieSchedule(context, data){
   console.log('get schedule',context, data)
   // accounts/profile/schedule/ (get)
   // data를 body에 담아서 request
   // response data 에 date, movies.title 추출해서 가공
   const schedule = [
    { title: '아이언맨', date: '2021-05-25' },
    { title: '아이언맨2', date: '2021-05-25' },
    { title: '해리포터', date: '2021-05-26' }
  ]

  context.commit('SET_MOVIE_SCHEDULE', schedule)

 }
}

export default {
  state, getters, mutations, actions
}