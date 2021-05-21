<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="row form-wrapper">
            <div class="col-1"></div>
            <div class="col-10">
               <div class="mt-5">
                  <div class="form-floating mb-3">
                    <input v-model="signupInfo.username" type="email" class="form-control" id="email" placeholder="name@domain.com">
                    <label for="floatingInput">이메일</label>
                    <div class="invalid-feedback">
                      이메일 형식으로 입력해주세요.
                    </div>
                    <div class="valid-feedback">
                      존재하는 이메일이라고 믿을게요.
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <input v-model="signupInfo.password1" type="password" class="form-control" id="password1" placeholder="비밀번호를 입력해주세요">
                    <label for="floatingPassword1">비밀번호</label>
                  </div>
                  <div class="form-floating">
                    <input v-model="signupInfo.password2" type="password" class="form-control" id="password2" placeholder="비밀번호를 확인해주세요">
                    <label for="floatingPassword2">비밀번호 확인</label>
                    <div class="invalid-feedback">
                      비밀번호를 다시 확인해보세요
                    </div>
                  </div>
              </div>
              <div class="d-grid gap-2 mx-auto mt-5">
                <button @click="signupFormComplete" class="btn btn-next" type="button">NEXT</button>
              </div>
            </div>
            <div class="col-1"></div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'SignupForm',
  data() {
    return {
      signupInfo : {
        username: '',
        password1: '',
        password2: '',
      },
      emailCheck: true,
      passwordCheck: true,
    }
  },
  methods: {
    signupFormComplete(){
   
      const emailForm = document.querySelector('#email')
      const passwordForm = document.querySelector('#password2')
      let checkEmail = false
      let checkPassword = false

      if( this.isEmailValid){
        emailForm.classList.remove('is-invalid')
        emailForm.classList.add('is-valid')
        checkEmail = true
      } else {
        emailForm.classList.remove('is-valid')
        emailForm.classList.add('is-invalid')
        checkEmail = false
      }

      if (this.isPwdVaild){
        passwordForm.classList.add('is-valid')
        passwordForm.classList.remove('is-invalid')
        checkPassword = true
      }else {
        passwordForm.classList.remove('is-valid')
        passwordForm.classList.add('is-invalid')
        checkPassword = false
      }

      if(checkEmail&&checkPassword){
        this.createUser(this.signupInfo)
        this.$emit('create-user')
      }  
    },
    ...mapActions(['createUser'])
  },
  computed: {
    isEmailValid(){
      const email = this.signupInfo.username
      return email.includes('@')?true:false
    },
    isPwdVaild(){
      const pwd1 = this.signupInfo.password1
      const pwd2 = this.signupInfo.password2
      return (pwd1 === pwd2) && pwd1 && pwd2? true: false
    },
  }
}


</script>

<style scope>
  label {
    color: gray;
  }

  .form-wrapper {

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