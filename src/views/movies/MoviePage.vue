<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="movie-list-wrapper">
          <div v-if="isAuthenticated" class="series-wrapper">
            <p class="h4">추천 영화</p>
            <SeriesMovieList/>
          </div>
          <div class="all-movies-wrapper">
            <p class="h4">우리의 영화</p>
            <MovieSearch/>
            <AllMovieList/>
          </div>
          <MovieDetail/>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import SeriesMovieList from '@/components/movies/SeriesMovieList.vue'
import AllMovieList from '@/components/movies/AllMovieList.vue'
import MovieDetail from '@/components/movies/MovieDetail.vue'
import MovieSearch from '@/components/movies/MovieSearch.vue'

export default {
  name: 'MoviePage',
  components: {
    SeriesMovieList, AllMovieList, MovieDetail, MovieSearch
  },
  methods: {
    ...mapActions(['getMovieSeries', 'getAllMovies']),
    scroll(){

      if(this.CurrentPage === 1){
       window.onscroll = () => {
          if (Math.ceil(window.pageYOffset+window.innerHeight) === document.documentElement.offsetHeight){
            console.log('end')
            const current = this.MoviePage
            this.$store.dispatch('addPage', current+1)
            this.getAllMovies()

          }  
      }
      }
    }
  },
  created(){
    this.getMovieSeries()
    this.getAllMovies()
    console.log('나지금1페이지')
    this.$store.dispatch('currentPage', 1)
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'MoviePage', 'CurrentPage'])
  },
  mounted(){
    this.scroll()
  }
}
</script>

<style scoped>
  .movie-list-wrapper {
    margin-top: 8rem;
  }

  .all-movies-wrapper {
    margin-top: 8rem;
  }

</style>