export default {
  URL: 'http://127.0.0.1:8000/',
  ROUTES: {
    signup: 'rest-auth/registration/',
    allMovies: 'movies/',
    detail(pk){
      return `movies/${pk}/`
    },
    rate(pk){
      return `accounts/${pk}/rated_movie/`
    },
    like: 'accounts/<int:movie_pk>/movie_to_see/',
    auto(keyword){
      return `movies/auto/${keyword}/`
    },
    search(keyword){
      return `movies/serach/${keyword}/`
    },
    series: 'accounts/profile/series/',
    nickname: 'accounts/profile/character/',
    login: 'rest-auth/login/',
   
  }
}