<template>
    <div id="loginModal" class="modal right fade" tabindex="-1"  role="dialog" aria-labelledby="signupModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">로그인</h5>
            <button type="button" id="loginClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container mt-5">
              <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                     <div class="row form-wrapper mt-5">
                      <div class="col-1"></div>
                      <div class="col-10">
                        <div class="mt-5">
                            <div class="form-floating mb-3">
                              <input v-model="loginInfo.username" type="email" class="form-control" id="username" placeholder="name@domain.com">
                              <label for="floatingInput">이메일</label>
                               <div class="invalid-feedback">
                                이메일 형식으로 입력해주세요.
                              </div>
                            </div>
                            <div class="form-floating mb-3">
                              <input @keypress.enter="login" v-model="loginInfo.password" type="password" class="form-control" id="password" placeholder="비밀번호를 입력해주세요">
                              <label for="floatingPassword1">비밀번호</label>
                               <div class="invalid-feedback">
                                비밀번호를 다시 확인해보세요
                              </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 mx-auto mt-5">
                          <button @click="login" class="btn btn-next" type="button">LOGIN</button>
                        </div>
                      </div>
                      <div class="col-1"></div>
                    </div>
                </div>
                <div class="col-2"></div>
              </div>
            </div>
            
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return {
      loginInfo: {
        username:'',
        password:'',
      }
    }
  },
  methods: {
    login(){
      console.log(this.loginInfo.username, this.loginInfo.password)
      const loginInfo = {
        username: this.loginInfo.username,
        password: this.loginInfo.password
      }

      const usernameInput = document.querySelector('#username')
      const passwordInput = document.querySelector('#password')
      let usernamePass = false
      let passwordPass = false 
      if(loginInfo.username.includes('@')){
        usernamePass = true
        usernameInput.classList.add('is-valid')
        usernameInput.classList.remove('is-invalid')
      }else{
        usernamePass = false
        usernameInput.classList.add('is-invalid')
        usernameInput.classList.remove('is-valid')
      }

      if(loginInfo.password){
        passwordPass = true
        passwordInput.classList.add('is-valid')
        passwordInput.classList.remove('is-invalid')
      }else{
        passwordPass = false
        passwordInput.classList.add('is-invalid')
        passwordInput.classList.remove('is-valid')
      }

      if(usernamePass&passwordPass){
        document.querySelector("#loginClose").click()
        this.$store.dispatch('login', loginInfo)
      }

    }
  }
}
</script>

<style scoped>
 label {
    color: gray;
  }

  .form-wrapper {
    height: 55vh;
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