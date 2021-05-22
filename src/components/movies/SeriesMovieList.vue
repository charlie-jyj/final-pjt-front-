<template>
  <div class="example-3d">
    <swiper @click-slide="handleClickSlide" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(movie, index) in MovieSeries" :key="index">
        <img :src="movie.fields.poster_path" alt="" style='height: 100%; width: 100%; object-fit: cover'>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 4,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          },
        }
      }
    },
    computed: {
      ...mapGetters(['MovieSeries'])
    },
    methods: {
      handleClickSlide(index) {
        console.log('Click slide!', index)
        this.showMovieDetail(index)
      },
      showMovieDetail(index){
        //Movie 객체 자체를 넘겨버리면.. Detail 에서 보여줄 수 있겠지요
        console.log(this.MovieSeries[index])
      }
    }
  }
</script>

<style scoped>
  .example-3d {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper { 
    height: 25rem; width: 100%;
    }

  .swiper .swiper-slide { 
    height: 23rem;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    font-weight: bold; } 
</style>