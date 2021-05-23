<template>
  <div class="container movie-rate-list">
    <MovieRate v-for="(rate, index) in MovieDetailRates" :key="index" :rate="rate"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MovieRate from '@/components/movies/MovieRate.vue'
export default {
  name: 'MovieRateList',
  components: {
    MovieRate,
  },
  computed: {
    ...mapGetters(['MovieDetailRates'])
  }
}
</script>

<style scoped>
  .movie-rate-list{
    height: 45vh;
    overflow: auto;
  }
</style>