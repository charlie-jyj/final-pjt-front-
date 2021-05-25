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
  autoComplete:[],
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
 },
 AutoCompleteList(state){
   return state.autoComplete
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
 },
 AUTO_COMPLETE(state, autoComplete){
   state.autoComplete = autoComplete
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

    // 다른 사람들의 rates (detail에 포함될 것)
    const rates = [
      {user:{pk:1,username:'유진', nickname:'유진'}, rate:4, comment:'재미있어요'},
      {user:{pk:2,username:'재명', nickname:'재명'}, rate:1, comment:'별론데요'},
      {user:{pk:3,username:'선혜', nickname:'선혜'}, rate:5, comment:'좋아요'},
    ]

    context.commit('SET_DETAIL_RATES', rates)

    // like를 판별하여 여기서 set 하자 
    const movie_to_see = context.getters.MovieToSee
    const like = movie_to_see.some(item=>{
      return item.id == movie.pk
    })
    context.commit('SET_MOVIE_LIKE', like)
    
  },
  createMovieRate(context, data){
    //axios accounts/<int:movie_pk>/rated_movie/ (post) (login)
    // 평가 작성 후 showMovieDetail ****
    console.log(context, data)
  },
  deleteMovieRate(context,movie_pk){
    console.log(context, movie_pk)
    //axios accounts/<int:movie_pk>/rated_movie/ (delete)
    // 평가 삭제 후 showMovieDetail ****
  },
  likeMovie(context){
    // accounts/<int:movie_pk>/movie_to_see/ (post) (login)
    // response 로 오는 t/f 값을 갱신
    console.log('이 영화 좋아요',context)
    const like = true
    context.commit('SET_MOVIE_LIKE', like)
  },
  autoComplete(context, input){
    console.log(context, input)
    // axios로 input 값에 대해 요청을 보낸다
    // movies/auto/<str:keyword>/ (get)
    // response = [{title}]
    const response = [
      {title:'ironman1'},
      {title:'ironman2'},
      {title:'ironman3'},
      {title:'ironman4'},
  ] 
    const autoComplete = []
    response.forEach(item => autoComplete.push(item.title))

    context.commit('AUTO_COMPLETE', autoComplete)
  },
  searchMovie(context, search){
    console.log(context, search)
    // axios 로 검색 값을 넣어 요청을 보낸다
    // movies/serach/<str:keyword>/ (get)
    // output: [ {id, title, poster_path, overview, series:{id,name}} ]
    // 영화 목록을 받게 된다
    const searchResult = [{
      "model": "movies.movie",
      "pk": 1,
      "fields": {
        "title": "쇼생크 탈출",
        "overview": "촉망받는 은행 간부 앤디 듀프레인은 아내와 그녀의 정부를 살해했다는 누명을 쓴다. 주변의 증언과 살해 현장의 그럴듯한 증거들로 그는 종신형을 선고받고 악질범들만 수용한다는 지옥같은 교도소 쇼생크로 향한다. 인간 말종 쓰레기들만 모인 그곳에서 그는 이루 말할 수 없는 억압과 짐승보다 못한 취급을 당한다. 그러던 어느 날, 간수의 세금을 면제받게 해 준 덕분에 그는 일약 교도소의 비공식 회계사로 일하게 된다. 그 와중에 교도소 소장은 죄수들을 이리저리 부리면서 검은 돈을 긁어 모으고 앤디는 이 돈을 세탁하여 불려주면서 그의 돈을 관리하는데...",
        "poster_path": "https://image.tmdb.org/t/p/w500//3hO6DIGRBaJQj2NLEYBMwpcz88D.jpg"
      }
    },
    {
      "model": "movies.movie",
      "pk": 2,
      "fields": {
        "title": "대부",
        "overview": "시실리에서 이민온 뒤, 정치권까지 영향력을 미치는 거물로 자리잡은 돈 꼴레오네는 갖가지 고민을 호소하는 사람들의 문제를 해결해주며 대부라 불리운다. 한편 솔로소라는 인물은 꼴레오네가와 라이벌인 탓타리아 패밀리와 손잡고 새로운 마약 사업을 제안한다. 돈 꼴레오네가 마약 사업에 참여하지 않기로 하자, 돈 꼴레오네를 저격해 그는 중상을 입고 사경을 헤매게 된다. 그 뒤, 돈 꼴레오네의 아들 소니는 조직력을 총 동원해 다른 패밀리들과 피를 부르는 전쟁을 시작하는데... 가족의 사업과 상관없이 대학에 진학한 뒤 인텔리로 지내왔던 막내 아들 마이클은 아버지가 총격을 당한 뒤, 아버지를 구하기 위해 위험천만한 협상 자리에 나선다.",
        "poster_path": "https://image.tmdb.org/t/p/w500//cOwVs8eYA4G9ZQs7hIRSoiZr46Q.jpg"
      }
    },
    {
      "model": "movies.movie",
      "pk": 3,
      "fields": {
        "title": "라야와 마지막 드래곤",
        "overview": "인간과 드래곤이 평화롭게 공존하던 신비의 땅, 쿠만드라 왕국. 악의 세력 드룬이 들이닥치자, 드래곤들은 인간을 구하기 위해 스스로를 희생하고 사라진다. 500년 후 부활한 드룬이 세상을 공포에 빠뜨리자, 전사 라야는 분열된 쿠만드라를 구하기 위해 전설 속 마지막 드래곤을 찾아 모험을 떠난다. 라야는 험난한 여정을 겪으며 세상을 구하기 위해서는 전설 속 드래곤보다 더 중요한 것이 있다는 것을 깨닫게 되는데…",
        "poster_path": "https://image.tmdb.org/t/p/w500//hGo2Pb4duC9V9i5etZrENoI1iBQ.jpg"
      }
    },]

    // state 를 신규 리스트로 갱신한다.
    context.commit('SET_ALL_MOVIES', searchResult)
  }
}

export default {
  state, getters, mutations, actions
}