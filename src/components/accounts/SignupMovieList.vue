<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="movie-list-wrapper">
          <div class='banner d-flex justify-content-center align-items-center'>
            <p class="mb-0">봤던 영화 중에 좋아하는 영화, 이 중에 있나요?</p>
          </div>
          <div class="movie-list">
            <SignupMovie v-for="(movie, index) in AllMovies" :key="index" :movie="movie"/>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-7">
        <p v-if="MovieRateCount"><span v-text="MovieRateCount"></span>개의 영화를 평가했어요.</p>
      </div>
      <div class="col-3">
         <div class="d-grid gap-2 mx-auto mt-2">
              <button @click="completeMovieSurvey" class="btn btn-next" type="button">NEXT</button>
          </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import SignupMovie from '@/components/accounts/SignupMovie.vue'

export default {
  name: 'SignupMovieList',
  components: {
    SignupMovie
  },
  methods: {
    ...mapActions(['getMovieSurvey',]),
    completeMovieSurvey(){
      this.getMovieSurvey()
      this.$emit('complete-movie-survey')
    }
  },
  computed: {
    ...mapGetters(['AllMovies', 'MovieRateCount']),
  }
}
</script>

<style scoped>
  .movie-list {
    max-height: 60vh;
    overflow: auto;
  }

  .banner {
    height: 8vh;
    width: 100%;
    background-color: rgba(151, 157, 166, 0.8);
    color: white
  }

  .banner-text {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .movie-list-wrapper {
    height: 70vh;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  }

  .btn-next {
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-next:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }
</style>