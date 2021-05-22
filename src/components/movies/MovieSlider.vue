<template>
  <div class="mt-1">
    <splide @splide:click="slideClick" :options="options">
      <splide-slide v-for="(movie, index) in MovieSeries" :key="index">
        <img src="https://i.insider.com/5ca3ba3792c88606ce34b614?width=700&format=jpeg&auto=webp" alt="" style='height: 100%; width: 100%; object-fit: contain'>
        <div><p class="text-center">{{movie.title}}</p></div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  name: 'MovieSlider',
  computed: {
    ...mapGetters(['MovieSeries'])
  },
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        perPage: 3,
        gap: '1rem',
      }
    }
  },
  methods: {
    slideClick(splide) {
      console.log(splide.index)
    }
  }
}
</script>

<style scoped>


</style>