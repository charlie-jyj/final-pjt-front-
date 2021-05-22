<template>
  <div class="container mt-5">
    <div class="row row-cols-4">
        <Movie v-for="(movie, index) in AllMovies" :key="index" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Movie from '@/components/movies/Movie.vue'

export default {
  name: 'AllMovieList',
  components: {
    Movie,
  },
  computed: {
    ...mapGetters(['AllMovies'])
  }
}
</script>

<style>

</style>