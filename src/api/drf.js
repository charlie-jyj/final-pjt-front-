export default {
  URL: 'http://127.0.0.1:8000/',
  ROUTES: {
    // account
    signup: 'rest-auth/registration/',
    nickname: 'accounts/profile/character/',
    login: 'rest-auth/login/',

    // movie
    series: 'accounts/profile/series/',
    allMovies: 'movies/',
    movieDetail(pk){
      return `movies/${pk}/`
    },
    rate(pk){
      return `accounts/${pk}/rated_movie/`
    },
    movieLike(){
      return `accounts/${pk}/movie_to_see/`
    },
    auto(keyword){
      return `movies/auto/${keyword}/`
    },
    search(keyword){
      return `movies/serach/${keyword}/`
    },

    // community
    reviews: 'community/ ',
    top5: 'community/top5/',
    reviewDetail(pk){
      return `community/${pk}/`
    },
    reviewLike(pk){
      return `community/${pk}/like/` 
    },
    comment(pk){
      return `community/${pk}/comment/`
    }
   
  }
}