<template>
  <swiper @click-slide="handleClickSlide" class="swiper" :options="swiperOption">
    <swiper-slide v-for="(movie, index) in MovieSeries" :key="index">
      <div class="movie-wrapper">
        <img :src="movie.poster_path" alt="" style='height: 100%; width: 100%; object-fit: contain'>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'
  import 'swiper/css/swiper.css'

  let vm = null
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
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
      }
    },
    computed: {
      ...mapGetters(['MovieSeries'])
    },
    created(){
      vm = this
      console.log(vm)
    },
    methods: {
      handleClickSlide(index, reallyIndex) {
        console.log('Click slide!', index, reallyIndex)
        this.showMovieDetail(reallyIndex)
      },
      showMovieDetail(index){
        //Movie 객체 자체를 넘겨버리면.. Detail 에서 보여줄 수 있겠지요
        console.log(this.MovieSeries[index])
        const signUpModalClose = document.querySelector('#signUpModalClose')
        signUpModalClose.click()
        this.$router.push({name:'MoviePage'})
      }
    }
  }
</script>

<style scoped>
  .movie-wrapper {
    width: 15rem;
    height: 30rem
  }
  .swiper { 
    height: 300px; width: 100%;
    }

  .swiper .swiper-slide 
  { display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    font-weight: bold; } 
</style>