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
            <AllMovieList/>
          </div>
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

export default {
  name: 'MoviePage',
  components: {
    SeriesMovieList, AllMovieList
  },
  methods: {
    ...mapActions(['getMovieSeries', 'getAllMovies'])
  },
  created(){
    this.getMovieSeries()
    this.getAllMovies()
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
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