export default {
  URL: 'https://movie-pick.com/',
  ROUTES: {
    // account
    signup: 'rest-auth/registration/',
    nickname: 'accounts/profile/character/',
    login: 'rest-auth/login/',
    logout: 'rest-auth/logout/',
    schedule: 'accounts/profile/schedule/',
    profile: 'accounts/profile/',

    // movie
    series: 'accounts/profile/series/',
    allMovies: 'movies/',
    movieDetail(pk){
      return `movies/${pk}/`
    },
    rate(pk){
      return `accounts/${pk}/rated_movie/`
    },
    movieLike(pk){
      return `accounts/${pk}/movie_to_see/`
    },
    auto(keyword){
      return `movies/auto/${keyword}/`
    },
    search(keyword){
      return `movies/search/${keyword}/`
    },
    // community
    reviews: 'community/',
    reviewUpdateDelete(review_pk){
      return `community/${review_pk}/`
    },
    top5: 'community/top5/',
    reviewDetail(pk){
      return `community/${pk}/`
    },
    reviewLike(pk){
      return `community/${pk}/like/` 
    },
    comment(pk){
      return `community/${pk}/comment/`
    },
    commentUpdateDelete(review_pk, comment_pk){
      return `community/${review_pk}/comment/${comment_pk}/`
    }
   
  }
}