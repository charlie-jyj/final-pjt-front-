<template>
    <div id="signupModal" class="modal right fade" tabindex="-1"  role="dialog" aria-labelledby="signupModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">회원가입</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <SignupForm v-if="step1" @create-user="showMovieSurvey"/>
            <SignupMovieList v-if="step2" @complete-movie-survey="showCharacterSurvey"/>
            <SignupSurvey v-if="step3" @complete-all-survey="showResult"/>
            <SignupResult v-if="step4"/>
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
import SignupSurvey from '@/components/accounts/SignupSurvey.vue'
import SignupResult from '@/components/accounts/SignupResult.vue'
import { mapActions} from 'vuex'

export default {
  name: 'SignupBase',
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    }
  },
  components: {
    SignupForm, SignupMovieList, SignupSurvey, SignupResult
  },
  methods: {
    showMovieSurvey(){
      console.log('유저가 만들어졌다는 소문을 들었어')
      this.step1 = false
      this.step2 = true
      this.getAllMovies()
    },
    ...mapActions(['getAllMovies']),
    showCharacterSurvey(){
      console.log('좋아하는 시리즈가 무엇인지 나는 알게되었어')
      this.step2 = false
      this.step3 = true
    },
    showResult(){
      console.log('닉네임이 정해졌어')
      this.step3 = false
      this.step4 = true
    }
  },
  computed: {
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