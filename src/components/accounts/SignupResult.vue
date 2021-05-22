<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="card-wrapper d-flex justify-content-center">
          <div class="card result mt-3" style="width: 25em;">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                <p class="card-header-text">분석 결과 당신의 이름은,</p>
                <div class="share d-flex align-items-start">
                  <button type="button" class="btn btn-share" data-bs-toggle="tooltip" data-bs-placement="top" title="카카오톡으로 공유">
                    <i class="fas fa-share-square share-icon"></i></button>
                </div>
              </div>
              <img src="https://t1.daumcdn.net/cfile/tistory/2467D839578799D634" class="card-img-top" alt="character-img">
            </div>
            <div class="card-body">
              <p class="card-text text-center h4 fw-bold">{{Nickname}}</p>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 ms-3 me-3 mt-3">
          <button class="btn btn-review" type="button">한마디 남기러 가기</button>
        </div>
      </div>
      <div class="col-2"> 
      </div>
    </div> 
    <div class="row mt-5">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="series-wrapper">
          <MovieSlider/>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MovieSlider from '@/components/movies/MovieSlider.vue'
export default {
  name: 'SignupResult',
  components: {
    MovieSlider,
  },
  computed: {
    ...mapGetters(['Nickname',])
  },
}
</script>

<style scoped>
  .series-wrapper{
    height: 30vh;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
    overflow: auto;
  }

  .result {
    background-color: rgba(151, 157, 166, 0.2);
  }

  .card-header-text {
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  .card-img-top {
    border-radius: 10px;
  }

  .btn-review {
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-review:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }

  .btn-share:hover {
    background-color: #F2EEB3;
  }
</style>