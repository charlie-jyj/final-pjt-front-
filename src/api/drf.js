export default {
  URL: 'http://127.0.0.1:8000/',
  ROUTES: {
    signup: 'rest-auth/registration/',
    allMovies: 'movies/',
    detail(pk){
      return `movies/${pk}/`
    },
    series: 'accounts/profile/series/',
    nickname: 'accounts/profile/character/',
    login: 'rest-auth/login/'
  }
}