<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="card-wrapper d-flex justify-content-center">
          <div class="card result mt-3" style="width: 25em;">
            <div class="card-header">
              <div class="d-flex justify-content-between">
                <p class="card-header-text">당신의 이름은,</p>
                <div class="share d-flex align-items-start">
                  <button @click="kakaoShare" type="button" class="btn btn-share" data-bs-toggle="tooltip" data-bs-placement="top" title="카카오톡으로 공유">
                    <i class="fas fa-share-square share-icon"></i></button>
                </div>
              </div>
              <img :src="UserImg" class="card-img-top" alt="character-img">
            </div>
            <div class="card-body">
              <p class="card-text text-center h4 fw-bold">{{Nickname}}</p>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 ms-3 me-3 mt-3">
          <button @click="goToReview" class="btn btn-review" type="button">한마디 남기러 가기</button>
        </div>
      </div>
      <div class="col-2"> 
      </div>
    </div> 
    <div class="row series-wrapper">
      <div class="col-1"></div>
      <div class="col-10">
        <p class="text-center series-title">"{{Nickname}}"에게 추천하는 영화 ({{MovieSeries.length}})</p>
        <MovieSlider/>
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
    ...mapGetters(['Nickname', 'MovieSeries', 'UserImg'])
  },
  methods: {
    goToReview(){
      const signUpModalClose = document.querySelector('#signUpModalClose')
      signUpModalClose.click()
      this.$router.push({name:'ReviewPage'})
    },
    kakaoShare(){
      console.log(window.Kakao)
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: this.Nickname+'이(가) 보냅니다.',
          description: '무야호~ 당신을 초대합니다.',
          imageUrl:
            this.UserImg,
          link: {
            mobileWebUrl: 'http://movie-pick.com/',
            webUrl: 'http://movie-pick.com/',
            androidExecParams: 'test',
          },
        },
        social: {
          likeCount: 10,
          commentCount: 20,
          sharedCount: 30,
        },
        buttons: [
          {
            title: '웹으로 이동',
            link: {
              mobileWebUrl: 'http://movie-pick.com/',
              webUrl: 'http://movie-pick.com/',
            },
          },
          {
            title: '앱으로 이동',
            link: {
              mobileWebUrl: 'http://movie-pick.com/',
              webUrl: 'http://movie-pick.com/',
            },
          },
        ]
});
    }
  },
}
</script>

<style scoped>
  .series-wrapper{
    margin-top: 5rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
    overflow: auto;
  }

  .series-title {
    margin-top: 1rem;
    margin-bottom: 0rem;
    color: white
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