// import axios from 'axios'
// import DRF from '@/api/drf.js'
import router from '@/router/index.js'
import cookies from 'vue-cookies'

const state = {
 token: cookies.get('user-token'),
 signupMovieList: [],
 MovieSurvey: [],
 favorite: 0,
 characterSurvey: [],
 nickname: '',
}

const getters = {
 isAuthenticated(state){
   return state.token? true: false
 },
 SignupMovieList(state){
   return state.signupMovieList
 },
 MovieRateCount(state){
  return state.MovieSurvey.length
 },
 CharacterSurvey(state){
   return state.characterSurvey
 },
 Nickname(state){
   return state.nickname
 }
}

const mutations = {
 SET_TOKEN(state, token){
   state.token = token
 },
 SET_SIGNUP_MOVIELIST(state,movieList){
   state.signupMovieList = movieList
 },
 SAVE_MOVIE_RATE(state,data){
   // 저장 전에 별점을 변경했는지 확인해봐야
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
 }
}

const actions = {
 createUser(context, signupInfo) {
  console.log(context, signupInfo)
  // axios 로 통신해서 auth/registration/ 로 username, password1, password2 보낼 것 
  // response로 key 발급받으면 일단 cookie에 저장해둔다
  const token = '12345'
  context.commit('SET_TOKEN', token)
  cookies.set('user-token', '12345', '1d')
 },
 getSignUpMovieList(context) {
   console.log(context)
   console.log('설문조사용 영화를 가져올게')
   // axios로  movies/ 에 get 요청을 하면 모든 영화 정보를 가져올 것 (페이지네이션 offset 적용)
   // server랑 연결 한 후에 무한 스크롤 적용하면 될 것 같다.

   const movieList = [
    {pk: 1, title:'아이언맨', poster_path:'https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp'},
    {pk: 2, title:'토르', poster_path:'https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp'},
    {pk: 3, title:'닥터스트레인지', poster_path:'https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp'},
    {pk: 4, title:'캡틴아메리카', poster_path:'https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp'},
    {pk: 5, title:'헐크', poster_path:'https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp'},
   ]

   context.commit('SET_SIGNUP_MOVIELIST', movieList)
 },
 rateWatchedMovie(context, data){
   console.log(context, data)
   // 영화를 평가한 데이터를 누적시킬 것
   context.commit('SAVE_MOVIE_RATE', data)
 },
 getMovieSeries(context){
  console.log(context)
  // axios 로 accounts/profile/series/ 에 MovieSurvey와 함께 get 요청을 보낸다.
  // response를 통해 어떤 시리즈를 선호하는지, 추천 영화 목록은 무엇인지 알게 될 것
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

  context.commit('SET_CHARACTER_SURVEY', questions)

  const series = [
    {pk: 1, title:'해리포터와 마법사의 돌', poster_path:'https://lh3.googleusercontent.com/proxy/i5U6vnPfbgrwy7U6MVnp8bDnT_PhljOKETE9L3wvuApNBdMow_tl7AGvxRYtbL1SrF0Mvaz_8Ae692t4Y3hXMf0MEQ1YRbFkr-KMJaXwUyuC7UQ7MeITo2nAS3XA-yqBLvtt9xG8oI4KYwxQG0pwKhZkrpOVoDNdcn-XMfBNANUkMbYZtv62Dc6WJcDmqi8cYPneCZZksbYIZmwCBRAVa1qW7t8wuP6zMA69EmKvI-JvvqYGAmEtYfcpaoTByXfuqataUVhtjddh01EQ2kLG5a8nwalYF-9ZnbUP5QY_ChLXTEfDKoKgsvdK5o0hz4AdjA771mqaPlTHjf02sD3JqrEBL9ldGcsQ'},
    {pk: 2, title:'해리포터와 비밀의 방', poster_path:'https://lh3.googleusercontent.com/proxy/i5U6vnPfbgrwy7U6MVnp8bDnT_PhljOKETE9L3wvuApNBdMow_tl7AGvxRYtbL1SrF0Mvaz_8Ae692t4Y3hXMf0MEQ1YRbFkr-KMJaXwUyuC7UQ7MeITo2nAS3XA-yqBLvtt9xG8oI4KYwxQG0pwKhZkrpOVoDNdcn-XMfBNANUkMbYZtv62Dc6WJcDmqi8cYPneCZZksbYIZmwCBRAVa1qW7t8wuP6zMA69EmKvI-JvvqYGAmEtYfcpaoTByXfuqataUVhtjddh01EQ2kLG5a8nwalYF-9ZnbUP5QY_ChLXTEfDKoKgsvdK5o0hz4AdjA771mqaPlTHjf02sD3JqrEBL9ldGcsQ'},
    {pk: 3, title:'해리포터와 아즈카반의 죄수', poster_path:'https://lh3.googleusercontent.com/proxy/i5U6vnPfbgrwy7U6MVnp8bDnT_PhljOKETE9L3wvuApNBdMow_tl7AGvxRYtbL1SrF0Mvaz_8Ae692t4Y3hXMf0MEQ1YRbFkr-KMJaXwUyuC7UQ7MeITo2nAS3XA-yqBLvtt9xG8oI4KYwxQG0pwKhZkrpOVoDNdcn-XMfBNANUkMbYZtv62Dc6WJcDmqi8cYPneCZZksbYIZmwCBRAVa1qW7t8wuP6zMA69EmKvI-JvvqYGAmEtYfcpaoTByXfuqataUVhtjddh01EQ2kLG5a8nwalYF-9ZnbUP5QY_ChLXTEfDKoKgsvdK5o0hz4AdjA771mqaPlTHjf02sD3JqrEBL9ldGcsQ'},
    {pk: 4, title:'해리포터와 불의 잔', poster_path:'https://lh3.googleusercontent.com/proxy/i5U6vnPfbgrwy7U6MVnp8bDnT_PhljOKETE9L3wvuApNBdMow_tl7AGvxRYtbL1SrF0Mvaz_8Ae692t4Y3hXMf0MEQ1YRbFkr-KMJaXwUyuC7UQ7MeITo2nAS3XA-yqBLvtt9xG8oI4KYwxQG0pwKhZkrpOVoDNdcn-XMfBNANUkMbYZtv62Dc6WJcDmqi8cYPneCZZksbYIZmwCBRAVa1qW7t8wuP6zMA69EmKvI-JvvqYGAmEtYfcpaoTByXfuqataUVhtjddh01EQ2kLG5a8nwalYF-9ZnbUP5QY_ChLXTEfDKoKgsvdK5o0hz4AdjA771mqaPlTHjf02sD3JqrEBL9ldGcsQ'},
    {pk: 5, title:'해리포터와 불사조 기사단', poster_path:'https://lh3.googleusercontent.com/proxy/i5U6vnPfbgrwy7U6MVnp8bDnT_PhljOKETE9L3wvuApNBdMow_tl7AGvxRYtbL1SrF0Mvaz_8Ae692t4Y3hXMf0MEQ1YRbFkr-KMJaXwUyuC7UQ7MeITo2nAS3XA-yqBLvtt9xG8oI4KYwxQG0pwKhZkrpOVoDNdcn-XMfBNANUkMbYZtv62Dc6WJcDmqi8cYPneCZZksbYIZmwCBRAVa1qW7t8wuP6zMA69EmKvI-JvvqYGAmEtYfcpaoTByXfuqataUVhtjddh01EQ2kLG5a8nwalYF-9ZnbUP5QY_ChLXTEfDKoKgsvdK5o0hz4AdjA771mqaPlTHjf02sD3JqrEBL9ldGcsQ'},
   ]
   context.dispatch('setMovieSeries', series)

 },
 setNickname(context, nickname){
  // axios 로 결정된 nickname을 전달한다.accounts/profile/character/
  context.commit('SET_NICKNAME', nickname)
 },
 login(context, loginInfo){
  console.log(context, loginInfo)
   // axios 로 login rest-auth/login/ username, password 전달
   // response 로 jwt token 이 날아올테니 저장하자
  const token = '12345'
  context.commit('SET_TOKEN', token)
  cookies.set('user-token', '12345', '1d')

  router.push({name:'MoviePage'})
 }
}

export default {
  state, getters, mutations, actions
}