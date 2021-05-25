<template>
<div class="modal fade" id="movieDetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="movieDetailModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Movie Detail</h5>
        <button type="button" id="detailClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <!--영화 관련 정보들 서버 연결 후에 attribute 다 갈아끼워야 해~ 잊지말기-->
      <div class="modal-body" v-if="isMovieDetailReady">
        <div class="movie-img-background" :style="`background-image:url(${MovieDetail.movie.poster_path})`">
          <div class="movie-img">
            <div class="movie-poster" :style="`background-image:url(${MovieDetail.movie.poster_path})`"></div>
            <div class="movie-title">
              <p class="mb-0">{{MovieDetail.movie.title}}</p>
              <p class="movie-title-detail">{{MovieDetail.movie.release_year}}/{{MovieDetail.movie.country}}/{{MovieDetail.movie.genre}}</p>
            </div>
            <div class="movie-like">
              <button @click="likeMovie" class="btn">
                <i v-if="MovieDetailLike" class="fas fa-heart" style="color:red"></i>
                <i v-else class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <!--영화 이미지 끝-->

        <!--영화 평점 시작-->
        <div class="detail-mainboard">
          <div class="detail-rate">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <p class="border-bottom p-2">영화 평가</p>
                <MovieRateForm v-show="showRateForm" :rating="rating" :movie_pk="MovieDetail.movie.id"/>
                <div class="star d-flex justify-content-center">
                  <star-rating @rating-selected="popRateForm" v-model="rating" :increment="0.5" :show-rating="false"></star-rating>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
            
            <div class="detail-other-rate mt-5">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                  <p class="mt-2">평균 별점: {{ !MovieDetail.avg_rate.rate__avg? 0 : MovieDetail.avg_rate.rate__avg }}점 </p>
                  <MovieRateList/>
                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>
          
          <!--영화 평점 끝-->

          <!--영화 정보 시작-->
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="detail-movie-info">
                <p class="border-bottom p-2">줄거리</p>
                <div id="overviewWrapper" class="detail-movie-overview height-50">
                  <p id="overviewText" class="overflow-hidden">{{MovieDetail.movie.overview}}</p>
                </div>
                <div class="d-flex justify-content-end">
                  <button id="moreBtn" @click="expandOverview" class="btn btn-sm btn-outline-secondary mt-4 me-2" type="button">더보기</button>
                </div>
              </div>

              <div class="detail-movie-spec d-flex flex-row justify-content-evenly">
                <div class="spec-item">
                  <p class="spec-title">감독</p>
                  <p class="spec-detail">{{ MovieDetail.movie.director }}</p>
                </div>
                <div class="spec-item">
                  <p class="spec-title">상영시간</p>
                  <p class="spec-detail">{{ MovieDetail.movie.runtime }}분</p>
                </div>
                <div class="spec-item">
                  <p class="spec-title">관람등급</p>
                  <p class="spec-detail">{{ MovieDetail.movie.age_rate }}세</p>
                </div>
                <div class="spec-item">
                  <p class="spec-title">장르</p>
                  <p class="spec-detail">{{ MovieDetail.movie.genre }}</p>
                </div>
                <div class="spec-item">
                  <p class="spec-title">국가</p>
                  <p class="spec-detail">{{ MovieDetail.movie.country }}</p>
                </div>
                
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          
          
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-write" @click="goToReview">리뷰쓰기</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import StarRating from 'vue-star-rating'
import MovieRateForm from '@/components/movies/MovieRateForm.vue'
import MovieRateList from '@/components/movies/MovieRateList.vue'

export default {
  name: 'MovieDetail',
  components: {
    StarRating, MovieRateForm,MovieRateList
  },
  data(){
    return {
      rating: 0,
      showRateForm:false,
      before: 0,
      current: 0,
  
    }
  },
  computed:{
    ...mapGetters(['MovieDetail', 'isMovieDetailReady','isAuthenticated', 'MovieDetailLike', 'RatedMovies'])
  },
  methods: {
    popRateForm(rating){
      if(rating!==0){
        this.showRateForm = true
      }
    },
    expandOverview(){
      const overviewWrapper = document.querySelector('#overviewWrapper')
      const overviewText = document.querySelector('#overviewText')
      const moreBtn = document.querySelector('#moreBtn')

      overviewWrapper.classList.remove('height-50')
      overviewWrapper.classList.add('height-100')
      overviewText.classList.remove('overflow-hidden')
      overviewText.classList.add('overflow-auto')
      moreBtn.classList.add('d-none')
      moreBtn.classList.remove('d-block')

    },
    likeMovie(){
      if(this.isAuthenticated){
        this.$store.dispatch('likeMovie', this.MovieDetail.movie.id)
      } else {
        alert('로그인이 필요한 서비스입니다.')
      }
    },
    goToReview(){
      const detailClose = document.querySelector('#detailClose')
      detailClose.click()
      this.$store.dispatch('goToReview', this.MovieDetail)
    }
  },
  mounted(){
    if(this.MovieDetail&&!!Object.keys(this.MovieDetail).length){
    this.current = this.MovieDetail.movie.id  
    }
  },
  updated(){

    // rating 0 초기화
    this.before = this.current
    this.current = this.MovieDetail.movie.id  
    console.log('이전영화, 현재영화',this.before, this.current)
    if (this.before !== this.current){  // 다른 영화를 모달로 켰을 때 초기화
      this.showRateForm = false
      this.rating = 0
    }

    //overview expand 초기화
    const overviewWrapper = document.querySelector('#overviewWrapper')
    const overviewText = document.querySelector('#overviewText')
    const moreBtn = document.querySelector('#moreBtn')

    overviewWrapper.classList.add('height-50')
    overviewWrapper.classList.remove('height-100')
    overviewText.classList.add('overflow-hidden')
    overviewText.classList.remove('overflow-auto')
    moreBtn.classList.remove('d-none')
    moreBtn.classList.add('d-block')
  }
}
</script>

<style scoped>
  .modal-content {
    height: 100%;
		overflow-y: auto;
    background-color: rgba(151, 157, 166, 0.8);
  }

  .detail-mainboard {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 1rem;
    border-radius: 10px 10px 0 0;
  }

  .detail-mainboard .detail-rate {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px 10px 0 0;
  }

  .detail-mainboard .detail-other-rate{
    background-color: rgba(255, 255, 255, 0.8);
  }

  .detail-mainboard .detail-movie-info {
    margin-top: 2rem;
    width: 100%;
    height: 30vh;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .detail-movie-spec {
    height: 8vh;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .spec-item{
    border-right: 1px dashed gray;
    padding-right: 1rem;
    margin-top : 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .spec-title{
    text-align: right;
    margin-bottom: 0.2rem;
    font-size: 0.8rem
  }

  .spec-detail{
    text-align: right;
    font-size: 0.7rem;
    margin-bottom: 0;
  }

  .detail-mainboard .detail-movie-info .detail-movie-overview {
    font-size: 0.8rem;
  }

  .height-50 {
    height: 30%;
  }

  .height-100 {
    height: 100%;
  }

  .overflow-hidden {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .overflow-auto {
    height: 20vh;
    overflow:auto;
  }

  .star {
    margin-top: 0.5rem;
  }
 
  .movie-img-background {
    position: relative;
    width: 100%;
    height: 15rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    opacity: 0.8;
  }

  .movie-img-background .movie-img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 55%;
    background-color: rgba(242, 238, 179, 0.7);
  }

  .movie-img-background .movie-img .movie-poster {
    position: absolute;
    bottom: 0;
    margin-left: 0.5rem;
    width: 6rem;
    height: 8rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .movie-img-background .movie-img .movie-title {
    position: absolute;
    bottom: 0;
    left: 7rem;
  }

  .movie-img-background .movie-img .movie-like {
    position: absolute;
    top:0;
    right: 1rem;
  }

  .movie-img-background .movie-img .movie-title .movie-title-detail {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .btn-write {
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-write:hover {
    background-color: #F2EEB3;
    color: #68788C;
    border: 1px solid #68788C ;
  }
</style>