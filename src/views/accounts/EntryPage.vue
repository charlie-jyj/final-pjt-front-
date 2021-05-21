<template>
  <div>
    <video autoplay loop muted id="myVideo">
      <source src="@/assets/images/main/video3.mp4" type="video/mp4">
    </video>
    <div class="door row">
      <div class="col-12 col-md-2"></div>
      <div class="col-12 col-md-8 board">
        <div class="row mt-3">
          <div class="col-1"></div>
          <div class="col-10">
            <img class="logo" src="@/assets/logo/logo_custom.png" alt="">
            <p class="slogan text-center">당신과 나의 우주를 찾아서</p>
          </div>
          <div class="col-1"></div>
        </div>
        <div class="row mt-2 mb-4">
          <div class="d-grid gap-2 mx-auto">
            <button class="btn btn-start" type="button" data-bs-toggle="modal" data-bs-target="#signupModal">시작하기</button>
            <button class="btn btn-login mt-1" type="button">로그인</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2"></div>
    </div>  
    <SignupBase/>
  </div>
    
</template>

<script>
import SignupBase from '@/components/accounts/SignupBase.vue'

export default {
  name: 'EntryPage',
  components: {
    SignupBase,
  },
}
</script>

<style scoped>
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 80%;
  }

  .door{
   position: absolute;
   top: 10%;
  }
  
  .board {
    margin-top: 15vh;
    background-color:rgba(255, 255, 255, 0.3);
    height: 100%;
    border-radius: 15px 15px 15px 15px;
  }

  .logo {
    width: 100%;
    opacity: 1;
  }

  .slogan {
    color: rgba(255, 255, 255, 1);
    font-size: 1rem;
  }

  .btn-start {
    background-color: #F2D64B;
    color: #68788C;
  }

  .btn-start:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }

  .btn-login {
    background-color: rgba(151, 157, 166, 1);
    color: rgba(255, 255, 255, 1);
  }

  .btn-login:hover {
    background-color: #F2EEB3;
    color: #68788C;
  }
</style>