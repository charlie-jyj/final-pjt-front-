<template>
    <div id="signupModal" class="modal right fade" tabindex="-1"  role="dialog" aria-labelledby="signupModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">회원가입</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <SignupForm v-show="step1" @create-user="showMovieSurvey"/>
            <SignupMovieList v-show="step2"/>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SignupForm from '@/components/accounts/SignupForm.vue'
import SignupMovieList from '@/components/accounts/SignupMovieList.vue'

export default {
  name: 'SignupBase',
  data() {
    return {
      step1: true,
      step2: false,
    }
  },
  components: {
    SignupForm, SignupMovieList
  },
  methods: {
    showMovieSurvey(){
      console.log('유저가 만들어졌다는 소문을 들었어')
      this.step1 = false
      this.step2 = true
    }
  }
}
</script>

<style>
  .modal.right .modal-dialog {
    position: fixed;
		margin: auto;
		width:100%;
		height: 100%;
		-webkit-transform: translate3d(0%, 0, 0);
		-ms-transform: translate3d(0%, 0, 0);
		-o-transform: translate3d(0%, 0, 0);
		transform: translate3d(0%, 0, 0);
    }

  .modal.right .modal-content {
    height: 100%;
		overflow-y: auto;
    background-color: rgba(242, 238, 179, 0.8);
    }

	.modal.right .modal-body {
		padding: 15px 15px 80px;
	}

  .modal.right.fade .modal-dialog {
    right: 0px;
		-webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
		-moz-transition: opacity 0.3s linear, right 0.3s ease-out;
		-o-transition: opacity 0.3s linear, right 0.3s ease-out;
		transition: opacity 0.3s linear, right 0.3s ease-out;
    }

  .modal.right.fade.in .modal-dialog {
    right: 0;
    }
</style>